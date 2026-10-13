"""Import the Education manuscript and its referenced attachments.

Run from the Official-wiki repository root with ``python scripts/import-education.py``.
The source manuscript is kept in src/data/engagement/education-source.md so the
generated page can be rebuilt without depending on files outside this repo.
"""

from __future__ import annotations

import hashlib
import json
import re
import shutil
import unicodedata
from pathlib import Path
from urllib.parse import unquote

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "src/data/engagement/education-source.md"
ATTACHMENTS = ROOT.parent / "6.2 Education （英_终稿）" / "Images_attachments"
DEST = ROOT / "public/assets/education"
OUTPUT = ROOT / "src/data/engagement/educationSections.ts"
MANIFEST = ROOT / "src/data/engagement/educationAssets.json"

LINK = re.compile(r"(!?)\[([^\]]+)\]\((Images_attachments/[^)]+)\)")
HEADING = re.compile(r"^(#{1,5})\s+(.+)$")
ESCAPE = re.compile(r"\\([\\`*_{}\[\]()#+.!<>~&-])")
NAMES = {
    "ChatGPT 图像 2026年10月9日 14_05_39.png": "education-overview-map",
    "教育组合-首稿.png": "education-portfolio-framework",
    "递归关怀-首稿.png": "recursive-care-spiral",
    "九个实验.png": "virtual-laboratory-nine-experiments",
    "虚拟实验室.png": "virtual-laboratory-interface",
    "毗卢镇迭代.png": "pilu-town-iteration",
    "合成生物课堂.png": "synbio-classroom",
    "杏花节.png": "xinghua-festival",
    "健康跑.png": "health-run",
    "分子节拍.png": "molecular-rhythm",
    "乳腺守护者.png": "breast-guardian",
    "伦理辩论.png": "ethics-debate",
    "image.png": "education-feedback-invitation",
    "index.html": "education-design-board",
    "教育设计面板源码.zip": "education-design-board-source",
    "乳腺守护者 教学视频.mp4": "breast-guardian-tutorial",
    "虚拟实验室视频.zip": "virtual-laboratory-videos",
    "《野生学习指北·创刊号》(1).pdf": "wild-learning-guide-issue-1",
    "《野生学习指北·创刊号》(1) 1.pdf": "wild-learning-guide-issue-1",
    "小小科学家——给细菌拍身份证_English_Final.pptx": "little-scientist-bacteria-id",
    "小小科学家——给细菌拍身份证_English_Final 1.pptx": "little-scientist-bacteria-id",
    "生命科学冒险记_English_Final.pptx": "life-science-adventure",
    "空气变面包的奇迹——和Gemy探索设计生命_English_Final.pptx": "air-to-bread-classroom",
    "宋希蕾igem介绍.pptx": "winter-outreach-igem-introduction",
    "Hailun Pilu Virtual Laboratory (1).zip": "hailun-pilu-virtual-laboratory",
    "Letters_to_My_Body.pdf": "letters-to-my-body-final",
    "A Field Guide to Learning - Inaugural Issue.pdf": "field-guide-to-learning-final",
    "A-Seed-Planted-in-the-Heart.pdf": "a-seed-planted-in-the-heart-final",
    "Air_into_Bread_with_Gemy_English.pptx": "air-into-bread-with-gemy-english",
    "01_SynBio_Classroom_Lesson_1_Opening_and_Lab_Safety_EN.pptx": "synbio-classroom-lesson-1-english",
    "02_SynBio_Classroom_Lesson_2_PCR_and_Gel_Electrophoresis_EN.pptx": "synbio-classroom-lesson-2-english",
    "03_SynBio_Classroom_Lesson_3_Crude_DNA_Extraction_EN.pptx": "synbio-classroom-lesson-3-english",
    "04_SynBio_Classroom_Lesson_4_Life_Science_Monopoly_EN.pptx": "synbio-classroom-lesson-4-english",
    "05_SynBio_Classroom_Lesson_5_Plasmid_Game_EN.pptx": "synbio-classroom-lesson-5-english",
    "Winter Outreach-Chongqing.pptx": "winter-outreach-chongqing-english",
}

VIDEO_PLACEHOLDERS = {
    "Virtual Laboratory Instructional video.zip",
    "《Breast Guardian》Instructional video.mp4",
}

INTERACTIVE_HTML = {
    "Community & Educational Function Map.html": "education-interactive-map",
    "index.html": "education-interactive-design-board",
    "Breast Guardian Evidence Room.html": "education-interactive-evidence-room",
}

PHOTO_GALLERIES = {
    "Hailun Pilu Virtual Laboratory (1).zip": "education-gallery-virtual-laboratory",
    "Synbio Classroom.zip": "education-gallery-synbio-classroom",
    "Winter Outreach.zip": "education-gallery-winter-outreach",
    "Air to Bread Classroom.zip": "education-gallery-air-to-bread-classroom",
    "Vaccine Classroom.zip": "education-gallery-vaccine-classroom",
    "Xinghua Festival.zip": "education-gallery-xinghua-festival",
    "Health Run.zip": "education-gallery-health-run",
    "Music Festival.zip": "education-gallery-music-festival",
    "Ethics Debate.zip": "education-gallery-ethics-debate",
}

LINK_LABELS = {
    "Community & Educational Function Map.html": "Explore the Community & Educational Function Map",
    "Community-Function-Map-source.zip": "Download the map source code",
    "index.html": "Open the Education Design Board",
    "教育设计面板源码.zip": "Download the Education Design Board source code",
}


def clean(value: str) -> str:
    return ESCAPE.sub(r"\1", value.strip())


def slug(value: str) -> str:
    value = unicodedata.normalize("NFKD", clean(value)).lower()
    value = value.replace("circ rna", "circrna")
    return re.sub(r"^-|-$", "", re.sub(r"[^a-z0-9]+", "-", value))


def resource_name(original: str, label: str, context: str, index: int) -> str:
    extension = Path(original).suffix.lower()
    if original in NAMES:
        return f"{NAMES[original]}{extension}"
    stem = Path(original).stem
    if re.fullmatch(r"7e2b63271e3211f1103208f9a7fe8400(?: \d+)?", stem):
        name = "reusable-resources-icon"
    elif re.fullmatch(r"[a-f0-9]{24,}(?: \d+)?", stem):
        name = f"{slug(context) or 'education'}-photo-{index:02d}"
    elif ".封面" in stem:
        name = slug(re.sub(r"\.封面(?: \d+)?$", "", stem)) + "-cover"
    else:
        name = slug(stem)
    if len(name) < 7:
        name = slug(label)
    if len(name) < 7:
        name = f"{slug(context) or 'education'}-{index:02d}"
    return f"{name}{extension}"


def main() -> None:
    source = SOURCE.read_text(encoding="utf-8")
    lines = source.splitlines()
    entries: list[tuple[str, str, str]] = []
    context = "education"
    for line in lines:
        heading = HEADING.match(line)
        if heading:
            context = clean(heading.group(2))
        for match in LINK.finditer(line):
            original = unquote(match.group(3).removeprefix("Images_attachments/"))
            if original not in [item[0] for item in entries]:
                entries.append((original, clean(match.group(2)), context))

    DEST.mkdir(parents=True, exist_ok=True)
    used_names: set[str] = set()
    by_digest: dict[str, str] = {}
    if MANIFEST.exists():
        for old in json.loads(MANIFEST.read_text(encoding="utf-8")):
            filename = old.get("file")
            digest = old.get("sha256")
            if filename and digest and (DEST / filename).is_file():
                used_names.add(filename)
                by_digest[digest] = filename
    manifest: list[dict[str, object]] = []
    urls: dict[str, str] = {}
    for index, (original, label, context) in enumerate(entries, 1):
        if original.lower().endswith(".zip"):
            manifest.append({"source": original, "status": "archive-omitted"})
            continue
        if original in VIDEO_PLACEHOLDERS:
            manifest.append({"source": original, "status": "video-placeholder"})
            continue
        path = ATTACHMENTS / original
        if not path.is_file() or path.stat().st_size == 0:
            manifest.append({"source": original, "status": "missing-or-empty"})
            continue
        digest = hashlib.sha256(path.read_bytes()).hexdigest()
        if digest in by_digest:
            name = by_digest[digest]
        else:
            name = resource_name(original, label, context, index)
            stem, ext = name.rsplit(".", 1)
            suffix = 2
            while name in used_names:
                name = f"{stem}-{suffix}.{ext}"
                suffix += 1
            shutil.copy2(path, DEST / name)
            used_names.add(name)
            by_digest[digest] = name
        urls[original] = name
        manifest.append({"source": original, "file": name, "bytes": path.stat().st_size, "sha256": digest})

    sections: list[dict] = []
    current: dict | None = None
    paragraph: list[str] = []
    current_context = "Education"
    heading_counts = [0, 0, 0, 0, 0]
    used_ids: set[str] = set()
    equation_count = 0

    def unique_id(text: str) -> str:
        base = slug(text) or "section"
        candidate = base
        suffix = 2
        while candidate in used_ids:
            candidate = f"{base}-{suffix}"
            suffix += 1
        used_ids.add(candidate)
        return candidate

    def flush() -> None:
        nonlocal equation_count
        if current is not None and paragraph:
            body = " ".join(paragraph)
            if body.startswith("$") and body.endswith("$"):
                equation_count += 1
                current["blocks"].append({"type": "feature", "key": f"education-equation-{equation_count}"})
            else:
                current["blocks"].append({"type": "prose", "paragraphs": [body]})
        paragraph.clear()

    for line in lines:
        stripped = line.strip()
        heading = HEADING.match(stripped)
        if heading:
            flush()
            depth = len(heading.group(1))
            title = clean(heading.group(2))
            current_context = title
            if depth == 1:
                if title.startswith("6.2 Education"):
                    continue
                heading_counts[0] += 1
                heading_counts[1:] = [0, 0, 0, 0]
                current = {"id": unique_id(title), "index": str(heading_counts[0]), "kicker": "Education", "title": title, "summary": "", "blocks": []}
                sections.append(current)
            elif current is not None:
                heading_counts[depth - 1] += 1
                heading_counts[depth:] = [0] * (5 - depth)
                index = ".".join(str(count) for count in heading_counts[:depth])
                current["blocks"].append({"type": "subheading", "id": unique_id(title), "index": index, "title": title})
            continue
        if current is None:
            # The Dewey epigraph precedes the first manuscript chapter.
            continue
        if not stripped:
            flush()
            continue
        image = LINK.fullmatch(stripped)
        if image:
            original = unquote(image.group(3).removeprefix("Images_attachments/"))
            feature_key = INTERACTIVE_HTML.get(original) or PHOTO_GALLERIES.get(original)
            if feature_key:
                flush()
                current["blocks"].append({"type": "feature", "key": feature_key})
                continue
        if image and unquote(image.group(3).removeprefix("Images_attachments/")) in VIDEO_PLACEHOLDERS:
            flush()
            current["blocks"].append({"type": "note", "label": "Video coming soon", "body": "The instructional video will be added here."})
            continue
        if image and unquote(image.group(3).removeprefix("Images_attachments/")).lower().endswith(".zip"):
            flush()
            continue
        if image and image.group(1) == "!":
            flush()
            original = unquote(image.group(3).removeprefix("Images_attachments/"))
            if original in urls:
                if urls[original] == "reusable-resources-icon.png":
                    current["blocks"].append({
                        "type": "chapter-link",
                        "target": "build-upon-continue-from-here",
                        "label": "Unlock reusable resources",
                        "imageSrc": f"__BASE__assets/education/{urls[original]}",
                        "imageAlt": "Unlock reusable resources",
                    })
                    continue
                alt = NAMES.get(original, "")
                if not alt:
                    alt = f"Illustration for {current_context}"
                else:
                    alt = alt.replace("-", " ").capitalize()
                current["blocks"].append({"type": "figure", "src": f"__BASE__assets/education/{urls[original]}", "alt": alt})
            else:
                current["blocks"].append({"type": "note", "label": "Image unavailable", "body": f"The source image {original} is empty or missing."})
            continue

        def replace_link(match: re.Match) -> str:
            original = unquote(match.group(3).removeprefix("Images_attachments/"))
            if original in VIDEO_PLACEHOLDERS:
                return "Video coming soon"
            if original not in urls:
                return clean(match.group(2))
            label = LINK_LABELS.get(original, clean(match.group(2)))
            return f"[{label}](__BASE__assets/education/{urls[original]})"

        stripped = LINK.sub(replace_link, stripped)
        if stripped:
            paragraph.append(clean(stripped))
    flush()

    sections[0]["blocks"].insert(0, {
        "type": "epigraph",
        "quote": "Education, therefore, is a process of living and not a preparation for future living.",
        "translationZh": "",
        "attribution": "John Dewey",
        "attributionRole": "My Pedagogic Creed, 1897",
    })

    # Replace editorial directions with the intended working in-site links.
    for section in sections:
        revised = []
        for block in section["blocks"]:
            if block["type"] == "prose":
                paragraph_text = block["paragraphs"][0]
                if paragraph_text.startswith("【此处插入站内跳转"):
                    continue
                if "Unlock Reusable Resources" in paragraph_text:
                    continue
                if paragraph_text.startswith("【点击查看 Sustainability"):
                    block["paragraphs"] = ["[Explore the Air-to-Bread sustainability analysis](/sustainability)"]
                if paragraph_text == "**→ Explore Our Games**":
                    block["paragraphs"] = ["[Explore our games](/games)"]
            revised.append(block)
        section["blocks"] = revised

    # Consecutive manuscript images and PDF links become the editorial grids.
    media_groups = []
    pdf_link = re.compile(r"^\[([^]]+)\]\((__BASE__assets/education/[^)]+\.pdf)\)$", re.I)
    for section in sections:
        grouped = []
        pending = []

        def flush_media() -> None:
            if len(pending) < 2:
                grouped.extend(block for block, _ in pending)
            else:
                key = f"education-media-group-{len(media_groups) + 1}"
                media_groups.append({"key": key, "items": [item for _, item in pending]})
                grouped.append({"type": "feature", "key": key})
            pending.clear()

        for block in section["blocks"]:
            item = None
            if block["type"] == "figure":
                item = {"kind": "image", "src": block["src"], "alt": block["alt"], "caption": block.get("caption", "")}
            elif block["type"] == "prose":
                match = pdf_link.fullmatch(block["paragraphs"][0])
                if match:
                    item = {"kind": "pdf", "src": match.group(2), "title": match.group(1).replace("_", " ").removesuffix(".pdf")}
            if item:
                if pending and item["kind"] != pending[-1][1]["kind"]:
                    flush_media()
                pending.append((block, item))
            else:
                flush_media()
                grouped.append(block)
        flush_media()
        section["blocks"] = grouped

    (ROOT / "src/data/engagement/educationMediaGroups.json").write_text(
        json.dumps(media_groups, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )

    serialized = json.dumps(sections, ensure_ascii=False, indent=2)
    OUTPUT.write_text(
        'import type { WikiSection } from "../../components/wiki/wikiPageTypes";\n\n'
        'import { educationAssetUrl, replaceEducationAssetLinks } from "./educationRemoteAssets";\n\n'
        '// Generated from education-source.md by scripts/import-education.py.\n'
        f'const rawSections: WikiSection[] = {serialized};\n\n'
        'export const educationSections: WikiSection[] = rawSections.map((section) => ({\n'
        '  ...section,\n'
        '  blocks: section.blocks?.map((block) => block.type === "figure"\n'
        '    ? { ...block, src: educationAssetUrl(block.src) }\n'
        '    : block.type === "chapter-link" && block.imageSrc\n'
        '      ? { ...block, imageSrc: educationAssetUrl(block.imageSrc) }\n'
        '    : block.type === "prose"\n'
        '      ? { ...block, paragraphs: block.paragraphs.map(replaceEducationAssetLinks) }\n'
        '      : block),\n'
        '}));\n',
        encoding="utf-8",
    )
    MANIFEST.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Imported {len(sections)} chapters, {len(entries)} referenced assets, {len(by_digest)} unique files.")
    print("Unavailable:", [item["source"] for item in manifest if item.get("status") == "placeholder"])


if __name__ == "__main__":
    main()
