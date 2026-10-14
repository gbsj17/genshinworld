import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getAllCharacters, getAllItems, getCosts, iconChain } from './api'
import type { CostItem, Costs, ItemEntry } from './api'
import ErrorMsg from './ErrorMsg'
import { t } from './i18n'
import MenuButton from './MenuButton'
import PcNav from './PcNav'
import Picker from './Picker'
import TabBar from './TabBar'
import { Thumb } from './Thumb'
import type { CharacterSummary } from './types'
import './tools.css'

const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, Number.isFinite(n) ? n : lo))

interface Range {
  from: number
  to: number
}

// soma os custos dos níveis (from, to], ou seja, do nível seguinte ao atual até a meta
function sum(levels: CostItem[][], firstLevel: number, r: Range): Map<number, CostItem> {
  const total = new Map<number, CostItem>()
  for (let lvl = r.from + 1; lvl <= r.to; lvl++) {
    for (const it of levels[lvl - firstLevel] ?? []) {
      const prev = total.get(it.id)
      total.set(it.id, { ...it, count: (prev?.count ?? 0) + it.count })
    }
  }
  return total
}

function Select({ id, label, value, min, max, onChange, fmt }: { id: string; label: string; value: number; min: number; max: number; onChange: (n: number) => void; fmt: (n: number) => string }) {
  return (
    <label className="mat__field" htmlFor={id}>
      <span>{label}</span>
      <select id={id} className="tool-input" value={value} onChange={(e) => onChange(Number(e.target.value))}>
        {Array.from({ length: max - min + 1 }, (_, i) => min + i).map((n) => (
          <option key={n} value={n}>{fmt(n)}</option>
        ))}
      </select>
    </label>
  )
}

// Calcula quanto material falta para a ascensão e os 3 talentos de um personagem.
export default function MaterialsPage() {
  const [params, setParams] = useSearchParams()
  const id = params.get('c') ?? ''
  const [chars, setChars] = useState<CharacterSummary[]>([])
  const [mats, setMats] = useState<ItemEntry[]>([])
  const [costs, setCosts] = useState<Costs | null>(null)
  const [failed, setFailed] = useState(false)
  const [error, setError] = useState(false)
  const [picking, setPicking] = useState(false)
  const [asc, setAsc] = useState<Range>({ from: 0, to: 6 })
  const [tal, setTal] = useState<Range[]>([{ from: 1, to: 10 }, { from: 1, to: 10 }, { from: 1, to: 10 }])

  useEffect(() => {
    let active = true
    getAllCharacters().then((l) => active && setChars(l)).catch(() => active && setError(true))
    getAllItems('materials').then((l) => active && setMats(l)).catch(() => {})
    return () => {
      active = false
    }
  }, [])

  const char = chars.find((c) => c.id === id)

  useEffect(() => {
    if (!char) return
    let active = true
    getCosts(char.enName)
      .then((c) => {
        if (!active) return
        setFailed(false)
        setCosts(c)
      })
      .catch(() => active && setFailed(true))
    return () => {
      active = false
    }
  }, [char])

  const total = useMemo(() => {
    if (!costs) return []
    const all = new Map<number, CostItem>()
    const add = (m: Map<number, CostItem>) => {
      for (const [k, v] of m) all.set(k, { ...v, count: (all.get(k)?.count ?? 0) + v.count })
    }
    add(sum(costs.ascend, 1, asc))
    for (const r of tal) add(sum(costs.talent, 2, r))
    // Mora primeiro; o resto, do mais raro para o mais comum
    const rarityOf = (name: string) => mats.find((m) => m.label === name)?.info.rarity ?? 0
    return [...all.values()].sort((a, b) => (a.id === 202 ? -1 : b.id === 202 ? 1 : rarityOf(b.name) - rarityOf(a.name) || b.count - a.count))
  }, [costs, asc, tal, mats])

  const iconFor = (name: string) => mats.find((m) => m.label === name || m.name === name)?.info.urls ?? []

  const options = [...chars]
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((c) => ({ key: c.id, label: c.name, search: c.enName, sub: `${c.vision} · ${c.rarity}★`, thumb: iconChain(c), round: true }))

  const setTalent = (i: number, patch: Partial<Range>) =>
    setTal((list) =>
      list.map((r, j) => {
        if (j !== i) return r
        const from = clamp(patch.from ?? r.from, 1, 10)
        const to = clamp(patch.to ?? r.to, 1, 10)
        return { from, to: Math.max(from, to) }
      }),
    )

  const talentNames = [t('skillNormal'), t('skillSkill'), t('skillBurst')]

  return (
    <>
      <PcNav active={null} />
      <main className="screen home tool">
        <header className="home-top">
          <div>
            <h1 className="home-title">Genshin World</h1>
            <span className="home-cap">{t('capMaterials')}</span>
          </div>
          <MenuButton />
        </header>

        <div className="tool__body">
          <h1 className="tool__title">{t('materials')}</h1>
          {error && <ErrorMsg text={t('loadCharsFail')} />}

          <div className="mat__char">
            {char ? <Thumb round src={iconChain(char)} label={char.name} /> : <div className="thumb thumb--empty" aria-hidden="true">?</div>}
            <div>
              <small>{t('matChar')}</small>
              <strong>{char ? char.name : t('matPick')}</strong>
            </div>
            <button className="tool-btn" onClick={() => setPicking(true)}>{char ? t('swap') : t('pickChar')}</button>
          </div>

          {char && (
            <>
              <div className="mat__grid">
                <fieldset className="mat__box">
                  <legend>{t('matAscension')}</legend>
                  <Select id="asc-from" label={t('matFrom')} value={asc.from} min={0} max={6} fmt={(n) => t('phase', { n })} onChange={(n) => setAsc((r) => ({ from: n, to: Math.max(n, r.to) }))} />
                  <Select id="asc-to" label={t('matTo')} value={asc.to} min={asc.from} max={6} fmt={(n) => t('phase', { n })} onChange={(n) => setAsc((r) => ({ ...r, to: n }))} />
                </fieldset>
                {tal.map((r, i) => (
                  <fieldset className="mat__box" key={i}>
                    <legend>{talentNames[i]}</legend>
                    <Select id={`tal-${i}-from`} label={t('matFrom')} value={r.from} min={1} max={10} fmt={(n) => t('level', { n })} onChange={(n) => setTalent(i, { from: n })} />
                    <Select id={`tal-${i}-to`} label={t('matTo')} value={r.to} min={r.from} max={10} fmt={(n) => t('level', { n })} onChange={(n) => setTalent(i, { to: n })} />
                  </fieldset>
                ))}
              </div>

              <section className="mat__result" aria-live="polite">
                <h2>{t('matTotal')}</h2>
                {failed && <ErrorMsg text={t('matLoadFail')} />}
                {!failed && !costs && <p className="empty">{t('loading')}</p>}
                {costs && total.length === 0 && <p className="tool__muted">{t('matNone')}</p>}
                {total.length > 0 && (
                  <ul className="mat__list">
                    {total.map((it) => (
                      <li key={it.id}>
                        <Thumb src={iconFor(it.name)} label={it.name} />
                        <span>{it.name}</span>
                        <b>{it.count.toLocaleString()}</b>
                      </li>
                    ))}
                  </ul>
                )}
                <p className="tool__muted">{t('matNote')}</p>
              </section>
            </>
          )}
        </div>

        {picking && (
          <Picker
            title={t('pickChar')}
            options={options}
            onClose={() => setPicking(false)}
            onPick={(key) => {
              setCosts(null)
              setParams(new URLSearchParams({ c: key }), { replace: true })
              setPicking(false)
            }}
          />
        )}

        <TabBar active={null} query="" onQuery={() => {}} noSearch />
      </main>
    </>
  )
}
