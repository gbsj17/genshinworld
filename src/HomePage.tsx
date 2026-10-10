import { useEffect, useMemo, useState } from 'react'
import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { getAllCharacters, iconChain } from './api'
import { preloadImages } from './preload'
import { useFavorites } from './favorites'
import MenuButton from './MenuButton'
import { Thumb } from './Thumb'
import type { CharacterSummary } from './types'
import { VISION_COLORS } from './visionColors'

const FILTERS = ['Todos', ...Object.keys(VISION_COLORS)]

const normalize = (text: string) =>
  text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()

function Card({ c }: { c: CharacterSummary }) {
  const color = VISION_COLORS[c.vision] ?? '#d3bc8e'
  return (
    <Link
      to={`/character/${c.id}`}
      className="char-card"
      style={{ '--card-accent': color } as CSSProperties}
    >
      <Thumb
        round
        src={iconChain(c)}
        label={c.name}
      />
      <strong>{c.name}</strong>
      <span>
        {c.vision} · {c.rarity}★
      </span>
    </Link>
  )
}

export default function HomePage() {
  const [characters, setCharacters] = useState<CharacterSummary[] | null>(null)
  const [error, setError] = useState(false)
  const [query, setQuery] = useState('')
  const [vision, setVision] = useState('Todos')
  const { ids } = useFavorites()

  useEffect(() => {
    let active = true
    getAllCharacters()
      .then((list) => active && setCharacters(list))
      .catch(() => active && setError(true))
    return () => {
      active = false
    }
  }, [])

  // Assim que a lista chega, baixa o ícone de todos em segundo plano.
  useEffect(() => {
    if (characters) preloadImages(characters.map((c) => iconChain(c)[0]))
  }, [characters])

  const sorted = useMemo(
    () => [...(characters ?? [])].sort((a, b) => a.name.localeCompare(b.name)),
    [characters],
  )

  const filtered = useMemo(() => {
    const q = normalize(query.trim())
    return sorted.filter(
      (c) =>
        (vision === 'Todos' || c.vision === vision) &&
        normalize(c.name).includes(q),
    )
  }, [sorted, query, vision])

  const favorites = sorted.filter((c) => ids.includes(c.id))

  return (
    <main className="screen">
      <header className="home-header">
        <div>
          <h1 className="home-title">GENSHIN WORLD</h1>
          <p className="home-sub">Personagens, builds e equipes</p>
        </div>
        <MenuButton />
      </header>

      <label className="search">
        <span className="sr-only">Buscar personagem</span>
        <input
          type="search"
          placeholder="Buscar personagem"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>

      <div className="tabs">
        {FILTERS.map((f) => (
          <button
            key={f}
            className={f === vision ? 'tab tab--active' : 'tab'}
            aria-pressed={f === vision}
            onClick={() => setVision(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="content">
        {error && <p className="empty">Não foi possível carregar os personagens.</p>}
        {!error && !characters && <p className="empty">Carregando...</p>}

        {characters && favorites.length > 0 && (
          <>
            <h2 className="section-title">Favoritos</h2>
            <div className="fav-row">
              {favorites.map((c) => (
                <Card key={c.id} c={c} />
              ))}
            </div>
          </>
        )}

        {characters && (
          <>
            <h2 className="section-title">Personagens ({filtered.length})</h2>
            {filtered.length === 0 ? (
              <p className="empty">Nenhum personagem encontrado.</p>
            ) : (
              <div className="cards">
                {filtered.map((c) => (
                  <Card key={c.id} c={c} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </main>
  )
}
