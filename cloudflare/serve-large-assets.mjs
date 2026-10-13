function byteRange(value, size) {
  if (!value || !value.startsWith("bytes=") || value.includes(",")) return null;
  const match = /^bytes=(\d*)-(\d*)$/.exec(value);
  if (!match || (!match[1] && !match[2])) return null;
  const start = match[1]
    ? Number(match[1])
    : Math.max(0, size - Number(match[2]));
  const end =
    match[1] && match[2] ? Math.min(Number(match[2]), size - 1) : size - 1;
  if (
    !Number.isSafeInteger(start) ||
    !Number.isSafeInteger(end) ||
    start > end ||
    start >= size
  )
    return false;
  return { start, end };
}

// Static Assets may return the complete chunk even when sent a Range header.
// Select the requested bytes while streaming; never buffer the whole chunk.
async function pipeSlice(body, writable, from, to) {
  const reader = body.getReader();
  const writer = writable.getWriter();
  let offset = 0;
  try {
    while (offset <= to) {
      const { value, done } = await reader.read();
      if (done) throw new Error("Truncated asset chunk");
      const start = Math.max(0, from - offset);
      const end = Math.min(value.byteLength, to + 1 - offset);
      if (end > start) await writer.write(value.subarray(start, end));
      offset += value.byteLength;
    }
  } finally {
    await reader.cancel().catch(() => {});
    reader.releaseLock();
    writer.releaseLock();
  }
}

/** Assemble immutable asset chunks without buffering the complete attachment. */
export function createAssetWorker(manifest) {
  return {
    async fetch(request, env, ctx) {
      const url = new URL(request.url);
      let pathname;
      try {
        pathname = decodeURIComponent(url.pathname);
      } catch {
        return new Response("Invalid URL", { status: 400 });
      }
      const asset = Object.hasOwn(manifest, pathname)
        ? manifest[pathname]
        : null;
      if (!asset) return env.ASSETS.fetch(request);
      if (request.method !== "GET" && request.method !== "HEAD") {
        return new Response("Method not allowed", {
          status: 405,
          headers: { Allow: "GET, HEAD" },
        });
      }
      const etag = `"${asset.sha256}"`;
      const headers = new Headers({
        "Content-Type": asset.contentType,
        "Accept-Ranges": "bytes",
        "Cache-Control": "public, max-age=0, must-revalidate",
        ETag: etag,
        "X-Content-Type-Options": "nosniff",
      });
      const match = request.headers.get("If-None-Match");
      if (
        match &&
        match
          .split(",")
          .some(
            (value) =>
              value.trim() === "*" || value.trim().replace(/^W\//, "") === etag,
          )
      ) {
        return new Response(null, { status: 304, headers });
      }
      const ifRange = request.headers.get("If-Range");
      const range =
        request.method === "GET" && (!ifRange || ifRange === etag)
          ? byteRange(request.headers.get("Range"), asset.size)
          : null;
      if (range === false) {
        headers.set("Content-Range", `bytes */${asset.size}`);
        return new Response(null, { status: 416, headers });
      }
      const start = range?.start ?? 0;
      const end = range?.end ?? asset.size - 1;
      const length = end - start + 1;
      headers.set("Content-Length", String(length));
      if (range)
        headers.set("Content-Range", `bytes ${start}-${end}/${asset.size}`);
      if (request.method === "HEAD") return new Response(null, { headers });
      // FixedLengthStream gives Workers an exact Content-Length for PDF range readers.
      const { readable, writable } =
        typeof FixedLengthStream === "undefined"
          ? new TransformStream()
          : new FixedLengthStream(length);
      const pipeline = (async () => {
        let offset = 0;
        for (const chunk of asset.chunks) {
          const lastByte = offset + chunk.size - 1;
          if (lastByte >= start && offset <= end) {
            const from = Math.max(0, start - offset);
            const to = Math.min(chunk.size - 1, end - offset);
            const chunkUrl = new URL(chunk.path, url.origin);
            const partial = from !== 0 || to !== chunk.size - 1;
            const response = await env.ASSETS.fetch(new Request(chunkUrl));
            const contentLength = response.headers.get("Content-Length");
            if (
              response.status !== 200 ||
              !response.body ||
              response.headers.get("Content-Type") !==
                "application/octet-stream" ||
              (contentLength !== null && Number(contentLength) !== chunk.size)
            ) {
              await response.body?.cancel();
              throw new Error(
                `Asset chunk unavailable: ${chunk.path} (status ${response.status}, length ${response.headers.get("Content-Length")})`,
              );
            }
            if (partial) await pipeSlice(response.body, writable, from, to);
            else await response.body.pipeTo(writable, { preventClose: true });
          }
          offset += chunk.size;
          if (offset > end) break;
        }
        await writable.close();
      })().catch(async (error) => {
        await writable.abort(error).catch(() => {});
      });
      ctx.waitUntil(pipeline);
      return new Response(readable, { status: range ? 206 : 200, headers });
    },
  };
}
