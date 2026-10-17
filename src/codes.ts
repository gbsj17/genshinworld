export interface CodesFile {
  updatedAt: string | null
  source: string | null
  codes: { code: string; rewards: string[] }[]
}

let cache: Promise<CodesFile> | null = null

// codes.json é gerado todo dia no deploy (scripts/fetch-codes.mjs)
export function getCodes(): Promise<CodesFile> {
  if (!cache) {
    cache = fetch(`${import.meta.env.BASE_URL}codes.json`)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((d: unknown) => {
        const f = d as Partial<CodesFile>
        if (!f || !Array.isArray(f.codes)) throw new Error('codes: formato inesperado')
        return {
          updatedAt: typeof f.updatedAt === 'string' ? f.updatedAt : null,
          source: typeof f.source === 'string' ? f.source : null,
          codes: f.codes.filter((c) => c && typeof c.code === 'string').map((c) => ({ code: c.code, rewards: Array.isArray(c.rewards) ? c.rewards.filter((x) => typeof x === 'string') : [] })),
        }
      })
    cache.catch(() => (cache = null))
  }
  return cache
}

// Página oficial de resgate (entra com a conta do jogo; o código já vai preenchido)
export const redeemUrl = (code: string) => `https://genshin.hoyoverse.com/en/gift?code=${encodeURIComponent(code)}`
