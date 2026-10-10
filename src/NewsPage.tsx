import { useEffect, useMemo, useState } from 'react'
import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { compareVersions, getAllCharacters, getAllItems, iconChain, isVersion } from './api'
import type { ItemEntry } from './api'
import { ItemIcon } from './ItemIcon'
import ItemModal from './ItemModal'
import type { PickedItem } from './ItemModal'
import MenuButton from './MenuButton'
import TabBar from './TabBar'
import { Thumb } from './Thumb'
import type { CharacterSummary } from './types'
import { VISION_COLORS } from './visionColors'
import './home.css'
import './items.css'

const normalize = (text: string) =>
  text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()

function CharCard({ c }: { c: CharacterSummary }) {
  return (
    <Link
      to={`/character/${c.id}`}
      className="item-card"
      style={{ '--ring': VISION_COLORS[c.vision] ?? '#d3bc8e' } as CSSProperties}
    >
      <Thumb round src={iconChain(c)} label={c.name} />
      <strong>{c.name}</strong>
      <span>
        {c.vision} · {c.rarity}★
      </span>
    </Link>
  )
}

function ItemCard({ kind, e, onPick }: { kind: 'weapon' | 'artifact'; e: ItemEntry; onPick: (p: PickedItem) => void }) {
  return (
    <button className="item-card" onClick={() => onPick({ kind, name: e.name, note: '' })}>
      <ItemIcon kind={kind} name={e.name} />
      <strong>{e.name}</strong>
      <span>{e.info.rarity > 0 ? `${e.info.rarity}★` : ''}</span>
    </button>
  )
}

// Início: novidades da versão mais recente (e busca geral pelo botão Pesquisa).
export default function NewsPage() {
  const [chars, setChars] = useState<CharacterSummary[]>([])
  const [weapons, setWeapons] = useState<ItemEntry[]>([])
  const [artifacts, setArtifacts] = useState<ItemEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [picked, setPicked] = useState<PickedItem | null>(null)

  useEffect(() => {
    let active = true
    Promise.allSettled([getAllCharacters(), getAllItems('weapons'), getAllItems('artifacts')]).then(
      ([c, w, a]) => {
        if (!active) return
        if (c.status === 'fulfilled') setChars(c.value)
        if (w.status === 'fulfilled') setWeapons(w.value)
        if (a.status === 'fulfilled') setArtifacts(a.value)
        setLoading(false)
      },
    )
    return () => {
      active = false
    }
  }, [])

  // versão mais nova que aparece em qualquer lista
  const latest = useMemo(() => {
    const all = [
      ...chars.map((c) => c.version),
      ...weapons.map((w) => w.info.version),
      ...artifacts.map((a) => a.info.version),
    ].filter(isVersion)
    return all.length ? all.reduce((a, b) => (compareVersions(a, b) >= 0 ? a : b)) : null
  }, [chars, weapons, artifacts])

  const newChars = chars.filter((c) => latest && c.version === latest)
  const newWeapons = weapons.filter((w) => latest && w.info.version === latest)
  const newArtifacts = artifacts.filter((a) => latest && a.info.version === latest)

  const q = normalize(query.trim())
  const searching = q.length > 0
  const hit = <T extends { name: string }>(list: T[]) =>
    list.filter((x) => normalize(x.name).includes(q)).slice(0, 12)

  return (
    <main className="screen home">
      <header className="home-top">
        <div>
          <h1 className="home-title">Genshin World</h1>
          <span className="home-cap">{searching ? 'RESULTADOS' : 'INÍCIO'}</span>
        </div>
        <MenuButton />
      </header>

      {loading && <p className="empty">Carregando...</p>}

      {!loading && !searching && (
        <>
          <p className="home-count">
            {latest ? `Novidades da versão ${latest}` : 'Novidades indisponíveis no momento.'}
          </p>

          {newChars.length > 0 && (
            <>
              <h2 className="news-title">Novos personagens</h2>
              <div className="item-grid">
                {newChars.map((c) => (
                  <CharCard key={c.id} c={c} />
                ))}
              </div>
            </>
          )}
          {newWeapons.length > 0 && (
            <>
              <h2 className="news-title">Novas armas</h2>
              <div className="item-grid">
                {newWeapons.map((e) => (
                  <ItemCard key={e.name} kind="weapon" e={e} onPick={setPicked} />
                ))}
              </div>
            </>
          )}
          {newArtifacts.length > 0 && (
            <>
              <h2 className="news-title">Novos artefatos</h2>
              <div className="item-grid">
                {newArtifacts.map((e) => (
                  <ItemCard key={e.name} kind="artifact" e={e} onPick={setPicked} />
                ))}
              </div>
            </>
          )}
        </>
      )}

      {!loading && searching && (
        <>
          {hit(chars).length > 0 && (
            <>
              <h2 className="news-title">Personagens</h2>
              <div className="item-grid">
                {hit(chars).map((c) => (
                  <CharCard key={c.id} c={c} />
                ))}
              </div>
            </>
          )}
          {hit(weapons).length > 0 && (
            <>
              <h2 className="news-title">Armas</h2>
              <div className="item-grid">
                {hit(weapons).map((e) => (
                  <ItemCard key={e.name} kind="weapon" e={e} onPick={setPicked} />
                ))}
              </div>
            </>
          )}
          {hit(artifacts).length > 0 && (
            <>
              <h2 className="news-title">Artefatos</h2>
              <div className="item-grid">
                {hit(artifacts).map((e) => (
                  <ItemCard key={e.name} kind="artifact" e={e} onPick={setPicked} />
                ))}
              </div>
            </>
          )}
          {hit(chars).length + hit(weapons).length + hit(artifacts).length === 0 && (
            <p className="empty">Nada encontrado.</p>
          )}
        </>
      )}

      <TabBar active="home" query={query} onQuery={setQuery} />
      {picked && <ItemModal item={picked} onClose={() => setPicked(null)} />}
    </main>
  )
}
