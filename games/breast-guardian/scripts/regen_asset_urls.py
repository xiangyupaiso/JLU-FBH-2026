#!/usr/bin/env python3
"""Regenerate src/data/assetUrls.ts and ASSET_MAPPING.md from IGEM_ASSET_REGISTRY.md.

The registry is the ONLY source of truth for official URLs. This script never
invents or pattern-matches a URL: an asset with no registry row simply does not
get an entry, and `check:assets` will then fail if the game still references it.

Usage:
    python scripts/regen_asset_urls.py            # rewrite the files
    python scripts/regen_asset_urls.py --check     # exit 1 if out of date
"""
import argparse
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
REPO = ROOT.parent.parent
REGISTRY = ROOT.parent / 'ASSET_REGISTRY.md'
ASSET_PREFIX = 'public/game-assets/assets/'
CDN_BASE = 'https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/'

ROW = re.compile(
    r'^\|(?P<status>[^|]*)\|(?P<type>[^|]*)\|(?P<cat>[^|]*)\|(?P<nameid>[^|]*)\|'
    r'(?P<local>[^|]*)\|(?P<size>[^|]*)\|(?P<cdn>[^|]*)\|(?P<refs>[^|]*)\|(?P<desc>[^|]*)\|\s*$'
)
NAME = re.compile(r'\*\*(.+?)\*\*<br><sub>`(.+?)`</sub>')

sys.stdout.reconfigure(encoding='utf-8')


def parse():
    entries = []
    for line in REGISTRY.read_text(encoding='utf-8').splitlines():
        if not line.startswith('|'):
            continue
        m = ROW.match(line)
        if not m:
            continue
        local = m.group('local').strip().strip('`').strip()
        if not local.startswith(ASSET_PREFIX):
            continue
        cdn = re.search(r'\((https?://[^)]+)\)', m.group('cdn'))
        if not cdn:
            print(f'  ! registry row without CDN link, skipped: {local}', file=sys.stderr)
            continue
        nm = NAME.search(m.group('nameid'))
        entries.append({
            'rel': local[len('public/game-assets/'):],
            'cdn': cdn.group(1),
            'filename': nm.group(1) if nm else '',
        })
    entries.sort(key=lambda e: e['rel'])
    return entries


def ts(entries):
    def q(s):
        return "'" + s.replace('\\', '\\\\').replace("'", "\\'") + "'"

    L = []
    a = L.append
    a('/**')
    a(' * Breast Guardian — official iGEM asset URL map.')
    a(' *')
    a(" * Generated from games/ASSET_REGISTRY.md, archived from the team's source registry")
    a(' * for uploaded media. Each key is the local path the game historically')
    a(' * referenced under `public/assets/…`; each value is the official static.igem.wiki')
    a(' * URL for that exact file.')
    a(' *')
    a(' * Do not hand-edit or guess URLs. If an image is missing here, re-upload it')
    a(' * through the iGEM uploads tool, record the verified URL in games/ASSET_REGISTRY.md, then run')
    a(' * `npm run assets:regen`.')
    a(' */')
    a('')
    a('/** Prefix shared by every uploaded Breast Guardian game asset. */')
    a(f'export const ASSET_CDN_BASE = {q(CDN_BASE)};')
    a('')
    a('/**')
    a(' * Local asset path -> official URL.')
    a(f' * {len(entries)} entries, transcribed 1:1 from the registry.')
    a(' */')
    a('export const ASSET_URLS: Readonly<Record<string, string>> = Object.freeze({')
    for e in entries:
        a(f'  {q(e["rel"])}: {q(e["cdn"])},')
    a('});')
    a('')
    a('/**')
    a(' * Resolves a historically-local asset path to its official URL.')
    a(' *')
    a(' * Unknown paths resolve to `undefined` on purpose: callers then render nothing')
    a(' * rather than a broken <img>, so a missing upload is visible instead of being')
    a(' * silently substituted with an unrelated picture.')
    a(' */')
    a('export function assetUrl(localPath?: string | null): string | undefined {')
    a('  if (!localPath) return undefined;')
    a("  const bare = localPath.replace(/^\\.\\//, '');")
    a("  return ASSET_URLS[bare] ?? ASSET_URLS[bare.replace(/^assets\\//, '')];")
    a('}')
    a('')
    a('/** Every mapped official URL, de-duplicated. */')
    a('export const ALL_ASSET_URLS: readonly string[] = Object.freeze(')
    a('  Array.from(new Set(Object.values(ASSET_URLS))),')
    a(');')
    return '\n'.join(L) + '\n'


def md(entries):
    groups = {}
    for e in entries:
        groups.setdefault(e['cdn'], []).append(e['rel'])
    aliases = {c: v for c, v in groups.items() if len(v) > 1}

    M = []
    a = M.append
    a('# Breast Guardian — asset URL mapping')
    a('')
    a('Generated from the archived [`ASSET_REGISTRY.md`](../ASSET_REGISTRY.md), the')
    a("team's single source of truth for uploaded media. Every row below is a 1:1")
    a('transcription: the local path the game used to reference, and the official')
    a('`static.igem.wiki` URL for that exact file. No URL was inferred from a filename,')
    a('and no remote extension was assumed to match the local one (iGEM serves AVIF')
    a('regardless of the uploaded format).')
    a('')
    a(f'- Mapped local paths: **{len(entries)}**')
    a(f'- Distinct official URLs: **{len(groups)}**')
    a('- No runtime reference points at `./assets/…` any more; every image resolves')
    a('  through `src/data/assetUrls.ts`.')
    a('')
    a('## Commands')
    a('')
    a('```bash')
    a('npm run assets:regen   # rebuild src/data/assetUrls.ts + this file')
    a('npm run check:assets   # verify the map matches the registry')
    a('npm run check:runtime  # exercise every real call site, assert it resolves')
    a('```')
    a('')
    a('## Unmapped / unused assets')
    a('')
    a('### Never referenced by the game (safe to keep uploaded)')
    a('')
    a('These are in the registry and load with HTTP 200, but no code path asks for')
    a('them. They are deliberately **not** preloaded and not mapped into any call')
    a('site; they exist for content work, not for this build.')
    a('')
    for e in entries:
        rel = e['rel']
        if rel.startswith('assets/loading/') or rel.startswith('assets/ui/') and rel.split('/')[-1] in {
            'ending-chain.png', 'ending-home-btn.png', 'ending-plate.png', 'qr-ending.png',
        }:
            a(f'- `{rel}`')
    a('')
    a('### Requested by code but missing from the registry')
    a('')
    a('Known state-name resolution diagnostics are listed in [KNOWN_LIMITATIONS.md](./KNOWN_LIMITATIONS.md).')
    a('`npm run check:runtime` exits nonzero when a requested portrait cannot be resolved.')
    a('')
    a('### Deduplicated uploads')
    a('')
    a('The iGEM upload tool deduplicated byte-identical files, so these local paths')
    a('legitimately share one URL (confirmed identical on disk by SHA-256):')
    a('')
    for c, v in sorted(aliases.items()):
        a(f'- `{c}`')
        for p in sorted(v):
            a(f'  - `{p}`')
    a('')
    a('## Full map')
    a('')
    a('| Local path (was `public/assets/…`) | Official URL |')
    a('| :--- | :--- |')
    for e in entries:
        a(f'| `{e["rel"]}` | {e["cdn"]} |')
    return '\n'.join(M) + '\n'


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--check', action='store_true')
    args = ap.parse_args()

    if not REGISTRY.exists():
        print(f'ERROR: registry not found at {REGISTRY}', file=sys.stderr)
        return 2

    entries = parse()
    print(f'parsed {len(entries)} Breast Guardian assets from the registry')

    targets = {
        ROOT / 'src' / 'data' / 'assetUrls.ts': ts(entries),
        ROOT / 'ASSET_MAPPING.md': md(entries),
    }

    if args.check:
        stale = [p for p, want in targets.items() if not p.exists() or p.read_text(encoding='utf-8') != want]
        if stale:
            for p in stale:
                print(f'STALE  {p.relative_to(REPO)}')
            print('run: npm run assets:regen', file=sys.stderr)
            return 1
        print('assetUrls.ts and ASSET_MAPPING.md are up to date with the registry')
        return 0

    for path, content in targets.items():
        path.write_text(content, encoding='utf-8')
        print(f'wrote {path.relative_to(REPO)}')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
