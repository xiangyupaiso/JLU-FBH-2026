"""One-off asset prep: manuscript figures -> bundled WebP + EDA report PDF.

Sources live in `文案集/wetlab/design/图片和附件/`. Targets follow the wiki asset
convention (`src/assets/wiki/<page>/<kebab-name>.webp`); the EDA report is a
public document served from `public/assets/docs/`. Not part of the build.
"""

from __future__ import annotations

from pathlib import Path
from shutil import copyfile

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "文案集" / "wetlab" / "design" / "图片和附件"
IMG_OUT = ROOT / "src" / "assets" / "wiki" / "design"
DOC_OUT = ROOT / "public" / "assets" / "docs"

# source file -> (target file name, max width)
JOBS = [
    ("Create a circular scientific workflow figure on a white background, flat vector.png",
     "design-fig1-circular-workflow.webp", 2200),
    ("Create a structured two-column comparison grid figure on a white background, fla (1).png",
     "design-fig2a-stability.webp", 2400),
    ("Create a structured two-column comparison grid figure on a white background, fla (2).png",
     "design-fig2b-translation-initiation.webp", 2400),
    ("Create a structured two-column comparison grid figure on a white background, fla (3).png",
     "design-fig2c-innate-sensing.webp", 2400),
    ("Create four tall rounded-rectangle card tiles in one row on a white background,.png",
     "design-fig3-four-antigens.webp", 2200),
    ("Create an illustrated screening funnel figure on a white background, flat vector (2).png",
     "design-fig4-screening-funnel.webp", 2200),
    ("环状RNA疫苗机制 recovered.png",
     "design-fig5-mechanism-of-action.webp", 2200),
    ("Create a diagram of two Design-Build-Test-Learn cycles side by side on a white b.png",
     "design-fig7-two-design-cycles.webp", 2200),
    ("Create a horizontal study-timeline diagram for a mouse tumour experiment. One ho.png",
     "design-fig8-in-vivo-study-design.webp", 2200),
]

IMG_OUT.mkdir(parents=True, exist_ok=True)

for source_name, target_name, max_width in JOBS:
    source = SRC / source_name
    if not source.exists():
        raise SystemExit(f"missing source: {source}")
    with Image.open(source) as image:
        image = image.convert("RGBA")
        # Flatten onto the page's paper white: the figures are drawn on white and
        # a transparent PNG would otherwise pick up the reader's backdrop.
        canvas = Image.new("RGB", image.size, (255, 255, 255))
        canvas.paste(image, mask=image.split()[3])
        if canvas.width > max_width:
            height = round(canvas.height * max_width / canvas.width)
            canvas = canvas.resize((max_width, height), Image.LANCZOS)
        canvas.save(IMG_OUT / target_name, "WEBP", quality=82, method=6)
    print(f"{target_name:44s} {canvas.size[0]}x{canvas.size[1]}  "
          f"{(IMG_OUT / target_name).stat().st_size / 1024:7.0f} KB")

DOC_OUT.mkdir(parents=True, exist_ok=True)
report = Path(r"D:\Download\EDA_Report_CirCure(OCR).pdf")
if not report.exists():
    raise SystemExit(f"missing EDA report: {report}")
target = DOC_OUT / "design-eda-report-nc3rs.pdf"
copyfile(report, target)
print(f"{target.name:44s} {'':13s} {target.stat().st_size / 1024:7.0f} KB")
