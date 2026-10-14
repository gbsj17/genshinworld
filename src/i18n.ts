export type Lang = 'pt' | 'en'

const KEY = 'genshinworld:lang'

function detect(): Lang {
  try {
    const saved = localStorage.getItem(KEY)
    if (saved === 'pt' || saved === 'en') return saved
  } catch {
    // sem armazenamento: usa o idioma do navegador
  }
  return navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

// O idioma é lido uma vez ao abrir o app. Trocar o idioma salva a escolha e recarrega a página,
// assim todos os dados (nomes, textos da API, banners) vêm de novo já no idioma certo.
export const lang: Lang = detect()
export const isPt = lang === 'pt'
export const apiLang = isPt ? 'Portuguese' : 'English'

if (typeof document !== 'undefined') {
  document.documentElement.lang = isPt ? 'pt-BR' : 'en'
}

export function setLang(next: Lang) {
  if (next === lang) return
  try {
    localStorage.setItem(KEY, next)
  } catch {
    // sem armazenamento: não dá para guardar a escolha
  }
  window.location.reload()
}

const DICT = {
  loading: ['Carregando...', 'Loading...'],
  retry: ['Tentar de novo', 'Try again'],
  nothingFound: ['Nada encontrado.', 'Nothing found.'],
  loadFail: ['Não foi possível carregar.', 'Could not load.'],
  loadListFail: ['Não foi possível carregar a lista.', 'Could not load the list.'],
  loadCharsFail: ['Não foi possível carregar os personagens.', 'Could not load the characters.'],
  loadCharFail: ['Não foi possível carregar o personagem.', 'Could not load the character.'],
  loadDetailsFail: ['Não foi possível carregar os detalhes.', 'Could not load the details.'],
  charNotFound: ['Personagem não encontrado', 'Character not found'],
  back: ['Voltar', 'Back'],
  close: ['Fechar', 'Close'],

  // navegação
  home: ['Início', 'Home'],
  characters: ['Personagens', 'Characters'],
  weapons: ['Armas', 'Weapons'],
  artifacts: ['Artefatos', 'Artifacts'],
  favorites: ['Favoritos', 'Favorites'],
  docs: ['Documentação', 'Documentation'],
  searchDocs: ['Buscar na documentação', 'Search the documentation'],
  docsIndex: ['Índice da documentação', 'Documentation index'],
  docsTopics: ['Tópicos', 'Topics'],
  navigation: ['Navegação', 'Navigation'],
  sections: ['Seções', 'Sections'],
  searchBtn: ['Pesquisa', 'Search'],
  search: ['Buscar', 'Search'],
  closeSearch: ['Fechar busca', 'Close search'],
  searchApp: ['Buscar no app', 'Search the app'],
  searchChar: ['Buscar personagem', 'Search character'],
  searchWeapon: ['Buscar arma', 'Search weapon'],
  searchArtifact: ['Buscar artefato', 'Search artifact'],
  searchAll: ['Buscar personagens, armas e artefatos', 'Search characters, weapons and artifacts'],
  openMenu: ['Abrir menu', 'Open menu'],

  // menu
  menu: ['Menu', 'Menu'],
  closeMenu: ['Fechar menu', 'Close menu'],
  menuSub: ['Personagens, builds e equipes', 'Characters, builds and teams'],
  theme: ['Tema', 'Theme'],
  themeLight: ['Areia claro', 'Light sand'],
  themeDark: ['Escuro', 'Dark'],
  themeSwitch: ['Tema areia claro', 'Light sand theme'],
  language: ['Idioma', 'Language'],

  // cabeçalhos de página
  capResults: ['RESULTADOS', 'RESULTS'],
  capHome: ['INÍCIO', 'HOME'],
  capChars: ['PERSONAGENS', 'CHARACTERS'],
  capWeapons: ['ARMAS', 'WEAPONS'],
  capArtifacts: ['ARTEFATOS', 'ARTIFACTS'],
  capFavorites: ['FAVORITOS', 'FAVORITES'],
  capDocs: ['DOCUMENTAÇÃO', 'DOCUMENTATION'],

  footerBy: ['Criado por {a}', 'Created by {a}'],
  footerCompany: ['Faz parte da {c}', 'Part of {c}'],

  // início
  newTag: ['NOVO', 'NEW'],
  newVersionTag: ['NOVO · VERSÃO {v}', 'NEW · VERSION {v}'],
  newCharAria: ['{n}, novo personagem', '{n}, new character'],
  newChars: ['Novos personagens', 'New characters'],
  newWeapons: ['Novas armas', 'New weapons'],
  newArtifacts: ['Novos artefatos', 'New artifacts'],
  newMaterials: ['Novos materiais', 'New materials'],
  splashSub: ['Personagens · Builds · Equipes', 'Characters · Builds · Teams'],
  seeAll: ['Ver tudo', 'See all'],
  version: ['Versão', 'Version'],
  newsUnavailable: ['Novidades indisponíveis no momento.', 'News unavailable right now.'],
  heroNew: ['Novos personagens', 'New characters'],
  prev: ['Anterior', 'Previous'],
  next: ['Próximo', 'Next'],
  goTo: ['Ir para {n}', 'Go to {n}'],
  scrollHint: ['Ver mais novidades abaixo', 'See more news below'],
  viewSheet: ['Ver ficha', 'View profile'],
  viewBuild: ['Ver build', 'View build'],

  // banners de oração
  wishBanners: ['Banners de oração', 'Wish banners'],
  bannerChar: ['Banner de personagem', 'Character banner'],
  bannerWeapon: ['Banner de arma', 'Weapon banner'],
  bannerCharCaps: ['BANNER DE PERSONAGEM', 'CHARACTER BANNER'],
  bannerWeaponCaps: ['BANNER DE ARMA', 'WEAPON BANNER'],
  bannerOpen: ['Ver o que tem no banner {t}', 'See what is in the banner {t}'],
  bannerUntil: ['Até {d}', 'Until {d}'],
  bannerAvailUntil: ['Disponível até {d}', 'Available until {d}'],
  bannerSee: ['Ver o que tem no banner →', 'See what is in the banner →'],
  bannerFive: ['5★ em destaque', 'Featured 5★'],
  bannerFour: ['4★ com chance aumentada', '4★ with boosted rate'],
  bannerEmpty: ['Veja a lista completa deste banner no jogo.', 'See the full list for this banner in the game.'],
  seeDetails: ['Ver detalhes →', 'See details →'],
  bannerPrev: ['{l} anterior', '{l}: previous'],
  bannerNext: ['{l} seguinte', '{l}: next'],
  bannerGo: ['Ir para o banner {n}', 'Go to banner {n}'],

  // personagens
  all: ['Todos', 'All'],
  list: ['Lista', 'List'],
  viewList: ['Ver em lista', 'List view'],
  viewGrid: ['Ver em grade', 'Grid view'],
  countChars: ['{n} personagens', '{n} characters'],
  countWeapons: ['{n} armas', '{n} weapons'],
  countSets: ['{n} conjuntos', '{n} sets'],
  tapStarChar: ['Toque na estrela de um personagem para favoritar.', 'Tap the star on a character to favorite it.'],
  noChars: ['Nenhum personagem encontrado.', 'No characters found.'],
  alphaIndex: ['Índice alfabético', 'Alphabetical index'],
  favAdd: ['Adicionar {n} aos favoritos', 'Add {n} to favorites'],
  favRemove: ['Remover {n} dos favoritos', 'Remove {n} from favorites'],
  favAddShort: ['Adicionar aos favoritos', 'Add to favorites'],
  favRemoveShort: ['Remover dos favoritos', 'Remove from favorites'],

  // itens
  allRarities: ['Todas as raridades', 'All rarities'],
  weaponAll: ['Todas', 'All'],
  weapon: ['Arma', 'Weapon'],
  artifactSet: ['Conjunto de artefatos', 'Artifact set'],
  stars: ['{n} estrelas', '{n} stars'],
  inThisBuild: ['Nesta build', 'In this build'],
  statType: ['Tipo', 'Type'],
  baseAtk: ['ATQ base', 'Base ATK'],
  subStat: ['Atributo secundário', 'Secondary stat'],
  effect: ['Efeito', 'Effect'],
  refineNote: ['Valores de R1 → R5.', 'R1 → R5 values.'],
  set2: ['Bônus de 2 peças', '2-piece bonus'],
  set4: ['Bônus de 4 peças', '4-piece bonus'],

  // favoritos
  favType: ['Tipo de favorito', 'Favorite type'],
  favEmpty: [
    'Nada favoritado aqui ainda. Toque na estrela de um item para guardar.',
    'Nothing favorited here yet. Tap the star on an item to save it.',
  ],

  // ficha
  tabOverview: ['Visão geral', 'Overview'],
  tabTalents: ['Talentos', 'Talents'],
  tabConst: ['Constelações', 'Constellations'],
  tabBuilds: ['Builds', 'Builds'],
  sheetSections: ['Seções da ficha', 'Profile sections'],
  element: ['Elemento', 'Element'],
  nation: ['Nação', 'Nation'],
  rarity: ['Raridade', 'Rarity'],
  starsCount: ['{n} estrelas', '{n} stars'],
  bestWeapon: ['Melhor arma', 'Best weapon'],
  suggestedTeam: ['Equipe sugerida', 'Suggested team'],
  skillNormal: ['Ataque normal', 'Normal attack'],
  skillSkill: ['Habilidade elemental', 'Elemental skill'],
  skillBurst: ['Supremo elemental', 'Elemental burst'],
  talent: ['Talento', 'Talent'],
  passive: ['Passivo', 'Passive'],
  constellationN: ['Constelação {n}', 'Constellation {n}'],
  noBuild: ['Ainda não há build cadastrada para este personagem.', 'There is no build for this character yet.'],
  mainStats: ['Atributos principais', 'Main stats'],
  teams: ['Equipes', 'Teams'],
  open: ['Abrir {n}', 'Open {n}'],
  patch: ['Patch', 'Patch'],
  sources: ['Fontes', 'Sources'],
  slotSands: ['Areia', 'Sands'],
  slotGoblet: ['Cálice', 'Goblet'],
  slotCirclet: ['Tiara', 'Circlet'],
} as const

export type Key = keyof typeof DICT

export function t(key: Key, vars?: Record<string, string | number>): string {
  let s: string = DICT[key][isPt ? 0 : 1]
  if (vars) for (const [k, v] of Object.entries(vars)) s = s.replace(`{${k}}`, String(v))
  return s
}

const WEAPON_PT: Record<string, string> = {
  Sword: 'Espada',
  Claymore: 'Montante',
  Polearm: 'Lança',
  Bow: 'Arco',
  Catalyst: 'Catalisador',
}

// Tipos de arma chegam da API em inglês (chave interna); aqui viram o texto da tela.
export const weaponLabel = (w: string): string => (isPt ? (WEAPON_PT[w] ?? w) : w)

export const dateShort = (iso: string | null): string | null =>
  iso
    ? new Date(iso).toLocaleDateString(isPt ? 'pt-BR' : 'en-US', { day: '2-digit', month: '2-digit' })
    : null
