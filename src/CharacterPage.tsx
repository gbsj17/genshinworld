import { useEffect, useState } from 'react'
import './labbg.css'
import type { CSSProperties } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useFavorites } from './favorites'
import ErrorMsg from './ErrorMsg'
import MenuButton from './MenuButton'
import PcNav from './PcNav'
import { t, weaponLabel } from './i18n'
import MyBuild from './MyBuild'
import type { Key } from './i18n'
import { ItemIcon, ItemName } from './ItemIcon'
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
import { usePageTitle } from './pageTitle'
import { shareLink } from './share'
import { buildText } from './data/buildText'

type Tab = 'overview' | 'talents' | 'constellations' | 'builds' | 'mine'

const TABS: { id: Tab; label: Key }[] = [
  { id: 'overview', label: 'tabOverview' },
  { id: 'talents', label: 'tabTalents' },
  { id: 'constellations', label: 'tabConst' },
  { id: 'builds', label: 'tabBuilds' },
  { id: 'mine', label: 'myBuild' },
]

const SKILL_KIND: Record<string, { label: Key; asset: string }> = {
  NORMAL_ATTACK: { label: 'skillNormal', asset: 'talent-na' },
  ELEMENTAL_SKILL: { label: 'skillSkill', asset: 'talent-skill' },
  ELEMENTAL_BURST: { label: 'skillBurst', asset: 'talent-burst' },
}

function Icon({ src }: { src: string[] }) {
  const [index, setIndex] = useState(0)
  const current = src[index]
  if (!current) return <div className="icon icon--empty" aria-hidden="true" />
  return (
    <span className="icon">
      <img key={current} src={current} alt="" loading="lazy" onError={() => setIndex((i) => i + 1)} />
    </span>
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

export default function CharacterPage({ id, lab }: { id: string; lab?: boolean }) {
  // character = dados básicos (de todos os personagens)
  // detail = talentos e constelações (só dos que existem na genshin.dev)
  const [character, setCharacter] = useState<CharacterSummary | null>(null)
  const [detail, setDetail] = useState<Details | null>(null)
  const [detailFailed, setDetailFailed] = useState(false)
  const [picked, setPicked] = useState<PickedItem | null>(null)
  const [all, setAll] = useState<CharacterSummary[]>([])
  const [error, setError] = useState(false)
  const [search] = useSearchParams()
  const [tab, setTab] = useState<Tab>(() => {
    // link de build compartilhada (mb) abre direto em "Minha build", inclusive links antigos com tab=builds
    if (search.get('mb') || search.get('tab') === 'mine') return 'mine'
    return search.get('tab') === 'builds' ? 'builds' : 'overview'
  })
  const [portraitIndex, setPortraitIndex] = useState(0)
  const { isFavorite, toggle } = useFavorites()
  const wish = useFavorites('wishlist')
  const goal = useFavorites('goalchars')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    const controller = new AbortController()
    getAllCharacters()
      .then((list) => {
        const found = list.find((c) => c.id === id)
        if (!found) throw new Error(t('charNotFound'))
        setCharacter(found)
        setAll(list)
        // Talentos e constelações: genshin-db (todos); genshin.dev só como plano B.
        getDetails(found.enName)
          .then(setDetail)
          .catch(() => {
            if (!found.devId) return setDetailFailed(true)
            getCharacter(found.devId, controller.signal)
              .then((d) =>
                setDetail({
                  skillTalents: d.skillTalents.map((x) => ({
                    ...x,
                    icons: [imageUrl(found.devId!, SKILL_KIND[x.type ?? '']?.asset ?? 'talent-na')],
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

  usePageTitle(character?.name)

  if (error) {
    return <main className="screen screen--message"><ErrorMsg text={t('loadCharFail')} /></main>
  }
  if (!character) {
    return <main className="screen screen--message">{t('loading')}</main>
  }

  const accent = VISION_COLORS[character.vision] ?? '#d3bc8e'
  const style = { '--accent': accent } as CSSProperties
  const build = buildText(BUILDS[id])
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
      const cn = c.enName.toLowerCase()
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
    <>
    <PcNav active="characters" />
    <main className="screen sheet-screen" style={style}>
      <section className="hero">
        <div className="hero__bar">
          <Link to="/characters" className="glass-btn" aria-label={t('back')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </Link>
          <div className="hero__actions">
            <button
              className="glass-btn"
              aria-label={isFavorite(id) ? t('favRemoveShort') : t('favAddShort')}
              aria-pressed={isFavorite(id)}
              onClick={() => toggle(id)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill={isFavorite(id) ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3l2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.8 6.6 19.7l1.1-6.1L3.2 9.4l6.1-.8z" />
              </svg>
            </button>
            <button
              className="glass-btn"
              aria-label={wish.isFavorite(id) ? t('wishRemoveShort') : t('wishAddShort')}
              aria-pressed={wish.isFavorite(id)}
              onClick={() => wish.toggle(id)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill={wish.isFavorite(id) ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 3h12v18l-6-4-6 4z" />
              </svg>
            </button>
            <button
              className="glass-btn"
              aria-label={goal.isFavorite(id) ? t('goalRemove') : t('goalAdd')}
              title={goal.isFavorite(id) ? t('goalRemove') : t('goalAdd')}
              aria-pressed={goal.isFavorite(id)}
              onClick={() => goal.toggle(id)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </button>
            <button
              className="glass-btn"
              aria-label={t('shareLink')}
              onClick={async () => {
                const base = window.location.href.split('?')[0]
                const url = tab === 'builds' || tab === 'mine' ? `${base}?tab=${tab}` : base
                const r = await shareLink(character.name, url)
                if (r === 'copied') {
                  setCopied(true)
                  window.setTimeout(() => setCopied(false), 1800)
                }
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1-1" />
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

      <section className={lab ? 'sheet sheet--lab' : 'sheet'}>
        {lab && isArt && portrait && <img className="sheet__bg" src={portrait} alt="" aria-hidden="true" />}
        <div className="sheet__handle" aria-hidden="true" />
        <h1>{character.name}</h1>
        <p className="sheet__sub">
          <Badge src={elementIcon(character.vision)} label={character.vision} />
          <span className="stars" role="img" aria-label={t('stars', { n: character.rarity })}>
            {'★'.repeat(character.rarity)}
          </span>
          <span>{[character.vision, weaponLabel(character.weapon), character.nation].filter(Boolean).map((x) => ` · ${x}`).join('')}</span>
        </p>

        <div className="segments" role="tablist" aria-label={t('sheetSections')}>
          {visibleTabs.map((tb) => (
            <button
              key={tb.id}
              role="tab"
              className="segment"
              aria-selected={tb.id === tab}
              onClick={() => setTab(tb.id)}
            >
              {t(tb.label)}
            </button>
          ))}
        </div>

        <div className="content">
          {tab === 'overview' && (
            <>
              <div className="overview-left">
                <div className="grid">
                  <div className="card">
                    <span className="card__label">{t('element')}</span>
                    <strong className="card__value">{character.vision}</strong>
                  </div>
                  <div className="card">
                    <span className="card__label">{t('weapon')}</span>
                    <strong className="card__value">{weaponLabel(character.weapon)}</strong>
                  </div>
                  {character.nation && (
                    <div className="card">
                      <span className="card__label">{t('nation')}</span>
                      <strong className="card__value">{character.nation}</strong>
                    </div>
                  )}
                  <div className="card">
                    <span className="card__label">{t('rarity')}</span>
                    <strong className="card__value">{t('starsCount', { n: character.rarity })}</strong>
                  </div>
                </div>

              {firstWeapon && (
                <button className="shortcut" onClick={() => setTab('builds')}>
                  <ItemIcon kind="weapon" name={firstWeapon.name} fallback={firstWeapon.id ? weaponIcon(firstWeapon.id) : undefined} />
                  <span className="shortcut__body">
                    <span className="shortcut__kind">{t('bestWeapon')}</span>
                    <span className="shortcut__name"><ItemName kind="weapon" name={firstWeapon.name} /></span>
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
                    <span className="shortcut__kind">{t('suggestedTeam')}</span>
                    <span className="shortcut__name">{firstTeam.name}</span>
                  </span>
                  <Chevron />
                </button>
              )}
              </div>
              <div className="overview-right">
                {(detail?.skillTalents ?? []).slice(0, 3).map((tl) => {
                  const kind = SKILL_KIND[tl.type ?? '']
                  return (
                    <button className="skill-prev" key={tl.name} onClick={() => setTab('talents')}>
                      <Icon src={tl.icons ?? []} />
                      <span>
                        <span className="row__kind">{kind ? t(kind.label) : t('talent')}</span>
                        <strong>{tl.name}</strong>
                        <small>{tl.description}</small>
                      </span>
                    </button>
                  )
                })}
              </div>
            </>
          )}

        {(tab === 'talents' || tab === 'constellations') && !detail && (
          <p className="empty">{detailFailed ? t('loadFail') : t('loading')}</p>
        )}

        {tab === 'talents' && detail && (
          <>
            {detail.skillTalents.map((tl) => {
              const kind = SKILL_KIND[tl.type ?? '']
              return (
                <article className="row" key={tl.name}>
                  <Icon src={tl.icons ?? []} />
                  <div>
                    <span className="row__kind">{kind ? t(kind.label) : t('talent')}</span>
                    <h2>{tl.name}</h2>
                    <p>{tl.description}</p>
                  </div>
                </article>
              )
            })}
            {detail.passiveTalents.map((tl) => (
              <article className="row" key={tl.name}>
                <Icon src={tl.icons ?? []} />
                <div>
                  <span className="row__kind">{t('passive')}{tl.unlock ? ` · ${tl.unlock}` : ''}</span>
                  <h2>{tl.name}</h2>
                  <p>{tl.description}</p>
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

        {tab === 'mine' && <MyBuild charId={character.id} weaponType={character.weapon} />}

        {tab === 'builds' && !build && (
          <p className="empty">{t('noBuild')}</p>
        )}

        {tab === 'builds' && build && (
          <>
            <h2 className="section-title">{t('weapons')}</h2>
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
                    <h3><ItemName kind="weapon" name={w.name} /></h3>
                    <p>{w.note}</p>
                  </div>
                </div>
              )
            })}

            <h2 className="section-title">{t('artifacts')}</h2>
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
                    <h3><ItemName kind="artifact" name={a.name} /></h3>
                    <p>{a.note}</p>
                  </div>
                </div>
              )
            })}
            {(build.mainStats.length > 0 || build.substats) && (
            <article className="block">
              <span className="row__kind">{t('mainStats')}</span>
              {build.mainStats.map((s) => (
                <p key={s.slot}>
                  <strong>{s.slot}:</strong> {s.value}
                </p>
              ))}
              <p>{build.substats}</p>
            </article>
            )}

            {build.teams.length > 0 && <h2 className="section-title">{t('teams')}</h2>}
            {build.teams.map((tm) => (
              <article className="block" key={tm.name}>
                <span className="row__kind">{tm.name}</span>
                <div className="members">
                  {tm.members.map((m) => {
                    const hit = memberHit(m)
                    const shown = hit ? hit.name : m.name
                    const inner = (
                      <>
                        <Thumb round src={memberIcons(m)} label={shown} />
                        <span>{shown}</span>
                      </>
                    )
                    return hit ? (
                      <Link className="member" key={m.name} to={`/character/${hit.id}`} aria-label={t('open', { n: shown })}>
                        {inner}
                      </Link>
                    ) : (
                      <div className="member" key={m.name}>
                        {inner}
                      </div>
                    )
                  })}
                </div>
                <p>{tm.note}</p>
              </article>
            ))}

            <p className="source">
              {t('patch')} {build.patch}. {t('sources')}:{' '}
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
      {copied && <div className="toast" role="status">{t('linkCopied')}</div>}
      {picked && <ItemModal item={picked} onClose={() => setPicked(null)} />}
    </main>
    </>
  )
}
