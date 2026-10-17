import { useRef, useState } from 'react'
import { buildBackup, restoreBackup } from './backup'
import { t } from './i18n'
import AnalyticsCard from './AnalyticsCard'
import MenuButton from './MenuButton'
import SyncCard from './SyncCard'
import PcNav from './PcNav'
import TabBar from './TabBar'
import './tools.css'

// "Meus dados": baixar tudo o que está salvo no aparelho e colocar de volta em outro.
export default function DataPage() {
  const fileRef = useRef<HTMLInputElement>(null)
  const [msg, setMsg] = useState<{ text: string; bad?: boolean } | null>(null)

  const exportAll = () => {
    const blob = new Blob([JSON.stringify(buildBackup(), null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `genshinworld-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(url)
    setMsg({ text: t('dataExported') })
  }

  const importFile = async (file?: File) => {
    if (!file) return
    if (!window.confirm(t('dataImportAsk'))) return
    const r = restoreBackup(await file.text())
    if (!r.ok) {
      setMsg({ text: t('dataImportFail'), bad: true })
      return
    }
    setMsg({ text: t('dataImported') })
    // as listas ficam em memória; recarregar mostra tudo já restaurado
    window.setTimeout(() => window.location.reload(), 900)
  }

  return (
    <>
      <PcNav active={null} />
      <main className="screen home tool">
        <header className="home-top">
          <div>
            <h1 className="home-title">Genshin World</h1>
            <span className="home-cap">{t('capData')}</span>
          </div>
          <MenuButton />
        </header>

        <div className="tool__body farm">
          <h1 className="tool__title">{t('data')}</h1>
          <p className="tool__muted">{t('dataIntro')}</p>

          <SyncCard />
          <AnalyticsCard />

          <section className="mat__result data__box">
            <h2>{t('dataExport')}</h2>
            <p className="tool__muted">{t('dataExportHint')}</p>
            <button className="tool-btn" onClick={exportAll}>{t('dataExportBtn')}</button>
          </section>

          <section className="mat__result data__box">
            <h2>{t('dataImport')}</h2>
            <p className="tool__muted">{t('dataImportHint')}</p>
            <input
              ref={fileRef}
              type="file"
              accept="application/json,.json"
              hidden
              onChange={(e) => {
                void importFile(e.target.files?.[0])
                e.target.value = ''
              }}
            />
            <button className="tool-btn" onClick={() => fileRef.current?.click()}>{t('dataImportBtn')}</button>
          </section>

          {msg && <p className={msg.bad ? 'data__msg data__msg--bad' : 'data__msg'} role="status">{msg.text}</p>}
        </div>

        <TabBar active={null} query="" onQuery={() => {}} noSearch />
      </main>
    </>
  )
}
