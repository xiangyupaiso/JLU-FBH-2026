# circRNA Bomb Cat — 免疫逃逸

A 2–6 player science-education card game about circRNA therapeutic vaccines for
triple-negative breast cancer (React 19 + TypeScript + Vite + Tailwind), built for the
iGEM 2026 JLU-FBH wiki.

## No image assets — by design

This game has **no image files and no `<img>` elements** (verified across the whole
source tree: no `.png`, `.jpg`, `.jpeg`, `.avif`, `.webp`, `background-image` or
`url(...)` references). All artwork is native:

- **Cards, board, panels, dialogs** — Tailwind utility classes + inline `style`
- **Icons** — `lucide-react`, which emits inline SVG
- **Emoji glyphs** (🧬 💥 🏆 🔬 🤖 …) — text nodes, used as illustrations
- **The paper texture** — a procedurally generated SVG `feTurbulence` noise field
  inlined as a `data:` URI in `src/circure-skin.css`

So there is nothing to migrate to `static.igem.wiki` here, and nothing was
"converted" to make it remote. The only remote assets are the **four wiki fonts**
listed below.

The one exception worth calling out: the skin's `body::before` texture is a generated
SVG data URI, not a shipped image, so it has no registry entry and needs no upload.
It was left inline.

## Remote assets

`src/circure-skin.css` loads the wiki's official faces from iGEM:

| font | URL |
| :--- | :--- |
| Fraunces | `https://static.igem.wiki/teams/6056/wiki/files/fonts/site/fraunces-variable.woff2` |
| Fredoka | `https://static.igem.wiki/teams/6056/wiki/files/fonts/site/fredoka-variable.woff2` |
| Lexend | `https://static.igem.wiki/teams/6056/wiki/files/fonts/site/lexend-variable.woff2` |
| IBM Plex Mono | `https://static.igem.wiki/teams/6056/wiki/files/fonts/site/ibm-plex-mono.woff2` |

All four are registered in [`../../IGEM_ASSET_REGISTRY.md`](../../IGEM_ASSET_REGISTRY.md)
under `public/game-assets/fonts/`. Verified `200 OK`.

## Requirements

- **Node.js ≥ 20** (developed on 24.x)
- npm ≥ 10
- Network access to `static.igem.wiki` for the fonts, and to the PeerJS cloud
  server if you use **Online Play**

## Install / run / build

```bash
npm ci                 # or: npm install
npm run dev            # http://localhost:5173
npm run build          # tsc --noEmit && vite build  -> dist/
npm run preview        # serve the production build locally
```

### Building for the wiki (subdirectory deploy)

The published bundle lives at `public/game-assets/bomb-cat/`, so its asset URLs must
be absolute:

```bash
# Linux / macOS
GAME_BASE_PATH=/game-assets/bomb-cat/ npm run build

# Windows PowerShell
$env:GAME_BASE_PATH = '/game-assets/bomb-cat/'; npm run build
```

`GAME_BASE_PATH` is read in `vite.config.ts` and defaults to `./` (standalone).
Emitted output references `/game-assets/bomb-cat/assets/…`.

## Directory structure

```
.
├── index.html                entry HTML
├── package.json / package-lock.json
├── vite.config.ts            base = GAME_BASE_PATH ?? './', @ → ./src alias
├── tailwind.config.js, postcss.config.js
├── tsconfig.json
├── src/
│   ├── main.tsx              React root; imports index.css then circure-skin.css
│   ├── App.tsx               standalone test entry -> <CircRnaGame />
│   ├── CircRnaGame.tsx       main component: menu / rules / lobby / game
│   ├── index.css             CirCure design tokens + Tailwind entry
│   ├── circure-skin.css      wiki skin: fonts, paper texture, radii (was a
│   │                         separate file loaded only by the wiki bundle)
│   ├── components/
│   │   ├── WikiBridge.tsx    postMessage bridge to the host wiki page
│   │   ├── Button.tsx, Card.tsx, Dialogs.tsx, GameBoard.tsx,
│   │   ├── HandPanel.tsx, BattleLog.tsx
│   ├── constants/cards.ts    the 63-card deck
│   ├── engine/
│   │   ├── gameEngine.ts     pure rules: setup, play, reshuffle, win condition
│   │   └── botAiTree.ts      bot decisions
│   ├── hooks/
│   │   ├── useGameEngine.ts  state driver + bot timers
│   │   ├── usePeerNetwork.ts PeerJS host/join (Online Play)
│   │   └── gameEngineContext.ts  shares the single engine instance
│   └── types/game.ts
```

## Wiki integration

The published wiki embeds this game in an iframe and listens on `window.parent`.
`src/components/WikiBridge.tsx` posts:

| message | when |
| :--- | :--- |
| `bomb-cat:ready` | after mount |
| `bomb-cat:close` | the player pressed <kbd>Esc</kbd> |
| `bomb-cat:complete` | the round ended, with `{ stats: { title, won, winner } }` |

Every message carries `source: 'bomb-cat-game'` and uses
`targetOrigin = window.location.origin`. Standalone (`window.parent === window`) all
three are no-ops, so opening `dist/index.html` directly just works.

This mirrors the inline `<script>` the compiled wiki bundle carries, so a rebuild
keeps the same messages. Two implementation notes:

- Completion is driven by `gameState.over`, not by a `MutationObserver` scraping the
  `你赢了！ / 游戏结束` heading out of the DOM the way the compiled bundle did. The
  payload is a superset of the old one.
- `WikiBridge` needs the engine's state, so the single `useGameEngine()` instance is
  shared through `GameEngineContext` (`src/hooks/gameEngineContext.ts`) rather than
  calling the hook twice — two instances would mean two independent game states.

`src/circure-skin.css` holds the CirCure skin that the compiled wiki bundle also
loads as a separate `circure-skin.css`. Importing it from `main.tsx` after
`index.css` reproduces the old `<link>` cascade order, so the appearance matches.

## Deploying (optional)

**You do not need to do this.** The live wiki keeps serving the existing compiled
bundle in `public/game-assets/bomb-cat/`, which this migration did not touch.

If you do want to redeploy, build with the wiki subdirectory base and replace that
folder's contents:

```bash
GAME_BASE_PATH=/game-assets/bomb-cat/ npm run build
```

Check the rebuilt bundle in a browser before swapping.

## Known limitations

- **The live wiki bundle was not regenerated.** Only the source was added; the
  compiled bundle in `public/game-assets/bomb-cat/` is untouched. Deploying is
  optional and documented above.
- **`tailwind-utilities.css` was not ported.** The compiled wiki bundle ships a
  183-line hand-written subset of Tailwind utilities next to its CSS. A normal build
  emits the utilities Tailwind generates from `tailwind.config.js` (which already
  scans `./index.html` and `./src/**/*.{ts,tsx}`), so the subset is unnecessary here.
  If a rebuilt bundle ever looks unstyled, check that arbitrary-value classes such as
  `px-[76px]`, `w-[328px]` and `rounded-[16px]` survive Tailwind's scan — the skin's
  radius overrides in `circure-skin.css` target exactly those.
- **Online Play requires signalling.** It uses the public PeerJS cloud broker by
  default, or `npx peerjs --port 9000` for LAN. If the cloud broker is down,
  Online Play fails with an error banner while Local Play and View Rules still work.
- **No test suite.** Verification was typecheck, production build, and a bundle audit;
  there are no unit or e2e tests in this project.
- **A peer leaving mid-round is not handled.** They stay marked alive but stop acting
  (pre-existing `ponytail` note in `CircRnaGame.tsx`). Needs an `eliminatePlayer` in
  the engine.
- **Bundle size.** ~378 kB JS (122 kB gzipped) including the PeerJS browser client.