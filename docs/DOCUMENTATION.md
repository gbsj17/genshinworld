# Genshin World Documentation

## 1. Overview

Static PWA hosted on GitHub Pages (`base: '/genshinworld/'`). There is no own server: data comes from public APIs and from a file generated at deploy time.

## 2. Project structure

```
src/
  App.tsx            routes (HashRouter), intro animation and footer
  Splash.tsx         animated intro (elements that become the logo)
  NewsPage.tsx       Home (animated banner, news, wish banners)
  HomePage.tsx       character list (filters, grid/list, favorites)
  CharacterPage.tsx  profile: overview, talents, constellations, builds
  ItemsPage.tsx      weapons and artifacts (list, filters)
  FavoritesPage.tsx  favorite characters, weapons and artifacts
  DocsPage.tsx       this documentation, in Portuguese or English
  ItemModal.tsx      weapon/artifact details
  Banners.tsx        wish banner carousels and banner contents
  PcNav.tsx          top menu (desktop only)    TabBar.tsx   bottom bar (mobile only)
  Drawer.tsx         side menu (documentation, theme and language)
  Footer.tsx         footer
  api.ts             API access, caches, sorting by release
  i18n.ts            language and PT/EN dictionary
  favorites.ts       favorites (localStorage)   theme.ts     light/dark theme
  data/              builds (builds.generated.ts, builds.ts, builds.en.json, buildText.ts) and docs.json
  *.css              styles per area; motion.css (animations), sheetpc.css (desktop profile)
scripts/fetch-banners.mjs   generates public/banners.json
scripts/build-docs.mjs      generates docs/*.md from src/data/docs.json
public/                     manifest, service worker (sw.js), icons, banners.json
.github/workflows/deploy.yml
```

## 3. Layouts

- **Mobile (< 820px):** app look, floating tab bar at the bottom, fixed title. Home has an animated banner of new characters.
- **Desktop (≥ 820px):** fixed top menu (`PcNav`), full-screen banner on Home, wider pages. On the profile page the banner stays fixed at the top and the content slides over it. The character list is centered, with bigger rows and the skill icons.
- Desktop rules live inside `@media (min-width: 820px)`; changing desktop should not affect mobile and vice versa.
- CSS order matters: `responsive.css`, `motion.css` and `sheetpc.css` are imported last in `App.tsx` so they win over earlier rules.

## 4. Data

- **genshin-db** (`genshin-db-api.vercel.app/api/v5`): characters, weapons, artifacts, talents, constellations, descriptions and release version; supports Portuguese.
- **genshin.dev** (`genshin.jmp.blue`): element/character icons and a fallback for talents (English only).
- **Enka.Network CDN:** images (splash art, skill icons).
- **HoYoverse announcement API:** wish banners (through a script at deploy time).
- "New" items are sorted by version and numeric id (`newestFirst` in `api.ts`).
- Large lists are fetched once and kept in memory. The skill icons in the character list come from a single talents request, made only when the list is opened.

## 5. Languages (PT-BR / EN-US)

- The language is kept in `localStorage` (`genshinworld:lang`); with no choice, it uses the browser language.
- Switching language saves the choice and **reloads the page**, so all data comes again in the right language.
- Interface texts: dictionary in `src/i18n.ts` (`t('key')`).
- API data: the English list gives the ids and keys (English name = key for favorites, builds and searches); in Portuguese, a second list provides names and texts, matched by numeric id.
- Builds: the original texts are in Portuguese; in English each sentence is replaced by its translation in `src/data/builds.en.json`, which is only downloaded in English mode. A sentence without translation shows in Portuguese.
- To add a new build sentence, add its translation to the JSON.
- This documentation lives in `src/data/docs.json`, with one text for each language.

## 6. Builds

`src/data/builds.generated.ts` was generated from public guides; `builds.ts` has manual adjustments (e.g. Diluc). Each build has weapons, artifacts (with notes), main stats, substats, teams and sources. Item names are in English and become names and icons in the chosen language at runtime.

## 7. Wish banners

`scripts/fetch-banners.mjs` reads the official announcements, identifies character and weapon banners, and extracts the featured items (5★/4★) by matching genshin-db names with the announcement text. It writes `public/banners.json` (with Portuguese title and image when available). It runs at deploy and every day at 12:00 UTC; if it fails, the deploy continues with the previous file.

The site only shows banners that have not ended yet.

## 8. Deploy

Push to `main` → GitHub Actions (`deploy.yml`): `npm ci` → tests → update banners → `npm run build` → publish to Pages. It also runs manually and every day (banners).

## 9. PWA and cache

`public/sw.js` stores files, images, data and fonts on the device. To force everyone to download everything again, change `VERSION` in the file.

## 10. Accessibility and animations

- Buttons and links have `aria-label`, focus is visible and managed in menus and modals, and result counts are announced to screen readers.
- Animations are turned off for people who use "reduce motion" in their system, including the intro (`Splash.tsx`).
- The intro shows once per session (`sessionStorage`) and can be skipped with a tap or click.

## 11. Rights and limitations

- Fan project; Genshin Impact content belongs to HoYoverse.
- The title font (HYWenHei, subset in `src/fonts/brand.woff2`) comes from the game and belongs to HoYoverse: for commercial use, replace it with a free font.
- Builds reflect third-party guides at the time they were generated; they may become outdated.
- Banner highlight extraction is heuristic and may fail when the announcement text changes.

## 12. Tests and performance

- `npm test` (Vitest + jsdom) runs in `src/__tests__`: version sorting, texts/languages, builds and favorites. The deploy only continues if tests pass. `npm run lint` uses oxlint.
- Character, profile, weapons/artifacts, favorites and documentation pages load on demand (code splitting); the main bundle is about 240 KB.
- Loading errors show a "Try again" button.

## 13. Future ideas

Google login and cloud favorites, character comparison, material calculator, user-made teams, redeem codes and event calendar, area/map info for new versions, packaging as an Android app.
