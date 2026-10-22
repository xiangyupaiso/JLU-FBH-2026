# Repository map

[简体中文](repository-layout.md) | English

The repository holds the running website, standalone applications, content sources, and delivery records. Use directory responsibilities to navigate and retain paths referenced by code or scripts.

## Wiki source

| Path                                | Responsibility                                                    |
| ----------------------------------- | ----------------------------------------------------------------- |
| `src/main.tsx`, `src/containers/`   | Mounting, application host, and containers                        |
| `src/pages.ts`, `src/contents/`     | Routes and page assembly                                          |
| `src/data/`                         | Text, sections, citations, asset mappings, and page data          |
| `src/components/wiki/`              | Shared reader and page interactions under `features/`             |
| `src/components/home/`              | Homepage scenes and storytelling                                  |
| Other `src/components/` directories | Navigation, footer, game integrations, and laboratory integration |
| `src/styles/`                       | Shared themes, page styles, and feature styles                    |
| `src/hooks/`, `src/utils/`          | Shared hooks, asset readiness, and utilities                      |
| `src/assets/`                       | Local assets imported or collected by Vite                        |
| `public/`                           | Static files copied to output at their existing paths             |

`src/data/` currently contains both root-level files and module directories. Follow imports from route assembly. New pages follow the [page specification](../WIKI_ARCHITECTURE_SPEC.md) (Chinese); consolidate older pages when maintaining them.

`public/` paths affect public URLs. Assets may also be referenced through dynamic globs, HTML plates, or enlarged-image links. Include those references when checking usage.

## Standalone applications and runtime files

- `games/breast-guardian/` and `games/bomb-cat/`: buildable source, dependencies, and provenance for each game.
- `public/game-assets/`: game runtimes published by the Wiki; rebuilding source leaves these files in place.
- `src/components/BreastGuardianGame/`, `BombCatGame/`, and `BioMemoryGame/`: Wiki integration components.
- `virtual-lab/`: complete laboratory source and course players. The Wiki embeds its official deployment through `src/components/VirtualLaboratory/`.

Read [games/README.en.md](../games/README.en.md) or [virtual-lab/README.en.md](../virtual-lab/README.en.md) before development.

## Sources, delivery, and documentation

| Path                                          | Responsibility                                                                          |
| --------------------------------------------- | --------------------------------------------------------------------------------------- |
| `文案集/`                                     | Manuscripts, original attachments, and design sources read by some importers and checks |
| `src/data/assets/`                            | Asset catalogs and related data                                                         |
| `IGEM_ASSET_REGISTRY.md`                      | Human-readable asset registry                                                           |
| `delivery/uploads/`                           | Upload batches, manifests, and historical checks                                        |
| `delivery/igem-2026-jlu-fbh-games-source.zip` | Historical game delivery package; current source lives in `games/`                      |
| `docs/`                                       | Guides, content references, and historical reviews                                      |
| `scripts/`                                    | Existing tool entry points; see the [script index](../scripts/README.en.md)             |
| `scripts/manual/`                             | Manual or environment-specific checks                                                   |

## Retained root files

- HTML entries: `index.html`, `visual-design-study.html`, `archive-navigation-study.html`, `archive-recognition-study.html`.
- Build and checking configuration: `vite.config.ts`, `tsconfig*.json`, `eslint.config.js`.
- Dependencies: `package.json`, `yarn.lock`, `package-lock.json`.
- Deployment: `.gitlab-ci.yml`, `wrangler.json`, `.dockerignore`.
- Team and tool guidance: `LICENSE`, `CLAUDE.md`, `.claude/`, `.gitattributes`, `.gitignore`.
- Page and asset references: `WIKI_ARCHITECTURE_SPEC.md`, `IGEM_ASSET_REGISTRY.md`, retained for existing references.
- The tracked `.env` is an existing build input. Keep secrets out of it; local-only configuration follows `*.local` ignore rules.
- The tracked `tsconfig.tsbuildinfo` is an earlier generated file. New build caches are ignored; ignore rules leave tracked files in place.

## Path migration: 2026-10-22

| Previous path                                                | Current path                                                                                                                 |
| ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| `ARCHITECTURE_ANALYSIS_REPORT.md`                            | [docs/reviews/architecture-analysis.md](reviews/architecture-analysis.md)                                                    |
| `CircuForge and TorusFold - Software (JLU-FBH iGEM 2026).md` | [docs/content/software-source.md](content/software-source.md)                                                                |
| `test-loader-timeout.mjs`                                    | [scripts/manual/test-loader-timeout.mjs](../scripts/manual/test-loader-timeout.mjs)                                          |
| `upload-bundle-experiments-20261020/`                        | [delivery/uploads/upload-bundle-experiments-20261020/](../delivery/uploads/upload-bundle-experiments-20261020/README.md)     |
| `upload-bundle-new-heroes/`                                  | [delivery/uploads/upload-bundle-new-heroes/](../delivery/uploads/upload-bundle-new-heroes/README.md)                         |
| `upload-bundle-visual-design-20261020/`                      | [delivery/uploads/upload-bundle-visual-design-20261020/](../delivery/uploads/upload-bundle-visual-design-20261020/README.md) |

The migration retained internal batch paths, filenames, backend targets, and manifests. Source code, website assets, manuscripts, lockfiles, and HTML entries kept their paths. Historical reviews and batch records retain their original language.
