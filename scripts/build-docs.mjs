// Gera docs/DOCUMENTACAO.md (PT) e docs/DOCUMENTATION.md (EN) a partir de src/data/docs.json,
// a mesma fonte usada pela página de documentação do site.
import { readFileSync, writeFileSync } from 'node:fs'

const docs = JSON.parse(readFileSync(new URL('../src/data/docs.json', import.meta.url), 'utf8'))
const files = { pt: 'DOCUMENTACAO.md', en: 'DOCUMENTATION.md' }

for (const [lang, name] of Object.entries(files)) {
  const d = docs[lang]
  const out = [`# ${d.title}`, '']
  for (const s of d.sections) {
    out.push(`## ${s.title}`, '')
    for (const b of s.blocks) {
      if (b.p) out.push(b.p, '')
      if (b.ul) out.push(...b.ul.map((x) => `- ${x}`), '')
      if (b.code) out.push('```', b.code, '```', '')
    }
  }
  writeFileSync(new URL(`../docs/${name}`, import.meta.url), out.join('\n').trimEnd() + '\n')
  console.log('escrito docs/' + name)
}
