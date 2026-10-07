"""One-off asset prep: Hardware manuscript figures -> bundled WebP.

Sources live in `文案集/drylab/hardware/图片和附件/`. Targets follow the wiki asset
convention (`src/assets/wiki/<page>/<kebab-name>.webp`). Two of the six are
greyscale patent drawings, so they are converted losslessly in place rather than
forced through the colour pipeline. Not part of the build.
"""

from __future__ import annotations

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "文案集" / "drylab" / "hardware" / "图片和附件"
OUT = ROOT / "src" / "assets" / "wiki" / "hardware"

# source file -> (target file name, quality). Line art gets a higher quality.
JOBS = [
    ("eaad5138-da6c-449b-be28-da9d433883a1.png", "hardware-fig1-gen1-overview.webp", 90),
    ("0434a0962a144ba6e43cef45a0bd3bf3.png", "hardware-fig2-process-chain.webp", 82),
    ("cdb65d8d-4429-4265-bbc6-e33030d36a7f.png", "hardware-fig3-gen1-exploded.webp", 90),
    ("3f7f96ee9e1bc7bbee9f685ebffc11ea.png", "hardware-fig4-uv-interlock.webp", 82),
    ("3f6d74bbcd1836e7ecbdf1ab5f5a1132.png", "hardware-fig5-gen2-optical-electrical.webp", 82),
    ("d1e8552e820313d80297e3ae6d911835.png", "hardware-fig6-gen2-process-coverage.webp", 82),
]

OUT.mkdir(parents=True, exist_ok=True)

for source_name, target_name, quality in JOBS:
    source = SRC / source_name
    if not source.exists():
        raise SystemExit(f"missing source: {source}")
    with Image.open(source) as image:
        if image.mode == "L":
            # Already a two-tone patent drawing: keep the grey channel.
            converted = image
        else:
            rgba = image.convert("RGBA")
            # Flatten onto paper white so the figure does not pick up the page tint.
            converted = Image.new("RGB", rgba.size, (255, 255, 255))
            converted.paste(rgba, mask=rgba.split()[3])
        converted.save(OUT / target_name, "WEBP", quality=quality, method=6)
    print(
        f"{target_name:42s} {converted.size[0]}x{converted.size[1]}  "
        f"{converted.mode}  {(OUT / target_name).stat().st_size / 1024:6.0f} KB"
    )
