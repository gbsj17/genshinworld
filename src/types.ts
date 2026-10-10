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
