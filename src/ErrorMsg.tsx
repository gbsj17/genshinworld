import { t } from './i18n'

// Mensagem de erro com botão para tentar de novo (as listas são buscadas outra vez ao recarregar).
export default function ErrorMsg({ text }: { text: string }) {
  return (
    <div className="empty">
      <p>{text}</p>
      <button className="pill" onClick={() => window.location.reload()}>
        {t('retry')}
      </button>
    </div>
  )
}
