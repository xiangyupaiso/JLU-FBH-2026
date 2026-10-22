# Script index

[简体中文](README.md) | English

Run these tools from the repository root unless a subproject specifies otherwise. Install root Node dependencies from its lockfile. Python requirements such as Pillow, PDF renderers, Markdown/HTML parsers, or Playwright are identified by each script's imports and instructions.

Most scripts locate inputs through their own path, the working directory, or fixed relative paths. Established entry points stay in place; this index groups them by responsibility. The manual Windows check lives under `manual/`.

## Build and routine checks

| Entry                                                              | Purpose and output                                                                         |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| [postbuild-slug.mjs](postbuild-slug.mjs)                           | Build step writing deployment mappings and upload exclusions in `dist/`                    |
| [verify-page-image-loading.mjs](verify-page-image-loading.mjs)     | Shared image-loading regression tests used by `yarn test:page-loading`                     |
| [verify-home-artwork-loading.mjs](verify-home-artwork-loading.mjs) | Home artwork loading and decoding tests                                                    |
| [verify-page-image-queue.mjs](verify-page-image-queue.mjs)         | Image-queue tests; run separately with an outer timeout because timers can keep it running |
| [verify-peertube-video.mjs](verify-peertube-video.mjs)             | PeerTube integration tests                                                                 |

Routine implementation checks:

```sh
yarn lint
yarn test:page-loading
yarn build
```

Run additional tests as needed, for example `node --test scripts/verify-home-artwork-loading.mjs`. Add browser, touch-device, and hosting checks for changes affecting those environments.

## Focused checks

These tools may create temporary modules or files under `.tmp-verify/`. They compare current pages and source material; content owners review scientific conclusions.

| Entry                                                                            | Coverage                                                                                                            |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| [verify-citations.mjs](verify-citations.mjs)                                     | Citation registry, inline citations, and backlinks                                                                  |
| [verify-design-construct.mjs](verify-design-construct.mjs)                       | Construct-viewer geometry and interaction structure                                                                 |
| [verify-design-render.mjs](verify-design-render.mjs)                             | Design rendering and feature wiring                                                                                 |
| [verify-experiments-render.mjs](verify-experiments-render.mjs)                   | Experiments manuscript correspondence and rendering                                                                 |
| [verify-hardware-faithfulness.mjs](verify-hardware-faithfulness.mjs)             | Hardware manuscript-to-page correspondence                                                                          |
| [verify-measurement-render.mjs](verify-measurement-render.mjs)                   | Measurement ordering, tables, formulas, and citations                                                               |
| [verify-results-faithfulness.mjs](verify-results-faithfulness.mjs)               | Results manuscript-to-page correspondence                                                                           |
| [verify-sustainability-faithfulness.mjs](verify-sustainability-faithfulness.mjs) | Sustainability text, sections, and asset links                                                                      |
| [verify-prose-heading-semantics.mjs](verify-prose-heading-semantics.mjs)         | Prose heading semantics                                                                                             |
| [verify-wiki-numbering.mjs](verify-wiki-numbering.mjs)                           | Shared section numbering and outline structure                                                                      |
| [verify-rpg-runtime.py](verify-rpg-runtime.py)                                   | RPG iframe and dialogue playback; requires a local server and Python Playwright/Chromium                            |
| [verify-publish-assets.mjs](verify-publish-assets.mjs)                           | Binary and embedded-media checks for a source-only release target; the full GitHub repository retains source assets |

Example: `node scripts/verify-citations.mjs`. See the RPG script header for server arguments. Prepare the required environment for browser- or network-dependent checks.

## Asset registration, probing, and analysis

| Entry                                              | Write effects and requirements                                                                                   |
| -------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| [igem-asset-manager.mjs](igem-asset-manager.mjs)   | `scan-all` / `analyze` update the catalog; `update-urls` fills mappings; `export-markdown` rewrites the registry |
| [check-cdn-links.mjs](check-cdn-links.mjs)         | Network probe writing `cdn-dead-links.json`; `full` includes CDN URLs found in source                            |
| [image-size.mjs](image-size.mjs)                   | Read specified files or URLs and print dimensions                                                                |
| [measure-page-weight.mjs](measure-page-weight.mjs) | Generate temporary render probes and report page DOM size                                                        |

Without a subcommand, the asset manager runs `scan-all` and writes files. Choose the intended subcommand before running it. See the [asset guide](../docs/assets.en.md) for uploads and backend targets.

## Content import and generation

These tools write page data or generate interactive content. Some expect a specific historical batch. Read source and destination paths before use.

| Entry                                                                    | Input or purpose                                                                    |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| [import-education.py](import-education.py)                               | Education source Markdown to page sections                                          |
| [import-experiments.py](import-experiments.py)                           | Experiments manuscript to page data; `--check` compares existing output             |
| [import-human-practices.py](import-human-practices.py)                   | Earlier Human Practices manuscript import                                           |
| [import-human-practices-current.py](import-human-practices-current.py)   | Import a specified English manuscript; `current` is part of the historical filename |
| [build-human-practices-tree-copy.py](build-human-practices-tree-copy.py) | Interview manuscript to tree-view text                                              |
| [generate_software_page.py](generate_software_page.py)                   | Software final-manuscript directory to page data and attachments                    |
| [extract-design-construct.py](extract-design-construct.py)               | Extract construct data from delivered HTML                                          |
| [embed-education-interactives.py](embed-education-interactives.py)       | Prepare externally delivered Education interactions                                 |

## Asset processing and historical batch tools

These scripts may convert, crop, or copy assets and rewrite indexes. Some inputs live in an author's Downloads folder or an external delivery directory.

| Entry                                                                            | Inputs, outputs, or requirements                                                                   |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| [prep-missing-uploads.mjs](prep-missing-uploads.mjs)                             | Prepare an earlier missing-asset batch in `upload-ready/`                                          |
| [prepare-alternative-platform-assets.py](prepare-alternative-platform-assets.py) | Convert Alternative Platform source artwork                                                        |
| [prepare-design-assets.py](prepare-design-assets.py)                             | Process Design figures and the EDA report                                                          |
| [prepare-hardware-assets.py](prepare-hardware-assets.py)                         | Convert Hardware source artwork                                                                    |
| [prepare-results-assets.py](prepare-results-assets.py)                           | Historical Results conversion; the script records that the author removed its original input batch |
| [prepare-education-galleries.py](prepare-education-galleries.py)                 | External photo archives to gallery assets and index                                                |
| [prepare-education-pdf-previews.py](prepare-education-pdf-previews.py)           | First-page Education PDF previews                                                                  |
| [prepare-education-upload-batch.py](prepare-education-upload-batch.py)           | Copy assets to an external, fixed-date Education batch                                             |
| [record-education-upload-pattern.py](record-education-upload-pattern.py)         | Write inferred upload-path patterns to catalogs and registry; verify actual URLs                   |
| [prepare-home-supplements.py](prepare-home-supplements.py)                       | Local Downloads artwork to Home assets and manifest                                                |
| [prepare-map-detail-crops.py](prepare-map-detail-crops.py)                       | Crop map details from a specified source and hash                                                  |

Check input directories, intended batches, and output locations, then select the tool needed for the maintenance task.

## Manual environment-specific check

[manual/test-loader-timeout.mjs](manual/test-loader-timeout.mjs) retains the Windows Chrome/CDP check that starts Vite, stalls CDN requests, and observes loader timeout behavior.

Run `node scripts/manual/test-loader-timeout.mjs` from the root. It contains a Windows Chrome path, `yarn.cmd`, `LOCALAPPDATA`, and a fixed debug port. It starts Vite and Chrome and creates a browser profile; check those processes after exiting.
