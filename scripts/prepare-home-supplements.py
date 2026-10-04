"""Prepare supplied artwork without changing its colours or painted content."""

import hashlib
import json
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "src/assets/home/supplements"
SOURCES = {
    "tear": Path.home() / "Downloads/tear",
    "thinking": Path.home() / "Downloads/home 2/thinking&solution",
    "fan": Path.home() / "Downloads/扇形",
}


def main():
    OUTPUT.mkdir(parents=True, exist_ok=True)
    manifest = {}
    for scene, folder in SOURCES.items():
        layers = []
        for source in sorted(folder.glob("*.png"), key=lambda p: int(p.stem.split("-")[-1])):
            number = int(source.stem.split("-")[-1])
            image = Image.open(source).convert("RGBA")
            width, height = image.size
            box = image.getbbox()
            if not box:
                continue
            left, top, right, bottom = box
            filename = f"{scene}-{number}.webp"
            image.crop(box).save(OUTPUT / filename, lossless=True, method=6)
            layers.append({
                "number": number, "file": filename,
                "left": left / width * 100, "top": top / height * 100,
                "width": (right - left) / width * 100,
                "height": (bottom - top) / height * 100,
                "source": f"{folder.name}/{source.name}",
                "sha256": hashlib.sha256(source.read_bytes()).hexdigest(),
            })
        manifest[scene] = {"aspect": width / height, "layers": layers}
    (OUTPUT / "manifest.json").write_text(json.dumps(manifest, indent=2) + "\n")
    print(f"Prepared {sum(len(s['layers']) for s in manifest.values())} lossless layers.")


if __name__ == "__main__":
    main()
