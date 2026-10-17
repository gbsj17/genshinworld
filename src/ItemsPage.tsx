import { useEffect, useMemo, useRef, useState } from 'react'
import { getAllItems } from './api'
import type { ItemEntry } from './api'
import { useFavorites } from './favorites'
import { ItemCard, ItemRow } from './ItemCards'
import { useOwnedWeapons } from './ownedWeapons'
import { t, weaponLabel } from './i18n'
import ErrorMsg from './ErrorMsg'
import MenuButton from './MenuButton'
import PcNav from './PcNav'
import TabBar from './TabBar'
import './home.css'
import './charcards.css'
import './items.css'

const WEAPON_TYPES = ['', 'Sword', 'Claymore', 'Polearm', 'Bow', 'Catalyst']

const PAGE = 48 // quantos cards aparecem de cada vez; o resto vem ao rolar

const normalize = (text: string) =>
  text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()

// Lista com todas as armas ou todos os conjuntos de artefatos do jogo.
export default function ItemsPage({ kind }: { kind: 'weapon' | 'artifact' }) {
  const isWeapon = kind === 'weapon'
  const [items, setItems] = useState<ItemEntry[] | null>(null)
  const [error, setError] = useState(false)
  const [query, setQuery] = useState('')
  const [type, setType] = useState('')
  const [rarity, setRarity] = useState(0)
  const { isFavorite, toggle } = useFavorites(isWeapon ? 'weapons' : 'artifacts')
  const goals = useFavorites(isWeapon ? 'goalweapons' : 'goalartifacts')
  const ownW = useOwnedWeapons()
  const [lim, setLim] = useState({ key: '', n: PAGE })
  const sentinel = useRef<HTMLDivElement>(null)
  const [onlyOwned, setOnlyOwned] = useState(false)
  const [onlyGoal, setOnlyGoal] = useState(false)
  const [view, setView] = useState<'grid' | 'list'>(() => (localStorage.getItem('genshinworld:items-view') === 'list' ? 'list' : 'grid'))
  const changeView = (v: 'grid' | 'list') => {
    setView(v)
    try {
      localStorage.setItem('genshinworld:items-view', v)
    } catch {
      // sem armazenamento: vale só nesta visita
    }
  }

  useEffect(() => {
    let active = true
    getAllItems(isWeapon ? 'weapons' : 'artifacts')
      .then((l) => active && setItems(l))
      .catch(() => active && setError(true))
    return () => {
      active = false
    }
  }, [isWeapon])

  const sorted = useMemo(
    () =>
      [...(items ?? [])].sort(
        (a, b) => b.info.rarity - a.info.rarity || a.label.localeCompare(b.label),
      ),
    [items],
  )

  const filtered = useMemo(() => {
    const q = normalize(query.trim())
    return sorted.filter(
      (e) =>
        (!type || e.info.typeKey === type) &&
        (!rarity || e.info.rarity === rarity) &&
        (!onlyOwned || e.name in ownW.owned) &&
        (!onlyGoal || goals.ids.includes(e.name)) &&
        normalize(`${e.label} ${e.name}`).includes(q),
    )
  }, [sorted, query, type, rarity, onlyOwned, onlyGoal, ownW.owned, goals.ids])

  // o contador de cards volta ao primeiro bloco quando o filtro muda
  const filterKey = [query, type, rarity, onlyOwned, onlyGoal, view, isWeapon].join('|')
  const limit = lim.key === filterKey ? lim.n : PAGE

  // quando o fim da lista aparece na tela, mostra mais um bloco
  useEffect(() => {
    const el = sentinel.current
    if (!el || limit >= filtered.length || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver((e) => e[0]?.isIntersecting && setLim({ key: filterKey, n: limit + PAGE }), { rootMargin: '800px' })
    io.observe(el)
    return () => io.disconnect()
  }, [limit, filtered.length, filterKey])

  const rarities = isWeapon ? [5, 4, 3] : [5, 4]

  return (
    <>
    <PcNav active={isWeapon ? 'weapons' : 'artifacts'} query={query} onQuery={setQuery} placeholder={isWeapon ? t('searchWeapon') : t('searchArtifact')} />
    <main className="screen home">
      <header className="home-top">
        <div>
          <h1 className="home-title">Genshin World</h1>
          <span className="home-cap">{isWeapon ? t('capWeapons') : t('capArtifacts')}</span>
        </div>
        <MenuButton />
      </header>

      {isWeapon && (
        <div className="chips">
          {WEAPON_TYPES.map((value) => (
            <button key={value} className="pill" aria-pressed={type === value} onClick={() => setType(value)}>
              {value ? weaponLabel(value) : t('weaponAll')}
            </button>
          ))}
        </div>
      )}

      <div className="chips">
        <button className="pill" aria-pressed={rarity === 0} onClick={() => setRarity(0)}>
          {t('allRarities')}
        </button>
        {rarities.map((r) => (
          <button key={r} className="pill" aria-pressed={rarity === r} onClick={() => setRarity(r)}>
            {r}★
          </button>
        ))}
        {isWeapon && (
          <button className="pill" aria-pressed={onlyOwned} onClick={() => setOnlyOwned((v) => !v)}>
            ✓ {t('ownYes')}
          </button>
        )}
        <button className="pill" aria-pressed={onlyGoal} onClick={() => setOnlyGoal((v) => !v)}>
          {t('goalOn')}
        </button>
      </div>

      {error && <ErrorMsg text={t('loadListFail')} />}
      {!error && !items && <p className="empty">{t('loading')}</p>}

      {items && (
        <>
          <div className="items-bar">
            <p className="home-count" role="status" aria-live="polite">
              {t(isWeapon ? 'countWeapons' : 'countSets', { n: filtered.length })}
            </p>
            <button
              className="view-toggle"
              aria-label={view === 'grid' ? t('viewList') : t('viewGrid')}
              onClick={() => changeView(view === 'grid' ? 'list' : 'grid')}
            >
              {view === 'grid' ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
                  <rect x="4" y="4" width="7" height="7" rx="1.5" />
                  <rect x="13" y="4" width="7" height="7" rx="1.5" />
                  <rect x="4" y="13" width="7" height="7" rx="1.5" />
                  <rect x="13" y="13" width="7" height="7" rx="1.5" />
                </svg>
              )}
            </button>
          </div>
          {filtered.length === 0 ? (
            <p className="empty">{t('nothingFound')}</p>
          ) : (
            <div className={view === 'grid' ? 'igrid' : 'vrows'}>
              {filtered.slice(0, limit).map((e) => {
                const props = {
                  kind,
                  name: e.name,
                  label: e.label,
                  rarity: e.info.rarity,
                  type: e.info.type,
                  owned: isWeapon ? ownW.owned[e.name] : undefined,
                  goal: goals.ids.includes(e.name),
                  fav: isFavorite(e.name),
                  onFav: () => toggle(e.name),
                }
                return view === 'grid' ? <ItemCard key={e.name} {...props} /> : <ItemRow key={e.name} {...props} />
              })}
            </div>
          )}
          {limit < filtered.length && (
            <div ref={sentinel} className="empty" aria-hidden="true">
              {t('pageMore')}
            </div>
          )}
        </>
      )}

      <TabBar active={isWeapon ? 'weapons' : 'artifacts'} query={query} onQuery={setQuery} />
    </main>
    </>
  )
}
