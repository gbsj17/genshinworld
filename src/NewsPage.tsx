import { useEffect, useMemo, useState } from 'react'
import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { compareVersions, getAllCharacters, getAllItems, iconChain, isVersion } from './api'
import type { ItemEntry } from './api'
import { ItemIcon } from './ItemIcon'
import ItemModal from './ItemModal'
import type { PickedItem } from './ItemModal'
import MenuButton from './MenuButton'
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
function Banner({ c, version }: { c: CharacterSummary; version: string }) {
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
      <span className="banner__tag">NOVO · {version}</span>
      <div className="banner__info">
        <span className="stars">{'★'.repeat(c.rarity)}</span>
        <strong>{c.name}</strong>
        <span>{[c.vision, c.weapon].filter(Boolean).join(' · ')}</span>
      </div>
    </Link>
  )
}

function CharCard({ c }: { c: CharacterSummary }) {
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

function ItemCard({ kind, e, onPick }: { kind: 'weapon' | 'artifact'; e: ItemEntry; onPick: (p: PickedItem) => void }) {
  return (
    <button className="item-card" onClick={() => onPick({ kind, name: e.name, note: '' })}>
      <ItemIcon kind={kind} name={e.name} />
      <strong>{e.name}</strong>
      <span>{e.info.rarity > 0 ? `${e.info.rarity}★` : ''}</span>
    </button>
  )
}

function Section({ title, to, children }: { title: string; to?: string; children: React.ReactNode }) {
  return (
    <section className="news-sec">
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

  const newChars = chars.filter((c) => latest && c.version === latest)
  // Itens da versão mais nova; se a lista não tiver nada nela, usa a versão mais nova da própria lista.
  const newest = (list: ItemEntry[]): { items: ItemEntry[]; version: string | null } => {
    const own = list.map((e) => e.info.version).filter(isVersion)
    if (own.length === 0) return { items: [], version: null }
    const top = own.reduce((a, b) => (compareVersions(a, b) >= 0 ? a : b))
    const version = latest && list.some((e) => e.info.version === latest) ? latest : top
    return { items: list.filter((e) => e.info.version === version), version }
  }
  const nw = newest(weapons)
  const na = newest(artifacts)
  const nm = newest(materials.filter((m) => m.info.urls.length > 0))
  const newWeapons = nw.items
  const newArtifacts = na.items
  const newMaterials = [...nm.items].sort((a, b) => b.info.rarity - a.info.rarity).slice(0, 30)
  const tag = (v: string | null) => (v && v !== latest ? ` · ${v}` : '')

  const q = normalize(query.trim())
  const searching = q.length > 0
  const hit = <T extends { name: string }>(list: T[]) =>
    list.filter((x) => normalize(x.name).includes(q)).slice(0, 12)

  return (
    <main className="screen home">
      <header className="home-top">
        <div>
          <h1 className="home-title">Genshin World</h1>
          <span className="home-cap">{searching ? 'RESULTADOS' : 'INÍCIO'}</span>
        </div>
        <MenuButton />
      </header>

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

          {newChars.length > 0 && (
            <Section title="Novos personagens" to="/characters">
              <div className="banners">
                {newChars.map((c) => (
                  <Banner key={c.id} c={c} version={latest as string} />
                ))}
              </div>
            </Section>
          )}

          {newWeapons.length > 0 && (
            <Section title={`Novas armas${tag(nw.version)}`} to="/weapons">
              <div className="hrow">
                {newWeapons.map((e) => (
                  <ItemCard key={e.name} kind="weapon" e={e} onPick={setPicked} />
                ))}
              </div>
            </Section>
          )}

          {newArtifacts.length > 0 && (
            <Section title={`Novos artefatos${tag(na.version)}`} to="/artifacts">
              <div className="hrow">
                {newArtifacts.map((e) => (
                  <ItemCard key={e.name} kind="artifact" e={e} onPick={setPicked} />
                ))}
              </div>
            </Section>
          )}

          {newMaterials.length > 0 && (
            <Section title={`Novos materiais${tag(nm.version)}`}>
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

      <TabBar active="home" query={query} onQuery={setQuery} />
      {picked && <ItemModal item={picked} onClose={() => setPicked(null)} />}
    </main>
  )
}
