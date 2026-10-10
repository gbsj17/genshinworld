import { useEffect, useMemo, useState } from 'react'
import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { getAllCharacters, iconChain } from './api'
import { preloadImages } from './preload'
import { useFavorites } from './favorites'
import { useMenu } from './menuContext'
import MenuButton from './MenuButton'
import { Thumb } from './Thumb'
import type { CharacterSummary } from './types'
import { VISION_COLORS } from './visionColors'
import './home.css'

const FILTERS = ['Todos', ...Object.keys(VISION_COLORS)]
const VIEW_KEY = 'genshinworld:view'

type View = 'grid' | 'list'
type Scope = 'all' | 'favorites'

const normalize = (text: string) =>
  text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()

const STAR_PATH = 'M12 3l2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.8 6.6 19.7l1.1-6.1L3.2 9.4l6.1-.8z'

function StarButton({ id, name }: { id: string; name: string }) {
  const { isFavorite, toggle } = useFavorites()
  const on = isFavorite(id)
  return (
    <button
      className="star-btn"
      aria-pressed={on}
      aria-label={on ? `Remover ${name} dos favoritos` : `Adicionar ${name} aos favoritos`}
      onClick={() => toggle(id)}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill={on ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
        <path d={STAR_PATH} />
      </svg>
    </button>
  )
}

const accentStyle = (c: CharacterSummary) =>
  ({ '--card-accent': VISION_COLORS[c.vision] ?? '#d3bc8e' }) as CSSProperties

function Card({ c }: { c: CharacterSummary }) {
  return (
    <div className="char-card" style={accentStyle(c)}>
      <Link to={`/character/${c.id}`} aria-label={c.name} style={{ color: 'inherit', textDecoration: 'none' }}>
        <div className="char-card__art">
          <Thumb round src={iconChain(c)} label={c.name} />
          <span className="rarity-pill">{c.rarity}★</span>
        </div>
        <div className="char-card__body">
          <strong>{c.name}</strong>
          <span>{[c.vision, c.weapon].filter(Boolean).join(' · ')}</span>
        </div>
      </Link>
      <StarButton id={c.id} name={c.name} />
    </div>
  )
}

function ListRow({ c }: { c: CharacterSummary }) {
  return (
    <div className="row-item" style={accentStyle(c)}>
      <Link
        to={`/character/${c.id}`}
        style={{ display: 'flex', alignItems: 'center', gap: 14, flex: 1, minWidth: 0, color: 'inherit', textDecoration: 'none', height: '100%' }}
      >
        <Thumb round src={iconChain(c)} label={c.name} />
        <div className="row-item__body">
          <strong>{c.name}</strong>
          <span>
            {[c.vision, c.weapon].filter(Boolean).join(' · ')} · {c.rarity}★
          </span>
        </div>
      </Link>
      <StarButton id={c.id} name={c.name} />
    </div>
  )
}

export default function HomePage() {
  const [characters, setCharacters] = useState<CharacterSummary[] | null>(null)
  const [error, setError] = useState(false)
  const [query, setQuery] = useState('')
  const [vision, setVision] = useState('Todos')
  const [scope, setScope] = useState<Scope>('all')
  const [view, setView] = useState<View>(() => {
    try {
      return localStorage.getItem(VIEW_KEY) === 'list' ? 'list' : 'grid'
    } catch {
      return 'grid'
    }
  })
  const { ids } = useFavorites()
  const { openMenu } = useMenu()

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

  const changeView = (v: View) => {
    setView(v)
    try {
      localStorage.setItem(VIEW_KEY, v)
    } catch {
      // sem armazenamento: só não lembra da escolha
    }
  }

  const sorted = useMemo(
    () => [...(characters ?? [])].sort((a, b) => a.name.localeCompare(b.name)),
    [characters],
  )

  const filtered = useMemo(() => {
    const q = normalize(query.trim())
    return sorted.filter(
      (c) =>
        (scope === 'all' || ids.includes(c.id)) &&
        (vision === 'Todos' || c.vision === vision) &&
        normalize(c.name).includes(q),
    )
  }, [sorted, query, vision, scope, ids])

  const favorites = sorted.filter((c) => ids.includes(c.id))

  // Agrupa por letra inicial (só usado na visão em lista)
  const groups = useMemo(() => {
    const map = new Map<string, CharacterSummary[]>()
    for (const c of filtered) {
      const letter = normalize(c.name).charAt(0).toUpperCase() || '#'
      map.set(letter, [...(map.get(letter) ?? []), c])
    }
    return [...map.entries()]
  }, [filtered])

  const goToLetter = (letter: string) =>
    document.getElementById(`letter-${letter}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <main className="screen home">
      <header className="home-top">
        <div>
          <span className="home-cap">GENSHIN WORLD</span>
          <h1 className="home-title">Personagens</h1>
        </div>
        <MenuButton />
      </header>

      <label className="search">
        <span className="sr-only">Buscar personagem</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-3.5-3.5" />
        </svg>
        <input
          type="search"
          placeholder="Buscar personagem"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>

      {favorites.length > 0 && (
        <nav className="stories" aria-label="Favoritos">
          {favorites.map((c) => (
            <Link
              key={c.id}
              to={`/character/${c.id}`}
              className="story"
              style={{ '--ring': VISION_COLORS[c.vision] ?? '#d3bc8e' } as CSSProperties}
            >
              <Thumb round src={iconChain(c)} label={c.name} />
              <span>{c.name}</span>
            </Link>
          ))}
        </nav>
      )}

      <div className="chips">
        {FILTERS.map((f) => (
          <button
            key={f}
            className="pill"
            aria-pressed={f === vision}
            onClick={() => setVision(f)}
          >
            {f !== 'Todos' && (
              <span className="pill__dot" style={{ '--dot': VISION_COLORS[f] } as CSSProperties} />
            )}
            {f}
          </button>
        ))}
      </div>

      <div className="home-tools">
        <div className="seg" role="tablist" aria-label="Lista">
          <button role="tab" aria-selected={scope === 'all'} onClick={() => setScope('all')}>
            Todos
          </button>
          <button role="tab" aria-selected={scope === 'favorites'} onClick={() => setScope('favorites')}>
            Favoritos
          </button>
        </div>
        <button
          className="view-toggle"
          aria-label={view === 'grid' ? 'Ver em lista' : 'Ver em grade'}
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

      {error && <p className="empty">Não foi possível carregar os personagens.</p>}
      {!error && !characters && <p className="empty">Carregando...</p>}

      {characters && (
        <>
          <p className="home-count">{filtered.length} personagens</p>
          {filtered.length === 0 ? (
            <p className="empty">
              {scope === 'favorites' && ids.length === 0
                ? 'Toque na estrela de um personagem para favoritar.'
                : 'Nenhum personagem encontrado.'}
            </p>
          ) : view === 'grid' ? (
            <div className="cards">
              {filtered.map((c) => (
                <Card key={c.id} c={c} />
              ))}
            </div>
          ) : (
            <>
              <div className="list">
                {groups.map(([letter, items]) => (
                  <section key={letter}>
                    <h2 className="list__letter" id={`letter-${letter}`}>
                      {letter}
                    </h2>
                    {items.map((c) => (
                      <ListRow key={c.id} c={c} />
                    ))}
                  </section>
                ))}
              </div>
              <nav className="alpha" aria-label="Índice alfabético">
                {groups.map(([letter]) => (
                  <a
                    key={letter}
                    role="button"
                    tabIndex={0}
                    onClick={() => goToLetter(letter)}
                    onKeyDown={(e) => e.key === 'Enter' && goToLetter(letter)}
                  >
                    {letter}
                  </a>
                ))}
              </nav>
            </>
          )}
        </>
      )}

      <nav className="tabbar" aria-label="Navegação">
        <button
          className="tabbar__item"
          aria-current={scope === 'all' ? 'page' : undefined}
          onClick={() => {
            setScope('all')
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 11l8-7 8 7M6 9.5V20h12V9.5" />
          </svg>
          Início
        </button>
        <button
          className="tabbar__item"
          aria-current={scope === 'favorites' ? 'page' : undefined}
          onClick={() => {
            setScope('favorites')
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
            <path d={STAR_PATH} />
          </svg>
          Favoritos
        </button>
        <button className="tabbar__item" onClick={openMenu}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          Menu
        </button>
      </nav>
    </main>
  )
}
