from __future__ import annotations

import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "文案集" / "drylab" / "Software" / "Software-Wiki-CircuForge-TorusFold-English" / "Software-Wiki-CircuForge-TorusFold-English.md"
OUT = ROOT / "src" / "data" / "drylab" / "softwarePage.ts"


def clean(text: str) -> str:
    text = text.replace("\r", "")
    # The source export escapes Markdown punctuation. Restore the text readers
    # should see without interpreting any formatting here.
    return re.sub(r"\\([^\w\s])", r"\1", text).strip()


def slug(text: str) -> str:
    text = re.sub(r"^\d+(?:\.\d+)*\.?\s*", "", text)
    text = re.sub(r"[^a-zA-Z0-9]+", "-", text.lower()).strip("-")
    return text or "section"


def js(value: object) -> str:
    return json.dumps(value, ensure_ascii=False, indent=2)


def heading_number(title: str) -> str | None:
    match = re.match(r"^(\d+(?:\.\d+)*)\.?\s+", title)
    return match.group(1) if match else None


def heading_title(title: str) -> str:
    return re.sub(r"^\d+(?:\.\d+)*\.?\s+", "", title).strip()


def parse_table(lines: list[str], index: int) -> tuple[dict, int]:
    raw_rows: list[list[str]] = []
    while index < len(lines) and lines[index].strip().startswith("|"):
        row = lines[index].strip().strip("|")
        raw_rows.append([clean(cell.strip()) for cell in row.split("|")])
        index += 1
    if len(raw_rows) < 2:
        return {"type": "prose", "paragraphs": ["\n".join(lines[index - 1:index])]}, index
    headers = raw_rows[0]
    rows = [row for row in raw_rows[2:] if not all(re.fullmatch(r"[-: ]+", cell or "-") for cell in row)]
    return {"type": "table", "headers": headers, "rows": rows}, index


def figure_key(path: str) -> str:
    stem = Path(path).stem
    return re.sub(r"[^a-zA-Z0-9]+", "-", stem.lower()).strip("-")


def parse() -> tuple[dict, dict[str, dict[str, str]]]:
    lines = SOURCE.read_text(encoding="utf-8").splitlines()
    sections: list[dict] = []
    current: dict | None = None
    current_subheading: str | None = None
    pending_caption: str | None = None
    images: dict[str, dict[str, str]] = {}
    index = 0
    in_code = False
    code_language = ""
    code_lines: list[str] = []

    def flush_code() -> None:
        nonlocal code_lines, code_language
        if current is not None and code_lines:
            current["blocks"].append({
                "type": "code",
                "language": code_language or None,
                "code": "\n".join(code_lines).rstrip(),
            })
        code_lines = []
        code_language = ""

    def add_prose(paragraphs: list[str]) -> None:
        if current is None:
            return
        cleaned = [clean(p) for p in paragraphs if clean(p)]
        if cleaned:
            current["blocks"].append({"type": "prose", "paragraphs": cleaned})

    while index < len(lines):
        raw = lines[index]
        stripped = raw.strip()
        if stripped.startswith("```"):
            if in_code:
                flush_code()
                in_code = False
            else:
                in_code = True
                code_language = stripped[3:].strip()
                code_lines = []
            index += 1
            continue
        if in_code:
            code_lines.append(clean(raw))
            index += 1
            continue

        heading = re.match(r"^(#{2,4})\s+(.*)$", stripped)
        if heading:
            level = len(heading.group(1))
            title = clean(heading.group(2))
            if level == 2:
                current_subheading = None
                number = heading_number(title) or str(len(sections) + 1)
                current = {
                    "id": f"software-{slug(title)}",
                    "index": number,
                    "kicker": "",
                    "navLabel": heading_title(title),
                    "title": heading_title(title),
                    "summary": "",
                    "blocks": [],
                }
                sections.append(current)
            elif level in (3, 4) and current is not None:
                number = heading_number(title)
                if not number:
                    parent = current_subheading or current["index"]
                    siblings = sum(1 for block in current["blocks"] if block.get("type") == "subheading" and block.get("index", "").startswith(parent + ".")) + 1
                    number = f"{parent}.{siblings}"
                current_subheading = number if level == 3 else current_subheading
                sub_id = f"{current['id']}-{slug(title)}"
                current["blocks"].append({
                    "type": "subheading",
                    "id": sub_id,
                    "index": number,
                    "title": heading_title(title),
                })
                if title.startswith("4.1 ") or title == "4.1 CircuForge":
                    current["blocks"].append({"type": "feature", "key": "software-circuforge-guide"})
                elif title.startswith("4.2 ") or title == "4.2 TorusFold":
                    current["blocks"].append({"type": "feature", "key": "software-torusfold-guide"})
            index += 1
            continue

        if stripped.startswith("<a id=") or stripped.startswith("</a>"):
            index += 1
            continue

        if stripped.startswith("<details"):
            # The PDF details are represented by the shared React viewer feature.
            while index < len(lines) and "</details>" not in lines[index]:
                index += 1
            index += 1
            continue

        image = re.match(r"!\[[^\]]*\]\(([^)]+)\)", stripped)
        if image and current is not None:
            path = image.group(1)
            key = figure_key(path)
            caption = None
            caption_index = index + 1
            while caption_index < len(lines) and not lines[caption_index].strip():
                caption_index += 1
            if caption_index < len(lines) and re.match(r"^\s*\*.*\*\s*$", lines[caption_index]):
                caption = clean(lines[caption_index].strip())[1:-1].strip()
                index = caption_index
            images[key] = {
                "path": path,
                "caption": caption or heading_title(Path(path).stem),
            }
            current["blocks"].append({"type": "figure", "asset": key})
            index += 1
            continue

        if stripped.startswith("|") and current is not None:
            block, index = parse_table(lines, index)
            current["blocks"].append(block)
            continue

        if stripped.startswith("<") and stripped.endswith(">"):
            index += 1
            continue

        if not stripped:
            index += 1
            continue

        paragraph_lines = [stripped]
        index += 1
        while index < len(lines):
            next_line = lines[index].strip()
            if not next_line or re.match(r"^#{2,4}\s+", next_line) or next_line.startswith("!") or next_line.startswith("|") or next_line.startswith("<") or next_line.startswith("```"):
                break
            paragraph_lines.append(next_line)
            index += 1
        add_prose([" ".join(paragraph_lines)])

    flush_code()
    for section in sections:
        merged: list[dict] = []
        for block in section["blocks"]:
            if (
                merged
                and block.get("type") == "prose"
                and merged[-1].get("type") == "prose"
            ):
                merged[-1]["paragraphs"].extend(block["paragraphs"])
            else:
                merged.append(block)
        section["blocks"] = merged

    anchor_map = {
        "software-usage-guide": ["usage"],
        "software-architecture-and-design-choices": ["architecture"],
        "software-user-testing-and-community-reuse": ["community-reuse"],
        "software-validation": ["validation"],
        "software-installation-and-api": ["installation"],
        "software-open-source-and-reuse": ["open-source"],
    }
    for section in sections:
        if section["id"] in anchor_map:
            section["anchorIds"] = anchor_map[section["id"]]
        for block in section["blocks"]:
            if block.get("type") == "subheading" and block.get("title", "").startswith("Choice 5"):
                block["anchorIds"] = ["cf-verified-export"]
            if block.get("type") == "subheading" and block.get("title", "").startswith("9.4 Integration and API"):
                block["anchorIds"] = ["integration-api"]

    return {
        "route": "/software",
        "category": "dry-lab",
        "chapter": "Dry Lab / Software",
        "eyebrow": "Software",
        "title": "CircuForge and TorusFold",
        "lede": "Designing, reviewing, exporting, and structurally inspecting circular RNA vaccine constructs.",
        "boundary": "",
        "visual": "software-console",
        "visualLabel": "CircuForge and TorusFold",
        "visualSteps": [],
        "facts": [],
        "sections": sections,
        "links": [],
        "next": {"path": "/hardware", "label": "Hardware", "title": "Hardware"},
    }, images


def write() -> None:
    page, images = parse()
    lines: list[str] = [
        'import type { WikiPageContent, WikiContentBlock } from "../../components/wiki/wikiPageTypes";',
        'import { getSoftwareImage, softwareFigures } from "./softwareAssets";',
        "",
        "const blocks = (value: unknown[]): WikiContentBlock[] => value.map((block) => {",
        '  if ((block as { type?: string }).type === "figure") {',
        '    const key = (block as { asset: keyof typeof softwareFigures }).asset;',
        '    const asset = softwareFigures[key];',
        '    return { type: "figure", src: getSoftwareImage(key), alt: asset.alt, caption: asset.caption };',
        "  }",
        "  return block as WikiContentBlock;",
        "});",
        "",
        "export const softwarePage: WikiPageContent = ",
    ]
    # JSON is valid TS for the data fields; replace each section's blocks with
    # a call so image assets remain resolved through the typed dictionary.
    raw = json.dumps(page, ensure_ascii=False, indent=2)
    raw = re.sub(r'"blocks": \[(.*?)\n      \]', lambda m: '"blocks": blocks([' + m.group(1) + '\n      ])', raw, flags=re.S)
    raw = raw.replace('"asset":', '"asset":')
    lines.append(raw + ";")
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text("\n".join(lines) + "\n", encoding="utf-8")

    asset_lines: list[str] = []
    for key, info in images.items():
        filename = Path(info["path"]).name
        variable = re.sub(r"[^a-zA-Z0-9]", " ", key).title().replace(" ", "") + "Img"
        asset_lines.append(f'import {variable} from "../../assets/wiki/software/{filename}";')
    asset_lines.extend([
        "",
        'export interface SoftwareAssetEntry {',
        "  fileName: string;",
        "  localSourcePath: string;",
        "  localSrc?: string;",
        "  uploadUrl: string;",
        "  alt: string;",
        "  caption: string;",
        "  section: string;",
        "}",
        "",
        "const assetDir = \"src/assets/wiki/software\";",
        "",
        "export const softwareFigures = {",
    ])
    for key, info in images.items():
        filename = Path(info["path"]).name
        variable = re.sub(r"[^a-zA-Z0-9]", " ", key).title().replace(" ", "") + "Img"
        caption = info["caption"]
        alt = re.sub(r"^Figure\s+[0-9A-Z]+\.\s*", "", caption)
        asset_lines.extend([
            f'  "{key}": {{',
            f'    fileName: "{filename}",',
            f'    localSourcePath: `${{assetDir}}/{filename}`,',
            f"    localSrc: {variable},",
            '    uploadUrl: "",',
            f'    alt: {json.dumps(alt, ensure_ascii=False)},',
            f'    caption: {json.dumps(caption, ensure_ascii=False)},',
            f'    section: "Software",',
            "  },",
        ])
    asset_lines.extend([
        "} as const satisfies Record<string, SoftwareAssetEntry>;",
        "",
        "export type SoftwareFigureKey = keyof typeof softwareFigures;",
        "",
        "export const getSoftwareImage = (key: SoftwareFigureKey): string =>",
        "  softwareFigures[key].uploadUrl || softwareFigures[key].localSrc || \"\";",
        "",
        "export const softwareGuides = {",
        "  circuforge: {",
        '    fileName: "CircuForge-Usage-Guide.pdf",',
        '    caption: "CircuForge User Guide",',
        '    description: "Read the illustrated guide for installation, target and epitope review, construct design, exports, and troubleshooting.",',
        '    fallback: "If the preview is unavailable, use the links above.",',
        "  },",
        "  torusfold: {",
        '    fileName: "TorusFold-Usage-Guide.pdf",',
        '    caption: "TorusFold User Guide",',
        '    description: "Read the illustrated guide for environment setup, prediction, checkpoint recovery, model inspection, exports, and troubleshooting.",',
        '    fallback: "If the preview is unavailable, use the links above.",',
        "  },",
        "} as const;",
    ])
    assets_out = ROOT / "src" / "data" / "drylab" / "softwareAssets.ts"
    assets_out.write_text("\n".join(asset_lines) + "\n", encoding="utf-8")


if __name__ == "__main__":
    write()

