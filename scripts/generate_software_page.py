"""Import Software's final Markdown, including its embedded HTML.

Uses markdown, beautifulsoup4 and Pillow from the authoring environment.
The Markdown and original figures are authoritative. Downloadable attachments
live only in public/assets/docs/software; this script does not copy bundles.
"""
from __future__ import annotations

import json
import re
import subprocess
from pathlib import Path

import markdown
from bs4 import BeautifulSoup, NavigableString, Tag
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
MANUSCRIPT = ROOT / "文案集/drylab/Software/Software-Wiki-CircuForge-TorusFold-English"
SOURCE_NAME = "Software-Wiki-CircuForge-TorusFold-English.md"
DATA_DIR = ROOT / "src/data/drylab"
PUBLIC_DIR = ROOT / "public/assets/docs/software"
PUBLIC_REFERENCE = "../../../../public/assets/docs/software/"


def js(value: object) -> str:
    return json.dumps(value, ensure_ascii=False, indent=2)


def title_text(text: str) -> str:
    return re.sub(r"^\d+(?:\.\d+)*\.?\s+", "", text).strip()


def slug(text: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", title_text(text).lower()).strip("-")


def inline(node: Tag | NavigableString) -> str:
    if isinstance(node, NavigableString):
        return str(node)
    body = "".join(inline(child) for child in node.children)
    if node.name == "strong":
        return f"**{body}**"
    if node.name == "em":
        return f"*{body}*"
    if node.name == "code":
        return f"`{body}`"
    if node.name == "a" and node.get("href"):
        href = str(node["href"])
        if href.startswith(PUBLIC_REFERENCE):
            href = href.removeprefix(PUBLIC_REFERENCE)
            if not href.startswith("evidence/"):
                href = f"图片和附件/{href}"
        return f"[{body}]({href})"
    if node.name == "br":
        return "\n"
    return body


def split_caption(caption: Tag) -> tuple[str, str]:
    text = caption.get_text(" ", strip=True)
    match = re.match(r"(?:Figure\s+|FIG\.\s*)(\d+[A-Z]?)[.\s]+(.*)", text, re.I | re.S)
    if not match:
        raise ValueError(f"Unrecognized figure caption: {text}")
    return f"FIG. {match[1].upper()}", match[2]


class ManuscriptImporter:
    def __init__(self) -> None:
        source = (MANUSCRIPT / SOURCE_NAME).read_text(encoding="utf-8")
        self.document = BeautifulSoup(markdown.markdown(source, extensions=["extra", "toc"]), "html.parser")
        self.figures: dict[str, dict] = {}
        self.panels: dict[str, dict] = {}
        self.guides: dict[str, dict] = {}
        self.video: dict = {}
        self.usage_video: dict = {}
        self.model: dict = {}
        self.references: list[dict] = []
        self.judging_criteria: list[dict] = []

    def figure(self, image: Tag, caption: Tag) -> dict:
        path = Path(str(image["src"]))
        key = path.stem
        label, text = split_caption(caption)
        self.figures[key] = {
            "source": str(path).replace("\\", "/"),
            "alt": text if re.search(r"\.(?:png|jpe?g)$", str(image.get("alt", "")), re.I) else str(image.get("alt", text)),
            "caption": text,
            "figureLabel": label,
        }
        return {"type": "figure", "asset": key}

    def content(self, parent: Tag) -> list[dict]:
        elements = [child for child in parent.children if isinstance(child, Tag)]
        blocks: list[dict] = []
        index = 0
        while index < len(elements):
            node = elements[index]
            index += 1
            if node.name in {"summary", "script", "link"}:
                continue
            if node.name == "p" and not node.get_text(strip=True) and not node.find("img"):
                continue
            if node.name == "p" and node.find("img"):
                if index >= len(elements):
                    raise ValueError("Figure has no caption")
                block = self.figure(node.img, elements[index])
                index += 1
                blocks.append(block)
                continue
            if node.name == "p":
                text = inline(node).strip()
                if blocks and blocks[-1]["type"] == "prose":
                    blocks[-1]["paragraphs"].append(text)
                else:
                    blocks.append({"type": "prose", "paragraphs": [text]})
            elif node.name == "pre":
                code = node.code
                language = next((c[9:] for c in code.get("class", []) if c.startswith("language-")), "text")
                blocks.append({"type": "code", "language": language, "code": code.get_text().removesuffix("\n")})
            elif node.name == "table":
                rows = [[inline(cell).strip() for cell in row.find_all(["th", "td"], recursive=False)]
                        for row in node.find_all("tr")]
                blocks.append({"type": "table", "headers": rows[0], "rows": rows[1:]})
            elif node.name == "div" and node.has_attr("data-software-model"):
                label, caption = split_caption(elements[index])
                index += 1
                self.model = {"figureLabel": label, "caption": caption}
                blocks.append({"type": "feature", "key": "software-torusfold-model"})
            elif node.name == "iframe" and str(node.get("src", "")).startswith("https://video.igem.org/videos/embed/"):
                self.usage_video = {key: node[key] for key in ("title", "src", "allow", "sandbox")}
                self.usage_video["sandbox"] = " ".join(node["sandbox"]) if isinstance(node["sandbox"], list) else node["sandbox"]
                blocks.append({"type": "feature", "key": "software-circuforge-video"})
            elif node.name == "details":
                if "usage-guide-pdf" in node.get("class", []):
                    key = "circuforge" if "CircuForge" in node.summary.get_text() else "torusfold"
                    paragraphs = node.find_all("p", recursive=False)
                    self.guides[key] = {
                        "fileName": Path(node.iframe["src"].split("#")[0]).name.lower(),
                        "source": node.iframe["src"].split("#")[0],
                        "caption": node.summary.get_text(),
                        "description": paragraphs[0].get_text(),
                        "fallback": paragraphs[-1].get_text(),
                    }
                    blocks.append({"type": "feature", "key": f"software-{key}-guide"})
                elif "implementation-snippet" in node.get("class", []):
                    key = f"software-{node['id']}"
                    self.panels[key] = {
                        "kind": "fold", "id": node["id"],
                        "title": node.summary.get_text(), "blocks": self.content(node),
                    }
                    blocks.append({"type": "feature", "key": key})
                else:
                    raise ValueError(f"Unsupported details: {node.get('class')}")
            elif node.name == "div" and "validation-gallery" in node.get("class", []):
                key = f"software-{node['id']}"
                labels = node.select("[data-gallery-index]")
                figures = node.select("figure[data-gallery-slide]")
                self.panels[key] = {
                    "kind": "gallery", "id": node["id"], "title": node["aria-label"],
                    "entries": [{"title": label.get_text(), "figure": self.figure(figure.img, figure.figcaption)}
                                for label, figure in zip(labels, figures, strict=True)],
                }
                blocks.append({"type": "feature", "key": key})
            elif node.name == "video":
                # Native video actions sit between the player and its caption.
                if elements[index].find("a", href=re.compile(r"\.mp4$")):
                    index += 1
                label, caption = split_caption(elements[index])
                index += 1
                self.video = {
                    "source": node.source["src"], "fileName": Path(node.source["src"]).name,
                    "alt": node.get("aria-label", ""), "caption": caption, "figureLabel": label,
                }
                blocks.append({"type": "feature", "key": "software-registry-video"})
            elif node.name in {"ol", "ul"}:
                blocks.append({"type": "list", "ordered": node.name == "ol",
                               "items": [inline(li).strip() for li in node.find_all("li", recursive=False)]})
            else:
                raise ValueError(f"Unsupported manuscript element: {node.name}")
        return blocks

    def parse(self) -> dict:
        sections: list[dict] = []
        current: dict | None = None
        pending_anchors: list[str] = []
        current_nodes: list[Tag] = []
        parent_number = ""

        def flush() -> None:
            if current is not None and current_nodes:
                fragment = BeautifulSoup("", "html.parser").new_tag("div")
                for element in current_nodes:
                    fragment.append(BeautifulSoup(str(element), "html.parser"))
                current["blocks"].extend(self.content(fragment))
                current_nodes.clear()

        for node in self.document.children:
            if not isinstance(node, Tag) or node.name in {"h1", "script", "link"}:
                continue
            anchor = node.find("a", id=True) if node.name == "p" else None
            if anchor and not node.get_text(strip=True):
                flush()
                pending_anchors.append(anchor["id"])
                continue
            if node.name == "h2":
                flush()
                text = node.get_text()
                number = re.match(r"^(\d+)\.", text)
                section_slug = "judging" if title_text(text) == "Judging Criteria" else slug(text)
                current = {
                    "id": f"software-{section_slug}", "index": number.group(1) if number else "11",
                    "kicker": "", "navLabel": title_text(text), "title": title_text(text),
                    "summary": "", "blocks": [],
                }
                current["anchorIds"] = list(dict.fromkeys(pending_anchors + [node["id"]]))
                pending_anchors.clear()
                parent_number = current["index"]
                sections.append(current)
            elif node.name in {"h3", "h4"} and current is not None:
                flush()
                text = node.get_text()
                number = re.match(r"^(\d+(?:\.\d+)*)\s+", text)
                if number:
                    index = number.group(1)
                else:
                    prefix = parent_number if node.name == "h4" else current["index"]
                    count = sum(b["type"] == "subheading" and b["index"].startswith(prefix + ".")
                                and b["index"].count(".") == prefix.count(".") + 1 for b in current["blocks"])
                    index = f"{prefix}.{count + 1}"
                if node.name == "h3":
                    parent_number = index
                current["blocks"].append({
                    "type": "subheading", "level": 3 if node.name == "h3" else 4,
                    "id": f"{current['id']}-{slug(text)}", "index": index if node.name == "h3" or number else "", "title": title_text(text),
                    "anchorIds": list(dict.fromkeys(pending_anchors + [node["id"]])),
                })
                pending_anchors.clear()
            elif current is not None and current["title"] == "References":
                if node.name != "ol":
                    raise ValueError("Unexpected reference markup")
                for identifier, li in enumerate(node.find_all("li", recursive=False), 1):
                    em = li.em
                    before, after = str(li).split(str(em), 1)
                    before = BeautifulSoup(before, "html.parser").get_text().strip()
                    if ". " in before:
                        authors, _, title = before.partition(". ")
                        authors += "."
                    else:
                        authors, title = before, ""
                    tail = BeautifulSoup(after, "html.parser")
                    links = [{"href": a["href"], "label": a.get_text()} for a in tail.find_all("a")]
                    for a in tail.find_all("a"):
                        a.decompose()
                    volume = tail.get_text().strip().removeprefix(". ").strip()
                    volume = re.sub(r"\s+\.$", "", volume)
                    if volume in {".", ""}:
                        volume = ""
                    self.references.append({"id": identifier, "authors": authors, "title": title,
                                            "journal": em.get_text() + ".", "volumeYear": volume, "links": links})
                current["blocks"] = [{"type": "feature", "key": "software-references"}]
            else:
                current_nodes.append(node)
        flush()
        chapter_number = 0
        for section in sections:
            if section["id"] == "software-judging":
                for block in section["blocks"]:
                    if block["type"] == "subheading":
                        self.judging_criteria.append({
                            "id": block["id"], "question": block["title"],
                            "anchorIds": block["anchorIds"], "paragraphs": [],
                        })
                    elif block["type"] == "prose" and self.judging_criteria:
                        self.judging_criteria[-1]["paragraphs"].extend(block["paragraphs"])
                    else:
                        raise ValueError(f"Unsupported Judging Criteria content: {block['type']}")
                section.update({
                    "index": "", "hideSectionNumber": True,
                    "navLabel": "Judging Criteria", "title": "Judging Criteria",
                    "blocks": [{"type": "feature", "key": "software-judging-criteria"}],
                })
                section["anchorIds"] = list(dict.fromkeys(section["anchorIds"] + ["1-judging"]))
                continue
            chapter_number += 1
            section["index"] = str(chapter_number)
            for block in section["blocks"]:
                if block["type"] == "subheading" and block["index"]:
                    block["index"] = re.sub(r"^\d+", str(chapter_number), block["index"])
        return {
            "route": "/software", "category": "dry-lab", "chapter": "Dry Lab / Software",
            "eyebrow": "Software", "title": "CircuForge and TorusFold",
            "lede": "Designing, reviewing, exporting, and structurally inspecting circular RNA vaccine constructs.",
            "boundary": "", "visual": "software-console", "visualLabel": "CircuForge and TorusFold",
            "visualSteps": [], "facts": [], "sections": sections,
            "links": [
                {"path": "/model", "label": "Computational Biophysics"},
                {"path": "/hardware", "label": "CirCore Hardware Device"},
                {"path": "/design", "label": "Construct Architecture"},
                {"path": "/contribution", "label": "Open-Source Repository"},
            ],
            "next": {
                "path": "/hardware",
                "label": "Hardware",
                "title": "When In Silico Code Meets Physical Matter",
                "description": "Software designs the sequence, but bench manufacturing demands precise physical control. Discover CirCore: our custom automated microfluidic reactor for circRNA synthesis.",
            },
        }

    def write_assets(self) -> None:
        runtime_dir = ROOT / "src/assets/wiki/software"
        runtime_dir.mkdir(parents=True, exist_ok=True)
        PUBLIC_DIR.mkdir(parents=True, exist_ok=True)
        assets = {}
        imports = []
        for index, (key, info) in enumerate(self.figures.items()):
            original = MANUSCRIPT / info["source"]
            filename = f"{key}.webp"
            with Image.open(original) as image:
                image.thumbnail((2400, 2400), Image.Resampling.LANCZOS)
                image.save(runtime_dir / filename, "WEBP", quality=90, method=6)
                width, height = image.size
            variable = f"figure{index}"
            imports.append(f'import {variable} from "../../assets/wiki/software/{filename}";')
            assets[key] = {
                "fileName": filename,
                "localSourcePath": str(original.relative_to(ROOT)).replace("\\", "/"),
                "localSrc": f"__IMPORT_{variable}__", "uploadUrl": "", "width": width, "height": height,
                "alt": info["alt"], "caption": info["caption"], "figureLabel": info["figureLabel"],
                "section": "Software",
            }
        for guide in self.guides.values():
            source = (MANUSCRIPT / guide.pop("source")).resolve()
            if source != PUBLIC_DIR / guide["fileName"] or not source.is_file():
                raise ValueError(f"Guide is not in its canonical public location: {source}")
            guide["localSourcePath"] = source.relative_to(ROOT).as_posix()
            guide["uploadUrl"] = ""
        source = (MANUSCRIPT / self.video.pop("source")).resolve()
        if source != PUBLIC_DIR / self.video["fileName"] or not source.is_file():
            raise ValueError(f"Video is not in its canonical public location: {source}")
        self.video["localSourcePath"] = source.relative_to(ROOT).as_posix()
        self.video["uploadUrl"] = ""
        figure_json = re.sub(r'"__IMPORT_(\w+)__"', r"\1", js(assets))
        body = '\n'.join(imports) + '\n\n' + '''export interface SoftwareAssetEntry {
  fileName: string;
  localSourcePath: string;
  localSrc: string;
  uploadUrl: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  figureLabel: string;
  section: string;
}

export const softwareFigures = ''' + figure_json + ''' as const satisfies Record<string, SoftwareAssetEntry>;

export type SoftwareFigureKey = keyof typeof softwareFigures;
export const getSoftwareImage = (key: SoftwareFigureKey): string =>
  softwareFigures[key].uploadUrl || softwareFigures[key].localSrc;

export const softwareGuides = ''' + js(self.guides) + ''' as const;

export const softwareVideo = ''' + js(self.video) + ''' as const;

export const softwareUsageVideo = ''' + js(self.usage_video) + ''' as const;

export const softwareModel = ''' + js({
  "fileName": "isrnaclong-final.pdb",
  "localSourcePath": "public/assets/docs/software/isrnaclong-final.pdb",
  "uploadUrl": "",
  "residueCount": 2013,
  "atomCount": 42831,
  "chain": "A",
  "stage": "Saved PPR-repaired model",
  **self.model,
}) + ''' as const;

/** Resolve page attachments under Vite's deployment base path. */
export function getSoftwareResource(path: string): string {
  const file = path.replace(/^图片和附件\\//, "");
  return `${import.meta.env.BASE_URL}assets/docs/software/${file}`;
}
'''
        (DATA_DIR / "softwareAssets.ts").write_text(body, encoding="utf-8")

    def write_page(self, page: dict) -> None:
        def encode(value: object) -> str:
            if isinstance(value, dict):
                pairs = []
                for key, item in value.items():
                    if key == "figure" and isinstance(item, dict):
                        rendered = f"softwareFigure({js(item['asset'])})"
                    elif key == "blocks" and isinstance(item, list):
                        rendered = "blocks(" + encode(item) + ")"
                    else:
                        rendered = encode(item)
                    pairs.append(js(key) + ": " + rendered)
                return "{\n" + ",\n".join(pairs) + "\n}"
            if isinstance(value, list):
                return "[\n" + ",\n".join(encode(item) for item in value) + "\n]"
            return js(value)

        body = '''// Generated from the final Markdown by scripts/generate_software_page.py.
import type { WikiPageContent, WikiContentBlock, WikiJudgingCriterion } from "../../components/wiki/wikiPageTypes";
import type { CitationReference } from "../citations/citationTypes";
import { getSoftwareImage, softwareFigures, type SoftwareFigureKey } from "./softwareAssets";

type FigureBlock = Extract<WikiContentBlock, { type: "figure" }>;
type SourceBlock = Exclude<WikiContentBlock, { type: "figure" }> | { type: "figure"; asset: SoftwareFigureKey };

export function softwareFigure(key: SoftwareFigureKey): FigureBlock {
  const asset = softwareFigures[key];
  return { type: "figure", src: getSoftwareImage(key), alt: asset.alt, caption: asset.caption,
    figureLabel: asset.figureLabel, width: asset.width, height: asset.height,
    ...(key === "figure-11-run-console" ? { className: "software-figure--compact" } : {}) };
}
const blocks = (value: SourceBlock[]): WikiContentBlock[] =>
  value.map(block => block.type === "figure" ? softwareFigure(block.asset) : block);

export type SoftwarePanel =
  | { kind: "fold"; id: string; title: string; blocks: WikiContentBlock[] }
  | { kind: "gallery"; id: string; title: string; entries: { title: string; figure: FigureBlock }[] };

export const softwareReferences: CitationReference[] = ''' + js(self.references) + ''';

export const softwarePanels: Record<string, SoftwarePanel> = ''' + encode(self.panels) + ''';

export const softwareJudgingCriteria: WikiJudgingCriterion[] = ''' + js(self.judging_criteria) + ''';

export const softwarePage: WikiPageContent = ''' + encode(page) + ";\n"
        (DATA_DIR / "softwarePage.ts").write_text(body, encoding="utf-8")


def main() -> None:
    importer = ManuscriptImporter()
    page = importer.parse()
    importer.write_assets()
    importer.write_page(page)
    subprocess.run([
        "node", str(ROOT / "node_modules/prettier/bin/prettier.cjs"), "--write",
        str(DATA_DIR / "softwarePage.ts"), str(DATA_DIR / "softwareAssets.ts"),
    ], check=True, cwd=ROOT)
    print(f"Imported {len(page['sections'])} sections, {len(importer.figures)} figures, "
          f"{len(importer.panels)} manuscript panels, {len(importer.references)} references.")


if __name__ == "__main__":
    main()
