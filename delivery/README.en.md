# Delivery and upload archives

[简体中文](README.md) | English

This directory retains materials prepared for delivery. Upload batches are maintained separately from Wiki build inputs.

## Asset upload batches

| Batch                                                                                | Contents                                                                    | Backend target                                              |
| ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------- | ----------------------------------------------------------- |
| [Experiments · 2026-10-20](uploads/upload-bundle-experiments-20261020/README.md)     | Workflow and materials figures, source records, and hashes                  | `files/pages/wet-lab/`                                      |
| [New Hero exports](uploads/upload-bundle-new-heroes/README.md)                       | Visual Design / Human Practices PNG and WebP exports                        | `files/pages/hero/`                                         |
| [Visual Design · 2026-10-20](uploads/upload-bundle-visual-design-20261020/README.md) | Retry copies, URL mappings, usage audits, and earlier supplemental material | `files/pages/project/art/`; see batch notes for supplements |

Batch notes and audits retain the records made when files were prepared or uploaded. Before reusing a batch, check backend files and URLs and plan any remaining uploads. Keep internal filenames, manifests, and target hierarchies aligned. Historical batch notes retain their original language.

Add batches under `uploads/<batch-name>/` and update this index. Keep originals at their source locations and maintain page calls through the relevant asset mapping. See the [asset guide](../docs/assets.en.md).

## Game source delivery package

[igem-2026-jlu-fbh-games-source.zip](igem-2026-jlu-fbh-games-source.zip) is an existing source delivery snapshot. Current maintainable, independently buildable source lives in [games/](../games/README.en.md); `SOURCE_PROVENANCE.json` records source and version comparisons.

Editing current game source leaves this ZIP unchanged. Generate and verify a new package explicitly when preparing another delivery.

## Previous paths

The three upload batches were previously at the repository root. See the [repository map](../docs/repository-layout.en.md) for the migration table.
