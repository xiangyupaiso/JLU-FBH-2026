import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import vm from "node:vm";
import ts from "typescript";

const source = ts
  .transpileModule(
    readFileSync(
      new URL("../src/utils/homeArtwork.ts", import.meta.url),
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
const tick = async () => {
  for (let i = 0; i < 4; ++i) await new Promise(setImmediate);
};

function environment() {
  const requests = [];
  const timers = new Map();
  let timerId = 0;
  let changes = 0;
  class Element extends EventTarget {
    dataset = {};
    members = [];
    querySelectorAll() {
      return this.members;
    }
    contains(element) {
      return this.members.includes(element);
    }
  }
  class Image extends Element {
    #src = "";
    currentSrc = "";
    complete = false;
    naturalWidth = 0;
    crossOrigin = null;
    decodeTask;
    constructor(src) {
      super();
      if (src) this.src = src;
      else requests.push(this);
    }
    get src() {
      return this.#src;
    }
    set src(value) {
      this.#src = value;
      this.currentSrc = value;
      this.complete = false;
      this.naturalWidth = 0;
    }
    getAttribute(name) {
      return name === "crossorigin" ? this.crossOrigin : null;
    }
    decode() {
      return this.decodeTask ?? Promise.resolve();
    }
    finish(success = true) {
      this.complete = true;
      this.naturalWidth = success ? 900 : 0;
      this.dispatchEvent(new Event(success ? "load" : "error"));
    }
  }
  const root = new Element();
  const observer = { disconnected: false };
  const context = vm.createContext({
    Element,
    HTMLImageElement: Image,
    Image,
    URL,
    document: { baseURI: "https://2026.igem.wiki/jlu-fbh/" },
    window: {
      setTimeout(fn, ms) {
        const id = ++timerId;
        timers.set(id, { fn, ms });
        return id;
      },
      clearTimeout(id) {
        timers.delete(id);
      },
    },
    MutationObserver: class {
      observe() {}
      disconnect() {
        observer.disconnected = true;
      }
    },
  });
  vm.runInContext(source, context);
  const loader = context.createHomeArtworkLoader(root, () => ++changes);
  return {
    loader,
    root,
    requests,
    timers,
    observer,
    Image,
    changes: () => changes,
    scene(...images) {
      const scene = new Element();
      scene.members = images;
      root.members.push(...images);
      return scene;
    },
    run(ms) {
      for (const [id, timer] of [...timers]) {
        if (timer.ms === ms) {
          timers.delete(id);
          timer.fn();
        }
      }
    },
    nativeError(image) {
      const event = new Event("error");
      Object.defineProperty(event, "target", { value: image });
      root.dispatchEvent(event);
    },
  };
}

test("four cards share one request and two retries, then settle as error", async () => {
  const env = environment();
  const cards = Array.from(
    { length: 4 },
    () => new env.Image("https://static.igem.wiki/note.avif"),
  );
  const scene = env.scene(...cards);
  env.loader.warm(scene);
  assert.equal(env.requests.length, 1);
  env.requests[0].finish(false);
  assert.equal(env.loader.status(scene), "loading");
  env.run(750);
  env.requests[1].finish(false);
  env.run(1500);
  env.requests[2].finish(false);
  assert.equal(env.requests.length, 3);
  assert.equal(env.loader.status(scene), "error");
  assert.ok(cards.every((image) => image.dataset.homeArtwork === "error"));
  assert.equal(env.timers.size, 0);
  env.loader.dispose();
});

test("a temporary failure recovers and repairs every native card", async () => {
  const env = environment();
  const cards = Array.from(
    { length: 4 },
    () => new env.Image("https://static.igem.wiki/note.avif"),
  );
  const scene = env.scene(...cards);
  env.loader.warm(scene);
  env.requests[0].finish(false);
  env.run(750);
  env.requests[1].finish();
  await tick();
  assert.ok(cards.every((image) => image.src.endsWith("?home-image-retry=1")));
  assert.equal(
    env.loader.status(scene),
    "loading",
    "wait for the actual DOM images too",
  );
  cards.forEach((image) => image.finish());
  assert.equal(env.loader.status(scene), "ready");
  env.loader.warm(scene);
  assert.equal(
    env.requests.length,
    2,
    "warming again keeps the successful cache",
  );
  env.loader.dispose();
});

test("downloaded artwork remains pending until decode finishes", async () => {
  const env = environment();
  const image = new env.Image("https://static.igem.wiki/portrait.webp");
  image.finish();
  const scene = env.scene(image);
  env.loader.warm(scene);
  let decoded;
  env.requests[0].decodeTask = new Promise((resolve) => {
    decoded = resolve;
  });
  env.requests[0].finish();
  await tick();
  assert.equal(env.loader.status(scene), "loading");
  decoded();
  await tick();
  assert.equal(env.loader.status(scene), "ready");
  assert.equal(image.src, "https://static.igem.wiki/portrait.webp");
  env.loader.dispose();
});

test("stalled requests time out instead of waiting forever", () => {
  const env = environment();
  const scene = env.scene(
    new env.Image("https://static.igem.wiki/stalled.webp"),
  );
  env.loader.warm(scene);
  env.run(8000);
  env.run(750);
  env.run(8000);
  env.run(1500);
  env.run(8000);
  assert.equal(env.loader.status(scene), "error");
  assert.equal(env.requests.length, 3);
  assert.ok(env.requests.every((image) => image.src === ""));
  assert.equal(env.timers.size, 0);
  env.loader.dispose();
});

test("manual retry reloads only failed artwork and can recover", async () => {
  const env = environment();
  const healthy = new env.Image("https://static.igem.wiki/good.webp");
  const broken = new env.Image("https://static.igem.wiki/bad.webp");
  healthy.finish();
  const scene = env.scene(healthy, broken);
  env.loader.warm(scene);
  env.requests[0].finish();
  env.requests[1].finish(false);
  env.run(750);
  env.requests[2].finish(false);
  env.run(1500);
  env.requests[3].finish(false);
  await tick();
  assert.equal(env.loader.status(scene), "error");
  env.loader.retry(scene);
  assert.equal(env.requests.length, 5);
  assert.equal(
    env.requests[4].src,
    "https://static.igem.wiki/bad.webp?home-image-retry=3",
  );
  env.requests[4].finish();
  await tick();
  broken.finish();
  assert.equal(env.loader.status(scene), "ready");
  assert.equal(healthy.src, "https://static.igem.wiki/good.webp");
  env.loader.dispose();
});

test("failure in a later scene does not block a ready opening scene", async () => {
  const env = environment();
  const portrait = new env.Image("https://static.igem.wiki/portrait.webp");
  portrait.finish();
  const first = env.scene(portrait);
  const later = env.scene(new env.Image("https://static.igem.wiki/later.webp"));
  env.loader.warm(first);
  env.loader.warm(later);
  env.requests[0].finish();
  env.requests[1].finish(false);
  env.run(750);
  env.requests[2].finish(false);
  env.run(1500);
  env.requests[3].finish(false);
  await tick();
  assert.equal(env.loader.status(first), "ready");
  assert.equal(env.loader.status(later), "error");
  env.loader.dispose();
});

test("a native failure after a successful preload is retried", async () => {
  const env = environment();
  const image = new env.Image("https://static.igem.wiki/card.webp");
  image.finish();
  const scene = env.scene(image);
  env.loader.warm(scene);
  env.requests[0].finish();
  await tick();
  image.finish(false);
  env.nativeError(image);
  assert.equal(env.loader.status(scene), "loading");
  assert.equal(env.requests.length, 2);
  env.requests[1].finish();
  await tick();
  image.finish();
  assert.equal(env.loader.status(scene), "ready");
  env.loader.dispose();
});

test("leaving Home clears requests, retry timers and visual markers", async () => {
  const env = environment();
  const image = new env.Image("https://static.igem.wiki/card.webp");
  const scene = env.scene(image);
  env.loader.warm(scene);
  env.requests[0].finish(false);
  const changes = env.changes();
  env.loader.dispose();
  env.run(750);
  env.requests[0].finish();
  await tick();
  assert.equal(env.requests.length, 1);
  assert.equal(env.changes(), changes);
  assert.equal(image.dataset.homeArtwork, undefined);
  assert.equal(env.timers.size, 0);
  assert.ok(env.observer.disconnected);
});

test("native copies that stall after probe success also stop after two retries", async () => {
  const env = environment();
  const scene = env.scene(new env.Image("https://static.igem.wiki/card.webp"));
  env.loader.warm(scene);
  for (let i = 0; i < 3; ++i) {
    env.requests[i].finish();
    await tick();
    env.run(8000);
  }
  assert.equal(env.requests.length, 3);
  assert.equal(env.loader.status(scene), "error");
  assert.equal(env.timers.size, 0);
  env.loader.dispose();
});
