// Depois do build: cria uma página HTML por rota (com título, descrição e endereço próprios),
// o sitemap.xml e o 404.html. O conteúdo continua sendo montado pelo app; isto só dá a cada
// endereço um HTML com os dados certos para buscadores e para quem compartilha o link.
// Os nomes de personagens, armas e conjuntos vêm da API; se ela falhar, só as páginas fixas são criadas.
import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const DIST = new URL('../dist/', import.meta.url).pathname
const SITE = 'https://gbsj17.github.io/genshinworld'
const DB = 'https://genshin-db-api.vercel.app/api/v5'
const NAME = 'Genshin World'

const STATIC = [
  ['', null, 'Personagens, builds, equipes e banners de oração de Genshin Impact.'],
  ['characters', 'Personagens', 'Todos os personagens de Genshin Impact, com filtros por elemento, arma e raridade.'],
  ['weapons', 'Armas', 'Todas as armas de Genshin Impact, com filtros por tipo e raridade.'],
  ['artifacts', 'Artefatos', 'Todos os conjuntos de artefatos de Genshin Impact.'],
  ['compare', 'Comparar', 'Compare dois personagens ou duas armas de Genshin Impact lado a lado.'],
  ['teams', 'Equipes', 'Monte equipes de até 4 personagens e veja a ressonância elemental.'],
  ['materials', 'Materiais', 'Calculadora de materiais de ascensão e talentos de Genshin Impact.'],
  ['exp', 'Calculadora de EXP', 'Quanta EXP e quantos itens para subir personagem ou arma de nível em Genshin Impact.'],
  ['farm', 'Farm de hoje', 'Domínios abertos hoje em Genshin Impact e o que cada um dá.'],
  ['wishlist', 'Lista de desejos', 'Lista de desejos de personagens e armas com a soma de materiais.'],
  ['pity', 'Contador de pity', 'Contador de pity dos banners de oração de Genshin Impact.'],
  ['codes', 'Códigos de resgate', 'Códigos de resgate ativos de Genshin Impact.'],
  ['data', 'Meus dados', 'Exportar e importar seus dados e sincronizar entre aparelhos.'],
  ['docs', 'Documentação', 'Documentação do Genshin World: como usar, tecnologias e como publicar.'],
]

const slug = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-')
const safe = /^[A-Za-z0-9 '’\-.,!&]+$/ // nomes fora disso usam o 404.html (o app abre do mesmo jeito)
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
const enc = (segs) => segs.map(encodeURIComponent).join('/')

async function names(folder, filter) {
  const r = await fetch(`${DB}/${folder}?query=names&matchCategories=true&verboseCategories=true&resultLanguage=English`)
  if (!r.ok) throw new Error(`${folder}: HTTP ${r.status}`)
  const list = await r.json()
  return list.filter((x) => x?.name && (!filter || filter(x))).map((x) => x.name)
}

async function dynamicPages() {
  let src
  if (process.env.PRERENDER_NAMES) src = JSON.parse(readFileSync(process.env.PRERENDER_NAMES, 'utf8'))
  else {
    try {
      src = {
        characters: await names('characters', (c) => c.elementType),
        weapons: await names('weapons'),
        artifacts: await names('artifacts'),
      }
    } catch (e) {
      console.log('prerender: sem a lista da API, só páginas fixas (' + e.message + ')')
      return []
    }
  }
  const pages = []
  for (const n of src.characters) pages.push([['character', slug(n)], n, `${n} em Genshin Impact: talentos, constelações, builds recomendadas e materiais.`])
  for (const n of src.weapons) if (safe.test(n)) pages.push([['weapon', n], n, `${n}: efeito, materiais de ascensão e os personagens que usam melhor, em Genshin Impact.`])
  for (const n of src.artifacts) if (safe.test(n)) pages.push([['artifact', n], n, `${n}: bônus de 2 e 4 peças, as 5 peças do conjunto e quem usa, em Genshin Impact.`])
  return pages
}

function render(template, { title, desc, path }) {
  const full = title ? `${title} | ${NAME}` : NAME
  const url = `${SITE}/${path ? path + '/' : ''}`
  return template
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(full)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(desc)}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(full)}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(desc)}$2`)
    .replace('</head>', `    <meta property="og:url" content="${esc(url)}" />\n    <link rel="canonical" href="${esc(url)}" />\n  </head>`)
}

const indexFile = join(DIST, 'index.html')
if (!existsSync(indexFile)) {
  console.log('prerender: dist/index.html não existe (rode o build antes)')
  process.exit(0)
}
const template = readFileSync(indexFile, 'utf8')

const pages = [
  ...STATIC.map(([path, title, desc]) => ({ segs: path ? [path] : [], title, desc })),
  ...(await dynamicPages()).map(([segs, title, desc]) => ({ segs, title, desc })),
]

const urls = []
for (const p of pages) {
  const dir = join(DIST, ...p.segs)
  mkdirSync(dir, { recursive: true })
  const path = enc(p.segs)
  writeFileSync(join(dir, 'index.html'), render(template, { title: p.title, desc: p.desc, path }))
  urls.push(`${SITE}/${path ? path + '/' : ''}`)
}

// Endereços que não ganharam página própria (nomes com caracteres raros, personagens novos) caem aqui
copyFileSync(indexFile, join(DIST, '404.html'))

const day = new Date().toISOString().slice(0, 10)
writeFileSync(
  join(DIST, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map((u) => `  <url><loc>${esc(u)}</loc><lastmod>${day}</lastmod></url>`).join('\n') +
    `\n</urlset>\n`,
)
console.log(`prerender: ${pages.length} páginas, sitemap.xml e 404.html`)
