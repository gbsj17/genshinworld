import { useEffect, useMemo, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { getAllCharacters, getSkillIcons, iconChain } from './api'
import { t, weaponLabel } from './i18n'
import { preloadImages } from './preload'
import { useFavorites } from './favorites'
import ErrorMsg from './ErrorMsg'
import MenuButton from './MenuButton'
import PcNav from './PcNav'
import TabBar from './TabBar'
import { Thumb } from './Thumb'
import type { CharacterSummary } from './types'
import { VISION_COLORS } from './visionColors'
import './home.css'

const ALL = 'all'
const FILTERS = [ALL, ...Object.keys(VISION_COLORS)]
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
      aria-label={on ? t('favRemove', { n: name }) : t('favAdd', { n: name })}
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
          <span>{[c.vision, weaponLabel(c.weapon)].filter(Boolean).join(' · ')}</span>
        </div>
      </Link>
      <StarButton id={c.id} name={c.name} />
    </div>
  )
}

function SkillDot({ src }: { src: string }) {
  const [failed, setFailed] = useState(false)
  if (failed) return null
  return (
    <span className="skill-dot">
      <img src={src} alt="" loading="lazy" onError={() => setFailed(true)} />
    </span>
  )
}

function ListRow({ c, skills }: { c: CharacterSummary; skills?: string[] }) {
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
            {[c.vision, weaponLabel(c.weapon)].filter(Boolean).join(' · ')} · {c.rarity}★
          </span>
        </div>
      </Link>
      {skills && (
        <div className="row-item__skills" aria-hidden="true">
          {skills.map((src) => (
            <SkillDot key={src} src={src} />
          ))}
        </div>
      )}
      <StarButton id={c.id} name={c.name} />
    </div>
  )
}

export default function HomePage() {
  const [characters, setCharacters] = useState<CharacterSummary[] | null>(null)
  const [error, setError] = useState(false)
  const [query, setQuery] = useState('')
  const [vision, setVision] = useState(ALL)
  const [scope, setScope] = useState<Scope>('all')
  const [view, setView] = useState<View>(() => {
    try {
      return localStorage.getItem(VIEW_KEY) === 'list' ? 'list' : 'grid'
    } catch {
      return 'grid'
    }
  })
  const { ids } = useFavorites()
  const [skills, setSkills] = useState<Map<string, string[]> | null>(null)

  // Os ícones das habilidades só são buscados quando a lista é aberta
  useEffect(() => {
    if (view !== 'list' || skills) return
    let active = true
    getSkillIcons()
      .then((m) => active && setSkills(m))
      .catch(() => {})
    return () => {
      active = false
    }
  }, [view, skills])

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
        (vision === ALL || c.vision === vision) &&
        normalize(`${c.name} ${c.enName}`).includes(q),
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

  const alphaRef = useRef<HTMLElement>(null)

  const goToLetter = (letter: string) => {
    const el = document.getElementById(`letter-${letter}`)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    // a letra da seção dá um pulinho ao chegar
    el?.classList.remove('is-flash')
    void el?.offsetWidth
    el?.classList.add('is-flash')
  }

  // Efeito "lupa": a letra sob o dedo/mouse cresce e as vizinhas crescem um pouco menos
  const magnify = (clientY: number | null) => {
    alphaRef.current?.querySelectorAll<HTMLElement>('a').forEach((a) => {
      if (clientY === null) {
        a.style.removeProperty('--k')
        return
      }
      const box = a.getBoundingClientRect()
      const dist = Math.abs(clientY - (box.top + box.height / 2)) / box.height
      a.style.setProperty('--k', String(Math.max(0, 1 - dist / 3.2)))
    })
  }

  return (
    <>
    <PcNav active="characters" query={query} onQuery={setQuery} placeholder={t('searchChar')} />
    <main className={view === 'list' ? 'screen home home--list' : 'screen home'}>
      <header className="home-top">
        <div>
          <h1 className="home-title">Genshin World</h1>
          <span className="home-cap">{t('capChars')}</span>
        </div>
        <MenuButton />
      </header>

      {favorites.length > 0 && (
        <nav className="stories" aria-label={t('favorites')}>
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

      <div className="home-filters">
      <div className="chips">
        {FILTERS.map((f) => (
          <button
            key={f}
            className={f === ALL ? 'pill' : 'pill pill--el'}
            style={f === ALL ? undefined : ({ '--tone': VISION_COLORS[f] } as CSSProperties)}
            aria-pressed={f === vision}
            onClick={() => setVision(f)}
          >
            {f !== ALL && (
              <span className="pill__dot" style={{ '--dot': VISION_COLORS[f] } as CSSProperties} />
            )}
            {f === ALL ? t('all') : f}
          </button>
        ))}
      </div>

      <div className="home-tools">
        <div className="seg" role="tablist" aria-label={t('list')}>
          <button role="tab" aria-selected={scope === 'all'} onClick={() => setScope('all')}>
            {t('all')}
          </button>
          <button role="tab" aria-selected={scope === 'favorites'} onClick={() => setScope('favorites')}>
            {t('favorites')}
          </button>
        </div>
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
      </div>

      {error && <ErrorMsg text={t('loadCharsFail')} />}
      {!error && !characters && <p className="empty">{t('loading')}</p>}

      {characters && (
        <>
          <p className="home-count" role="status" aria-live="polite">{t('countChars', { n: filtered.length })}</p>
          {filtered.length === 0 ? (
            <p className="empty">
              {scope === 'favorites' && ids.length === 0
                ? t('tapStarChar')
                : t('noChars')}
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
                      <ListRow key={c.id} c={c} skills={skills?.get(c.enName)} />
                    ))}
                  </section>
                ))}
              </div>
              <nav
                className="alpha"
                aria-label={t('alphaIndex')}
                ref={alphaRef}
                onPointerMove={(e) => magnify(e.clientY)}
                onPointerLeave={() => magnify(null)}
                onPointerCancel={() => magnify(null)}
                onPointerUp={(e) => e.pointerType !== 'mouse' && magnify(null)}
              >
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

      <TabBar active="characters" query={query} onQuery={setQuery} />
    </main>
    </>
  )
}
