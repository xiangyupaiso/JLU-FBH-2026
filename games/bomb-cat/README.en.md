# circRNA Bomb Cat

[简体中文](README.md) | English

A React 19 / TypeScript / Vite 5 educational card game for 2–6 local or online
players. Source provenance, published-version comparison and [license](../LICENSE)
are documented in the [archive README](../README.en.md).

```sh
npm ci
npm run dev
npm run build
npm run preview
```

Node.js 20+ is required; Node 24.16.0 / npm 12.2.0 were used for verification.
The default Vite base is `./`, supporting standalone and wiki subdirectory hosting.
Set `GAME_BASE_PATH` only when you need a different complete deployment prefix.
Building creates `dist/`; it does not modify `public/game-assets/bomb-cat/`.

## Art and networking

The menu cover is loaded from its official iGEM CDN URL in `src/CircRnaGame.tsx`.
Its unused former `src/assets/cover.webp` is intentionally absent. Four wiki fonts
also use official CDN URLs; cards, icons and paper texture use CSS, SVG and emoji.
See the [archived asset registry](../ASSET_REGISTRY.md). Network access is needed
for those assets and for PeerJS signalling during Online Play. Local Play and View
Rules do not require a signalling server.

`src/engine/gameEngine.ts` contains rules, `botAiTree.ts` bot decisions,
`useGameEngine.ts` state/timers, and `usePeerNetwork.ts` online messaging. The
`WikiBridge` component posts ready, close and completion events to its same-origin
parent; these events are no-ops when the game runs outside an iframe.

Known limitations: no independent unit/e2e suite is provided; online play depends
on signalling availability; a player leaving mid-round remains a recorded gameplay
limitation. Use the lockfile, TypeScript build, and repository lint, and add
interaction checks for changes to rules, state, or networking.
