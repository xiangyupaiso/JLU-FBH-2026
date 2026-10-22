# Deployment guide

[简体中文](deployment.md) | English

The project uses GitHub for collaboration, official GitLab for source delivery and Wiki releases, and Cloudflare for build previews. The virtual laboratory is a standalone application hosted on iGEM infrastructure.

## Collaboration and release entry points

| Platform                                                | Role                                                                        |
| ------------------------------------------------------- | --------------------------------------------------------------------------- |
| GitHub                                                  | Everyday development, Pull Requests, code review, and version collaboration |
| [Official GitLab](https://gitlab.igem.org/2026/jlu-fbh) | iGEM Wiki source delivery, pipeline builds, and releases                    |
| [Live Wiki](https://2026.igem.wiki/jlu-fbh/)            | Published website for judges and the public                                 |
| Cloudflare                                              | Wiki builds and previews                                                    |

Contributors develop on their own working or feature branches and submit Pull Requests to `main`. Branch names follow contributor or team conventions; `main` is the shared integration branch.

For a release, the release maintainer synchronizes the reviewed version to official GitLab's default branch. The GitLab Pages pipeline then builds and publishes the site.

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
