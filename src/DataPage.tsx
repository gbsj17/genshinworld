import { lazy, Suspense, useEffect, useState } from 'react'
import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { getAllCharacters, iconChain } from './api'
import AreaModal from './AreaModal'
import { useFavorites } from './favorites'
import { t } from './i18n'
import { ItemIcon, ItemName } from './ItemIcon'
import MenuButton from './MenuButton'
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

const Plus = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <path d="M12 5v14M5 12h14" />
  </svg>
)
const Up = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 16V4m0 0l-4 4m4-4l4 4M4 20h16" />
  </svg>
)
const Db = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
  </svg>
)

const Pips = ({ n }: { n: number }) => (
  <span className="area__pips" aria-hidden="true">
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <i key={i} className={i < n ? 'on' : ''} />
    ))}
  </span>
)

// "Minha área": perfil com os personagens e armas que a pessoa tem.
export default function DataPage() {
  const sync = useSync()
  const own = useOwned()
  const ownW = useOwnedWeapons()
  const gc = useFavorites('goalchars')
  const gw = useFavorites('goalweapons')
  const ga = useFavorites('goalartifacts')
  const [chars, setChars] = useState<CharacterSummary[] | null>(null)
  const [tab, setTab] = useState<'c' | 'w'>('c')
  const [modal, setModal] = useState<Modal>(null)
  const [fab, setFab] = useState(false)

  useEffect(() => {
    let active = true
    getAllCharacters().then((l) => active && setChars(l)).catch(() => undefined)
    return () => {
      active = false
    }
  }, [])

  const mine = (chars ?? []).filter((c) => c.id in own.owned).sort((a, b) => b.rarity - a.rarity || a.name.localeCompare(b.name))
  const weapons = Object.entries(ownW.owned)
  const cons = Object.values(own.owned).reduce((n, i) => n + i.c, 0)
  const goals = gc.ids.length + gw.ids.length + ga.ids.length
  const open = (m: Modal) => {
    setFab(false)
    setModal(m)
  }
  const name = sync.user?.name ?? t('accountGuest')

  const actions = (
    <>
      <button className="area__btn area__btn--pri" onClick={() => open('char')}>
        <Plus />
        {t('areaAddChar')}
      </button>
      <button className="area__btn area__btn--pri" onClick={() => open('weapon')}>
        <Plus />
        {t('areaAddWeapon')}
      </button>
      <button className="area__btn" onClick={() => open('uid')}>
        <Up />
        {t('areaUid')}
      </button>
      <button className="area__btn" onClick={() => open('data')}>
        <Db />
        {t('areaData')}
      </button>
    </>
  )

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
          <dl className="area__nums">
            <div>
              <dd>{Object.keys(own.owned).length}</dd>
              <dt>{t('areaChars')}</dt>
            </div>
            <div>
              <dd>{weapons.length}</dd>
              <dt>{t('areaWeapons')}</dt>
            </div>
            <div>
              <dd>{cons}</dd>
              <dt>{t('areaCons')}</dt>
            </div>
            <div>
              <dd>{goals}</dd>
              <dt>{t('areaGoals')}</dt>
            </div>
          </dl>
        </div>

        <div className="area__acts">{actions}</div>

        <div className="seg area__tabs" role="tablist" aria-label={t('area')}>
          <button role="tab" aria-selected={tab === 'c'} onClick={() => setTab('c')}>
            {t('areaChars')} · {Object.keys(own.owned).length}
          </button>
          <button role="tab" aria-selected={tab === 'w'} onClick={() => setTab('w')}>
            {t('areaWeapons')} · {weapons.length}
          </button>
        </div>

        <div className="area__cols">
          <section className={tab === 'c' ? 'area__col is-on' : 'area__col'} aria-label={t('areaChars')}>
            <h2 className="area__h">{t('areaChars')}</h2>
            {mine.length === 0 ? (
              <p className="empty">{chars ? t('areaEmptyChars') : t('loading')}</p>
            ) : (
              <ul className="area__vit">
                {mine.map((c) => {
                  const info = own.owned[c.id]
                  return (
                    <li key={c.id} style={{ '--el': VISION_COLORS[c.vision] ?? '#d3bc8e' } as CSSProperties}>
                      <Link to={`/character/${c.id}`} className="area__vc">
                        <span className="area__vimg">
                          <Thumb round src={iconChain(c)} label={c.name} />
                        </span>
                        <strong>{c.name}</strong>
                        <small>
                          {t('ownLevel')} {info.lv} · C{info.c}
                        </small>
                        <Pips n={info.c} />
                      </Link>
                    </li>
                  )
                })}
              </ul>
            )}
          </section>

          <section className={tab === 'w' ? 'area__col is-on' : 'area__col'} aria-label={t('areaWeapons')}>
            <h2 className="area__h">{t('areaWeapons')}</h2>
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
          </section>
        </div>

        <div className={fab ? 'area__fab is-open' : 'area__fab'}>
          <div className="area__fabopts">{actions}</div>
          <button className="area__fabmain" aria-label={t('areaFab')} aria-expanded={fab} onClick={() => setFab((v) => !v)}>
            +
          </button>
        </div>

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
