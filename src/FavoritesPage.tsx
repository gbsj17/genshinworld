import { useEffect, useState } from 'react'
import { getAllCharacters, getAllItems } from './api'
import type { ItemEntry } from './api'
import { useFavorites } from './favorites'
import ItemModal from './ItemModal'
import type { PickedItem } from './ItemModal'
import MenuButton from './MenuButton'
import { CharCard, ItemCard } from './NewsPage'
import TabBar from './TabBar'
import type { CharacterSummary } from './types'
import './home.css'
import './items.css'

type Tab = 'characters' | 'weapons' | 'artifacts'

const LABELS: Record<Tab, string> = { characters: 'Personagens', weapons: 'Armas', artifacts: 'Artefatos' }

// Todos os favoritos num lugar só (acessível pelo menu).
export default function FavoritesPage() {
  const [tab, setTab] = useState<Tab>('characters')
  const [chars, setChars] = useState<CharacterSummary[]>([])
  const [weapons, setWeapons] = useState<ItemEntry[]>([])
  const [artifacts, setArtifacts] = useState<ItemEntry[]>([])
  const [picked, setPicked] = useState<PickedItem | null>(null)
  const favC = useFavorites('characters')
  const favW = useFavorites('weapons')
  const favA = useFavorites('artifacts')

  useEffect(() => {
    let active = true
    getAllCharacters().then((l) => active && setChars(l)).catch(() => {})
    getAllItems('weapons').then((l) => active && setWeapons(l)).catch(() => {})
    getAllItems('artifacts').then((l) => active && setArtifacts(l)).catch(() => {})
    return () => {
      active = false
    }
  }, [])

  const shownChars = chars.filter((c) => favC.ids.includes(c.id))
  // um favorito pode não estar na lista (ainda carregando): mostra pelo nome mesmo assim
  const byName = (list: ItemEntry[], ids: string[]): ItemEntry[] =>
    ids.map((n) => list.find((e) => e.name === n) ?? { name: n, info: { urls: [], rarity: 0 } })
  const shownWeapons = byName(weapons, favW.ids)
  const shownArtifacts = byName(artifacts, favA.ids)

  const counts: Record<Tab, number> = {
    characters: favC.ids.length,
    weapons: favW.ids.length,
    artifacts: favA.ids.length,
  }
  const empty = counts[tab] === 0

  return (
    <main className="screen home">
      <header className="home-top">
        <div>
          <h1 className="home-title">Genshin World</h1>
          <span className="home-cap">FAVORITOS</span>
        </div>
        <MenuButton />
      </header>

      <div className="home-tools">
        <div className="seg" role="tablist" aria-label="Tipo de favorito">
          {(Object.keys(LABELS) as Tab[]).map((t) => (
            <button key={t} role="tab" aria-selected={tab === t} onClick={() => setTab(t)}>
              {LABELS[t]} ({counts[t]})
            </button>
          ))}
        </div>
      </div>

      {empty && <p className="empty">Nada favoritado aqui ainda. Toque na estrela de um item para guardar.</p>}

      {!empty && (
        <div className="item-grid">
          {tab === 'characters' && shownChars.map((c) => <CharCard key={c.id} c={c} />)}
          {tab === 'weapons' &&
            shownWeapons.map((e) => <ItemCard key={e.name} kind="weapon" e={e} onPick={setPicked} />)}
          {tab === 'artifacts' &&
            shownArtifacts.map((e) => <ItemCard key={e.name} kind="artifact" e={e} onPick={setPicked} />)}
        </div>
      )}

      <TabBar active="other" query="" onQuery={() => {}} />
      {picked && <ItemModal item={picked} onClose={() => setPicked(null)} />}
    </main>
  )
}
