import { isPt, t } from '../i18n'
import type { Build } from './builds'

// A tradução só é baixada no modo inglês; quem usa português não paga esses ~190 KB.
const MAP: Record<string, string> = isPt ? {} : ((await import('./builds.en.json')).default as Record<string, string>)
const SLOT: Record<string, string> = { Areia: t('slotSands'), Cálice: t('slotGoblet'), Tiara: t('slotCirclet') }
const tr = (s: string) => (isPt ? s : (MAP[s] ?? s))

// Textos das builds estão escritos em português; no modo inglês, cada frase é trocada pela tradução.
export function buildText(b: Build | undefined): Build | undefined {
  if (!b || isPt) return b
  return {
    ...b,
    sources: b.sources.map((s) => ({ ...s, label: tr(s.label) })),
    weapons: b.weapons.map((w) => ({ ...w, note: tr(w.note) })),
    artifacts: b.artifacts.map((a) => ({ ...a, note: tr(a.note) })),
    mainStats: b.mainStats.map((m) => ({ slot: SLOT[m.slot] ?? m.slot, value: tr(m.value) })),
    substats: tr(b.substats),
    teams: b.teams.map((t) => ({ ...t, name: tr(t.name), note: tr(t.note) })),
  }
}
