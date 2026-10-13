"""Prepare browser-friendly photographs from the Education photo archives.

Run with the bundled workspace Python after the archives have been extracted.
The generated JPEGs are checked into public/assets/education/galleries.
"""

from __future__ import annotations

import json
import os
import re
import shutil
import subprocess
import tempfile
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT.parent / "6.2 Education （英_终稿）" / "Images_attachments"
DEST = ROOT / "public/assets/education/galleries"
OUTPUT = ROOT / "src/data/engagement/educationGalleries.json"
HEIF_CONVERT = Path(
    os.environ.get("HEIF_CONVERT")
    or shutil.which("heif-convert")
    or Path.home()
    / ".cache/codex-runtimes/codex-primary-runtime/dependencies/native/libheif/libheif/bin/heif-convert.exe"
)

GALLERIES = {
    "Hailun Pilu Virtual Laboratory (1).zip": "virtual-laboratory",
    "Synbio Classroom.zip": "synbio-classroom",
    "Winter Outreach.zip": "winter-outreach",
    "Air to Bread Classroom.zip": "air-to-bread-classroom",
    "Vaccine Classroom.zip": "vaccine-classroom",
    "Xinghua Festival.zip": "xinghua-festival",
    "Health Run.zip": "health-run",
    "Music Festival.zip": "music-festival",
    "Ethics Debate.zip": "ethics-debate",
}


def main() -> None:
    DEST.mkdir(parents=True, exist_ok=True)
    (ROOT / ".tmp-build").mkdir(exist_ok=True)
    galleries = []
    for archive, slug in GALLERIES.items():
        folder = SOURCE / archive.removesuffix(".zip")
        photos = sorted(
            p for p in folder.rglob("*") if p.suffix.lower() in {".jpg", ".jpeg", ".png", ".heic"}
        )
        if not photos:
            raise FileNotFoundError(f"No photographs in {folder}")
        output_folder = DEST / slug
        output_folder.mkdir(exist_ok=True)
        images = []
        for photo in photos:
            output_name = f"{photo.stem.lower().replace('_', '-')}.jpg"
            target = output_folder / output_name
            with tempfile.TemporaryDirectory(dir=ROOT / ".tmp-build") as temporary:
                input_path = photo
                if photo.suffix.lower() == ".heic":
                    if not HEIF_CONVERT.is_file():
                        raise FileNotFoundError(f"HEIC converter missing: {HEIF_CONVERT}")
                    input_path = Path(temporary) / "converted.jpg"
                    subprocess.run([str(HEIF_CONVERT), "-q", "92", str(photo), str(input_path)], check=True, capture_output=True)
                with Image.open(input_path) as source:
                    image = ImageOps.exif_transpose(source)
                    image.thumbnail((1800, 1800), Image.Resampling.LANCZOS)
                    image.convert("RGB").save(target, "JPEG", quality=83, optimize=True)
            caption = re.sub(r"^\d+[_-]", "", photo.stem).replace("_", " ").replace("-", " ").strip().capitalize()
            images.append({"file": f"{slug}/{output_name}", "caption": caption})
        galleries.append({"key": f"education-gallery-{slug}", "title": archive.removesuffix(".zip"), "images": images})
        print(f"{slug}: {len(images)} photographs")
    OUTPUT.write_text(json.dumps(galleries, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()
