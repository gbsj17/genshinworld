import type { Domain } from './api'

// Quantos dias faltam para o domínio abrir: 0 = hoje. Dia da semana: 0 = domingo ... 6 = sábado.
// Domínio sem dias (artefatos) abre todo dia.
export function daysUntilOpen(days: number[], today: number): number {
  if (days.length === 0 || days.includes(today)) return 0
  let best = 7
  for (const d of days) best = Math.min(best, (d - today + 7) % 7)
  return best
}

// Domínio de talento/arma que dá algum dos materiais pedidos (os nomes vêm no mesmo idioma dos domínios).
export function domainFor(domains: Domain[], kind: Domain['kind'], names: string[]): Domain | undefined {
  const want = new Set(names)
  return domains.find((d) => d.kind === kind && d.rewards.some((r) => want.has(r.name)))
}

// Domínios de artefato onde o conjunto cai.
export const artifactDomains = (domains: Domain[], setName: string): Domain[] =>
  domains.filter((d) => d.kind === 'artifact' && d.rewards.some((r) => r.name === setName))
