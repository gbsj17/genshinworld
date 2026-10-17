import { setConsent } from './analytics'
import { t } from './i18n'

// Pergunta uma vez se pode contar os acessos (sem isso nada é enviado).
export default function AnalyticsPrompt() {
  return (
    <div className="api-notice sync-notice" role="dialog" aria-label={t('anaTitle')}>
      <span>{t('anaAsk')}</span>
      <button className="sync-notice__btn" onClick={() => setConsent('yes')}>{t('anaYes')}</button>
      <button className="sync-notice__btn" onClick={() => setConsent('no')}>{t('anaNo')}</button>
    </div>
  )
}
