import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllCharacters, getAllItems, getCosts, iconChain } from './api'
import type { CostItem, Costs, ItemEntry } from './api'
import { sum } from './costs'
import ErrorMsg from './ErrorMsg'
import { useFavorites } from './favorites'
import { t } from './i18n'
import MenuButton from './MenuButton'
import PcNav from './PcNav'
import Picker from './Picker'
import { charFacets, charFilters } from './pickFilters'
import TabBar from './TabBar'
import { Thumb } from './Thumb'
import type { CharacterSummary } from './types'
import './tools.css'

// Lista de personagens que a pessoa quer; soma o material de ascensão e talentos de todos.
export default function WishlistPage() {
  const { ids, toggle } = useFavorites('wishlist')
  const [chars, setChars] = useState<CharacterSummary[]>([])
  const [mats, setMats] = useState<ItemEntry[]>([])
  const [costs, setCosts] = useState<Record<string, Costs | null>>({})
  const [error, setError] = useState(false)
  const [picking, setPicking] = useState(false)
  const [talent, setTalent] = useState(10)

  useEffect(() => {
    let active = true
    getAllCharacters().then((l) => active && setChars(l)).catch(() => active && setError(true))
    getAllItems('materials').then((l) => active && setMats(l)).catch(() => {})
    return () => {
      active = false
    }
  }, [])

  const wished = useMemo(() => ids.map((id) => chars.find((c) => c.id === id)).filter((c): c is CharacterSummary => Boolean(c)), [ids, chars])

  // busca os custos só dos personagens que ainda não foram carregados (null = falhou)
  useEffect(() => {
    let active = true
    for (const c of wished) {
      if (c.id in costs) continue
      getCosts(c.enName)
        .then((v) => active && setCosts((m) => ({ ...m, [c.id]: v })))
        .catch(() => active && setCosts((m) => ({ ...m, [c.id]: null })))
    }
    return () => {
      active = false
    }
  }, [wished, costs])

  const loading = wished.some((c) => !(c.id in costs))
  const failed = wished.filter((c) => costs[c.id] === null).length

  const total = useMemo(() => {
    const all = new Map<number, CostItem>()
    const add = (m: Map<number, CostItem>) => {
      for (const [k, v] of m) all.set(k, { ...v, count: (all.get(k)?.count ?? 0) + v.count })
    }
    for (const c of wished) {
      const v = costs[c.id]
      if (!v) continue
      add(sum(v.ascend, 1, { from: 0, to: 6 }))
      for (let i = 0; i < 3; i++) add(sum(v.talent, 2, { from: 1, to: talent }))
    }
    const rarityOf = (name: string) => mats.find((m) => m.label === name)?.info.rarity ?? 0
    return [...all.values()].sort((a, b) => (a.id === 202 ? -1 : b.id === 202 ? 1 : rarityOf(b.name) - rarityOf(a.name) || b.count - a.count))
  }, [wished, costs, talent, mats])

  const iconFor = (name: string) => mats.find((m) => m.label === name || m.name === name)?.info.urls ?? []

  const options = chars
    .filter((c) => !ids.includes(c.id))
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((c) => ({ key: c.id, label: c.name, search: c.enName, sub: `${c.vision} · ${c.rarity}★`, thumb: iconChain(c), round: true, facets: charFacets(c) }))

  return (
    <>
      <PcNav active={null} />
      <main className="screen home tool">
        <header className="home-top">
          <div>
            <h1 className="home-title">Genshin World</h1>
            <span className="home-cap">{t('capWish')}</span>
          </div>
          <MenuButton />
        </header>

        <div className="tool__body farm">
          <h1 className="tool__title">{t('wishlist')}</h1>
          {error && <ErrorMsg text={t('loadCharsFail')} />}

          <button className="tool-btn" onClick={() => setPicking(true)}>{t('wishAdd')}</button>

          {ids.length === 0 && <p className="tool__muted wish__empty">{t('wishEmpty')}</p>}

          {wished.length > 0 && (
            <>
              <ul className="wish__list">
                {wished.map((c) => (
                  <li key={c.id}>
                    <Thumb round src={iconChain(c)} label={c.name} />
                    <span>
                      <strong>{c.name}</strong>
                      <small>{c.vision} · {c.rarity}★</small>
                    </span>
                    <Link className="tool-btn tool-btn--ghost" to={`/materials?c=${c.id}`}>{t('wishDetails')}</Link>
                    <button className="tool-btn tool-btn--ghost" onClick={() => toggle(c.id)} aria-label={`${t('remove')} ${c.name}`}>{t('remove')}</button>
                  </li>
                ))}
              </ul>

              <section className="mat__result" aria-live="polite">
                <h2>{t('matTotal')}</h2>
                <label className="mat__field wish__goal" htmlFor="wish-talent">
                  <span>{t('wishTalentGoal')}</span>
                  <select id="wish-talent" className="tool-input" value={talent} onChange={(e) => setTalent(Number(e.target.value))}>
                    {[6, 7, 8, 9, 10].map((n) => (
                      <option key={n} value={n}>{t('level', { n })}</option>
                    ))}
                  </select>
                </label>
                {failed > 0 && <ErrorMsg text={t('wishLoadFail', { n: failed })} />}
                {loading && <p className="empty">{t('loading')}</p>}
                {!loading && total.length > 0 && (
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
                <p className="tool__muted">{t('wishNote')}</p>
              </section>
            </>
          )}
        </div>

        {picking && (
          <Picker
            title={t('pickChar')}
            options={options}
            filters={charFilters(options)}
            onClose={() => setPicking(false)}
            onPick={(key) => {
              toggle(key)
              setPicking(false)
            }}
          />
        )}

        <TabBar active={null} query="" onQuery={() => {}} noSearch />
      </main>
    </>
  )
}
