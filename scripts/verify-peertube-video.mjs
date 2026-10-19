import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import vm from "node:vm";
import ts from "typescript";

const source = ts
  .transpileModule(
    readFileSync(
      new URL("../src/utils/resolvePeerTubeVideo.ts", import.meta.url),
      "utf8",
    ),
    {
      compilerOptions: {
        target: ts.ScriptTarget.ES2022,
        module: ts.ModuleKind.ES2022,
      },
    },
  )
  .outputText.replace(/^export /gm, "");

const video = {
  primary: {
    embedUrl: "https://video.igem.org/videos/embed/njcsbDyUGvFSCCtXuRoLsa",
  },
  fallback: {
    embedUrl: "https://video.igem.org/videos/embed/eNWgqQpxvwGY7q7HBPngtb",
  },
};
const published = {
  state: { id: 1 },
  privacy: { id: 1 },
  blacklisted: false,
  files: [{ fileUrl: "https://video.igem.org/static/video.mp4" }],
};

function environment(fetcher) {
  const requests = [];
  const timers = new Map();
  let id = 0;
  const context = vm.createContext({
    URL,
    AbortController,
    fetch(url, options) {
      requests.push({ url: String(url), ...options });
      return fetcher(url, options);
    },
    setTimeout(callback, delay) {
      timers.set(++id, { callback, delay });
      return id;
    },
    clearTimeout(timer) {
      timers.delete(timer);
    },
  });
  vm.runInContext(source, context);
  return {
    resolve: (signal = new AbortController().signal) =>
      context.resolvePeerTubeVideo(video, signal),
    requests,
    timers,
    expire() {
      for (const timer of [...timers.values()]) timer.callback();
    },
  };
}

test("a publicly playable upload is preferred without requiring login", async () => {
  const env = environment(async () => Response.json(published));
  assert.equal(await env.resolve(), video.primary);
  assert.equal(
    env.requests[0].url,
    "https://video.igem.org/api/v1/videos/njcsbDyUGvFSCCtXuRoLsa",
  );
  assert.equal(env.requests[0].credentials, "omit");
  assert.equal(env.requests[0].cache, "no-store");
  assert.equal(env.timers.size, 0);
});

test("published HLS-only and unlisted videos can also be watched publicly", async () => {
  const env = environment(async () =>
    Response.json({
      ...published,
      privacy: { id: 2 },
      files: [],
      streamingPlaylists: [
        { playlistUrl: "https://video.igem.org/static/master.m3u8" },
      ],
    }),
  );
  assert.equal(await env.resolve(), video.primary);
});

test("review, missing video, server errors, and a 200 HTML shell use the partner upload", async (t) => {
  for (const status of [401, 403, 404, 500]) {
    await t.test(String(status), async () => {
      const env = environment(
        async () => new Response("Unavailable", { status }),
      );
      assert.equal(await env.resolve(), video.fallback);
      assert.equal(env.timers.size, 0);
    });
  }
  const env = environment(
    async () => new Response("<html>iGEM Video Universe</html>"),
  );
  assert.equal(await env.resolve(), video.fallback);
});

test("unpublished, restricted, blocked, password protected, or media-less metadata cannot select the primary", async () => {
  const unavailable = [
    null,
    {},
    { ...published, state: { id: 2 } },
    { ...published, privacy: { id: 3 } },
    { ...published, privacy: { id: 4 } },
    { ...published, privacy: { id: 5 } },
    { ...published, blacklisted: true },
    { ...published, requiresPassword: true },
    { ...published, files: [], streamingPlaylists: [] },
    { ...published, files: [null, {}], streamingPlaylists: [{}] },
  ];
  for (const metadata of unavailable) {
    const env = environment(async () => Response.json(metadata));
    assert.equal(await env.resolve(), video.fallback, JSON.stringify(metadata));
  }
});

test("network failure and a stalled metadata request fall back within the deadline", async () => {
  const failure = environment(async () => {
    throw new TypeError("Network error");
  });
  assert.equal(await failure.resolve(), video.fallback);
  const timeout = environment(
    (_url, { signal }) =>
      new Promise((_resolve, reject) => {
        signal.addEventListener("abort", () => reject(signal.reason), {
          once: true,
        });
      }),
  );
  const pending = timeout.resolve();
  assert.equal([...timeout.timers.values()][0].delay, 5000);
  timeout.expire();
  assert.equal(await pending, video.fallback);
  assert.equal(timeout.requests[0].signal.aborted, true);
  assert.equal(timeout.timers.size, 0);
});

test("unmount cancels the request instead of committing a stale fallback", async () => {
  const controller = new AbortController();
  const env = environment(
    (_url, { signal }) =>
      new Promise((_resolve, reject) => {
        signal.addEventListener("abort", () => reject(signal.reason), {
          once: true,
        });
      }),
  );
  const pending = env.resolve(controller.signal);
  const reason = new Error("Resource folder closed");
  controller.abort(reason);
  await assert.rejects(pending, (error) => error === reason);
  assert.equal(env.requests[0].signal.aborted, true);
  assert.equal(env.timers.size, 0);
});

test("opening the folder again rechecks and switches to our newly approved upload", async () => {
  let approved = false;
  const env = environment(async () =>
    approved
      ? Response.json(published)
      : new Response("Under review", { status: 401 }),
  );
  assert.equal(await env.resolve(), video.fallback);
  approved = true;
  assert.equal(await env.resolve(), video.primary);
  assert.equal(env.requests.length, 2);
});
