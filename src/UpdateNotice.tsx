import { useEffect, useState } from 'react'
import { t } from './i18n'
import './update.css'

// Aviso quando uma versão nova do app assume o lugar da que está aberta.
export default function UpdateNotice() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    if (!('serviceWorker' in navigator)) return
    const had = Boolean(navigator.serviceWorker.controller)
    if (!had) return // primeira visita: não há versão anterior
    const on = () => setShow(true)
    navigator.serviceWorker.addEventListener('controllerchange', on)
    return () => navigator.serviceWorker.removeEventListener('controllerchange', on)
  }, [])
  if (!show) return null
  return (
    <div className="update" role="status">
      <span>{t('updateAvail')}</span>
      <button className="update__go" onClick={() => window.location.reload()}>
        {t('updateBtn')}
      </button>
      <button className="update__later" onClick={() => setShow(false)}>
        {t('updateLater')}
      </button>
    </div>
  )
}
