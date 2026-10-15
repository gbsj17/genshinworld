import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllCharacters, getAllItems, getCosts, getWeaponCosts, iconChain } from './api'
import type { CostItem, Costs, ItemEntry } from './api'
import { sum } from './costs'
import ErrorMsg from './ErrorMsg'
import { useFavorites } from './favorites'
import { t } from './i18n'
import MenuButton from './MenuButton'
import PcNav from './PcNav'
import Picker from './Picker'
import { charFacets, charFilters, weaponFacets, weaponFilters } from './pickFilters'
import TabBar from './TabBar'
import { useMaterialSheet } from './useMaterialSheet'
import { Thumb } from './Thumb'
import type { CharacterSummary } from './types'
import './tools.css'

// Lista de personagens que a pessoa quer; soma o material de ascensão e talentos de todos.
export default function WishlistPage() {
  const { ids, toggle } = useFavorites('wishlist')
  const weaponWish = useFavorites('wishweapons')
  const [chars, setChars] = useState<CharacterSummary[]>([])
  const { openMat, matSheet } = useMaterialSheet()
  const [mats, setMats] = useState<ItemEntry[]>([])
  const [weapons, setWeapons] = useState<ItemEntry[]>([])
  const [costs, setCosts] = useState<Record<string, Costs | null>>({})
  const [error, setError] = useState(false)
  const [picking, setPicking] = useState<'char' | 'weapon' | null>(null)
  const [wCosts, setWCosts] = useState<Record<string, CostItem[][] | null>>({})
  const [talent, setTalent] = useState(10)

  useEffect(() => {
    let active = true
    getAllCharacters().then((l) => active && setChars(l)).catch(() => active && setError(true))
    getAllItems('materials').then((l) => active && setMats(l)).catch(() => {})
    getAllItems('weapons').then((l) => active && setWeapons(l)).catch(() => {})
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

  const wishedWeapons = useMemo(() => weaponWish.ids.map((n) => weapons.find((w) => w.name === n)).filter((w): w is ItemEntry => Boolean(w)), [weaponWish.ids, weapons])

  useEffect(() => {
    let active = true
    for (const w of wishedWeapons) {
      if (w.name in wCosts) continue
      getWeaponCosts(w.name)
        .then((v) => active && setWCosts((m) => ({ ...m, [w.name]: v })))
        .catch(() => active && setWCosts((m) => ({ ...m, [w.name]: null })))
    }
    return () => {
      active = false
    }
  }, [wishedWeapons, wCosts])

  const loading = wished.some((c) => !(c.id in costs)) || wishedWeapons.some((w) => !(w.name in wCosts))
  const failed = wished.filter((c) => costs[c.id] === null).length + wishedWeapons.filter((w) => wCosts[w.name] === null).length

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
    for (const w of wishedWeapons) {
      const v = wCosts[w.name]
      if (v) add(sum(v, 1, { from: 0, to: 6 }))
    }
    const rarityOf = (name: string) => mats.find((m) => m.label === name)?.info.rarity ?? 0
    return [...all.values()].sort((a, b) => (a.id === 202 ? -1 : b.id === 202 ? 1 : rarityOf(b.name) - rarityOf(a.name) || b.count - a.count))
  }, [wished, costs, talent, mats, wishedWeapons, wCosts])

  const iconFor = (name: string) => mats.find((m) => m.label === name || m.name === name)?.info.urls ?? []

  const options = chars
    .filter((c) => !ids.includes(c.id))
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((c) => ({ key: c.id, label: c.name, search: c.enName, sub: `${c.vision} · ${c.rarity}★`, thumb: iconChain(c), round: true, facets: charFacets(c) }))

  const weaponOptions = weapons
    .filter((w) => !weaponWish.ids.includes(w.name))
    .sort((a, b) => b.info.rarity - a.info.rarity || a.label.localeCompare(b.label))
    .map((w) => ({ key: w.name, label: w.label, search: w.name, sub: `${w.info.rarity}★${w.info.stat ? ` · ${w.info.stat}` : ''}`, thumb: w.info.urls, facets: weaponFacets(w) }))

  const empty = ids.length === 0 && weaponWish.ids.length === 0

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

          <div className="mine__acts">
            <button className="tool-btn" onClick={() => setPicking('char')}>{t('wishAdd')}</button>
            <button className="tool-btn" onClick={() => setPicking('weapon')}>{t('wishAddWeapon')}</button>
          </div>

          {empty && <p className="tool__muted wish__empty">{t('wishEmpty')}</p>}

          {!empty && (
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

              {wishedWeapons.length > 0 && (
                <ul className="wish__list">
                  {wishedWeapons.map((w) => (
                    <li key={w.name}>
                      <Thumb src={w.info.urls} label={w.label} />
                      <span>
                        <strong>{w.label}</strong>
                        <small>{w.info.rarity}★{w.info.type ? ` · ${w.info.type}` : ''}</small>
                      </span>
                      <button className="tool-btn tool-btn--ghost" onClick={() => weaponWish.toggle(w.name)} aria-label={`${t('remove')} ${w.label}`}>{t('remove')}</button>
                    </li>
                  ))}
                </ul>
              )}

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
                        <button className="mat__open" onClick={() => openMat(it.name)} aria-label={t('matWhereOf', { n: it.name })}>
                          <Thumb src={iconFor(it.name)} label={it.name} />
                          <span>{it.name}</span>
                          <b>{it.count.toLocaleString()}</b>
                        </button>
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
            title={picking === 'char' ? t('pickChar') : t('pickWeapon')}
            options={picking === 'char' ? options : weaponOptions}
            filters={picking === 'char' ? charFilters(options) : weaponFilters(weaponOptions)}
            onClose={() => setPicking(null)}
            onPick={(key) => {
              if (picking === 'char') toggle(key)
              else weaponWish.toggle(key)
              setPicking(null)
            }}
          />
        )}

        {matSheet}
        <TabBar active={null} query="" onQuery={() => {}} noSearch />
      </main>
    </>
  )
}
