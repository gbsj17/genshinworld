import { useState } from 'react'

export function Thumb({
  src,
  label,
  round,
}: {
  src?: string
  label: string
  round?: boolean
}) {
  const [failed, setFailed] = useState(false)
  const cls = round ? 'thumb thumb--round' : 'thumb'
  if (!src || failed) {
    return (
      <div className={`${cls} thumb--empty`} aria-hidden="true">
        {label.charAt(0)}
      </div>
    )
  }
  return (
    <img
      className={cls}
      src={src}
      alt=""
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}
