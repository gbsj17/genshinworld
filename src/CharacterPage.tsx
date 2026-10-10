import { useEffect, useState } from 'react'
import type { CSSProperties } from 'react'
import {
  artifactFlower,
  characterIcon,
  getCharacter,
  imageUrl,
  weaponIcon,
} from './api'
import type { Character } from './types'
import { BUILDS } from './data/builds'

type Tab = 'overview' | 'talents' | 'constellations' | 'builds'

const TABS: { id: Tab; label: string }[] = [
  { id: 'overview', label: 'Visão geral' },
  { id: 'talents', label: 'Talentos' },
  { id: 'constellations', label: 'Constelações' },
  { id: 'builds', label: 'Builds' },
]

const VISION_COLORS: Record<string, string> = {
  Pyro: '#f07a4a',
  Hydro: '#4cc2f1',
  Anemo: '#74c2a8',
  Cryo: '#9fd6e3',
  Electro: '#b58cf2',
  Dendro: '#9be34f',
  Geo: '#f0b232',
}

const SKILL_KIND: Record<string, { label: string; asset: string }> = {
  NORMAL_ATTACK: { label: 'Ataque normal', asset: 'talent-na' },
  ELEMENTAL_SKILL: { label: 'Habilidade elemental', asset: 'talent-skill' },
  ELEMENTAL_BURST: { label: 'Supremo elemental', asset: 'talent-burst' },
}

function Icon({ src }: { src: string }) {
  const [failed, setFailed] = useState(false)
  if (failed) return <div className="icon icon--empty" aria-hidden="true" />
  return (
    <img
      className="icon"
      src={src}
      alt=""
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}

function Thumb({
  src,
  label,
  round,
}: {
  src?: string
  label: string
  round?: boolean
}) {
  const [failed, setFailed] = useState(false)
  const cls = round ? 'thumb thumb--round' : 'thumb'
  if (!src || failed) {
    return (
      <div className={`${cls} thumb--empty`} aria-hidden="true">
        {label.charAt(0)}
      </div>
    )
  }
  return (
    <img
      className={cls}
      src={src}
      alt=""
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}

export default function CharacterPage({ id }: { id: string }) {
  const [character, setCharacter] = useState<Character | null>(null)
  const [error, setError] = useState(false)
  const [tab, setTab] = useState<Tab>('overview')
  const [portraitFailed, setPortraitFailed] = useState(false)

  useEffect(() => {
    const controller = new AbortController()
    getCharacter(id, controller.signal)
      .then(setCharacter)
      .catch((e: Error) => {
        if (e.name !== 'AbortError') setError(true)
      })
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
  const visibleTabs = TABS.filter((t) => t.id !== 'builds' || build)

  return (
    <main className="screen" style={style}>
      <header className="topbar">
        <button className="round-btn" aria-label="Voltar">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </button>
        <span className="topbar__title">PERSONAGEM</span>
        <button className="round-btn" aria-label="Favoritar">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 3l2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.8 6.6 19.7l1.1-6.1L3.2 9.4l6.1-.8z" />
          </svg>
        </button>
      </header>

      <section className="hero">
        {!portraitFailed && (
          <img
            className="hero__img"
            src={imageUrl(id, 'portrait')}
            alt={character.name}
            onError={() => setPortraitFailed(true)}
          />
        )}
        <div className="hero__info">
          <div className="stars" role="img" aria-label={`${character.rarity} estrelas`}>
            {'★'.repeat(character.rarity)}
          </div>
          <h1>{character.name}</h1>
          <p>
            {character.vision} · {character.weapon} · {character.nation}
          </p>
        </div>
      </section>

      <div className="tabs">
        {visibleTabs.map((t) => (
          <button
            key={t.id}
            className={t.id === tab ? 'tab tab--active' : 'tab'}
            aria-pressed={t.id === tab}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="content">
        {tab === 'overview' && (
          <div className="grid">
            <div className="card">
              <span className="card__label">Elemento</span>
              <strong className="card__value">{character.vision}</strong>
            </div>
            <div className="card">
              <span className="card__label">Arma</span>
              <strong className="card__value">{character.weapon}</strong>
            </div>
            <div className="card">
              <span className="card__label">Nação</span>
              <strong className="card__value">{character.nation}</strong>
            </div>
            <div className="card">
              <span className="card__label">Raridade</span>
              <strong className="card__value">{character.rarity} estrelas</strong>
            </div>
          </div>
        )}

        {tab === 'talents' && (
          <>
            {character.skillTalents.map((t) => {
              const kind = SKILL_KIND[t.type ?? '']
              return (
                <article className="row" key={t.name}>
                  <Icon src={imageUrl(id, kind?.asset ?? 'talent-na')} />
                  <div>
                    <span className="row__kind">{kind?.label ?? 'Talento'}</span>
                    <h2>{t.name}</h2>
                    <p>{t.description}</p>
                  </div>
                </article>
              )
            })}
            {character.passiveTalents.map((t, i) => (
              <article className="row" key={t.name}>
                <Icon src={imageUrl(id, `talent-passive-${i}`)} />
                <div>
                  <span className="row__kind">Passivo · {t.unlock}</span>
                  <h2>{t.name}</h2>
                  <p>{t.description}</p>
                </div>
              </article>
            ))}
          </>
        )}

        {tab === 'constellations' &&
          character.constellations.map((c) => (
            <article className="row" key={c.name}>
              <Icon src={imageUrl(id, `constellation-${c.level}`)} />
              <div>
                <span className="row__kind">{c.unlock}</span>
                <h2>{c.name}</h2>
                <p>{c.description}</p>
              </div>
            </article>
          ))}

        {tab === 'builds' && build && (
          <>
            <h2 className="section-title">Armas</h2>
            {build.weapons.map((w, i) => (
              <article className="block block--row" key={w.name}>
                <Thumb src={w.id ? weaponIcon(w.id) : undefined} label={w.name} />
                <div className="block__body">
                  <span className="row__kind">#{i + 1}</span>
                  <h3>{w.name}</h3>
                  <p>{w.note}</p>
                </div>
              </article>
            ))}

            <h2 className="section-title">Artefatos</h2>
            {build.artifacts.map((a, i) => (
              <article className="block block--row" key={a.name}>
                <Thumb src={artifactFlower(a.id)} label={a.name} />
                <div className="block__body">
                  <span className="row__kind">#{i + 1}</span>
                  <h3>{a.name}</h3>
                  <p>{a.note}</p>
                </div>
              </article>
            ))}
            <article className="block">
              <span className="row__kind">Atributos principais</span>
              {build.mainStats.map((s) => (
                <p key={s.slot}>
                  <strong>{s.slot}:</strong> {s.value}
                </p>
              ))}
              <p>{build.substats}</p>
            </article>

            <h2 className="section-title">Equipes</h2>
            {build.teams.map((t) => (
              <article className="block" key={t.name}>
                <span className="row__kind">{t.name}</span>
                <div className="members">
                  {t.members.map((m) => (
                    <div className="member" key={m.name}>
                      <Thumb
                        round
                        src={m.id ? characterIcon(m.id) : undefined}
                        label={m.name}
                      />
                      <span>{m.name}</span>
                    </div>
                  ))}
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
    </main>
  )
}
