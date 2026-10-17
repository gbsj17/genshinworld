import { useEffect, useMemo, useState } from 'react'
import type { CSSProperties } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getAllCharacters, getArtifactSet, iconChain } from './api'
import type { ArtifactSet } from './api'
import { BUILDS } from './data/builds'
import { buildText } from './data/buildText'
import ErrorMsg from './ErrorMsg'
import { useFavorites } from './favorites'
import { t } from './i18n'
import { usePageTitle } from './pageTitle'
import { ItemIcon } from './ItemIcon'
import MenuButton from './MenuButton'
import PcNav from './PcNav'
import { shareLink } from './share'
import TabBar from './TabBar'
import { Thumb } from './Thumb'
import type { CharacterSummary } from './types'
import { VISION_COLORS } from './visionColors'
import './tools.css'

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '')

// Página do conjunto de artefatos (mesmo layout da página da arma): bônus de 2 e 4 peças,
// as 5 peças com ícone e história, e os personagens que usam o conjunto nas builds do site.
export default function ArtifactPage() {
  const { name = '' } = useParams()
  const [loaded, setLoaded] = useState<{ name: string; set: ArtifactSet | null } | null>(null)
  const [chars, setChars] = useState<CharacterSummary[]>([])
  const [copied, setCopied] = useState(false)
  const fav = useFavorites('artifacts')
  const goal = useFavorites('goalartifacts')

  useEffect(() => {
    let active = true
    getArtifactSet(name)
      .then((set) => active && setLoaded({ name, set }))
      .catch(() => active && setLoaded({ name, set: null }))
    getAllCharacters().then((l) => active && setChars(l)).catch(() => {})
    return () => {
      active = false
    }
  }, [name])

  const set = loaded?.name === name ? loaded.set : undefined // undefined = carregando, null = falhou
  const failed = loaded?.name === name && loaded.set === null

  // Personagens com este conjunto nas builds, na ordem em que ele aparece (#1 = primeiro)
  const users = useMemo(() => {
    const key = norm(name)
    const out: { char: CharacterSummary; rank: number; note: string }[] = []
    for (const c of chars) {
      const b = buildText(BUILDS[c.id])
      const i = b?.artifacts.findIndex((a) => norm(a.name) === key) ?? -1
      if (b && i >= 0) out.push({ char: c, rank: i + 1, note: b.artifacts[i].note })
    }
    return out.sort((a, b) => a.rank - b.rank || a.char.name.localeCompare(b.char.name))
  }, [chars, name])

  const share = async () => {
    const r = await shareLink(set?.name ?? name, window.location.href)
    if (r === 'copied') {
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    }
  }

  const rarity = set?.rarity ?? 0
  const isFav = fav.isFavorite(name)
  const title = set?.name ?? name
  usePageTitle(title)

  return (
    <>
      <PcNav active="artifacts" />
      <main className="screen home tool">
        <header className="home-top">
          <div>
            <h1 className="home-title">Genshin World</h1>
            <span className="home-cap">{t('capArtifacts')}</span>
          </div>
          <MenuButton />
        </header>

        <div className={`wpn2 wpn2--r${rarity}`}>
          <div className="wpn2__banner">
            <div className="wpn2__ban" />
            <ItemIcon kind="artifact" name={name} />
          </div>

          <div className="wpn2__grid">
            <aside className="wpn2__side">
              <div className="wpn2__pcicon">
                <ItemIcon kind="artifact" name={name} />
              </div>
              <div className="wpn2__name">
                {rarity > 0 && (
                  <span className="stars" role="img" aria-label={t('stars', { n: rarity })}>
                    {'★'.repeat(rarity)}
                  </span>
                )}
                <h1 className="wpn2__title">{title}</h1>
                <div className="wpn2__chips">
                  <span className="wpn2__chip">{t('artSetShort')}</span>
                  {set?.version && <span className="wpn2__chip">v{set.version}</span>}
                </div>
              </div>

              <div className="wpn2__acts">
                <button className="wpn2__btn wpn2__btn--pri" aria-pressed={isFav} onClick={() => fav.toggle(name)}>
                  {isFav ? `♥ ${t('wpnFaved')}` : `♡ ${t('wpnFav')}`}
                </button>
                <button className="wpn2__ib" aria-label={copied ? t('linkCopied') : t('myBuildShare')} title={copied ? t('linkCopied') : t('myBuildShare')} onClick={share}>
                  {copied ? '✓' : '⤴'}
                </button>
              </div>
              <button className="wpn2__btn wpn2__goal" aria-pressed={goal.isFavorite(name)} onClick={() => goal.toggle(name)}>
                {goal.isFavorite(name) ? `↑ ${t('goalOn')}` : `↑ ${t('goalAdd')}`}
              </button>
            </aside>

            <div className="wpn2__main">
              {failed && <ErrorMsg text={t('artLoadFail')} />}
              {set === undefined && <p className="empty">{t('loading')}</p>}

              {set && (set.set2 || set.set4) && (
                <section className="wpn2__card">
                  <h2 className="wpn2__h">{t('artBonus')}</h2>
                  <div className="art__bonus">
                    {set.set2 && (
                      <div>
                        <span className="art__pc">2</span>
                        <p className="wpn2__eff">{set.set2}</p>
                      </div>
                    )}
                    {set.set4 && (
                      <div>
                        <span className="art__pc">4</span>
                        <p className="wpn2__eff">{set.set4}</p>
                      </div>
                    )}
                  </div>
                </section>
              )}

              {set && set.pieces.length > 0 && (
                <section className="wpn2__card">
                  <h2 className="wpn2__h">{t('artPieces')}</h2>
                  <ul className="art__pieces">
                    {set.pieces.map((p) => (
                      <li key={p.slot}>
                        <details>
                          <summary>
                            <span className={`art__ico item-icon--r${rarity}`}>
                              <Thumb src={p.urls} label={p.name} />
                            </span>
                            <span className="art__txt">
                              <small>{p.slotLabel}</small>
                              <strong>{p.name}</strong>
                            </span>
                          </summary>
                          {p.description && <p className="tool__muted art__desc">{p.description}</p>}
                          {p.story && (
                            <>
                              <h3 className="art__lore">{t('artStory')}</h3>
                              <p className="tool__muted art__desc">{p.story}</p>
                            </>
                          )}
                        </details>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              <section className="wpn2__who">
                <h2 className="wpn2__h">{t('artWho')}</h2>
                {users.length === 0 ? (
                  <p className="tool__muted">{t('artNoUsers')}</p>
                ) : (
                  <ul className="wpn2__scroll">
                    {users.map((u, i) => (
                      <li key={u.char.id}>
                        <Link
                          to={`/character/${u.char.id}`}
                          className="wpn2__cc"
                          title={u.note}
                          aria-label={t('open', { n: u.char.name })}
                          style={{ '--ring': VISION_COLORS[u.char.vision] ?? '#d3bc8e' } as CSSProperties}
                        >
                          {i < 3 && <span className={`wpn2__medal wpn2__medal--${i + 1}`}>{i + 1}</span>}
                          <Thumb round src={iconChain(u.char)} label={u.char.name} />
                          <b>{u.char.name}</b>
                          <small>
                            #{u.rank} · {u.char.vision}
                          </small>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            </div>
          </div>
        </div>

        <TabBar active="artifacts" query="" onQuery={() => {}} noSearch />
      </main>
    </>
  )
}
