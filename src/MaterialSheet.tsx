import { useEffect, useRef, useState } from 'react'
import { getAllItems, getDomains } from './api'
import type { Domain, ItemEntry } from './api'
import { isPt, t } from './i18n'
import { Thumb } from './Thumb'

const OFFICIAL_MAP = 'https://act.hoyolab.com/ys/app/interactive-map/index.html'
const dayName = (d: number) => new Date(2024, 0, 7 + d).toLocaleDateString(isPt ? 'pt-BR' : 'en-US', { weekday: 'short' })

// Janela "Onde conseguir" de um material: texto de origem da base, domínio que dá o item
// (com os dias) e atalho para o mapa oficial. O nome pode vir no idioma da tela ou em inglês.
export default function MaterialSheet({ name, onClose }: { name: string; onClose: () => void }) {
  const [item, setItem] = useState<ItemEntry | null | undefined>(undefined)
  const [domains, setDomains] = useState<Domain[]>([])
  const backRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    let active = true
    getAllItems('materials')
      .then((l) => active && setItem(l.find((m) => m.label === name || m.name === name) ?? null))
      .catch(() => active && setItem(null))
    getDomains()
      .then((l) => active && setDomains(l))
      .catch(() => {})
    return () => {
      active = false
    }
  }, [name])

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

  const label = item?.label ?? name
  const raw = item?.info.sources ?? []
  // "Quantidade a ser fabricada: {0}" vira "Pode ser fabricado."
  const craft = raw.some((s) => s.includes('{0}'))
  const lines = raw.filter((s) => !s.includes('{0}'))
  const from = domains.filter((d) => d.rewards.some((r) => r.name === label || r.name === name))

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={label}>
      <div className="modal__backdrop" onClick={onClose} aria-hidden="true" />
      <div className="modal__panel">
        <div className="modal__bar">
          <button ref={backRef} className="round-btn" aria-label={t('back')} onClick={onClose}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </button>
          <span className="modal__kind">{t('material')}</span>
        </div>

        <div className="modal__body">
          <div className="modal__head">
            <div className={`item-icon item-icon--r${item?.info.rarity ?? 0}`}>
              {item && <Thumb src={item.info.urls} label={label} />}
            </div>
            <div>
              <h2>{label}</h2>
              {item && item.info.rarity > 0 && (
                <span className="stars" role="img" aria-label={t('stars', { n: item.info.rarity })}>
                  {'★'.repeat(item.info.rarity)}
                </span>
              )}
              {item?.info.type && <p className="tool__muted matsheet__type">{item.info.type}</p>}
            </div>
          </div>

          <section className="modal__sec">
            <h3>{t('matWhere')}</h3>
            {item === undefined && <p className="empty">{t('loading')}</p>}
            {item !== undefined && (
              <ul className="matsheet__list">
                {from.map((d) => (
                  <li key={d.id}>
                    {t('matDomain', { d: d.name, r: d.region })} · {d.days.length ? d.days.map(dayName).join(', ') : t('matEveryDay')}
                  </li>
                ))}
                {lines.map((s) => (
                  <li key={s}>{s}</li>
                ))}
                {craft && <li>{t('matCraft')}</li>}
                {from.length === 0 && lines.length === 0 && !craft && <li className="tool__muted">{t('matNoSource')}</li>}
              </ul>
            )}
          </section>

          <a className="tool-btn matsheet__map" href={OFFICIAL_MAP} target="_blank" rel="noreferrer">
            {t('mapOfficial')} ↗
          </a>
          <small className="tool__muted">{t('matMapNote')}</small>
        </div>
      </div>
    </div>
  )
}
