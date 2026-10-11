import { useEffect, useMemo, useState } from 'react'
import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { compareVersions, getAllCharacters, getAllItems, iconChain, isVersion, newestFirst } from './api'
import type { ItemEntry } from './api'
import { ItemIcon } from './ItemIcon'
import Banners from './Banners'
import ItemModal from './ItemModal'
import type { PickedItem } from './ItemModal'
import MenuButton from './MenuButton'
import PcNav from './PcNav'
import TabBar from './TabBar'
import { Thumb } from './Thumb'
import type { CharacterSummary } from './types'
import { VISION_COLORS } from './visionColors'
import './home.css'
import './items.css'
import './news.css'

const normalize = (text: string) =>
  text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()

// Banner grande de personagem novo: arte splash, com alternativas se uma falhar.
function Banner({ c }: { c: CharacterSummary }) {
  const options = [...(c.splash ?? []), ...iconChain(c)]
  const [i, setI] = useState(0)
  const color = VISION_COLORS[c.vision] ?? '#d3bc8e'
  return (
    <Link
      to={`/character/${c.id}`}
      className="banner"
      style={{ '--banner': color } as CSSProperties}
      aria-label={`${c.name}, novo personagem`}
    >
      {options[i] && (
        <img
          key={options[i]}
          className="banner__img"
          src={options[i]}
          alt=""
          onError={() => setI((n) => n + 1)}
        />
      )}
      <span className="banner__tag">NOVO{c.version ? ` · ${c.version}` : ''}</span>
      <div className="banner__info">
        <span className="stars">{'★'.repeat(c.rarity)}</span>
        <strong>{c.name}</strong>
        <span>{[c.vision, c.weapon].filter(Boolean).join(' · ')}</span>
      </div>
    </Link>
  )
}

// Slide do banner gigante (só aparece no PC): arte splash à direita, texto à esquerda.
function HeroSlide({ c, active }: { c: CharacterSummary; active: boolean }) {
  const options = [...(c.splash ?? []), ...iconChain(c)]
  const [i, setI] = useState(0)
  const color = VISION_COLORS[c.vision] ?? '#d3bc8e'
  return (
    <div
      className={active ? 'hero-slide is-active' : 'hero-slide'}
      style={{ '--banner': color } as CSSProperties}
      aria-hidden={!active}
    >
      {options[i] && (
        <img
          key={options[i]}
          className="hero-slide__img"
          src={options[i]}
          alt=""
          onError={() => setI((n) => n + 1)}
        />
      )}
      <div className="hero-slide__info">
        <span className="hero-slide__tag">NOVO{c.version ? ` · VERSÃO ${c.version}` : ''}</span>
        <strong className="hero-slide__name">{c.name}</strong>
        <div className="hero-slide__chips">
          {[c.vision, c.weapon, `${c.rarity}★`, c.nation].filter(Boolean).map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        {c.description && <p className="hero-slide__desc">{c.description}</p>}
        <div className="hero-slide__actions">
          <Link to={`/character/${c.id}`} className="hero-slide__btn" tabIndex={active ? 0 : -1}>
            Ver ficha
          </Link>
          <Link to={`/character/${c.id}?tab=builds`} className="hero-slide__btn hero-slide__btn--ghost" tabIndex={active ? 0 : -1}>
            Ver build
          </Link>
        </div>
      </div>
    </div>
  )
}

// Carrossel de tela cheia: troca sozinho, pausa com o mouse em cima.
function Hero({ chars }: { chars: CharacterSummary[] }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const n = chars.length

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (paused || n < 2) return
    const t = window.setInterval(() => setIndex((i) => (i + 1) % n), 6000)
    return () => window.clearInterval(t)
  }, [paused, n, index])

  const go = (d: number) => setIndex((i) => (i + d + n) % n)

  return (
    <section
      className="news-hero"
      aria-label="Novos personagens"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {chars.map((c, k) => (
        <HeroSlide key={c.id} c={c} active={k === index} />
      ))}
      {n > 1 && (
        <>
          <button className="hero-arrow hero-arrow--prev" aria-label="Anterior" onClick={() => go(-1)}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </button>
          <button className="hero-arrow hero-arrow--next" aria-label="Próximo" onClick={() => go(1)}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="hero-dots">
            {chars.map((c, k) => (
              <button
                key={c.id}
                className={k === index ? 'hero-dot is-active' : 'hero-dot'}
                aria-label={`Ir para ${c.name}`}
                aria-current={k === index}
                onClick={() => setIndex(k)}
              />
            ))}
          </div>
        </>
      )}
      <button
        className={scrolled ? 'scroll-hint is-hidden' : 'scroll-hint'}
        aria-label="Ver mais novidades abaixo"
        onClick={() => window.scrollBy({ top: 360, behavior: 'smooth' })}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
    </section>
  )
}

export function CharCard({ c }: { c: CharacterSummary }) {
  return (
    <Link
      to={`/character/${c.id}`}
      className="item-card"
      style={{ '--ring': VISION_COLORS[c.vision] ?? '#d3bc8e' } as CSSProperties}
    >
      <Thumb round src={iconChain(c)} label={c.name} />
      <strong>{c.name}</strong>
      <span>
        {c.vision} · {c.rarity}★
      </span>
    </Link>
  )
}

export function ItemCard({ kind, e, onPick }: { kind: 'weapon' | 'artifact'; e: ItemEntry; onPick: (p: PickedItem) => void }) {
  return (
    <button className="item-card" onClick={() => onPick({ kind, name: e.name, note: '' })}>
      <ItemIcon kind={kind} name={e.name} />
      <strong>{e.name}</strong>
      <span>{e.info.rarity > 0 ? `${e.info.rarity}★` : ''}</span>
    </button>
  )
}

function Section({ title, to, className, children }: { title: string; to?: string; className?: string; children: React.ReactNode }) {
  return (
    <section className={className ? `news-sec ${className}` : 'news-sec'}>
      <div className="news-head">
        <h2 className="news-title">{title}</h2>
        {to && (
          <Link to={to} className="news-more">
            Ver tudo
          </Link>
        )}
      </div>
      {children}
    </section>
  )
}

// Início: novidades da versão mais recente (e busca geral pelo botão Pesquisa).
export default function NewsPage() {
  const [chars, setChars] = useState<CharacterSummary[]>([])
  const [weapons, setWeapons] = useState<ItemEntry[]>([])
  const [artifacts, setArtifacts] = useState<ItemEntry[]>([])
  const [materials, setMaterials] = useState<ItemEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [picked, setPicked] = useState<PickedItem | null>(null)

  useEffect(() => {
    let active = true
    Promise.allSettled([getAllCharacters(), getAllItems('weapons'), getAllItems('artifacts')]).then(
      ([c, w, a]) => {
        if (!active) return
        if (c.status === 'fulfilled') setChars(c.value)
        if (w.status === 'fulfilled') setWeapons(w.value)
        if (a.status === 'fulfilled') setArtifacts(a.value)
        setLoading(false)
      },
    )
    // materiais são muitos: carregam por último e não seguram o resto da tela
    getAllItems('materials')
      .then((m) => active && setMaterials(m))
      .catch(() => {})
    return () => {
      active = false
    }
  }, [])

  // versão mais nova que aparece em qualquer lista
  const latest = useMemo(() => {
    const all = [
      ...chars.map((c) => c.version),
      ...weapons.map((w) => w.info.version),
      ...artifacts.map((a) => a.info.version),
    ].filter(isVersion)
    return all.length ? all.reduce((a, b) => (compareVersions(a, b) >= 0 ? a : b)) : null
  }, [chars, weapons, artifacts])

  // Últimos lançados (não só os da versão atual): ordenados por versão e id.
  const itemKey = (e: ItemEntry) => e.info
  const newChars = newestFirst(chars, (c) => ({ version: c.version, id: c.dbId })).slice(0, 4)
  const newWeapons = newestFirst(weapons, itemKey).slice(0, 8)
  const newArtifacts = newestFirst(artifacts, itemKey).slice(0, 6)
  const newest = (list: ItemEntry[]) => {
    const own = list.map((e) => e.info.version).filter(isVersion)
    if (own.length === 0) return { items: [] as ItemEntry[], version: null }
    const top = own.reduce((a, b) => (compareVersions(a, b) >= 0 ? a : b))
    return { items: list.filter((e) => e.info.version === top), version: top }
  }
  const nm = newest(materials.filter((m) => m.info.urls.length > 0))
  const newMaterials = [...nm.items].sort((a, b) => b.info.rarity - a.info.rarity).slice(0, 30)
  const tag = (v: string | null) => (v && v !== latest ? ` · ${v}` : '')

  const q = normalize(query.trim())
  const searching = q.length > 0
  const hit = <T extends { name: string }>(list: T[]) =>
    list.filter((x) => normalize(x.name).includes(q)).slice(0, 12)

  return (
    <>
    <PcNav active="home" overlay={!searching && newChars.length > 0} query={query} onQuery={setQuery} placeholder="Buscar personagens, armas e artefatos" />
    <main className={!searching && newChars.length > 0 ? 'screen home news-screen has-hero' : 'screen home news-screen'}>
      <header className="home-top">
        <div>
          <h1 className="home-title">Genshin World</h1>
          <span className="home-cap">{searching ? 'RESULTADOS' : 'INÍCIO'}</span>
        </div>
        <MenuButton />
      </header>

      {!loading && !searching && newChars.length > 0 && <Hero chars={newChars} />}

      <div className="news-body">

      {loading && <p className="empty">Carregando...</p>}

      {!loading && !searching && (
        <>
          <p className="news-version">
            {latest ? (
              <>
                Versão <strong>{latest}</strong>
              </>
            ) : (
              'Novidades indisponíveis no momento.'
            )}
          </p>

          <Banners chars={chars} onPickWeapon={setPicked} placement="top" />

          {newChars.length > 0 && (
            <Section title="Novos personagens" to="/characters" className="news-chars">
              <div className="banners">
                {newChars.map((c) => (
                  <Banner key={c.id} c={c} />
                ))}
              </div>
            </Section>
          )}

          <div className="news-duo">
          {newWeapons.length > 0 && (
            <Section title="Novas armas" to="/weapons">
              <div className="hrow hrow--fill" style={{ '--n': newWeapons.length } as CSSProperties}>
                {newWeapons.map((e) => (
                  <ItemCard key={e.name} kind="weapon" e={e} onPick={setPicked} />
                ))}
              </div>
            </Section>
          )}

          {newArtifacts.length > 0 && (
            <Section title="Novos artefatos" to="/artifacts">
              <div className="hrow hrow--fill" style={{ '--n': newArtifacts.length } as CSSProperties}>
                {newArtifacts.map((e) => (
                  <ItemCard key={e.name} kind="artifact" e={e} onPick={setPicked} />
                ))}
              </div>
            </Section>
          )}
          </div>

          <Banners chars={chars} onPickWeapon={setPicked} placement="low" />

          {newMaterials.length > 0 && (
            <Section title={`Novos materiais${tag(nm.version)}`} className="news-mats">
              <div className="hrow hrow--small">
                {newMaterials.map((m) => (
                  <div className="mat-card" key={m.name}>
                    <Thumb src={m.info.urls} label={m.name} />
                    <strong>{m.name}</strong>
                    {m.info.type && <span>{m.info.type}</span>}
                  </div>
                ))}
              </div>
            </Section>
          )}
        </>
      )}

      {!loading && searching && (
        <>
          {hit(chars).length > 0 && (
            <Section title="Personagens">
              <div className="item-grid">
                {hit(chars).map((c) => (
                  <CharCard key={c.id} c={c} />
                ))}
              </div>
            </Section>
          )}
          {hit(weapons).length > 0 && (
            <Section title="Armas">
              <div className="item-grid">
                {hit(weapons).map((e) => (
                  <ItemCard key={e.name} kind="weapon" e={e} onPick={setPicked} />
                ))}
              </div>
            </Section>
          )}
          {hit(artifacts).length > 0 && (
            <Section title="Artefatos">
              <div className="item-grid">
                {hit(artifacts).map((e) => (
                  <ItemCard key={e.name} kind="artifact" e={e} onPick={setPicked} />
                ))}
              </div>
            </Section>
          )}
          {hit(chars).length + hit(weapons).length + hit(artifacts).length === 0 && (
            <p className="empty">Nada encontrado.</p>
          )}
        </>
      )}

      </div>

      <TabBar active="home" query={query} onQuery={setQuery} />
      {picked && <ItemModal item={picked} onClose={() => setPicked(null)} />}
    </main>
    </>
  )
}
