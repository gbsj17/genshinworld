import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import type { CSSProperties } from 'react'
import { getAllItems } from './api'
import type { ItemEntry } from './api'
import { useFavorites } from './favorites'
import { ItemIcon } from './ItemIcon'
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

const RARITY_COLORS: Record<number, string> = { 5: '#f0b232', 4: '#b58cf2', 3: '#4cc2f1', 2: '#74c2a8', 1: '#aab1c8' }

// Ícone de "evoluindo": seta para cima com um mais
const GoalIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 21V9M4 14l6-6 6 6M19 2v6M16 5h6" />
  </svg>
)

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
              {filtered.map((e) => {
                const owned = isWeapon ? ownW.owned[e.name] : undefined
                const goal = goals.ids.includes(e.name)
                const fav = isFavorite(e.name)
                const style = { '--el': RARITY_COLORS[e.info.rarity] ?? '#d3bc8e' } as CSSProperties
                const to = `/${kind}/${encodeURIComponent(e.name)}`
                const star = (
                  <button
                    className="star-btn"
                    aria-pressed={fav}
                    aria-label={fav ? t('favRemove', { n: e.label }) : t('favAdd', { n: e.label })}
                    onClick={() => toggle(e.name)}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill={fav ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 3l2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.8 6.6 19.7l1.1-6.1L3.2 9.4l6.1-.8z" />
                    </svg>
                  </button>
                )
                const chips = (
                  <>
                    <span className="cx-chip">
                      <i aria-hidden="true" />
                      {isWeapon ? (e.info.type ?? '') : t('setChip')}
                    </span>
                    {goal && (
                      <span className="cx-chip cx-chip--goal" title={t('goalChip')} aria-label={t('goalChip')} role="img">
                        <GoalIcon />
                      </span>
                    )}
                  </>
                )
                const stars = e.info.rarity > 0 ? '★'.repeat(e.info.rarity) : ''
                return view === 'grid' ? (
                  <div className="vcard" style={style} key={e.name}>
                    <Link to={to} aria-label={e.label} className="vcard__link">
                      <span className="vcard__stars">{stars}</span>
                      <span className="vcard__img vcard__img--sq">
                        <ItemIcon kind={kind} name={e.name} />
                      </span>
                      <strong>{e.label}</strong>
                      <span className="vcard__chips">{chips}</span>
                      {isWeapon ? (
                        owned ? (
                          <span className="vcard__own">
                            <span className="cx-tag">R{owned.r}</span>
                            <span>
                              {t('lvShort')} {owned.lv}
                            </span>
                          </span>
                        ) : (
                          <span className="vcard__own vcard__own--no">{t('ownNo')}</span>
                        )
                      ) : (
                        <span className="vcard__own vcard__own--no">{t('setSee')}</span>
                      )}
                    </Link>
                    {star}
                  </div>
                ) : (
                  <div className="vrow" style={style} key={e.name}>
                    <Link to={to} aria-label={e.label} className="vrow__link">
                      <span className="vrow__ic">
                        <ItemIcon kind={kind} name={e.name} />
                      </span>
                      <span className="vrow__mid">
                        <strong>{e.label}</strong>
                        <span className="vrow__chips">
                          <span className="vcard__stars">{stars}</span>
                          {chips}
                        </span>
                      </span>
                    </Link>
                    <div className="vrow__rt">
                      {star}
                      {isWeapon &&
                        (owned ? (
                          <span className="cx-tag">
                            ✓ R{owned.r} · {t('lvShort')} {owned.lv}
                          </span>
                        ) : (
                          <span className="cx-chip">{t('ownNo')}</span>
                        ))}
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </>
      )}

      <TabBar active={isWeapon ? 'weapons' : 'artifacts'} query={query} onQuery={setQuery} />
    </main>
    </>
  )
}
