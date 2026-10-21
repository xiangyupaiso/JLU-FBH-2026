# Breast Guardian

A React 19 / TypeScript / Vite 7 breast-health education RPG. Source provenance,
published-version comparison and [license](../LICENSE) are documented in the
[archive README](../README.md).

Use Node.js 20.19+ or 22.12+ (verified: Node 24.16.0, npm 12.2.0):

```sh
npm ci
npm run dev
npm run build
npm run preview
```

The Vite base is `./`; output `dist/` supports wiki subdirectory hosting. Building
does not replace the published `public/game-assets/` bundle.

## Assets

The GitHub checkout retains its local art sources. `src/data/assetUrls.ts` maps historical paths to
verified official CDN URLs. [ASSET_MAPPING.md](./ASSET_MAPPING.md) documents every
entry; the [archived registry](../ASSET_REGISTRY.md) is included so these commands
have no dependency on the original developer's filesystem:

```sh
npm run check:assets   # requires Python 3.9+
npm run check:runtime
npm run assets:regen   # use only after recording a verified uploaded URL
```

Network access to `static.igem.wiki` is required at runtime. Runtime checks cover
actual scenes, perspective-specific portraits, boss states and preload lists;
they do not claim every unused catalog entry is valid or fetch all remote images.

`App.tsx` routes the phases, `src/sections/` contains the story and battle screens,
`src/data/` preserves English and Chinese story data, and `src/hooks/gameState.tsx`
provides game state. `WikiBridge` posts ready, close and completion events to its
same-origin wiki parent and is a no-op outside an iframe. This is a single-player
game with no online multiplayer mode. No independent unit/e2e suite is included.

The runtime portrait diagnostic currently reports 18 unresolved story-state combinations and exits 1; see [KNOWN_LIMITATIONS.md](./KNOWN_LIMITATIONS.md). This existing published-game limitation is preserved rather than concealed by guessed art.
