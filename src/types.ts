export interface Talent {
  name: string
  unlock: string
  description: string
  type?: string
}

export interface Constellation {
  name: string
  unlock: string
  description: string
  level: number
}

export interface CharacterSummary {
  id: string
  name: string
  vision: string
  weapon: string
  nation: string
  rarity: number
  // id do mesmo personagem na genshin.dev (só existe para os mais antigos)
  devId?: string
  icon?: string
  portrait?: string
}

export interface Character {
  name: string
  vision: string
  weapon: string
  nation: string
  rarity: number
  skillTalents: Talent[]
  passiveTalents: Talent[]
  constellations: Constellation[]
}
