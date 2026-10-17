"""Extract the supplied interview copy for the four Human Practices trees.

Usage: python scripts/build-human-practices-tree-copy.py <source.md>
The output is checked in so the website does not depend on a local download.
"""

import json
import re
import sys
from pathlib import Path


SOURCE = Path(sys.argv[1])
OUTPUT = Path(__file__).resolve().parents[1] / "src/data/engagement/humanPracticesTreeCopy.ts"
text = SOURCE.read_text(encoding="utf-8")


def unescape(value: str) -> str:
    return re.sub(r"\\([\\`*_{}\[\]()#+.!<>|~-])", r"\1", value).strip()


def section_body(name: str) -> str:
    match = re.search(rf"^# {re.escape(name)}\s*$", text, re.M)
    if not match:
        raise ValueError(f"Missing section: {name}")
    next_heading = re.search(r"^# [^#]", text[match.end():], re.M)
    end = match.end() + next_heading.start() if next_heading else len(text)
    return text[match.end():end]


def paragraphs(body: str) -> list[str]:
    chunks = re.split(r"\n\s*\n", body.strip())
    result = []
    for chunk in chunks:
        lines = [unescape(line) for line in chunk.splitlines() if line.strip()]
        if not lines:
            continue
        heading = re.fullmatch(r"#{3,4} \*?(Context|Issue|Reframing|Cycle)\*?", lines[0]) if len(lines) == 1 else None
        if heading:
            result.append(f"**{heading.group(1)}**")
        elif len(lines) == 1 and re.match(r"^\*\*(Context|Issue|Reframing|Cycle)\*\*$", lines[0]):
            result.append(lines[0])
        else:
            result.append(" ".join(lines))
    return result


entries = {}
for section, key in [
    ("Plasmid Design", "plasmid"),
    ("In Vitro", "vitro"),
    ("In Vivo", "vivo"),
    ("Return", "return"),
]:
    body = section_body(section)
    pattern = (
        r"^## \\\((\d+)\\\) (.+)$"
        if section == "Return"
        else r"^### 4\\?\.(\d+) (.+)$"
    )
    matches = list(re.finditer(pattern, body, re.M))
    if not matches:
        raise ValueError(f"Missing interviews: {section}")
    for index, match in enumerate(matches):
        end = matches[index + 1].start() if index + 1 < len(matches) else len(body)
        end_heading = re.search(r"^## Summary\s*$", body[match.end():end], re.M)
        if end_heading:
            end = match.end() + end_heading.start()
        entries[f"{key}-{match.group(1)}"] = {
            "title": unescape(match.group(2)),
            "paragraphs": paragraphs(body[match.end():end]),
        }

output = (
    "// Interview wording from the supplied 6.1 Integrated Human Practices.md.\n"
    "// Diagram labels and chronology are configured in HumanPracticesStageTree.tsx.\n"
    "export type HumanPracticesTreeInterview = { title: string; paragraphs: string[] };\n"
    "export const humanPracticesTreeCopy: Record<string, HumanPracticesTreeInterview> = "
    + json.dumps(entries, ensure_ascii=False, indent=2)
    + ";\n"
)
OUTPUT.write_text(output, encoding="utf-8")
