export interface Member {
  name: string
  id?: string
  icon?: string
}

export interface Build {
  patch: string
  sources: { label: string; url: string }[]
  weapons: { name: string; id?: string; icon?: string; note: string }[]
  artifacts: { name: string; id: string; note: string }[]
  mainStats: { slot: string; value: string }[]
  substats: string
  teams: { name: string; members: Member[]; note: string }[]
}

const ICY_BUILDS = {
  label: 'Icy Veins: builds',
  url: 'https://www.icy-veins.com/genshin-impact/diluc-guide-best-builds',
}
const ICY_TEAMS = {
  label: 'Icy Veins: equipes',
  url: 'https://www.icy-veins.com/genshin-impact/diluc-team-guide',
}

// Os "id" são os nomes usados pela API genshin.jmp.blue.
// Sem "id" = não existe na API, então a tela mostra a inicial do nome.
export const BUILDS: Record<string, Build> = {
  diluc: {
    patch: '6.7',
    sources: [ICY_BUILDS, ICY_TEAMS],
    weapons: [
      { name: "Wolf's Gravestone", id: 'wolf-s-gravestone', note: 'Muito ATQ e bônus de ATQ para o time. Melhor opção para Vaporize e Melt.' },
      { name: 'Gest of the Mighty Wolf', icon: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/UI_EquipIcon_Claymore_EnsisAquilonis.png', note: 'Taxa CRIT, velocidade de ataque e Dano CRIT extra. Melhor para times Overload com Nicole e Fischl.' },
      { name: 'Serpent Spine', id: 'serpent-spine', note: 'Taxa CRIT e dano que acumula enquanto o Diluc fica em campo.' },
      { name: 'Blackcliff Slasher', id: 'blackcliff-slasher', note: 'Dano CRIT e ATQ ao derrotar inimigos. Bom contra vários alvos.' },
      { name: 'The Unforged', id: 'the-unforged', note: 'Foco em ATQ. Rende mais quando o Diluc está com escudo.' },
      { name: 'Mailed Flower', id: 'mailed-flower', note: 'Uma das melhores opções gratuitas para builds de reação.' },
      { name: 'Rainslasher', id: 'rainslasher', note: 'Proficiência Elemental e mais dano contra inimigos com Hydro ou Electro. Combina com Vaporize.' },
      { name: 'Prototype Archaic', id: 'prototype-archaic', note: 'Fabricável e confiável. Boa opção para iniciantes.' },
    ],
    artifacts: [
      { name: 'Crimson Witch of Flames', id: 'crimson-witch-of-flames', note: 'O clássico e mais consistente em qualquer time.' },
      { name: 'Marechaussee Hunter', id: 'marechaussee-hunter', note: 'Recomendado principalmente com a Furina, pela Taxa CRIT.' },
    ],
    mainStats: [
      { slot: 'Areia', value: 'ATQ% ou Proficiência Elemental' },
      { slot: 'Cálice', value: 'Pyro DMG' },
      { slot: 'Tiara', value: 'Taxa CRIT ou Dano CRIT' },
    ],
    substats: 'Prioridade: CRIT, depois ATQ%, Proficiência Elemental e Recarga de Energia.',
    teams: [
      {
        name: 'Melt / Plunge',
        members: [{ name: 'Diluc', id: 'diluc' }, { name: 'Citlali', icon: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Citlali.png' }, { name: 'Bennett', id: 'bennett' }, { name: 'Xianyun', id: 'xianyun' }],
        note: 'Citlali dá Cryo constante para o Melt e Xianyun ajuda nos ataques de mergulho.',
      },
      {
        name: 'Overload',
        members: [{ name: 'Diluc', id: 'diluc' }, { name: 'Chevreuse', id: 'chevreuse' }, { name: 'Fischl', id: 'fischl' }, { name: 'Bennett', id: 'bennett' }],
        note: 'Chevreuse reduz a resistência elemental e Fischl causa dano Electro fora de campo.',
      },
      {
        name: 'Vaporize',
        members: [{ name: 'Diluc', id: 'diluc' }, { name: 'Xingqiu', id: 'xingqiu' }, { name: 'Bennett', id: 'bennett' }, { name: 'Kazuha', id: 'kazuha' }],
        note: 'Bennett dá os bônus e Kazuha traz utilidade ao time.',
      },
    ],
  },
}
