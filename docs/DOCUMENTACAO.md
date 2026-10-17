# Documentação do Genshin World

## 1. Visão geral

O **Genshin World** é um aplicativo web (PWA) de consulta para Genshin Impact: personagens, armas, artefatos, builds recomendadas, equipes e os banners de oração atuais. Tem visual de aplicativo no celular e um layout próprio para PC, e funciona em português (PT-BR) e inglês (EN-US).

- **Endereço:** https://gbsj17.github.io/genshinworld/
- **Criado por** Genival Souza Júnior, parte da RUNEbyte, 2026.
- **Tecnologias:** React 19, TypeScript, Vite 8, react-router-dom (rotas por endereço, com páginas pré-geradas), Firebase (login e nuvem, opcional), GitHub Pages e GitHub Actions.
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
- **Link da ficha:** o botão de compartilhar na ficha copia o link (nas abas Builds e Minha build, abre direto nelas).
- **Filtros nos seletores:** ao escolher um personagem ou arma (Comparar, Equipes, Materiais), use os chips abaixo da busca: personagens por elemento, tipo de arma e raridade; armas por tipo, raridade e atributo secundário. Toque de novo no chip para desligar, ou em "Limpar filtros".
- **Farm de hoje:** escolha o dia da semana (abre em "Hoje") e veja quais domínios de livros de talento e de materiais de arma estão abertos, com o que cada um dá. Embaixo ficam os domínios de artefatos, abertos todos os dias. No domingo tudo está aberto.
- **Evoluindo agora (tela inicial):** nas páginas de personagem, arma e conjunto de artefatos há o botão "Marcar como evoluindo". O que você marcar aparece num card abaixo dos banners, com o domínio do livro de talento ou do material da arma e em quantos dias ele abre ("Hoje", "amanhã", "em 3 dias · qui."). Artefatos mostram o domínio, que abre todo dia. As metas entram no backup e na sincronização.
- **Lista de desejos:** adicione os personagens e armas que você quer (com os mesmos filtros dos outros seletores) e veja a soma dos materiais de ascensão completa e dos 3 talentos de cada personagem, até o nível de talento que você escolher, mais a ascensão completa de cada arma. A lista fica salva no aparelho. "Detalhes" abre a calculadora de Materiais daquele personagem.
- **Contador de pity:** escolha o banner (Personagem, Arma ou Padrão) e anote as tiragens com +1 e +10. Quando vier um 5★, toque no botão correspondente (destaque ou outro). A tela mostra quantas tiragens faltam para o pity suave e para o 5★ garantido, se o próximo é 50/50 ou garantido, os primos gastos e os últimos 5★. Há Desfazer e Zerar. Os números de pity suave são aproximados e o Brilho Capturado não é considerado.
- **Minha build:** na aba Minha build da ficha (ao lado de Builds), monte a sua: arma (só do tipo do personagem), até 2 conjuntos de artefatos, atributo principal de Areia, Cálice e Tiara, substatus na ordem de prioridade e uma anotação. Tudo é salvo no aparelho, por personagem. "Limpar" apaga a build daquele personagem. "Compartilhar" copia um link com a sua build; quem abrir vê um aviso com a build e escolhe "Usar esta build" ou "Ignorar" (nada é enviado a servidor, a build vai dentro do link).
- **Meus dados:** no menu. "Baixar meus dados" salva um arquivo .json com favoritos, equipes, lista de desejos, pity e builds. "Escolher arquivo" importa esse arquivo em outro aparelho, substituindo o que existe (o arquivo é conferido antes e nada é gravado se estiver errado). Tema e idioma não entram no backup.
- **Página do conjunto de artefatos:** tocar num conjunto abre a página dele, com o bônus de 2 e 4 peças, as 5 peças (flor, pena, areia, cálice e tiara) com ícone, descrição e história, e os personagens que usam o conjunto nas builds do site.
- **Calculadora de EXP:** no menu. Escolha personagem ou arma, o nível atual e o desejado (e a raridade, no caso da arma) para ver a EXP necessária e quantos livros ou minérios isso dá, com o menor número de itens e também se usar só um tipo. As tabelas vêm dos dados do jogo (`scripts/build-exp.mjs`). O custo em Mora não entra, porque não consta nessas tabelas.
- **Códigos de resgate:** no menu. Lista os códigos ativos (atualizada todo dia no deploy por `scripts/fetch-codes.mjs`, a partir de fontes da comunidade), com botão de copiar e atalho para o resgate no site oficial. Se nenhuma fonte responder, a lista anterior é mantida. Alguns códigos podem já ter expirado.
- **Estatísticas de acesso:** só aparecem se o `measurementId` estiver na configuração do Firebase. O site pergunta uma vez se pode contar as visitas; sem o "Pode" (ou com "não rastrear" no navegador) nada é enviado. Dá para mudar a escolha em Meus dados.
- **Sincronizar entre aparelhos:** em Meus dados (ou "Entrar com Google" no menu), entre com a conta do Google. Builds, favoritos, lista de desejos, equipes e pity ficam salvos na nuvem e aparecem em qualquer aparelho com a mesma conta. As mudanças são enviadas sozinhas (cerca de 2 segundos depois). Se o aparelho e a nuvem tiverem dados diferentes, o site pergunta qual versão manter. Ao voltar para a aba, se outro aparelho mudou algo, aparece "Atualizar". Sair da conta não apaga nada do aparelho. Só aparece depois que o Firebase estiver configurado (veja Deploy).
- **Aviso de dados reduzidos:** se a base principal (genshin-db) não responder e o site usar a lista reserva, aparece uma faixa avisando que a lista é mais antiga e reduzida. Dá para fechá-la.
- **Onde conseguir:** tocar num material (página da arma, calculadora de materiais e lista de desejos) abre uma janela com a origem dele segundo a base de dados, o domínio que dá o item com os dias em que abre, se pode ser fabricado e um botão para o mapa oficial do HoYoLAB (abre em outra aba). O mapa não fica dentro do site porque o servidor dele bloqueia leitura por outros sites (CORS).
- **Página da arma:** ao tocar numa arma na lista, abre a página dela. No celular: banner na cor da raridade com o ícone, atalhos de seção (Resumo, Efeito, Materiais, Personagens), ATQ base e atributo secundário, efeito com seletor de refinamento R1–R5, carrossel "Quem usa melhor" (personagens que têm a arma nas builds do site, do melhor lugar #1 para o pior, com medalhas para os 3 primeiros) e grade de materiais de ascensão (total e "Ver por fase"). No PC, o perfil da arma fica num painel lateral fixo. Dá para favoritar, colocar na lista de desejos e compartilhar o link. Nas builds da ficha, a janela da arma tem "Ver página completa".

## 3. Menu, tema, idioma, instalação e teclado

- **Menu (botão com três linhas):** Início; os grupos Planejar (Favoritos, Lista de desejos, Equipes, Comparar), Farm e materiais (Materiais, Farm de hoje, Calculadora de EXP) e Orações e códigos (Pity, Códigos de resgate), que abrem e fecham ao tocar; Meus dados, conta, Documentação, troca de tema e troca de idioma. Em tela baixa o menu rola.
- **Celular:** barra de abas flutuante embaixo (Início, Personagens, Armas, Artefatos e Pesquisa). O botão de pesquisa abre uma barra de busca que busca dentro da seção atual. **PC:** menu superior fixo, com campo de busca da seção.
- **Tema:** escuro ou areia claro. A escolha é lembrada; sem escolha, o site abre no escuro. A cor da barra do navegador no celular acompanha o tema.
- **Idioma:** PT-BR ou EN-US. Trocar recarrega a página para que todos os dados venham no idioma certo. Sem escolha, usa o idioma do navegador.
- **Instalar como app:** use "instalar" ou "adicionar à tela inicial" do navegador. Depois de aberto uma vez, o app guarda arquivos, imagens e dados e abre rápido, inclusive com internet fraca.
- **Botão "Instalar o app":** no fim do menu, aparece quando o navegador oferece a instalação (Chrome, Edge e Android) e o app ainda não está instalado. No iPhone, use "Adicionar à Tela de Início" do Safari.
- **Teclado:** Esc fecha menu, janelas de detalhes e a barra de pesquisa do celular. Tab percorre os elementos com contorno de foco visível. Enter abre itens e confirma a busca.

## 4. Rotas

O site usa endereços normais (`/farm`, `/weapon/Amos'%20Bow`). Cada página conhecida ganha um HTML próprio no deploy (com título e descrição) e há um `sitemap.xml`; endereços fora da lista caem no `404.html`, que abre o app do mesmo jeito. Links antigos com `#` (`/#/farm`) são redirecionados sozinhos.

- `/` Início.
- `/characters` lista de personagens.
- `/character/:id` ficha (ex.: `/character/albedo`). Com `?tab=builds` abre direto na aba Builds e com `?tab=mine`, na aba Minha build.
- `/weapons` e `/artifacts` listas.
- `/weapon/:nome` página da arma (ex.: `/weapon/Aquila%20Favonia`).
- `/artifact/:nome` página do conjunto de artefatos (ex.: `/artifact/Gladiator's%20Finale`).
- `/favorites` favoritos.
- `/docs` documentação.
- `/compare` comparar personagens ou armas (`?a=` e `?b=` personagens, `?k=` armas; o link é compartilhável).
- `/teams` montador de equipes (`?m=` ids, `?n=` nome).
- `/materials` calculadora de materiais (`?c=` personagem).
- `/exp` calculadora de EXP.
- `/codes` códigos de resgate.
- `/farm` farm de hoje (domínios por dia da semana).
- `/wishlist` lista de desejos.
- `/pity` contador de pity.
- `/data` meus dados (exportar, importar, sincronizar).

## 5. Estrutura do projeto

```
src/
  App.tsx            rotas por endereço, abertura e rodapé
  Splash.tsx         abertura animada (elementos que viram o logo)
  NewsPage.tsx       Início (banner animado, novidades, banners de oração)
  HomePage.tsx       lista de personagens (filtros, grade/lista, favoritos)
  CharacterPage.tsx  ficha: visão geral, talentos, constelações, builds, minha build
  ItemsPage.tsx      armas e artefatos (lista, filtros)
  WeaponPage.tsx     página da arma (/weapon/:nome)
  ArtifactPage.tsx   página do conjunto de artefatos (/artifact/:nome)
  ExpPage.tsx        calculadora de EXP (expCalc.ts, data/exp.json)
  Goals.tsx          card "Evoluindo agora" na tela inicial (goals.ts)
  CodesPage.tsx      códigos de resgate (codes.ts)
  analytics.ts       estatísticas de acesso (AnalyticsPrompt.tsx, AnalyticsCard.tsx)
  pageTitle.ts       título da aba por página
  FavoritesPage.tsx  favoritos de personagens, armas e artefatos
  DocsPage.tsx       esta documentação, em português ou inglês
  ComparePage.tsx    comparar dois personagens ou duas armas (/compare)
  TeamsPage.tsx      montador de equipes e ressonância (/teams)
  MaterialsPage.tsx  calculadora de materiais (/materials)
  FarmPage.tsx       domínios abertos por dia da semana (/farm)
  WishlistPage.tsx   lista de desejos com soma de materiais (/wishlist)
  PityPage.tsx       contador de pity (/pity)
  DataPage.tsx       exportar e importar os dados (/data)      backup.ts   regras do backup
  ApiNotice.tsx      aviso quando a base reserva é usada      apiStatus.ts
  MaterialSheet.tsx  janela "Onde conseguir" de um material (useMaterialSheet.tsx)
  sync.ts            sincronização (login Google + Firestore)      syncLogic.ts  regra de conflito
  SyncCard.tsx       cartão de conta em Meus dados      SyncPrompts.tsx  conflito e aviso de dados novos
  firebaseConfig.ts  configuração do Firebase (vazia = sincronização desligada)
  store.ts           gravação no aparelho que avisa a sincronização
  MyBuild.tsx        build própria, na aba Minha build da ficha
  Picker.tsx         janela de escolha com busca e filtros (pickFilters.ts)
  costs.ts           soma de custos por nível      share.ts   copiar/compartilhar link
  ItemModal.tsx      detalhes de arma/artefato
  Banners.tsx        carrosséis de banners de oração e lista do banner
  PcNav.tsx          menu superior (só PC)      TabBar.tsx   barra inferior (só celular)
  Drawer.tsx         menu lateral (documentação, tema e idioma)
  Footer.tsx         rodapé
  api.ts             acesso às APIs, caches, ordenação por lançamento
  i18n.ts            idioma e dicionário PT/EN
  favorites.ts       favoritos (localStorage)      theme.ts   tema claro/escuro
  install.ts         botão de instalar o app (evento do navegador)
  preload.ts         baixa imagens em segundo plano
  visionColors.ts    cor de cada elemento
  types.ts           tipos dos dados
  __tests__/         testes (Vitest)
  data/              builds (builds.generated.ts, builds.ts, builds.en.json, buildText.ts) e docs.json
  *.css              estilos por área; motion.css (animações), sheetpc.css (ficha no PC)
scripts/fetch-banners.mjs   gera public/banners.json
scripts/build-docs.mjs      gera docs/*.md a partir de src/data/docs.json
scripts/prerender.mjs       páginas por rota, sitemap.xml e 404.html (depois do build)
scripts/fetch-codes.mjs     gera public/codes.json (códigos de resgate)
scripts/build-exp.mjs       gera src/data/exp.json (tabelas de EXP)
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
- `Domain` (`api.ts`): `kind` (talento, arma ou artefato), nome, região, dias da semana e materiais. Build própria (`MyBuild.tsx`): arma, conjuntos, atributos principais, substatos e anotação, por personagem.

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
- `genshinworld:wishlist` e `genshinworld:wish-weapons`: personagens e armas da lista de desejos.
- `genshinworld:goal-chars`, `genshinworld:goal-weapons`, `genshinworld:goal-artifacts`: metas "Evoluindo" do card da tela inicial.
- `genshinworld:pity`: contador de pity de cada banner e histórico de 5★.
- `genshinworld:my-builds`: a build própria de cada personagem.
- `genshinworld:analytics`: sua escolha sobre a contagem de visitas (`yes` ou `no`).
- `genshinworld:splash` (sessão): marca que a abertura já apareceu.
- **Cache do service worker:** arquivos do app, imagens, dados das APIs e fontes.
- `genshinworld:sync`: conta conectada e controle da sincronização (última versão da nuvem conhecida e se há mudanças a enviar).
- **Com a sincronização ligada:** os mesmos dados do backup vão para o Firestore, no documento `users/{id da conta}`, que só a própria conta lê e grava (regras em `firestore.rules`). Sem login, nada sai do aparelho.

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
- **Ferramentas** (Farm, Desejos, Materiais, Pity): os cartões entram em sequência; o número do pity dá um pulinho a cada tiragem e a barra enche e muda de cor no pity suave.
- **Janela de escolha:** o fundo some com fade e o painel sobe suavemente.
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

- `npm test` (Vitest + jsdom) roda em `src/__tests__`: comparação e ordenação de versões, textos e troca de variáveis, nomes de arma por idioma, builds (toda build tem armas, artefatos e fontes; toda nota em português tem tradução), favoritos, ressonância elemental, soma de materiais e agrupamento dos domínios do Farm e backup (exportar, importar e recusar arquivos inválidos).
- O deploy só segue se os testes passarem.
- `npm run lint` usa o oxlint; o projeto está sem avisos.

## 19. Deploy

- Push na `main` dispara o GitHub Actions (`.github/workflows/deploy.yml`): `npm ci`, testes, atualização dos banners, `npm run build` e publicação no Pages.
- Também roda manualmente e todo dia às 12:00 UTC (para atualizar os banners).
- Depois do push, o site novo aparece em alguns minutos. Se algo parecer antigo, recarregue com Ctrl+F5; no celular, feche e abra o app.
- **Firebase (sincronização):** 1) crie um projeto em console.firebase.google.com; 2) Authentication → Método de login → ative Google; 3) Authentication → Configurações → Domínios autorizados → adicione `gbsj17.github.io`; 4) Firestore Database → Criar banco (modo produção) e, em Regras, cole o conteúdo de `firestore.rules`; 5) Configurações do projeto → Seus apps → app da Web → copie `apiKey`, `authDomain`, `projectId` e `appId` para `src/firebaseConfig.ts`. Enquanto esse arquivo estiver vazio, a sincronização fica escondida.
- O Firebase (cerca de 230 KB) só é baixado quando alguém entra na conta, então não pesa para quem não usa.
- **Páginas pré-geradas e sitemap:** depois do build, `scripts/prerender.mjs` cria um HTML por página (personagens, armas e conjuntos vêm da API), o `sitemap.xml` e o `404.html`. Para aparecer no Google, cadastre o site no Search Console e envie `https://gbsj17.github.io/genshinworld/sitemap.xml`. O `robots.txt` não é necessário em páginas de projeto do GitHub Pages.
- **Códigos:** `scripts/fetch-codes.mjs` roda no deploy (e todo dia) e grava `public/codes.json`. O log do Actions mostra quantos códigos cada fonte devolveu.
- **Estatísticas:** para ligar, copie também o `measurementId` (Firebase → Configurações do projeto → Seus apps) para `src/firebaseConfig.ts`.

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

Calendário de eventos e informações de áreas e mapas das novas versões.
