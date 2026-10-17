import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { t } from './i18n'
import { ItemIcon } from './ItemIcon'
import type { OwnedWeapon } from './ownedWeapons'
import './charcards.css'

const RARITY_COLORS: Record<number, string> = { 5: '#f0b232', 4: '#b58cf2', 3: '#4cc2f1', 2: '#74c2a8', 1: '#aab1c8' }

// Ícone de "evoluindo": seta para cima com um mais
const GoalIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 21V9M4 14l6-6 6 6M19 2v6M16 5h6" />
  </svg>
)

export interface ItemCardProps {
  kind: 'weapon' | 'artifact'
  name: string // chave (inglês)
  label: string
  rarity: number
  type?: string // tipo da arma
  owned?: OwnedWeapon
  goal: boolean
  fav: boolean
  onFav: () => void
}

function Star({ fav, label, onFav }: { fav: boolean; label: string; onFav: () => void }) {
  return (
    <button className="star-btn" aria-pressed={fav} aria-label={label} onClick={onFav}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill={fav ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3l2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.8 6.6 19.7l1.1-6.1L3.2 9.4l6.1-.8z" />
      </svg>
    </button>
  )
}

function Chips({ kind, type, goal }: { kind: 'weapon' | 'artifact'; type?: string; goal: boolean }) {
  return (
    <>
      <span className="cx-chip">
        <i aria-hidden="true" />
        {kind === 'weapon' ? (type ?? '') : t('setChip')}
      </span>
      {goal && (
        <span className="cx-chip cx-chip--goal" title={t('goalChip')} aria-label={t('goalChip')} role="img">
          <GoalIcon />
        </span>
      )}
    </>
  )
}

const styleOf = (rarity: number) => ({ '--el': RARITY_COLORS[rarity] ?? '#d3bc8e' }) as CSSProperties
const starLabel = (p: ItemCardProps) => (p.fav ? t('favRemove', { n: p.label }) : t('favAdd', { n: p.label }))

// Card da grade de armas e artefatos (mesmo padrão dos personagens)
export function ItemCard(p: ItemCardProps) {
  const to = `/${p.kind}/${encodeURIComponent(p.name)}`
  return (
    <div className="vcard" style={styleOf(p.rarity)}>
      <Link to={to} aria-label={p.label} className="vcard__link">
        <span className="vcard__stars">{p.rarity > 0 ? '★'.repeat(p.rarity) : ''}</span>
        <span className="vcard__img vcard__img--sq">
          <ItemIcon kind={p.kind} name={p.name} />
        </span>
        <strong>{p.label}</strong>
        <span className="vcard__chips">
          <Chips kind={p.kind} type={p.type} goal={p.goal} />
        </span>
        {p.kind === 'weapon' ? (
          p.owned ? (
            <span className="vcard__own">
              <span className="cx-tag">R{p.owned.r}</span>
              <span>
                {t('lvShort')} {p.owned.lv}
              </span>
            </span>
          ) : (
            <span className="vcard__own vcard__own--no">{t('ownNo')}</span>
          )
        ) : (
          <span className="vcard__own vcard__own--no">{t('setSee')}</span>
        )}
      </Link>
      <Star fav={p.fav} label={starLabel(p)} onFav={p.onFav} />
    </div>
  )
}

// Linha da lista de armas e artefatos
export function ItemRow(p: ItemCardProps) {
  const to = `/${p.kind}/${encodeURIComponent(p.name)}`
  return (
    <div className="vrow" style={styleOf(p.rarity)}>
      <Link to={to} aria-label={p.label} className="vrow__link">
        <span className="vrow__ic">
          <ItemIcon kind={p.kind} name={p.name} />
        </span>
        <span className="vrow__mid">
          <strong>{p.label}</strong>
          <span className="vrow__chips">
            <span className="vcard__stars">{p.rarity > 0 ? '★'.repeat(p.rarity) : ''}</span>
            <Chips kind={p.kind} type={p.type} goal={p.goal} />
          </span>
        </span>
      </Link>
      <div className="vrow__rt">
        <Star fav={p.fav} label={starLabel(p)} onFav={p.onFav} />
        {p.kind === 'weapon' &&
          (p.owned ? (
            <span className="cx-tag">
              ✓ R{p.owned.r} · {t('lvShort')} {p.owned.lv}
            </span>
          ) : (
            <span className="cx-chip">{t('ownNo')}</span>
          ))}
      </div>
    </div>
  )
}
