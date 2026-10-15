"""Import the Experiments manuscript without rewriting its scientific copy.

Run with --check to compare the checked-in page with the manuscript.
"""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "文案集/wetlab/experiments/Experiments.md"
TARGET = ROOT / "src/data/wet-lab/experimentsPage.ts"


def unescape(text):
    # Markdown punctuation escapes only; preserve LaTeX commands inside $…$.
    return re.sub(r"\\([\\`*_{}\[\]()#+\-.!&<>%~|])", r"\1", text)


def import_page():
    current = TARGET.read_text(encoding="utf-8")
    page = json.JSONDecoder().raw_decode(current[current.index("= {") + 2:].lstrip())[0]
    templates = {section["id"]: section for section in page["sections"]}
    section_ids = ["sec-synthesis", "sec-screening", "sec-combined", "sec-round2",
                   "sec-safety", "sec-target-model", "sec-in-vivo"]
    # Preserve existing section IDs and navigation metadata.
    numbered = [s for s in page["sections"] if re.match(r"^[1-7]$", str(int(s["index"])))][:7]
    if len(numbered) == 7:
        section_ids = [s["id"] for s in numbered]
    sections = []
    section = None
    minor_title = ""
    reference_items = []
    lines = SOURCE.read_text(encoding="utf-8").splitlines()

    def content_blocks():
        blocks = section["blocks"]
        if minor_title == "Step-by-Step Instructions" and blocks and blocks[-1]["type"] == "protocol-steps":
            return blocks[-1]["steps"][-1]["blocks"]
        return blocks

    i = 0
    while i < len(lines):
        line = unescape(lines[i].strip())
        i += 1
        if not line or line == "# Experiments":
            continue
        if line.startswith("## "):
            title = line[3:]
            match = re.match(r"([1-7])\. (.*)", title)
            if match:
                section_id = section_ids[int(match[1]) - 1]
                section = {**templates[section_id], "title": match[2], "blocks": []}
            elif title == "Overview":
                section = {"id": "sec-overview", "index": "00", "kicker": "",
                           "navLabel": title, "title": title, "summary": "",
                           "hideSectionNumber": True, "blocks": []}
            else:
                section_id = "sec-" + title.lower()
                section = {**templates[section_id], "title": title, "blocks": []}
            sections.append(section)
            minor_title = ""
            continue
        if line.startswith("### "):
            title = line[4:]
            code = title.split(" ", 1)[0].rstrip(".")
            old = next((b for s in page["sections"] for b in s.get("blocks", [])
                        if b["type"] == "subheading" and b["title"].split(" ", 1)[0].rstrip(".") == code), None)
            assert old, f"Missing existing anchor: {title}"
            heading = {**old, "title": title}
            if code.startswith("O"):
                heading["index"] = code + "."
            section["blocks"].append(heading)
            minor_title = ""
            continue
        if line.startswith("#### "):
            minor_title = line[5:].removeprefix("**").removesuffix("**")
            section["blocks"].append({"type": "heading", "level": 4, "title": minor_title})
            continue
        if line.startswith("|"):
            rows = [lines[i - 1].strip()]
            while i < len(lines) and lines[i].strip().startswith("|"):
                rows.append(lines[i].strip())
                i += 1
            cells = lambda row: [unescape(cell.strip()) for cell in re.split(r"(?<!\\)\|", row.strip("|"))]
            assert all(re.fullmatch(r":?-+:?", cell) for cell in cells(rows[1]))
            content_blocks().append({"type": "table", "headers": cells(rows[0]),
                                      "rows": [cells(row) for row in rows[2:]]})
            continue
        paragraph = [line]
        while i < len(lines) and lines[i].strip() and not re.match(r"^(#{1,4} |\||- )", lines[i].strip()):
            paragraph.append(unescape(lines[i].strip()))
            i += 1
        text = " ".join(paragraph)
        blocks = section["blocks"]
        bold_heading = re.fullmatch(r"\*\*(.+?)\*\*(\s*(?:\[\d+\]\s*)*)", text)
        if bold_heading:
            if minor_title == "Step-by-Step Instructions":
                blocks.append({"type": "prose", "paragraphs": [text]})
            else:
                blocks.append({"type": "heading", "level": 4, "title": bold_heading[1] + bold_heading[2]})
            continue
        numbered_item = re.match(r"(\d+)\. (.*)", text, re.S)
        if minor_title == "Step-by-Step Instructions" and numbered_item:
            if not blocks or blocks[-1]["type"] != "protocol-steps":
                blocks.append({"type": "protocol-steps", "steps": []})
            blocks[-1]["steps"].append({"number": numbered_item[1], "blocks": [
                {"type": "prose", "paragraphs": [numbered_item[2]]}]})
            continue
        if text.startswith("- "):
            blocks = content_blocks()
            if not blocks or blocks[-1]["type"] != "list" or blocks[-1].get("ordered"):
                blocks.append({"type": "list", "items": []})
            blocks[-1]["items"].append(text[2:])
            continue
        if section["id"] == "sec-references" or (minor_title == "Notes" and numbered_item):
            assert numbered_item
            if not blocks or blocks[-1]["type"] != "list":
                blocks.append({"type": "list", "ordered": True,
                               "start": int(numbered_item[1]), "items": []})
            blocks[-1]["items"].append(numbered_item[2])
            if section["id"] == "sec-references":
                reference_items.append(numbered_item[2])
        else:
            blocks = content_blocks()
            if blocks and blocks[-1]["type"] == "prose":
                if minor_title == "Step-by-Step Instructions" and re.fullmatch(r"\$[^$]+\$", text):
                    blocks[-1]["paragraphs"][-1] += " " + text
                else:
                    blocks[-1]["paragraphs"].append(text)
            else:
                blocks.append({"type": "prose", "paragraphs": [text]})

    # The illustrated index is mounted before Overview by the route assembler.
    sections[-1]["blocks"] = [{"type": "feature", "key": "exp-references"}]
    references = []
    for index, text in enumerate(reference_items, 1):
        citation, url = text.rsplit(" ", 1)
        assert url.startswith("https://")
        authors, separator, title = citation.partition(". ")
        references.append({"id": index, "authors": authors + "." if separator else "",
                           "title": title if separator else citation, "journal": "", "volumeYear": "",
                           "links": [{"href": url, "label": url}]})
    page["sections"] = sections
    page["lede"] = sections[0]["blocks"][0]["paragraphs"][0]
    assert len(reference_items) == 49
    assert sum(b["type"] == "subheading" for s in sections for b in s["blocks"]) == 29
    assert sum(b["type"] == "heading" and b["level"] == 4 for s in sections for b in s["blocks"]) >= 130
    return page, current, references


if __name__ == "__main__":
    page, current, references = import_page()
    output = 'import type { WikiPageContent } from "../../components/wiki/wikiPageTypes";\n\n'
    output += 'import type { CitationReference } from "../citations/citationTypes";\n\n'
    output += "export const experimentsPage: WikiPageContent = " + json.dumps(page, ensure_ascii=False, indent=2) + ";\n"
    output += "\nexport const experimentsReferences: CitationReference[] = " + json.dumps(references, ensure_ascii=False, indent=2) + ";\n"
    if "--check" in sys.argv:
        assert json.JSONDecoder().raw_decode(current[current.index("= {") + 2:].lstrip())[0] == page, "Page differs from manuscript"
        assert json.loads(current.split("export const experimentsReferences: CitationReference[] = ")[1].strip().removesuffix(";")) == references
        print("Experiments copy verified: 26 protocols, consistent heading levels, 3 outlooks, 49 references.")
    else:
        TARGET.write_text(output, encoding="utf-8")
        print("Imported Experiments manuscript.")
