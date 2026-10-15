import { useState } from 'react'
import { t } from './i18n'
import MenuButton from './MenuButton'
import PcNav from './PcNav'
import { shareLink } from './share'
import TabBar from './TabBar'
import './tools.css'

const BASE = 'https://sg-public-api-static.hoyolab.com/common/map_user/ys_obc/v1/map'
const OFFICIAL = 'https://act.hoyolab.com/ys/app/interactive-map/index.html'

// Endereços não oficiais do mapa do HoYoLAB (map_id 2 = Teyvat). Só o primeiro foi citado por terceiros; os outros são palpites.
const TESTS = [
  { name: 'map_anchor/list', url: `${BASE}/map_anchor/list?map_id=2&app_sn=ys_obc&lang=en-us` },
  { name: 'label/tree', url: `${BASE}/label/tree?map_id=2&app_sn=ys_obc&lang=en-us` },
  { name: 'point/list', url: `${BASE}/point/list?map_id=2&app_sn=ys_obc&lang=en-us` },
]

interface Result {
  name: string
  url: string
  ok: boolean
  status?: number
  error?: string
  bytes?: number
  keys?: string[]
  sample?: string
}

// Descobre o formato de uma resposta: chaves do topo e um pedaço do primeiro item de qualquer lista que achar.
function summarize(json: unknown): { keys: string[]; sample: string } {
  const keys = json && typeof json === 'object' ? Object.keys(json as object) : []
  let list: unknown
  const find = (v: unknown, depth: number) => {
    if (list || depth > 3 || !v || typeof v !== 'object') return
    if (Array.isArray(v)) {
      if (v.length) list = v
      return
    }
    for (const x of Object.values(v)) find(x, depth + 1)
  }
  find(json, 0)
  const first = Array.isArray(list) ? list[0] : json
  return { keys, sample: JSON.stringify(first, null, 1).slice(0, 900) }
}

// Página de teste: tenta falar com o mapa do HoYoLAB direto do navegador e mostra o que veio.
export default function MapTestPage() {
  const [results, setResults] = useState<Result[] | null>(null)
  const [running, setRunning] = useState(false)
  const [copied, setCopied] = useState(false)

  const run = async () => {
    setRunning(true)
    setResults(null)
    const out: Result[] = []
    for (const test of TESTS) {
      try {
        const r = await fetch(test.url)
        const text = await r.text()
        let json: unknown
        try {
          json = JSON.parse(text)
        } catch {
          out.push({ ...test, ok: false, status: r.status, bytes: text.length, error: t('mapNotJson') })
          continue
        }
        out.push({ ...test, ok: r.ok, status: r.status, bytes: text.length, ...summarize(json) })
      } catch (e) {
        // erro de rede ou bloqueio de CORS: o navegador não diz qual dos dois
        out.push({ ...test, ok: false, error: e instanceof Error ? e.message : String(e) })
      }
    }
    setResults(out)
    setRunning(false)
  }

  const copy = async () => {
    const r = await shareLink('mapa', JSON.stringify(results, null, 2))
    if (r !== 'failed') {
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    }
  }

  return (
    <>
      <PcNav active={null} />
      <main className="screen home tool">
        <header className="home-top">
          <div>
            <h1 className="home-title">Genshin World</h1>
            <span className="home-cap">{t('capMap')}</span>
          </div>
          <MenuButton />
        </header>

        <div className="tool__body farm">
          <h1 className="tool__title">{t('mapTest')}</h1>
          <p className="tool__muted">{t('mapIntro')}</p>

          <div className="mine__acts map__acts">
            <button className="tool-btn" onClick={run} disabled={running}>{running ? t('loading') : t('mapRun')}</button>
            <a className="tool-btn tool-btn--ghost" href={OFFICIAL} target="_blank" rel="noreferrer">{t('mapOfficial')}</a>
            {results && <button className="tool-btn tool-btn--ghost" onClick={copy}>{copied ? t('linkCopied') : t('mapCopy')}</button>}
          </div>

          {results?.map((r) => (
            <section className="mat__result map__res" key={r.name}>
              <h2>
                {r.ok ? '✅' : '❌'} {r.name}
              </h2>
              <p className="tool__muted">
                {r.status ? `HTTP ${r.status}` : t('mapNoAnswer')}
                {r.bytes !== undefined && ` · ${(r.bytes / 1024).toFixed(1)} KB`}
              </p>
              {r.error && <p className="tool__muted">{r.error}</p>}
              {r.keys && <p className="tool__muted">{t('mapKeys')}: {r.keys.join(', ') || '—'}</p>}
              {r.sample && <pre className="map__pre">{r.sample}</pre>}
            </section>
          ))}
          {results && results.every((r) => !r.ok) && <p className="tool__muted">{t('mapAllFail')}</p>}
        </div>

        <TabBar active={null} query="" onQuery={() => {}} noSearch />
      </main>
    </>
  )
}
