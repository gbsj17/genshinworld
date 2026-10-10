export interface Talent {
  name: string
  unlock: string
  description: string
  type?: string
  icons?: string[]
}

export interface Constellation {
  name: string
  unlock: string
  description: string
  level: number
  icons?: string[]
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
  icons?: string[]
  portrait?: string
  // artes do jogo (splash e card), usadas quando não há retrato melhor
  splash?: string[]
  // versão do jogo em que o personagem chegou (genshin-db)
  version?: string
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
