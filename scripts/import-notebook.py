"""Import the English Wet Lab manuscript without rewriting its scientific copy."""

import json
import re
from pathlib import Path
from urllib.parse import unquote

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "文案集/project/notebook/Notebook新.md"


def clean(text):
    return re.sub(r"\\([\\`*_{}\[\]()#+\-.!>])", r"\1", text).strip()


def parse():
    wet = SOURCE.read_text(encoding="utf-8").split("# Wet Lab｜湿实验", 1)[1].split("# Dry Lab｜干实验", 1)[0]
    records, assets = [], {}
    current = None
    pending = None
    for raw in wet.splitlines():
        line = clean(raw)
        if line.startswith("### "):
            dates, title, *_ = line[4:].split("｜")
            start, _, end = dates.partition("—")
            current = {
                "id": f"wet-{start}-{len(records) + 1}",
                "start": start,
                "end": end or start,
                "title": title.strip(),
                "blocks": [],
            }
            records.append(current)
            pending = None
        elif line.startswith("#### "):
            label, title, *_ = line[5:].split("｜")
            pending = {"type": "discussion", "label": label, "title": title, "text": ""}
            current["blocks"].append(pending)
        elif line.startswith("**English.** "):
            text = line.removeprefix("**English.** ")
            if pending and pending["type"] == "discussion" and not pending["text"]:
                pending["text"] = text
            else:
                current["blocks"].append({"type": "prose", "text": text})
        elif line.startswith("**Figure "):
            label, title, *_ = line.removeprefix("**Figure ").removesuffix("**").split("｜")
            pending = {"type": "figure", "label": f"Figure {label}", "title": title, "assets": [], "caption": ""}
            current["blocks"].append(pending)
        elif line.startswith("!["):
            path = re.search(r"\]\((.+)\)$", line).group(1)
            source = SOURCE.parent / unquote(path)
            key = f"wetFigure{len(assets) + 1:02d}"
            with Image.open(source) as image:
                width, height = image.size
            assets[key] = {
                "fileName": f"notebook-wet-{len(assets) + 1:02d}{source.suffix}",
                "localSourcePath": source.relative_to(ROOT).as_posix(),
                "uploadUrl": "",
                "alt": pending["title"],
                "width": width,
                "height": height,
            }
            pending["assets"].append(key)
        elif line.startswith("**Table "):
            label, title, *_ = line.removeprefix("**Table ").removesuffix("**").split("｜")
            pending = {"type": "table", "label": f"Table {label}", "title": title, "headers": [], "rows": [], "caption": ""}
            current["blocks"].append(pending)
        elif line.startswith("| "):
            cells = [clean(cell) for cell in line.strip("|").split("|")]
            if all(re.fullmatch(r"[:\- ]+", cell) for cell in cells):
                continue
            if not pending["headers"]:
                pending["headers"] = cells
            else:
                pending["rows"].append(cells)
        elif line.startswith("**English caption.** "):
            pending["caption"] = line.removeprefix("**English caption.** ")
    return sorted(records, key=lambda item: (item["start"], item["end"])), assets


def generate():
    records, assets = parse()
    encoded_records = json.dumps(records, ensure_ascii=False, indent=2)
    data = '''import type { WikiPageContent } from "../../components/wiki/wikiPageTypes";
import type { NotebookAssetKey } from "./notebookAssets";

export type NotebookBlock =
  | { type: "prose"; text: string }
  | { type: "discussion"; label: string; title: string; text: string }
  | { type: "figure"; label: string; title: string; assets: NotebookAssetKey[]; caption: string }
  | { type: "table"; label: string; title: string; headers: string[]; rows: string[][]; caption: string };

export interface NotebookEntry {
  id: string;
  start: string;
  end: string;
  title: string;
  blocks: NotebookBlock[];
}

/** English copy transcribed from 文案集/project/notebook/Notebook新.md. */
export const wetLabEntries: NotebookEntry[] = RECORDS;

export const notebookPage: WikiPageContent = {
  route: "/notebook",
  category: "project",
  chapter: "Project / 06 of 07",
  eyebrow: "Notebook",
  title: "Notebook",
  lede: "",
  boundary: "",
  visual: "notebook-trace",
  visualLabel: "Wet Lab notebook",
  visualSteps: [],
  facts: [],
  sections: [{
    id: "notebook-wet-lab",
    index: "01",
    kicker: "",
    title: "Wet Lab",
    summary: "",
    hideHeading: true,
    blocks: [{ type: "feature", key: "wet-lab-notebook" }],
  }],
  links: [],
  next: {
    path: "/safety-and-security",
    label: "Safety and Security",
    title: "Where Must Innovation Draw the Line?",
  },
};
'''.replace("RECORDS", encoded_records)
    (ROOT / "src/data/project/notebookPage.ts").write_text(data, encoding="utf-8")

    imports, entries = [], []
    for key, asset in assets.items():
        imports.append(f'import {key} from {json.dumps("../../../" + asset["localSourcePath"], ensure_ascii=False)};')
        props = json.dumps(asset, ensure_ascii=False, indent=2)[1:-1]
        entries.append(f"  {key}: {{\n    localSrc: {key},{props}\n  }}")
    dictionary = "\n".join(imports) + '''

interface NotebookAsset {
  fileName: string;
  localSourcePath: string;
  localSrc: string;
  uploadUrl: string;
  alt: string;
  width: number;
  height: number;
}

export const notebookAssets = {
''' + ",\n".join(entries) + '''
} as const satisfies Record<string, NotebookAsset>;

export type NotebookAssetKey = keyof typeof notebookAssets;

export function getNotebookImage(key: NotebookAssetKey): string {
  return notebookAssets[key].uploadUrl || notebookAssets[key].localSrc;
}

export const notebookPreloadImages = Object.keys(notebookAssets).map(
  (key) => getNotebookImage(key as NotebookAssetKey),
);
'''
    (ROOT / "src/data/project/notebookAssets.ts").write_text(dictionary, encoding="utf-8")
    print(f"Imported {len(records)} Wet Lab entries and {len(assets)} images; scientific copy unchanged.")


if __name__ == "__main__":
    generate()
