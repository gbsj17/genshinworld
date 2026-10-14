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
  tools: ['Ferramentas', 'Tools'],
  compare: ['Comparar', 'Compare'],
  compareSub: ['Personagens e armas lado a lado', 'Characters and weapons side by side'],
  teamBuilder: ['Equipes', 'Teams'],
  teamSub: ['Monte times e veja a sinergia', 'Build teams and see the synergy'],
  farm: ['Farm de hoje', "Today's farm"],
  farmSub: ['Domínios abertos em cada dia', 'Domains open each day'],
  capFarm: ['FARM', 'FARM'],
  farmToday: ['Hoje', 'Today'],
  farmTalent: ['Livros de talento', 'Talent books'],
  farmWeapon: ['Materiais de arma', 'Weapon materials'],
  farmArtifact: ['Artefatos (todos os dias)', 'Artifacts (every day)'],
  farmSunday: ['No domingo todos os domínios estão abertos.', 'On Sunday every domain is open.'],
  farmFail: ['Não foi possível carregar os domínios.', 'Could not load the domains.'],
  wishlist: ['Lista de desejos', 'Wishlist'],
  capWish: ['DESEJOS', 'WISHLIST'],
  wishAdd: ['Adicionar personagem', 'Add character'],
  wishEmpty: ['Escolha os personagens que você quer para ver quanto material vai precisar.', 'Pick the characters you want to see how much material you will need.'],
  wishDetails: ['Detalhes', 'Details'],
  wishTalentGoal: ['Talentos até o nível', 'Talents up to level'],
  wishLoadFail: ['Não foi possível carregar os custos de {n} personagem(ns).', 'Could not load the costs of {n} character(s).'],
  wishNote: ['Soma a ascensão completa (fases 0 a 6) e os 3 talentos do nível 1 até a meta, para cada personagem. EXP de nível não está incluída.', 'Adds the full ascension (phases 0 to 6) and the 3 talents from level 1 to the goal, for each character. Level EXP is not included.'],
  pity: ['Contador de pity', 'Pity counter'],
  capPity: ['PITY', 'PITY'],
  pityBanner: ['Banner', 'Banner'],
  pityChar: ['Personagem', 'Character'],
  pityWeapon: ['Arma', 'Weapon'],
  pityStandard: ['Padrão', 'Standard'],
  pityCount: ['tiragens desde o último 5★', 'pulls since the last 5★'],
  pityToSoft: ['{n} tiragens até o pity suave (a partir da {soft}ª a chance sobe).', '{n} pulls to soft pity (from pull {soft} the rate rises).'],
  pityInSoft: ['Você já está no pity suave (desde a {soft}ª tiragem).', 'You are already in soft pity (since pull {soft}).'],
  pityToHard: ['No máximo {n} tiragens até o 5★ garantido.', 'At most {n} pulls until the guaranteed 5★.'],
  pityGuaranteed: ['O próximo 5★ é o destaque garantido.', 'The next 5★ is the guaranteed featured one.'],
  pityFifty: ['O próximo 5★ é 50/50.', 'The next 5★ is a 50/50.'],
  pityCost: ['≈ {n} primogemas gastas neste pity · {total} tiragens registradas', '≈ {n} primogems spent on this pity · {total} pulls logged'],
  pityGotFeatured: ['Veio o 5★ destaque', 'Got the featured 5★'],
  pityGotOther: ['Veio outro 5★', 'Got another 5★'],
  pityGot5: ['Veio um 5★', 'Got a 5★'],
  pityUndo: ['Desfazer', 'Undo'],
  pityReset: ['Zerar', 'Reset'],
  pityResetAsk: ['Zerar o contador deste banner?', 'Reset this banner counter?'],
  pityHistory: ['Últimos 5★', 'Latest 5★'],
  pityAt: ['na tiragem {n}', 'at pull {n}'],
  pityFeatured: ['destaque', 'featured'],
  pityNotFeatured: ['perdeu o 50/50', 'lost the 50/50'],
  pityNote: ['Você anota as tiragens à mão; nada é enviado a lugar nenhum. Pity suave: Personagem e Padrão 74, Arma 63 (valores aproximados). Garantido: 90 (Personagem e Padrão) e 80 (Arma). A regra 50/50 não considera o Brilho Capturado.', 'You log pulls by hand; nothing is sent anywhere. Soft pity: Character and Standard 74, Weapon 63 (approximate). Guaranteed: 90 (Character and Standard) and 80 (Weapon). The 50/50 rule does not account for Capturing Radiance.'],
  materials: ['Materiais', 'Materials'],
  materialsSub: ['Quanto falta para subir de nível', 'What you need to level up'],
  capCompare: ['COMPARAR', 'COMPARE'],
  capTeams: ['EQUIPES', 'TEAMS'],
  capMaterials: ['MATERIAIS', 'MATERIALS'],
  pickChar: ['Escolher personagem', 'Pick a character'],
  pickWeapon: ['Escolher arma', 'Pick a weapon'],
  pickEmpty: ['Escolha para comparar', 'Pick to compare'],
  chooseTitle: ['Escolha', 'Choose'],
  remove: ['Remover', 'Remove'],
  swap: ['Trocar', 'Change'],
  rowElement: ['Elemento', 'Element'],
  rowWeaponType: ['Tipo de arma', 'Weapon type'],
  rowNation: ['Nação', 'Nation'],
  rowRarity: ['Raridade', 'Rarity'],
  rowVersion: ['Versão', 'Version'],
  rowBestWeapon: ['Melhor arma', 'Best weapon'],
  rowType: ['Tipo', 'Type'],
  rowBaseAtk: ['ATQ base', 'Base ATK'],
  rowSubStat: ['Atributo secundário', 'Secondary stat'],
  rowEffect: ['Efeito', 'Effect'],
  rowNormal: ['Ataque normal', 'Normal attack'],
  rowSkill: ['Habilidade elemental', 'Elemental skill'],
  rowBurst: ['Supremo elemental', 'Elemental burst'],
  teamSlot: ['Vaga {n}', 'Slot {n}'],
  teamName: ['Nome da equipe', 'Team name'],
  teamSave: ['Salvar equipe', 'Save team'],
  teamClear: ['Limpar', 'Clear'],
  teamSaved: ['Equipes salvas', 'Saved teams'],
  teamNone: ['Nenhuma equipe salva ainda.', 'No saved teams yet.'],
  teamLoad: ['Abrir', 'Open'],
  teamDelete: ['Excluir', 'Delete'],
  teamSynergy: ['Sinergia', 'Synergy'],
  teamEmpty: ['Escolha personagens para ver a sinergia.', 'Pick characters to see the synergy.'],
  teamDefault: ['Minha equipe', 'My team'],
  resonanceNone: ['Sem ressonância elemental (precisa de 2 do mesmo elemento ou 4 elementos diferentes).', 'No elemental resonance (needs 2 of the same element or 4 different elements).'],
  shareLink: ['Copiar link', 'Copy link'],
  linkCopied: ['Link copiado!', 'Link copied!'],
  matChar: ['Personagem', 'Character'],
  matAscension: ['Ascensão', 'Ascension'],
  matTalent: ['Talento', 'Talent'],
  matFrom: ['Atual', 'Current'],
  matTo: ['Meta', 'Goal'],
  matTotal: ['Materiais necessários', 'Materials needed'],
  matNone: ['Nada a juntar: as metas já foram atingidas.', 'Nothing to farm: the goals are already met.'],
  matLoadFail: ['Não foi possível carregar os custos deste personagem.', 'Could not load the costs for this character.'],
  matPick: ['Escolha um personagem para calcular.', 'Pick a character to calculate.'],
  matNote: ['Não inclui a experiência de nível do personagem (livros de experiência).', 'Does not include character level EXP (EXP books).'],
  phase: ['Fase {n}', 'Phase {n}'],
  level: ['Nível {n}', 'Level {n}'],
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
  pickCount: ['{n} resultados', '{n} results'],
  clearFilters: ['Limpar filtros', 'Clear filters'],
  filterElement: ['Elemento', 'Element'],
  filterWeapon: ['Tipo de arma', 'Weapon type'],
  filterRarity: ['Raridade', 'Rarity'],
  filterStat: ['Atributo secundário', 'Secondary stat'],
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
