import { useEffect, useMemo, useState } from 'react'
import { getAllItems } from './api'
import { MAX_LEVEL, expItems, expNeeded, expPlan } from './expCalc'
import type { ExpKind } from './expCalc'
import { t } from './i18n'
import MenuButton from './MenuButton'
import PcNav from './PcNav'
import TabBar from './TabBar'
import { Thumb } from './Thumb'
import './tools.css'

type Mat = { label: string; urls: string[]; rarity: number }

// Calculadora de EXP: de um nível a outro, quanta EXP e quantos livros/minérios.
export default function ExpPage() {
  const [kind, setKind] = useState<ExpKind>('character')
  const [from, setFrom] = useState(1)
  const [to, setTo] = useState(90)
  const [rarity, setRarity] = useState(5)
  const [mats, setMats] = useState<Map<number, Mat>>(new Map())

  useEffect(() => {
    let active = true
    getAllItems('materials')
      .then((l) => {
        if (!active) return
        const m = new Map<number, Mat>()
        for (const e of l) if (e.info.id) m.set(e.info.id, { label: e.label, urls: e.info.urls, rarity: e.info.rarity })
        setMats(m)
      })
      .catch(() => {})
    return () => {
      active = false
    }
  }, [])

  const need = useMemo(() => expNeeded(kind, from, to, rarity), [kind, from, to, rarity])
  const plan = useMemo(() => expPlan(kind, need), [kind, need])
  const items = expItems(kind)
  const levels = Array.from({ length: MAX_LEVEL }, (_, i) => i + 1)
  const fmt = (n: number) => n.toLocaleString()

  const row = (id: number, count: number, exp: number, key?: string) => {
    const m = mats.get(id)
    return (
      <li key={key ?? id}>
        <Thumb src={m?.urls ?? []} label={m?.label ?? String(id)} />
        <span>
          {m?.label ?? id}
          <small className="exp__unit">{t('expUnit', { n: fmt(exp) })}</small>
        </span>
        <b>{fmt(count)}</b>
      </li>
    )
  }

  return (
    <>
      <PcNav active={null} />
      <main className="screen home tool">
        <header className="home-top">
          <div>
            <h1 className="home-title">Genshin World</h1>
            <span className="home-cap">{t('capExp')}</span>
          </div>
          <MenuButton />
        </header>

        <div className="tool__body farm">
          <h1 className="tool__title">{t('exp')}</h1>
          <p className="tool__muted">{t('expIntro')}</p>

          <div className="chips" role="group" aria-label={t('exp')}>
            {(['character', 'weapon'] as ExpKind[]).map((k) => (
              <button key={k} className="pill" aria-pressed={kind === k} onClick={() => setKind(k)}>
                {k === 'character' ? t('expChar') : t('expWeapon')}
              </button>
            ))}
          </div>

          <div className="mat__grid">
            <label className="mat__field" htmlFor="exp-from">
              <span>{t('expFrom')}</span>
              <select id="exp-from" className="tool-input" value={from} onChange={(e) => setFrom(Number(e.target.value))}>
                {levels.map((n) => (
                  <option key={n} value={n}>{t('level', { n })}</option>
                ))}
              </select>
            </label>
            <label className="mat__field" htmlFor="exp-to">
              <span>{t('expTo')}</span>
              <select id="exp-to" className="tool-input" value={to} onChange={(e) => setTo(Number(e.target.value))}>
                {levels.map((n) => (
                  <option key={n} value={n}>{t('level', { n })}</option>
                ))}
              </select>
            </label>
            {kind === 'weapon' && (
              <label className="mat__field" htmlFor="exp-rarity">
                <span>{t('expRarity')}</span>
                <select id="exp-rarity" className="tool-input" value={rarity} onChange={(e) => setRarity(Number(e.target.value))}>
                  {[5, 4, 3, 2, 1].map((r) => (
                    <option key={r} value={r}>{r}★</option>
                  ))}
                </select>
              </label>
            )}
          </div>

          <section className="mat__result" aria-live="polite">
            {need === 0 ? (
              <p className="tool__muted">{t('expNone')}</p>
            ) : (
              <>
                <h2>{t('expTotal')}</h2>
                <p className="exp__total">{fmt(need)}</p>

                <h2>{t('expItemsTitle')}</h2>
                <ul className="mat__list">{plan.map((p) => row(p.id, p.count, p.exp))}</ul>

                <h2>{t('expOnlyOne')}</h2>
                <ul className="mat__list">
                  {items.map((it) => row(it.id, Math.ceil(need / it.exp), it.exp, `one-${it.id}`))}
                </ul>
              </>
            )}
            <p className="tool__muted">{t('expNote')}</p>
          </section>
        </div>

        <TabBar active={null} query="" onQuery={() => {}} noSearch />
      </main>
    </>
  )
}
