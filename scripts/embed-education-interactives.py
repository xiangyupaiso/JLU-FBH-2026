"""Prepare the self-contained Education interactives for bundling in the wiki app."""

from __future__ import annotations

import base64
import io
import re
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "public/assets/education"
OUTPUT = ROOT / "src/data/engagement/interactive"
FILES = (
    "community-educational-function-map.html",
    "education-design-board.html",
    "breast-guardian-evidence-room.html",
)
DATA_IMAGE = re.compile(r"data:image/(?:png|webp);base64,([A-Za-z0-9+/=]+)")


def optimize(match: re.Match[str]) -> str:
    image = Image.open(io.BytesIO(base64.b64decode(match.group(1))))
    result = io.BytesIO()
    image.save(result, format="WEBP", quality=88, method=5)
    return "data:image/webp;base64," + base64.b64encode(result.getvalue()).decode("ascii")


def main() -> None:
    OUTPUT.mkdir(parents=True, exist_ok=True)
    for name in FILES:
        source = SOURCE / name
        text = source.read_text(encoding="utf-8")
        optimized, count = DATA_IMAGE.subn(optimize, text)
        (OUTPUT / name).write_text(optimized, encoding="utf-8")
        print(f"{name}: {count} images, {len(text) / 1e6:.1f} MB -> {len(optimized) / 1e6:.1f} MB")


if __name__ == "__main__":
    main()
