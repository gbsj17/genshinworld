# Genshin World Documentation

## 1. Overview

**Genshin World** is a web app (PWA) for Genshin Impact: characters, weapons, artifacts, recommended builds, teams and the current wish banners. It has an app-like look on mobile, a dedicated desktop layout, and works in Portuguese (PT-BR) and English (EN-US).

- **Address:** https://gbsj17.github.io/genshinworld/
- **Created by** Genival Souza Júnior, part of RUNEbyte, 2026.
- **Stack:** React 19, TypeScript, Vite 8, react-router-dom (path-based routes, pre-generated pages), Firebase (sign-in and cloud, optional), GitHub Pages and GitHub Actions.
- **No own server:** it is a static site. Data comes from public APIs and from a file generated at deploy time (`public/banners.json`). What the user saves (favorites, theme, language) stays on their own device.
- Hosted at `base: '/genshinworld/'` and installable as an app.

## 2. User guide, screen by screen

A summary of what each part of the site does and how to use it.

- **Intro:** the first time in each session, the 7 elements spin, close in on the center and form the logo. Tap or click to skip. It does not show for people using "reduce motion" in their system.
- **Home:** on mobile and desktop, an animated banner shows the newest characters (it changes by itself every 6 seconds; arrows and dots change it by hand) with "View profile" and "View build" buttons. Below are new weapons, new artifacts, the current wish banners and new materials. The page search looks for characters, weapons and artifacts at once (up to 12 results of each).
- **Wish banners:** carousels of character and weapon banners (they change every 7 seconds). Click a banner to see the featured items (5★ and 4★ with boosted rate) and the end date. Only banners that have not ended are shown.
- **Characters:** list with all characters. Filter by element, search by name (in Portuguese or English), switch between grid and list and mark favorites with the star. Each card shows stars, element, weapon and nation; if you marked the character as owned, it also shows constellation (dots) and level, and characters you do not have show "Not owned". The up-arrow-with-plus icon means the character is in "Leveling up". In the list, each row has the same information and there is an alphabetical index with a magnifier effect on the side.
- **Character profile:** four tabs. *Overview* (element, weapon, nation, rarity, best weapon, suggested team and a talents preview), *Talents* (normal attack, skill, burst and passives with descriptions), *Constellations* (C1 to C6) and *Builds* (weapons in order of preference, artifact sets, main stats per slot, substats, teams and the guide sources). Clicking a weapon or artifact opens its details; clicking a team member opens their profile. On desktop the banner stays fixed and the content slides over it.
- **Weapons and Artifacts:** full list in the same style as characters: cards (or a list, with the button next to the count) glowing in the rarity color (5★ gold, 4★ purple, 3★ blue), filters by type and rarity, "✓ Owned" (weapons only) and "Leveling up", search and details on tap. Weapons you marked as yours show refinement and level. Favorites and goals work like characters. The list appears gradually (48 at a time) and loads more as you scroll.
- **Favorites:** gathers starred characters, weapons and artifacts, in tabs. They are saved on the device.
- **Documentation:** this page, in the chosen language, with an index and search.
- **Compare:** pick two characters or two weapons and see rarity, stats and base data side by side; the better value is highlighted. The share button copies the comparison link.
- **Teams:** build a team of up to 4 characters, see the active elemental resonance, save it with a name, load, delete or copy the link.
- **Materials:** pick a character, ascension phase and the 3 talent levels to see total materials and Mora needed (EXP not included).
- **Sheet link:** the share button on the sheet copies the link (on the Builds and My build tabs it opens that tab).
- **Selector filters:** when picking a character or weapon (Compare, Teams, Materials), use the chips under the search: characters by element, weapon type and rarity; weapons by type, rarity and secondary stat. Tap a chip again to turn it off, or use "Clear filters".
- **Today's farm:** pick the weekday (opens on "Today") to see which talent-book and weapon-material domains are open and what each drops. Artifact domains, open every day, are listed below. On Sunday everything is open.
- **Leveling up now (home):** the character, weapon and artifact set pages have a "Mark as leveling up" button. What you mark shows in a card below the banners, with the talent-book or weapon-material domain and in how many days it opens ("Today", "tomorrow", "in 3 days · Thu"). Artifacts show the domain, which is open every day. Goals are included in the backup and in sync.
- **Wishlist:** add the characters and weapons you want (with the same filters as the other pickers) and see the total materials for full ascension and the 3 talents of each character, up to the talent level you choose, plus the full ascension of each weapon. The list is saved on the device. "Details" opens the Materials calculator for that character.
- **Pity counter:** choose the banner (Character, Weapon or Standard) and log pulls with +1 and +10. When a 5★ drops, tap the matching button (featured or other). The screen shows how many pulls are left to soft pity and the guaranteed 5★, whether the next one is a 50/50 or guaranteed, primogems spent and the latest 5★. There is Undo and Reset. Soft pity numbers are approximate and Capturing Radiance is not considered.
- **My build:** the sheet's My build tab (next to Builds) holds your builds for that character, as many as you like. It opens on a list: the "Add new build" card and your saved builds, each with name, type (DPS, Sub-DPS, Support, Healer or Other), weapon (with refinement and level if you own it), artifact sets, main stats for Sands, Goblet and Circlet, what it mainly uses (HP, Attack, Recharge…) and substats. The editor opens from "Add new build" or "Edit": weapon (only the character's type), up to 2 sets, main stats, substats in priority order and a note. "Save" asks for a name and type; "Back" leaves (asking first if there are unsaved changes). Each card has Edit, Duplicate, Share and, in the "···" menu, Delete. Everything is saved on the device, per character; old builds become the first one on the list. "Share" copies a link with the build; whoever opens it sees a notice and picks "Use this build" (added as a new build, nothing is replaced) or "Ignore" (nothing goes to a server, the build travels inside the link).
- **Data (button on My area):** "Download my data" saves a .json file with favorites, teams, wishlist, pity and builds. "Choose file" imports that file on another device, replacing what exists (the file is checked first and nothing is written if it is wrong). Theme and language are not part of the backup.
- **My area (profile):** tap the account card at the top of the menu. It is your profile, with photo, name, a full panel: numbers (characters, weapons, constellations, favorites, goals and builds), collection by element, goals in progress (each character's level up to 90), the cards of the characters you have (same as on the characters screen), weapons, saved teams and wish pity. The + Character and + Weapon buttons open windows to mark what you have: character with constellation (C0 to C6) and level (1 to 90), weapon with refinement (R1 to R5) and level (1 to 90); you can search. The Data button opens sync, export and import. The characters screen also has a "✓ Owned" filter. It stays on the device and is included in the backup and in sync. **Import UID:** type your UID to bring in the characters on your in-game profile showcase, through Enka.Network (public, no password). Only showcase characters come (up to 8) and, for level and constellation to show up, you must turn on "Show character details" in the game. With details enabled, the equipped weapon is marked as owned (refinement and level) and the character's My build is filled in (weapon, sets, main stats and substats), without overwriting builds you already made. The site shows what it found and only saves when you tap "Add to my characters". The UID is not saved; the request goes through a Cloudflare Worker (worker/enka-proxy.js).
- **Artifact set page:** tapping a set opens its page, with the 2- and 4-piece bonus, the 5 pieces (flower, plume, sands, goblet and circlet) with icon, description and lore, and the characters that use the set in the site builds.
- **EXP calculator:** in the menu. Pick character or weapon, the current and target level (and the rarity, for a weapon) to see the EXP needed and how many books or ores that takes, with the fewest items and also if you use a single kind. Tables come from the game data (`scripts/build-exp.mjs`). Mora cost is not included because it is not in those tables.
- **Redeem codes:** in the menu. Lists active codes (refreshed daily at deploy by `scripts/fetch-codes.mjs`, from community sources), with a copy button and a shortcut to redeem on the official site. If no source answers, the previous list is kept. Some codes may have already expired.
- **Visit statistics:** only show up if the `measurementId` is in the Firebase config. The site asks once if it may count visits; without a "Yes" (or with "do not track" on in the browser) nothing is sent. You can change the choice in My data.
- **Sync across devices:** in the account card at the top of the menu ("Sign in with Google" button), sign in with your Google account. Builds, favorites, wishlist, teams and pity are saved in the cloud and show up on any device with the same account. Changes are sent automatically (about 2 seconds later). If the device and the cloud have different data, the site asks which version to keep. When you come back to the tab, if another device changed something, "Update" appears. Signing out does not delete anything from the device. It only shows up after Firebase is configured (see Deploy).
- **Login screen:** anyone not signed in sees a screen with three choices: "Sign in with Google", "Maybe later" (closes, comes back next visit) and "I don't want to sign in" (closes and never shows again; you can still sign in from the menu). Esc also closes as "Maybe later". It is not shown to search engines. Like sync, it only shows once Firebase is configured.
- **Reduced data notice:** if the main source (genshin-db) does not respond and the site uses the backup list, a bar warns that the list is older and smaller. You can close it.
- **Where to get it:** tapping a material (weapon page, material calculator and wishlist) opens a window with its source according to the database, the domain that drops it with the days it opens, whether it can be crafted and a button to the official HoYoLAB map (opens in another tab). The map is not embedded because its server blocks reading by other sites (CORS).
- **Weapon page:** tapping a weapon in the list opens its page. On mobile: a banner in the rarity color with the icon, section shortcuts (Summary, Effect, Materials, Characters), base ATK and secondary stat, effect with an R1–R5 refinement selector, a "Who uses it best" carousel (characters that have the weapon in the site builds, from best place #1 to worst, with medals for the top 3) and an ascension material grid (total and "See by phase"). On desktop, the weapon profile sits in a sticky side panel. You can favorite it, add it to the wishlist and share the link. On the sheet's builds, the weapon window has "Open full page".

## 3. Menu, theme, language, installation and keyboard

- **Menu (three-line button):** Home; the groups Plan (Favorites, Wishlist, Teams, Compare), Farm & materials (Materials, Today's farm, EXP calculator) and Wishes & codes (Pity, Redeem codes), which open and close on tap; Documentation, theme switch and language switch. At the top is the account card (banner with the site sky, photo, name, e-mail and My area and Sign out buttons, or "Guest" with the Sign in with Google button). On a short screen the menu scrolls.
- **Mobile:** floating tab bar at the bottom (Home, Characters, Weapons, Artifacts and Search). The search button opens a search bar that searches within the current section. **Desktop:** fixed top menu, with the section search field.
- **Theme:** dark or light sand. The choice is remembered; with no choice, the site follows the system theme (light or dark) and tracks it if it changes. "Reset preferences" (in Data) goes back to automatic. The browser bar color on mobile follows the theme.
- **Language:** PT-BR or EN-US. Switching reloads the page so all data comes in the right language. With no choice, it uses the browser language.
- **Install as app:** use the browser's "install" or "add to home screen". After the first visit, the app stores files, images and data and opens fast, even on a weak connection.
- **Keyboard:** Esc closes the menu, detail windows and the mobile search bar. Tab moves through elements with a visible focus outline. Enter opens items and confirms the search.
- **"Install the app" button:** at the end of the menu, shown when the browser offers installation (Chrome, Edge and Android) and the app is not installed yet. On iPhone, use Safari's "Add to Home Screen".

## 4. Routes

The site uses regular addresses (`/farm`, `/weapon/Amos'%20Bow`). Each known page gets its own HTML at deploy time (with title and description) and there is a `sitemap.xml`; addresses outside the list fall back to `404.html`, which opens the app the same way. Old links with `#` (`/#/farm`) are redirected automatically.

- `/` Home.
- `/characters` character list.
- `/character/:id` profile (e.g. `/character/albedo`). With `?tab=builds` it opens straight on the Builds tab and with `?tab=mine`, on the My build tab.
- `/weapons` and `/artifacts` lists.
- `/weapon/:name` weapon page (e.g. `/weapon/Aquila%20Favonia`).
- `/artifact/:name` artifact set page (e.g. `/artifact/Gladiator's%20Finale`).
- `/favorites` favorites.
- `/docs` documentation.
- `/compare` compare characters or weapons (`?a=` and `?b=` characters, `?k=` weapons; the link is shareable).
- `/teams` team builder (`?m=` ids, `?n=` name).
- `/materials` material calculator (`?c=` character).
- `/exp` EXP calculator.
- `/codes` redeem codes.
- `/farm` today's farm (domains by weekday).
- `/wishlist` wishlist.
- `/pity` pity counter.
- `/data` my data (export, import, sync).

## 5. Project structure

```
src/
  App.tsx            path-based routes, intro animation and footer
  Splash.tsx         animated intro (elements that become the logo)
  NewsPage.tsx       Home (animated banner, news, wish banners)
  HomePage.tsx       character list (filters, grid/list, favorites)
  CharacterPage.tsx  profile: overview, talents, constellations, builds, my build
  ItemsPage.tsx      weapons and artifacts (list, filters)
  WeaponPage.tsx     weapon page (/weapon/:name)
  ArtifactPage.tsx   artifact set page (/artifact/:name)
  ExpPage.tsx        EXP calculator (expCalc.ts, data/exp.json)
  Goals.tsx          "Leveling up now" card on the home (goals.ts)
  LoginScreen.tsx    login screen (loginGate.ts, login.css)
  OwnedPanel.tsx     window for characters you have (owned.ts) and import by UID (enka.ts)
  WeaponPicker.tsx   window for weapons you have (ownedWeapons.ts)
  AreaModal.tsx      My area windows      DataPanel.tsx  Data window
  CodesPage.tsx      redeem codes (codes.ts)
  analytics.ts       visit statistics (AnalyticsPrompt.tsx, AnalyticsCard.tsx)
  pageTitle.ts       browser tab title per page
  FavoritesPage.tsx  favorite characters, weapons and artifacts
  DocsPage.tsx       this documentation, in Portuguese or English
  ComparePage.tsx    compare two characters or two weapons (/compare)
  TeamsPage.tsx      team builder and resonance (/teams)
  MaterialsPage.tsx  material calculator (/materials)
  FarmPage.tsx       domains open by weekday (/farm)
  WishlistPage.tsx   wishlist with summed materials (/wishlist)
  PityPage.tsx       pity counter (/pity)
  DataPage.tsx       My area: profile with showcases (/data)      backup.ts   backup rules
  ApiNotice.tsx      notice when the backup source is used      apiStatus.ts
  MaterialSheet.tsx  "Where to get it" window for a material (useMaterialSheet.tsx)
  sync.ts            sync (Google sign-in + Firestore)      syncLogic.ts  conflict rule
  SyncCard.tsx       account card in My data      SyncPrompts.tsx  conflict and new-data notice
  firebaseConfig.ts  Firebase config (empty = sync off)
  store.ts           device storage write that notifies sync
  MyBuild.tsx        own build, on the sheet's My build tab
  Picker.tsx         picker window with search and filters (pickFilters.ts)
  costs.ts           cost sum per level            share.ts   copy/share link
  ItemModal.tsx      weapon/artifact details
  Banners.tsx        wish banner carousels and banner contents
  PcNav.tsx          top menu (desktop only)    TabBar.tsx   bottom bar (mobile only)
  Drawer.tsx         side menu (documentation, theme and language)
  Footer.tsx         footer
  api.ts             API access, caches, sorting by release
  i18n.ts            language and PT/EN dictionary
  favorites.ts       favorites (localStorage)   theme.ts     light/dark theme
  install.ts         install-app button (browser event)
  preload.ts         downloads images in the background
  visionColors.ts    color of each element
  types.ts           data types
  __tests__/         tests (Vitest)
  data/              builds (builds.generated.ts, builds.ts, builds.en.json, buildText.ts) and docs.json
  *.css              styles per area; motion.css (animations), sheetpc.css (desktop profile)
scripts/fetch-banners.mjs   generates public/banners.json
scripts/build-docs.mjs      generates docs/*.md from src/data/docs.json
scripts/prerender.mjs       per-route pages, sitemap.xml and 404.html (after the build)
scripts/fetch-codes.mjs     generates public/codes.json (redeem codes)
scripts/build-exp.mjs       generates src/data/exp.json (EXP tables)
public/                     manifest, service worker (sw.js), icons, banners.json
.github/workflows/deploy.yml
```

## 6. Architecture

- **Routes and loading:** `App.tsx` defines the routes. Home is in the main bundle; characters, profile, weapons/artifacts, favorites and documentation load on demand (`lazy` + `Suspense`).
- **Menu:** `MenuProvider` keeps whether the menu is open and the theme; `Drawer` is the side menu and `MenuButton` the button that opens it.
- **Data:** `api.ts` is the single entry point to the APIs. Each function keeps its result in memory (cached Promise), so different screens reuse the same request. If a request fails, the cache is cleared and it can be tried again.
- **Favorites:** `favorites.ts` keeps one shared state per kind (`useSyncExternalStore`), so all stars update together.
- **Desktop and mobile pages:** the same component serves both; CSS decides the layout (`@media`). `PcNav` only shows on desktop and `TabBar` only on mobile.
- **Images:** the `Thumb` component accepts a list of addresses and tries the next one if one fails; if all fail, it shows the first letter of the name. `preload.ts` downloads list icons in the background (and does nothing with "Data saver" on).

## 7. Data and APIs

- **genshin-db** (`genshin-db-api.vercel.app/api/v5`): characters, weapons, artifacts, materials, talents, constellations, descriptions and release version. It supports Portuguese (`resultLanguage=Portuguese`) and search by English name (`queryLanguages=English`).
- **genshin.dev** (`genshin.jmp.blue`): character and element icons and a fallback for talents (English only).
- **Enka.Network CDN:** splash art and skill and constellation icons.
- **HoYoverse announcement API:** wish banners, read by the `fetch-banners.mjs` script at deploy time (the browser does not call this API).
- **Fallback:** if genshin-db fails, the character list comes from genshin.dev (older). Talents and constellations use genshin.dev as a backup for those that exist there. Icons have several alternatives in order.
- **New items:** sorted by release version and numeric id (`newestFirst`). Items without a version count as the newest.

## 8. Data models

- `CharacterSummary` (`types.ts`): `id` (lowercase name with hyphens), `name` (screen language), `enName` (English, key for searches and builds), `vision` (element), `weapon`, `nation`, `rarity`, `devId` (id on genshin.dev), `icons`, `portrait`, `splash`, `version`, `description`, `dbId`.
- `ItemEntry` and `ItemInfo` (`api.ts`): `name` (English key), `label` (screen name), `info` with rarity, type, icons, version and texts (effect, 2 and 4-piece bonus, base ATK and secondary stat).
- `Details` (`api.ts`): combat talents, passive talents and constellations, each with name, description and icons.
- `Build` (`data/builds.ts`): `patch`, `sources`, `weapons`, `artifacts`, `mainStats`, `substats` and `teams` (with members and a note).
- Banner (`public/banners.json`): `updated` and `banners` with title, type (character or weapon), image, end date and the 5★ and 4★ highlights.
- `Domain` (`api.ts`): `kind` (talent, weapon or artifact), name, region, weekdays and materials. Own build (`MyBuild.tsx`): weapon, sets, main stats, substats and a note, per character.

## 9. Languages (PT-BR / EN-US)

- The language is kept in `localStorage` (`genshinworld:lang`); with no choice, it uses the browser language. `index.html` applies `lang` and the page description before the app loads.
- Switching language saves the choice and **reloads the page**, so all data comes again in the right language.
- **Interface texts:** dictionary in `src/i18n.ts`, used with `t('key')`. Each key has the Portuguese and English text, and accepts variables like `{n}`.
- **API data:** the English list gives the ids and keys (English name is the key for favorites, builds and searches); in Portuguese, a second list provides names and texts, matched by numeric id.
- **Builds:** the original texts are in Portuguese; in English each sentence is replaced by its translation in `src/data/builds.en.json`, which is only downloaded in English mode. A sentence without translation shows in Portuguese (a test warns if one is missing).
- **Banners:** title and image in Portuguese when the announcement has them.
- **Documentation:** `src/data/docs.json`, with one text for each language.
- To add a new screen text, create the key in `i18n.ts` with both languages and use `t('key')`.

## 10. Builds

- `src/data/builds.generated.ts` has 121 builds, generated from public guides (Icy Veins, Genshin-Builds and Genshin.gg). `builds.ts` merges these builds and has manual adjustments (e.g. Diluc), which take priority.
- Each build has weapons in order of preference, artifact sets (with notes), main stats for Sands, Goblet and Circlet, substats, teams (with members) and the sources.
- Item names are in English in the file and become names and icons in the chosen language at runtime.
- Builds reflect the guides at the time they were generated (`patch` field) and may become outdated.
- **To add or edit a build:** add the character in `builds.ts` (the `id` is the same as in the character list) and, if there are new sentences, the translation in `builds.en.json`. Run `npm test`.

## 11. Wish banners

- `scripts/fetch-banners.mjs` reads the official HoYoverse announcements, identifies character and weapon banners and extracts the highlights (5★/4★), matching genshin-db names with the announcement text.
- It writes `public/banners.json`, with Portuguese title and image when available.
- It runs at every deploy and every day at 12:00 UTC. If it fails, the deploy continues with the previous file.
- The site only shows banners that have not ended yet.
- Highlight extraction is heuristic and may fail if the announcement format changes.
- To run by hand: `node scripts/fetch-banners.mjs` (needs internet).

## 12. What is saved on the device

- `genshinworld:lang`: language (`pt` or `en`).
- `genshinworld:theme`: theme (`dark` or `light`).
- `genshinworld:view`: grid or list on the characters screen.
- `genshinworld:favorites`, `genshinworld:fav-weapons`, `genshinworld:fav-artifacts`: favorite characters, weapons and artifacts (lists of names/ids).
- `genshinworld:teams`: teams saved by the user on the Teams screen.
- `genshinworld:wishlist` and `genshinworld:wish-weapons`: characters and weapons on the wishlist.
- `genshinworld:goal-chars`, `genshinworld:goal-weapons`, `genshinworld:goal-artifacts`: "Leveling up" goals of the home card.
- `genshinworld:owned`: characters you have, with constellation and level (My area).
- `genshinworld:owned-weapons`: weapons you have, with refinement and level (My area).
- `genshinworld:pity`: pity counter for each banner and 5★ history.
- `genshinworld:my-builds`: each character's own build.
- `genshinworld:analytics`: your choice about visit counting (`yes` or `no`).
- `genshinworld:login-never`: set when the person chose "I don't want to sign in" (`1`). "Maybe later" is kept in `sessionStorage` (`genshinworld:login-later`) and only lasts until the site is closed.
- `genshinworld:splash` (session): marks that the intro has already shown.
- **Service worker cache:** app files, images, API data and fonts.
- `genshinworld:sync`: connected account and sync control (last known cloud version and whether there are changes to send).
- **With sync on:** the same data as the backup goes to Firestore, in the `users/{account id}` document, which only that account can read and write (rules in `firestore.rules`). Without signing in, nothing leaves the device.

## 13. Layouts and style

- **Mobile (< 820px):** app look, floating tab bar at the bottom, fixed title on top. Home has an animated banner of new characters.
- **Desktop (≥ 820px):** fixed top menu, full-screen banner on Home, wider pages. On the profile page the banner stays fixed at the top and the content slides over it; talents and constellations use columns that adjust to the height of each block. The character list is centered, with bigger rows.
- Desktop rules live inside `@media (min-width: 820px)` and mobile rules inside `@media (max-width: 819px)`; changing one should not affect the other.
- **CSS order:** `responsive.css`, `motion.css` and `sheetpc.css` are imported last in `App.tsx` so they win over earlier rules.
- **Style files:** `index.css` (theme variables and base), `App.css`, `home.css`, `items.css`, `news.css`, `pcnav.css`, `drawer.css`, `footer.css`, `splash.css`, `docs.css`, `responsive.css`, `motion.css` and `sheetpc.css`.
- **Themes:** colors are variables (`--bg`, `--panel`, `--text`, `--gold`, `--accent`...). The light theme redefines them in `[data-theme='light']`. White API icons turn black in the light theme.
- **Element colors** (`visionColors.ts`): Pyro, Hydro, Anemo, Cryo, Electro, Dendro and Geo. The profile uses the element color as its accent.
- **Fonts:** Cormorant Garamond (headings, via Google Fonts) and the game font HYWenHei, cut to only the letters of the app name.

## 14. Animations and transitions

- **Intro** (`Splash.tsx`): 7 elements spin and form the logo, about 3.4 seconds, once per session.
- **Pages:** the screen enters with an opacity fade (no `transform`, so fixed elements like the bottom bar do not break).
- **Home:** the banner animates the character change; on desktop the texts enter in sequence.
- **Mobile search:** the tab bar turns into the search bar with an animation.
- **Desktop search:** on focus, a golden light runs inside the bar and the magnifier tilts.
- **Menu:** items enter one after another.
- **Alphabetical index:** magnifier effect on the letters and a small bounce on the section letter on arrival.
- **Theme:** smooth color change.
- **Tools** (Farm, Wishlist, Materials, Pity): cards enter in sequence; the pity number pops on each pull and the bar fills and changes color in soft pity.
- **Picker window:** the backdrop fades and the panel slides up gently.
- All of them respect the system "reduce motion" setting.

## 15. Accessibility

- Buttons and links have `aria-label`; focus is visible and trapped inside the side menu while it is open; Esc closes the menu and windows.
- Result counts are announced to screen readers (`aria-live`).
- Animations are turned off for people using "reduce motion".
- The page language (`lang`) follows the chosen language.
- Contrast reviewed in both themes, with icons adjusted in the light theme.

## 16. PWA and cache

- `public/sw.js` stores app files, images, API data and fonts on the device.
- **Opening the app:** tries the network (newest version) and, offline, uses the stored page.
- **`/assets/` files:** the name contains the content hash, so they are stored forever (cache first).
- **Images:** downloaded once and stored (up to 300).
- **API data and fonts:** shows what is stored right away and updates in the background.
- **Force a full re-download:** change `VERSION` in `public/sw.js`.
- The cache is only enabled in the published version, not in `npm run dev`.
- `manifest.webmanifest` defines name, colors and icons for installing; icons are in `public/icons`.

## 17. Development

- **Requirements:** Node 22 and npm.
- `npm ci` installs dependencies.
- `npm run dev` opens the development environment.
- `npm run build` checks types and generates the `dist` folder; `npm run preview` tests the build.
- `npm run lint` runs oxlint.
- `npm test` runs the tests.
- `npm run docs` generates `docs/DOCUMENTACAO.md` and `docs/DOCUMENTATION.md` from `src/data/docs.json`.
- **New screen:** create the component, register the route in `App.tsx` (with `lazy` if large) and put the texts in `i18n.ts`.
- **CSS care:** use the rule in the right range (`@media`) and check both mobile and desktop.

## 18. Tests and lint

- `npm test` (Vitest + jsdom) runs in `src/__tests__`: version comparison and sorting, texts and variable replacement, weapon names per language, builds (every build has weapons, artifacts and sources; every Portuguese note has a translation), favorites, elemental resonance, material sums and Farm domain grouping and backup (export, import and rejecting invalid files).
- The deploy only continues if tests pass.
- `npm run lint` uses oxlint; the project has no warnings.

## 19. Deploy

- A push to `main` triggers GitHub Actions (`.github/workflows/deploy.yml`): `npm ci`, tests, banner update, `npm run build` and publishing to Pages.
- It also runs manually and every day at 12:00 UTC (to update banners).
- After a push, the new site appears in a few minutes. If something looks old, reload with Ctrl+F5; on mobile, close and reopen the app.
- **Firebase (sync):** 1) create a project at console.firebase.google.com; 2) Authentication → Sign-in method → enable Google; 3) Authentication → Settings → Authorized domains → add `gbsj17.github.io`; 4) Firestore Database → Create database (production mode) and, under Rules, paste the contents of `firestore.rules`; 5) Project settings → Your apps → Web app → copy `apiKey`, `authDomain`, `projectId` and `appId` into `src/firebaseConfig.ts`. While that file is empty, sync stays hidden.
- Firebase (about 230 KB) is only downloaded when someone signs in, so it adds no weight for people who don't use it.
- **Pre-generated pages and sitemap:** after the build, `scripts/prerender.mjs` creates one HTML per page (characters, weapons and sets come from the API), the `sitemap.xml` and the `404.html`. To show up on Google, add the site to Search Console and submit `https://gbsj17.github.io/genshinworld/sitemap.xml`. A `robots.txt` is not needed on GitHub Pages project sites.
- **Codes:** `scripts/fetch-codes.mjs` runs at deploy (and daily) and writes `public/codes.json`. The Actions log shows how many codes each source returned.
- **Statistics:** to turn them on, also copy the `measurementId` (Firebase → Project settings → Your apps) into `src/firebaseConfig.ts`.

## 20. Performance

- On-demand chunks: the main bundle is about 220 KB; the profile page about 240 KB.
- The English build translations are only downloaded in English mode.
- Large lists are fetched once and kept in memory; icons are preloaded in the background.
- Loading errors show a "Try again" button.

## 21. FAQ and common problems

- **I see the old version of the site:** wait for the deploy to finish and reload with Ctrl+F5 (on mobile, close and reopen the app).
- **Wish banners do not show:** `banners.json` may be empty or all banners have ended; it is updated every day at 12:00 UTC.
- **Some image or icon does not show:** the image may have come broken from one of the sources. Change `VERSION` in `sw.js` to clear everyone's cache.
- **A build shows in Portuguese in English mode:** the sentence translation is missing in `builds.en.json`.
- **I lost my favorites:** they are only in this browser and device; clearing the site data erases the list.
- **The character list does not load:** the API may be down. The site tries genshin.dev as a fallback; use "Try again".

## 22. Rights and limitations

- Fan project, non-commercial and not affiliated with HoYoverse. Genshin Impact, characters, images and names belong to HoYoverse.
- The title font (HYWenHei, subset in `src/fonts/brand.woff2`) comes from the game and belongs to HoYoverse: for commercial use, replace it with a free font.
- Builds reflect third-party guides at the time they were generated.
- Data depends on third-party public APIs, which may change or go down.
- There is no code license defined yet.

## 23. Credits

- Data: genshin-db and genshin.dev.
- Images: Enka.Network CDN and HoYoverse.
- Builds: Icy Veins, Genshin-Builds and Genshin.gg (public guides).
- Created by Genival Souza Júnior, part of RUNEbyte, 2026.

## 24. Future ideas

Event calendar and area and map info for new versions.
