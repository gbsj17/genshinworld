import { t } from './i18n'
import './footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>
        {t('footerBy', { a: 'Genival Souza Júnior' })} · {new Date().getFullYear()}
      </p>
      <p>
        {t('footerCompany', { c: '' })}
        <strong>RUNEbyte</strong>
      </p>
    </footer>
  )
}
