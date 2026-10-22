# Development guide

[简体中文](development.md) | English

## Wiki environment and installation

Use Node.js 22.12+ in the 22.x family and Yarn Classic 1.22.22. Official CI uses `node:22`; the root `package.json` declares the package manager.

Run from the repository root:

```sh
yarn install --frozen-lockfile
yarn dev
```

The usual address is `http://localhost:5173/jlu-fbh/`; use the actual terminal URL. Vite reads team configuration to form its base path, and development and preview servers normalize trailing slashes.

The root `package-lock.json` is also retained. An npm workflow uses `npm ci` and `npm run dev`. Keep one installation workflow per dependency directory. Maintain lockfile consistency when changing dependencies; organization work leaves dependency versions intact.

## Routine validation

```sh
yarn lint
yarn test:page-loading
yarn build
yarn preview
```

- `lint`: ESLint, with warnings treated as failures.
- `test:page-loading`: regression tests for shared image readiness and loader behavior.
- `build`: TypeScript checking → multiple-entry Vite build → deployment mapping from `scripts/postbuild-slug.mjs`.
- `preview`: serve the latest `dist/`; rebuild after source changes.
- `format`: Prettier over matching files. Format only relevant files in routine work.

See [scripts/README.en.md](../scripts/README.en.md) for focused checks and requirements. Browser checks for interaction changes cover visible state changes, complete end states, rapid reversal, keyboard use, 320px/390px screens, and reduced motion.

## Editing an article page

Locate the route in `src/pages.ts`, open its `src/contents/*.tsx` assembly, and follow imports to data and features.

1. Maintain text and sections in the relevant `src/data/` file, checking sources in `文案集/`.
2. Use the page's asset dictionary for images and attachments, retaining source-to-CDN mappings.
3. Maintain interaction and visualization in `src/components/wiki/features/`.
4. Follow the [page specification](../WIKI_ARCHITECTURE_SPEC.md) (Chinese) for shared layout, citations, and image readiness.

New pages inherit `WikiRoutePage` Hero and article-image readiness. Declare dialog or inactive-tab images through `preloadImages` or `PageImagePreloads`, using the shared loader.

## Games

See [games/README.en.md](../games/README.en.md). Both games are standalone npm projects:

```sh
cd games/breast-guardian
npm ci
npm run build
npm run preview
```

Bomb Cat uses `games/bomb-cat/`. These commands build the subproject; explicitly update the Wiki's `public/game-assets/` runtime when releasing it. Check entries, asset paths, and provenance.

## Virtual laboratory

See [virtual-lab/README.en.md](../virtual-lab/README.en.md).

```sh
cd virtual-lab
npm ci
npm run dev
```

Run `npm run build` for a production check. The Wiki embeds the standalone official deployment. Root installation and builds leave laboratory dependencies and output separate. Validate the laboratory URL, message-origin checks, and focus return together.

## Organizing files

Record a baseline before moving files and update references afterward. Check build configuration, script paths based on `import.meta.url` or `__file__`, dynamic globs, upload manifests, and documentation links.

For organization-only changes, compare moved-file hashes and relevant build output. Run importers or asset generators only when their content-writing behavior is intended.
