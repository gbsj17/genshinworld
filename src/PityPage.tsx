import { useState } from 'react'
import { saveLocal } from './store'
import { t } from './i18n'
import MenuButton from './MenuButton'
import PcNav from './PcNav'
import TabBar from './TabBar'
import './tools.css'

type Banner = 'character' | 'weapon' | 'standard'

interface State {
  pity: number // tiragens desde o último 5★
  total: number // tiragens registradas neste banner
  guaranteed: boolean // o próximo 5★ é o destaque garantido
  fives: { at: number; featured: boolean }[] // histórico de 5★ (em quantas tiragens veio)
}

// Pity suave (a chance sobe) e pity máximo (5★ garantido) de cada banner.
const RULES: Record<Banner, { soft: number; hard: number }> = {
  character: { soft: 74, hard: 90 },
  weapon: { soft: 63, hard: 80 },
  standard: { soft: 74, hard: 90 },
}

const KEY = 'genshinworld:pity'
const PRIMOS_PER_PULL = 160
const EMPTY: State = { pity: 0, total: 0, guaranteed: false, fives: [] }

function load(): Record<Banner, State> {
  const base = { character: EMPTY, weapon: EMPTY, standard: EMPTY }
  try {
    const raw = localStorage.getItem(KEY)
    const v = raw ? (JSON.parse(raw) as Partial<Record<Banner, State>>) : {}
    for (const b of Object.keys(base) as Banner[]) {
      const s = v[b]
      if (s && Number.isFinite(s.pity) && Number.isFinite(s.total) && Array.isArray(s.fives)) base[b] = { ...EMPTY, ...s }
    }
  } catch {
    // sem armazenamento ou dado corrompido: começa do zero
  }
  return base
}

function save(all: Record<Banner, State>) {
  try {
    saveLocal(KEY, JSON.stringify(all))
  } catch {
    // sem armazenamento disponível: vale só até fechar a página
  }
}

// Contador de pity: a pessoa anota as tiragens e vê quanto falta para o pity suave e o garantido.
export default function PityPage() {
  const [all, setAll] = useState(load)
  const [banner, setBanner] = useState<Banner>('character')
  const [undo, setUndo] = useState<State[]>([])
  const s = all[banner]
  const { soft, hard } = RULES[banner]
  const hasGuarantee = banner !== 'standard'

  const apply = (next: State) => {
    setUndo((u) => [...u.slice(-49), s])
    setAll((a) => {
      const n = { ...a, [banner]: next }
      save(n)
      return n
    })
  }

  const pull = (n: number) => {
    // nunca passa do pity máximo: no 90 (ou 80) o 5★ é certo, então o contador para
    const add = Math.min(n, hard - 1 - s.pity)
    if (add > 0) apply({ ...s, pity: s.pity + add, total: s.total + add })
  }
  const five = (featured: boolean) =>
    apply({
      pity: 0,
      total: s.total + 1,
      // perdeu o 50/50 → o próximo é garantido; ganhou ou veio o garantido → volta ao 50/50
      guaranteed: hasGuarantee && !featured,
      fives: [{ at: s.pity + 1, featured }, ...s.fives].slice(0, 30),
    })
  const back = () => {
    const prev = undo[undo.length - 1]
    if (!prev) return
    setUndo((u) => u.slice(0, -1))
    setAll((a) => {
      const n = { ...a, [banner]: prev }
      save(n)
      return n
    })
  }
  const reset = () => {
    if (!window.confirm(t('pityResetAsk'))) return
    apply(EMPTY)
  }

  const toSoft = Math.max(0, soft - s.pity - 1)
  const toHard = hard - s.pity
  const banners: Banner[] = ['character', 'weapon', 'standard']

  return (
    <>
      <PcNav active={null} />
      <main className="screen home tool">
        <header className="home-top">
          <div>
            <h1 className="home-title">Genshin World</h1>
            <span className="home-cap">{t('capPity')}</span>
          </div>
          <MenuButton />
        </header>

        <div className="tool__body farm">
          <h1 className="tool__title">{t('pity')}</h1>
          <div className="chips farm__days" role="group" aria-label={t('pityBanner')}>
            {banners.map((b) => (
              <button key={b} className="pill" aria-pressed={banner === b} onClick={() => { setBanner(b); setUndo([]) }}>
                {t(b === 'character' ? 'pityChar' : b === 'weapon' ? 'pityWeapon' : 'pityStandard')}
              </button>
            ))}
          </div>

          <section className="pity__now" aria-live="polite">
            <b key={`${s.pity}:${s.total}`} className="pity__count">{s.pity}</b>
            <span>{t('pityCount')}</span>
            <div className={s.pity + 1 >= soft ? 'pity__bar pity__bar--soft' : 'pity__bar'} role="img" aria-label={`${s.pity}/${hard}`}>
              <i style={{ width: `${(s.pity / hard) * 100}%` }} />
              <em style={{ left: `${(soft / hard) * 100}%` }} />
            </div>
            <p>{toSoft > 0 ? t('pityToSoft', { n: toSoft, soft }) : t('pityInSoft', { soft })}</p>
            <p>{t('pityToHard', { n: toHard })}</p>
            {s.pity + 1 >= soft && <p className="pity__flag">{t('pitySoftNow')}</p>}
            {hasGuarantee && <p className="pity__flag">{s.guaranteed ? t('pityGuaranteed') : t('pityFifty')}</p>}
            <p className="tool__muted">{t('pityCost', { n: (s.pity * PRIMOS_PER_PULL).toLocaleString(), total: s.total })}</p>
          </section>

          <div className="pity__btns">
            <button className="tool-btn" onClick={() => pull(1)}>+1</button>
            <button className="tool-btn" onClick={() => pull(10)}>+10</button>
            {hasGuarantee ? (
              <>
                <button className="tool-btn" onClick={() => five(true)}>{t('pityGotFeatured')}</button>
                <button className="tool-btn" onClick={() => five(false)}>{t('pityGotOther')}</button>
              </>
            ) : (
              <button className="tool-btn" onClick={() => five(true)}>{t('pityGot5')}</button>
            )}
            <button className="tool-btn tool-btn--ghost" onClick={back} disabled={undo.length === 0}>{t('pityUndo')}</button>
            <button className="tool-btn tool-btn--ghost" onClick={reset}>{t('pityReset')}</button>
          </div>

          {s.fives.length > 0 && (
            <section className="mat__result">
              <h2>{t('pityHistory')}</h2>
              <ul className="pity__hist">
                {s.fives.map((f, i) => (
                  <li key={i}>
                    <b>{t('pityAt', { n: f.at })}</b>
                    {hasGuarantee && <span>{f.featured ? t('pityFeatured') : t('pityNotFeatured')}</span>}
                  </li>
                ))}
              </ul>
            </section>
          )}
          <p className="tool__muted">{t('pityNote')}</p>
        </div>

        <TabBar active={null} query="" onQuery={() => {}} noSearch />
      </main>
    </>
  )
}
