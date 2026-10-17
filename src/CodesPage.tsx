import { useEffect, useState } from 'react'
import { getCodes, redeemUrl } from './codes'
import type { CodesFile } from './codes'
import ErrorMsg from './ErrorMsg'
import { isPt, t } from './i18n'
import MenuButton from './MenuButton'
import PcNav from './PcNav'
import TabBar from './TabBar'
import './tools.css'

// Códigos de resgate: lista do codes.json (gerado todo dia), com copiar e atalho para o site oficial.
export default function CodesPage() {
  const [data, setData] = useState<CodesFile | null>(null)
  const [failed, setFailed] = useState(false)
  const [copied, setCopied] = useState<string | null>(null)

  useEffect(() => {
    let active = true
    getCodes()
      .then((d) => active && setData(d))
      .catch(() => active && setFailed(true))
    return () => {
      active = false
    }
  }, [])

  const copy = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(code)
      window.setTimeout(() => setCopied((c) => (c === code ? null : c)), 1800)
    } catch {
      // sem permissão para copiar: o código continua visível para copiar à mão
    }
  }

  const date = data?.updatedAt ? new Date(data.updatedAt).toLocaleDateString(isPt ? 'pt-BR' : 'en-US') : null

  return (
    <>
      <PcNav active={null} />
      <main className="screen home tool">
        <header className="home-top">
          <div>
            <h1 className="home-title">Genshin World</h1>
            <span className="home-cap">{t('capCodes')}</span>
          </div>
          <MenuButton />
        </header>

        <div className="tool__body farm">
          <h1 className="tool__title">{t('codes')}</h1>
          <p className="tool__muted">{t('codesIntro')}</p>

          {failed && <ErrorMsg text={t('codesFail')} />}
          {!failed && !data && <p className="empty">{t('loading')}</p>}
          {data && data.codes.length === 0 && <p className="empty">{t('codesNone')}</p>}

          {data && data.codes.length > 0 && (
            <ul className="codes__list">
              {data.codes.map((c) => (
                <li key={c.code} className="codes__item">
                  <div className="codes__main">
                    <code className="codes__code">{c.code}</code>
                    {c.rewards.length > 0 && <small className="tool__muted">{c.rewards.join(' · ')}</small>}
                  </div>
                  <div className="codes__acts">
                    <button className="tool-btn" onClick={() => void copy(c.code)}>
                      {copied === c.code ? t('codesCopied') : t('codesCopy')}
                    </button>
                    <a className="tool-btn tool-btn--ghost" href={redeemUrl(c.code)} target="_blank" rel="noreferrer">
                      {t('codesRedeem')} ↗
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {data && (date || data.source) && (
            <small className="tool__muted">
              {[date && t('codesUpdated', { d: date }), data.source && t('codesSource', { s: data.source })].filter(Boolean).join(' · ')}
            </small>
          )}
        </div>

        <TabBar active={null} query="" onQuery={() => {}} noSearch />
      </main>
    </>
  )
}
