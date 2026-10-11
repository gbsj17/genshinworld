import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { iconChain } from './api'
import { ItemIcon } from './ItemIcon'
import type { PickedItem } from './ItemModal'
import { Thumb } from './Thumb'
import type { CharacterSummary } from './types'

interface Banner {
  id: number
  title: string
  type: 'character' | 'weapon'
  image: string
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

const fmt = (iso: string | null) =>
  iso ? new Date(iso).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }) : null

function BannerCard({ b, onOpen }: { b: Banner; onOpen: () => void }) {
  const [failed, setFailed] = useState(false)
  const end = fmt(b.end)
  return (
    <button className="gacha-card" onClick={onOpen} aria-label={`Ver o que tem no banner ${b.title}`}>
      {!failed && <img className="gacha-card__img" src={b.image} alt="" onError={() => setFailed(true)} />}
      {end && <span className="gacha-card__chip gacha-card__chip--end">Até {end}</span>}
      <span className="gacha-card__chip gacha-card__chip--go">Ver o que tem no banner →</span>
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

  const find = (name: string) => chars.find((c) => c.name.toLowerCase() === name.toLowerCase())
  const groups = [
    { label: '5★ em destaque', items: b.five },
    { label: '4★ com chance aumentada', items: b.four },
  ].filter((g) => g.items.length > 0)

  const row = (name: string) => {
    if (b.type === 'character') {
      const c = find(name)
      const inner = (
        <>
          <Thumb round src={c ? iconChain(c) : undefined} label={name} />
          <span className="gacha-row__body">
            <strong>{name}</strong>
            <span>{c ? [c.vision, c.weapon].filter(Boolean).join(' · ') : ''}</span>
          </span>
          {c && <span className="gacha-row__go">Ver detalhes →</span>}
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
          <strong>{name}</strong>
        </span>
        <span className="gacha-row__go">Ver detalhes →</span>
      </button>
    )
  }

  const end = fmt(b.end)
  return (
    <div className="gacha-modal" role="dialog" aria-modal="true" aria-label={b.title}>
      <div className="gacha-modal__backdrop" onClick={onClose} aria-hidden="true" />
      <div className="gacha-modal__panel">
        <div className="gacha-modal__head">
          <div>
            <span className="gacha-modal__kind">{b.type === 'weapon' ? 'BANNER DE ARMA' : 'BANNER DE PERSONAGEM'}</span>
            <h3>{b.title}</h3>
            {end && <span className="gacha-modal__dates">Disponível até {end}</span>}
          </div>
          <button className="gacha-modal__close" aria-label="Fechar" onClick={onClose}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        {groups.length === 0 && <p className="empty">Veja a lista completa deste banner no jogo.</p>}
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

// Banners de oração atuais: personagens em carrossel, arma fixo. Só aparece no PC (CSS).
export default function Banners({
  chars,
  onPickWeapon,
}: {
  chars: CharacterSummary[]
  onPickWeapon: (p: PickedItem) => void
}) {
  const [banners, setBanners] = useState<Banner[]>([])
  const [index, setIndex] = useState(0)
  const [open, setOpen] = useState<Banner | null>(null)
  const [paused, setPaused] = useState(false)

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

  const characterBanners = banners.filter((b) => b.type === 'character')
  const weaponBanner = banners.find((b) => b.type === 'weapon')
  const n = characterBanners.length

  useEffect(() => {
    if (paused || open || n < 2) return
    const t = window.setInterval(() => setIndex((i) => (i + 1) % n), 7000)
    return () => window.clearInterval(t)
  }, [paused, open, n, index])

  if (banners.length === 0) return null
  const cur = characterBanners[index % Math.max(n, 1)]

  return (
    <section className="news-sec news-banners">
      <div className="news-head">
        <h2 className="news-title">Banners de oração</h2>
      </div>
      <div className="gacha-wrap">
        {cur && (
          <div className="gacha-col gacha-col--char" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
            <BannerCard key={cur.id} b={cur} onOpen={() => setOpen(cur)} />
            {n > 1 && (
              <div className="gacha-ctrl">
                <button aria-label="Banner anterior" onClick={() => setIndex((index + n - 1) % n)}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M15 5l-7 7 7 7" />
                  </svg>
                </button>
                <div className="gacha-dots">
                  {characterBanners.map((b, k) => (
                    <button
                      key={b.id}
                      className={k === index % n ? 'gacha-dot is-active' : 'gacha-dot'}
                      aria-label={`Ir para o banner ${k + 1}`}
                      onClick={() => setIndex(k)}
                    />
                  ))}
                </div>
                <button aria-label="Próximo banner" onClick={() => setIndex((index + 1) % n)}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        )}
        {weaponBanner && (
          <div className="gacha-col gacha-col--weapon">
            <BannerCard b={weaponBanner} onOpen={() => setOpen(weaponBanner)} />
          </div>
        )}
      </div>
      {open && <BannerModal b={open} chars={chars} onClose={() => setOpen(null)} onPickWeapon={onPickWeapon} />}
    </section>
  )
}
