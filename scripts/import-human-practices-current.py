"""Build HP page copy from the current English manuscript.

Usage: python scripts/import-human-practices-current.py <source.md>
"""
import json
import re
import sys
from pathlib import Path

source = Path(sys.argv[1]).read_text(encoding="utf-8-sig")
target = Path(__file__).resolve().parents[1] / "src/data/engagement/humanPracticesCopy.ts"
unescape = re.compile(r"\\([\\`*_{}\[\]()#+\-.!&<>|~])")
chapters = list(re.finditer(r"^# ([^#].*)$", source, re.M))


def clean(s):
    # The new interview heading and body identify Professor Kou; an Expo
    # cross-reference still carries the superseded name from the old diagram.
    return (unescape.sub(r"\1", s.strip())
            .replace("表1  3i", "Table 1  3i")
            .replace("图1  Return 阶段利益相关者树状关系图", "Figure 1  Return stakeholder network")
            .replace("** CIRC **", "**CIRC**")
            .replace("we used**", "we used **")
            .replace("conviction:**", "conviction: **")
            .replace("categories:* ", "categories: *")
            .replace("Liu Yawen", "Kou Changgui"))


def chapter(name):
    for i, match in enumerate(chapters):
        if clean(match.group(1)) == name:
            return source[match.end():chapters[i + 1].start() if i + 1 < len(chapters) else len(source)]
    raise ValueError(f"Missing chapter {name}")


def split_at(body, pattern):
    match = re.search(pattern, body, re.M)
    if not match:
        raise ValueError(f"Missing heading {pattern}")
    return body[:match.start()], body[match.start():]


def prose(lines):
    parts, current = [], []
    for raw in list(lines) + [""]:
        value = clean(raw)
        if not value:
            if current:
                parts.append(" ".join(current))
                current = []
        elif value == "表格Stakeholder Communication Strategy Matrix for iGEM" or "to be inserted here" in value.lower() or value == "刘雅文改成寇长贵":
            continue
        elif value.startswith("#### "):
            if current:
                parts.append(" ".join(current))
                current = []
            parts.append(f"**{value[5:]}**")
        elif value.startswith("https://"):
            if current:
                parts.append(" ".join(current))
                current = []
            if value.lower().endswith(".pdf"):
                parts.append(f"[View document]({value})")
            elif value.startswith("https://video.igem.org/"):
                parts.append(f"[Watch video]({value})")
            # Interview photographs are placed beside their matching cards.
        elif value.startswith("!["):
            continue
        elif value in {"Context", "Issue", "Reframing", "Cycle"} or re.fullmatch(r"\*\*(Context|Issue|Reframing|Cycle)\*\*", value):
            if current:
                parts.append(" ".join(current))
                current = []
            parts.append(f"**{value.strip('*')}**")
        elif value.startswith("- "):
            if current:
                parts.append(" ".join(current))
                current = []
            parts.append("• " + value[2:])
        else:
            current.append(value)
    return [{"type": "prose", "paragraphs": parts[i:i + 2]} for i in range(0, len(parts), 2)]


def article(body, section_id, section_no, feature=None):
    blocks, pending, table = [], [], None
    sub_no, inserted = 0, False
    current_heading = section_id.removeprefix("hp-").replace("-", " ").title()

    def flush():
        nonlocal table
        if pending:
            blocks.extend(prose(pending))
            pending.clear()
        if table:
            blocks.append(table)
            table = None

    for raw in body.splitlines():
        line = clean(raw)
        heading = re.match(r"^(#{2,6})\s+(.+)$", line)
        if heading:
            flush()
            title = re.sub(r"^(?:[IVX]+\.|[一二三四五六]+、)\s*", "", clean(heading.group(2)).strip("*"))
            current_heading = title
            if len(heading.group(1)) == 2:
                sub_no += 1
                blocks.append({"type": "subheading", "id": f"{section_id}-{sub_no}", "index": f"{section_no}.{sub_no}", "title": title})
            else:
                blocks.append({"type": "heading", "level": min(len(heading.group(1)), 6), "title": title})
        elif line.startswith("!["):
            flush()
            if feature and not inserted:
                blocks.append({"type": "feature", "key": feature})
                inserted = True
        elif line.startswith("https://") and line.lower().endswith((".avif", ".webp")):
            flush()
            if section_id == "hp-collaboration":
                blocks.append({"type": "figure", "src": line, "alt": current_heading})
        elif line.startswith("|") and line.endswith("|"):
            if re.match(r"^\|[-:| ]+\|$", line) or not any(clean(c) for c in line.strip("|").split("|")):
                continue
            if pending:
                blocks.extend(prose(pending))
                pending.clear()
            cells = [clean(c) for c in line.strip("|").split("|")]
            if table is None:
                table = {"type": "table", "headers": cells, "rows": []}
            else:
                table["rows"].append(cells)
        else:
            if table:
                flush()
            pending.append(raw)
    flush()
    if feature and not inserted:
        raise ValueError(f"Missing tree image in {section_id}")
    return blocks


def section(name, number, feature=None, interview_heading=None):
    body = chapter(name)
    if interview_heading:
        before, rest = split_at(body, interview_heading)
        summary = split_at(rest, r"^## Summary\s*$")[1] if re.search(r"^## Summary\s*$", rest, re.M) else ""
        body = before + "\n" + summary
    section_id = "hp-" + name.lower().replace(" ", "-")
    return {"id": section_id, "navLabel": name, "title": name, "summary": "", "blocks": article(body, section_id, number, feature)}


sections = [section("Overview", 1), section("Human", 2),
            section("Origin", 3, "hp-origin-tree", r"^## IV\\?\. Stakeholder Interview Contents")]
note = re.search(r"^## Project\s*$(.*?)(?=^## return\s*$)", source[:chapters[2].start()], re.M | re.S)
if not note:
    raise ValueError("Missing project phase overview")
sections.append({"id": "hp-project", "navLabel": "Project", "title": "Project", "summary": "", "blocks": prose(note.group(1).splitlines())})
for name, feature in [("Plasmid Design", "hp-plasmid-tree"), ("In Vitro", "hp-in-vitro-tree"),
                      ("In Vivo", "hp-in-vivo-tree"), ("Return", "hp-return-tree")]:
    sections.append(section(name, len(sections) + 1, feature,
                            r"^## (?:(?:[IVX0-9]+\\?\.|[一二三四五六]+、)\s*)?Stakeholder Interviews"))
sections.append(section("Collaboration", len(sections) + 1))
sections.append(section("Summary", len(sections) + 1))

origin = split_at(chapter("Origin"), r"^## IV\\?\. Stakeholder Interview Contents")[1]
origin = split_at(origin, r"^## Summary\s*$")[0]
matches = list(re.finditer(r"^### (.+)$", origin, re.M))
records = []
for i, match in enumerate(matches):
    end = matches[i + 1].start() if i + 1 < len(matches) else len(origin)
    lines = origin[match.end():end].splitlines()
    lines = [f"**{clean(m.group(1))}**" if (m := re.match(r"^####\s+(.+)$", line))
             else f"**{clean(line)}**" if clean(line).startswith("Follow‑up Re‑interview")
             else line for line in lines if line.strip() != "####"]
    records.append({"id": f"hp-origin-interview-{i + 1}", "title": clean(match.group(1)), "blocks": prose(lines)})
if len(records) != 7:
    raise ValueError(f"Expected seven Origin interviews, got {len(records)}")

output = ('import type { WikiContentBlock, WikiSection } from "../../components/wiki/wikiPageTypes";\n\n'
          '// Generated from the supplied English 6.1 Integrated Human Practices manuscript.\n'
          'type SectionContent = Omit<WikiSection, "index" | "kicker">;\n'
          'const buildSection = (content: SectionContent, order: number): WikiSection => ({\n'
          '  ...content,\n  index: String(order + 1).padStart(2, "0"),\n  kicker: "",\n});\n\n'
          'const sectionContents: SectionContent[] = ' + json.dumps(sections, ensure_ascii=False, indent=2) + ';\n\n'
          'export const humanPracticesSections: WikiSection[] = sectionContents.map(buildSection);\n\n'
          'export const originInterviewRecords: Array<{ id: string; title: string; blocks: WikiContentBlock[] }> = '
          + json.dumps(records, ensure_ascii=False, indent=2) + ';\n')
target.write_text(output, encoding="utf-8")
print(f"Wrote {len(sections)} chapters and {len(records)} Origin interviews")
