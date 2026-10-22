<p align="center">
  <a href="README.md" title="阅读中文版 · Read in Chinese">
    <img src="docs/media/readme-language-zh.svg" alt="简体中文 · Read in Chinese" width="128" height="44" />
  </a>
  &nbsp;
  <a href="README.en.md" title="Read the full README in English">
    <img src="docs/media/readme-language-en.svg" alt="English · Read in English" width="128" height="44" />
  </a>
  <br />
  <sub><a href="docs/README.md">中文文档</a> · <a href="docs/README.en.md">English documentation →</a></sub>
</p>

<p align="center">
  <a href="https://2026.igem.wiki/jlu-fbh/">
    <img src="docs/media/circure-wordmark.svg" alt="CirCure" width="340" />
  </a>
</p>

<h1 align="center">JLU-FBH · iGEM 2026</h1>

<p align="center">
  <a href="https://teams.igem.org/6056">
    <img src="docs/media/readme-team-marks.svg" alt="JLU-FBH team crest and iGEM mark" width="180" />
  </a>
</p>

<p align="center">
  <strong>CirCure Official Wiki</strong><br />
  A circRNA vaccine research project for triple-negative breast cancer
</p>

<p align="center">
  <a href="https://2026.igem.wiki/jlu-fbh/"><strong>Wiki ↗</strong></a>
  &nbsp;·&nbsp;
  <a href="#site-modules-and-pages">Pages</a>
  &nbsp;·&nbsp;
  <a href="#quick-start">Quick start</a>
  &nbsp;·&nbsp;
  <a href="CONTRIBUTING.en.md">Contribute</a>
</p>

## Project overview

This repository contains the official Wiki frontend for **JLU-FBH** in the 2026 International Genetically Engineered Machine Competition (**iGEM**), together with page content, asset sources, and reusable application source.

**CirCure** explores an engineered circular RNA (**circRNA**) platform for a multi-target triple-negative breast cancer (**TNBC**) vaccine. The Wiki presents the team's design, experiments, and research through long-form articles, hand-drawn illustrations, scroll-driven storytelling, model visualizations, and interactive science communication.

<details>
<summary><strong>Preview the Wiki</strong> · Hand-painted circRNA scene</summary>

<p align="center">
  <a href="https://2026.igem.wiki/jlu-fbh/">
    <img src="docs/media/wiki-circrna.jpg" alt="The official CirCure Wiki homepage showing its hand-painted conceptual illustration of circular RNA structure, stability, and sustained expression." width="960" />
  </a>
  <br />
  <sub>Official homepage · Conceptual illustration · Open the complete Wiki</sub>
</p>

</details>

## Project links

**Live Wiki** · Published site and project showcase<br />[https://2026.igem.wiki/jlu-fbh/](https://2026.igem.wiki/jlu-fbh/)

**Official GitLab** · Official source and release history<br />[https://gitlab.igem.org/2026/jlu-fbh](https://gitlab.igem.org/2026/jlu-fbh)

**Team dashboard · Team 6056** · Team administration, uploads, and deliverables<br />[https://teams.igem.org/6056](https://teams.igem.org/6056)

Development and Pull Requests take place in this GitHub repository. See the [deployment guide](docs/deployment.en.md) for the roles of GitHub, official GitLab, and website releases.

### Preview and published versions

According to the [official iGEM 2026 calendar](https://competition.igem.org/about/calendar), the official Wiki entered the **Wiki Freeze on October 21, 2026, at 15:00 UTC (23:00 Beijing time, UTC+8)**. Editing is closed during the freeze and will reopen at the Wiki Thaw after the Grand Jamboree.

Supplementary content, restored materials, and further refinements that were not included in the official frozen version remain in this GitHub repository and are presented through the [development preview at `wiki.dayquay.com`](https://wiki.dayquay.com/jlu-fbh/) for readers and future teams to explore. The frozen version at [`2026.igem.wiki/jlu-fbh/`](https://2026.igem.wiki/jlu-fbh/) remains the official competition reference. The environments deploy independently; GitHub changes still need a preview deployment.

## Start here

- Run the project: [Quick start](#quick-start)
- Develop, check, and build: [Development guide](docs/development.en.md)
- Find the right files: [Repository map](docs/repository-layout.en.md)
- Understand hosting environments: [Deployment guide](docs/deployment.en.md)
- Maintain images, manuscripts, CDN mappings, and upload batches: [Asset guide](docs/assets.en.md)
- Browse documentation: [Documentation index](docs/README.en.md)
- Prepare a contribution: [Contributing](CONTRIBUTING.en.md)

On this page: [Technology](#technology-and-core-dependencies) · [Architecture](#architecture-and-development-principles) · [Site map](#site-modules-and-pages) · [Features](#interaction-and-engineering-features) · [Repository structure](#repository-structure-and-build-boundaries) · [Editing guide](#common-editing-locations) · [Deployment](#continuous-integration-and-hosting) · [License](#license-and-attribution)

## Technology and core dependencies

This table summarizes the current technology choices. Root dependency declarations live in [package.json](package.json); lockfiles record resolved versions. Standalone applications maintain their own dependencies.

| Area                         | Technology                                        | Version family                      | Purpose                                                                     |
| ---------------------------- | ------------------------------------------------- | ----------------------------------- | --------------------------------------------------------------------------- |
| Build tooling                | Vite                                              | 7.3.x                               | Local development, hot module replacement, and multiple HTML build entries  |
| Frontend                     | React + TypeScript                                | 19.2.x / 5.9.x                      | Components, type checking, and page data interfaces                         |
| Routing                      | React Router                                      | 7.x                                 | Routes, navigation, redirects, and reading entry points                     |
| Animation                    | GSAP + @gsap/react                                | 3.15.x / 2.1.x                      | Intro strokes, scroll scenes, timelines, and component animation lifecycles |
| Molecular visualization      | Mol\* (Molstar)                                   | 5.13.x                              | WebGL molecular viewers with a separately compiled, on-demand runtime       |
| Data visualization           | Apache ECharts                                    | 6.1.x                               | Charts, legends, range highlighting, and tooltips                           |
| Wiki styling                 | CSS custom properties (design tokens) + Bootstrap | Bootstrap 5.3.x                     | Themes, grids, the shared reader, and page layout                           |
| Laboratory styling and icons | Tailwind CSS + Lucide                             | Tailwind 3.4.x; root Lucide 0.562.x | Laboratory interfaces, icons, and separate styling                          |
| Interaction primitives       | Radix UI                                          | Root Dialog / Tabs 1.x              | Dialogs, tabs, and other basic interactions                                 |
| Engineering checks           | ESLint + Prettier + Node test scripts             | See configuration and lockfiles     | Static analysis, formatting, and focused regression checks                  |

The Wiki, two standalone games, and virtual laboratory have separate build entries. See [build boundaries](#build-boundaries).

## Architecture and development principles

### Page layers: data, assets, interaction, and assembly

The [page architecture specification](WIKI_ARCHITECTURE_SPEC.md) (Chinese) separates four responsibilities:

| Layer            | Typical location                         | Responsibility                                                                                                 |
| ---------------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Page content     | `src/data/[module]/[page]Page.ts`        | Describe text, sections, figures, and links with types such as `WikiPageContent`; keep JSX out of content data |
| Asset mapping    | `src/data/[module]/[page]Assets.ts`      | Connect local sources, images, attachments, and CDN URLs                                                       |
| Page interaction | `src/components/wiki/features/[module]/` | Implement charts, construct viewers, and specialized interactions through feature slots                        |
| Route assembly   | `src/contents/[page].tsx`                | Combine `WikiRoutePage`, page data, Hero artwork, and features in a small assembly layer                       |

New pages follow this structure. Existing `src/data/` files include both root-level files and module directories. Follow actual imports when maintaining an existing page and migrate it as needed.

### Shared reader and maintenance entry points

Content pages reuse `WikiRoutePage` for blocks, images, citations, the outline, and chapter transitions. Shared reader dimensions and layout belong primarily in `src/styles/wiki-route-skin.css`. Module themes live in `route-palette-*.css`; specialized interactions and styles stay with their features.

Maintain page content and asset mappings separately to avoid duplicate sources of the same content. See [common editing locations](#common-editing-locations).

### Standalone applications and style isolation

The Wiki uses the shared reader, CSS themes, and Bootstrap. The virtual laboratory has its own Tailwind styles, dependencies, and build. A lazily loaded iframe embeds the official laboratory deployment, separating the two documents' styles and viewports.

The laboratory uses `window.postMessage` to request closing. The Wiki verifies both the message origin and the iframe window. The nine laboratory pages are split using `React.lazy` and dynamic `import()`; their code is built in the laboratory project.

### Shared image-readiness contract

Route changes use the shared loader. `WikiRoutePage` collects Hero and article images automatically. Declare images in dialogs or inactive tabs through `preloadImages` or `PageImagePreloads` so they are ready when the interaction opens.

New pages inherit the same behavior. See the [image-readiness contract](WIKI_ARCHITECTURE_SPEC.md#471-新页面接入) (Chinese). Run `yarn test:page-loading` after changes and inspect route transitions and interactions in the browser.

## Site modules and pages

Navigation consists of Home and five content groups, with 22 entries besides the homepage. This tree follows [src/pages.ts](src/pages.ts). Paths are relative to the website base `/jlu-fbh/`.

```text
CirCure Wiki
├── Home (/)                                      # Intro and scroll story
├── Team
│   ├── Roster (/roster)                           # Members, instructors, and advisors
│   ├── Attributions (/attributions)               # Contributions and support
│   └── Activities (/activities)                   # Activities and season records
├── Project
│   ├── Description (/description)                 # Background and design rationale
│   ├── Engineering (/engineering)                 # Design–Build–Test–Learn
│   ├── Results (/results)                         # Results and discussion
│   ├── Contribution (/contribution)               # Reusable resources and experience
│   ├── Visual Design (/visual-design)             # Identity, illustration, and interaction
│   ├── Notebook (/notebook)                       # Development and experiment records
│   └── Safety and Security (/safety-and-security)  # Safety and risk management
├── Wet Lab
│   ├── Design (/design)                           # Molecular constructs and experiments
│   ├── Experiments (/experiments)                 # Methods and protocols
│   ├── Measurement (/measurement)                 # Measurement and characterization
│   └── Alternative Platform (/alternative-platform)
├── Dry Lab
│   ├── Model (/model)                             # Models, assumptions, and computation
│   ├── Software (/software)                       # CircuForge and TorusFold
│   ├── Hardware (/hardware)                       # Instruments and hardware
│   └── Games (/games)                             # Interactive learning portal
│       ├── Virtual Laboratory                    # Nine molecular biology experiments
│       ├── Breast Guardian RPG                   # Breast-health narrative game
│       ├── Bomb Cat                              # circRNA strategy cards
│       └── Bio Memory Match                      # Biology memory matching
└── Engagement
    ├── Entrepreneurship (/entrepreneurship)       # Business case and adoption pathway
    ├── Human Practices (/human-practices)         # Stakeholder interviews and feedback
    ├── Education (/education)                    # Outreach, teaching, and exchange
    └── Sustainability (/sustainability)          # SDGs and impact assessment
```

`/team` redirects to `/roster`; `/attribution` is an alias for `/attributions`.

This map describes the website's organization. Each page provides the evidence, assumptions, and scope for its scientific content.

## Interaction and engineering features

### Opening sequence and scroll story

The homepage combines SVG strokes, Canvas particles, and GSAP timelines in the CirCure signature intro. The TNBC exploration map, antigen switcher, circRNA illustrations, and scene transitions guide readers from the problem to the design.

The implementation lives mainly in `src/components/home/`, homepage data in `src/data/`, and styles such as `src/styles/home-*.css`. Home has its own narrative layout; article routes use the shared reader and module themes.

### Hand-drawn Hero artwork and long-form reading

Pages use hand-drawn Hero artwork and an ink-wash watercolor visual style. When an illustration already includes its title, `hideHeroCopy` controls the visible text while retaining a semantic `h1` for assistive technologies.

The shared reader includes the marker-style `WikiLineSidebar`, section navigation, inline charts and citations, and the closing `WikiNextRecord` link. Deeper outline entries normally expand around the current reading position; some pages show the full outline.

Team, Project, Wet Lab, Dry Lab, and Engagement maintain their own palettes. Primary, soft, and base colors work alongside heading and marker tokens. See the [design and typography specification](文案集/Wiki-设计与排版规范.md) (Chinese).

### Virtual molecular biology laboratory

The [live laboratory](https://virtual-lab-208fd4.igem.wiki/) contains nine guided experiments, organized into Beginner, Intermediate, and Advanced levels. The Wiki retains the [complete laboratory source](virtual-lab/README.en.md) and embeds its official deployment. The [official software repository](https://gitlab.igem.org/2026/software/jlu-fbh/virtual-lab) manages that application's deployment.

| Level        | Experiment                                               | Learning topics                                              |
| ------------ | -------------------------------------------------------- | ------------------------------------------------------------ |
| Beginner     | 1 · Revival and activation of E. coli DH5α               | Frozen stock, aseptic technique, streaking, and culture      |
| Beginner     | 2 · Colony morphology and Gram staining                  | Smears, fixation, staining, decolorization, and microscopy   |
| Beginner     | 3 · pET-28a miniprep and agarose gel electrophoresis     | Plasmid extraction, column purification, and electrophoresis |
| Beginner     | 4 · GFP fragment gel extraction                          | Gel cutting, dissolution, binding, washing, and purification |
| Intermediate | 5 · GFP PCR and product verification                     | Reaction setup, thermal cycling, and gel verification        |
| Intermediate | 6 · Double digestion of pET-28a and GFP                  | Restriction digestion of vector and insert                   |
| Intermediate | 7 · Recombinant plasmid ligation                         | Vector-to-insert ratios and T4 DNA ligase                    |
| Advanced     | 8 · Competent cells and transformation                   | Competent cells, heat shock, and plate culture               |
| Advanced     | 9 · Colony PCR, GFP fluorescence, and protein expression | Clone screening, fluorescence, and protein detection         |

Equipment includes pipettes, centrifuges, thermal cyclers, electrophoresis, and imaging tools. StepIndicator, hints, and InfoPanel provide procedural, equipment, and reagent information. Experiment pages offer restart controls and landscape prompts on small portrait screens. Course content and viewport interactions remain in the standalone project.

### Science communication games

The `/games` portal groups the laboratory and three games, loading each experience when selected:

- **Breast Guardian RPG** introduces breast-health concepts through characters and situations across life stages.
- **Bomb Cat** is a circRNA-themed strategy card game with local bots, online rooms, and a rulebook.
- **Bio Memory Match** introduces biological concepts through specimen-card observation, recall, and matching.

Buildable source for Breast Guardian and Bomb Cat lives in `games/`. Bio Memory runs from `public/game-assets/bio-memory/`. See [games/README.en.md](games/README.en.md) for source provenance, version comparisons, and build instructions.

### Molecular and data visualization

The Model page uses Mol\* to display the Trop2 complex, with rotation, zoom, segment focus, surface visibility, and polar-contact controls. The molecular runtime and PDB load when the reader approaches the figure.

ECharts and related components provide model charts, legends, and interactive tooltips. These viewers present the data and models described on the page; structural visualization alone does not establish experimental validation.

### Navigation, cursor, and reading tools

Shared features include responsive navigation, in-page search, back-to-top controls, the footer, and a sheep cursor. The cursor is enabled according to fine-pointer, hover, and reduced-motion settings, while applicable input areas retain native cursor behavior.

Changes to shared components should cover transitions between Home and article pages, narrow viewports, keyboard use, and reduced-motion preferences.

### Asset sources and official hosting

Published pages use official images, fonts, and attachments on `static.igem.wiki`. The repository also retains local assets, manuscripts, and source mappings. Use the relevant asset dictionary and registry, and retain official hosting entries for videos and standalone applications.

Upload copies and historical checks live in `delivery/uploads/`. See the [asset guide](docs/assets.en.md) for source files, expected URLs, upload records, and maintenance.

## Repository structure and build boundaries

### Directory entry points

```text
.
├── src/                              # Wiki source
│   ├── assets/                       # Home, navigation, illustrations, and figures
│   ├── components/
│   │   ├── home/                     # Intro and homepage story
│   │   ├── wiki/                     # Shared reader and feature components
│   │   ├── VirtualLaboratory/         # Laboratory iframe integration
│   │   ├── BreastGuardianGame/        # RPG integration
│   │   ├── BombCatGame/               # Card game integration
│   │   └── BioMemoryGame/             # Memory game integration
│   ├── containers/App/               # App host, routes, and shared components
│   ├── contents/                     # Route assembly
│   ├── data/                         # Content, citations, sections, and asset mappings
│   ├── hooks/                        # Shared hooks
│   ├── styles/                       # Themes, reader, and page styles
│   ├── utils/                        # Loading, paths, and other utilities
│   ├── main.tsx                      # Application entry
│   └── pages.ts                      # Page and navigation groups
├── public/                           # Static files published at their existing paths
│   ├── assets/                       # Images, documents, and other static resources
│   ├── game-assets/                  # Game runtime files used by the Wiki
│   └── vendor/                       # Retained third-party runtimes
├── games/                            # Two independently buildable game projects
├── virtual-lab/                      # Standalone laboratory
│   ├── src/                          # Equipment, steps, catalog, and experiment pages
│   ├── public/                       # Course players and related static files
│   └── package.json / package-lock.json
├── 文案集/                            # Manuscripts, original attachments, and design sources
├── scripts/                          # Build, checks, imports, and asset processing
│   └── manual/                       # Environment-specific manual checks
├── docs/                             # Guides, content references, and historical reviews
├── delivery/                         # Delivery archives
│   └── uploads/                      # Upload batches and manifests
├── WIKI_ARCHITECTURE_SPEC.md          # Page specification and image-readiness contract
├── IGEM_ASSET_REGISTRY.md             # Asset registry
├── .gitlab-ci.yml                    # Official GitLab Pages pipeline
├── wrangler.json                     # Cloudflare static asset configuration
├── eslint.config.js                  # ESLint configuration
├── package.json / yarn.lock          # Root scripts, dependencies, and Yarn lockfile
├── package-lock.json                 # Retained npm lockfile
├── tsconfig.json / tsconfig.node.json
└── vite.config.ts                    # HTML entries, molecular runtime, and base path
```

The root files `index.html`, `visual-design-study.html`, `archive-navigation-study.html`, and `archive-recognition-study.html` are active build entries. Review references before moving files whose names contain `archive`.

`.env` contains existing team metadata and build inputs; keep secrets out of it. `.dockerignore` filters local build contexts. See the [repository map](docs/repository-layout.en.md) for other root files and migration records.

### Build boundaries

| Application                | Development entry                                    | Root build behavior                                                                   |
| -------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Wiki                       | `src/`, `yarn dev`                                   | Type-check, build four HTML entries, and generate path mappings                       |
| Breast Guardian / Bomb Cat | [games/README.en.md](games/README.en.md)             | Publish checked-in files in `public/game-assets/`; game source is built separately    |
| Virtual Laboratory         | [virtual-lab/README.en.md](virtual-lab/README.en.md) | Embed the official laboratory deployment; build and release the laboratory separately |

Subprojects maintain their own dependencies, lockfiles, and licenses. Read their README files before development. Keep laboratory output in its own project and explicitly update the Wiki's runtime game files when publishing a rebuilt game.

## Common editing locations

| Change                                  | Entry point                                                                        |
| --------------------------------------- | ---------------------------------------------------------------------------------- |
| Routes and navigation targets           | `src/pages.ts`, `src/contents/`                                                    |
| Text, sections, and figure descriptions | The relevant module in `src/data/`                                                 |
| Image and attachment mappings           | The relevant `*Assets.ts`, `src/data/assets/`                                      |
| Page-specific interactions and charts   | `src/components/wiki/features/`                                                    |
| Home story and animation                | `src/components/home/`, homepage data, and related `home-*.css`                    |
| Shared reader and article layout        | `src/components/wiki/`, `src/styles/wiki-route-skin.css`                           |
| Module palettes and heading colors      | `src/styles/route-palette-*.css`                                                   |
| Shared loading and image readiness      | `src/utils/`; follow the [page specification](WIKI_ARCHITECTURE_SPEC.md) (Chinese) |
| Asset sources and upload records        | [Asset guide](docs/assets.en.md), [delivery index](delivery/README.en.md)          |
| Tool purpose, inputs, and write effects | [scripts/README.en.md](scripts/README.en.md)                                       |

Importers and asset generators can overwrite content or indexes. Read their instructions before running them. Changes to scientific manuscripts, experimental parameters, formulas, and evaluation metrics require content-owner review.

## Quick start

### Environment and dependencies

For the Wiki, use Node.js 22.12+ within the 22.x release family and Yarn Classic 1.22.22, matching the official CI's Node 22 major version. `package.json` declares the package manager.

From the repository root:

```sh
yarn install --frozen-lockfile
yarn dev
```

Open the URL printed by the terminal, normally `http://localhost:5173/jlu-fbh/`.

The root npm lockfile is also retained. For npm, use `npm ci` and `npm run <script>`. Use one installation workflow per dependency directory and handle dependency upgrades separately.

### Check, build, and preview

```sh
yarn lint
yarn test:page-loading
yarn build
yarn preview
```

The build runs TypeScript checking, Vite, and `scripts/postbuild-slug.mjs`. Output in `dist/` includes Wiki and design-study HTML entries. The Mol\* runtime is compiled separately.

`yarn format` rewrites all matching files; format only relevant files during routine work. See the [development guide](docs/development.en.md) and [script index](scripts/README.en.md) for focused content and browser checks.

### Standalone projects

```sh
# Start the laboratory in a separate terminal.
cd virtual-lab
npm ci
npm run dev
```

The laboratory's production output goes into its ignored `virtual-lab/dist/`. The root development server serves the Wiki. Install and build the two games inside `games/breast-guardian/` and `games/bomb-cat/`, following their README files.

## Continuous integration and hosting

### GitHub collaboration and official GitLab releases

Contributors develop on their own working or feature branches, discuss and review changes through Pull Requests, and integrate them into the shared `main` branch. Branch naming follows contributor or module-team conventions.

GitHub supports everyday collaboration and code review. Official GitLab supports iGEM source delivery and Wiki releases. The release maintainer synchronizes reviewed versions to official GitLab according to the team's release plan, where the pipeline builds and publishes the site.

The current [.gitlab-ci.yml](.gitlab-ci.yml) runs on GitLab's default branch:

```text
Node 22
  → yarn install --frozen-lockfile
  → yarn lint
  → yarn test:page-loading
  → yarn build
  → copy dist/. into the CI public/ directory, generate SPA fallback, and publish
```

The copy takes place in the CI workspace. Keep the resulting deployment directory out of local source commits. See the [deployment guide](docs/deployment.en.md) for release contents and source-only asset checks.

### Yarn Classic and installation consistency

`package.json` declares `yarn@1.22.22`; the official pipeline uses `--frozen-lockfile`. Retain this declaration to avoid lockfile migration by another Yarn major version. Subprojects use their own dependencies and lockfiles.

### One output tree and path mapping

`scripts/postbuild-slug.mjs` reads Vite's resolved base and generates Cloudflare `_redirects` inside a single `dist/` output tree. Core rules for the default team path are:

```text
/ /jlu-fbh/ 302
/jlu-fbh /jlu-fbh/ 301
/jlu-fbh/* /:splat 200
```

Additional rules canonicalize HTML and directory entries. Vite preview and official GitLab Pages mount output at the base path. [wrangler.json](wrangler.json) points Cloudflare at `./dist` with SPA fallback. An extra `dist/jlu-fbh/` copy is unnecessary.

When needed, the script generates `.assetsignore` to exclude files above 25 MiB from Cloudflare uploads. Local files and GitLab output remain intact; review actual references and CDN URLs for excluded resources.

GitHub Pages does not read Cloudflare's `_redirects`. Configure its mount path and deep-route fallback separately if using that host.

### TypeScript asset indexes and configuration

Asset dictionaries such as `contributionAssets.ts`, `resultsAssets.ts`, and `designAssets.ts` connect resources to pages. Earlier fixes addressed broad key indexing and `never` inference. Continue validating changes through TypeScript and build checks.

`wrangler.json` configures Cloudflare; `.gitlab-ci.yml` controls official Wiki builds; `.dockerignore` filters Docker contexts. Maintain each configuration for its environment.

## Team and acknowledgements

We thank the university, clinical institutions, research platforms, and supporters who helped the team. See the Wiki's [Attributions](https://2026.igem.wiki/jlu-fbh/attributions) page for individual contributions and forms of support.

<p align="center">
  <img src="docs/media/readme-institutions.svg" alt="Jilin University; The First Bethune Hospital of Jilin University; The First Bethune Clinical Medical College of Jilin University." width="640" />
</p>

<p align="center">
  <strong>Jilin University</strong><br />
  The First Bethune Hospital of Jilin University<br />
  The First Bethune Clinical Medical College of Jilin University
</p>

### Research platforms and tools

<p align="center">
  <img src="docs/media/readme-acknowledgements.svg" alt="Acknowledgements from the Wiki footer: Core Facility, Institute of Translational Medicine, Charles River, BioRender, MathWorks, Lark, Grammarly, and Schrödinger." width="640" />
</p>

These marks come from the existing Wiki footer. Research platforms include the Core Facility and Institute of Translational Medicine at the First Hospital of Jilin University. Tools and other supporters include Charles River, BioRender, MathWorks, Lark, Grammarly, and Schrödinger.

## License and attribution

The root repository uses [CC BY 4.0](LICENSE). Retain the required attribution and license terms when using, sharing, or modifying the work. Third-party assets, dependencies, and standalone applications retain their own licensing requirements.

Preserve the shared footer's license notice and official GitLab repository link. AI-assisted work also follows [Contributing](CONTRIBUTING.en.md) and the [responsible-use guidance](.claude/RESPONSIBLE_AI_USE.en.md).
