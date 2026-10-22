# Deployment guide

[简体中文](deployment.md) | English

The project uses GitHub for collaboration, official GitLab for source delivery and Wiki releases, and Cloudflare for build previews. The virtual laboratory is a standalone application hosted on iGEM infrastructure.

## Collaboration and release entry points

| Platform                                                | Role                                                                        |
| ------------------------------------------------------- | --------------------------------------------------------------------------- |
| GitHub                                                  | Everyday development, Pull Requests, code review, and version collaboration |
| [Official GitLab](https://gitlab.igem.org/2026/jlu-fbh) | iGEM Wiki source delivery, pipeline builds, and releases                    |
| [Live Wiki](https://2026.igem.wiki/jlu-fbh/)            | Published website for judges and the public                                 |
| [Development preview](https://wiki.dayquay.com/jlu-fbh/) | Cloudflare previews, including development content not yet synchronized to official GitLab |

Contributors develop on their own working or feature branches and submit Pull Requests to `main`. Branch names follow contributor or team conventions; `main` is the shared integration branch.

For a release, the release maintainer synchronizes the reviewed version to official GitLab's default branch. The GitLab Pages pipeline then builds and publishes the site.

## Preview and official GitLab content differences

Checked on 2026-10-22 (Asia/Shanghai). Official GitLab `main` is [`080a3f54`](https://gitlab.igem.org/2026/jlu-fbh/-/commit/080a3f5484b61482d9e0f26d7b25ff17db13a991). The comparison uses GitHub source after this recovery. The table describes source differences; dayquay deployments may lag behind GitHub, so its URL alone does not identify a deployed commit.

| Area | Additions in GitHub development source | Maintenance entry points |
| --- | --- | --- |
| Visual Design | Eleven initial sketches; 0 / 8 / 16 / 32 px corner comparisons; full screenshots explaining Next page spacing; additional ribbon and historical design assets | [Content](../src/data/project/visualDesignNarrative.ts), [study components](../src/components/wiki/features/project/VisualDesignNarrativePanels.tsx), [spacing figures](../src/components/wiki/features/project/DesignExplanationFigures.tsx) |
| Bomb Cat | Room creation/joining, lobby, connection state, and PeerJS networking; the current entry uses rebuilt runtime assets | [Game UI](../games/bomb-cat/src/CircRnaGame.tsx), [networking](../games/bomb-cat/src/hooks/usePeerNetwork.ts), [source and runtime provenance](../games/SOURCE_PROVENANCE.json) |
| Sustainability Tracker | Restored participant/profile/feedback distinctions, group counts and source metadata, SET / DEVELOP / GROW, and long-term pathway notes; current keyboard and dialog fixes retained | [Embedded team records](../src/assets/wiki/sustainability/tracker/team_example.html), [asset mapping](../src/data/engagement/sustainability/sustainabilityTrackerAssets.ts) |
| Assets and engineering resources | Local assets, manuscripts, provenance, bilingual documentation, and complete buildable standalone source; retained files do not necessarily enter page loading | [Assets](assets.en.md), [games](../games/README.en.md), [laboratory](../virtual-lab/README.en.md) |
| Release configuration | Cloudflare previews and local resources retained; GitLab's source-only global CSP injection and local-media exclusion check are not enabled | [.gitlab-ci.yml](../.gitlab-ci.yml), [wrangler.json](../wrangler.json), [release asset check](../scripts/verify-publish-assets.mjs) |

The live Visual Design pages were also compared on this date. The dayquay preview exposes the four-corner comparison, eleven-sketch entry, and “A screen for the next step, then the logos” spacing study; the official site lacks these additions. Other rows describe source comparisons and do not establish acceptance of every deployed feature.

### Sustainability rollback and recovery source

At **22:49:56 on 2026-10-21**, [`cfc022df`](https://gitlab.igem.org/2026/jlu-fbh/-/commit/cfc022dff8ad12f53a339bcff72ebe6257988cd4) restored the complete tree to [`2999c1ac`](https://gitlab.igem.org/2026/jlu-fbh/-/commit/2999c1acd3f217c818d13f2afb4df7d9c4784714), dated **21:56:14**, overwriting subsequently merged content. The revised Tracker was included in [`0ce850e2`](https://gitlab.igem.org/2026/jlu-fbh/-/commit/0ce850e23c063b7644b878ecdfc40e8084849951), dated **22:25:13**, and remains in the pre-rollback [`050b25bd`](https://gitlab.igem.org/2026/jlu-fbh/-/commit/050b25bd797cfce4831a900ca81edb716430b64b) snapshot.

This recovery restores content and statistical presentation from that snapshot's `team_example.html`, the file actually embedded by Sustainability. Although `circure-tracker-records.html` already retained the revised content, the page still referenced the rolled-back `team_example.html`; keeping the other copy alone did not restore the page.

The recovered version retains the original **66 project participants (including 32 global youth), 38 source profiles, 78 feedback records, and ten framework SDGs**. Group profiles and cross-SDG summaries are not additional individuals. SET covers 3 / 9 / 12; DEVELOP covers 4 / 17; GROW covers 1 / 5 / 8 / 10 / 13. GROW denotes long-term pathways requiring validation; SDG 1 has no separately tagged feedback record. Restoring these existing records and counting definitions does not constitute a new participant audit or validation of long-term impacts.

Current keyboard support, focus containment and return, form labels, and image dimensions are retained. The global font changes from that historical commit are excluded. GitLab and the official site retain their published version; further synchronization belongs to the release maintainer.

## Official Wiki: GitLab Pages

[.gitlab-ci.yml](../.gitlab-ci.yml) defines the pipeline:

1. Use `node:22` and the `yarn.lock` cache.
2. Run `yarn install --frozen-lockfile`.
3. Run `yarn lint`, `yarn test:page-loading`, and `yarn build`.
4. Copy `dist/.` into the CI workspace's `public/`, generate SPA fallback rules, and publish that directory.

The pipeline runs only on GitLab's default branch. The copy is performed in the CI workspace; keep that generated deployment directory out of local source commits.

Release contents include the required source and provenance. Images, fonts, videos, and other resources use official hosting. Handle caches, temporary reports, and local delivery directories according to the release manifest. See the [asset guide](assets.en.md).

## Cloudflare

[wrangler.json](../wrangler.json) points to `./dist` and enables single-page application fallback. `package.json` declares Yarn Classic to keep installation consistent.

`scripts/postbuild-slug.mjs` generates `_redirects` from Vite's resolved base, mapping `/jlu-fbh/` to one output tree. Keep one `dist/`; an extra `dist/jlu-fbh/` copy is unnecessary.

The script also generates `.assetsignore` to exclude oversized files from Cloudflare uploads. Serve those resources through their official CDN mappings and check references and loading in previews.

Maintainers manage build commands, trigger branches, and access settings in Cloudflare. The repository's `wrangler.json` and build scripts configure the output directory and URL mapping.

## Four HTML entries

Vite builds:

- `index.html`
- `visual-design-study.html`
- `archive-navigation-study.html`
- `archive-recognition-study.html`

The final three support design demonstrations or historical interaction studies and remain active build entries. Update build configuration, references, and page integration together when changing their names or locations.

## Subprojects and other hosting

- Building game source leaves the Wiki's checked-in runtime bundles in place; publish replacements explicitly.
- The laboratory is deployed from its official software repository. The Wiki retains source and embeds its deployment. See the [laboratory README](../virtual-lab/README.en.md).
- GitHub Pages does not read Cloudflare's `_redirects`; configure the mount path and SPA fallback separately if using it.

Run the [development checks](development.en.md) before release. After deployment, check Home, major article pages, deep routes, static assets, and iframe entry points.
