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
      if (selector === "img" || selector === "image") return selector === this.tagName;
      if (selector.includes(",")) return selector.split(",").some((part) => this.matches(part.trim()));
      if (selector === ".route-frame") return this.getAttribute("class")?.split(" ").includes("route-frame");
      if (selector === ".route-frame__scroll") return this.getAttribute("class")?.split(" ").includes("route-frame__scroll");
      if (selector === "[hidden]" || selector === "[inert]") return this.hasAttribute(selector.slice(1, -1));
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
        if (selector.includes(".route-frame__scroll") && node.getAttribute("class")?.includes("route-frame__scroll")) return node;
        if (selector.includes("[hidden]") && node.hasAttribute("hidden")) return node;
        if (selector.includes("[inert]") && node.hasAttribute("inert")) return node;
      }
      return null;
    }
    getBoundingClientRect() { return this.rect ?? { top: 2000, bottom: 2100, left: 0, right: 100, width: 100, height: 100 }; }
    getClientRects() { return this.hasAttribute("hidden") || this.hasAttribute("inert") ? [] : [this.getBoundingClientRect()]; }
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
    innerHeight: 800,
    innerWidth: 1440,
    setTimeout: (callback) => { timers.add(callback); return callback; },
    clearTimeout: (callback) => timers.delete(callback),
  });
  const loader = new EventTarget();
  const context = vm.createContext({
    console, Promise, Map, Set, WeakMap, WeakSet, Error, Date, URL, Event, queueMicrotask, AbortController,
    document: { body, baseURI: "https://example.test/", getElementById: () => loader }, window,
    Element, HTMLElement: Element, HTMLImageElement: Img, SVGImageElement: Svg, HTMLDialogElement: Dialog,
    Image: Probe, MutationObserver,
    getComputedStyle: () => ({ display: "block", visibility: "visible", overflowY: "auto" }),
    requestAnimationFrame: (callback) => setImmediate(callback), cancelAnimationFrame: clearImmediate,
    Node: { DOCUMENT_POSITION_FOLLOWING: 4, DOCUMENT_POSITION_PRECEDING: 2 },
  });
  vm.runInContext(`${source}\nglobalThis.api = { createPageImageQueue, loadPageImageSerial, PageImageQueueError };`, context);
  vm.runInContext(`${compile("src/utils/homeArtwork.ts").replace(/^import .*;\r?\n/gm, "").replace(/^export /gm, "")}\nglobalThis.api.createHomeArtworkLoader = createHomeArtworkLoader;`, context);
  vm.runInContext(`${compile("src/utils/homeArtworkSource.ts").replace(/^import .*;\r?\n/gm, "").replace(/^export /gm, "")}\nglobalThis.api.bindHomeArtwork = bindHomeArtwork;`, context);
  return {
    ...context.api, body, Element, Img, Svg, Dialog, transfers, accidentalRequests, loader, window,
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

const live = (env) => env.transfers.filter((transfer) => transfer.active);
const transfer = (env, url) => live(env).find((item) => item.src.split("?")[0] === `https://example.test/${url}`);
const drain = async (env) => {
  for (let round = 0; round < 50; round++) {
    await tick();
    const pending = live(env);
    if (!pending.length) return;
    pending.forEach((item) => item.finish());
  }
  assert.fail("the queue did not finish");
};

test("Hero, first figure and visible images gate entry; decoding holds a slot and background continues automatically", async () => {
  const env = environment();
  const nav = new env.Element("nav"); nav.append(env.image("menu.avif")); env.body.append(nav);
  const frame = new env.Element("div", { class: "route-frame" });
  const images = ["a", "a", "b", "c", "d", "e", "f", "g", "h"].map((name) => env.image(`${name}.avif`));
  images.slice(0, 7).forEach((image) => { image.rect = { top: 100, bottom: 200, left: 0, right: 100, width: 100, height: 100 }; });
  const hero = new env.Element("header", { class: "wiki-hero", "data-page-background-src": "hero.avif" });
  frame.append(...images); env.route().append(hero, frame);
  const queue = env.createPageImageQueue(env.body);
  let ready = false; queue.criticalReady.then(() => { ready = true; });
  await tick();
  assert.deepEqual(live(env).map((item) => item.src), ["hero", "a", "b"].map((name) => `https://example.test/${name}.avif`));
  const heroProbe = transfer(env, "hero.avif"); heroProbe.finish(true, true); await tick();
  assert.equal(env.transfers.length, 3, "decoding retains its download slot");
  for (const name of ["a", "b", "c", "d", "e", "f"]) {
    const image = transfer(env, `${name}.avif`); assert.ok(image); image.finish(); await tick();
  }
  assert.equal(ready, false, "the hero must finish decoding");
  assert.equal(env.transfers.length, 7, "background waits for the critical gate");
  heroProbe.decodeRelease(); await queue.criticalReady; await tick();
  assert.equal(images[0].src, images[1].src);
  assert.equal(live(env).length, 1, "only one background transfer runs");
  assert.ok(transfer(env, "g.avif"), "background starts without interaction");
  await drain(env);
  assert.equal(env.maximum, 3); assert.deepEqual(env.accidentalRequests, []);
  queue.dispose();
});

test("a failing Hero retries twice while other critical images progress", async () => {
  const env = environment(); const route = env.route();
  const hero = new env.Element("header", { class: "wiki-hero", "data-page-background-src": "broken.avif" });
  const content = env.image("content.avif"); route.append(hero, content);
  const queue = env.createPageImageQueue(env.body); await tick();
  transfer(env, "content.avif").finish(); await tick();
  assert.equal(content.dataset.pageLoaded, "true");
  for (let attempt = 0; attempt < 3; ++attempt) { transfer(env, "broken.avif").finish(false); await tick(); }
  await queue.criticalReady;
  assert.equal(hero.dataset.pageImageState, "error"); assert.equal(hero.dataset.pageLoaded, "false");
  assert.equal(env.transfers.filter((item) => item.requestedSrc.includes("broken.avif")).length, 3);
  assert.match(env.transfers[2].requestedSrc, /circure_image_retry=/);
  queue.dispose();
});

test("disposing cancels all active work and rebuilt queues reuse decoded images", async () => {
  const env = environment(); const route = env.route();
  route.append(new env.Element("header", { class: "wiki-hero", "data-page-background-src": "hero.avif" }), env.image("content.avif"));
  const first = env.createPageImageQueue(env.body); await tick();
  transfer(env, "hero.avif").finish(); await tick(); first.dispose(); await tick();
  assert.equal(env.active, 0);
  const second = env.createPageImageQueue(env.body); await tick();
  assert.equal(env.transfers.filter((item) => item.requestedSrc.endsWith("hero.avif")).length, 1);
  assert.equal(live(env).length, 1); transfer(env, "content.avif").finish(); await second.criticalReady;
  second.dispose();
});

test("a timed-out critical image releases entry without treating its pixels as loaded", async () => {
  const env = environment(); const image = env.image("slow.avif"); env.route().append(image);
  const queue = env.createPageImageQueue(env.body); await tick(); await env.timeout(); await queue.criticalReady;
  assert.equal(image.dataset.pageImageState, "error"); assert.equal(image.dataset.pageLoaded, "false");
  assert.equal(image.naturalWidth, 0); assert.equal(env.active, 0); queue.dispose();
});

test("hidden image hints start automatically and a failed image releases the background slot", async () => {
  const env = environment();
  env.body.append(new env.Element("span", { "data-page-image-hints": JSON.stringify(["bad.avif", "good.avif"]) }));
  const queue = env.createPageImageQueue(env.body); await tick();
  for (let attempt = 0; attempt < 3; ++attempt) { transfer(env, "bad.avif").finish(false); await tick(); }
  assert.ok(transfer(env, "good.avif")); transfer(env, "good.avif").finish(); await tick();
  const added = env.image("good.avif"); env.body.append(added); await env.mutate();
  assert.equal(added.dataset.pageLoaded, "true"); assert.equal(env.transfers.length, 4);
  assert.equal(env.maximum, 1); queue.dispose();
});

test("source updates cancel obsolete transfers and load the replacement", async () => {
  const env = environment(); const image = env.image("old.avif"); env.route().append(image);
  const queue = env.createPageImageQueue(env.body); await tick();
  image.setAttribute("data-page-src", "new.avif"); await env.mutate();
  assert.equal(env.transfers[0].src, ""); transfer(env, "new.avif").finish(); await queue.criticalReady;
  assert.equal(image.src, "https://example.test/new.avif"); queue.dispose();
});

test("ordinary backgrounds use their CSS property and count as critical content", async () => {
  const env = environment(); const background = new env.Element("figure", { "data-page-background-src": "card.avif", "data-page-background-property": "background-image" });
  env.route().append(background); const queue = env.createPageImageQueue(env.body); await drain(env); await queue.criticalReady;
  assert.equal(background.style.values.get("background-image"), 'url("https://example.test/card.avif")'); queue.dispose();
});

test("independent callers keep cancellation ownership and share decoded cache", async () => {
  const env = environment(); env.route().append(env.image("same.avif"));
  const controller = new AbortController(); const home = env.loadPageImageSerial("same.avif", {signal:controller.signal});
  const queue = env.createPageImageQueue(env.body); await tick();
  assert.equal(live(env).length, 2); controller.abort();
  await assert.rejects(home, (error) => error.reason === "cancelled"); await tick();
  transfer(env, "same.avif").finish(); await queue.criticalReady;
  assert.equal(await env.loadPageImageSerial("same.avif"), "https://example.test/same.avif");
  assert.equal(env.transfers.length, 2); queue.dispose();
});

test("Home assigns each source after its own decode and activates only a complete scene", async () => {
  const env = environment(); const scene = new env.Element("section", {class:"home-scene01"});
  const a = new env.Img({"data-home-src":"https://example.test/a.avif"}); const b = new env.Img({"data-home-src":"https://example.test/b.avif"});
  scene.append(a,b); env.body.append(scene); const home = env.createHomeArtworkLoader(env.body, () => {}); home.warm(scene); await tick();
  assert.equal(live(env).length, 2); const first = transfer(env,"a.avif"); first.finish(true,true); await tick();
  assert.equal(a.src, ""); transfer(env,"b.avif").finish(); await tick();
  assert.equal(b.src,"https://example.test/b.avif"); assert.notEqual(scene.dataset.homeArtworkActive,"true");
  first.decodeRelease(); await tick(); assert.equal(scene.dataset.homeArtworkActive,"true"); assert.deepEqual(env.accidentalRequests,[]); home.dispose();
});

test("promoting Home scene artwork uses reserved slots while background remains active", async () => {
  const env = environment(); const earlier = new env.Element("section",{class:"story-chapter"}); const current = new env.Element("section",{class:"story-chapter"});
  earlier.append(...["active","offscreen"].map(name=>new env.Img({"data-home-src":`https://example.test/${name}.avif`})));
  current.append(...["current-background","current-people"].map(name=>new env.Img({"data-home-src":`https://example.test/${name}.avif`})));
  env.body.append(earlier,current); const home=env.createHomeArtworkLoader(env.body,()=>{}); home.warm(earlier,"low"); home.warm(current,"low"); await tick();
  const background=transfer(env,"active.avif"); assert.equal(live(env).length,1);
  home.warm(current,"high"); await tick(); assert.equal(background.active,true);
  assert.ok(transfer(env,"current-background.avif")); assert.ok(transfer(env,"current-people.avif")); assert.equal(env.maximum,3);
  transfer(env,"current-background.avif").finish(); transfer(env,"current-people.avif").finish(); await tick();
  assert.equal(home.status(current),"ready"); assert.equal(transfer(env,"offscreen.avif"),undefined,"one stalled background cannot consume more slots");
  background.finish(); await drain(env); assert.equal(env.transfers.length,4); home.dispose();
});

test("Home opening recovery retains successful art and retries only failed sources", async () => {
  const env=environment(); const scene=new env.Element("section",{class:"home-scene01"});
  const a=new env.Img({"data-home-src":"https://example.test/a.avif"}); scene.append(a,new env.Img({"data-home-src":"https://example.test/b.avif"})); env.body.append(scene);
  const home=env.createHomeArtworkLoader(env.body,()=>{}); home.warm(scene); await tick(); transfer(env,"a.avif").finish();
  for(let i=0;i<3;i++){await tick();transfer(env,"b.avif").finish(false);} await tick(); assert.equal(home.status(scene),"error");
  const successful=a.src; env.loader.dispatchEvent(new Event("loaderretry")); await tick();
  assert.match(transfer(env,"b.avif").src,/home-image-retry=/); transfer(env,"b.avif").finish(); await tick();
  assert.equal(home.status(scene),"ready"); assert.equal(a.src,successful); assert.equal(env.transfers.length,5); home.dispose();
});

test("Home cover deadline retains artwork work; an error cancels every active transfer before retry", async () => {
  const env=environment(); const scene=new env.Element("section",{class:"home-scene01"});
  scene.append(...["a","b"].map(name=>new env.Img({"data-home-src":`https://example.test/${name}.avif` }))); env.body.append(scene);
  const home=env.createHomeArtworkLoader(env.body,()=>{}); home.warm(scene); await tick(); env.loader.dispatchEvent(new Event("loaderdeadline")); await tick();
  assert.equal(env.active,2); env.loader.dispatchEvent(new Event("loadererror")); await tick(); assert.equal(env.active,0); assert.equal(home.status(scene),"error");
  env.loader.dispatchEvent(new Event("loaderretry")); await drain(env); assert.equal(home.status(scene),"ready"); assert.equal(env.transfers.length,4); home.dispose();
});

test("a cold Home room copy receives all source layers before carrying the next scene", async () => {
  const env=environment(); const scene=new env.Element("section",{class:"story-chapter"}); const source=new env.Element(); const copy=new env.Element();
  for(const url of ["background","people","family"]){const attrs={"data-home-src":`https://example.test/${url}.avif`};source.append(new env.Img(attrs));copy.append(new env.Img(attrs));}
  scene.append(source); env.body.append(scene,copy); const stop=env.bindHomeArtwork(source,copy); const home=env.createHomeArtworkLoader(env.body,()=>{}); home.warm(scene);
  await drain(env); assert.equal(scene.dataset.homeArtworkActive,"true"); assert.deepEqual(copy.children.map(image=>image.src),source.children.map(image=>image.src));
  assert.equal(env.transfers.length,3); assert.deepEqual(env.accidentalRequests,[]); stop();home.dispose();
});

test("detached CORS readers use their own cache key and cancel without affecting the original", async () => {
  const env=environment(); const scene=new env.Element("section",{class:"home-scene01"});
  const original=new env.Img({"data-home-src":"https://example.test/art.avif"}); const reader=new env.Img({"data-home-src":"https://example.test/art.avif",crossorigin:"anonymous"});
  scene.append(original); env.body.append(scene); const stop=env.bindHomeArtwork(original,reader); const home=env.createHomeArtworkLoader(env.body,()=>{});home.warm(scene);await tick();
  assert.equal(live(env).length,1);assert.equal(reader.src,""); transfer(env,"art.avif").finish();await tick();
  const cors=live(env).find(item=>item.crossOrigin==="anonymous");assert.ok(cors);
  stop();await tick();assert.equal(cors.active,false);assert.equal(env.active,0);assert.equal(home.status(scene),"ready");home.dispose();
});

test("visible content promotes into a reserved slot beside a stalled background", async () => {
  const env=environment(); const route=env.route();
  const images=Array.from({length:8},(_,index)=>env.image(`image-${index}.avif`));route.append(...images);
  images.slice(0,6).forEach(image=>{image.rect={top:100,bottom:200,left:0,right:100,width:100,height:100};});
  const queue=env.createPageImageQueue(env.body);await tick();
  for(let index=0;index<6;index++){transfer(env,`image-${index}.avif`).finish();await tick();}
  await queue.criticalReady;assert.ok(transfer(env,"image-6.avif"));
  images[7].rect={top:100,bottom:200,left:0,right:100,width:100,height:100};env.window.dispatchEvent(new Event("scroll"));
  await tick(); assert.ok(transfer(env,"image-7.avif"));assert.equal(live(env).length,2);
  queue.dispose();await tick();assert.equal(env.active,0);
});

test("critical page images start while decorative loader artwork is still pending", async () => {
  const env = environment();
  env.window.__circureLoaderArtReady = new Promise(() => {});
  const image = env.image("first.avif"); env.route().append(image);
  const queue = env.createPageImageQueue(env.body); await tick();
  assert.ok(transfer(env, "first.avif"), "loader illustration must not serialize page downloads");
  transfer(env, "first.avif").finish(); await queue.criticalReady;
  assert.equal(image.dataset.pageLoaded, "true");
  queue.dispose();
});

test("distant figures do not gate entry and still start automatically after the first figure", async () => {
  const env = environment(); const route = env.route();
  const hidden = env.image("hidden.avif"); hidden.getClientRects = () => [];
  route.append(hidden);
  route.append(...Array.from({ length: 7 }, (_, index) => env.image(`figure-${index}.avif`)));
  const queue = env.createPageImageQueue(env.body); await tick();
  assert.equal(live(env).length, 1, "only the first figure is critical below the fold");
  transfer(env, "figure-0.avif").finish(); await queue.criticalReady; await tick();
  assert.equal(live(env).length, 1);
  assert.ok(transfer(env, "figure-1.avif"), "background continues without interaction");
  queue.dispose(); await tick(); assert.equal(env.active, 0);
});

test("visible critical figures respect the reader clip and the horizontal viewport", async () => {
  const env = environment(); const route = env.route();
  const reader = new env.Element("div", { class: "route-frame__scroll" });
  reader.rect = { top: 100, bottom: 400, left: 0, right: 1000, width: 1000, height: 300 };
  const first = env.image("first.avif");
  const clipped = env.image("clipped.avif");
  clipped.rect = { top: 600, bottom: 700, left: 0, right: 100, width: 100, height: 100 };
  const offside = env.image("offside.avif");
  offside.rect = { top: 150, bottom: 250, left: 1500, right: 1600, width: 100, height: 100 };
  const visible = env.image("visible.avif");
  visible.rect = { top: 150, bottom: 250, left: 0, right: 100, width: 100, height: 100 };
  reader.append(first, clipped, offside, visible); route.append(reader);
  const queue = env.createPageImageQueue(env.body); let ready = false;
  queue.criticalReady.then(() => { ready = true; }); await tick();
  assert.deepEqual(live(env).map((image) => image.src), ["first", "visible"].map((name) => `https://example.test/${name}.avif`));
  transfer(env, "first.avif").finish(); await tick(); assert.equal(ready, false);
  transfer(env, "visible.avif").finish(); await queue.criticalReady; await tick();
  assert.equal(ready, true); assert.equal(live(env).length, 1);
  queue.dispose();
});
