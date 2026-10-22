# Contributing

[简体中文](CONTRIBUTING.md) | English

Start with the [README](README.en.md), [repository map](docs/repository-layout.en.md), and [page architecture specification](WIKI_ARCHITECTURE_SPEC.md) (Chinese).

## Before editing

1. Use `git status --short` to identify existing work. Use a separate worktree for organization or broad maintenance when sharing a checkout.
2. Identify whether the change concerns page text, interaction, styling, manuscripts, assets, or build configuration.
3. Check callers and references. Names containing `archive`, `study`, `old`, or a date do not establish that a file is unused.

## Pages and assets

- Maintain article content in `src/data/`, route assembly in `src/contents/`, and interaction in the relevant feature component. Follow the page specification for new pages.
- Keep scientific manuscripts, experimental parameters, formulas, metrics, and results unchanged during code organization. Refer content questions to the relevant owner.
- `文案集/` retains sources; `src/data/` defines page presentation; asset catalogs connect files to CDN URLs. Keep these layers aligned.
- Put new upload batches in `delivery/uploads/<batch-name>/`, with sources, purpose, target folder, and a manifest. Record actual CDN URLs after verifying uploads.
- Retain subproject licenses and source provenance. Preserve the root license and the shared footer's official GitLab link.
- AI-assisted work also follows [responsible-use guidance](.claude/RESPONSIBLE_AI_USE.en.md).

## Scripts and dependencies

- Run root scripts from the repository root and consult [scripts/README.en.md](scripts/README.en.md). Importers, generators, and asset tools may overwrite files.
- Keep established script entry points. When moving a script, update package scripts, CI, relative paths, temporary outputs, and examples.
- The Wiki uses Yarn Classic 1.22.22; subprojects follow their own README and lockfile. Explain dependency upgrades separately.
- `yarn format` rewrites matching files. Format only files involved in the change during routine work.

## Validation before submission

For Wiki implementation changes, run:

```sh
yarn lint
yarn test:page-loading
yarn build
```

Add relevant [focused checks](scripts/README.en.md). For interaction changes, cover complete end states, reversal, keyboard use, narrow screens, and reduced motion.

For documentation-only changes, check content, links, and formatting. For file moves, also check references and relevant build output. Content owners review scientific material; interaction changes receive browser validation.

## Branches, review, and release

Contributors can use their own working branches for a page, feature, or maintenance task and submit Pull Requests to the shared `main` branch. Branch naming follows existing team conventions.

A Pull Request should explain its purpose, affected pages, and validation. Invite relevant collaborators to review it. Exclude other contributors' uncommitted work, caches, and temporary reports. Resolve review feedback and pass applicable checks before merging.

The release maintainer synchronizes reviewed versions to official GitLab according to the team's release plan. See the [deployment guide](docs/deployment.en.md) for environment roles and builds.

## Documentation languages

Maintenance guides default to Chinese, with an English `*.en.md` sibling. Update both versions when changing purpose, commands, or workflows. Keep file paths, commands, API names, and numerical values consistent. Scientific manuscripts, generated asset registries, and historical audits retain their source language.
