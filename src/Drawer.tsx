import { useEffect, useRef } from 'react'
import type { CSSProperties, KeyboardEvent as ReactKeyboardEvent } from 'react'
import { Link } from 'react-router-dom'
import { useMenu } from './menuContext'
import './drawer.css'

// --i controla o atraso de cada item na animação de entrada (um depois do outro)
const step = (i: number) => ({ '--i': i }) as CSSProperties

export default function Drawer() {
  const { open, closeMenu, theme, toggleTheme } = useMenu()
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
        aria-label="Menu"
        onKeyDown={trapTab}
      >
        <div className="drawer__head" style={step(0)}>
          <div>
            <span className="drawer__title">GENSHIN WORLD</span>
            <span className="drawer__sub">Personagens, builds e equipes</span>
          </div>
          <button
            ref={closeRef}
            className="round-btn"
            aria-label="Fechar menu"
            onClick={closeMenu}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <nav className="drawer__nav">
          <Link to="/" className="drawer__item" style={step(1)} onClick={closeMenu}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 11l8-7 8 7M6 9.5V20h12V9.5" />
            </svg>
            Início
          </Link>
          <Link to="/favorites" className="drawer__item" style={step(2)} onClick={closeMenu}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3l2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.8 6.6 19.7l1.1-6.1L3.2 9.4l6.1-.8z" />
            </svg>
            Favoritos
          </Link>
        </nav>

        <div className="drawer__item drawer__item--row" style={step(3)}>
          <span className="drawer__label">
            Tema
            <small>{isLight ? 'Areia claro' : 'Escuro'}</small>
          </span>
          <button
            className="theme-switch"
            role="switch"
            aria-checked={isLight}
            aria-label="Tema areia claro"
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
      </aside>
    </div>
  )
}
