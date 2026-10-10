import { useState } from 'react'

// Aceita uma imagem ou uma lista de alternativas: se uma falhar ao carregar,
// tenta a próxima. Se todas falharem, mostra a letra inicial.
export function Thumb({
  src,
  label,
  round,
}: {
  src?: string | string[]
  label: string
  round?: boolean
}) {
  const options = Array.isArray(src) ? src : src ? [src] : []
  const [index, setIndex] = useState(0)
  const current = options[index]
  const cls = round ? 'thumb thumb--round' : 'thumb'
  if (!current) {
    return (
      <div className={`${cls} thumb--empty`} aria-hidden="true">
        {label.charAt(0)}
      </div>
    )
  }
  return (
    <img
      key={current}
      className={cls}
      src={current}
      alt=""
      loading="lazy"
      onError={() => setIndex((i) => i + 1)}
    />
  )
}
