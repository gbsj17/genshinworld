import { Link } from 'react-router-dom'
import MenuButton from './MenuButton'
import type { TabId } from './TabBar'
import './pcnav.css'

const LINKS: { id: TabId; to: string; label: string }[] = [
  { id: 'home', to: '/', label: 'Início' },
  { id: 'characters', to: '/characters', label: 'Personagens' },
  { id: 'weapons', to: '/weapons', label: 'Armas' },
  { id: 'artifacts', to: '/artifacts', label: 'Artefatos' },
]

// Topo de navegação só para PC (a partir de 820px). No celular fica escondido.
export default function PcNav({
  active,
  overlay,
  query,
  onQuery,
  placeholder,
}: {
  active: TabId
  overlay?: boolean
  query?: string
  onQuery?: (q: string) => void
  placeholder?: string
}) {
  return (
    <header className={overlay ? 'pcnav pcnav--overlay' : 'pcnav'}>
      <Link to="/" className="pcnav__brand">
        Genshin World
      </Link>
      <nav className="pcnav__links" aria-label="Seções">
        {LINKS.map((l) => (
          <Link key={l.id} to={l.to} aria-current={active === l.id ? 'page' : undefined}>
            {l.label}
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
            aria-label="Buscar"
            placeholder={placeholder ?? 'Buscar'}
            value={query ?? ''}
            onChange={(e) => onQuery(e.target.value)}
          />
        </label>
      )}
      <MenuButton />
    </header>
  )
}
