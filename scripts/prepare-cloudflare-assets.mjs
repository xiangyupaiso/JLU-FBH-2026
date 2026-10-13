import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import {
  mkdir,
  open,
  readFile,
  readdir,
  stat,
  writeFile,
} from "node:fs/promises";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

export const ASSET_LIMIT = 25 * 1024 * 1024;
export const CHUNK_SIZE = 20 * 1024 * 1024;

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".pdf": "application/pdf",
  ".pptx":
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  ".zip": "application/zip",
};

async function* filesIn(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) yield* filesIn(file);
    else if (entry.isFile()) yield file;
  }
}

/** Keep originals untouched; exclude only their deployment copies from the asset upload. */
export async function prepareAssets(distDir, manifestPath, commit) {
  const manifest = {};
  const ignored = [];
  const chunked = new Map();
  for await (const file of filesIn(distDir)) {
    const size = (await stat(file)).size;
    if (size <= ASSET_LIMIT) continue;
    const relative = path.relative(distDir, file).split(path.sep).join("/");
    if (!/^(?:jlu-fbh\/)?assets\/education\//.test(relative)) {
      throw new Error(`Oversized asset has no Worker route: ${relative}`);
    }
    const hash = createHash("sha256");
    for await (const bytes of createReadStream(file)) hash.update(bytes);
    const sha256 = hash.digest("hex");
    let chunks = chunked.get(sha256);
    if (!chunks) {
      chunks = [];
      const directory = path.join(distDir, "_large-assets", sha256);
      await mkdir(directory, { recursive: true });
      const source = await open(file, "r");
      try {
        for (let offset = 0; offset < size; offset += CHUNK_SIZE) {
          const buffer = Buffer.alloc(Math.min(CHUNK_SIZE, size - offset));
          let filled = 0;
          while (filled < buffer.length) {
            const { bytesRead } = await source.read(
              buffer,
              filled,
              buffer.length - filled,
              offset + filled,
            );
            if (!bytesRead) throw new Error(`Unexpected end of ${relative}`);
            filled += bytesRead;
          }
          const name = `${chunks.length}.bin`;
          await writeFile(path.join(directory, name), buffer);
          chunks.push({
            path: `/_large-assets/${sha256}/${name}`,
            size: buffer.length,
          });
        }
      } finally {
        await source.close();
      }
      chunked.set(sha256, chunks);
    }
    manifest[`/${relative}`] = {
      size,
      sha256,
      chunks,
      contentType:
        contentTypes[path.extname(file).toLowerCase()] ||
        "application/octet-stream",
    };
    ignored.push(`/${relative}`);
  }
  await mkdir(path.dirname(manifestPath), { recursive: true });
  await writeFile(
    manifestPath,
    `export default ${JSON.stringify(manifest)};\n`,
  );
  // Vite rebuilds dist each time, so these rules never accumulate across builds.
  const ignorePath = path.join(distDir, ".assetsignore");
  const existing = await readFile(ignorePath, "utf8").catch((error) => {
    if (error.code !== "ENOENT") throw error;
    return "";
  });
  await writeFile(
    ignorePath,
    `${existing}\n# Originals are served by the large-asset Worker.\n${ignored.join("\n")}\n`,
  );
  const version = JSON.stringify({
    commit,
    largeAssets: Object.entries(manifest).map(([url, asset]) => ({
      url,
      size: asset.size,
      sha256: asset.sha256,
    })),
  });
  await writeFile(path.join(distDir, "deployment-version.json"), version);
  const slugDir = path.join(distDir, "jlu-fbh");
  if (
    await stat(slugDir)
      .then((entry) => entry.isDirectory())
      .catch(() => false)
  ) {
    await writeFile(path.join(slugDir, "deployment-version.json"), version);
  }
  console.log(
    `Cloudflare assets: ${chunked.size} original files served in ${CHUNK_SIZE / 1024 / 1024} MiB chunks; ${ignored.length} URLs preserved.`,
  );
  return manifest;
}

if (
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  await prepareAssets(
    path.resolve("dist"),
    path.resolve(".tmp-build/cloudflare/asset-manifest.mjs"),
    execFileSync("git", ["rev-parse", "HEAD"], { encoding: "utf8" }).trim(),
  );
}
