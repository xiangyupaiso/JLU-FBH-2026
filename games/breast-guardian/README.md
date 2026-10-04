# Breast Guardian — 乳腺守护者

A breast-cancer education RPG (React 19 + TypeScript + Vite + Tailwind), built for
the iGEM 2026 JLU-FBH wiki.

**All artwork is loaded from the official iGEM server** (`static.igem.wiki`). This
repository contains no image binaries: every character portrait, scene, UI plate and
loading frame is referenced by its official URL. See
[`ASSET_MAPPING.md`](./ASSET_MAPPING.md) for the full path → URL table and
[`../../IGEM_ASSET_REGISTRY.md`](../../IGEM_ASSET_REGISTRY.md) for the registry it is
generated from.

## Requirements

- **Node.js ≥ 20** (developed on 24.x)
- npm ≥ 10
- **Python ≥ 3.9** — only for `assets:regen` / `check:assets`
- Network access to `static.igem.wiki` at runtime (the game loads all art remotely)

## Install / run / build

```bash
npm ci                 # or: npm install
npm run dev            # http://localhost:5173
npm run build          # tsc -b && vite build  -> dist/
npm run preview        # serve the production build locally
```

`vite.config.ts` sets `base: './'`, so `dist/` can be dropped at any path — including
the wiki's `public/game-assets/`.

## Directory structure

```
.
├── index.html                 entry HTML (Vite root)
├── package.json / package-lock.json
├── vite.config.ts             base './', @ → ./src alias
├── tailwind.config.js         Tailwind 3 theme (game's pink/paper palette)
├── tsconfig*.json             app + node + project references
├── eslint.config.js
├── ASSET_MAPPING.md           generated: local path → official URL, 1:1
└── src/
    ├── main.tsx               React root
    ├── App.tsx                phase router (mainMenu → … → endingPage)
    ├── App.css, index.css     global styles
    ├── assets?                 (none — art is remote)
    ├── data/
    │   ├── assetUrls.ts       GENERATED: the 201-entry official URL map
    │   ├── assets.ts          catalog + getCharacterAssetPath / getBossAssetPath
    │   ├── generatedAssets.ts eager preload set (176 URLs, resolved via assetUrl)
    │   ├── stories.ts         all story scripts (large; source of 【立绘：X / Y】)
    │   ├── skills.ts, sheepLines.ts, bossProgression.ts, specialEndings.ts
    ├── hooks/gameState.tsx     game reducer + provider
    ├── components/
    │   ├── WikiBridge.tsx     postMessage bridge to the host wiki page
    │   ├── AssetPreloader.tsx renders the eager preload list off-screen
    │   ├── SheepBubble.tsx, storyControls.tsx, dialogStyles.ts
    │   └── ui/               shadcn-style button / card primitives
    ├── sections/             one component per game phase (the bulk of the game)
    ├── lib/utils.ts          `cn` class helper
    └── types/index.ts        shared types
└── scripts/
    ├── regen_asset_urls.py    regenerate assetUrls.ts + ASSET_MAPPING.md
    └── check-runtime-assets.mjs  assert every real call site resolves to a registry URL
```

## How images are resolved

The only supported way to reference artwork is `assetUrl()` from
`src/data/assetUrls.ts`:

```ts
import { assetUrl } from '@/data/assetUrls';

<img src={assetUrl('assets/ui/home-bg.jpg')} alt="" />
```

`assetUrl('assets/…')` returns the official `static.igem.wiki` URL, or `undefined`
if the path is not in the registry. Returning `undefined` is deliberate: an
unmapped asset should render nothing and be obvious, rather than silently falling
back to an unrelated picture.

`src/data/assets.ts` builds character / boss / scene URLs dynamically
(`getCharacterAssetPath`, `getBossAssetPath`, `getSceneAssetPath`) and funnels them
through the same map, so the dynamic `${group}/${name}-${state}.png` construction is
resolved by lookup, never by string-guessing.

### Adding or changing artwork

1. Upload the file with the iGEM uploads tool.
2. Add a row to `IGEM_ASSET_REGISTRY.md` (local path + official CDN link).
3. `npm run assets:regen` — rewrites `src/data/assetUrls.ts` and `ASSET_MAPPING.md`.
4. `npm run check:runtime` — fails if any call site resolves to `undefined`.
5. `npm run build`.

Never hand-write a `static.igem.wiki` URL. The registry is the only source of truth,
and the remote extension is **not** assumed to match the local one (iGEM serves AVIF
regardless of what was uploaded).

## Wiki integration

The published wiki runs this game in an iframe. `src/components/WikiBridge.tsx`
posts messages to `window.parent`:

| message | when |
| :--- | :--- |
| `breast-guardian:ready` | after mount |
| `breast-guardian:close` | the player pressed <kbd>Esc</kbd> |
| `breast-guardian:complete` | reached `beEnding` / `heEnding` / `specialEnding`, with `{ stats: { perspective, ending } }` |

Every message carries `source: 'breast-guardian-game'` and is sent with
`targetOrigin = window.location.origin`. Standalone (`window.parent === window`)
all three are no-ops.

## Deploying (optional)

**You do not need to do this.** The live wiki keeps serving the existing compiled
bundle in `public/game-assets/`, which this source addition did not touch.

If you do want to redeploy, copy a fresh `dist/` over `public/game-assets/`. Because
`base: './'`, it works at that path. Check it in a browser before swapping.

## Known limitations

- **No local art.** The original project's `public/assets/raw/` (~175 unsorted source
  images, ~270 MB) is not part of this source package: it is unused at runtime, not in
  the registry, and far too large to ship. Everything the game actually loads is
  mapped to the official CDN.
- **Four assets are uploaded but unreferenced** — `assets/loading/loading-1..3.png`
  and `assets/ui/{ending-chain, ending-home-btn, ending-plate, qr-ending}.png`. They
  are baked into the ending page background and are intentionally not preloaded. All
  load with HTTP 200; none is requested at runtime. See `ASSET_MAPPING.md`.
- **`assets/characters/neighbors/群友-友善.jpg`** is a stray duplicate of the `.png`
  beside it. No code path builds a `.jpg` there, so it is mapped but unreachable.
- **`VISUAL_ASSET_DATABASE` in `src/data/assets.ts` is dead code** — nothing imports
  it (verified). It is kept because it documents the full intended cast, but ~50 of its
  entries resolve to `undefined` because they are name variants the runtime resolver
  never produces (e.g. catalog entries named `幼年主角` vs. the `主角` + perspective
  lookup the game actually uses, and `BOSS` entries whose spaces are not normalized).
  Nothing renders them, so this is a catalog inaccuracy, not a rendering bug.
- **Bundle size.** A single ~990 kB JS chunk (220 kB gzipped). No code splitting; not
  worth it for a single-page game.
- **Four pre-existing type errors were fixed** to make `npm run build` pass: two unused
  imports (`useRef` in `storyControls.tsx`, `Settings` in `SpecialEnding.tsx` and
  `TutorialGuide.tsx`) and a missing optional `background?: string` on the `StoryLine`
  interface used by `TutorialGuide.tsx`. No behaviour changed.
- **Online play is absent**; the game is single-player.

## Verification performed

- `npm ci` and `npm run build` succeed; `tsc -b` clean.
- `npm run check:assets` — the generated map matches the registry.
- `npm run check:runtime` — 182 distinct official URLs across every scene, every
  【立绘】 pair in `stories.ts` (157 pairs, resolved for the perspective that owns
  them), every boss id/state the source shipped, and the full preload list:
  **0 unresolved, 0 non-iGEM, 0 not-in-registry**.
- Bundle audit: **0** image `src` values that are not official iGEM URLs; the only
  non-iGEM hosts present are `www.w3.org` (SVG/XML namespaces) and `react.dev`
  (an error-message link).
- 64 asset URLs spot-checked with HTTP `HEAD`: all `200 OK`, `content-type: image/avif`.