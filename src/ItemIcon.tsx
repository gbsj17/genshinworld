import { useEffect, useState } from 'react'
import { getArtifactInfo, getWeaponInfo } from './api'
import type { ItemInfo } from './api'
import { Thumb } from './Thumb'

// Ícone padrão de arma/artefato: mesmo quadro, mesmo tamanho e fundo pela raridade.
export function ItemIcon({
  kind,
  name,
  fallback,
}: {
  kind: 'weapon' | 'artifact'
  name: string
  fallback?: string // endereço da genshin.dev, usado se a genshin-db falhar
}) {
  const [info, setInfo] = useState<ItemInfo | null>(null)

  useEffect(() => {
    let active = true
    ;(kind === 'weapon' ? getWeaponInfo(name) : getArtifactInfo(name)).then(
      (i) => active && setInfo(i),
    )
    return () => {
      active = false
    }
  }, [kind, name])

  const urls = [...(info?.urls ?? []), ...(fallback ? [fallback] : [])]
  return (
    <div className={`item-icon item-icon--r${info?.rarity ?? 0}`}>
      {info && <Thumb src={urls} label={info.label ?? name} />}
    </div>
  )
}

// Nome da arma/artefato no idioma escolhido (a chave em inglês vale até a API responder).
export function ItemName({ kind, name }: { kind: 'weapon' | 'artifact'; name: string }) {
  const [label, setLabel] = useState<string | null>(null)
  useEffect(() => {
    let active = true
    ;(kind === 'weapon' ? getWeaponInfo(name) : getArtifactInfo(name)).then(
      (i) => active && setLabel(i.label ?? null),
    )
    return () => {
      active = false
    }
  }, [kind, name])
  return <>{label ?? name}</>
}

// Moldura de ícone com o fundo da raridade, para quando os endereços já são conhecidos.
export function ItemFrame({ urls, rarity, label }: { urls: string | string[]; rarity: number; label: string }) {
  return (
    <div className={`item-icon item-icon--r${rarity}`}>
      <Thumb src={urls} label={label} />
    </div>
  )
}
