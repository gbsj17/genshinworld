import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getAllCharacters, getAllItems, getWeaponCosts, getWeaponInfo, iconChain } from './api'
import type { CostItem, ItemInfo } from './api'
import { sum } from './costs'
import { BUILDS } from './data/builds'
import { buildText } from './data/buildText'
import ErrorMsg from './ErrorMsg'
import { useFavorites } from './favorites'
import { t } from './i18n'
import { ItemIcon } from './ItemIcon'
import MenuButton from './MenuButton'
import PcNav from './PcNav'
import { shareLink } from './share'
import TabBar from './TabBar'
import { Thumb } from './Thumb'
import type { CharacterSummary } from './types'
import './tools.css'

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '')

// Página da arma: dados, efeito, materiais de ascensão e os personagens que mais combinam com ela.
export default function WeaponPage() {
  const { name = '' } = useParams()
  const navigate = useNavigate()
  const [info, setInfo] = useState<ItemInfo | null>(null)
  const [chars, setChars] = useState<CharacterSummary[]>([])
  const [mats, setMats] = useState<{ name: string; label: string; urls: string[]; rarity: number }[]>([])
  const [costs, setCosts] = useState<CostItem[][] | null>(null)
  const [costFail, setCostFail] = useState(false)
  const [copied, setCopied] = useState(false)
  const fav = useFavorites('weapons')
  const wish = useFavorites('wishweapons')

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

  const rows: [string, string | undefined][] = [
    [t('statType'), info?.type],
    [t('baseAtk'), info?.baseAtk],
    [t('subStat'), info?.stat],
    [t('rowVersion'), info?.version],
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

        <div className="tool__body farm wpn">
          <button className="tool-btn tool-btn--ghost wpn__back" onClick={() => (window.history.length > 1 ? navigate(-1) : navigate('/weapons'))}>
            ← {t('back')}
          </button>

          <div className="wpn__head">
            <ItemIcon kind="weapon" name={name} />
            <div>
              <h1 className="tool__title">{info?.label ?? name}</h1>
              {info && info.rarity > 0 && (
                <span className="stars" role="img" aria-label={t('stars', { n: info.rarity })}>
                  {'★'.repeat(info.rarity)}
                </span>
              )}
            </div>
          </div>

          <div className="mine__acts wpn__acts">
            <button className="tool-btn" aria-pressed={fav.isFavorite(name)} onClick={() => fav.toggle(name)}>
              {fav.isFavorite(name) ? `★ ${t('favRemoveShort')}` : `☆ ${t('favAddShort')}`}
            </button>
            <button className="tool-btn tool-btn--ghost" aria-pressed={wish.isFavorite(name)} onClick={() => wish.toggle(name)}>
              {wish.isFavorite(name) ? t('wishRemoveShort') : t('wishAddShort')}
            </button>
            <button className="tool-btn tool-btn--ghost" onClick={share}>{copied ? t('linkCopied') : t('myBuildShare')}</button>
          </div>

          {info && info.rarity === 0 && <ErrorMsg text={t('loadDetailsFail')} />}
          {info?.description && <p className="tool__muted">{info.description}</p>}

          {rows.some(([, v]) => v) && (
            <dl className="modal__stats wpn__stats">
              {rows.map(([k, v]) =>
                v ? (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ) : null,
              )}
            </dl>
          )}

          {info?.effect && (
            <section className="mat__result wpn__sec">
              <h2>{info.effectName ?? t('effect')}</h2>
              <p className="wpn__effect">{info.effect}</p>
              <small className="tool__muted">{t('refineNote')}</small>
            </section>
          )}

          <section className="mat__result wpn__sec">
            <h2>{t('wpnAscension')}</h2>
            {costFail && <ErrorMsg text={t('wpnCostFail')} />}
            {!costFail && !costs && <p className="empty">{t('loading')}</p>}
            {total.length > 0 && (
              <ul className="mat__list">
                {total.map((it) => (
                  <li key={it.id}>
                    <Thumb src={iconFor(it.name)} label={it.name} />
                    <span>{it.name}</span>
                    <b>{it.count.toLocaleString()}</b>
                  </li>
                ))}
              </ul>
            )}
            {costs && costs.some((l) => l.length) && (
              <details className="wpn__phases">
                <summary>{t('wpnByPhase')}</summary>
                {costs.map((level, i) => (
                  <p key={i} className="tool__muted">
                    <strong>{t('phase', { n: i + 1 })}:</strong>{' '}
                    {level.map((it) => `${it.count.toLocaleString()}× ${it.name}`).join(' · ')}
                  </p>
                ))}
              </details>
            )}
            <p className="tool__muted">{t('wpnAscNote')}</p>
          </section>

          <section className="mat__result wpn__sec">
            <h2>{t('wpnBestFor')}</h2>
            {users.length === 0 ? (
              <p className="tool__muted">{t('wpnNoUsers')}</p>
            ) : (
              <ul className="wpn__users">
                {users.map((u) => (
                  <li key={u.char.id}>
                    <Link to={`/character/${u.char.id}`} aria-label={t('open', { n: u.char.name })}>
                      <Thumb round src={iconChain(u.char)} label={u.char.name} />
                      <span>
                        <strong>{u.char.name}</strong>
                        <small>#{u.rank} · {u.char.vision}</small>
                        <em>{u.note}</em>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>

        <TabBar active="weapons" query="" onQuery={() => {}} noSearch />
      </main>
    </>
  )
}
