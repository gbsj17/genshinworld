import { useEffect, useMemo, useState } from 'react'
import type { CSSProperties } from 'react'
import { Link, useParams } from 'react-router-dom'
import { effectParts, getAllCharacters, getAllItems, getWeaponCosts, getWeaponInfo, iconChain } from './api'
import type { CostItem, ItemInfo } from './api'
import { sum } from './costs'
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
import { useMaterialSheet } from './useMaterialSheet'
import { Thumb } from './Thumb'
import type { CharacterSummary } from './types'
import { VISION_COLORS } from './visionColors'
import './tools.css'

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '')
// Mora fica compacta (200 mil), o resto com o número inteiro
const fmt = (id: number, n: number) =>
  id === 202 && n >= 10000 ? n.toLocaleString(undefined, { notation: 'compact' }) : n.toLocaleString()

type Sec = 'sum' | 'eff' | 'mat' | 'who'

// Página da arma (layout "banner + painel"): banner da raridade, efeito por refinamento,
// personagens que usam melhor em carrossel e materiais de ascensão em grade.
export default function WeaponPage() {
  const { name = '' } = useParams()
  const [info, setInfo] = useState<ItemInfo | null>(null)
  const [chars, setChars] = useState<CharacterSummary[]>([])
  const [mats, setMats] = useState<{ name: string; label: string; urls: string[]; rarity: number }[]>([])
  const [costs, setCosts] = useState<CostItem[][] | null>(null)
  const [costFail, setCostFail] = useState(false)
  const [copied, setCopied] = useState(false)
  const [ref, setRef] = useState({ name, r: 0 })
  const refine = ref.name === name ? ref.r : 0 // volta ao R1 ao trocar de arma
  const setRefine = (r: number) => setRef({ name, r })
  const [sec, setSec] = useState<Sec>('sum')
  const { openMat, matSheet } = useMaterialSheet()
  const fav = useFavorites('weapons')
  const wish = useFavorites('wishweapons')
  const goal = useFavorites('goalweapons')

  useEffect(() => {
    let active = true
    getWeaponInfo(name).then((i) => active && setInfo(i))
    getAllCharacters().then((l) => active && setChars(l)).catch(() => {})
    getAllItems('materials')
      .then((l) => active && setMats(l.map((m) => ({ name: m.name, label: m.label, urls: m.info.urls, rarity: m.info.rarity }))))
      .catch(() => {})
    getWeaponCosts(name)
      .then((c) => active && setCosts(c))
      .catch(() => active && setCostFail(true))
    return () => {
      active = false
    }
  }, [name])

  const iconFor = (n: string) => mats.find((m) => m.label === n || m.name === n)?.urls ?? []

  const total = useMemo(() => {
    if (!costs) return []
    const all = sum(costs, 1, { from: 0, to: costs.length })
    const rarityOf = (n: string) => mats.find((m) => m.label === n)?.rarity ?? 0
    return [...all.values()].sort((a, b) => (a.id === 202 ? -1 : b.id === 202 ? 1 : rarityOf(b.name) - rarityOf(a.name) || b.count - a.count))
  }, [costs, mats])

  // Quem tem esta arma nas builds, do melhor lugar (#1) para o pior
  const users = useMemo(() => {
    const key = norm(name)
    const out: { char: CharacterSummary; rank: number; note: string }[] = []
    for (const c of chars) {
      const b = buildText(BUILDS[c.id])
      const i = b?.weapons.findIndex((w) => norm(w.name) === key) ?? -1
      if (b && i >= 0) out.push({ char: c, rank: i + 1, note: b.weapons[i].note })
    }
    return out.sort((a, b) => a.rank - b.rank || a.char.name.localeCompare(b.char.name))
  }, [chars, name])

  const share = async () => {
    const r = await shareLink(info?.label ?? name, window.location.href)
    if (r === 'copied') {
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    }
  }

  const go = (s: Sec) => {
    setSec(s)
    const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    document.getElementById(`wpn-${s}`)?.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' })
  }

  const rarity = info?.rarity ?? 0
  const hasRefine = (info?.refine ?? []).filter((r) => r.length).length > 1
  const parts = info ? effectParts(info, refine) : []
  const isFav = fav.isFavorite(name)
  const isWish = wish.isFavorite(name)
  const title = info?.label ?? name
  usePageTitle(title)

  const toc: [Sec, string][] = [
    ['sum', t('wpnTocSummary')],
    ['eff', t('effect')],
    ['mat', t('wpnTocMats')],
    ['who', t('wpnTocChars')],
  ]

  return (
    <>
      <PcNav active="weapons" />
      <main className="screen home tool">
        <header className="home-top">
          <div>
            <h1 className="home-title">Genshin World</h1>
            <span className="home-cap">{t('capWeapons')}</span>
          </div>
          <MenuButton />
        </header>

        <div className={`wpn2 wpn2--r${rarity}`}>
          <div className="wpn2__banner">
            <div className="wpn2__ban" />
            <ItemIcon kind="weapon" name={name} />
          </div>

          <div className="wpn2__grid">
            <aside className="wpn2__side">
              <div className="wpn2__pcicon">
                <ItemIcon kind="weapon" name={name} />
              </div>
              <div className="wpn2__name">
                {rarity > 0 && (
                  <span className="stars" role="img" aria-label={t('stars', { n: rarity })}>
                    {'★'.repeat(rarity)}
                  </span>
                )}
                <h1 className="wpn2__title">{title}</h1>
                <div className="wpn2__chips">
                  {info?.type && <span className="wpn2__chip">{info.type}</span>}
                  {info?.version && <span className="wpn2__chip">v{info.version}</span>}
                </div>
              </div>

              <div className="wpn2__acts">
                <button className="wpn2__btn wpn2__btn--pri" aria-pressed={isFav} onClick={() => fav.toggle(name)}>
                  {isFav ? `♥ ${t('wpnFaved')}` : `♡ ${t('wpnFav')}`}
                </button>
                <button
                  className="wpn2__btn"
                  aria-pressed={isWish}
                  aria-label={isWish ? t('wishRemoveShort') : t('wishAddShort')}
                  onClick={() => wish.toggle(name)}
                >
                  {isWish ? `★ ${t('wpnWished')}` : `☆ ${t('wpnWish')}`}
                </button>
                <button className="wpn2__ib" aria-label={copied ? t('linkCopied') : t('myBuildShare')} title={copied ? t('linkCopied') : t('myBuildShare')} onClick={share}>
                  {copied ? '✓' : '⤴'}
                </button>
              </div>

              <button className="wpn2__btn wpn2__goal" aria-pressed={goal.isFavorite(name)} onClick={() => goal.toggle(name)}>
                {goal.isFavorite(name) ? `↑ ${t('goalOn')}` : `↑ ${t('goalAdd')}`}
              </button>

              <nav className="wpn2__toc" aria-label={t('wpnTocSummary')}>
                {toc.map(([k, label]) => (
                  <button key={k} className={sec === k ? 'on' : undefined} aria-current={sec === k ? 'true' : undefined} onClick={() => go(k)}>
                    {label}
                  </button>
                ))}
              </nav>

              {(info?.baseAtk || info?.statValue) && (
                <div className="wpn2__stats" id="wpn-sum">
                  {info?.baseAtk && (
                    <div className="wpn2__stat">
                      <span>{t('baseAtk')}</span>
                      <b>{info.baseAtk}</b>
                    </div>
                  )}
                  {info?.statValue && (
                    <div className="wpn2__stat">
                      <span>{info.statName ?? t('subStat')}</span>
                      <b>{info.statValue}</b>
                    </div>
                  )}
                </div>
              )}
            </aside>

            <div className="wpn2__main">
              {info && info.rarity === 0 && <ErrorMsg text={t('loadDetailsFail')} />}

              {parts.length > 0 && (
                <section className="wpn2__card" id="wpn-eff">
                  <h2 className="wpn2__h">
                    {t('effect')}
                    {info?.effectName ? ` · ${info.effectName}` : ''}
                  </h2>
                  {hasRefine && (
                    <div className="wpn2__ref" role="group" aria-label={t('wpnRefine', { n: '' }).trim()}>
                      {[0, 1, 2, 3, 4].map((i) => (
                        <button key={i} aria-pressed={refine === i} aria-label={t('wpnRefine', { n: i + 1 })} onClick={() => setRefine(i)}>
                          R{i + 1}
                        </button>
                      ))}
                    </div>
                  )}
                  <p className="wpn2__eff">
                    {parts.map((p, i) => (p.value ? <b key={i}>{p.text}</b> : <span key={i}>{p.text}</span>))}
                  </p>
                </section>
              )}

              <section className="wpn2__who" id="wpn-who">
                <h2 className="wpn2__h">{t('wpnWho')}</h2>
                {users.length === 0 ? (
                  <p className="tool__muted">{t('wpnNoUsers')}</p>
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

              <section className="wpn2__card" id="wpn-mat">
                <h2 className="wpn2__h">{t('wpnAscShort')}</h2>
                {costFail && <ErrorMsg text={t('wpnCostFail')} />}
                {!costFail && !costs && <p className="empty">{t('loading')}</p>}
                {total.length > 0 && (
                  <ul className="wpn2__mats">
                    {total.map((it) => (
                      <li key={it.id}>
                        <button title={it.name} onClick={() => openMat(it.name)} aria-label={t('matWhereOf', { n: it.name })}>
                          <Thumb src={iconFor(it.name)} label={it.name} />
                          <b>{fmt(it.id, it.count)}</b>
                          <span>{it.name}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
                {costs && costs.some((l) => l.length) && (
                  <details className="wpn2__phases">
                    <summary>{t('wpnByPhase')} ›</summary>
                    {costs.map((level, i) => (
                      <p key={i} className="tool__muted">
                        <strong>{t('phase', { n: i + 1 })}:</strong>{' '}
                        {level.map((it) => `${it.count.toLocaleString()}× ${it.name}`).join(' · ')}
                      </p>
                    ))}
                    <p className="tool__muted">{t('wpnAscNote')}</p>
                  </details>
                )}
              </section>
            </div>
          </div>
        </div>

        {matSheet}
        <TabBar active="weapons" query="" onQuery={() => {}} noSearch />
      </main>
    </>
  )
}
