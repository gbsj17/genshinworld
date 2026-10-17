// Gera src/data/exp.json a partir das tabelas do jogo (AnimeGameData, GitHub).
// Uso: node scripts/build-exp.mjs   (precisa de internet; o resultado já fica salvo no projeto)
import { writeFileSync } from 'node:fs'

const B = 'https://raw.githubusercontent.com/DimbreathBot/AnimeGameData/master/ExcelBinOutput'
const get = async (f) => {
  const r = await fetch(`${B}/${f}.json`)
  if (!r.ok) throw new Error(`${f}: ${r.status}`)
  return r.json()
}

const [avatar, weapon, material] = await Promise.all([
  get('AvatarLevelExcelConfigData'),
  get('WeaponLevelExcelConfigData'),
  get('MaterialExcelConfigData'),
])

// EXP para sair do nível N e ir para N+1 (índice 0 = nível 1). O nível 90 não sobe mais.
const character = Array.from({ length: 89 }, (_, i) => avatar.find((x) => x.level === i + 1).exp)
const weapons = {}
for (let r = 1; r <= 5; r++) weapons[r] = Array.from({ length: 89 }, (_, i) => weapon.find((x) => x.level === i + 1).requiredExps[r - 1])

// EXP que cada item dá ao ser usado
const itemExp = (id, op) => Number(material.find((m) => m.id === id).itemUse.find((u) => u.useOp === op).useParam[0])
const items = {
  character: [104001, 104002, 104003].map((id) => ({ id, exp: itemExp(id, 'ITEM_USE_ADD_EXP') })),
  weapon: [104011, 104012, 104013].map((id) => ({ id, exp: itemExp(id, 'ITEM_USE_ADD_WEAPON_EXP') })),
}

writeFileSync(new URL('../src/data/exp.json', import.meta.url), JSON.stringify({ character, weapons, items }) + '\n')
console.log('ok', character.length, Object.keys(weapons).length, JSON.stringify(items))
