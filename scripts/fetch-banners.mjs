// Busca os banners de oração atuais nos anúncios oficiais da HoYoverse e salva em public/banners.json.
// Roda no GitHub Actions antes do build. Se algo falhar, mantém o arquivo anterior (não derruba o deploy).
import { writeFileSync, existsSync } from 'node:fs'

const OUT = new URL('../public/banners.json', import.meta.url)
const API = 'https://sg-hk4e-api.hoyoverse.com/common/hk4e_global/announcement/api'
const Q = 'game=hk4e&game_biz=hk4e_global&lang=en&bundle_id=hk4e_global&platform=pc&region=os_usa&level=55&uid=700000000'
const DB = 'https://genshin-db-api.vercel.app/api/v5'

const getJson = async (url) => {
  const r = await fetch(url)
  if (!r.ok) throw new Error(`${r.status} ${url}`)
  return r.json()
}

const text = (html) =>
  html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

// Acha os nomes conhecidos no texto e separa em 5★ e 4★ pelo marcador mais próximo antes do nome.
function featured(content, names) {
  const markers = [...content.matchAll(/\b([45])[-\s]?star/gi)].map((m) => ({ at: m.index, star: Number(m[1]) }))
  const masked = content.split('')
  const found = []
  for (const name of [...names].sort((a, b) => b.length - a.length)) {
    const re = new RegExp(`(?<![\\w])${escapeRe(name)}(?![\\w])`, 'i')
    const m = re.exec(masked.join(''))
    if (!m) continue
    for (let i = m.index; i < m.index + name.length; i++) masked[i] = '#'
    const before = markers.filter((x) => x.at < m.index)
    if (before.length === 0) continue
    found.push({ name, at: m.index, star: before[before.length - 1].star })
  }
  found.sort((a, b) => a.at - b.at)
  return {
    five: found.filter((f) => f.star === 5).map((f) => f.name).slice(0, 2),
    four: found.filter((f) => f.star === 4).map((f) => f.name).slice(0, 5),
  }
}

async function main() {
  const list = await getJson(`${API}/getAnnList?${Q}`)
  const anns = list.data.list.flatMap((g) => g.list)
  const tz = Number(list.data.timezone ?? 0)
  const offset = `${tz < 0 ? '-' : '+'}${String(Math.abs(tz)).padStart(2, '0')}:00`
  const iso = (t) => (t ? `${t.replace(' ', 'T')}${offset}` : null)

  const wishes = anns.filter(
    (a) => /wish|invocation/i.test(a.title) && !/chronicled|wanderlust|tips|details/i.test(a.title),
  )
  if (wishes.length === 0) throw new Error('nenhuma oração encontrada')

  const contentRes = await getJson(`${API}/getAnnContent?${Q}`)
  const contents = new Map((contentRes.data.list ?? []).map((c) => [c.ann_id, text(c.content ?? '')]))

  const [chars, weapons] = await Promise.all([
    getJson(`${DB}/characters?query=names&matchCategories=true&verboseCategories=true`),
    getJson(`${DB}/weapons?query=names&matchCategories=true&verboseCategories=true`),
  ])
  const charNames = chars.map((c) => c.name)
  const weaponNames = weapons.map((w) => w.name)

  const banners = wishes.map((a) => {
    const type = /epitome/i.test(a.title) ? 'weapon' : 'character'
    const body = contents.get(a.ann_id) ?? ''
    const f = featured(body, type === 'weapon' ? weaponNames : charNames)
    return {
      id: a.ann_id,
      title: a.title.replace(/<[^>]+>/g, ''),
      type,
      image: a.banner,
      start: iso(a.start_time),
      end: iso(a.end_time),
      five: f.five,
      four: f.four,
    }
  })

  writeFileSync(OUT, JSON.stringify({ updated: new Date().toISOString(), banners }, null, 1))
  console.log(`banners.json: ${banners.length} orações`)
}

main().catch((e) => {
  console.error('Não foi possível atualizar os banners:', e.message)
  if (!existsSync(OUT)) writeFileSync(OUT, JSON.stringify({ updated: null, banners: [] }))
})
