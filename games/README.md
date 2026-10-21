# Reusable game source snapshots

Buildable source for the two standalone games used by the JLU-FBH wiki:

| Game | Source | Build output used by the wiki |
| --- | --- | --- |
| Breast Guardian | `breast-guardian/` | `public/game-assets/` |
| circRNA Bomb Cat | `bomb-cat/` | `public/game-assets/bomb-cat/` |

These are independent npm projects. The wiki root build serves the checked-in game
bundles; it does not build these source projects automatically. Bio Memory is served
as HTML in `public/game-assets/bio-memory/`. Virtual Laboratory's complete subproject
is in `virtual-lab/`; its iframe bridge is in `src/components/VirtualLaboratory/`.

## Build either project

Use Node.js 20.19+ or 22.12+ (verified with Node 24.16.0 and npm 12.2.0):

```sh
cd games/breast-guardian # or games/bomb-cat
npm ci
npm run build
npm run preview
```

Each project includes its lockfile, TypeScript and Vite configuration. Output uses
relative URLs and can be served under the wiki's `/jlu-fbh/` path. These commands do
not replace the wiki's deployed bundles.

## Assets and license

This GitHub checkout retains its local media sources. Breast Guardian resolves its
art through `src/data/assetUrls.ts`; Bomb Cat uses its official CDN cover, four wiki
fonts, CSS, inline SVG and emoji. The exact uploaded URLs are preserved in
[`ASSET_REGISTRY.md`](./ASSET_REGISTRY.md), a 206-row game-only excerpt of the team's
source registry. All downloaded dependencies retain their own licenses. Project
source follows the repository's [CC BY 4.0 license](./LICENSE).

For Breast Guardian, asset checks and regeneration also work from this archive:

```sh
npm run check:assets   # Python 3.9+, compare map with the archived registry
npm run check:runtime  # resolve actual scene/portrait/preload call sites
npm run assets:regen   # regenerate only after adding verified uploaded URLs
```

## Provenance and published version comparison

Archived 2026-10-21 from Official-wiki, last game-source commit
`f76d5f220c29a48820cdae57c260c3e724a0ef53`. Both original snapshots passed a clean
lockfile installation and production build. After normalizing Windows line endings,
all six Breast Guardian output files matched the published files. Bomb Cat's main
JavaScript and PeerJS chunk matched the current bundle including its CDN cover
correction; its rebuilt CSS only added the unused `.static{position:static}` rule.
Vite output filenames can differ after the cover URL change even when script text
matches. See [`SOURCE_PROVENANCE.json`](./SOURCE_PROVENANCE.json) for hashes.

The archive then received type annotations, helper-module splits, declaration scopes
and portable asset-check paths needed for the repository's lint gate. The game rules,
story data, state transitions and assets were preserved. The archive is a reusable
source snapshot; the original archive did not replace published bundles. On 2026-10-22 the GitHub integration rebuilt both active Wiki entries from the integrated source while retaining Bomb Cat online play and its locked PeerJS dependency. The original archive hashes above are historical; current output hashes are in the `github_integration` entry of `SOURCE_PROVENANCE.json`.
