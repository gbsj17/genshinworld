import { applyUpdate, dismissPrompt, resolveConflict, useSync } from './sync'
import { t } from './i18n'
import './tools.css'

// Avisos globais da sincronização: escolha quando há conflito e aviso de dados novos.
export default function SyncPrompts() {
  const { status } = useSync()

  if (status === 'update') {
    return (
      <div className="api-notice sync-notice" role="status">
        <span>{t('syncUpdate')}</span>
        <button className="sync-notice__btn" onClick={applyUpdate}>{t('syncUpdateBtn')}</button>
        <button aria-label={t('close')} onClick={dismissPrompt}>×</button>
      </div>
    )
  }

  if (status !== 'conflict') return null
  return (
    <div className="modal sync-modal" role="alertdialog" aria-modal="true" aria-labelledby="sync-conflict-title">
      <div className="modal__backdrop" aria-hidden="true" />
      <div className="modal__panel">
        <div className="modal__body">
          <h2 id="sync-conflict-title" className="tool__title">{t('syncConflictTitle')}</h2>
          <p className="tool__muted">{t('syncConflictText')}</p>
          <div className="sync-modal__acts">
            <button className="tool-btn" onClick={() => void resolveConflict('cloud')}>{t('syncUseCloud')}</button>
            <button className="tool-btn" onClick={() => void resolveConflict('device')}>{t('syncUseDevice')}</button>
            <button className="tool-btn tool-btn--ghost" onClick={dismissPrompt}>{t('syncLater')}</button>
          </div>
        </div>
      </div>
    </div>
  )
}
