from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "文案集/wetlab/Alternative_Platform/图片和附件"
OUTPUT = ROOT / "src/assets/wiki/alternative-platform"

ASSETS = {
    "platform-comparison": "Mea Fig 1.png",
    "necessity-chain": "Create a publication-quality BioRender scientific figure titled “The Necessity C.png",
    "backbone-architecture": "Create a publication-quality BioRender mechanism figure titled “Engineering the.png",
    "evidence-dependency-map": "Create a publication-ready BioRender-style SCIENTIFIC DEPENDENCY MAP, -CirCure -.png",
    "release-workflow": "放行流程图.png",
    "round-one-ranking": "image 1.png",
    "round-one-elispot": "image.png",
    "in-vivo-results": "9458b226-2e84-44af-bb78-95b25d378d0c.png",
    "evidence-tiers": "证据链.png",
}


def main() -> None:
    OUTPUT.mkdir(parents=True, exist_ok=True)
    before = after = 0

    for name, filename in ASSETS.items():
        source = SOURCE / filename
        target = OUTPUT / f"{name}.webp"
        before += source.stat().st_size
        with Image.open(source) as image:
            dimensions = f"{image.width}x{image.height}"
            image.save(target, "WEBP", quality=92, method=6)
        after += target.stat().st_size
        print(f"{name}: {dimensions}, {target.stat().st_size:,} bytes")

    print(f"total: {before:,} -> {after:,} bytes")


if __name__ == "__main__":
    main()
