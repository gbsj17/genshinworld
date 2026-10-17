// Baixa os códigos de resgate ativos de fontes da comunidade e salva em public/codes.json.
// Roda no GitHub Actions antes do build. Se nenhuma fonte responder (ou vier vazio), mantém o arquivo anterior.
import { writeFileSync, existsSync } from 'node:fs'

const OUT = new URL('../public/codes.json', import.meta.url)

const SOURCES = [
  {
    name: 'api.ennead.cc',
    url: 'https://api.ennead.cc/mihoyo/genshin/codes',
    // { active: [{ code, rewards: [..] }], inactive: [...] }
    parse: (d) => (Array.isArray(d?.active) ? d.active : []).map((c) => ({ code: c.code, rewards: c.rewards })),
  },
  {
    name: 'hoyo-codes.seria.moe',
    url: 'https://hoyo-codes.seria.moe/codes?game=genshin',
    // { codes: [{ code, rewards, status? }] }
    parse: (d) =>
      (Array.isArray(d?.codes) ? d.codes : [])
        .filter((c) => !c.status || String(c.status).toUpperCase() === 'OK' || String(c.status).toLowerCase() === 'active')
        .map((c) => ({ code: c.code, rewards: c.rewards })),
  },
]

const rewardList = (r) =>
  (Array.isArray(r) ? r : typeof r === 'string' ? r.split(/[,;]|\band\b/i) : [])
    .map((x) => String(x).replace(/\s+/g, ' ').trim())
    .filter(Boolean)
    .slice(0, 8)

async function main() {
  for (const src of SOURCES) {
    try {
      const r = await fetch(src.url, { headers: { accept: 'application/json' } })
      if (!r.ok) throw new Error(`HTTP ${r.status}`)
      const raw = await r.json()
      const seen = new Set()
      const codes = []
      for (const c of src.parse(raw)) {
        const code = String(c.code ?? '').trim().toUpperCase()
        if (!/^[A-Z0-9]{6,20}$/.test(code) || seen.has(code)) continue
        seen.add(code)
        codes.push({ code, rewards: rewardList(c.rewards) })
      }
      console.log(`${src.name}: ${codes.length} código(s)`)
      if (codes.length === 0) continue
      writeFileSync(OUT, JSON.stringify({ updatedAt: new Date().toISOString(), source: src.name, codes }, null, 2) + '\n')
      return
    } catch (e) {
      console.log(`${src.name}: falhou (${e.message})`)
    }
  }
  console.log(existsSync(OUT) ? 'Nenhuma fonte respondeu; mantendo codes.json anterior.' : 'Nenhuma fonte respondeu e não há codes.json.')
}

main().catch((e) => console.log('fetch-codes:', e.message))
