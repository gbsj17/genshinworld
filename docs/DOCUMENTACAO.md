# Documentação do Genshin World

## 1. Visão geral

PWA estático hospedado no GitHub Pages (`base: '/genshinworld/'`). Não tem servidor próprio: os dados vêm de APIs públicas e de um arquivo gerado no deploy.

## 2. Estrutura do projeto

```
src/
  App.tsx            rotas (HashRouter), abertura e rodapé
  Splash.tsx         abertura animada (elementos que viram o logo)
  NewsPage.tsx       Início (banner animado, novidades, banners de oração)
  HomePage.tsx       lista de personagens (filtros, grade/lista, favoritos)
  CharacterPage.tsx  ficha: visão geral, talentos, constelações, builds
  ItemsPage.tsx      armas e artefatos (lista, filtros)
  FavoritesPage.tsx  favoritos de personagens, armas e artefatos
  DocsPage.tsx       esta documentação, em português ou inglês
  ItemModal.tsx      detalhes de arma/artefato
  Banners.tsx        carrosséis de banners de oração e lista do banner
  PcNav.tsx          menu superior (só PC)      TabBar.tsx   barra inferior (só celular)
  Drawer.tsx         menu lateral (documentação, tema e idioma)
  Footer.tsx         rodapé
  api.ts             acesso às APIs, caches, ordenação por lançamento
  i18n.ts            idioma e dicionário PT/EN
  favorites.ts       favoritos (localStorage)      theme.ts   tema claro/escuro
  data/              builds (builds.generated.ts, builds.ts, builds.en.json, buildText.ts) e docs.json
  *.css              estilos por área; motion.css (animações), sheetpc.css (ficha no PC)
scripts/fetch-banners.mjs   gera public/banners.json
scripts/build-docs.mjs      gera docs/*.md a partir de src/data/docs.json
public/                     manifest, service worker (sw.js), ícones, banners.json
.github/workflows/deploy.yml
```

## 3. Layouts

- **Celular (< 820px):** visual de app, barra de abas flutuante embaixo, título fixo. O início tem um banner animado de personagens novos.
- **PC (≥ 820px):** menu superior fixo (`PcNav`), banner de tela cheia no início, páginas mais largas. Na ficha, o banner fica fixo no topo e o conteúdo desliza por cima dele. A lista de personagens fica centralizada, com linhas maiores e os ícones das habilidades.
- As regras do PC ficam dentro de `@media (min-width: 820px)`; mexer no PC não deve afetar o celular e vice-versa.
- Ordem de CSS importante: `responsive.css`, `motion.css` e `sheetpc.css` são importados por último em `App.tsx` para vencer regras anteriores.

## 4. Dados

- **genshin-db** (`genshin-db-api.vercel.app/api/v5`): personagens, armas, artefatos, talentos, constelações, descrições e versão de lançamento; aceita português.
- **genshin.dev** (`genshin.jmp.blue`): ícones de elemento/personagem e plano B de talentos (só inglês).
- **Enka.Network CDN:** imagens (splash, ícones de habilidades).
- **API de anúncios da HoYoverse:** banners de oração (via script no deploy).
- Os itens "novos" são ordenados por versão e id numérico (`newestFirst` em `api.ts`).
- Listas grandes são buscadas uma vez e guardadas em memória. Os ícones das habilidades da lista de personagens vêm de uma única busca de talentos, feita só quando a lista é aberta.

## 5. Idiomas (PT-BR / EN-US)

- O idioma fica em `localStorage` (`genshinworld:lang`); sem escolha, usa o idioma do navegador.
- Trocar o idioma salva a escolha e **recarrega a página**, assim todos os dados vêm de novo no idioma certo.
- Textos da interface: dicionário em `src/i18n.ts` (`t('chave')`).
- Dados da API: a lista em inglês dá os ids e chaves (nome em inglês = chave de favoritos, builds e buscas); no português, uma segunda lista fornece os nomes e textos, casada pelo id numérico.
- Builds: os textos originais estão em português; em inglês, cada frase é trocada pela tradução em `src/data/builds.en.json`, que só é baixada no modo inglês. Frase sem tradução aparece em português.
- Para adicionar uma frase nova de build, inclua a tradução no JSON.
- Esta documentação fica em `src/data/docs.json`, com um texto para cada idioma.

## 6. Builds

`src/data/builds.generated.ts` foi gerado a partir de guias públicos; `builds.ts` tem ajustes manuais (ex.: Diluc). Cada build tem armas, artefatos (com notas), atributos principais, substats, equipes e fontes. Os nomes dos itens são em inglês e viram nomes e ícones no idioma escolhido em tempo de execução.

## 7. Banners de oração

`scripts/fetch-banners.mjs` consulta os anúncios oficiais, identifica os banners de personagem e de arma, e extrai os destaques (5★/4★) casando nomes da genshin-db com o texto do anúncio. Escreve `public/banners.json` (com título e imagem em português quando disponíveis). Roda no deploy e todo dia às 12:00 UTC; se falhar, o deploy continua com o arquivo anterior.

O site mostra só banners cujo fim ainda não passou.

## 8. Deploy

Push na `main` → GitHub Actions (`deploy.yml`): `npm ci` → testes → atualiza banners → `npm run build` → publica no Pages. Também roda manualmente e todo dia (banners).

## 9. PWA e cache

`public/sw.js` guarda arquivos, imagens, dados e fontes no aparelho. Para forçar todos a baixar tudo de novo, mude `VERSION` no arquivo.

## 10. Acessibilidade e animações

- Botões e links com `aria-label`, foco visível e gerenciado em menus e modais, contagens de resultado anunciadas por leitores de tela.
- Animações desligadas para quem usa "reduzir movimento" no sistema, inclusive a abertura (`Splash.tsx`).
- A abertura aparece uma vez por sessão (`sessionStorage`) e pode ser pulada com um toque ou clique.

## 11. Direitos e limitações

- Projeto de fã; conteúdo de Genshin Impact pertence à HoYoverse.
- A fonte do título (HYWenHei, subconjunto em `src/fonts/brand.woff2`) vem do jogo e é propriedade da HoYoverse: para uso comercial, troque por uma fonte livre.
- As builds refletem guias de terceiros na data da geração; podem ficar desatualizadas.
- A extração dos destaques dos banners é heurística e pode errar quando o texto do anúncio mudar.

## 12. Testes e desempenho

- `npm test` (Vitest + jsdom) roda em `src/__tests__`: ordenação por versão, textos/idiomas, builds e favoritos. O deploy só segue se os testes passarem. `npm run lint` usa o oxlint.
- As páginas de personagens, ficha, armas/artefatos, favoritos e documentação carregam sob demanda (code splitting); o pacote principal fica em ~240 KB.
- Erros de carregamento mostram o botão "Tentar de novo".

## 13. Ideias futuras

Login com Google e favoritos na nuvem, comparar personagens, calculadora de materiais, equipes montadas pelo usuário, códigos de resgate e calendário de eventos, informações de áreas/mapas das novas versões, empacotar como app Android.
