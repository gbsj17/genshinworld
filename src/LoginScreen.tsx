import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, KeyboardEvent as ReactKeyboardEvent } from 'react'
import { t } from './i18n'
import { loginLater, loginNever } from './loginGate'
import { signIn, useSync } from './sync'
import { VISION_COLORS } from './visionColors'
import './login.css'

const ELEMENTS = ['Pyro', 'Geo', 'Dendro', 'Anemo', 'Hydro', 'Cryo', 'Electro']

// Tela de login (opção C): arte com o anel dos 7 elementos e, embaixo (ou ao lado, no PC), as três escolhas.
export default function LoginScreen({ busy, onBusy, onClose }: { busy: boolean; onBusy: () => void; onClose: () => void }) {
  const { status, error } = useSync()
  const panelRef = useRef<HTMLDivElement>(null)
  const mainRef = useRef<HTMLButtonElement>(null)
  const [id] = useState(() => 'login-' + Math.random().toString(36).slice(2, 7))

  const later = () => {
    loginLater()
    onClose()
  }
  const never = () => {
    loginNever()
    onClose()
  }

  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null
    mainRef.current?.focus()
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        loginLater()
        onClose()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
      opener?.focus()
    }
  }, [onClose])

  // mantém o Tab dentro da tela
  const trap = (e: ReactKeyboardEvent) => {
    if (e.key !== 'Tab' || !panelRef.current) return
    const items = panelRef.current.querySelectorAll<HTMLElement>('button:not([disabled])')
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

  const loading = busy && status === 'loading'

  return (
    <div className="login" role="dialog" aria-modal="true" aria-labelledby={id} onKeyDown={trap}>
      <div className="login__hero" aria-hidden="true">
        <div className="login__art" />
        <div className="login__name">GENSHIN WORLD</div>
        <div className="login__orbit">
          {ELEMENTS.map((el, i) => (
            <i key={el} style={{ '--c': VISION_COLORS[el], '--a': `${Math.round((i * 360) / 7)}deg` } as CSSProperties} />
          ))}
        </div>
        <div className="login__core">
          <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z" />
          </svg>
        </div>
      </div>

      <div className="login__panel" ref={panelRef}>
        <div>
          <div className="login__eyebrow">{t('loginEyebrow')}</div>
          <h2 id={id} className="login__title">
            {t('loginTitle')}
          </h2>
        </div>
        <p className="login__text">{t('loginText')}</p>
        <ul className="login__ben">
          {(['loginB1', 'loginB2', 'loginB3'] as const).map((k) => (
            <li key={k}>
              <span aria-hidden="true">✓</span>
              {t(k)}
            </li>
          ))}
        </ul>
        <div className="login__btns">
          <button
            ref={mainRef}
            className="login__btn login__btn--google"
            disabled={loading}
            onClick={() => {
              onBusy()
              void signIn()
            }}
          >
            <svg viewBox="0 0 48 48" width="20" height="20" aria-hidden="true">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
            </svg>
            {loading ? t('loginBusy') : t('syncSignIn')}
          </button>
          <button className="login__btn" onClick={later}>
            {t('loginLater')}
          </button>
          <button className="login__link" onClick={never}>
            {t('loginNever')}
          </button>
        </div>
        {busy && status === 'error' && (
          <p className="login__err" role="alert">
            {t('loginError')}
            {error ? ` (${error})` : ''}
          </p>
        )}
      </div>
    </div>
  )
}
