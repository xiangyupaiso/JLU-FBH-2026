"""Import the supplied Integrated Human Practices copy into reader blocks.

The source is a team-authored draft. This script preserves its paragraphs and
headings while omitting empty headings, editorial instructions, and local image
references that need the separate iGEM upload workflow.
"""

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "文案集/engagement/human-practices/6.1 Integrated Human Practices.md"
TARGET = ROOT / "src/data/engagement/humanPracticesCopy.ts"
MAIN_TITLES = {"Overview", "Human", "Origin", "Project", "Return"}
UNESCAPE = re.compile(r"\\([\\`*_{}\[\]()#+\-.!&])")
IMAGE = re.compile(r"^!\[.*?\]\(.*?\)$")
HEADING = re.compile(r"^(#{1,6})\s+(.+?)\s*$")
SKIP = {"树状图", "表格Stakeholder Communication Strategy Matrix for iGEM"}


def clean(value: str) -> str:
    value = UNESCAPE.sub(r"\1", value.strip())
    return value.replace("** CIRC **", "**CIRC**").replace("we used**", "we used **")


def flush_paragraphs(blocks: list[dict], paragraphs: list[str]) -> None:
    # Each prose block is an IntersectionObserver reveal target. A giant block
    # can never reach the reader's 8% visibility threshold, hiding its text.
    for start in range(0, len(paragraphs), 2):
        blocks.append({"type": "prose", "paragraphs": paragraphs[start:start + 2]})
    paragraphs.clear()


lines = SOURCE.read_text(encoding="utf-8-sig").splitlines()
sections: list[dict] = []
current: dict | None = None
paragraphs: list[str] = []
pending_heading: tuple[str, int] | None = None
heading_count = 0


def flush_heading() -> None:
    global pending_heading, heading_count
    if pending_heading is None or current is None:
        return
    title, level = pending_heading
    pending_heading = None
    if title.lower() in {"context", "issue", "reframing", "cycle"}:
        paragraphs.append(f"**{title}**")
        return
    flush_paragraphs(current["blocks"], paragraphs)
    heading_count += 1
    current["blocks"].append({
        "type": "subheading",
        "id": f"hp-{current['id']}-{heading_count}",
        "index": f"{heading_count:02d}",
        "title": title,
    })


for raw in lines:
    line = clean(raw)
    match = HEADING.match(line)
    if match:
        level = len(match.group(1))
        title = match.group(2)
        if level == 1 and title in MAIN_TITLES:
            if current is not None:
                flush_paragraphs(current["blocks"], paragraphs)
                sections.append(current)
            current = {
                "id": f"hp-{title.lower()}",
                "index": f"{len(sections) + 1:02d}",
                "kicker": "Integrated Human Practices",
                "navLabel": title,
                "title": title,
                "summary": "",
                "blocks": [],
            }
            pending_heading = None
            continue
        if current is None:
            continue
        split_id = None
        if title == "Plasmid Design" and current["id"] == "hp-project":
            split_id = "hp-plasmid-design"
        elif title == "体内" and current["id"] == "hp-plasmid-design":
            split_id = "hp-in-vivo"
        elif title == "体外" and current["id"] == "hp-in-vivo":
            split_id = "hp-in-vitro"
        if split_id is not None:
            flush_paragraphs(current["blocks"], paragraphs)
            sections.append(current)
            current = {
                "id": split_id,
                "index": f"{len(sections) + 1:02d}",
                "kicker": "",
                "navLabel": title if title not in {"体内", "体外"} else ("In Vivo" if title == "体内" else "In Vitro"),
                "title": title,
                "summary": "",
                "blocks": [],
            }
            pending_heading = None
            continue
        if level == 1 and title == "Summary":
            title = "Summary"
        if pending_heading is not None:
            previous_title, previous_level = pending_heading
            if level > previous_level or previous_title.startswith(("A 线", "B 线", "IV.")):
                flush_heading()
            else:
                # An empty same-level heading in the draft carries no copy.
                pending_heading = None
        if level >= 4 and not title.startswith("（"):
            paragraphs.append(f"**{title}**")
        else:
            pending_heading = (title, level)
        continue

    if current is None or not line or line in SKIP:
        continue
    if IMAGE.match(line):
        flush_heading()
        flush_paragraphs(current["blocks"], paragraphs)
        filename = re.sub(r"%20", " ", line.split("/")[-1].rstrip(")"))
        current["blocks"].append({
            "type": "image-placeholder",
            "filename": filename,
            "instruction": "Source diagram supplied locally; iGEM asset upload and provenance verification pending.",
        })
        continue
    if "to be inserted here" in line.lower():
        continue
    if line.startswith("|---") or re.match(r"^\|[-:| ]+\|$", line):
        continue
    if line.startswith("|") and line.endswith("|"):
        flush_heading()
        flush_paragraphs(current["blocks"], paragraphs)
        cells = [clean(cell) for cell in line.strip("|").split("|")]
        if current["blocks"] and current["blocks"][-1]["type"] == "table":
            current["blocks"][-1]["rows"].append(cells)
        else:
            current["blocks"].append({"type": "table", "headers": cells, "rows": []})
        continue
    flush_heading()
    if line.startswith("- "):
        line = "• " + line[2:]
    if line in {"Context", "Issue", "Reframing", "Cycle"}:
        line = f"**{line}**"
    paragraphs.append(line)

if current is not None:
    flush_paragraphs(current["blocks"], paragraphs)
    sections.append(current)

# The original circular timeline remains a visual chapter navigator after the
# Human method introduces the CIRC loop. Its labels are sourced from sections.
for section in sections:
    if section["id"] == "hp-human":
        section["blocks"].append({"type": "feature", "key": "hp-timeline-original"})
        break

# The first image is a brief for an interactive stakeholder tree. Its seven
# interview records remain verbatim data, shown alongside the scroll-linked
# nodes rather than behind a static image placeholder.
origin = next(section for section in sections if section["id"] == "hp-origin")
origin_blocks = origin["blocks"]
diagram_index = next(i for i, block in enumerate(origin_blocks) if block["type"] == "image-placeholder" and block["filename"] == "image 1.png")
summary_index = next(i for i, block in enumerate(origin_blocks) if block["type"] == "subheading" and block["title"] == "Summary")
dialogue_blocks = origin_blocks[diagram_index + 1:summary_index]
origin_interviews: list[dict] = []
active_interview: dict | None = None
for block in dialogue_blocks:
    if block["type"] == "subheading":
        if block["title"].startswith("IV."):
            continue
        if active_interview is not None:
            origin_interviews.append(active_interview)
        active_interview = {"id": block["id"], "title": block["title"], "blocks": []}
    elif active_interview is not None:
        active_interview["blocks"].append(block)
if active_interview is not None:
    origin_interviews.append(active_interview)
# Keep the original interview transcript in the page as well as in the
# scroll-linked cards. The interactive version must not hide source copy.
origin["blocks"] = origin_blocks[:diagram_index] + [{"type": "feature", "key": "hp-origin-tree"}] + origin_blocks[diagram_index + 1:]

contents = [{key: value for key, value in section.items() if key not in {"index", "kicker"}} for section in sections]
output = (
    'import type { WikiContentBlock, WikiSection } from "../../components/wiki/wikiPageTypes";\n\n'
    + "// Generated from the team-supplied 6.1 Integrated Human Practices draft.\n"
    + "// Re-run scripts/import-human-practices.py after updating the source file.\n"
    + 'type SectionContent = Omit<WikiSection, "index" | "kicker">;\n'
    + 'const buildSection = (content: SectionContent, order: number): WikiSection => ({\n'
    + '  ...content,\n  index: String(order + 1).padStart(2, "0"),\n  kicker: "",\n});\n\n'
    + "const sectionContents: SectionContent[] = "
    + json.dumps(contents, ensure_ascii=False, indent=2)
    + ";\n\n"
    + "export const humanPracticesSections: WikiSection[] = sectionContents.map(buildSection);\n"
    + "\nexport const originInterviewRecords: Array<{ id: string; title: string; blocks: WikiContentBlock[] }> = "
    + json.dumps(origin_interviews, ensure_ascii=False, indent=2)
    + ";\n"
)
TARGET.write_text(output, encoding="utf-8")
print(f"Wrote {len(sections)} sections to {TARGET}")
print(f"Blocks: {sum(len(section['blocks']) for section in sections)}")
