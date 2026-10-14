import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { t } from './i18n'

export type TabId = 'home' | 'characters' | 'weapons' | 'artifacts' | 'other'

const sv = {
  width: 25,
  height: 25,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

// Barra de abas flutuante. "Buscar" troca os botões pela barra de pesquisa.
export default function TabBar({
  active,
  query,
  onQuery,
}: {
  active: TabId | null
  query: string
  onQuery: (q: string) => void
}) {
  const [searchOpen, setSearchOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const open = () => {
    setSearchOpen(true)
    // espera a animação começar para o teclado abrir sem pular
    window.setTimeout(() => inputRef.current?.focus(), 120)
  }
  const close = () => {
    setSearchOpen(false)
    onQuery('')
  }
  const cur = (id: TabId) => (active === id ? 'page' : undefined)

  return (
    <nav className={searchOpen ? 'tabbar tabbar--search' : 'tabbar'} aria-label={t('navigation')}>
      <div className="tabbar__items" aria-hidden={searchOpen} inert={searchOpen}>
        <Link
          to="/"
          className="tabbar__item"
          aria-label={t('home')}
          aria-current={cur('home')}
          onClick={() => active === 'home' && window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <svg {...sv}>
            <path d="M4 11l8-7 8 7M6 9.5V20h12V9.5" />
          </svg>
        </Link>
        <Link to="/characters" className="tabbar__item" aria-label={t('characters')} aria-current={cur('characters')}>
          <svg {...sv}>
            <circle cx="9" cy="8" r="3.5" />
            <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6M16 4.8a3.5 3.5 0 010 6.4M18 14.4c2 .8 3.5 2.6 3.5 5.6" />
          </svg>
        </Link>
        <Link to="/weapons" className="tabbar__item" aria-label={t('weapons')} aria-current={cur('weapons')}>
          <svg {...sv}>
            <path d="M14.5 4.5L19.5 4.5 19.5 9.5 9 20l-5-5L14.5 4.5zM6.5 12.5l5 5M4 20l3-3" />
          </svg>
        </Link>
        <Link to="/artifacts" className="tabbar__item" aria-label={t('artifacts')} aria-current={cur('artifacts')}>
          <svg {...sv}>
            <path d="M20.24 12.24a6 6 0 00-8.49-8.49L5 10.5V19h8.5l6.74-6.76zM16 8L2 22M17.5 15H9" />
          </svg>
        </Link>
        <button className="tabbar__item" aria-label={t('searchBtn')} onClick={open}>
          <svg {...sv} strokeWidth={2.2}>
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.5-3.5" />
          </svg>
        </button>
      </div>

      <div className="tabbar__search" aria-hidden={!searchOpen} inert={!searchOpen}>
        <svg {...sv} width={20} height={20} strokeWidth={2.2}>
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-3.5-3.5" />
        </svg>
        <input
          ref={inputRef}
          type="search"
          enterKeyHint="search"
          aria-label={t('search')}
          placeholder={active === 'home' || active === 'other' ? t('searchApp') : active === 'characters' ? t('searchChar') : active === 'weapons' ? t('searchWeapon') : t('searchArtifact')}
          value={query}
          onChange={(e) => onQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') close()
            if (e.key === 'Enter') inputRef.current?.blur()
          }}
        />
        <button className="tabbar__close" aria-label={t('closeSearch')} onClick={close}>
          <svg {...sv} width={18} height={18} strokeWidth={2.4}>
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
    </nav>
  )
}
