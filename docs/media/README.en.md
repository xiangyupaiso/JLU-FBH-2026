# README showcase assets

[简体中文](README.md) | English

These assets support the repository's README presentation. The website keeps its existing runtime assets and build entries.

`readme-lumi.png` introduces the mascot after the project overview in both language sections of the README. It comes from the [Lumi circular emblem](https://static.igem.wiki/teams/6056/wiki/files/pages/project/art/lumi-circle.avif) used on the Visual Design page, retrieved on 2026-10-22. The decoded AVIF is saved losslessly as PNG, preserving its 1853 × 1853 dimensions, colors, and white background. Both sections display it at 140 × 140 and link to Lumi's design notes.

| File                                                | Source and purpose                                                                                                                                                                                                         |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `readme-language-zh.svg` / `readme-language-en.svg` | Same-page language links with the original purple rounded buttons and arrows, displayed side by side at 112px each.                                                                                                        |
| `readme-visit-wiki-zh.svg` / `readme-visit-wiki-en.svg` | Official Wiki primary buttons for both language sections of the README, using the language buttons' brand purple. Static SVGs with no scripts or external resources; the surrounding link handles navigation. |
| `readme-badge-*.svg`                                | Project metadata: iGEM 2026, React 19.2, TypeScript 5.9, Vite 7.3, and CC BY 4.0. Version families come from the lockfile; the license comes from `LICENSE`. These are not build or research-validation status badges.     |
| `readme-team-marks.svg`                             | Original JLU-FBH crest and iGEM mark from `src/assets/jlu-fbh-crest.png` and `src/assets/partners/sponsor-igem.png`.                                                                                                       |
| `readme-institutions.svg`                           | Original university crest and bilingual wordmark, hospital seal, and clinical college wordmark used by the Wiki footer; two columns share seal sizes and wordmark centerlines, from `src/assets/partners/` and `src/assets/footer/`.                                                                  |
| `readme-acknowledgements.svg`                       | Existing local research-platform and tool marks corresponding to `src/data/footer.ts`, from `src/assets/partners/`.                                                                                                        |
| `circure-cover.svg`                                 | Previous README cover retained as a design reference. The current opening uses the standalone CirCure wordmark.                                                                                                            |
| `circure-wordmark.svg`                              | Reuses all seven CirCure glyph outlines and the viewBox from `src/data/homeIntroWordmark.ts`, with a static brand color for documentation. The original outlines use Kalam Regular (SIL OFL).                              |
| `wiki-circrna.jpg`                                  | Captured on 2026-10-22 from the “Why circular RNA?” scene on the [official Wiki](https://2026.igem.wiki/jlu-fbh/), at 1265 × 712. Original browser screenshot pixels are retained. The scene is a conceptual illustration. |

The Laboratory Animal Center mark comes from the [asset currently used in the Wiki footer](https://static.igem.wiki/teams/6056/wiki/files/pages/shared/laboratory-animal-center-logo.avif), checked on 2026-10-22. It is embedded in `readme-acknowledgements.svg` as a lossless PNG conversion of the AVIF, alongside Core Facility and Translational Medicine in the first row.

Both README languages share these images. Use real pages or existing project assets for updates and maintain captions and provenance together.

Logo panels use SVG only for layout and a white reading surface. Existing files are embedded byte for byte; the Laboratory Animal Center mark uses the PNG conversion described above. Colors, shapes, and proportions are preserved in both light and dark themes. Mark names are also provided as README text.
