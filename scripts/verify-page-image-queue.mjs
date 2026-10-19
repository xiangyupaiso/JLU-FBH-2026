import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import test from "node:test";
import vm from "node:vm";
import ts from "typescript";
import { renderToStaticMarkup } from "react-dom/server";
import { createElement } from "react";

const require = createRequire(import.meta.url);
const compile = (path, module = ts.ModuleKind.ES2022) => ts.transpileModule(
  readFileSync(new URL(`../${path}`, import.meta.url), "utf8"),
  { compilerOptions: { module, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX } },
).outputText;
const source = compile("src/utils/pageImageQueue.ts").replace(/^export /gm, "");
const tick = async () => {
  for (let i = 0; i < 12; ++i) await new Promise(setImmediate);
};

function environment() {
  const observers = [];
  const timers = new Set();
  const transfers = [];
  const accidentalRequests = [];
  const browserCache = new Set();
  let active = 0;
  let maximum = 0;
  class Element extends EventTarget {
    attrs = new Map();
    dataset = {};
    children = [];
    parentElement = null;
    style = { values: new Map(), setProperty(name, value) { this.values.set(name, value); } };
    constructor(tag = "div", attrs = {}) {
      super();
      this.tagName = tag;
      for (const [name, value] of Object.entries(attrs)) this.setAttribute(name, value);
    }
    setAttribute(name, value) {
      this.attrs.set(name, String(value));
      if (name.startsWith("data-")) this.dataset[name.slice(5).replace(/-([a-z])/g, (_, char) => char.toUpperCase())] = String(value);
    }
    getAttribute(name) { return this.attrs.get(name) ?? null; }
    hasAttribute(name) { return this.attrs.has(name); }
    removeAttribute(name) { this.attrs.delete(name); }
    append(...children) { for (const child of children) { child.parentElement = this; this.children.push(child); } }
    contains(element) { return this === element || this.children.some((child) => child.contains(element)); }
    matches(selector) {
      if (selector === "img, image") return ["img", "image"].includes(this.tagName);
      if (selector === ".home-scene01") return this.getAttribute("class")?.includes("home-scene01");
      if (selector === "main.wiki-page--route") return this.tagName === "main" && this.getAttribute("class")?.includes("wiki-page--route");
      if (selector === "[data-page-image-hints]") return this.hasAttribute("data-page-image-hints");
      return this.hasAttribute("data-page-background-src") || (["img", "image"].includes(this.tagName) && this.hasAttribute("data-page-src"));
    }
    querySelectorAll(selector) {
      return this.children.flatMap((child) => [...(child.matches(selector) ? [child] : []), ...child.querySelectorAll(selector)]);
    }
    querySelector(selector) { return this.querySelectorAll(selector)[0] ?? null; }
    closest(selector) {
      for (let node = this; node; node = node.parentElement) {
        if (selector.includes("nav") && node.tagName === "nav") return node;
        if (selector.includes("footer") && node.tagName === "footer") return node;
        if (selector.includes(".wiki-hero") && node.getAttribute("class")?.includes("wiki-hero")) return node;
        if (selector.includes(".activities-hero") && node.getAttribute("class")?.includes("activities-hero")) return node;
        if (selector.includes("data-page-critical") && node.getAttribute("data-page-critical") === "true") return node;
        if (selector.includes(".home-scene01") && node.getAttribute("class")?.includes("home-scene01")) return node;
        if (selector.includes(".story-chapter") && node.getAttribute("class")?.includes("story-chapter")) return node;
      }
      return null;
    }
    compareDocumentPosition(other) {
      const flatten = (node) => [node, ...node.children.flatMap(flatten)];
      const list = flatten(body);
      return list.indexOf(this) < list.indexOf(other) ? 4 : list.indexOf(this) > list.indexOf(other) ? 2 : 0;
    }
  }
  class Img extends Element {
    complete = false;
    naturalWidth = 0;
    srcset = "";
    constructor(attrs = {}) { super("img", attrs); }
    set src(value) {
      this.requestedSrc = value;
      this.setAttribute("src", value);
      if (!browserCache.has(value)) accidentalRequests.push(value);
      this.complete = browserCache.has(value);
      this.naturalWidth = this.complete ? 100 : 0;
    }
    get src() { return this.getAttribute("src") || ""; }
  }
  class Svg extends Element {
    href = { baseVal: "" };
    constructor(attrs = {}) { super("image", attrs); }
    setAttribute(name, value) { super.setAttribute(name, value); if (name === "href" && this.href) this.href.baseVal = value; }
  }
  class Dialog extends Element { open = false; constructor() { super("dialog"); } }
  class Probe extends Img {
    active = false;
    decodeHeld = null;
    decodeRelease = null;
    set src(value) {
      this.requestedSrc = value;
      this.setAttribute("src", value);
      this.complete = false;
      this.naturalWidth = 0;
      this.active = true;
      active++;
      maximum = Math.max(maximum, active);
      transfers.push(this);
    }
    get src() { return this.getAttribute("src") || ""; }
    removeAttribute(name) {
      if (name === "src" && this.active) { this.active = false; active--; }
      super.removeAttribute(name);
    }
    finish(success = true, holdDecode = false) {
      assert.ok(this.active, "a cancelled or settled transfer cannot finish");
      this.active = false;
      active--;
      this.complete = true;
      this.naturalWidth = success ? 100 : 0;
      if (success) browserCache.add(this.src);
      if (holdDecode) this.decodeHeld = new Promise((resolve) => { this.decodeRelease = resolve; });
      this.dispatchEvent(new Event(success ? "load" : "error"));
    }
    decode() { return this.decodeHeld ?? Promise.resolve(); }
  }
  class MutationObserver {
    constructor(callback) { this.callback = callback; observers.push(this); }
    observe() { this.connected = true; }
    disconnect() { this.connected = false; }
  }
  const body = new Element("body");
  const window = Object.assign(new EventTarget(), {
    setTimeout: (callback) => { timers.add(callback); return callback; },
    clearTimeout: (callback) => timers.delete(callback),
  });
  const loader = new EventTarget();
  const context = vm.createContext({
    console, Promise, Map, Set, WeakMap, WeakSet, Error, Date, URL, Event, queueMicrotask, AbortController,
    document: { body, baseURI: "https://example.test/", getElementById: () => loader }, window,
    Element, HTMLElement: Element, HTMLImageElement: Img, SVGImageElement: Svg, HTMLDialogElement: Dialog,
    Image: Probe, MutationObserver,
    Node: { DOCUMENT_POSITION_FOLLOWING: 4, DOCUMENT_POSITION_PRECEDING: 2 },
  });
  vm.runInContext(`${source}\nglobalThis.api = { createPageImageQueue, loadPageImageSerial, PageImageQueueError };`, context);
  vm.runInContext(`${compile("src/utils/homeArtwork.ts").replace(/^import .*;\r?\n/gm, "").replace(/^export /gm, "")}\nglobalThis.api.createHomeArtworkLoader = createHomeArtworkLoader;`, context);
  vm.runInContext(`${compile("src/utils/homeArtworkSource.ts").replace(/^import .*;\r?\n/gm, "").replace(/^export /gm, "")}\nglobalThis.api.bindHomeArtwork = bindHomeArtwork;`, context);
  return {
    ...context.api, body, Element, Img, Svg, Dialog, transfers, accidentalRequests, loader,
    get active() { return active; }, get maximum() { return maximum; },
    latest: () => transfers.at(-1),
    route: () => { const route = new Element("main", { class: "wiki-page--route" }); body.append(route); return route; },
    image: (url, attrs = {}) => new Img({ "data-page-src": url, ...attrs }),
    interact: () => window.dispatchEvent(new Event("pointerdown")),
    mutate: async () => { for (const observer of observers) if (observer.connected) observer.callback([]); await tick(); },
    timeout: async () => { for (const callback of [...timers]) callback(); await tick(); },
  };
}

test("native wrappers keep geometry, refs and handlers without source attributes or preloads", () => {
  const exports = {};
  vm.runInNewContext(compile("src/components/common/QueuedImage.tsx", ts.ModuleKind.CommonJS), { exports, require });
  const image = renderToStaticMarkup(createElement(exports.QueuedImage, {
    src: "https://example.test/full.avif", srcSet: "https://example.test/large.avif 2x",
    width: 300, height: 200, style: { aspectRatio: "3 / 2" }, onLoad() {}, ref() {},
  }));
  assert.match(image, /data-page-src="https:\/\/example.test\/full.avif"/);
  assert.match(image, /data-page-srcset=/);
  assert.match(image, /width="300" height="200"/);
  assert.doesNotMatch(image, /(?:^|\s)(?:src|srcSet|srcset)=|<link/);
  const svg = renderToStaticMarkup(createElement("svg", null, createElement(exports.QueuedSvgImage, { href: "art.svg", xlinkHref: "other.svg", width: 20 })));
  assert.match(svg, /data-page-src="art.svg"/);
  assert.doesNotMatch(svg, /(?:^|\s)(?:href|xlink:href)=|<link/);
});

test("Hero then six unique content sources decode serially; remaining waits for intent", async () => {
  const env = environment();
  const nav = new env.Element("nav"); nav.append(env.image("menu.avif")); env.body.append(nav);
  const route = env.route();
  const images = ["a", "a", "b", "c", "d", "e", "f", "g", "h"].map((name) => env.image(`${name}.avif`));
  const hidden = new env.Element("div", { "aria-hidden": "true" }); hidden.append(env.image("hidden.avif"));
  const hero = new env.Element("header", { class: "wiki-hero", "data-page-background-src": "hero.avif" });
  route.append(hidden, ...images, hero);
  const queue = env.createPageImageQueue(env.body);
  let ready = false; queue.criticalReady.then(() => { ready = true; });
  await tick();
  assert.equal(env.latest().src, "https://example.test/hero.avif");
  env.latest().finish(true, true); await tick();
  assert.equal(env.transfers.length, 1, "decode retains the serial slot");
  env.latest().decodeRelease(); await tick();
  for (const name of ["a", "b", "c", "d", "e", "f"]) {
    assert.equal(env.latest().src, `https://example.test/${name}.avif`);
    env.latest().finish(); await tick();
  }
  await queue.criticalReady;
  assert.equal(ready, true);
  assert.equal(env.transfers.length, 7);
  assert.equal(images[0].src, images[1].src);
  assert.equal(hero.dataset.pageLoaded, "true");
  await queue.remainingReady();
  assert.equal(env.transfers.length, 7);
  env.interact(); await tick();
  for (const name of ["g", "h", "menu", "hidden"]) {
    assert.equal(env.latest().src, `https://example.test/${name}.avif`);
    env.latest().finish(); await tick();
  }
  await queue.remainingReady();
  assert.equal(env.maximum, 1);
  assert.deepEqual(env.accidentalRequests, []);
  queue.dispose();
});

test("critical network errors retry twice and reject without starting ordinary work", async () => {
  const env = environment(); const route = env.route();
  route.append(new env.Element("header", { class: "wiki-hero", "data-page-background-src": "broken.avif" }), env.image("never.avif"));
  const queue = env.createPageImageQueue(env.body); const rejected = assert.rejects(queue.criticalReady, (error) => error.critical && error.reason === "network");
  env.interact();
  for (let attempt = 0; attempt < 3; ++attempt) { await tick(); env.latest().finish(false); }
  await rejected; await tick();
  assert.equal(env.transfers.length, 3);
  assert.match(env.transfers[1].requestedSrc, /circure_image_retry=/);
  assert.equal(env.transfers[1].src, "", "failed sources are removed to cancel their transfer");
  assert.equal(env.maximum, 1);
  queue.dispose();
});

test("disposing cancels active work; rebuilt queues reuse successful Hero cache", async () => {
  const env = environment(); const route = env.route();
  route.append(new env.Element("header", { class: "wiki-hero", "data-page-background-src": "hero.avif" }), env.image("content.avif"));
  const first = env.createPageImageQueue(env.body);
  await tick(); env.latest().finish(); await tick();
  assert.equal(env.latest().src, "https://example.test/content.avif");
  first.dispose(); await tick();
  assert.equal(env.active, 0);
  const second = env.createPageImageQueue(env.body); await tick();
  assert.equal(env.transfers.length, 3);
  assert.equal(env.latest().src, "https://example.test/content.avif");
  env.latest().finish(); await second.criticalReady;
  assert.equal(env.maximum, 1);
  second.dispose();
});

test("a slow critical transfer times out once and never counts as success", async () => {
  const env = environment(); env.route().append(env.image("slow.avif"));
  const queue = env.createPageImageQueue(env.body);
  const rejected = assert.rejects(queue.criticalReady, (error) => error.critical && error.reason === "timeout");
  await tick(); await env.timeout(); await rejected;
  assert.equal(env.active, 0); assert.equal(env.transfers.length, 1);
  queue.dispose();
});

test("Home shared hints are ordinary; normal failure continues and dynamic cached nodes reuse pixels", async () => {
  const env = environment();
  env.body.append(new env.Element("span", { "data-page-image-hints": JSON.stringify(["bad.avif", "good.avif"]) }));
  const queue = env.createPageImageQueue(env.body);
  await queue.criticalReady; await queue.remainingReady(); await tick();
  assert.equal(env.transfers.length, 0);
  env.interact();
  for (let attempt = 0; attempt < 3; ++attempt) { await tick(); env.latest().finish(false); }
  await tick(); assert.equal(env.latest().src, "https://example.test/good.avif"); env.latest().finish();
  await queue.remainingReady();
  const added = env.image("good.avif"); env.body.append(added); await env.mutate();
  assert.equal(added.dataset.pageLoaded, "true");
  assert.equal(env.transfers.length, 4);
  assert.deepEqual(env.accidentalRequests, []);
  queue.dispose();
});

test("source updates cancel obsolete transfers and load the replacement", async () => {
  const env = environment(); const image = env.image("old.avif"); env.route().append(image);
  const queue = env.createPageImageQueue(env.body); await tick();
  image.setAttribute("data-page-src", "new.avif"); await env.mutate();
  assert.equal(env.transfers[0].src, "");
  assert.equal(env.latest().src, "https://example.test/new.avif");
  env.latest().finish(); await queue.criticalReady;
  assert.equal(image.src, "https://example.test/new.avif"); assert.equal(env.maximum, 1);
  queue.dispose();
});

test("ordinary backgrounds use their CSS property and count toward six content images", async () => {
  const env = environment(); const route = env.route();
  const background = new env.Element("figure", { "data-page-background-src": "card.avif", "data-page-background-property": "background-image" });
  route.append(background);
  const queue = env.createPageImageQueue(env.body); await tick();
  env.latest().finish(); await queue.criticalReady;
  assert.equal(background.style.values.get("background-image"), 'url("https://example.test/card.avif")');
  queue.dispose();
});

test("shared serial helper and route queues share cache and one physical slot", async () => {
  const env = environment(); env.route().append(env.image("same.avif"));
  const home = env.loadPageImageSerial("same.avif");
  const queue = env.createPageImageQueue(env.body); await tick();
  assert.equal(env.transfers.length, 1); env.latest().finish();
  assert.equal(await home, "https://example.test/same.avif"); await queue.criticalReady;
  assert.equal(env.transfers.length, 1); assert.equal(env.maximum, 1);
  queue.dispose();
});

test("Home assigns each source only after serial decoding and activates the completed scene", async () => {
  const env = environment();
  const scene = new env.Element("section", { class: "home-scene01" });
  const a = new env.Img({ "data-home-src": "https://example.test/a.avif" });
  const b = new env.Img({ "data-home-src": "https://example.test/b.avif" });
  scene.append(a, b); env.body.append(scene);
  const home = env.createHomeArtworkLoader(env.body, () => {});
  home.warm(scene); await tick();
  assert.equal(a.src, ""); assert.equal(b.src, ""); assert.notEqual(scene.dataset.homeArtworkActive, "true");
  env.latest().finish(); await tick();
  assert.equal(a.src, "https://example.test/a.avif"); assert.equal(b.src, "");
  assert.notEqual(scene.dataset.homeArtworkActive, "true");
  env.latest().finish(); await tick();
  assert.equal(scene.dataset.homeArtworkActive, "true"); assert.equal(home.status(scene), "ready");
  assert.equal(env.maximum, 1); assert.deepEqual(env.accidentalRequests, []);
  home.dispose();
});

test("Home opening recovery retains successful art and retries failed sources from the loader button", async () => {
  const env = environment(); const scene = new env.Element("section", { class: "home-scene01" });
  const a = new env.Img({ "data-home-src": "https://example.test/a.avif" });
  const b = new env.Img({ "data-home-src": "https://example.test/b.avif" });
  scene.append(a, b); env.body.append(scene);
  const home = env.createHomeArtworkLoader(env.body, () => {}); home.warm(scene);
  await tick(); env.latest().finish();
  for (let i = 0; i < 3; ++i) { await tick(); env.latest().finish(false); }
  await tick(); assert.equal(home.status(scene), "error");
  assert.notEqual(scene.dataset.homeArtworkActive, "true");
  const successfulSource = a.src;
  env.loader.dispatchEvent(new Event("loaderretry")); await tick();
  assert.match(env.latest().src, /^https:\/\/example\.test\/b\.avif\?home-image-retry=/);
  env.latest().finish(); await tick();
  assert.equal(home.status(scene), "ready"); assert.equal(a.src, successfulSource);
  assert.equal(env.transfers.length, 5); assert.equal(scene.dataset.homeArtworkActive, "true");
  home.dispose();
});

test("Home opening deadline cancels active and unissued sources until an explicit retry", async () => {
  const env = environment(); const scene = new env.Element("section", { class: "home-scene01" });
  scene.append(new env.Img({ "data-home-src": "https://example.test/a.avif" }), new env.Img({ "data-home-src": "https://example.test/b.avif" }));
  env.body.append(scene); const home = env.createHomeArtworkLoader(env.body, () => {}); home.warm(scene);
  await tick(); env.loader.dispatchEvent(new Event("loaderdeadline")); await tick();
  assert.equal(env.active, 0); assert.equal(env.transfers.length, 1); assert.equal(home.status(scene), "error");
  env.loader.dispatchEvent(new Event("loaderretry")); await tick();
  env.latest().finish(); await tick(); env.latest().finish(); await tick();
  assert.equal(home.status(scene), "ready"); assert.equal(env.transfers.length, 3); assert.equal(env.maximum, 1);
  home.dispose();
});

test("detached Home CORS readers wait for the shared serial slot and cancel with their binding", async () => {
  const env = environment(); const scene = new env.Element("section", { class: "home-scene01" });
  const original = new env.Img({ "data-home-src": "https://example.test/art.avif" });
  const reader = new env.Img({ "data-home-src": "https://example.test/art.avif", crossorigin: "anonymous" });
  scene.append(original); env.body.append(scene);
  const stop = env.bindHomeArtwork(original, reader);
  const home = env.createHomeArtworkLoader(env.body, () => {}); home.warm(scene); await tick();
  assert.equal(env.transfers.length, 1); assert.equal(reader.src, "");
  env.latest().finish(); await tick();
  assert.equal(env.transfers.length, 2); assert.equal(env.latest().crossOrigin, "anonymous"); assert.equal(reader.src, "");
  stop(); await tick(); assert.equal(env.active, 0); assert.equal(reader.src, "");
  assert.equal(env.maximum, 1); home.dispose();
});
