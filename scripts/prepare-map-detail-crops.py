"""Rebuild five lossless map details without runtime SVG frame-cleanup filters.

Source: src/assets/home/story/scene-3-layer-2.webp, identical to
https://static.igem.wiki/teams/6056/wiki/files/pages/home/scene-3-layer-2.webp
SHA-256: 7cba5e836e6e48155ca0d78fd907eb0450436067ffb116a00410a99eb88d62a8

Only the original SVG mask stripes x=5.44/95.24, width=0.55 (0-100 units)
change alpha. The original sRGB colour matrix is baked at source resolution;
RGB and all pixels outside those stripes remain unchanged. Native fractional
edge coverage models the black stripe and clipped white-image source-over
operations. Browser scaling can still affect the subpixel stroke edges.
Run with Python and Pillow; no source artwork is overwritten.
"""

import hashlib
import math
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
ART = ROOT / "src/assets/home/story"
SOURCE_SHA256 = "7cba5e836e6e48155ca0d78fd907eb0450436067ffb116a00410a99eb88d62a8"
STRIPES = ((5.44, 0.55), (95.24, 0.55))
PIECES = (
    ("cloud-west", 0, 30, 8, 9),
    ("cloud-east", 93, 25, 7, 9),
    ("wave-west-1", 0, 64, 8, 4),
    ("wave-west-2", 0, 69, 8, 4),
    ("wave-east-4", 91, 81, 9, 5),
)


def main():
    source = ART / "scene-3-layer-2.webp"
    if hashlib.sha256(source.read_bytes()).hexdigest() != SOURCE_SHA256:
        raise SystemExit("Unexpected map detail source; inspect before rebuilding")
    image = Image.open(source).convert("RGBA")
    width, height = image.size
    pixels = image.load()
    for start, extent in STRIPES:
        left, right = start * width / 100, (start + extent) * width / 100
        for x in range(math.floor(left), math.ceil(right)):
            coverage = max(0, min(x + 1, right) - max(x, left))
            for y in range(height):
                red, green, blue, alpha = pixels[x, y]
                ink = max(0, min(1, 100 * (blue / 255 - red / 255))) if alpha else 0
                mask = max(0, min(1, 1 - coverage + coverage * coverage * ink))
                pixels[x, y] = red, green, blue, math.floor(alpha * mask + 0.5)
    for name, x, y, crop_width, crop_height in PIECES:
        left = max(0, math.floor(x * width / 100) - 1)
        top = max(0, math.floor(y * height / 100) - 1)
        right = min(width, math.ceil((x + crop_width) * width / 100) + 1)
        bottom = min(height, math.ceil((y + crop_height) * height / 100) + 1)
        crop = image.crop((left, top, right, bottom))
        target = ART / f"map-detail-baked-{name}.webp"
        crop.save(target, lossless=True, exact=True, method=6)
        with Image.open(target) as decoded:
            if decoded.convert("RGBA").tobytes() != crop.tobytes():
                raise SystemExit(f"Lossless verification failed: {target}")
        print(f"{name}: x={left}, y={top}, width={right-left}, height={bottom-top}")


if __name__ == "__main__":
    main()
