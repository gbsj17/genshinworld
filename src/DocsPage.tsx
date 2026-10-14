import { useEffect, useMemo, useState } from 'react'
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
  const [current, setCurrent] = useState('')
  const [dropOpen, setDropOpen] = useState(false)

  const sections = useMemo(() => {
    const q = normalize(query.trim())
    return (doc.sections as Section[]).filter((s) => !q || normalize(sectionText(s)).includes(q))
  }, [doc, query])

  // destaca no índice o tópico que está na tela
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.docs__section'))
    if (els.length === 0) return
    const io = new IntersectionObserver(
      (entries) => {
        const seen = entries.filter((e) => e.isIntersecting)
        if (seen.length) setCurrent(seen[0].target.id.replace('doc-', ''))
      },
      { rootMargin: '-90px 0px -65% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [sections])

  useEffect(() => {
    if (!dropOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setDropOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [dropOpen])

  const go = (id: string) => {
    setDropOpen(false)
    setCurrent(id)
    document.getElementById(`doc-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  const all = doc.sections as Section[]
  const active = all.find((s) => s.id === current) ?? sections[0]

  const topics = (
    <>
      {sections.map((s) => (
        <a
          key={s.id}
          href="#/docs"
          aria-current={s.id === (active?.id ?? '') ? 'true' : undefined}
          onClick={(e) => {
            e.preventDefault()
            go(s.id)
          }}
        >
          {s.title}
        </a>
      ))}
    </>
  )

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

        <div className="docs__layout">
          <nav className="docs__side" aria-label={t('docsIndex')}>
            <span className="docs__side-title">{t('docsTopics')}</span>
            {topics}
          </nav>

          <div className="docs__bar">
            <button
              className="docs__drop"
              aria-expanded={dropOpen}
              aria-haspopup="true"
              onClick={() => setDropOpen((v) => !v)}
            >
              <span>
                {t('docsTopics')}: <b>{active?.title ?? ''}</b>
              </span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={dropOpen ? 'is-open' : ''}>
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {dropOpen && <nav className="docs__panel" aria-label={t('docsIndex')}>{topics}</nav>}
          </div>

          <article className="docs__body">
            <h1 className="docs__title">{doc.title}</h1>

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
        </div>

        <TabBar active={null} query={query} onQuery={setQuery} />
      </main>
    </>
  )
}
