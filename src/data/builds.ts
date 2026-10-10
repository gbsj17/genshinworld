export interface Build {
  patch: string
  sources: { label: string; url: string }[]
  weapons: { name: string; note: string }[]
  artifacts: { name: string; note: string }[]
  mainStats: { slot: string; value: string }[]
  substats: string
  teams: { name: string; members: string[]; note: string }[]
}

const ICY_BUILDS = {
  label: 'Icy Veins: builds',
  url: 'https://www.icy-veins.com/genshin-impact/diluc-guide-best-builds',
}
const ICY_TEAMS = {
  label: 'Icy Veins: equipes',
  url: 'https://www.icy-veins.com/genshin-impact/diluc-team-guide',
}

export const BUILDS: Record<string, Build> = {
  diluc: {
    patch: '6.7',
    sources: [ICY_BUILDS, ICY_TEAMS],
    weapons: [
      { name: "Wolf's Gravestone", note: 'Muito ATQ e bônus de ATQ para o time. Melhor opção para Vaporize e Melt.' },
      { name: 'Gest of the Mighty Wolf', note: 'Taxa CRIT, velocidade de ataque e Dano CRIT extra. Melhor para times Overload com Nicole e Fischl.' },
      { name: 'Serpent Spine', note: 'Taxa CRIT e dano que acumula enquanto o Diluc fica em campo.' },
      { name: 'Blackcliff Slasher', note: 'Dano CRIT e ATQ ao derrotar inimigos. Bom contra vários alvos.' },
      { name: 'The Unforged', note: 'Foco em ATQ. Rende mais quando o Diluc está com escudo.' },
      { name: 'Mailed Flower', note: 'Uma das melhores opções gratuitas para builds de reação.' },
      { name: 'Rainslasher', note: 'Proficiência Elemental e mais dano contra inimigos com Hydro ou Electro. Combina com Vaporize.' },
      { name: 'Prototype Archaic', note: 'Fabricável e confiável. Boa opção para iniciantes.' },
    ],
    artifacts: [
      { name: 'Crimson Witch of Flames', note: 'O clássico e mais consistente em qualquer time.' },
      { name: 'Marechaussee Hunter', note: 'Recomendado principalmente com a Furina, pela Taxa CRIT.' },
    ],
    mainStats: [
      { slot: 'Areia', value: 'ATQ% ou Proficiência Elemental' },
      { slot: 'Cálice', value: 'Pyro DMG' },
      { slot: 'Tiara', value: 'Taxa CRIT ou Dano CRIT' },
    ],
    substats: 'Prioridade: CRIT, depois ATQ%, Proficiência Elemental e Recarga de Energia.',
    teams: [
      { name: 'Melt / Plunge', members: ['Diluc', 'Citlali', 'Bennett', 'Xianyun'], note: 'Citlali dá Cryo constante para o Melt e Xianyun ajuda nos ataques de mergulho.' },
      { name: 'Overload', members: ['Diluc', 'Chevreuse', 'Fischl', 'Bennett'], note: 'Chevreuse reduz a resistência elemental e Fischl causa dano Electro fora de campo.' },
      { name: 'Vaporize', members: ['Diluc', 'Xingqiu', 'Bennett', 'Kazuha'], note: 'Bennett dá os bônus e Kazuha traz utilidade ao time.' },
    ],
  },
}
