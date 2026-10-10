import { useMenu } from './menuContext'

// variant "glass" = botão translúcido para ficar por cima da imagem da ficha
export default function MenuButton({ variant }: { variant?: 'glass' }) {
  const { open, openMenu } = useMenu()
  return (
    <button
      className={variant === 'glass' ? 'glass-btn' : 'round-btn'}
      aria-label="Abrir menu"
      aria-haspopup="dialog"
      aria-expanded={open}
      aria-controls="app-menu"
      onClick={openMenu}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
        <path d="M4 7h16M4 12h16M4 17h16" />
      </svg>
    </button>
  )
}
