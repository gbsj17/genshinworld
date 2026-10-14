import { useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import DOCS from './data/docs.json'
import { isPt, t } from './i18n'
import MenuButton from './MenuButton'
import PcNav from './PcNav'
import TabBar from './TabBar'
import './docs.css'

type Block = { p?: string; ul?: string[]; code?: string }
interface Section {
  id: string
  title: string
  blocks: Block[]
}

const normalize = (text: string) =>
  text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()

// Texto com `código` e **negrito**
function Inline({ text }: { text: string }) {
  const parts: ReactNode[] = text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g).map((s, i) => {
    if (s.startsWith('`')) return <code key={i}>{s.slice(1, -1)}</code>
    if (s.startsWith('**')) return <strong key={i}>{s.slice(2, -2)}</strong>
    return s
  })
  return <>{parts}</>
}

const sectionText = (s: Section) =>
  [s.title, ...s.blocks.flatMap((b) => [b.p ?? '', ...(b.ul ?? []), b.code ?? ''])].join(' ')

// Documentação do site, lida no idioma escolhido no menu.
export default function DocsPage() {
  const doc = isPt ? DOCS.pt : DOCS.en
  const [query, setQuery] = useState('')

  const sections = useMemo(() => {
    const q = normalize(query.trim())
    return (doc.sections as Section[]).filter((s) => !q || normalize(sectionText(s)).includes(q))
  }, [doc, query])

  return (
    <>
      <PcNav active={null} query={query} onQuery={setQuery} placeholder={t('searchDocs')} />
      <main className="screen home docs">
        <header className="home-top">
          <div>
            <h1 className="home-title">Genshin World</h1>
            <span className="home-cap">{t('capDocs')}</span>
          </div>
          <MenuButton />
        </header>

        <article className="docs__body">
          <h1 className="docs__title">{doc.title}</h1>

          {!query.trim() && (
            <nav className="docs__toc" aria-label={t('docsIndex')}>
              {(doc.sections as Section[]).map((s) => (
                <a key={s.id} href={`#/docs`} onClick={(e) => {
                  e.preventDefault()
                  document.getElementById(`doc-${s.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}>
                  {s.title}
                </a>
              ))}
            </nav>
          )}

          {sections.length === 0 && <p className="empty">{t('nothingFound')}</p>}

          {sections.map((s) => (
            <section key={s.id} id={`doc-${s.id}`} className="docs__section">
              <h2>{s.title}</h2>
              {s.blocks.map((b, i) =>
                b.p ? (
                  <p key={i}><Inline text={b.p} /></p>
                ) : b.ul ? (
                  <ul key={i}>
                    {b.ul.map((li, j) => (
                      <li key={j}><Inline text={li} /></li>
                    ))}
                  </ul>
                ) : b.code ? (
                  <pre key={i}><code>{b.code}</code></pre>
                ) : null,
              )}
            </section>
          ))}
        </article>

        <TabBar active={null} query={query} onQuery={setQuery} />
      </main>
    </>
  )
}
