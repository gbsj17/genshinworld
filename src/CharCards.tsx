import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { iconChain } from './api'
import { useFavorites } from './favorites'
import { t, weaponLabel } from './i18n'
import type { OwnedInfo } from './owned'
import { Thumb } from './Thumb'
import type { CharacterSummary } from './types'
import { VISION_COLORS } from './visionColors'
import './charcards.css'

const STAR_PATH = 'M12 3l2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.8 6.6 19.7l1.1-6.1L3.2 9.4l6.1-.8z'

export function StarButton({ id, name }: { id: string; name: string }) {
  const { isFavorite, toggle } = useFavorites()
  const on = isFavorite(id)
  return (
    <button
      className="star-btn"
      aria-pressed={on}
      aria-label={on ? t('favRemove', { n: name }) : t('favAdd', { n: name })}
      onClick={() => toggle(id)}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill={on ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
        <path d={STAR_PATH} />
      </svg>
    </button>
  )
}

const elStyle = (c: CharacterSummary) => ({ '--el': VISION_COLORS[c.vision] ?? '#d3bc8e' }) as CSSProperties

// Ícone de "evoluindo": seta para cima com um mais
function GoalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 21V9M4 14l6-6 6 6M19 2v6M16 5h6" />
    </svg>
  )
}

// Chips de informação: elemento, arma, nação e, se for meta, o ícone "evoluindo"
function Chips({ c, goal }: { c: CharacterSummary; goal: boolean }) {
  return (
    <>
      <span className="cx-chip">
        <i aria-hidden="true" />
        {c.vision}
      </span>
      {c.weapon && <span className="cx-chip">{weaponLabel(c.weapon)}</span>}
      {c.nation && <span className="cx-chip">{c.nation}</span>}
      {goal && (
        <span className="cx-chip cx-chip--goal" title={t('goalChip')} aria-label={t('goalChip')} role="img">
          <GoalIcon />
        </span>
      )}
    </>
  )
}

const Pips = ({ n }: { n: number }) => (
  <span className="cx-pips" aria-hidden="true">
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <i key={i} className={i < n ? 'on' : ''} />
    ))}
  </span>
)

// Card da grade: foto com o brilho do elemento, informações e, no rodapé, constelação e nível
export function Card({ c, own, goal }: { c: CharacterSummary; own?: OwnedInfo; goal: boolean }) {
  return (
    <div className="vcard" style={elStyle(c)}>
      <Link to={`/character/${c.id}`} aria-label={c.name} className="vcard__link">
        <span className="vcard__stars" aria-label={t('stars', { n: c.rarity })}>
          {'★'.repeat(c.rarity)}
        </span>
        <span className="vcard__img">
          <Thumb round src={iconChain(c)} label={c.name} />
        </span>
        <strong>{c.name}</strong>
        <span className="vcard__chips">
          <Chips c={c} goal={goal} />
        </span>
        {own ? (
          <span className="vcard__own">
            <Pips n={own.c} />
            <span>
              {t('lvShort')} {own.lv} <small>· C{own.c}</small>
            </span>
          </span>
        ) : (
          <span className="vcard__own vcard__own--no">{t('ownNo')}</span>
        )}
      </Link>
      <StarButton id={c.id} name={c.name} />
    </div>
  )
}

// Linha da lista: faixa com a cor do elemento
export function Row({ c, own, goal }: { c: CharacterSummary; own?: OwnedInfo; goal: boolean }) {
  return (
    <div className="vrow" style={elStyle(c)}>
      <Link to={`/character/${c.id}`} aria-label={c.name} className="vrow__link">
        <Thumb round src={iconChain(c)} label={c.name} />
        <span className="vrow__mid">
          <strong>{c.name}</strong>
          <span className="vrow__chips">
            <span className="vcard__stars" aria-label={t('stars', { n: c.rarity })}>
              {'★'.repeat(c.rarity)}
            </span>
            <Chips c={c} goal={goal} />
          </span>
        </span>
      </Link>
      <div className="vrow__rt">
        <StarButton id={c.id} name={c.name} />
        {own ? (
          <span className="cx-tag">
            ✓ C{own.c} · {t('lvShort')} {own.lv}
          </span>
        ) : (
          <span className="cx-chip">{t('ownNo')}</span>
        )}
      </div>
    </div>
  )
}
