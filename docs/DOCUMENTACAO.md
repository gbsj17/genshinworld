# Documentação do Genshin World

## 1. Visão geral

O **Genshin World** é um aplicativo web (PWA) de consulta para Genshin Impact: personagens, armas, artefatos, builds recomendadas, equipes e os banners de oração atuais. Tem visual de aplicativo no celular e um layout próprio para PC, e funciona em português (PT-BR) e inglês (EN-US).

- **Endereço:** https://gbsj17.github.io/genshinworld/
- **Criado por** Genival Souza Júnior, parte da RUNEbyte, 2026.
- **Tecnologias:** React 19, TypeScript, Vite 8, react-router-dom (HashRouter), GitHub Pages e GitHub Actions.
- **Sem servidor próprio:** é um site estático. Os dados vêm de APIs públicas e de um arquivo gerado no deploy (`public/banners.json`). O que a pessoa salva (favoritos, tema, idioma) fica só no aparelho dela.
- Hospedado em `base: '/genshinworld/'` e instalável como app.

## 2. Guia de uso, tela por tela

Resumo do que cada parte do site faz e como usar.

- **Abertura:** na primeira vez em cada sessão, os 7 elementos giram, se fecham no centro e formam o logo. Toque ou clique para pular. Não aparece para quem usa "reduzir movimento" no sistema.
- **Início:** no celular e no PC, um banner animado mostra os personagens mais novos (troca sozinho a cada 6 segundos; setas e pontos mudam na mão) com os botões "Ver ficha" e "Ver build". Abaixo ficam as novas armas, os novos artefatos, os banners de oração atuais e os novos materiais. O campo de busca da página procura personagens, armas e artefatos de uma vez (até 12 resultados de cada).
- **Banners de oração:** carrosséis de banner de personagem e de arma (trocam a cada 7 segundos). Clique num banner para ver os itens em destaque (5★ e 4★ com chance aumentada) e a data de término. Só aparecem banners que ainda não terminaram.
- **Personagens:** lista com todos os personagens. Filtre por elemento, busque pelo nome (em português ou inglês), alterne entre grade e lista e marque favoritos com a estrela. Na lista, cada linha mostra os ícones das 3 habilidades ativas (em telas com mais de 560px) e há um índice alfabético com efeito de lupa na lateral.
- **Ficha do personagem:** quatro abas. *Visão geral* (elemento, arma, nação, raridade, melhor arma, equipe sugerida e prévia dos talentos), *Talentos* (ataque normal, habilidade, supremo e passivos com descrição), *Constelações* (C1 a C6) e *Builds* (armas em ordem de preferência, conjuntos de artefatos, atributos principais por slot, substats, equipes e as fontes do guia). Clicar numa arma ou artefato abre os detalhes; clicar num integrante de equipe abre a ficha dele. No PC o banner fica fixo e o conteúdo desliza por cima.
- **Armas e Artefatos:** lista completa com filtro por tipo e por raridade, busca e detalhes em janela (no PC) ou gaveta (no celular). Favoritos funcionam igual aos personagens.
- **Favoritos:** reúne personagens, armas e artefatos marcados com a estrela, em abas. Ficam salvos no aparelho.
- **Documentação:** esta página, no idioma escolhido, com índice e busca.
- **Comparar:** escolha dois personagens ou duas armas e veja lado a lado raridade, atributos e dados base; o melhor valor fica destacado. O botão de compartilhar copia o link da comparação.
- **Equipes:** monte uma equipe de até 4 personagens, veja a ressonância elemental ativa, salve com nome, carregue, apague ou copie o link.
- **Materiais:** escolha um personagem, a fase de ascensão e os níveis dos 3 talentos para ver o total de materiais e Mora necessários (EXP não incluída).
- **Link da ficha:** o botão de compartilhar na ficha copia o link (na aba Builds, abre direto nela).
- **Filtros nos seletores:** ao escolher um personagem ou arma (Comparar, Equipes, Materiais), use os chips abaixo da busca: personagens por elemento, tipo de arma e raridade; armas por tipo, raridade e atributo secundário. Toque de novo no chip para desligar, ou em "Limpar filtros".

## 3. Menu, tema, idioma, instalação e teclado

- **Menu (botão com três linhas):** Início, Favoritos, Comparar, Equipes, Materiais, Documentação, troca de tema e troca de idioma.
- **Celular:** barra de abas flutuante embaixo (Início, Personagens, Armas, Artefatos e Pesquisa). O botão de pesquisa abre uma barra de busca que busca dentro da seção atual. **PC:** menu superior fixo, com campo de busca da seção.
- **Tema:** escuro ou areia claro. A escolha é lembrada; sem escolha, o site abre no escuro. A cor da barra do navegador no celular acompanha o tema.
- **Idioma:** PT-BR ou EN-US. Trocar recarrega a página para que todos os dados venham no idioma certo. Sem escolha, usa o idioma do navegador.
- **Instalar como app:** use "instalar" ou "adicionar à tela inicial" do navegador. Depois de aberto uma vez, o app guarda arquivos, imagens e dados e abre rápido, inclusive com internet fraca.
- **Teclado:** Esc fecha menu, janelas de detalhes e a barra de pesquisa do celular. Tab percorre os elementos com contorno de foco visível. Enter abre itens e confirma a busca.

## 4. Rotas

O site usa `HashRouter`, então os endereços têm `#` (necessário no GitHub Pages).

- `/#/` Início.
- `/#/characters` lista de personagens.
- `/#/character/:id` ficha (ex.: `/#/character/albedo`). Com `?tab=builds` abre direto na aba Builds.
- `/#/weapons` e `/#/artifacts` listas.
- `/#/favorites` favoritos.
- `/#/docs` documentação.
- `/#/compare` comparar personagens ou armas (`?a=` e `?b=` personagens, `?k=` armas; o link é compartilhável).
- `/#/teams` montador de equipes (`?m=` ids, `?n=` nome).
- `/#/materials` calculadora de materiais (`?c=` personagem).
- Qualquer outro endereço volta para o Início.

## 5. Estrutura do projeto

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
  preload.ts         baixa imagens em segundo plano
  visionColors.ts    cor de cada elemento
  types.ts           tipos dos dados
  __tests__/         testes (Vitest)
  data/              builds (builds.generated.ts, builds.ts, builds.en.json, buildText.ts) e docs.json
  *.css              estilos por área; motion.css (animações), sheetpc.css (ficha no PC)
scripts/fetch-banners.mjs   gera public/banners.json
scripts/build-docs.mjs      gera docs/*.md a partir de src/data/docs.json
public/                     manifest, service worker (sw.js), ícones, banners.json
.github/workflows/deploy.yml
```

## 6. Arquitetura

- **Rotas e carregamento:** `App.tsx` define as rotas. Início fica no pacote principal; personagens, ficha, armas/artefatos, favoritos e documentação carregam sob demanda (`lazy` + `Suspense`).
- **Menu:** `MenuProvider` guarda se o menu está aberto e o tema; `Drawer` é o menu lateral e `MenuButton` o botão que o abre.
- **Dados:** `api.ts` é a única porta de entrada para as APIs. Cada função guarda o resultado em memória (Promise em cache), então telas diferentes reaproveitam a mesma busca. Se a busca falha, o cache é limpo e dá para tentar de novo.
- **Favoritos:** `favorites.ts` mantém um estado compartilhado por tipo (`useSyncExternalStore`), assim todas as estrelas atualizam juntas.
- **Páginas na PC e no celular:** o mesmo componente serve os dois; o CSS decide o layout (`@media`). `PcNav` só aparece no PC e `TabBar` só no celular.
- **Imagens:** o componente `Thumb` aceita uma lista de endereços e tenta o próximo se um falhar; se todos falharem, mostra a inicial do nome. `preload.ts` baixa os ícones da lista em segundo plano (e não faz nada com "Economia de dados" ligada).

## 7. Dados e APIs

- **genshin-db** (`genshin-db-api.vercel.app/api/v5`): personagens, armas, artefatos, materiais, talentos, constelações, descrições e versão de lançamento. Aceita português (`resultLanguage=Portuguese`) e busca pelo nome em inglês (`queryLanguages=English`).
- **genshin.dev** (`genshin.jmp.blue`): ícones de personagem e de elemento e plano B de talentos (só inglês).
- **Enka.Network CDN:** imagens de arte (splash) e ícones de habilidades e constelações.
- **API de anúncios da HoYoverse:** banners de oração, lida pelo script `fetch-banners.mjs` no deploy (o navegador não chama essa API).
- **Plano B:** se a genshin-db falhar, a lista de personagens vem da genshin.dev (mais antiga). Talentos e constelações usam a genshin.dev como reserva para quem existe lá. Ícones têm várias alternativas em ordem.
- **Novos itens:** ordenados por versão de lançamento e id numérico (`newestFirst`). Itens sem versão contam como os mais novos.
- **Habilidades na lista de personagens:** uma única busca de talentos, feita só quando a lista é aberta; o nome em inglês do personagem liga cada um aos seus ícones.

## 8. Modelos de dados

- `CharacterSummary` (`types.ts`): `id` (nome em minúsculas com hífens), `name` (idioma da tela), `enName` (inglês, chave de buscas e builds), `vision` (elemento), `weapon`, `nation`, `rarity`, `devId` (id na genshin.dev), `icons`, `portrait`, `splash`, `version`, `description`, `dbId`.
- `ItemEntry` e `ItemInfo` (`api.ts`): `name` (chave em inglês), `label` (nome na tela), `info` com raridade, tipo, ícones, versão e textos (efeito, bônus de 2 e 4 peças, ATQ base e atributo secundário).
- `Details` (`api.ts`): talentos de combate, talentos passivos e constelações, cada um com nome, descrição e ícones.
- `Build` (`data/builds.ts`): `patch`, `sources`, `weapons`, `artifacts`, `mainStats`, `substats` e `teams` (com integrantes e nota).
- Banner (`public/banners.json`): `updated` e `banners` com título, tipo (personagem ou arma), imagem, data de término e os destaques 5★ e 4★.

## 9. Idiomas (PT-BR / EN-US)

- O idioma fica em `localStorage` (`genshinworld:lang`); sem escolha, usa o idioma do navegador. O `index.html` aplica `lang` e a descrição da página antes de carregar o app.
- Trocar o idioma salva a escolha e **recarrega a página**, assim todos os dados vêm de novo no idioma certo.
- **Textos da interface:** dicionário em `src/i18n.ts`, usado com `t('chave')`. Cada chave tem o texto em português e em inglês, e aceita variáveis como `{n}`.
- **Dados da API:** a lista em inglês dá os ids e as chaves (nome em inglês é a chave de favoritos, builds e buscas); em português, uma segunda lista fornece nomes e textos, casada pelo id numérico.
- **Builds:** os textos originais estão em português; em inglês, cada frase é trocada pela tradução em `src/data/builds.en.json`, que só é baixada no modo inglês. Frase sem tradução aparece em português (um teste avisa se faltar).
- **Banners:** título e imagem em português quando existirem no anúncio.
- **Documentação:** `src/data/docs.json`, com um texto para cada idioma.
- Para incluir um novo texto de tela, crie a chave em `i18n.ts` com os dois idiomas e use `t('chave')`.

## 10. Builds

- `src/data/builds.generated.ts` tem 121 builds, geradas a partir de guias públicos (Icy Veins, Genshin-Builds e Genshin.gg). `builds.ts` junta essas builds e tem ajustes manuais (ex.: Diluc), que têm prioridade.
- Cada build tem armas em ordem de preferência, conjuntos de artefatos (com notas), atributos principais de Areia, Cálice e Tiara, substats, equipes (com integrantes) e as fontes.
- Os nomes dos itens ficam em inglês no arquivo e viram nomes e ícones no idioma escolhido em tempo de execução.
- As builds refletem os guias na data da geração (campo `patch`) e podem ficar desatualizadas.
- **Para adicionar ou editar uma build:** inclua o personagem em `builds.ts` (o `id` é o mesmo da lista de personagens) e, se houver frases novas, a tradução em `builds.en.json`. Rode `npm test`.

## 11. Banners de oração

- `scripts/fetch-banners.mjs` consulta os anúncios oficiais da HoYoverse, identifica os banners de personagem e de arma e extrai os destaques (5★/4★), casando nomes da genshin-db com o texto do anúncio.
- Escreve `public/banners.json`, com título e imagem em português quando disponíveis.
- Roda em todo deploy e todo dia às 12:00 UTC. Se falhar, o deploy continua com o arquivo anterior.
- O site mostra só banners cujo fim ainda não passou.
- A extração dos destaques é heurística e pode errar se o formato do anúncio mudar.
- Para rodar à mão: `node scripts/fetch-banners.mjs` (precisa de internet).

## 12. O que fica salvo no aparelho

- `genshinworld:lang`: idioma (`pt` ou `en`).
- `genshinworld:theme`: tema (`dark` ou `light`).
- `genshinworld:view`: grade ou lista na tela de personagens.
- `genshinworld:favorites`, `genshinworld:fav-weapons`, `genshinworld:fav-artifacts`: favoritos de personagens, armas e artefatos (listas de nomes/ids).
- `genshinworld:teams`: equipes salvas pelo usuário na tela Equipes.
- `genshinworld:splash` (sessão): marca que a abertura já apareceu.
- **Cache do service worker:** arquivos do app, imagens, dados das APIs e fontes.
- Nada disso é enviado a lugar nenhum. Se o navegador bloquear o armazenamento, o site funciona do mesmo jeito, só sem lembrar as escolhas.

## 13. Layouts e estilo

- **Celular (< 820px):** visual de app, barra de abas flutuante embaixo, título fixo no topo. O início tem um banner animado de personagens novos.
- **PC (≥ 820px):** menu superior fixo, banner de tela cheia no início, páginas mais largas. Na ficha, o banner fica fixo no topo e o conteúdo desliza por cima dele; talentos e constelações usam colunas que se ajustam à altura dos blocos. A lista de personagens fica centralizada, com linhas maiores.
- As regras do PC ficam dentro de `@media (min-width: 820px)` e as do celular em `@media (max-width: 819px)`; mexer em um não deve afetar o outro.
- **Ordem do CSS:** `responsive.css`, `motion.css` e `sheetpc.css` são importados por último em `App.tsx` para vencerem regras anteriores.
- **Arquivos de estilo:** `index.css` (variáveis dos temas e base), `App.css`, `home.css`, `items.css`, `news.css`, `pcnav.css`, `drawer.css`, `footer.css`, `splash.css`, `docs.css`, `responsive.css`, `motion.css` e `sheetpc.css`.
- **Temas:** as cores são variáveis (`--bg`, `--panel`, `--text`, `--gold`, `--accent`...). O tema claro redefine essas variáveis em `[data-theme='light']`. Os ícones brancos da API ficam pretos no tema claro.
- **Cores dos elementos** (`visionColors.ts`): Pyro, Hydro, Anemo, Cryo, Electro, Dendro e Geo. A ficha usa a cor do elemento como destaque.
- **Fontes:** Cormorant Garamond (títulos, via Google Fonts) e a fonte do jogo HYWenHei, recortada só com as letras do nome do app.

## 14. Animações e transições

- **Abertura** (`Splash.tsx`): 7 elementos giram e formam o logo, cerca de 3,4 segundos, uma vez por sessão.
- **Páginas:** a tela entra com um fade de opacidade (sem `transform`, para não quebrar elementos fixos como a barra inferior).
- **Início:** o banner anima a troca de personagem; no PC os textos entram em sequência.
- **Busca no celular:** a barra de abas se transforma na barra de busca com animação.
- **Busca no PC:** ao focar, uma luz dourada corre por dentro da barra e a lupa se inclina.
- **Menu:** os itens entram um depois do outro.
- **Índice alfabético:** efeito lupa nas letras e pulinho na letra da seção ao chegar.
- **Tema:** troca suave de cores.
- Todas respeitam "reduzir movimento" do sistema.

## 15. Acessibilidade

- Botões e links com `aria-label`; foco visível, preso dentro do menu lateral enquanto ele está aberto; Esc fecha menu e janelas.
- Contagens de resultado anunciadas por leitores de tela (`aria-live`).
- Animações desligadas para quem usa "reduzir movimento".
- O idioma da página (`lang`) acompanha o idioma escolhido.
- Contraste revisado nos dois temas, com ícones ajustados no tema claro.

## 16. PWA e cache

- `public/sw.js` guarda no aparelho os arquivos do app, imagens, dados das APIs e fontes.
- **Abrir o app:** tenta a internet (versão mais nova) e, sem rede, usa a página guardada.
- **Arquivos de `/assets/`:** o nome tem o conteúdo, então ficam guardados para sempre (cache primeiro).
- **Imagens:** baixa uma vez e guarda (até 300).
- **Dados das APIs e fontes:** mostra o que está guardado na hora e atualiza por baixo.
- **Forçar download total:** mude `VERSION` em `public/sw.js`.
- O cache só é ligado na versão publicada, não em `npm run dev`.
- `manifest.webmanifest` define nome, cores e ícones para instalar; os ícones estão em `public/icons`.

## 17. Desenvolvimento

- **Requisitos:** Node 22 e npm.
- `npm ci` instala as dependências.
- `npm run dev` abre o ambiente de desenvolvimento.
- `npm run build` confere os tipos e gera a pasta `dist`; `npm run preview` testa o build.
- `npm run lint` roda o oxlint.
- `npm test` roda os testes.
- `npm run docs` gera `docs/DOCUMENTACAO.md` e `docs/DOCUMENTATION.md` a partir de `src/data/docs.json`.
- **Nova tela:** crie o componente, registre a rota em `App.tsx` (com `lazy` se for grande) e coloque os textos em `i18n.ts`.
- **Cuidado com o CSS:** use a regra da faixa certa (`@media`) e confira o celular e o PC.

## 18. Testes e lint

- `npm test` (Vitest + jsdom) roda em `src/__tests__`: comparação e ordenação de versões, textos e troca de variáveis, nomes de arma por idioma, builds (toda build tem armas, artefatos e fontes; toda nota em português tem tradução) e favoritos.
- O deploy só segue se os testes passarem.
- `npm run lint` usa o oxlint; o projeto está sem avisos.

## 19. Deploy

- Push na `main` dispara o GitHub Actions (`.github/workflows/deploy.yml`): `npm ci`, testes, atualização dos banners, `npm run build` e publicação no Pages.
- Também roda manualmente e todo dia às 12:00 UTC (para atualizar os banners).
- Depois do push, o site novo aparece em alguns minutos. Se algo parecer antigo, recarregue com Ctrl+F5; no celular, feche e abra o app.

## 20. Desempenho

- Divisão em pedaços sob demanda: o pacote principal fica em ~220 KB; a ficha ~240 KB.
- A tradução das builds em inglês só é baixada no modo inglês.
- Listas grandes são buscadas uma vez e guardadas em memória; ícones são pré-carregados em segundo plano.
- Erros de carregamento mostram o botão "Tentar de novo".

## 21. Perguntas frequentes e problemas comuns

- **Vejo a versão antiga do site:** espere o deploy terminar e recarregue com Ctrl+F5 (no celular, feche e abra o app).
- **Não aparecem banners de oração:** o arquivo `banners.json` pode estar vazio ou todos os banners terminaram; ele é atualizado todo dia às 12:00 UTC.
- **Alguma imagem ou ícone não aparece:** a imagem pode ter vindo quebrada de uma das fontes. Mude `VERSION` em `sw.js` para limpar o cache de todos.
- **Uma build aparece em português no modo inglês:** falta a tradução da frase em `builds.en.json`.
- **Perdi meus favoritos:** eles ficam só neste navegador e aparelho; limpar os dados do site apaga a lista.
- **A lista de personagens não carrega:** a API pode estar fora do ar. O site tenta a genshin.dev como plano B; use "Tentar de novo".

## 22. Direitos e limitações

- Projeto de fã, sem fins comerciais e sem vínculo com a HoYoverse. Genshin Impact, personagens, imagens e nomes pertencem à HoYoverse.
- A fonte do título (HYWenHei, subconjunto em `src/fonts/brand.woff2`) vem do jogo e é propriedade da HoYoverse: para uso comercial, troque por uma fonte livre.
- As builds refletem guias de terceiros na data da geração.
- Os dados dependem de APIs públicas de terceiros, que podem mudar ou sair do ar.
- Ainda não há licença de código definida.

## 23. Créditos

- Dados: genshin-db e genshin.dev.
- Imagens: Enka.Network CDN e HoYoverse.
- Builds: Icy Veins, Genshin-Builds e Genshin.gg (guias públicos).
- Criado por Genival Souza Júnior, parte da RUNEbyte, 2026.

## 24. Ideias futuras

Login com Google e favoritos na nuvem, códigos de resgate e calendário de eventos, informações de áreas e mapas das novas versões, rotas indexáveis para buscadores e empacotar como app Android.
