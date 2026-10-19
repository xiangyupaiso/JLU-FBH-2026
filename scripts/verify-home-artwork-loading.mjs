import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import vm from "node:vm";
import ts from "typescript";

const source = ts
  .transpileModule(
    readFileSync(new URL("../src/utils/homeArtwork.ts", import.meta.url), "utf8"),
    {
      compilerOptions: {
        target: ts.ScriptTarget.ES2022,
        module: ts.ModuleKind.ES2022,
      },
    },
  )
  .outputText
  .replace(
    /^import \{ loadPageImageSerial \} from "\.\/pageImageQueue";\r?$/m,
    "const loadPageImageSerial = (url, options = {}) => globalThis.__homeQueue.load(url, options);",
  )
  .replace(/^export /gm, "");

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
    isArtwork = false;
    querySelectorAll() {
      return this.members.flatMap((element) => [
        ...(element.isArtwork ? [element] : []),
        ...element.querySelectorAll(),
      ]);
    }
    querySelector() {
      return this.querySelectorAll()[0] ?? null;
    }
    matches() {
      return this.isArtwork;
    }
    contains(element) {
      return this.members.some((member) => member === element || member.contains(element));
    }
  }
  class HTMLElement extends Element {}
  class Image extends HTMLElement {
    isArtwork = true;
    #src = "";
    sources = [];
    currentSrc = "";
    complete = false;
    naturalWidth = 0;
    crossOrigin = null;
    fetchPriority = "auto";
    loading = "lazy";
    decodeTask;
    constructor(src, native = false) {
      super();
      if (src) this.src = src;
      else if (!native) requests.push(this);
    }
    get src() {
      return this.#src;
    }
    set src(value) {
      this.sources.push(value);
      this.#src = value;
      this.currentSrc = value;
      this.complete = false;
      this.naturalWidth = 0;
    }
    getAttribute(name) {
      if (name === "crossorigin") return this.crossOrigin;
      return name === "src" ? this.#src || null : null;
    }
    setAttribute(name, value) {
      if (name === "src") this.src = value;
      if (name === "crossorigin") this.crossOrigin = value;
    }
    removeAttribute(name) {
      if (name === "src") this.src = "";
    }
    decode() {
      return this.decodeTask ?? Promise.resolve();
    }
    finish(success = true) {
      this.complete = true;
      this.naturalWidth = success ? 900 : 0;
      this.dispatchEvent(new Event(success ? "load" : "error"));
      if (root.contains(this)) capture(success ? "load" : "error", this);
    }
  }
  class SvgImage extends Element {
    isArtwork = true;
    href = { baseVal: "" };
    getAttribute(name) {
      return name === "href" ? this.href.baseVal || null : null;
    }
    setAttribute(name, value) {
      if (name === "href") this.href.baseVal = value;
    }
  }
  const root = new HTMLElement();
  const capture = (type, image) => {
    const event = new Event(type);
    Object.defineProperty(event, "target", { value: image });
    root.dispatchEvent(event);
  };
  class AbortController {
    constructor() {
      this.signal = new EventTarget();
      this.signal.aborted = false;
    }
    abort() {
      if (this.signal.aborted) return;
      this.signal.aborted = true;
      this.signal.dispatchEvent(new Event("abort"));
    }
  }
  const setTimer = (fn, ms) => {
    const id = ++timerId;
    timers.set(id, { fn, ms });
    return id;
  };
  const clearTimer = (id) => timers.delete(id);

  // One physical probe at a time, shared by URL, decode-gated, with the same
  // two network retries and two-minute timeout as the production queue.
  const queue = {
    entries: new Map(),
    pending: [],
    active: false,
    load(url, options = {}) {
      if (!url) return Promise.resolve("");
      const key = `${url}|${options.crossOrigin ?? ""}`;
      const existing = this.entries.get(key);
      if (existing) return existing.promise;
      let resolve;
      let reject;
      const entry = {
        key,
        url,
        options,
        attempt: 0,
        image: null,
        timeout: null,
        settled: false,
        promise: new Promise((yes, no) => {
          resolve = yes;
          reject = no;
        }),
      };
      entry.resolve = resolve;
      entry.reject = reject;
      this.entries.set(key, entry);
      this.pending.push(entry);
      options.signal?.addEventListener("abort", () => this.cancel(entry), { once: true });
      this.pump();
      return entry.promise;
    },
    pump() {
      if (this.active || !this.pending.length) return;
      this.active = true;
      const entry = this.pending.shift();
      this.probe(entry);
    },
    probe(entry) {
      if (entry.options.signal?.aborted) return this.fail(entry, new Error("cancelled"));
      const image = new Image();
      entry.image = image;
      image.loading = "eager";
      image.fetchPriority = entry.options.priority || "high";
      if (entry.options.crossOrigin !== undefined && entry.options.crossOrigin !== null)
        image.crossOrigin = entry.options.crossOrigin;
      const finish = (error) => {
        if (entry.settled) return;
        if (entry.timeout !== null) clearTimer(entry.timeout);
        image.removeEventListener("load", loaded);
        image.removeEventListener("error", failed);
        if (error) {
          if (error.network && entry.attempt < 2 && !entry.options.signal?.aborted) {
            entry.attempt += 1;
            this.probe(entry);
          } else {
            this.fail(entry, error);
          }
          return;
        }
        Promise.resolve(image.decode()).then(
          () => this.succeed(entry),
          () => this.fail(entry, new Error("decode")),
        );
      };
      const loaded = () => {
        if (!image.naturalWidth) finish(Object.assign(new Error("network"), { network: true }));
        else finish();
      };
      const failed = () => finish(Object.assign(new Error("network"), { network: true }));
      image.addEventListener("load", loaded);
      image.addEventListener("error", failed);
      entry.timeout = setTimer(() => this.fail(entry, new Error("timeout")), 120000);
      image.src = entry.attempt ? `${entry.url}?home-image-probe-retry=${entry.attempt}` : entry.url;
    },
    succeed(entry) {
      if (entry.settled) return;
      entry.settled = true;
      this.entries.delete(entry.key);
      entry.resolve(entry.url);
      this.active = false;
      this.pump();
    },
    fail(entry, error) {
      if (entry.settled) return;
      entry.settled = true;
      if (entry.timeout !== null) clearTimer(entry.timeout);
      this.entries.delete(entry.key);
      entry.reject(error);
      this.active = false;
      this.pump();
    },
    cancel(entry) {
      if (entry.settled) return;
      const index = this.pending.indexOf(entry);
      if (index >= 0) this.pending.splice(index, 1);
      this.fail(entry, new Error("cancelled"));
    },
  };

  const observer = { disconnected: false, callback: null };
  const context = vm.createContext({
    Element,
    HTMLElement,
    HTMLImageElement: Image,
    SVGImageElement: SvgImage,
    Image,
    AbortController,
    Event,
    URL,
    __homeQueue: queue,
    document: {
      baseURI: "https://2026.igem.wiki/jlu-fbh/",
      getElementById: () => null,
      querySelector: () => null,
    },
    window: { setTimeout: setTimer, clearTimeout: clearTimer },
    MutationObserver: class {
      constructor(callback) {
        observer.callback = callback;
      }
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
    SvgImage,
    changes: () => changes,
    scene(...images) {
      const scene = new HTMLElement();
      scene.members = images;
      root.members.push(scene);
      return scene;
    },
    deferredImage(url) {
      const image = new Image(undefined, true);
      image.dataset.homeSrc = url;
      return image;
    },
    mutate(...addedNodes) {
      observer.callback?.([{ addedNodes }]);
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
      capture("error", image);
    },
  };
}

test("deferred HTML and SVG sources paint only after one decoded probe", async () => {
  const env = environment();
  const image = env.deferredImage("https://static.igem.wiki/deferred.webp");
  const svg = new env.SvgImage();
  svg.dataset.homeSrc = image.dataset.homeSrc;
  const scene = env.scene(image, svg);
  env.loader.warm(scene, "low");
  assert.equal(image.src, "");
  assert.equal(svg.href.baseVal, "");
  assert.equal(env.requests.length, 1, "shared URL owns one serial probe");
  env.requests[0].finish();
  await tick();
  assert.equal(image.src, image.dataset.homeSrc);
  assert.equal(svg.href.baseVal, image.dataset.homeSrc);
  image.finish();
  assert.equal(scene.dataset.homeArtworkActive, "true");
  assert.equal(env.loader.status(scene), "ready");
  env.loader.dispose();
});

test("shared URL deduplicates probes across scenes and keeps both scenes in sync", async () => {
  const env = environment();
  const url = "https://static.igem.wiki/shared.webp";
  const first = env.scene(env.deferredImage(url));
  const second = env.scene(env.deferredImage(url));
  env.loader.warm(first, "low");
  env.loader.warm(second, "high");
  assert.equal(env.requests.length, 1);
  env.requests[0].finish();
  await tick();
  assert.equal(first.dataset.homeArtworkActive, "true");
  assert.equal(second.dataset.homeArtworkActive, "true");
  assert.equal(env.requests.length, 1);
  env.loader.dispose();
});

test("distinct artwork consumes the serial slot in scene order", async () => {
  const env = environment();
  const first = env.deferredImage("https://static.igem.wiki/first.webp");
  const second = env.deferredImage("https://static.igem.wiki/second.webp");
  const scene = env.scene(first, second);
  env.loader.warm(scene);
  assert.equal(env.requests.length, 1);
  env.requests[0].finish();
  await tick();
  assert.equal(env.requests.length, 2, "the second probe waits for the first decode");
  assert.equal(second.src, "");
  env.requests[1].finish();
  await tick();
  first.finish();
  second.finish();
  assert.equal(scene.dataset.homeArtworkActive, "true");
  assert.equal(env.loader.status(scene), "ready");
  env.loader.dispose();
});

test("probe decode keeps a deferred image pending until decode completes", async () => {
  const env = environment();
  const image = env.deferredImage("https://static.igem.wiki/decode.webp");
  const scene = env.scene(image);
  env.loader.warm(scene);
  let resolveDecode;
  env.requests[0].decodeTask = new Promise((resolve) => { resolveDecode = resolve; });
  env.requests[0].finish();
  await tick();
  assert.equal(env.loader.status(scene), "loading");
  assert.equal(image.src, "");
  resolveDecode();
  await tick();
  image.finish();
  assert.equal(env.loader.status(scene), "ready");
  assert.equal(image.src, "https://static.igem.wiki/decode.webp");
  env.loader.dispose();
});

test("network failure retries twice, then leaves deferred artwork in error", async () => {
  const env = environment();
  const image = env.deferredImage("https://static.igem.wiki/broken.webp");
  const scene = env.scene(image);
  env.loader.warm(scene);
  env.requests[0].finish(false);
  assert.equal(env.requests.length, 2);
  env.requests[1].finish(false);
  assert.equal(env.requests.length, 3);
  env.requests[2].finish(false);
  await tick();
  assert.equal(env.loader.status(scene), "error");
  assert.equal(image.src, "", "failed probes never paint an unverified native source");
  env.loader.dispose();
});

test("a visible native copy stays ready while its shared probe fails", async () => {
  const env = environment();
  const image = new env.Image("https://static.igem.wiki/visible.webp");
  image.finish();
  const scene = env.scene(image);
  env.loader.warm(scene);
  env.requests[0].finish(false);
  env.requests[1].finish(false);
  env.requests[2].finish(false);
  await tick();
  assert.equal(env.loader.status(scene), "ready");
  assert.equal(image.src, "https://static.igem.wiki/visible.webp");
  assert.equal(image.dataset.homeArtwork, "ready");
  env.loader.dispose();
});

test("a native error starts a cache-busted retry and recovers after decode", async () => {
  const env = environment();
  const image = new env.Image("https://static.igem.wiki/card.webp");
  image.finish();
  const scene = env.scene(image);
  env.loader.warm(scene);
  env.requests[0].finish();
  await tick();
  image.finish(false);
  env.nativeError(image);
  assert.equal(env.requests.length, 2);
  assert.match(env.requests[1].src, /home-image-retry=1/);
  env.requests[1].finish();
  await tick();
  image.finish();
  assert.equal(env.loader.status(scene), "ready");
  env.loader.dispose();
});

test("manual retry starts only failed artwork and paints its recovered URL", async () => {
  const env = environment();
  const healthy = new env.Image("https://static.igem.wiki/good.webp");
  healthy.finish();
  const broken = env.deferredImage("https://static.igem.wiki/bad.webp");
  const scene = env.scene(healthy, broken);
  env.loader.warm(scene);
  env.requests[0].finish();
  await tick();
  env.requests[1].finish(false);
  env.requests[2].finish(false);
  env.requests[3].finish(false);
  await tick();
  assert.equal(env.loader.status(scene), "error");
  env.loader.retry(scene);
  assert.equal(env.requests.length, 5);
  assert.match(env.requests[4].src, /home-image-retry=1/);
  env.requests[4].finish();
  await tick();
  assert.equal(env.loader.status(scene), "loading", "native copy still needs its actual pixels");
  broken.finish();
  assert.equal(env.loader.status(scene), "ready");
  env.loader.dispose();
});

test("a stalled probe reaches the two-minute artwork deadline without painting", async () => {
  const env = environment();
  const image = env.deferredImage("https://static.igem.wiki/stalled.webp");
  const scene = env.scene(image);
  env.loader.warm(scene);
  env.run(120000);
  await tick();
  assert.equal(env.loader.status(scene), "error");
  assert.equal(image.src, "");
  assert.equal(env.timers.size, 0);
  env.loader.dispose();
});

test("disposing Home cancels serial work and removes visual markers", async () => {
  const env = environment();
  const image = env.deferredImage("https://static.igem.wiki/pending.webp");
  const scene = env.scene(image);
  env.loader.warm(scene);
  const changes = env.changes();
  env.loader.dispose();
  env.requests[0].finish();
  await tick();
  assert.equal(env.changes(), changes);
  assert.equal(image.dataset.homeArtwork, undefined);
  assert.equal(scene.dataset.homeArtworkActive, undefined);
  assert.ok(env.observer.disconnected);
});

test("new artwork in an active scene is queued without warming unopened scenes", async () => {
  const env = environment();
  const current = env.deferredImage("https://static.igem.wiki/current.webp");
  const later = env.deferredImage("https://static.igem.wiki/later.webp");
  const active = env.scene(current);
  const unopened = env.scene(later);
  env.loader.warm(active);
  env.requests[0].finish();
  await tick();
  const clone = env.deferredImage("https://static.igem.wiki/clone.webp");
  active.members.push(clone);
  env.mutate(clone);
  assert.equal(env.requests.length, 2);
  assert.equal(later.src, "");
  assert.equal(unopened.dataset.homeArtworkActive, undefined);
  env.requests[1].finish();
  await tick();
  assert.equal(active.dataset.homeArtworkActive, "true");
  env.loader.dispose();
});

test("a failed later scene does not block a ready opening scene", async () => {
  const env = environment();
  const openingImage = new env.Image("https://static.igem.wiki/opening.webp");
  openingImage.finish();
  const opening = env.scene(openingImage);
  const later = env.scene(env.deferredImage("https://static.igem.wiki/later.webp"));
  env.loader.warm(opening);
  env.requests[0].finish();
  await tick();
  env.loader.warm(later);
  env.requests[1].finish(false);
  env.requests[2].finish(false);
  env.requests[3].finish(false);
  await tick();
  assert.equal(env.loader.status(opening), "ready");
  assert.equal(env.loader.status(later), "error");
  env.loader.dispose();
});

test("SVG artwork keeps its href deferred until its serial probe decodes", async () => {
  const env = environment();
  const svg = new env.SvgImage();
  svg.dataset.homeSrc = "https://static.igem.wiki/portrait.webp";
  const scene = env.scene(svg);
  env.loader.warm(scene);
  let resolveDecode;
  env.requests[0].decodeTask = new Promise((resolve) => { resolveDecode = resolve; });
  env.requests[0].finish();
  await tick();
  assert.equal(svg.href.baseVal, "");
  resolveDecode();
  await tick();
  assert.equal(svg.href.baseVal, "https://static.igem.wiki/portrait.webp");
  assert.equal(env.loader.status(scene), "ready");
  env.loader.dispose();
});
