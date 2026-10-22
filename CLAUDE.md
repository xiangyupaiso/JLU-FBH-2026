# Notes for AI assistants

Read **[README.md](README.md)** first, then follow **[CONTRIBUTING.md](CONTRIBUTING.md)**
and the **[repository map](docs/repository-layout.md)**. Commands and build
boundaries are in **[docs/development.md](docs/development.md)**; asset sources,
upload batches and CDN mappings are in **[docs/assets.md](docs/assets.md)**.
Check **[scripts/README.md](scripts/README.md)** before running import or asset
tools: several commands overwrite content, catalogs or generated files.

## Responsible & honest use
@.claude/RESPONSIBLE_AI_USE.md

## Guardrails
- Don't change `LICENSE` or the `Footer` component's license notice + GitLab
  repository link (both required on every page for judging).
- `.gitlab-ci.yml` works as-is; change it only if you know what you're doing —
  any build/deploy issues that result are the team's responsibility.
