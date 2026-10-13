# Large education attachments on Cloudflare

Workers Static Assets rejects individual files larger than 25 MiB. `npm run build`
keeps the original files in `public/` and `dist/`, writes content-addressed chunks
of at most 20 MiB under `dist/_large-assets/`, and adds the oversized deployment
copies to `dist/.assetsignore`. The `/assets/education/` and
`/jlu-fbh/assets/education/` URLs continue to return the original file.

The generated manifest lives in `.tmp-build/cloudflare/asset-manifest.mjs`, outside
the public assets directory. `worker.mjs` uses it to stream the chunks sequentially
through a fixed-length response, with the original MIME type and a SHA-256 ETag.
GET, HEAD, conditional requests and single byte ranges are supported. The Worker
selects byte ranges itself because the static asset binding can ignore Range
headers. Small files retain the existing static asset handling.

Run `npm run test:cloudflare` for download, range, cache and preservation checks.
After `npm run build`, `wrangler deploy --dry-run` validates the actual upload
inventory, and `wrangler dev --local` exercises the real Workers runtime.
Do not rebuild `dist/` while the local Worker is running: a reload can observe
the intermediate output before `.assetsignore` and the manifest are generated.

`/deployment-version.json` and `/jlu-fbh/deployment-version.json` expose the Git
commit built by CI and the original large-file hashes for deployment verification.
The official static wiki build still retains its complete original attachments;
the exclusion rules apply only to the Cloudflare upload.
