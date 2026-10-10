import { useEffect, useState } from 'react'
import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { useFavorites } from './favorites'
import MenuButton from './MenuButton'
import { ItemIcon } from './ItemIcon'
import ItemModal from './ItemModal'
import type { PickedItem } from './ItemModal'
import type { Details } from './api'
import { Thumb } from './Thumb'
import { VISION_COLORS } from './visionColors'
import {
  artifactFlower,
  characterIcon,
  iconChain,
  elementIcon,
  getAllCharacters,
  getDetails,
  getCharacter,
  imageUrl,
  weaponIcon,
} from './api'
import type { CharacterSummary } from './types'
import { BUILDS } from './data/builds'

type Tab = 'overview' | 'talents' | 'constellations' | 'builds'

const TABS: { id: Tab; label: string }[] = [
  { id: 'overview', label: 'Visão geral' },
  { id: 'talents', label: 'Talentos' },
  { id: 'constellations', label: 'Constelações' },
  { id: 'builds', label: 'Builds' },
]

const SKILL_KIND: Record<string, { label: string; asset: string }> = {
  NORMAL_ATTACK: { label: 'Ataque normal', asset: 'talent-na' },
  ELEMENTAL_SKILL: { label: 'Habilidade elemental', asset: 'talent-skill' },
  ELEMENTAL_BURST: { label: 'Supremo elemental', asset: 'talent-burst' },
}

function Icon({ src }: { src: string[] }) {
  const [index, setIndex] = useState(0)
  const current = src[index]
  if (!current) return <div className="icon icon--empty" aria-hidden="true" />
  return (
    <img
      key={current}
      className="icon"
      src={current}
      alt=""
      loading="lazy"
      onError={() => setIndex((i) => i + 1)}
    />
  )
}

// Selo redondo com o ícone dentro. Se a API não tiver a imagem, o selo some.
function Badge({ src, label }: { src: string; label: string }) {
  const [failed, setFailed] = useState(false)
  if (failed) return null
  return (
    <span className="badge" title={label}>
      <img src={src} alt={label} onError={() => setFailed(true)} />
    </span>
  )
}

function Chevron() {
  return (
    <svg className="shortcut__chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 5l7 7-7 7" />
    </svg>
  )
}

export default function CharacterPage({ id }: { id: string }) {
  // character = dados básicos (de todos os personagens)
  // detail = talentos e constelações (só dos que existem na genshin.dev)
  const [character, setCharacter] = useState<CharacterSummary | null>(null)
  const [detail, setDetail] = useState<Details | null>(null)
  const [detailFailed, setDetailFailed] = useState(false)
  const [picked, setPicked] = useState<PickedItem | null>(null)
  const [all, setAll] = useState<CharacterSummary[]>([])
  const [error, setError] = useState(false)
  const [tab, setTab] = useState<Tab>('overview')
  const [portraitIndex, setPortraitIndex] = useState(0)
  const { isFavorite, toggle } = useFavorites()

  useEffect(() => {
    window.scrollTo(0, 0)
    const controller = new AbortController()
    getAllCharacters()
      .then((list) => {
        const found = list.find((c) => c.id === id)
        if (!found) throw new Error('Personagem não encontrado')
        setCharacter(found)
        setAll(list)
        // Talentos e constelações: genshin-db (todos); genshin.dev só como plano B.
        getDetails(found.name)
          .then(setDetail)
          .catch(() => {
            if (!found.devId) return setDetailFailed(true)
            getCharacter(found.devId, controller.signal)
              .then((d) =>
                setDetail({
                  skillTalents: d.skillTalents.map((t) => ({
                    ...t,
                    icons: [imageUrl(found.devId!, SKILL_KIND[t.type ?? '']?.asset ?? 'talent-na')],
                  })),
                  passiveTalents: d.passiveTalents.map((t, i) => ({
                    ...t,
                    icons: [imageUrl(found.devId!, `talent-passive-${i}`)],
                  })),
                  constellations: d.constellations.map((c) => ({
                    ...c,
                    icons: [imageUrl(found.devId!, `constellation-${c.level}`)],
                  })),
                }),
              )
              .catch(() => setDetailFailed(true))
          })
      })
      .catch(() => setError(true))
    return () => controller.abort()
  }, [id])

  if (error) {
    return <main className="screen screen--message">Não foi possível carregar o personagem.</main>
  }
  if (!character) {
    return <main className="screen screen--message">Carregando...</main>
  }

  const accent = VISION_COLORS[character.vision] ?? '#d3bc8e'
  const style = { '--accent': accent } as CSSProperties
  const build = BUILDS[id]
  const devId = character.devId
  // Tenta cada imagem em ordem; a última alternativa é o ícone do personagem,
  // para o topo da ficha nunca ficar vazio.
  const splash = character.splash ?? []
  const fallbackPortraits = [
    ...(devId ? [imageUrl(devId, 'portrait')] : []),
    ...(character.portrait ? [character.portrait] : []),
  ]
  // Splash primeiro (todos iguais e centralizados); retrato só se a splash falhar.
  const portraitOptions = [...splash, ...fallbackPortraits, ...(character.icons ?? [])]
  const portrait = portraitOptions[portraitIndex]
  const isArt = Boolean(portrait && !fallbackPortraits.includes(portrait))
  const visibleTabs = TABS

  // Ícone do membro da equipe: procura pelo nome na lista completa (mesma fonte da home)
  const memberHit = (m: { name: string }) => {
    const n = m.name.toLowerCase()
    return all.find((c) => {
      const cn = c.name.toLowerCase()
      return cn === n || cn.endsWith(` ${n}`) || cn.startsWith(`${n} `)
    })
  }
  const memberIcons = (m: { name: string; id?: string; icon?: string }) => {
    const hit = memberHit(m)
    return [
      ...(hit ? iconChain(hit) : []),
      ...(m.id ? [characterIcon(m.id)] : []),
      ...(m.icon ? [m.icon] : []),
    ]
  }

  const firstWeapon = build?.weapons[0]
  const firstTeam = build?.teams[0]

  return (
    <main className="screen sheet-screen" style={style}>
      <section className="hero">
        <div className="hero__bar">
          <Link to="/characters" className="glass-btn" aria-label="Voltar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </Link>
          <div className="hero__actions">
            <button
              className="glass-btn"
              aria-label={isFavorite(id) ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
              aria-pressed={isFavorite(id)}
              onClick={() => toggle(id)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill={isFavorite(id) ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3l2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.8 6.6 19.7l1.1-6.1L3.2 9.4l6.1-.8z" />
              </svg>
            </button>
            <MenuButton variant="glass" />
          </div>
        </div>
        {portrait && (
          <img
            key={portrait}
            className={isArt ? 'hero__img hero__img--art' : 'hero__img'}
            src={portrait}
            alt={character.name}
            onError={() => setPortraitIndex((i) => i + 1)}
          />
        )}
      </section>

      <section className="sheet">
        <div className="sheet__handle" aria-hidden="true" />
        <div className="sheet__badges">
          <Badge src={elementIcon(character.vision)} label={character.vision} />
          <span className="stars" role="img" aria-label={`${character.rarity} estrelas`}>
            {'★'.repeat(character.rarity)}
          </span>
        </div>
        <h1>{character.name}</h1>
        <p className="sheet__sub">
          {[character.vision, character.weapon, character.nation].filter(Boolean).join(' · ')}
        </p>

        <div className="segments" role="tablist" aria-label="Seções da ficha">
          {visibleTabs.map((t) => (
            <button
              key={t.id}
              role="tab"
              className="segment"
              aria-selected={t.id === tab}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="content">
          {tab === 'overview' && (
            <>
              <div className="grid">
                <div className="card">
                  <span className="card__label">Elemento</span>
                  <strong className="card__value">{character.vision}</strong>
                </div>
                <div className="card">
                  <span className="card__label">Arma</span>
                  <strong className="card__value">{character.weapon}</strong>
                </div>
                {character.nation && (
                  <div className="card">
                    <span className="card__label">Nação</span>
                    <strong className="card__value">{character.nation}</strong>
                  </div>
                )}
                <div className="card">
                  <span className="card__label">Raridade</span>
                  <strong className="card__value">{character.rarity} estrelas</strong>
                </div>
              </div>

              {firstWeapon && (
                <button className="shortcut" onClick={() => setTab('builds')}>
                  <ItemIcon kind="weapon" name={firstWeapon.name} fallback={firstWeapon.id ? weaponIcon(firstWeapon.id) : undefined} />
                  <span className="shortcut__body">
                    <span className="shortcut__kind">Melhor arma</span>
                    <span className="shortcut__name">{firstWeapon.name}</span>
                  </span>
                  <Chevron />
                </button>
              )}
              {firstTeam && (
                <button className="shortcut" onClick={() => setTab('builds')}>
                  <span className="stack">
                    {firstTeam.members.map((m) => (
                      <Thumb key={m.name} round src={memberIcons(m)} label={m.name} />
                    ))}
                  </span>
                  <span className="shortcut__body">
                    <span className="shortcut__kind">Equipe sugerida</span>
                    <span className="shortcut__name">{firstTeam.name}</span>
                  </span>
                  <Chevron />
                </button>
              )}
            </>
          )}

        {(tab === 'talents' || tab === 'constellations') && !detail && (
          <p className="empty">{detailFailed ? 'Não foi possível carregar.' : 'Carregando...'}</p>
        )}

        {tab === 'talents' && detail && (
          <>
            {detail.skillTalents.map((t) => {
              const kind = SKILL_KIND[t.type ?? '']
              return (
                <article className="row" key={t.name}>
                  <Icon src={t.icons ?? []} />
                  <div>
                    <span className="row__kind">{kind?.label ?? 'Talento'}</span>
                    <h2>{t.name}</h2>
                    <p>{t.description}</p>
                  </div>
                </article>
              )
            })}
            {detail.passiveTalents.map((t) => (
              <article className="row" key={t.name}>
                <Icon src={t.icons ?? []} />
                <div>
                  <span className="row__kind">Passivo{t.unlock ? ` · ${t.unlock}` : ''}</span>
                  <h2>{t.name}</h2>
                  <p>{t.description}</p>
                </div>
              </article>
            ))}
          </>
        )}

        {tab === 'constellations' &&
          detail &&
          detail.constellations.map((c) => (
            <article className="row" key={c.name}>
              <Icon src={c.icons ?? []} />
              <div>
                <span className="row__kind">{c.unlock}</span>
                <h2>{c.name}</h2>
                <p>{c.description}</p>
              </div>
            </article>
          ))}

        {tab === 'builds' && !build && (
          <p className="empty">Ainda não há build cadastrada para este personagem.</p>
        )}

        {tab === 'builds' && build && (
          <>
            <h2 className="section-title">Armas</h2>
            {build.weapons.map((w, i) => {
              const fallback = w.icon ?? (w.id ? weaponIcon(w.id) : undefined)
              return (
                <div
                  className="block block--row block--click"
                  key={w.name}
                  role="button"
                  tabIndex={0}
                  onClick={() => setPicked({ kind: 'weapon', name: w.name, note: w.note, fallback })}
                  onKeyDown={(e) => e.key === 'Enter' && setPicked({ kind: 'weapon', name: w.name, note: w.note, fallback })}
                >
                  <ItemIcon kind="weapon" name={w.name} fallback={fallback} />
                  <div className="block__body">
                    <span className="row__kind">#{i + 1}</span>
                    <h3>{w.name}</h3>
                    <p>{w.note}</p>
                  </div>
                </div>
              )
            })}

            <h2 className="section-title">Artefatos</h2>
            {build.artifacts.map((a, i) => {
              const fallback = a.id ? artifactFlower(a.id) : undefined
              return (
                <div
                  className="block block--row block--click"
                  key={a.name}
                  role="button"
                  tabIndex={0}
                  onClick={() => setPicked({ kind: 'artifact', name: a.name, note: a.note, fallback })}
                  onKeyDown={(e) => e.key === 'Enter' && setPicked({ kind: 'artifact', name: a.name, note: a.note, fallback })}
                >
                  <ItemIcon kind="artifact" name={a.name} fallback={fallback} />
                  <div className="block__body">
                    <span className="row__kind">#{i + 1}</span>
                    <h3>{a.name}</h3>
                    <p>{a.note}</p>
                  </div>
                </div>
              )
            })}
            {(build.mainStats.length > 0 || build.substats) && (
            <article className="block">
              <span className="row__kind">Atributos principais</span>
              {build.mainStats.map((s) => (
                <p key={s.slot}>
                  <strong>{s.slot}:</strong> {s.value}
                </p>
              ))}
              <p>{build.substats}</p>
            </article>
            )}

            {build.teams.length > 0 && <h2 className="section-title">Equipes</h2>}
            {build.teams.map((t) => (
              <article className="block" key={t.name}>
                <span className="row__kind">{t.name}</span>
                <div className="members">
                  {t.members.map((m) => {
                    const hit = memberHit(m)
                    const inner = (
                      <>
                        <Thumb round src={memberIcons(m)} label={m.name} />
                        <span>{m.name}</span>
                      </>
                    )
                    return hit ? (
                      <Link className="member" key={m.name} to={`/character/${hit.id}`} aria-label={`Abrir ${m.name}`}>
                        {inner}
                      </Link>
                    ) : (
                      <div className="member" key={m.name}>
                        {inner}
                      </div>
                    )
                  })}
                </div>
                <p>{t.note}</p>
              </article>
            ))}

            <p className="source">
              Patch {build.patch}. Fontes:{' '}
              {build.sources.map((s, i) => (
                <span key={s.url}>
                  {i > 0 && ' · '}
                  <a href={s.url} target="_blank" rel="noreferrer">
                    {s.label}
                  </a>
                </span>
              ))}
            </p>
          </>
        )}
      </div>
      </section>
      {picked && <ItemModal item={picked} onClose={() => setPicked(null)} />}
    </main>
  )
}
