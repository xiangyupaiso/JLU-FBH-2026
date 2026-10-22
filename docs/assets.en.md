# Asset guide

[简体中文](assets.md) | English

## From source to page

```text
文案集/ or another documented source
    ↓ review / a selected importer or processing script
src/data/ + src/assets/ / public/
    ↓ upload copies and manifests
delivery/uploads/<batch>/
    ↓ verify the uploaded files
official CDN URLs + the relevant asset mappings
```

These are explicit maintenance steps. Building the Wiki does not import manuscripts, upload files, or fill in URLs.

| Location                 | Contents                                                     | Check when editing                                                   |
| ------------------------ | ------------------------------------------------------------ | -------------------------------------------------------------------- |
| `文案集/`                | Manuscripts, original images, PDFs, ZIPs, and design sources | Provenance, scientific content, and direct script references         |
| `src/assets/`            | Vite-imported assets and local fallback files                | Static imports, dynamic globs, HTML plates, and enlarged-image links |
| `public/`                | Resources published at fixed URLs                            | Public paths, game entries, course players, and attachments          |
| `src/data/assets/`       | Asset catalog data                                           | Local sources, uploaded URLs, and call sites                         |
| `IGEM_ASSET_REGISTRY.md` | Human-readable asset registry                                | Catalog consistency and the date of recorded checks                  |
| `delivery/uploads/`      | Upload copies, mappings, manifests, and historical checks    | Hashes, target paths, and upload records                             |

## Upload batches

Use the [delivery index](../delivery/README.en.md) to find existing batches. Add new batches under `delivery/uploads/<date-or-clear-batch-name>/`.

Document purpose, source paths, target backend folder, and the file manifest. Record SHA-256 when content traceability is needed. Moving a local batch leaves the official target hierarchy unchanged.

After upload, record the actual backend URL in the asset mapping and check content, dimensions, or hashes. Expected URLs support upload planning; earlier upload and probe records support provenance.

Before reusing an existing batch, check its backend files and URLs to avoid duplicate uploads or accidental replacement.

## Asset tools

See [scripts/README.en.md](../scripts/README.en.md) for commands and write effects.

- Scan and update commands in `igem-asset-manager.mjs` may rewrite catalogs or registries; its default scan writes files.
- `check-cdn-links.mjs` performs network requests and writes a local report. Check response status, then inspect image contents and dimensions as needed.
- `prepare-*` and `import-*` scripts may transform assets or overwrite page data. Read their inputs, outputs, and intended batch.
- `verify-publish-assets.mjs` checks a source-only release target without binary media. The GitHub repository retains original assets, so this is not a general pass condition for the entire repository.

## Retention and cleanup

`文案集/`, `src/assets/`, `public/`, and the game delivery ZIP retain sources, runtime resources, and delivery snapshots. Review purpose, references, and archive records before cleanup.

To reduce repository size, first establish runtime and provenance requirements, then consider separate archives or Git LFS. Removing a current file leaves earlier Git objects in history.
