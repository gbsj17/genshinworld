import { loginLater } from './loginGate'
import { signIn, signOutSync, syncNow, useSync } from './sync'
import { t } from './i18n'

// Cartão de "Meus dados": entrar/sair da conta Google e estado da sincronização.
export default function SyncCard() {
  const s = useSync()
  if (s.status === 'off') return null
  const hour = s.lastSync ? new Date(s.lastSync).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''
  const line =
    s.status === 'loading'
      ? t('syncLoading')
      : s.status === 'saving'
        ? t('syncSaving')
        : s.status === 'error'
          ? t('syncErr')
          : s.lastSync
            ? t('syncOk', { h: hour })
            : ''

  return (
    <section className="mat__result data__box sync-card">
      <h2>{t('syncTitle')}</h2>
      {!s.user ? (
        <>
          <p className="tool__muted">{t('syncIntro')}</p>
          {s.status === 'error' && <p className="data__msg data__msg--bad" role="status">{t('syncErr')}</p>}
          <button className="tool-btn sync-card__google" onClick={() => void signIn()} disabled={s.status === 'loading'}>
            <span className="sync-card__g" aria-hidden="true">G</span>
            {s.status === 'loading' ? t('syncLoading') : t('syncSignIn')}
          </button>
        </>
      ) : (
        <>
          <div className="sync-card__user">
            {s.user.photo ? <img src={s.user.photo} alt="" referrerPolicy="no-referrer" /> : <span aria-hidden="true">{s.user.name.slice(0, 1)}</span>}
            <div>
              <strong>{s.user.name}</strong>
              <small>{s.user.email}</small>
            </div>
          </div>
          {line && (
            <p className={s.status === 'error' ? 'data__msg data__msg--bad' : 'tool__muted'} role="status">
              {line}
            </p>
          )}
          <div className="sync-card__acts">
            <button className="tool-btn" onClick={() => void syncNow()} disabled={s.status === 'loading' || s.status === 'saving'}>
              {t('syncNow')}
            </button>
            <button className="tool-btn tool-btn--ghost" onClick={() => {
              loginLater()
              void signOutSync()
            }}>{t('syncSignOut')}</button>
          </div>
          <small className="tool__muted">{t('syncOutNote')}</small>
        </>
      )}
    </section>
  )
}
