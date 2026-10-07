"""One-off extractor: construct-architecture.html -> src/data/wet-lab/designConstruct.ts

The delivered viewer ships its content as vanilla-JS literals (a 5,267 bp sequence
string, a `PARTS` array of element builders, a `SITES` array and a category
palette). This script lifts them verbatim into the page's pure-data layer so the
React port renders exactly the same construct. Run it again only if the source
HTML is re-delivered; it is not part of the build.
"""

from __future__ import annotations

import html
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "文案集" / "wetlab" / "design" / "construct-architecture.html"
OUT = ROOT / "src" / "data" / "wet-lab" / "designConstruct.ts"

src = SRC.read_text(encoding="utf-8")

# ---------------------------------------------------------------- sequence
seq = re.search(r'var SEQ = "([^"]*)"', src).group(1)
assert len(seq) == 5267, len(seq)
assert set(seq) <= set("ACGTN"), sorted(set(seq) - set("ACGTN"))

# ---------------------------------------------------------------- palette
cat_block = re.search(r"var CAT = \{(.*?)\n\};", src, re.S).group(1)
categories = [
    {"key": key, "fill": fill, "stroke": stroke, "label": label}
    for key, fill, stroke, label in re.findall(
        r'(\w+)\s*:\s*\{c:"(#[0-9A-Fa-f]{6})",\s*s:"(#[0-9A-Fa-f]{6})",\s*n:"([^"]*)"\}',
        cat_block,
    )
]
assert len(categories) == 11, len(categories)

# ---------------------------------------------------------------- cut sites
sites_block = re.search(r"var SITES = \[(.*?)\n\];", src, re.S).group(1)
SITE_RE = re.compile(
    r'\{id:"(?P<id>[^"]+)",\s*name:"(?P<name>(?:[^"\\]|\\.)*)",\s*'
    r'rec:"(?P<rec>[^"]+)",\s*start:(?P<start>\d+),\s*end:(?P<end>\d+),\s*'
    r'cut:(?P<cut>\d+),\s*cutB:(?P<cutB>\d+),\s*'
    r'note:"(?P<note>(?:[^"\\]|\\.)*)"\}',
    re.S,
)
sites = []
for m in SITE_RE.finditer(sites_block):
    d = m.groupdict()
    sites.append(
        {
            "id": d["id"],
            "name": d["name"],
            "recognition": d["rec"],
            "start": int(d["start"]),
            "end": int(d["end"]),
            "cut": int(d["cut"]),
            "cutBottom": int(d["cutB"]),
            "note": html.unescape(d["note"].replace('\\"', '"')),
        }
    )
assert len(sites) == 7, len(sites)

# ---------------------------------------------------------------- elements
PARTS_RE = re.compile(
    r'P\("(?P<id>[^"]+)",\s*"(?P<name>(?:[^"\\]|\\.)*)",\s*'
    r'"(?P<short>(?:[^"\\]|\\.)*)",\s*(?P<start>\d+),\s*(?P<end>\d+),\s*'
    r'(?P<strand>-?\d+),\s*"(?P<category>\w+)",\s*'
    r'(?P<bba>null|"[^"]*"),\s*"(?P<desc>(?:[^"\\]|\\.)*)"\)',
    re.S,
)
elements = []
for m in PARTS_RE.finditer(src):
    d = m.groupdict()
    bba = d["bba"]
    elements.append(
        {
            "id": d["id"],
            "name": html.unescape(d["name"].replace('\\"', '"')),
            "shortLabel": html.unescape(d["short"].replace('\\"', '"')),
            "start": int(d["start"]),
            "end": int(d["end"]),
            "strand": int(d["strand"]),
            "category": d["category"],
            "partBba": None if bba == "null" else bba.strip('"'),
            "description": html.unescape(d["desc"].replace('\\"', '"')),
        }
    )
assert len(elements) == 39, len(elements)
assert len({e["id"] for e in elements}) == len(elements)

overview = html.unescape(
    re.search(r'var OVERVIEW =\s*"((?:[^"\\]|\\.)*)";', src, re.S).group(1).replace('\\"', '"')
)


def ts(value: object) -> str:
    return json.dumps(value, ensure_ascii=False)


def block(items: list[dict], indent: str = "  ") -> str:
    return ",\n".join(
        indent + "  { " + ", ".join(f"{k}: {ts(v)}" for k, v in item.items()) + " }"
        for item in items
    )


header = '''/**
 * Pure data for the `pCirCure-circMEV` construct architecture viewer.
 *
 * Lifted verbatim from the team's `construct-architecture.html` delivery by
 * `scripts/extract-design-construct.py`: the 5,267 bp template sequence, the 39
 * annotated elements, the 7 unique cutters and the element-category palette.
 * Every `description` / `name` string carries the author's original inline
 * markup (italicised gene names, monospaced peptide runs) and is rendered as
 * such by the viewer — these are build-time constants, never user input.
 *
 * No React, no JSX: coordinates here are the single source of truth for both
 * the circular map and the sequence browser.
 */

export interface ConstructElement {
  id: string;
  /** Full element name, may carry inline `<em>` / `<span class="cc-aa">` markup. */
  name: string;
  /** Compact label used on the map and on sequence feature bars. */
  shortLabel: string;
  /** 1-based first base, inclusive. */
  start: number;
  /** 1-based last base, inclusive. */
  end: number;
  /** +1 sense, -1 antisense. */
  strand: number;
  category: ConstructCategoryKey;
  /** iGEM Registry part number, when the element is registered. */
  partBba: string | null;
  description: string;
}

export interface ConstructSite {
  id: string;
  name: string;
  /** Recognition sequence, e.g. `ACCGGT`. */
  recognition: string;
  start: number;
  end: number;
  /** Last base before the staggered cut on the top strand. */
  cut: number;
  /** Last base before the staggered cut on the bottom strand. */
  cutBottom: number;
  note: string;
}

export type ConstructCategoryKey =
'''

body = header
body += " | ".join(ts(c["key"]) for c in categories) + ";\n\n"

body += "/** Element-category palette: pastel fill + outline, plus the legend name. */\n"
body += "export interface ConstructCategory {\n  key: ConstructCategoryKey;\n  fill: string;\n  stroke: string;\n  label: string;\n}\n\n"
body += "export const constructCategories: readonly ConstructCategory[] = [\n"
body += block(categories) + ",\n];\n\n"
body += (
    "export const constructCategoryByKey = Object.fromEntries(\n"
    "  constructCategories.map((category) => [category.key, category]),\n"
    ") as Record<ConstructCategoryKey, ConstructCategory>;\n\n"
)

body += "export const constructMeta = {\n"
body += '  name: "pCirCure-circMEV",\n'
body += f"  length: {len(seq)},\n"
body += '  topology: "circular",\n'
body += '  backbone: "pUC57",\n'
body += "} as const;\n\n"

body += "/** Overview copy shown in the element-function panel when nothing is selected. */\n"
body += f"export const constructOverview = {ts(overview)};\n\n"

body += f"export const constructSequence = {ts(seq)};\n\n"

body += "export const constructElements: readonly ConstructElement[] = [\n"
body += block(elements) + ",\n];\n\n"

body += "export const constructSites: readonly ConstructSite[] = [\n"
body += block(sites) + ",\n];\n"

OUT.write_text(body, encoding="utf-8")
print(f"wrote {OUT.relative_to(ROOT)} ({OUT.stat().st_size} bytes)")
print(f"  sequence {len(seq)} bp | {len(elements)} elements | {len(sites)} cutters | {len(categories)} categories")
