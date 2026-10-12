import { useEffect, useState } from 'react'
import { getAllCharacters, getAllItems } from './api'
import type { ItemEntry } from './api'
import { useFavorites } from './favorites'
import ItemModal from './ItemModal'
import type { PickedItem } from './ItemModal'
import { t } from './i18n'
import MenuButton from './MenuButton'
import { CharCard, ItemCard } from './NewsPage'
import PcNav from './PcNav'
import TabBar from './TabBar'
import type { CharacterSummary } from './types'
import './home.css'
import './items.css'

type Tab = 'characters' | 'weapons' | 'artifacts'

const LABELS: Record<Tab, 'characters' | 'weapons' | 'artifacts'> = { characters: 'characters', weapons: 'weapons', artifacts: 'artifacts' }

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
    ids.map((n) => list.find((e) => e.name === n) ?? { name: n, label: n, info: { urls: [], rarity: 0 } })
  const shownWeapons = byName(weapons, favW.ids)
  const shownArtifacts = byName(artifacts, favA.ids)

  const counts: Record<Tab, number> = {
    characters: favC.ids.length,
    weapons: favW.ids.length,
    artifacts: favA.ids.length,
  }
  const empty = counts[tab] === 0

  return (
    <>
    <PcNav active="other" />
    <main className="screen home">
      <header className="home-top">
        <div>
          <h1 className="home-title">Genshin World</h1>
          <span className="home-cap">{t('capFavorites')}</span>
        </div>
        <MenuButton />
      </header>

      <div className="home-tools">
        <div className="seg" role="tablist" aria-label={t('favType')}>
          {(Object.keys(LABELS) as Tab[]).map((tb) => (
            <button key={tb} role="tab" aria-selected={tab === tb} onClick={() => setTab(tb)}>
              {t(LABELS[tb])} ({counts[tb]})
            </button>
          ))}
        </div>
      </div>

      {empty && <p className="empty">{t('favEmpty')}</p>}

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
    </>
  )
}
