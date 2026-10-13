import test from "node:test";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { createAssetWorker } from "../cloudflare/serve-large-assets.mjs";
import {
  ASSET_LIMIT,
  CHUNK_SIZE,
  prepareAssets,
} from "./prepare-cloudflare-assets.mjs";

const bytes = Buffer.from(
  "A complete attachment spanning several immutable chunks.",
);
const chunks = Array.from({ length: Math.ceil(bytes.length / 9) }, (_, index) =>
  bytes.subarray(index * 9, index * 9 + 9),
);
const sha256 = createHash("sha256").update(bytes).digest("hex");
const url = "https://wiki.example/jlu-fbh/assets/education/original.pdf";
const asset = {
  size: bytes.length,
  sha256,
  contentType: "application/pdf",
  chunks: chunks.map((data, index) => ({
    path: `/chunk-${index}.bin`,
    size: data.length,
  })),
};
const worker = createAssetWorker({
  "/jlu-fbh/assets/education/original.pdf": asset,
});

function environment(missingChunk = -1) {
  return {
    ASSETS: {
      async fetch(request) {
        const index = Number(
          new URL(request.url).pathname.match(/chunk-(\d+)/)?.[1],
        );
        if (!Number.isInteger(index))
          return new Response("ordinary static asset");
        if (index === missingChunk) return new Response("SPA fallback");
        let data = chunks[index];
        const range = request.headers.get("Range");
        if (range) {
          const [, start, end] = /bytes=(\d+)-(\d+)/.exec(range);
          data = data.subarray(Number(start), Number(end) + 1);
        }
        return new Response(data, {
          status: range ? 206 : 200,
          headers: { "Content-Type": "application/octet-stream" },
        });
      },
    },
  };
}

async function request(options = {}, env = environment()) {
  const pending = [];
  const response = await worker.fetch(new Request(url, options), env, {
    waitUntil(promise) {
      pending.push(promise);
    },
  });
  return { response, pending };
}

test("complete download preserves the original bytes and hash", async () => {
  const { response, pending } = await request();
  assert.equal(response.status, 200);
  assert.equal(response.headers.get("Content-Type"), "application/pdf");
  const result = Buffer.from(await response.arrayBuffer());
  await Promise.all(pending);
  assert.deepEqual(result, bytes);
  assert.equal(createHash("sha256").update(result).digest("hex"), sha256);
});

test("PDF byte ranges cross chunk boundaries without changing any bytes", async () => {
  for (const [start, end] of [
    [0, 0],
    [7, 20],
    [0, bytes.length - 1],
    [bytes.length - 3, bytes.length - 1],
  ]) {
    const { response, pending } = await request({
      headers: { Range: `bytes=${start}-${end}` },
    });
    assert.equal(response.status, 206);
    assert.equal(
      response.headers.get("Content-Range"),
      `bytes ${start}-${end}/${bytes.length}`,
    );
    assert.deepEqual(
      Buffer.from(await response.arrayBuffer()),
      bytes.subarray(start, end + 1),
    );
    await Promise.all(pending);
  }
  for (const [range, expected] of [
    ["bytes=-5", bytes.subarray(-5)],
    ["bytes=8-", bytes.subarray(8)],
    ["bytes=8-99999", bytes.subarray(8)],
  ]) {
    const { response, pending } = await request({ headers: { Range: range } });
    assert.equal(response.status, 206);
    assert.deepEqual(Buffer.from(await response.arrayBuffer()), expected);
    await Promise.all(pending);
  }
});

test("unsatisfiable ranges and unsupported methods return explicit HTTP errors", async () => {
  for (const range of ["bytes=9999-", "bytes=10-3", "bytes=-0"]) {
    const { response } = await request({ headers: { Range: range } });
    assert.equal(response.status, 416);
    assert.equal(
      response.headers.get("Content-Range"),
      `bytes */${bytes.length}`,
    );
  }
  assert.equal((await request({ method: "POST" })).response.status, 405);
});

test("HEAD and cache validation do not fetch or stream the attachment", async () => {
  const env = {
    ASSETS: {
      fetch() {
        throw new Error("Unnecessary asset read");
      },
    },
  };
  const { response } = await request({ method: "HEAD" }, env);
  assert.equal(response.headers.get("Content-Length"), String(bytes.length));
  assert.equal(response.body, null);
  assert.equal(
    (await request({ headers: { "If-None-Match": `W/"${sha256}"` } }, env))
      .response.status,
    304,
  );
});

test("If-Range mismatch and multipart ranges fall back to the complete original", async () => {
  for (const headers of [
    { Range: "bytes=1-2", "If-Range": '"old-version"' },
    { Range: "bytes=0-1,4-5" },
  ]) {
    const { response, pending } = await request({ headers });
    assert.equal(response.status, 200);
    assert.deepEqual(Buffer.from(await response.arrayBuffer()), bytes);
    await Promise.all(pending);
  }
});

test("missing chunks abort the download instead of silently returning an HTML fallback", async () => {
  const { response, pending } = await request({}, environment(1));
  await assert.rejects(response.arrayBuffer(), /Asset chunk unavailable/);
  await Promise.all(pending);
});

test("ordinary static requests retain their original asset handling", async () => {
  const response = await worker.fetch(
    new Request("https://wiki.example/jlu-fbh/assets/education/small.jpg"),
    environment(),
    {},
  );
  assert.equal(await response.text(), "ordinary static asset");
});

test("the build preserves original files, deduplicates aliases and bounds every upload chunk", async () => {
  const directory = await mkdtemp(
    path.join(tmpdir(), "igem-cloudflare-assets-"),
  );
  try {
    const original = Buffer.alloc(ASSET_LIMIT + 137, 0x9a);
    const dist = path.join(directory, "dist");
    for (const prefix of ["", "jlu-fbh/"]) {
      await mkdir(path.join(dist, prefix, "assets/education"), {
        recursive: true,
      });
      await writeFile(
        path.join(dist, prefix, "assets/education/large.pdf"),
        original,
      );
    }
    const manifest = await prepareAssets(
      dist,
      path.join(directory, "manifest.mjs"),
      "test-commit",
    );
    const entry = manifest["/assets/education/large.pdf"];
    assert.equal(Object.keys(manifest).length, 2);
    assert.deepEqual(
      entry.chunks,
      manifest["/jlu-fbh/assets/education/large.pdf"].chunks,
    );
    const rebuilt = [];
    for (const chunk of entry.chunks) {
      assert.ok(chunk.size <= CHUNK_SIZE && chunk.size < ASSET_LIMIT);
      rebuilt.push(await readFile(path.join(dist, chunk.path)));
    }
    assert.deepEqual(Buffer.concat(rebuilt), original);
    assert.deepEqual(
      await readFile(path.join(dist, "assets/education/large.pdf")),
      original,
    );
    assert.deepEqual(
      await readFile(path.join(dist, "jlu-fbh/assets/education/large.pdf")),
      original,
    );
    assert.match(
      await readFile(path.join(dist, ".assetsignore"), "utf8"),
      /\/jlu-fbh\/assets\/education\/large.pdf/,
    );
    assert.equal(
      JSON.parse(
        await readFile(path.join(dist, "deployment-version.json"), "utf8"),
      ).commit,
      "test-commit",
    );
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});
