// Personagens cuja imagem principal (genshin.dev / genshin-db) vem com fundo
// branco. Para eles, a ficha pula essas imagens e usa a arte de splash do jogo.
// Para adicionar outro, coloque o id aqui (o mesmo da URL: #/character/<id>).
export const PREFER_SPLASH = new Set<string>(['charlotte', 'arlecchino'])
