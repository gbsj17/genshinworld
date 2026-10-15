import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllItems } from './api'
import type { ItemEntry } from './api'
import { useFavorites } from './favorites'
import { ItemIcon } from './ItemIcon'
import ItemModal from './ItemModal'
import type { PickedItem } from './ItemModal'
import { t, weaponLabel } from './i18n'
import ErrorMsg from './ErrorMsg'
import MenuButton from './MenuButton'
import PcNav from './PcNav'
import TabBar from './TabBar'
import './home.css'
import './items.css'

const WEAPON_TYPES = ['', 'Sword', 'Claymore', 'Polearm', 'Bow', 'Catalyst']

const normalize = (text: string) =>
  text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()

// Lista com todas as armas ou todos os conjuntos de artefatos do jogo.
export default function ItemsPage({ kind }: { kind: 'weapon' | 'artifact' }) {
  const isWeapon = kind === 'weapon'
  const navigate = useNavigate()
  const [items, setItems] = useState<ItemEntry[] | null>(null)
  const [error, setError] = useState(false)
  const [query, setQuery] = useState('')
  const [type, setType] = useState('')
  const [rarity, setRarity] = useState(0)
  const [picked, setPicked] = useState<PickedItem | null>(null)
  const { isFavorite, toggle } = useFavorites(isWeapon ? 'weapons' : 'artifacts')

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
        normalize(`${e.label} ${e.name}`).includes(q),
    )
  }, [sorted, query, type, rarity])

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
      </div>

      {error && <ErrorMsg text={t('loadListFail')} />}
      {!error && !items && <p className="empty">{t('loading')}</p>}

      {items && (
        <>
          <p className="home-count" role="status" aria-live="polite">
            {t(isWeapon ? 'countWeapons' : 'countSets', { n: filtered.length })}
          </p>
          {filtered.length === 0 ? (
            <p className="empty">{t('nothingFound')}</p>
          ) : (
            <div className="item-grid">
              {filtered.map((e) => (
                <div className="item-wrap" key={e.name}>
                  <button
                    className="item-card"
                    onClick={() => (isWeapon ? navigate(`/weapon/${encodeURIComponent(e.name)}`) : setPicked({ kind, name: e.name, note: '' }))}
                  >
                    <ItemIcon kind={kind} name={e.name} />
                    <strong>{e.label}</strong>
                    <span>
                      {e.info.rarity > 0 ? `${e.info.rarity}★` : ''}
                      {isWeapon && e.info.type ? ` · ${e.info.type}` : ''}
                    </span>
                  </button>
                  <button
                    className="star-btn"
                    aria-pressed={isFavorite(e.name)}
                    aria-label={isFavorite(e.name) ? t('favRemove', { n: e.label }) : t('favAdd', { n: e.label })}
                    onClick={() => toggle(e.name)}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill={isFavorite(e.name) ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 3l2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.8 6.6 19.7l1.1-6.1L3.2 9.4l6.1-.8z" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      <TabBar active={isWeapon ? 'weapons' : 'artifacts'} query={query} onQuery={setQuery} />
      {picked && <ItemModal item={picked} onClose={() => setPicked(null)} />}
    </main>
    </>
  )
}
