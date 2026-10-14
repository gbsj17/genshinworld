# Genshin World

**PT-BR** · [English](#english)

App/site (PWA) com personagens, armas, artefatos, builds e equipes de Genshin Impact, com banners de oração atuais.
Visual de aplicativo no celular e layout próprio para PC. Funciona em **português (PT-BR)** e **inglês (EN-US)**, com chave de idioma no menu.

🔗 Site: https://gbsj17.github.io/genshinworld/

Criado por **Genival Souza Júnior** · parte da **RUNEbyte** · 2026

## Recursos

- **Início:** abertura animada, novos personagens (banner animado), novas armas e artefatos, banners de oração atuais com lista do que há em cada um, e busca geral (personagens, armas e artefatos).
- **Personagens:** filtro por elemento, busca, grade/lista (com ícones das habilidades e índice alfabético), favoritos. Ficha com visão geral, talentos, constelações e builds (armas, artefatos, atributos, equipes).
- **Armas e Artefatos:** lista completa, filtros, busca e detalhes.
- **Comparar** personagens e armas, **Equipes** com ressonância elemental, **Materiais** (calculadora de ascensão e talentos) e **link compartilhável** da ficha/builds.
- **Favoritos** de personagens, armas e artefatos (salvos no aparelho).
- **Documentação** do site dentro do menu, em português ou inglês.
- **Tema** escuro e areia claro; **idioma** PT-BR/EN-US; instalável como app (PWA) e com cache offline.

## Tecnologias

React 19 · TypeScript · Vite 8 · react-router-dom (HashRouter) · GitHub Pages / Actions.

## Como rodar

```bash
npm ci
npm run dev       # desenvolvimento
npm run build     # build de produção (pasta dist)
npm run preview   # testa o build
npm run lint
npm test          # testes (versões, idiomas, builds, favoritos)
npm run docs      # regenera docs/*.md a partir de src/data/docs.json
```

Opcional: `node scripts/fetch-banners.mjs` atualiza `public/banners.json` (precisa de internet).

## Documentação

Guia de uso, arquitetura, dados, idiomas, banners, PWA, desenvolvimento, solução de problemas e deploy em [`docs/DOCUMENTACAO.md`](docs/DOCUMENTACAO.md) (português) e [`docs/DOCUMENTATION.md`](docs/DOCUMENTATION.md) (inglês). O mesmo texto está no site, no menu → Documentação. Para editar, altere `src/data/docs.json` e rode `npm run docs`.

## Créditos e aviso

Projeto de fã, sem fins comerciais e sem vínculo com a HoYoverse. Genshin Impact e seus personagens, imagens e nomes pertencem à HoYoverse.
Dados de [genshin-db](https://github.com/theBowja/genshin-db) e [genshin.dev](https://genshin.dev); builds baseadas em guias públicos (Icy Veins, Genshin-Builds, Genshin.gg).
A fonte do título "Genshin World" é a fonte do jogo (HoYoverse), usada só nas letras do nome; veja a nota de direitos na documentação.

---

## English

Genshin Impact PWA with characters, weapons, artifacts, builds, teams and the current wish banners, with an animated intro and a global search.
App-like look on mobile and a dedicated desktop layout. Available in **Portuguese (PT-BR)** and **English (EN-US)**, with a language switch in the menu.

Live: https://gbsj17.github.io/genshinworld/

Created by **Genival Souza Júnior** · part of **RUNEbyte** · 2026

**Stack:** React 19, TypeScript, Vite 8, react-router-dom (HashRouter), GitHub Pages/Actions.
**Run:** `npm ci && npm run dev` · build with `npm run build` · tests with `npm test`.
**Docs:** [`docs/DOCUMENTATION.md`](docs/DOCUMENTATION.md) (English) and [`docs/DOCUMENTACAO.md`](docs/DOCUMENTACAO.md) (Portuguese); the same text is in the site menu → Documentation. Edit `src/data/docs.json` and run `npm run docs`.

Fan project, not affiliated with HoYoverse. Genshin Impact content belongs to HoYoverse.
