import { useCallback, useState } from 'react'
import type { ReactNode } from 'react'
import MaterialSheet from './MaterialSheet'

// Uso: const { openMat, matSheet } = useMaterialSheet(); onClick={() => openMat(nome)}; {matSheet}
export function useMaterialSheet(): { openMat: (name: string) => void; matSheet: ReactNode } {
  const [name, setName] = useState<string | null>(null)
  const close = useCallback(() => setName(null), [])
  return { openMat: setName, matSheet: name ? <MaterialSheet name={name} onClose={close} /> : null }
}
