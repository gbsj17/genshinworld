import { lazy, Suspense, useEffect, useState } from 'react'
import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { getAllCharacters, iconChain } from './api'
import AreaModal from './AreaModal'
import { Card } from './CharCards'
import { useFavorites } from './favorites'
import { t } from './i18n'
import { ItemIcon, ItemName } from './ItemIcon'
import MenuButton from './MenuButton'
import { loadBuilds } from './myBuildStore'
import { useOwned } from './owned'
import { useOwnedWeapons } from './ownedWeapons'
import PcNav from './PcNav'
import { useSync } from './sync'
import TabBar from './TabBar'
import { Thumb } from './Thumb'
import type { CharacterSummary } from './types'
import { VISION_COLORS } from './visionColors'
import './tools.css'
import './area.css'

const OwnedPanel = lazy(() => import('./OwnedPanel'))
const WeaponPicker = lazy(() => import('./WeaponPicker'))
const DataPanel = lazy(() => import('./DataPanel'))
const UidImport = lazy(() => import('./OwnedPanel').then((m) => ({ default: m.UidImport })))

type Modal = 'char' | 'weapon' | 'uid' | 'data' | null

const Ico = ({ d, size = 17 }: { d: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={d} />
  </svg>
)
const P = {
  plus: 'M12 5v14M5 12h14',
  up: 'M12 16V4m0 0l-4 4m4-4l4 4M4 20h16',
  db: 'M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6',
  users: 'M16 11a3 3 0 100-6 3 3 0 000 6zM8 11a3 3 0 100-6 3 3 0 000 6zM2 20a6 6 0 0112 0M14 20a6 6 0 018 0',
  sword: 'M14 4l6-1-1 6-9 9-3-3zM6 15l-3 3 3 3 3-3',
  star: 'M12 3l2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.8 6.6 19.7l1.1-6.1L3.2 9.4l6.1-.8z',
  heart: 'M12 20s-7-4.5-7-10a4 4 0 017-2.5A4 4 0 0119 10c0 5.5-7 10-7 10z',
  goal: 'M10 21V9M4 14l6-6 6 6M19 2v6M16 5h6',
  build: 'M4 20V10M10 20V4M16 20v-8M22 20H2',
}

// Leitura simples de dados guardados no aparelho (equipes e pity)
function readJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}
interface SavedTeam {
  id: string
  name: string
  members: string[]
}
interface PityState {
  pity?: number
  total?: number
  guaranteed?: boolean
}

function Stat({ icon, label, value, sub, pct }: { icon: string; label: string; value: number; sub?: string; pct?: number }) {
  return (
    <div className="area__st">
      <Ico d={icon} size={18} />
      <small>{label}</small>
      <b>
        {value}
        {sub && <span>{sub}</span>}
      </b>
      {pct !== undefined && (
        <div className="area__pb">
          <i style={{ width: `${Math.min(100, pct)}%` }} />
        </div>
      )}
    </div>
  )
}

const Section = ({ title, to, children }: { title: string; to?: string; children: React.ReactNode }) => (
  <section className="area__sec">
    <div className="area__sh">
      <h2>{title}</h2>
      {to && (
        <Link to={to} className="area__more">
          {t('areaSeeAll')}
        </Link>
      )}
    </div>
    {children}
  </section>
)

// "Minha área": perfil com painel completo (números, coleção, metas, personagens, armas, equipes e invocações).
export default function DataPage() {
  const sync = useSync()
  const own = useOwned()
  const ownW = useOwnedWeapons()
  const favs = useFavorites('characters')
  const gc = useFavorites('goalchars')
  const gw = useFavorites('goalweapons')
  const ga = useFavorites('goalartifacts')
  const [chars, setChars] = useState<CharacterSummary[] | null>(null)
  const [modal, setModal] = useState<Modal>(null)

  useEffect(() => {
    let active = true
    getAllCharacters().then((l) => active && setChars(l)).catch(() => undefined)
    return () => {
      active = false
    }
  }, [])

  const all = chars ?? []
  const mine = all.filter((c) => c.id in own.owned).sort((a, b) => b.rarity - a.rarity || a.name.localeCompare(b.name))
  const weapons = Object.entries(ownW.owned)
  const cons = Object.values(own.owned).reduce((n, i) => n + i.c, 0)
  const goals = gc.ids.length + gw.ids.length + ga.ids.length
  const builds = Object.keys(loadBuilds()).length
  const goalChars = gc.ids.map((id) => all.find((c) => c.id === id)).filter((c): c is CharacterSummary => !!c)
  const teams = readJson<SavedTeam[]>('genshinworld:teams', []).filter((x) => x && Array.isArray(x.members))
  const pity = readJson<Record<string, PityState>>('genshinworld:pity', {})
  const hasPity = (pity.character?.total ?? 0) > 0 || (pity.weapon?.total ?? 0) > 0
  const byEl = new Map<string, number>()
  for (const c of mine) byEl.set(c.vision, (byEl.get(c.vision) ?? 0) + 1)
  const name = sync.user?.name ?? t('accountGuest')
  const nOwned = Object.keys(own.owned).length

  return (
    <>
      <PcNav active={null} />
      <main className="screen home tool area">
        <div className="area__hero" aria-hidden="true" />
        <header className="home-top area__top">
          <div>
            <h1 className="home-title">Genshin World</h1>
            <span className="home-cap">{t('capArea')}</span>
          </div>
          <MenuButton />
        </header>

        <div className="area__id">
          {sync.user?.photo ? (
            <img className="area__avatar" src={sync.user.photo} alt="" referrerPolicy="no-referrer" />
          ) : (
            <span className="area__avatar area__avatar--ph" aria-hidden="true">
              {sync.user ? (
                name.slice(0, 1).toUpperCase()
              ) : (
                <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 21a8 8 0 0116 0" />
                </svg>
              )}
            </span>
          )}
          <div className="area__who">
            <h2>{name}</h2>
            <small>{sync.user?.email ?? t('accountGuestSub')}</small>
            <span className="area__chip">
              <i className={sync.user ? '' : 'off'} aria-hidden="true" />
              {sync.user ? t('areaSynced') : t('areaLocal')}
            </span>
          </div>
          <div className="area__acts">
            <button className="area__btn area__btn--pri" onClick={() => setModal('char')}>
              <Ico d={P.plus} />
              {t('areaAddChar')}
            </button>
            <button className="area__btn area__btn--pri" onClick={() => setModal('weapon')}>
              <Ico d={P.plus} />
              {t('areaAddWeapon')}
            </button>
            <button className="area__btn" onClick={() => setModal('uid')}>
              <Ico d={P.up} />
              {t('areaUid')}
            </button>
            <button className="area__btn" onClick={() => setModal('data')}>
              <Ico d={P.db} />
              {t('areaData')}
            </button>
          </div>
        </div>

        <div className="area__stats">
          <Stat icon={P.users} label={t('areaChars')} value={nOwned} sub={chars ? t('areaOf', { n: all.length }) : undefined} pct={all.length ? (nOwned / all.length) * 100 : 0} />
          <Stat icon={P.sword} label={t('areaWeapons')} value={weapons.length} />
          <Stat icon={P.star} label={t('areaCons')} value={cons} sub={t('areaTotal')} />
          <Stat icon={P.heart} label={t('favorites')} value={favs.ids.length} />
          <Stat icon={P.goal} label={t('areaGoals')} value={goals} sub={t('areaGoalsSub')} />
          <Stat icon={P.build} label={t('areaBuilds')} value={builds} sub={t('areaBuildsSub')} />
        </div>

        {mine.length > 0 && (
          <Section title={t('areaElements')}>
            <div className="area__elbar" role="img" aria-label={t('areaElements')}>
              {[...byEl.entries()].map(([e, n]) => (
                <i key={e} style={{ flex: n, background: VISION_COLORS[e] ?? '#d3bc8e' }} title={`${e} ${n}`} />
              ))}
            </div>
            <div className="area__leg">
              {[...byEl.entries()].map(([e, n]) => (
                <span key={e}>
                  <b style={{ background: VISION_COLORS[e] ?? '#d3bc8e' }} />
                  {e} <em>{n}</em>
                </span>
              ))}
            </div>
          </Section>
        )}

        {goalChars.length > 0 && (
          <Section title={t('areaGoalsNow')} to="/favorites">
            <div className="area__goals">
              {goalChars.map((c) => {
                const info = own.owned[c.id]
                const pct = info ? Math.round((info.lv / 90) * 100) : 0
                return (
                  <Link key={c.id} to={`/character/${c.id}`} className="area__goal" style={{ '--el': VISION_COLORS[c.vision] ?? '#d3bc8e' } as CSSProperties}>
                    <Thumb round src={iconChain(c)} label={c.name} />
                    <div>
                      <b>{c.name}</b>
                      <small>{info ? `${t('ownLevel')} ${info.lv} → 90` : t('ownNo')}</small>
                      <div className="area__pb">
                        <i style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                    <span className="area__pc">{pct}%</span>
                  </Link>
                )
              })}
            </div>
          </Section>
        )}

        <Section title={t('areaChars')} to="/characters">
          {mine.length === 0 ? (
            <p className="empty">{chars ? t('areaEmptyChars') : t('loading')}</p>
          ) : (
            <div className="area__grid">
              {mine.map((c) => (
                <Card key={c.id} c={c} own={own.owned[c.id]} goal={gc.ids.includes(c.id)} />
              ))}
            </div>
          )}
        </Section>

        <Section title={t('areaWeapons')} to="/weapons">
          {weapons.length === 0 ? (
            <p className="empty">{t('areaEmptyWeapons')}</p>
          ) : (
            <ul className="area__wgrid">
              {weapons.map(([n, info]) => (
                <li key={n}>
                  <Link to={`/weapon/${encodeURIComponent(n)}`} className="area__wc">
                    <ItemIcon kind="weapon" name={n} />
                    <strong>
                      <ItemName kind="weapon" name={n} />
                    </strong>
                    <span className="area__tags">
                      <b>R{info.r}</b>
                      <b>
                        {t('ownLevel')} {info.lv}
                      </b>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Section>

        {teams.length > 0 && (
          <Section title={t('teams')} to="/teams">
            <div className="area__teams">
              {teams.map((tm) => (
                <Link key={tm.id} to="/teams" className="area__team">
                  <b>{tm.name}</b>
                  <div>
                    {tm.members.map((id) => {
                      const c = all.find((x) => x.id === id)
                      return c ? (
                        <span key={id} style={{ '--el': VISION_COLORS[c.vision] ?? '#d3bc8e' } as CSSProperties}>
                          <Thumb round src={iconChain(c)} label={c.name} />
                        </span>
                      ) : null
                    })}
                  </div>
                </Link>
              ))}
            </div>
          </Section>
        )}

        {hasPity && (
          <Section title={t('areaPity')} to="/pity">
            <div className="area__pity">
              <div>
                <small>{t('areaPityChar')}</small>
                <b>
                  {pity.character?.pity ?? 0}
                  <span>/ 90</span>
                </b>
                <div className="area__pb">
                  <i style={{ width: `${Math.min(100, ((pity.character?.pity ?? 0) / 90) * 100)}%` }} />
                </div>
              </div>
              <div>
                <small>{t('areaPityWeapon')}</small>
                <b>
                  {pity.weapon?.pity ?? 0}
                  <span>/ 80</span>
                </b>
                <div className="area__pb">
                  <i style={{ width: `${Math.min(100, ((pity.weapon?.pity ?? 0) / 80) * 100)}%` }} />
                </div>
              </div>
              <div>
                <small>{t('areaGuar')}</small>
                <b>{pity.character?.guaranteed ? t('areaYes') : t('areaNo')}</b>
              </div>
            </div>
          </Section>
        )}

        <div className="area__end" />
        <TabBar active={null} query="" onQuery={() => {}} noSearch />
      </main>

      {modal && (
        <AreaModal
          title={
            modal === 'char' ? t('areaAddCharTitle') : modal === 'weapon' ? t('areaAddWeaponTitle') : modal === 'uid' ? t('ownEnkaTitle') : t('areaData')
          }
          onClose={() => setModal(null)}
        >
          <Suspense fallback={<p className="empty">{t('loading')}</p>}>
            {modal === 'char' && <OwnedPanel />}
            {modal === 'weapon' && <WeaponPicker />}
            {modal === 'uid' && <UidImport />}
            {modal === 'data' && <DataPanel />}
          </Suspense>
        </AreaModal>
      )}
    </>
  )
}
