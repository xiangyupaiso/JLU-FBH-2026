"""Render first-page previews for Education's inline PDF cards."""

from __future__ import annotations

import json
from pathlib import Path

import pypdfium2 as pdfium
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "public/assets/education"
OUTPUT = ASSETS / "pdf-previews"
GROUPS = ROOT / "src/data/engagement/educationMediaGroups.json"


def main() -> None:
    OUTPUT.mkdir(exist_ok=True)
    groups = json.loads(GROUPS.read_text(encoding="utf-8"))
    names = {
        item["src"].rsplit("/", 1)[-1]
        for group in groups
        for item in group["items"]
        if item["kind"] == "pdf"
    }
    for name in sorted(names):
        source = ASSETS / name
        target = OUTPUT / f"{source.stem}.webp"
        with pdfium.PdfDocument(source) as document:
            page = document[0]
            preview = page.render(scale=1.25).to_pil()
            preview.thumbnail((900, 1100), Image.Resampling.LANCZOS)
            preview.convert("RGB").save(target, "WEBP", quality=82, method=6)
        print(name, "->", target.name)


if __name__ == "__main__":
    main()
