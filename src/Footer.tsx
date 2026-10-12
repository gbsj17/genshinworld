import { t } from './i18n'
import './footer.css'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>
        {t('footerBy', { a: 'Genival Souza Júnior' })} · {YEAR}
      </p>
      <p>
        {t('footerCompany', { c: '' })}
        <strong>RUNEbyte</strong>
      </p>
    </footer>
  )
}
