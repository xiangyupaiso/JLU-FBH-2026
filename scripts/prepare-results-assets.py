"""One-off asset prep: Results manuscript figures -> bundled WebP.

Sources lived in `文案集/project/results/图片和附件/`. **That drop has since been
deleted at the author's instruction**, once all 51 conversions were verified:
only `src/assets/wiki/results/<kebab-name>.webp` is kept, and only those files are
registered in the asset library (never the PNG originals). So this script is now
the provenance record of the conversion rather than something that can be re-run
— re-running it needs the original drop restored first.

Targets follow the wiki asset convention (`src/assets/wiki/results/<kebab-name>.webp`,
see WIKI_ARCHITECTURE_SPEC.md §4.2).

Naming: `results-figNN-<slug>.webp` for the 34 numbered manuscript figures
(Figure 18A/18B carry the letter, Figure 23's three gating panels carry a/b/c),
and `results-<topic>-<what>.webp` for the fourteen unnumbered supplementary
charts of §1.

Images were flattened onto the page's paper white (the sources were transparent
PNGs, which would otherwise pick up the reader backdrop), capped on the long edge
(2200 px for most, 1400–2400 px for the widest composites) and re-encoded as WebP
q82. Not part of the build.
"""

from __future__ import annotations

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "文案集" / "project" / "results" / "图片和附件"
OUT = ROOT / "src" / "assets" / "wiki" / "results"

# source file -> (target file name, max long-edge pixels; 0 = keep native size)
JOBS: list[tuple[str, str, int]] = [
    # --- §1.1.1 proteomic evidence (unnumbered) ---
    ("image 8.png", "results-proteomics-pxd024322-volcano.webp", 0),
    ("image 9.png", "results-proteomics-pxd024322-abundance.webp", 0),
    ("image 11.png", "results-proteomics-pxd028102-volcano.webp", 0),
    ("image 2.png", "results-proteomics-pxd028102-abundance.webp", 0),
    # --- §1.1.2 single-cell evidence (unnumbered) ---
    ("image 12.png", "results-singlecell-celltype-umap.webp", 0),
    ("image 18.png", "results-singlecell-malignant-detection.webp", 0),
    # --- §1.1.4 immunohistochemistry panels (unnumbered) ---
    ("image 14.png", "results-ihc-panel-1.webp", 0),
    ("image 16.png", "results-ihc-panel-2.webp", 0),
    ("image 7.png", "results-ihc-panel-3.webp", 0),
    ("image 17.png", "results-ihc-panel-4.webp", 0),
    # --- §1.2.2 structural validation charts (unnumbered) ---
    ("image 13.png", "results-structural-burial-vs-fill-scatter.webp", 0),
    ("image 1.png", "results-structural-p2-p9-burial-heatmap.webp", 0),
    ("image 10.png", "results-structural-anchor-burial-by-peptide.webp", 0),
    ("image 4.png", "results-structural-burial-fill-by-peptide.webp", 0),
    # --- numbered figures ---
    (
        "97bfbf57-fee3-4b38-bdea-23a06d706c41.png",
        "results-fig01-round1-elispot-wells.webp",
        2200,
    ),
    (
        "a83f91ce-f192-4d38-900b-5a2f31605bc7.png",
        "results-fig02-round1-k562-killing.webp",
        1800,
    ),
    (
        "e42e8679-e96c-47ab-ba7b-0f063d0734a9.png",
        "results-fig03-round1-cd8-cd69-flow.webp",
        2200,
    ),
    (
        "4ce2346e-24ac-47ac-8df6-199578776378.png",
        "results-fig04-combined-plasmid-map.webp",
        2400,
    ),
    (
        "20e9d65a-6e34-4797-8933-748a363ee045.png",
        "results-fig05-template-linearisation-gel.webp",
        0,
    ),
    (
        "78d04484-1971-4430-89b6-b01f5a4ea9c9.png",
        "results-fig06-back-splice-junction-sanger.webp",
        0,
    ),
    (
        "ec77997e-8682-40b9-9aa2-c0da69244b04.png",
        "results-fig07-dc-maturation-flow.webp",
        2000,
    ),
    (
        "912dc770-2281-4c66-bfcd-1ba4eef436e3.png",
        "results-fig08-dc-maturation-quantification.webp",
        0,
    ),
    (
        "2a4b1a02-23a6-4e40-827a-a0b9fe1dabe5.png",
        "results-fig09-anti-flag-western-blot.webp",
        1800,
    ),
    (
        "82c448e2-e127-4e4c-8033-9f2c4db4a2a8.png",
        "results-fig10-cd8-cd69-flow.webp",
        2000,
    ),
    (
        "f4ca7c80-92ea-4c4c-b2c0-2dc1c8d6ed36.png",
        "results-fig11-cd8-cd69-quantification.webp",
        0,
    ),
    (
        "65ac4127-c29e-4427-84e4-2ad339cdcb96.png",
        "results-fig12-cd8-cd28-flow.webp",
        2000,
    ),
    (
        "e16eb03f-f51f-4ce6-ba99-01e7b7ba60b7.png",
        "results-fig13-cd8-cd28-quantification.webp",
        0,
    ),
    (
        "ab7a19a2-9fed-4ac4-bd7c-f73bb7bea699.png",
        "results-fig14-effector-memory-flow.webp",
        2000,
    ),
    (
        "ecd994aa-ce82-4d85-95de-90cd5d75a886.png",
        "results-fig15-effector-memory-quantification.webp",
        0,
    ),
    (
        "e81f9606-015d-4205-a65d-6e0afb8a82c3.png",
        "results-fig16-round2-elispot-wells.webp",
        2200,
    ),
    (
        "1ce7be98-3662-4aa2-8cb9-d408ae11163a.png",
        "results-fig17-mda-mb-231-killing.webp",
        1800,
    ),
    ("image 6.png", "results-fig18a-stability-gel.webp", 0),
    ("RNA remaining (%).png", "results-fig18b-rna-remaining-curve.webp", 2400),
    (
        "726d510cfc58672eab89e1521ebcafe9.png",
        "results-fig19-off-target-cytotoxicity.webp",
        1800,
    ),
    (
        "5871af52-4dce-4c96-8b02-e6a7af92393e.png",
        "results-fig20-lnp-dose-viability.webp",
        1800,
    ),
    (
        "pLV3-CMV-TACSTD2(human)-3×FLAG-CopGFP-Puro 图谱.png",
        "results-fig21-lentiviral-plasmid-map.webp",
        2400,
    ),
    (
        "image 3.png",
        "results-fig22-gfp-transduction-microscopy.webp",
        1800,
    ),
    ("image.png", "results-fig23a-sort-gate-fsc-ssc.webp", 0),
    ("image 5.png", "results-fig23b-sort-gate-singlets.webp", 0),
    ("image 15.png", "results-fig23c-sort-gate-gfp.webp", 0),
    (
        "bed1b059-3a46-40c2-8968-bd563e65e049.png",
        "results-fig24-trop2-mrna-rt-pcr.webp",
        0,
    ),
    (
        "feb4776c-fd27-4471-ba0c-cb244fc7dc49.png",
        "results-fig25-surface-trop2-flow.webp",
        1800,
    ),
    (
        "465491a6-92f5-4de2-8c04-b131f2090a5d.jpeg",
        "results-fig26-excised-tumours.webp",
        0,
    ),
    (
        "Create a horizontal study-timeline diagram for a mouse tumour experiment. One ho.png",
        "results-fig27-immunisation-scheme.webp",
        2200,
    ),
    (
        "9458b226-2e84-44af-bb78-95b25d378d0c.png",
        "results-fig28-tumour-growth-curves.webp",
        0,
    ),
    (
        "4f7a5381-1d52-4519-a028-036cc0ba1b52.png",
        "results-fig29-cd8-granzyme-b-immunofluorescence.webp",
        1400,
    ),
    (
        "a8a51b69-1170-4ae5-b41a-f73f4cec442f.png",
        "results-fig30-splenic-dc-maturation.webp",
        2200,
    ),
    (
        "52e4affa-ccb3-46e2-bfa2-4bdbaaba06f0.png",
        "results-fig31-splenic-cd69-activation.webp",
        2200,
    ),
    (
        "9b095abd-6b0b-4f5e-acb3-07ca0f9aacbf.png",
        "results-fig32-splenic-central-memory.webp",
        2200,
    ),
    (
        "5a286742-747e-4840-927a-b72ec827d283.png",
        "results-fig33-splenic-ifn-gamma.webp",
        2200,
    ),
    (
        "861afa32-33e4-4d78-bc08-d847ff001be8.png",
        "results-fig34-splenic-granzyme-b.webp",
        2200,
    ),
]

OUT.mkdir(parents=True, exist_ok=True)

total_before = 0
total_after = 0

for source_name, target_name, max_edge in JOBS:
    source = SRC / source_name
    if not source.exists():
        raise SystemExit(f"missing source: {source}")
    total_before += source.stat().st_size
    with Image.open(source) as opened:
        image = opened.convert("RGBA")
        # Flatten onto the page's paper white: the manuscript figures are drawn
        # on white and a transparent PNG would otherwise pick up the backdrop.
        canvas = Image.new("RGB", image.size, (255, 255, 255))
        canvas.paste(image, mask=image.split()[3])
        if max_edge and max(canvas.size) > max_edge:
            scale = max_edge / max(canvas.size)
            canvas = canvas.resize(
                (round(canvas.width * scale), round(canvas.height * scale)),
                Image.LANCZOS,
            )
        target = OUT / target_name
        canvas.save(target, "WEBP", quality=82, method=6)
    total_after += target.stat().st_size
    print(
        f"{target_name:52s} {canvas.size[0]:5d}x{canvas.size[1]:<5d} "
        f"{source.stat().st_size / 1024:8.1f} -> {target.stat().st_size / 1024:7.1f} KB"
    )

print(
    f"\n{len(JOBS)} assets  "
    f"{total_before / 1024 / 1024:.1f} MB -> {total_after / 1024 / 1024:.1f} MB"
)
