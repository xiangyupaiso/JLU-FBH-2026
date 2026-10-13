"""Record the Education URLs inferred from the directory supplied by the user."""

from __future__ import annotations

import collections
import csv
import hashlib
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MANIFEST = ROOT.parent / "上传批次/10-13/upload-manifest.csv"
CATALOG = ROOT / "src/data/assets/igem-assets-catalog.json"
REGISTRY = ROOT / "IGEM_ASSET_REGISTRY.md"
START = "<!-- EDUCATION-10-13-UPLOAD-START -->"
END = "<!-- EDUCATION-10-13-UPLOAD-END -->"


def main() -> None:
    rows = list(csv.DictReader(MANIFEST.open(encoding="utf-8-sig", newline="")))
    catalog = json.loads(CATALOG.read_text(encoding="utf-8"))
    by_path = {entry.get("localPath"): key for key, entry in catalog["assets"].items()}
    table = [
        START,
        "## Education 10-13 上传资源（目录规则推断）",
        "",
        "这些 URL 依据用户提供的 iGEM 目录和文件名推断，未逐项核验。图片扩展名按 iGEM 转码示例改为 `.avif`。HTML 已编入网页代码，PPT 使用另行上传的 PDF。",
        "",
        "| 本地资源 | 推断的 CDN 链接 | 状态 |",
        "| --- | --- | --- |",
    ]
    for row in rows:
        local = row["source_path"]
        name = row["upload_path"]
        url = row["url"]
        source = ROOT / local
        kind = "pdf" if source.suffix.lower() == ".pdf" else "image"
        key = by_path.get(local) or f"education-1013-{source.stem}-{source.suffix[1:]}"
        existing = catalog["assets"].get(key, {})
        existing.update({
            "id": key,
            "fileName": source.name,
            "category": "engagement",
            "localPath": local,
            "md5": hashlib.md5(source.read_bytes()).hexdigest(),
            "sha256": row["sha256"],
            "fileSize": int(row["bytes"]),
            "uploadUrl": url,
            "status": "in-use",
            "kind": kind,
            "upload": {
                "target": {"platform": "igem", "year": 2026, "team": "6056"},
                "status": "uploaded",
                "remoteName": url.rsplit("/", 1)[-1],
                "source": "user-provided-directory-pattern",
                "uploadedAt": None,
                "verifiedAt": None,
                "references": [{
                    "file": "src/data/engagement/educationRemoteAssets.ts",
                    "old": f"__BASE__assets/education/{source.name}",
                    "new": url,
                    "type": "generated-asset-map",
                    "status": "replaced",
                }],
                "unresolved": [],
                "checks": ["TypeScript and production build passed; individual CDN URLs not checked at user request"],
                "error": None,
            },
        })
        catalog["assets"][key] = existing
        table.append(f"| `{local}` | [打开]({url}) | 已引用，未逐项核验 |")

    counts = collections.Counter(entry.get("status") for entry in catalog["assets"].values())
    kinds = collections.Counter(entry.get("kind") for entry in catalog["assets"].values())
    catalog["meta"]["lastUpdated"] = "2026-10-13"
    catalog["meta"]["stats"] = {
        "total": len(catalog["assets"]),
        "inUse": counts["in-use"],
        "standby": counts["standby"],
        "deprecated": counts["deprecated"],
        "byKind": dict(kinds),
    }
    temp = CATALOG.with_suffix(".json.tmp")
    temp.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    temp.replace(CATALOG)

    markdown = REGISTRY.read_text(encoding="utf-8")
    section = "\n".join(table + [END, ""])
    if START in markdown:
        before, tail = markdown.split(START, 1)
        _, after = tail.split(END, 1)
        markdown = before + section + after
    else:
        markdown = markdown.rstrip() + "\n\n" + section
    temp = REGISTRY.with_suffix(".md.tmp")
    temp.write_text(markdown, encoding="utf-8")
    temp.replace(REGISTRY)
    print(f"Recorded {len(rows)} inferred Education asset URLs")


if __name__ == "__main__":
    main()
