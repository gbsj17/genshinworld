import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { t } from './i18n'
import { useMenu } from './menuContext'

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

// Seções principais (Início, Personagens, Armas) mostram as abas; qualquer outra página (perfil, favoritos, ficha, arma…) mostra ações.
const MAIN = ['/', '/characters', '/weapons']

// Para onde o "Voltar" vai quando a página foi aberta direto (sem histórico do app)
function parentOf(path: string): string {
  if (path.startsWith('/weapon/')) return '/weapons'
  if (path.startsWith('/artifact/')) return '/artifacts'
  if (path.startsWith('/character/')) return '/characters'
  return '/'
}

// Barra flutuante. Nas seções principais: Início, Personagens, Armas, Buscar e Menu. Nas páginas internas: Voltar, Início, Buscar, Topo e Menu.
// "Buscar" troca os botões pela barra de pesquisa.
export default function TabBar({
  active,
  query,
  onQuery,
  noSearch,
}: {
  active: TabId | null
  query: string
  onQuery: (q: string) => void
  noSearch?: boolean
}) {
  const [searchOpen, setSearchOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { open: menuOpen, openMenu } = useMenu()
  const inner = !MAIN.includes(pathname.replace(/\/$/, '') || '/')
  const [away, setAway] = useState(false)

  // "Topo" só aparece depois de rolar um pouco (só atualiza quando cruza o limite)
  useEffect(() => {
    if (!inner) return
    const onScroll = () => setAway(window.scrollY > 320)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [inner])

  const goBack = () => {
    const idx = (window.history.state as { idx?: number } | null)?.idx ?? 0
    if (idx > 0) navigate(-1)
    else navigate(parentOf(pathname), { replace: true })
  }
  const toTop = () => {
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: calm ? 'auto' : 'smooth' })
  }

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
    <nav className={`tabbar${inner ? ' tabbar--inner' : ''}${searchOpen ? ' tabbar--search' : ''}`} aria-label={t('navigation')}>
      <div className="tabbar__items" aria-hidden={searchOpen} inert={searchOpen}>
        {inner ? (
          <>
            <button className="tabbar__item" aria-label={t('back')} onClick={goBack}>
              <svg {...sv}>
                <path d="M15 5l-7 7 7 7" />
              </svg>
            </button>
            <Link to="/" className="tabbar__item" aria-label={t('home')}>
              <svg {...sv}>
                <path d="M4 11l8-7 8 7M6 9.5V20h12V9.5" />
              </svg>
            </Link>
          </>
        ) : (
          <>
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
          </>
        )}
        {!noSearch && (
          <button className="tabbar__item" aria-label={t('searchBtn')} onClick={open}>
            <svg {...sv} strokeWidth={2.2}>
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" />
            </svg>
          </button>
        )}
        {inner && (
          <button className="tabbar__item tabbar__item--top" aria-label={t('toTop')} aria-hidden={!away} tabIndex={away ? 0 : -1} data-show={away} onClick={toTop}>
            <svg {...sv}>
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </button>
        )}
        <button className="tabbar__item" aria-label={t('openMenu')} aria-haspopup="dialog" aria-expanded={menuOpen} aria-controls="app-menu" onClick={openMenu}>
          <svg {...sv}>
            <path d="M4 7h16M4 12h16M4 17h16" />
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
          placeholder={active === 'home' || active === 'other' || active === null ? t('searchApp') : active === 'characters' ? t('searchChar') : active === 'weapons' ? t('searchWeapon') : t('searchArtifact')}
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
