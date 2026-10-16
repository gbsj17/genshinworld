// Regra de sincronização, sem Firebase (para dar para testar).
// remoteAt: quando a nuvem foi gravada pela última vez (null = nunca)
// syncedAt: a última versão da nuvem que este aparelho conhece (null = primeira vez nesta conta)
// dirty: este aparelho mudou algo desde a última sincronização
export type SyncAction = 'upload' | 'download' | 'conflict' | 'none'

export function decide(o: {
  remoteAt: number | null
  syncedAt: number | null
  dirty: boolean
  localEmpty: boolean
  same: boolean
}): SyncAction {
  if (o.remoteAt === null) return o.localEmpty ? 'none' : 'upload'
  if (o.same) return 'none'
  if (o.syncedAt === null) return o.localEmpty ? 'download' : 'conflict'
  if (o.remoteAt > o.syncedAt) return o.dirty ? 'conflict' : 'download'
  return o.dirty ? 'upload' : 'none'
}

// JSON com as chaves em ordem, para comparar dois conjuntos de dados
export function stable(v: unknown): string {
  if (Array.isArray(v)) return `[${v.map(stable).join(',')}]`
  if (v && typeof v === 'object') {
    const o = v as Record<string, unknown>
    return `{${Object.keys(o)
      .sort()
      .map((k) => `${JSON.stringify(k)}:${stable(o[k])}`)
      .join(',')}}`
  }
  return JSON.stringify(v) ?? 'null'
}
