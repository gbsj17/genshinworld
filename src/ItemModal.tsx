import { useEffect, useRef, useState } from 'react'
import { getArtifactInfo, getWeaponInfo } from './api'
import type { ItemInfo } from './api'
import { useFavorites } from './favorites'
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
          ['Tipo', info?.type],
          ['ATQ base', info?.baseAtk],
          ['Atributo secundário', info?.stat],
        ]
      : []

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={item.name}>
      <div className="modal__backdrop" onClick={onClose} aria-hidden="true" />
      <div className="modal__panel">
        <div className="modal__bar">
          <button ref={backRef} className="round-btn" aria-label="Voltar" onClick={onClose}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </button>
          <span className="modal__kind">{item.kind === 'weapon' ? 'Arma' : 'Conjunto de artefatos'}</span>
          <button
            className="round-btn modal__fav"
            aria-pressed={fav}
            aria-label={fav ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
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
              <h2>{item.name}</h2>
              {info && info.rarity > 0 && (
                <span className="stars" role="img" aria-label={`${info.rarity} estrelas`}>
                  {'★'.repeat(info.rarity)}
                </span>
              )}
            </div>
          </div>

          {item.note && (
            <section className="modal__sec">
              <h3>Nesta build</h3>
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
              <h3>{info.effectName ?? 'Efeito'}</h3>
              <p>{info.effect}</p>
              <small>Valores de R1 → R5. Texto em inglês, como vem da API.</small>
            </section>
          )}

          {info?.set2 && (
            <section className="modal__sec">
              <h3>Bônus de 2 peças</h3>
              <p>{info.set2}</p>
            </section>
          )}
          {info?.set4 && (
            <section className="modal__sec">
              <h3>Bônus de 4 peças</h3>
              <p>{info.set4}</p>
              <small>Texto em inglês, como vem da API.</small>
            </section>
          )}

          {info && !info.effect && !info.set2 && !info.set4 && (
            <p className="empty">Não foi possível carregar os detalhes.</p>
          )}
        </div>
      </div>
    </div>
  )
}
