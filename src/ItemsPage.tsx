import { useEffect, useMemo, useState } from 'react'
import { getAllItems } from './api'
import type { ItemEntry } from './api'
import { ItemIcon } from './ItemIcon'
import ItemModal from './ItemModal'
import type { PickedItem } from './ItemModal'
import MenuButton from './MenuButton'
import TabBar from './TabBar'
import './home.css'
import './items.css'

const WEAPON_TYPES: [string, string][] = [
  ['Todas', ''],
  ['Espada', 'Sword'],
  ['Montante', 'Claymore'],
  ['Lança', 'Polearm'],
  ['Arco', 'Bow'],
  ['Catalisador', 'Catalyst'],
]

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
  const [picked, setPicked] = useState<PickedItem | null>(null)

  useEffect(() => {
    let active = true
    setItems(null)
    setError(false)
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
        (a, b) => b.info.rarity - a.info.rarity || a.name.localeCompare(b.name),
      ),
    [items],
  )

  const filtered = useMemo(() => {
    const q = normalize(query.trim())
    return sorted.filter(
      (e) =>
        (!type || e.info.type === type) &&
        (!rarity || e.info.rarity === rarity) &&
        normalize(e.name).includes(q),
    )
  }, [sorted, query, type, rarity])

  const rarities = isWeapon ? [5, 4, 3] : [5, 4]

  return (
    <main className="screen home">
      <header className="home-top">
        <div>
          <h1 className="home-title">Genshin World</h1>
          <span className="home-cap">{isWeapon ? 'ARMAS' : 'ARTEFATOS'}</span>
        </div>
        <MenuButton />
      </header>

      {isWeapon && (
        <div className="chips">
          {WEAPON_TYPES.map(([label, value]) => (
            <button key={label} className="pill" aria-pressed={type === value} onClick={() => setType(value)}>
              {label}
            </button>
          ))}
        </div>
      )}

      <div className="chips">
        <button className="pill" aria-pressed={rarity === 0} onClick={() => setRarity(0)}>
          Todas as raridades
        </button>
        {rarities.map((r) => (
          <button key={r} className="pill" aria-pressed={rarity === r} onClick={() => setRarity(r)}>
            {r}★
          </button>
        ))}
      </div>

      {error && <p className="empty">Não foi possível carregar a lista.</p>}
      {!error && !items && <p className="empty">Carregando...</p>}

      {items && (
        <>
          <p className="home-count">
            {filtered.length} {isWeapon ? 'armas' : 'conjuntos'}
          </p>
          {filtered.length === 0 ? (
            <p className="empty">Nada encontrado.</p>
          ) : (
            <div className="item-grid">
              {filtered.map((e) => (
                <button
                  key={e.name}
                  className="item-card"
                  onClick={() => setPicked({ kind, name: e.name, note: '' })}
                >
                  <ItemIcon kind={kind} name={e.name} />
                  <strong>{e.name}</strong>
                  <span>
                    {e.info.rarity > 0 ? `${e.info.rarity}★` : ''}
                    {isWeapon && e.info.type ? ` · ${e.info.type}` : ''}
                  </span>
                </button>
              ))}
            </div>
          )}
        </>
      )}

      <TabBar active={isWeapon ? 'weapons' : 'artifacts'} query={query} onQuery={setQuery} />
      {picked && <ItemModal item={picked} onClose={() => setPicked(null)} />}
    </main>
  )
}
