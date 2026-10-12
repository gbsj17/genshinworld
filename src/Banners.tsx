import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { iconChain } from './api'
import { dateShort, isPt, t, weaponLabel } from './i18n'
import { ItemIcon, ItemName } from './ItemIcon'
import type { PickedItem } from './ItemModal'
import { Thumb } from './Thumb'
import type { CharacterSummary } from './types'

interface Banner {
  id: number
  title: string
  type: 'character' | 'weapon'
  image: string
  // versão em português (título e imagem), quando existe
  pt?: { title: string; image: string }
  start: string | null
  end: string | null
  five: string[]
  four: string[]
}

let cache: Promise<Banner[]> | null = null

// banners.json é gerado todo dia no deploy (scripts/fetch-banners.mjs)
function loadBanners(): Promise<Banner[]> {
  if (!cache) {
    cache = fetch(`${import.meta.env.BASE_URL}banners.json`)
      .then((r) => (r.ok ? r.json() : { banners: [] }))
      .then((d: { banners?: Banner[] }) => d.banners ?? [])
      .catch(() => [])
  }
  return cache
}

const fmt = dateShort
const titleOf = (b: Banner) => (isPt && b.pt?.title) || b.title
const imageOf = (b: Banner) => (isPt && b.pt?.image) || b.image

function BannerCard({ b, onOpen }: { b: Banner; onOpen: () => void }) {
  const [failed, setFailed] = useState(false)
  const end = fmt(b.end)
  return (
    <button className="gacha-card" onClick={onOpen} aria-label={t('bannerOpen', { t: titleOf(b) })}>
      {!failed && <img className="gacha-card__img" src={imageOf(b)} alt="" onError={() => setFailed(true)} />}
      {end && <span className="gacha-card__chip gacha-card__chip--end">{t('bannerUntil', { d: end })}</span>}
      <span className="gacha-card__chip gacha-card__chip--go">{t('bannerSee')}</span>
    </button>
  )
}

function BannerModal({
  b,
  chars,
  onClose,
  onPickWeapon,
}: {
  b: Banner
  chars: CharacterSummary[]
  onClose: () => void
  onPickWeapon: (p: PickedItem) => void
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  const find = (name: string) => chars.find((c) => c.enName.toLowerCase() === name.toLowerCase())
  const groups = [
    { label: t('bannerFive'), items: b.five },
    { label: t('bannerFour'), items: b.four },
  ].filter((g) => g.items.length > 0)

  const row = (name: string) => {
    if (b.type === 'character') {
      const c = find(name)
      const inner = (
        <>
          <Thumb round src={c ? iconChain(c) : undefined} label={c ? c.name : name} />
          <span className="gacha-row__body">
            <strong>{c ? c.name : name}</strong>
            <span>{c ? [c.vision, weaponLabel(c.weapon)].filter(Boolean).join(' · ') : ''}</span>
          </span>
          {c && <span className="gacha-row__go">{t('seeDetails')}</span>}
        </>
      )
      return c ? (
        <Link key={name} to={`/character/${c.id}`} className="gacha-row">
          {inner}
        </Link>
      ) : (
        <div key={name} className="gacha-row">
          {inner}
        </div>
      )
    }
    return (
      <button
        key={name}
        className="gacha-row"
        onClick={() => {
          onClose()
          onPickWeapon({ kind: 'weapon', name, note: '' })
        }}
      >
        <ItemIcon kind="weapon" name={name} />
        <span className="gacha-row__body">
          <strong><ItemName kind="weapon" name={name} /></strong>
        </span>
        <span className="gacha-row__go">{t('seeDetails')}</span>
      </button>
    )
  }

  const end = fmt(b.end)
  return (
    <div className="gacha-modal" role="dialog" aria-modal="true" aria-label={titleOf(b)}>
      <div className="gacha-modal__backdrop" onClick={onClose} aria-hidden="true" />
      <div className="gacha-modal__panel">
        <div className="gacha-modal__head">
          <div>
            <span className="gacha-modal__kind">{b.type === 'weapon' ? t('bannerWeaponCaps') : t('bannerCharCaps')}</span>
            <h3>{titleOf(b)}</h3>
            {end && <span className="gacha-modal__dates">{t('bannerAvailUntil', { d: end })}</span>}
          </div>
          <button className="gacha-modal__close" aria-label={t('close')} onClick={onClose}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        {groups.length === 0 && <p className="empty">{t('bannerEmpty')}</p>}
        {groups.map((g) => (
          <div key={g.label} className="gacha-group">
            <div className="gacha-group__label">{g.label}</div>
            <div className="gacha-group__list">{g.items.map(row)}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Um carrossel de banners (troca sozinho, pausa com o mouse e com a lista aberta)
function Carousel({
  items,
  label,
  paused,
  onOpen,
}: {
  items: Banner[]
  label: string
  paused: boolean
  onOpen: (b: Banner) => void
}) {
  const [index, setIndex] = useState(0)
  const [hover, setHover] = useState(false)
  const n = items.length

  useEffect(() => {
    if (hover || paused || n < 2) return
    const t = window.setInterval(() => setIndex((i) => (i + 1) % n), 7000)
    return () => window.clearInterval(t)
  }, [hover, paused, n, index])

  if (n === 0) return null
  const k = index % n
  const cur = items[k]
  return (
    <div className="gacha-col" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <BannerCard key={cur.id} b={cur} onOpen={() => onOpen(cur)} />
      {n > 1 && (
        <div className="gacha-ctrl">
          <button aria-label={t('bannerPrev', { l: label })} onClick={() => setIndex((k + n - 1) % n)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </button>
          <div className="gacha-dots">
            {items.map((b, i) => (
              <button
                key={b.id}
                className={i === k ? 'gacha-dot is-active' : 'gacha-dot'}
                aria-label={t('bannerGo', { n: i + 1 })}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
          <button aria-label={t('bannerNext', { l: label })} onClick={() => setIndex((k + 1) % n)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}

// Banners de oração atuais: carrossel de personagem e carrossel de arma.
export default function Banners({
  chars,
  onPickWeapon,
}: {
  chars: CharacterSummary[]
  onPickWeapon: (p: PickedItem) => void
}) {
  const [banners, setBanners] = useState<Banner[]>([])
  const [open, setOpen] = useState<Banner | null>(null)

  useEffect(() => {
    let active = true
    loadBanners().then((all) => {
      const now = Date.now()
      const current = all.filter((b) => !b.end || new Date(b.end).getTime() > now)
      if (active) setBanners(current)
    })
    return () => {
      active = false
    }
  }, [])

  if (banners.length === 0) return null

  return (
    <section className="news-sec news-banners">
      <div className="news-head">
        <h2 className="news-title">{t('wishBanners')}</h2>
      </div>
      <div className="gacha-wrap">
        <Carousel items={banners.filter((b) => b.type === 'character')} label={t('bannerChar')} paused={Boolean(open)} onOpen={setOpen} />
        <Carousel items={banners.filter((b) => b.type === 'weapon')} label={t('bannerWeapon')} paused={Boolean(open)} onOpen={setOpen} />
      </div>
      {open && <BannerModal b={open} chars={chars} onClose={() => setOpen(null)} onPickWeapon={onPickWeapon} />}
    </section>
  )
}
