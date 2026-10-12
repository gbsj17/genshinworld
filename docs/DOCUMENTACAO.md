# Documentação do Genshin World

## 1. Visão geral

PWA estático hospedado no GitHub Pages (`base: '/genshinworld/'`). Não tem servidor próprio: os dados vêm de APIs públicas e de um arquivo gerado no deploy.

## 2. Estrutura do projeto

```
src/
  App.tsx            rotas (HashRouter) e rodapé
  NewsPage.tsx       Início (banner animado, novidades, banners de oração)
  HomePage.tsx       lista de personagens (filtros, grade/lista, favoritos)
  CharacterPage.tsx  ficha: visão geral, talentos, constelações, builds
  ItemsPage.tsx      armas e artefatos (lista, filtros)
  FavoritesPage.tsx  favoritos de personagens, armas e artefatos
  ItemModal.tsx      detalhes de arma/artefato
  Banners.tsx        carrosséis de banners de oração e lista do banner
  PcNav.tsx          menu superior (só PC)      TabBar.tsx   barra inferior (só celular)
  Drawer.tsx         menu lateral (tema e idioma)
  Footer.tsx         rodapé
  api.ts             acesso às APIs, caches, ordenação por lançamento
  i18n.ts            idioma e dicionário PT/EN
  favorites.ts       favoritos (localStorage)      theme.ts   tema claro/escuro
  data/              builds (builds.generated.ts, builds.ts, builds.en.json, buildText.ts)
  *.css              estilos por área; motion.css (animações), sheetpc.css (ficha no PC)
scripts/fetch-banners.mjs   gera public/banners.json
public/                     manifest, service worker (sw.js), ícones, banners.json
.github/workflows/deploy.yml
```

## 3. Layouts

- **Celular (< 820px):** visual de app, barra de abas flutuante embaixo, título fixo. O início tem um banner animado de personagens novos.
- **PC (≥ 820px):** menu superior fixo (`PcNav`), banner de tela cheia no início, páginas mais largas, ficha com banner largo no topo. As regras do PC ficam dentro de `@media (min-width: 820px)`; mexer no PC não deve afetar o celular e vice-versa.
- Ordem de CSS importante: `responsive.css`, `motion.css` e `sheetpc.css` são importados por último em `App.tsx` para vencer regras anteriores.

## 4. Dados

| Fonte | Uso |
|---|---|
| genshin-db (`genshin-db-api.vercel.app/api/v5`) | personagens, armas, artefatos, talentos, constelações, descrições, versão de lançamento; aceita português |
| genshin.dev (`genshin.jmp.blue`) | ícones de elemento/personagem e plano B de talentos (só inglês) |
| Enka.Network CDN | imagens (splash, ícones) |
| API de anúncios da HoYoverse | banners de oração (via script no deploy) |

- Os "novos" itens são ordenados por versão e id numérico (`newestFirst` em `api.ts`).
- Listas grandes são buscadas uma vez e guardadas em memória.

## 5. Idiomas (PT-BR / EN-US)

- O idioma fica em `localStorage` (`genshinworld:lang`); sem escolha, usa o idioma do navegador.
- Trocar o idioma salva a escolha e **recarrega a página**, assim todos os dados vêm de novo no idioma certo.
- Textos da interface: dicionário em `src/i18n.ts` (`t('chave')`).
- Dados da API: a lista em inglês dá os ids e chaves (nome em inglês = chave de favoritos, builds e buscas); no português, uma segunda lista fornece os nomes e textos, casada pelo id numérico. Itens usam `queryLanguages=English&resultLanguage=Portuguese`.
- Builds: os textos originais estão em português; em inglês, cada frase é trocada pela tradução em `src/data/builds.en.json` (`buildText.ts`). Frase sem tradução aparece em português.
- Para adicionar uma frase nova de build, inclua a tradução no JSON.

## 6. Builds

`src/data/builds.generated.ts` (121 personagens) foi gerado a partir de guias públicos; `builds.ts` tem ajustes manuais (ex.: Diluc). Cada build tem armas, artefatos (com notas), atributos principais, substats, equipes e fontes. Os nomes dos itens são em inglês e viram nomes/ícones no idioma escolhido em tempo de execução.

## 7. Banners de oração

`scripts/fetch-banners.mjs` consulta os anúncios oficiais, identifica os banners de personagem e de arma, e extrai os destaques (5★/4★) casando nomes da genshin-db com o texto do anúncio. Escreve `public/banners.json` (com título e imagem em português quando disponíveis). Roda no deploy e todo dia às 12:00 UTC; se falhar, o deploy continua com o arquivo anterior.
O site mostra só banners cujo fim ainda não passou.

## 8. Deploy

Push na `main` → GitHub Actions (`deploy.yml`): `npm ci` → atualiza banners → `npm run build` → publica no Pages. Também roda manualmente e todo dia (banners).

## 9. PWA e cache

`public/sw.js` guarda arquivos, imagens, dados e fontes no aparelho. Para forçar todos a baixar tudo de novo, mude `VERSION` no arquivo.

## 10. Acessibilidade e animações

Botões e links com `aria-label`, foco gerenciado em menus/modais, e animações desligadas para quem usa "reduzir movimento" no sistema.

## 11. Direitos e limitações

- Projeto de fã; conteúdo de Genshin Impact pertence à HoYoverse.
- A fonte do título (HYWenHei, subconjunto em `src/fonts/brand.woff2`) vem do jogo e é propriedade da HoYoverse: para uso comercial, troque por uma fonte livre.
- As builds refletem guias de terceiros na data da geração; podem ficar desatualizadas.
- A extração dos destaques dos banners é heurística e pode errar quando o texto do anúncio mudar.

## 12. Ideias futuras

Login com Google e favoritos na nuvem, informações de áreas/mapas das novas versões, empacotar como app Android.
