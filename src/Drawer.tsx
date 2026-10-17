import { useEffect, useRef } from 'react'
import type { CSSProperties, KeyboardEvent as ReactKeyboardEvent } from 'react'
import { Link } from 'react-router-dom'
import { lang, setLang, t } from './i18n'
import { useInstall } from './install'
import { useMenu } from './menuContext'
import { loginLater } from './loginGate'
import { signIn, signOutSync, useSync } from './sync'
import './drawer.css'

// --i controla o atraso de cada item na animação de entrada (um depois do outro)
const step = (i: number) => ({ '--i': i }) as CSSProperties

// Desenho (path) de cada ícone do menu
const I = {
  home: 'M4 11l8-7 8 7M6 9.5V20h12V9.5',
  fav: 'M12 3l2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.8 6.6 19.7l1.1-6.1L3.2 9.4l6.1-.8z',
  wish: 'M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.5 6.6 19.5l1.2-6L3.3 9.3l6.1-.7z',
  compare: 'M8 3L4 7l4 4M4 7h12M16 21l4-4-4-4M20 17H8',
  teams: 'M9 4.5a3 3 0 100 6 3 3 0 000-6zM3 19c0-3 2.7-5 6-5s6 2 6 5M17 5a3 3 0 010 6M19 14c1.6.7 2.5 2.2 2.5 4',
  mats: 'M12 3l8 4.5v9L12 21l-8-4.5v-9zM12 12l8-4.5M12 12v9M12 12L4 7.5',
  farm: 'M4 5h16v15H4zM4 10h16M8 3v4M16 3v4',
  pity: 'M4 20V10M10 20V4M16 20v-8M22 20H2',
  exp: 'M4 18l5-6 4 3 7-9M15 6h5v5',
  codes: 'M3 9a2 2 0 002-2h14a2 2 0 002 2v0a2 2 0 000 6v0a2 2 0 00-2 2H5a2 2 0 00-2-2v0a2 2 0 000-6zM10 9v6M14 9v6',
  docs: 'M6 3h9l4 4v14H6zM14 3v5h5M9 13h7M9 17h7',
  user: 'M12 12a4 4 0 100-8 4 4 0 000 8zM4 21a8 8 0 0116 0',
  plan: 'M5 4h14v16H5zM9 9h6M9 13h6M9 17h3',
  out: 'M9 4H5v16h4M16 8l4 4-4 4M20 12H9',
}

const Icon = ({ d }: { d: string }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={d} />
  </svg>
)

function Item({ to, icon, label, i, close, sub }: { to: string; icon: string; label: string; i: number; close: () => void; sub?: boolean }) {
  return (
    <Link to={to} className={sub ? 'drawer__item drawer__item--sub' : 'drawer__item'} style={step(i)} onClick={close}>
      <Icon d={icon} />
      {label}
    </Link>
  )
}

// Grupo que abre e fecha (começa fechado para o menu caber na tela)
function Group({ label, icon, i, children }: { label: string; icon: string; i: number; children: React.ReactNode }) {
  return (
    <details className="drawer__group">
      <summary className="drawer__item" style={step(i)}>
        <Icon d={icon} />
        <span>{label}</span>
        <svg className="drawer__chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </summary>
      {children}
    </details>
  )
}

export default function Drawer() {
  const { open, closeMenu, theme, toggleTheme } = useMenu()
  const { available, install } = useInstall()
  const sync = useSync()
  const panelRef = useRef<HTMLElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const opener = document.activeElement as HTMLElement | null
    closeRef.current?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu()
    }
    document.addEventListener('keydown', onKey)

    // Trava a rolagem da página por trás enquanto o menu está aberto.
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
      opener?.focus()
    }
  }, [open, closeMenu])

  // Mantém o Tab dentro do menu enquanto ele está aberto.
  const trapTab = (e: ReactKeyboardEvent) => {
    if (e.key !== 'Tab' || !panelRef.current) return
    const items = panelRef.current.querySelectorAll<HTMLElement>('a[href], button')
    if (items.length === 0) return
    const first = items[0]
    const last = items[items.length - 1]
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault()
      last.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault()
      first.focus()
    }
  }

  const isLight = theme === 'light'

  return (
    <div className={open ? 'drawer drawer--open' : 'drawer'}>
      <div className="drawer__backdrop" onClick={closeMenu} aria-hidden="true" />

      <aside
        id="app-menu"
        ref={panelRef}
        className="drawer__panel"
        role="dialog"
        aria-modal="true"
        aria-label={t('menu')}
        onKeyDown={trapTab}
      >
        <div className="drawer__banner" style={step(0)}>
          <div className="drawer__sky" aria-hidden="true" />
          <span className="drawer__title">GENSHIN WORLD</span>
          <button ref={closeRef} className="round-btn drawer__close" aria-label={t('closeMenu')} onClick={closeMenu}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="drawer__acc" style={step(1)}>
          <div className="drawer__prof">
            {sync.user?.photo ? (
              <img className="drawer__avatar drawer__avatar--xl" src={sync.user.photo} alt="" referrerPolicy="no-referrer" />
            ) : (
              <span className="drawer__avatar drawer__avatar--xl drawer__avatar--ph">
                <Icon d={I.user} />
              </span>
            )}
            <span className="drawer__accname">
              <strong>{sync.user ? sync.user.name : t('accountGuest')}</strong>
              <small>{sync.user ? sync.user.email : t('accountGuestSub')}</small>
              {sync.user && (
                <span className="drawer__chip">
                  <i aria-hidden="true" />
                  {t('areaSynced')}
                </span>
              )}
            </span>
          </div>
          {sync.user ? (
            <div className="drawer__accrow2">
              <Link to="/data" className="drawer__accbtn drawer__accbtn--pri" onClick={closeMenu}>
                <Icon d={I.user} />
                {t('area')}
              </Link>
              <button
                className="drawer__accbtn drawer__accbtn--ic"
                aria-label={t('syncSignOut')}
                title={t('syncSignOut')}
                onClick={() => {
                  loginLater() // quem saiu de propósito não leva a tela de login na cara
                  void signOutSync()
                  closeMenu()
                }}
              >
                <Icon d={I.out} />
              </button>
            </div>
          ) : (
            sync.status !== 'off' && (
              <button
                className="drawer__accbtn drawer__accbtn--pri"
                disabled={sync.status === 'loading'}
                onClick={() => {
                  void signIn()
                  closeMenu()
                }}
              >
                <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                </svg>
                {t('syncSignIn')}
              </button>
            )
          )}
        </div>

        <nav className="drawer__nav">
          <Item to="/" icon={I.home} label={t('home')} i={2} close={closeMenu} />
          <Group label={t('menuPlan')} icon={I.plan} i={3}>
            <Item to="/favorites" icon={I.fav} label={t('favorites')} i={3} close={closeMenu} sub />
            <Item to="/wishlist" icon={I.wish} label={t('wishlist')} i={3} close={closeMenu} sub />
            <Item to="/teams" icon={I.teams} label={t('teamBuilder')} i={3} close={closeMenu} sub />
            <Item to="/compare" icon={I.compare} label={t('compare')} i={3} close={closeMenu} sub />
          </Group>
          <Group label={t('menuFarm')} icon={I.mats} i={4}>
            <Item to="/materials" icon={I.mats} label={t('materials')} i={4} close={closeMenu} sub />
            <Item to="/farm" icon={I.farm} label={t('farm')} i={4} close={closeMenu} sub />
            <Item to="/exp" icon={I.exp} label={t('exp')} i={4} close={closeMenu} sub />
          </Group>
          <Group label={t('menuWishes')} icon={I.pity} i={5}>
            <Item to="/pity" icon={I.pity} label={t('pity')} i={5} close={closeMenu} sub />
            <Item to="/codes" icon={I.codes} label={t('codes')} i={5} close={closeMenu} sub />
          </Group>
          <Item to="/docs" icon={I.docs} label={t('docs')} i={6} close={closeMenu} />
          <Item to="/teste/mualani" icon={I.docs} label={t('labChar')} i={6} close={closeMenu} />
        </nav>

        <div className="drawer__item drawer__item--row" style={step(7)}>
          <span className="drawer__label">
            {t('theme')}
            <small>{isLight ? t('themeLight') : t('themeDark')}</small>
          </span>
          <button
            className="theme-switch"
            role="switch"
            aria-checked={isLight}
            aria-label={t('themeSwitch')}
            onClick={toggleTheme}
          >
            <span className="theme-switch__knob">
              <svg className="theme-switch__icon theme-switch__icon--moon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20 14.5A8 8 0 019.5 4 8 8 0 1020 14.5z" />
              </svg>
              <svg className="theme-switch__icon theme-switch__icon--sun" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <circle cx="12" cy="12" r="4" fill="currentColor" />
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
            </span>
          </button>
        </div>

        <div className="drawer__item drawer__item--row" style={step(8)}>
          <span className="drawer__label">{t('language')}</span>
          <div className="lang-switch" role="group" aria-label={t('language')}>
            <button aria-pressed={lang === 'pt'} onClick={() => setLang('pt')}>PT-BR</button>
            <button aria-pressed={lang === 'en'} onClick={() => setLang('en')}>EN-US</button>
          </div>
        </div>
        {available && (
          <button
            className="drawer__item drawer__item--btn"
            style={step(9)}
            onClick={() => {
              closeMenu()
              void install()
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
            </svg>
            {t('installApp')}
          </button>
        )}
      </aside>
    </div>
  )
}
