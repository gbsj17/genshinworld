import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { t } from './i18n'
import type { Key } from './i18n'
import MenuButton from './MenuButton'
import type { TabId } from './TabBar'
import './pcnav.css'

const icon = (d: string) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={d} />
  </svg>
)

const LINKS: { id: TabId; to: string; label: Key; icon: React.ReactNode }[] = [
  { id: 'home', to: '/', label: 'home', icon: icon('M4 11l8-7 8 7M6 9.5V20h12V9.5') },
  { id: 'characters', to: '/characters', label: 'characters', icon: icon('M9 4.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6M16 4.8a3.5 3.5 0 010 6.4M18 14.4c2 .8 3.5 2.6 3.5 5.6') },
  { id: 'weapons', to: '/weapons', label: 'weapons', icon: icon('M14.5 4.5L19.5 4.5 19.5 9.5 9 20l-5-5L14.5 4.5zM6.5 12.5l5 5M4 20l3-3') },
  { id: 'artifacts', to: '/artifacts', label: 'artifacts', icon: icon('M20.24 12.24a6 6 0 00-8.49-8.49L5 10.5V19h8.5l6.74-6.76zM16 8L2 22M17.5 15H9') },
  { id: 'other', to: '/favorites', label: 'favorites', icon: icon('M12 3l2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.8 6.6 19.7l1.1-6.1L3.2 9.4l6.1-.8z') },
]

// Topo de navegação só para PC (a partir de 820px). No celular fica escondido.
export default function PcNav({
  active,
  overlay,
  query,
  onQuery,
  placeholder,
}: {
  active: TabId | null
  overlay?: boolean
  query?: string
  onQuery?: (q: string) => void
  placeholder?: string
}) {
  // por cima do banner o topo é transparente; ao rolar ele ganha fundo e continua fixo
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const cls = overlay ? (scrolled ? 'pcnav pcnav--overlay is-solid' : 'pcnav pcnav--overlay') : 'pcnav'
  return (
    <header className={cls}>
      <Link to="/" className="pcnav__brand">
        Genshin World
      </Link>
      <nav className="pcnav__links" aria-label={t('sections')}>
        {LINKS.map((l) => (
          <Link key={l.id} to={l.to} aria-current={active === l.id ? 'page' : undefined}>
            {l.icon}
            {t(l.label)}
          </Link>
        ))}
      </nav>
      {onQuery && (
        <label className="pcnav__search">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.5-3.5" />
          </svg>
          <input
            type="search"
            aria-label={t('search')}
            placeholder={placeholder ?? t('search')}
            value={query ?? ''}
            onChange={(e) => onQuery(e.target.value)}
          />
        </label>
      )}
      <MenuButton />
    </header>
  )
}
