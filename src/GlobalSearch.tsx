import { useEffect, useMemo, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getAllCharacters, getAllItems, iconChain } from './api'
import type { ItemEntry } from './api'
import { t } from './i18n'
import { useMenu } from './menuContext'
import { Thumb } from './Thumb'
import type { CharacterSummary } from './types'
import './globalsearch.css'

const normalize = (text: string) =>
  text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()

const LIMIT = 6

interface Result {
  key: string
  group: string
  label: string
  sub: string
  thumb: string | string[]
  round?: boolean
  to: string
}

// Busca única (Ctrl+K): personagens, armas e artefatos juntos.
export default function GlobalSearch() {
  const { searchOpen, closeSearch } = useMenu()
  if (!searchOpen) return null
  return <SearchDialog onClose={closeSearch} />
}

function SearchDialog({ onClose }: { onClose: () => void }) {
  const navigate = useNavigate()
  const location = useLocation()
  const [query, setQuery] = useState('')
  const [chars, setChars] = useState<CharacterSummary[]>([])
  const [weapons, setWeapons] = useState<ItemEntry[]>([])
  const [artifacts, setArtifacts] = useState<ItemEntry[]>([])
  const [cursor, setCursor] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    let active = true
    getAllCharacters().then((l) => active && setChars(l)).catch(() => {})
    getAllItems('weapons').then((l) => active && setWeapons(l)).catch(() => {})
    getAllItems('artifacts').then((l) => active && setArtifacts(l)).catch(() => {})
    return () => {
      active = false
    }
  }, [])

  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null
    inputRef.current?.focus()
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
      opener?.focus?.()
    }
  }, [])

  // fecha ao trocar de página
  const startPath = useRef(location.pathname + location.search)
  useEffect(() => {
    if (location.pathname + location.search !== startPath.current) onClose()
  }, [location, onClose])

  const results = useMemo<Result[]>(() => {
    const q = normalize(query.trim())
    if (!q) return []
    const match = (...parts: string[]) => normalize(parts.join(' ')).includes(q)
    const out: Result[] = []
    chars
      .filter((c) => match(c.name, c.enName))
      .slice(0, LIMIT)
      .forEach((c) =>
        out.push({ key: `c${c.id}`, group: t('characters'), label: c.name, sub: `${c.vision} · ${c.rarity}★`, thumb: iconChain(c), round: true, to: `/character/${c.id}` }),
      )
    weapons
      .filter((w) => match(w.label, w.name))
      .slice(0, LIMIT)
      .forEach((w) =>
        out.push({ key: `w${w.name}`, group: t('weapons'), label: w.label, sub: `${w.info.rarity}★`, thumb: w.info.urls ?? [], to: `/weapons?q=${encodeURIComponent(w.label)}` }),
      )
    artifacts
      .filter((a) => match(a.label, a.name))
      .slice(0, LIMIT)
      .forEach((a) =>
        out.push({ key: `a${a.name}`, group: t('artifacts'), label: a.label, sub: `${a.info.rarity}★`, thumb: a.info.urls ?? [], to: `/artifacts?q=${encodeURIComponent(a.label)}` }),
      )
    return out
  }, [query, chars, weapons, artifacts])

  const go = (r: Result) => {
    onClose()
    navigate(r.to)
  }

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault()
      onClose()
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setCursor((c) => Math.min(c + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setCursor((c) => Math.max(c - 1, 0))
    } else if (e.key === 'Enter' && results[cursor]) {
      e.preventDefault()
      go(results[cursor])
    }
  }

  let lastGroup = ''
  return (
    <div className="gsearch" role="dialog" aria-modal="true" aria-label={t('searchApp')} onKeyDown={onKey}>
      <div className="gsearch__backdrop" onClick={onClose} aria-hidden="true" />
      <div className="gsearch__panel">
        <div className="gsearch__bar">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.5-3.5" />
          </svg>
          <input
            ref={inputRef}
            type="search"
            aria-label={t('searchAll')}
            placeholder={t('searchAll')}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setCursor(0)
            }}
          />
          <button className="gsearch__close" aria-label={t('closeSearch')} onClick={onClose}>
            Esc
          </button>
        </div>
        <div className="gsearch__list" role="listbox" aria-label={t('searchApp')}>
          {!query.trim() && <p className="gsearch__empty">{t('searchHint')}</p>}
          {query.trim() && results.length === 0 && <p className="gsearch__empty">{t('nothingFound')}</p>}
          {results.map((r, i) => {
            const head = r.group !== lastGroup ? r.group : null
            lastGroup = r.group
            return (
              <div key={r.key}>
                {head && <h3 className="gsearch__group">{head}</h3>}
                <button
                  role="option"
                  aria-selected={i === cursor}
                  className={i === cursor ? 'gsearch__item is-active' : 'gsearch__item'}
                  onMouseEnter={() => setCursor(i)}
                  onClick={() => go(r)}
                >
                  <Thumb round={r.round} src={r.thumb} label={r.label} />
                  <span>
                    <strong>{r.label}</strong>
                    <small>{r.sub}</small>
                  </span>
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
