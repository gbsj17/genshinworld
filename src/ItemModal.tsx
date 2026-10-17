import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { getArtifactInfo, getWeaponInfo } from './api'
import type { ItemInfo } from './api'
import { useFavorites } from './favorites'
import { t } from './i18n'
import { ItemIcon } from './ItemIcon'

export interface PickedItem {
  kind: 'weapon' | 'artifact'
  name: string
  note: string
  fallback?: string
}

// PC: janela no centro. Celular: gaveta que sobe de baixo, com botão de voltar.
export default function ItemModal({ item, onClose }: { item: PickedItem; onClose: () => void }) {
  const [info, setInfo] = useState<ItemInfo | null>(null)
  const backRef = useRef<HTMLButtonElement>(null)
  const { isFavorite, toggle } = useFavorites(item.kind === 'weapon' ? 'weapons' : 'artifacts')
  const fav = isFavorite(item.name)

  useEffect(() => {
    let active = true
    ;(item.kind === 'weapon' ? getWeaponInfo(item.name) : getArtifactInfo(item.name)).then(
      (i) => active && setInfo(i),
    )
    return () => {
      active = false
    }
  }, [item])

  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null
    backRef.current?.focus()
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
      opener?.focus()
    }
  }, [onClose])

  const rows: [string, string | undefined][] =
    item.kind === 'weapon'
      ? [
          [t('statType'), info?.type],
          [t('baseAtk'), info?.baseAtk],
          [t('subStat'), info?.stat],
        ]
      : []

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={info?.label ?? item.name}>
      <div className="modal__backdrop" onClick={onClose} aria-hidden="true" />
      <div className="modal__panel">
        <div className="modal__bar">
          <button ref={backRef} className="round-btn" aria-label={t('back')} onClick={onClose}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </button>
          <span className="modal__kind">{item.kind === 'weapon' ? t('weapon') : t('artifactSet')}</span>
          <button
            className="round-btn modal__fav"
            aria-pressed={fav}
            aria-label={fav ? t('favRemoveShort') : t('favAddShort')}
            onClick={() => toggle(item.name)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill={fav ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3l2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.8 6.6 19.7l1.1-6.1L3.2 9.4l6.1-.8z" />
            </svg>
          </button>
        </div>

        <div className="modal__body">
          <div className="modal__head">
            <ItemIcon kind={item.kind} name={item.name} fallback={item.fallback} />
            <div>
              <h2>{info?.label ?? item.name}</h2>
              {info && info.rarity > 0 && (
                <span className="stars" role="img" aria-label={t('stars', { n: info.rarity })}>
                  {'★'.repeat(info.rarity)}
                </span>
              )}
            </div>
          </div>

          <Link className="tool-btn wpn__full" to={`/${item.kind}/${encodeURIComponent(item.name)}`} onClick={onClose}>
            {t('wpnFullPage')}
          </Link>

          {item.note && (
            <section className="modal__sec">
              <h3>{t('inThisBuild')}</h3>
              <p>{item.note}</p>
            </section>
          )}

          {rows.some(([, v]) => v) && (
            <dl className="modal__stats">
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
            <section className="modal__sec">
              <h3>{info.effectName ?? t('effect')}</h3>
              <p>{info.effect}</p>
              <small>{t('refineNote')}</small>
            </section>
          )}

          {info?.set2 && (
            <section className="modal__sec">
              <h3>{t('set2')}</h3>
              <p>{info.set2}</p>
            </section>
          )}
          {info?.set4 && (
            <section className="modal__sec">
              <h3>{t('set4')}</h3>
              <p>{info.set4}</p>
            </section>
          )}

          {info && !info.effect && !info.set2 && !info.set4 && (
            <p className="empty">{t('loadDetailsFail')}</p>
          )}
        </div>
      </div>
    </div>
  )
}
