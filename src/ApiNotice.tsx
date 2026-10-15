import { useState } from 'react'
import { useApiDegraded } from './apiStatus'
import { t } from './i18n'

// Faixa discreta: avisa que os dados estão vindo da lista reserva (mais antiga e reduzida).
export default function ApiNotice() {
  const degraded = useApiDegraded()
  const [hidden, setHidden] = useState(false)
  if (!degraded || hidden) return null
  return (
    <div className="api-notice" role="status">
      <span>{t('apiDegraded')}</span>
      <button onClick={() => setHidden(true)} aria-label={t('close')}>×</button>
    </div>
  )
}
