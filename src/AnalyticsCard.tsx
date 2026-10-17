import { analyticsAvailable } from './firebaseConfig'
import { setConsent, useConsent } from './analytics'
import { t } from './i18n'

// Em "Meus dados": ligar ou desligar a contagem de acessos.
export default function AnalyticsCard() {
  const consent = useConsent()
  if (!analyticsAvailable) return null
  return (
    <section className="mat__result data__box">
      <h2>{t('anaTitle')}</h2>
      <p className="tool__muted">{t('anaHint')}</p>
      <button className="tool-btn" aria-pressed={consent === 'yes'} onClick={() => setConsent(consent === 'yes' ? 'no' : 'yes')}>
        {consent === 'yes' ? t('anaOff') : t('anaOn')}
      </button>
    </section>
  )
}
