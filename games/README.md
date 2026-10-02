# Games — source code

Complete, buildable source for the two interactive games published on the iGEM wiki.

| Game | Path | Stack | Images |
| :--- | :--- | :--- | :--- |
| 乳腺守护者 / Breast Guardian | [`breast-guardian/`](./breast-guardian/) | React 19, TypeScript, Vite 7, Tailwind 3 | 201 assets → official iGEM CDN |
| circRNA 爆炸猫 / Bomb Cat | [`bomb-cat/`](./bomb-cat/) | React 19, TypeScript, Vite 5, Tailwind 3 | none (native CSS / SVG / emoji) + 4 wiki fonts |

Each directory is a self-contained project with its own lockfile, config and
`README.md`. They are **not** part of the wiki's own npm project and are not built by
the wiki's CI — the wiki consumes their `dist/` output, which is committed separately
under `public/game-assets/`.

## Quick start

```bash
cd games/breast-guardian   # or: cd games/bomb-cat
npm ci
npm run dev
```

Both default to `base: './'`, so `npm run build` produces a `dist/` you can serve from
any path. See each README for the wiki-embed build (`GAME_BASE_PATH`).

## Where the images come from

Breast Guardian used to ship a 270 MB `public/assets/` tree. It now has **no image
binaries**: every portrait, scene and UI plate resolves through
`games/breast-guardian/src/data/assetUrls.ts` to an official `static.igem.wiki` URL.

That map is **generated** from [`../IGEM_ASSET_REGISTRY.md`](../IGEM_ASSET_REGISTRY.md),
the team's single source of truth for uploaded media. It is never hand-edited and no
URL is ever inferred from a filename:

```bash
cd games/breast-guardian
npm run assets:regen     # rebuild assetUrls.ts + ASSET_MAPPING.md from the registry
npm run check:assets     # fail if the checked-in map drifted from the registry
npm run check:runtime    # exercise every real call site, assert it resolves
```

Full path → URL table: [`breast-guardian/ASSET_MAPPING.md`](./breast-guardian/ASSET_MAPPING.md).

Bomb Cat has no image assets at all — see [`bomb-cat/README.md`](./bomb-cat/README.md)
for the evidence and the reasoning.

## Relationship to the deployed wiki

The wiki serves the **compiled** artifacts, committed at:

- Breast Guardian → `public/game-assets/index.html` + `public/game-assets/assets/`
- Bomb Cat → `public/game-assets/bomb-cat/`

This directory is a **downloadable source snapshot**. Those compiled artifacts were
**not** regenerated and were **not** modified — the live site keeps serving the
known-good build. Each game's README has an optional "Deploying" section if you ever
want to replace them.