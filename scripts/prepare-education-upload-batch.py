"""Collect every Education page asset into the user's dated upload batch."""

from __future__ import annotations

import csv
import hashlib
import json
import re
import shutil
import unicodedata
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "public/assets/education"
BATCH = ROOT.parent / "上传批次/10-13"
SECTIONS = ROOT / "src/data/engagement/educationSections.ts"
GALLERIES = ROOT / "src/data/engagement/educationGalleries.json"
GROUPS = ROOT / "src/data/engagement/educationMediaGroups.json"
ASSET_REFERENCE = re.compile(r"__BASE__assets/education/([A-Za-z0-9._/-]+)")
INTERACTIVES = (
    "community-educational-function-map.html",
    "education-design-board.html",
    "breast-guardian-evidence-room.html",
)


def english_name(value: str) -> str:
    normalized = unicodedata.normalize("NFKD", value)
    name = "".join(char for char in normalized if ord(char) < 128)
    name = re.sub(r"[^A-Za-z0-9._-]+", "-", name).strip("-.")
    return name or f"asset-{hashlib.sha256(value.encode()).hexdigest()[:10]}"


def main() -> None:
    text = SECTIONS.read_text(encoding="utf-8")
    raw = text.split("const rawSections: WikiSection[] = ", 1)[1].split(";\n\nexport const", 1)[0]
    sections = json.loads(raw)
    groups = json.loads(GROUPS.read_text(encoding="utf-8"))
    galleries = json.loads(GALLERIES.read_text(encoding="utf-8"))

    paths = set(INTERACTIVES)
    for section in sections:
        for block in section["blocks"]:
            paths.update(ASSET_REFERENCE.findall(json.dumps(block, ensure_ascii=False)))
    for group in groups:
        for item in group["items"]:
            paths.update(ASSET_REFERENCE.findall(item["src"]))
            if item["kind"] == "pdf":
                paths.add("pdf-previews/" + Path(item["src"]).stem + ".webp")
    for gallery in galleries:
        for item in gallery["images"]:
            paths.add("galleries/" + item["file"])

    BATCH.mkdir(parents=True, exist_ok=True)
    previous_manifest = BATCH / "upload-manifest.json"
    previous_paths = {
        record["upload_path"]
        for record in json.loads(previous_manifest.read_text(encoding="utf-8"))
    } if previous_manifest.is_file() else set()
    records = []
    for relative in sorted(paths):
        source = ASSETS / relative
        if not source.is_file() or not source.resolve().is_relative_to(ASSETS.resolve()):
            raise FileNotFoundError(source)
        if source.suffix.lower() == ".zip":
            raise ValueError(f"ZIP is excluded from this batch: {relative}")
        destination = Path(english_name(source.name))
        if any(record["upload_path"] == destination.as_posix() for record in records):
            raise ValueError(f"Duplicate flattened filename: {destination}")
        target = BATCH / destination
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(source, target)
        digest = hashlib.sha256(source.read_bytes()).hexdigest()
        records.append({
            "upload_path": destination.as_posix(),
            "source_path": "public/assets/education/" + relative,
            "sha256": digest,
            "bytes": source.stat().st_size,
            "url": "",
        })

    current_paths = {record["upload_path"] for record in records}
    for stale in previous_paths - current_paths:
        target = (BATCH / stale).resolve()
        if not target.is_relative_to(BATCH.resolve()):
            raise ValueError(f"Unsafe old batch path: {stale}")
        if target.is_file():
            target.unlink()
    for directory in sorted((path for path in BATCH.rglob("*") if path.is_dir()), key=lambda path: len(path.parts), reverse=True):
        try:
            directory.rmdir()
        except OSError:
            pass

    with (BATCH / "upload-manifest.csv").open("w", encoding="utf-8-sig", newline="") as file:
        writer = csv.DictWriter(file, fieldnames=["upload_path", "source_path", "sha256", "bytes", "url"])
        writer.writeheader()
        writer.writerows(records)
    (BATCH / "upload-manifest.json").write_text(
        json.dumps(records, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    (BATCH / "README-upload-instructions.txt").write_text(
        "Education 页面上传批次（2026-10-13）\n"
        "全部资源文件已放在本目录同一层；CSV/JSON 和本说明无需上传。\n"
        "资源文件名已统一为英文。请在 upload-manifest.csv 的 url 列填写每个文件上传后获得的真实 URL，或提供等价的文件名—URL 对照。\n"
        "收到 URL 后会逐一核对并替换网页源码中的本地路径。ZIP 文件已从页面和本批次移除。\n",
        encoding="utf-8",
    )
    print(f"Prepared {len(records)} files, {sum(item['bytes'] for item in records) / 1e6:.1f} MB in {BATCH}")


if __name__ == "__main__":
    main()
