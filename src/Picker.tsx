import { useEffect, useMemo, useRef, useState } from 'react'
import { t } from './i18n'
import { Thumb } from './Thumb'

export interface PickOption {
  key: string
  label: string
  sub?: string
  search?: string // texto extra para a busca (ex.: nome em inglês)
  thumb: string | string[]
  round?: boolean
}

const normalize = (text: string) =>
  text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()

// Janela com busca para escolher um item (personagem, arma...).
export default function Picker({
  title,
  options,
  onPick,
  onClose,
}: {
  title: string
  options: PickOption[]
  onPick: (key: string) => void
  onClose: () => void
}) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      document.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  const shown = useMemo(() => {
    const q = normalize(query.trim())
    return options.filter((o) => !q || normalize(`${o.label} ${o.search ?? ''}`).includes(q))
  }, [options, query])

  return (
    <div className="picker" role="dialog" aria-modal="true" aria-label={title}>
      <div className="picker__backdrop" onClick={onClose} aria-hidden="true" />
      <div className="picker__panel">
        <div className="picker__bar">
          <input
            ref={inputRef}
            type="search"
            aria-label={t('search')}
            placeholder={title}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="picker__close" aria-label={t('close')} onClick={onClose}>
            Esc
          </button>
        </div>
        <div className="picker__list">
          {shown.length === 0 && <p className="empty">{t('nothingFound')}</p>}
          {shown.map((o) => (
            <button key={o.key} className="picker__item" onClick={() => onPick(o.key)}>
              <Thumb round={o.round} src={o.thumb} label={o.label} />
              <span>
                <strong>{o.label}</strong>
                {o.sub && <small>{o.sub}</small>}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
