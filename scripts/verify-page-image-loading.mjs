import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import vm from "node:vm";
import ts from "typescript";
import { renderToStaticMarkup } from "react-dom/server";

const compile = (path, module = ts.ModuleKind.ES2022) => ts.transpileModule(
  readFileSync(new URL(`../${path}`, import.meta.url), "utf8"),
  { compilerOptions: { module, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX } },
).outputText;
const loaderSource = compile("src/utils/pageLoader.ts").replace(/^export /gm, "");
const tick = async () => {
  for (let i = 0; i < 8; i++) await new Promise(setImmediate);
};

function environment() {
  const requests = [];
  class Image extends EventTarget {
    src = "";
    srcset = "";
    complete = false;
    naturalWidth = 0;
    loading = "lazy";
    crossOrigin = null;
    decodeCalls = 0;
    constructor(src) {
      super();
      if (src) this.src = src;
      else requests.push(this);
    }
    decode() {
      this.decodeCalls++;
      return this.complete && this.naturalWidth > 0
        ? Promise.resolve()
        : Promise.reject(new Error("Image not ready"));
    }
    finish(success = true) {
      this.complete = true;
      this.naturalWidth = success ? 100 : 0;
      this.dispatchEvent(new Event(success ? "load" : "error"));
    }
  }
  class SvgImage {
    constructor(src) { this.href = { baseVal: src }; }
    getAttribute() { return null; }
  }
  class Video extends EventTarget {
    static HAVE_CURRENT_DATA = 2;
    readyState = 0;
    src = "animation.webm";
    currentSrc = "";
    poster = "";
    autoplay = true;
    preload = "none";
    error = null;
  }
  const loader = Object.assign(new EventTarget(), {
    hidden: false,
    classList: (() => {
      const values = new Set(["is-playing"]);
      return {
        contains: (value) => values.has(value),
        add: (...items) => items.forEach((value) => values.add(value)),
        remove: (...items) => items.forEach((value) => values.delete(value)),
      };
    })(),
    getAnimations: () => [],
  });
  let elements = [];
  let hints = [];
  const context = vm.createContext({
    document: {
      getElementById: (id) => id === "page-loader" ? loader : { querySelectorAll: () => elements },
      querySelectorAll: (selector) => selector.includes('as="image"') ? hints : [],
      fonts: { ready: Promise.resolve() },
    },
    window: {
      setTimeout: (fn) => setImmediate(fn),
      clearTimeout: (id) => clearImmediate(id),
      matchMedia: () => ({ matches: true }),
    },
    requestAnimationFrame: (fn) => setImmediate(fn),
    getComputedStyle: (element, pseudo) => ({
      backgroundImage: "none", maskImage: "none", borderImageSource: "none",
      listStyleImage: "none", content: "normal", ...element.styles?.[pseudo ?? "base"],
    }),
    AbortController, Promise, Image,
    HTMLImageElement: Image, SVGImageElement: SvgImage,
    HTMLVideoElement: Video, HTMLMediaElement: Video,
  });
  vm.runInContext(loaderSource, context);
  return {
    context, loader, requests, Image, SvgImage, Video,
    page: (nextElements, nextHints = []) => { elements = nextElements; hints = nextHints; },
    ready: () => context.hidePageLoaderWhenReady(),
  };
}

test("loader covers a cold page until hidden navigation, all body images and hero art are ready", async () => {
  const env = environment();
  const icon = new env.Image("nav-hardware.webp");
  const figure = new env.Image("hardware-fig6.webp");
  const hero = { styles: { "::before": { backgroundImage: 'url("hardware-hero.webp")' } } };
  env.page([icon, figure, hero]);
  env.ready();
  await tick();
  assert.equal(env.loader.hidden, false);
  assert.equal(icon.loading, "eager");
  icon.finish();
  figure.finish();
  await tick();
  assert.equal(env.loader.hidden, false, "slow hero keeps the loading cover up");
  env.requests.find((image) => image.src === "hardware-hero.webp").finish();
  await tick();
  assert.equal(env.loader.hidden, true);
});

test("image decode rejecting before loading cannot dismiss the cover", async () => {
  const env = environment();
  const image = new env.Image("slow-offscreen.webp");
  env.page([image]);
  env.ready();
  await tick();
  assert.equal(image.decodeCalls, 0);
  assert.equal(env.loader.hidden, false);
  image.finish();
  await tick();
  assert.equal(image.decodeCalls, 1);
  assert.equal(env.loader.hidden, true);
});

test("closed dialogs, SVG art and pseudo-element masks are ready before the intro is released", async () => {
  const env = environment();
  env.page([
    new env.SvgImage("home-ring.webp"),
    { styles: { "::after": { maskImage: 'url("home-mask.webp")' }, base: { maskImage: "url(#local-mask)" } } },
  ], [{ href: "interview-dialog.webp", crossOrigin: null }]);
  let introReleased = false;
  void env.context.whenPageLoaderLeaves().then(() => { introReleased = true; });
  env.ready();
  await tick();
  assert.deepEqual(env.requests.map((image) => image.src).sort(), ["home-mask.webp", "home-ring.webp", "interview-dialog.webp"]);
  for (const image of env.requests) image.finish();
  await tick();
  assert.equal(introReleased, true);
  assert.equal(env.loader.hidden, true);
});

test("a failed image settles without leaving the visitor trapped behind the loader", async () => {
  const env = environment();
  const image = new env.Image("missing.webp");
  env.page([image]);
  env.ready();
  await tick();
  image.finish(false);
  await tick();
  assert.equal(env.loader.hidden, true);
});

test("returning to a page can reuse images that are already loaded", async () => {
  const env = environment();
  const image = new env.Image("cached.webp");
  image.finish();
  env.page([image]);
  env.ready();
  await tick();
  assert.equal(env.loader.hidden, true);
  assert.equal(image.decodeCalls, 1);
});

test("changing routes cancels the old page wait and gates only the new route", async () => {
  const env = environment();
  const oldImage = new env.Image("old-route.webp");
  const nextImage = new env.Image("new-route.webp");
  env.page([oldImage]);
  env.ready();
  await tick();
  env.context.showPageLoader();
  env.page([nextImage]);
  env.ready();
  await tick();
  oldImage.finish();
  await tick();
  assert.equal(env.loader.hidden, false);
  nextImage.finish();
  await tick();
  assert.equal(env.loader.hidden, true);
});

test("autoplay artwork waits for its first frame while PDF and game links stay on demand", async () => {
  const env = environment();
  const video = new env.Video();
  env.page([video, { href: "large-document.pdf" }, { src: "game/index.html" }]);
  env.ready();
  await tick();
  assert.equal(video.preload, "auto");
  assert.equal(env.loader.hidden, false);
  assert.equal(env.requests.length, 0);
  video.readyState = 2;
  video.dispatchEvent(new Event("loadeddata"));
  await tick();
  assert.equal(env.loader.hidden, true);
});

test("page image metadata includes nested DBTL and split figures and excludes document links", () => {
  const source = compile("src/components/wiki/wikiPageImages.ts").replace(/^export /gm, "");
  const context = vm.createContext({});
  vm.runInContext(source, context);
  const sources = context.wikiPageImages({ sections: [{ blocks: [
    { type: "figure", src: "body.webp" },
    { type: "dbtl", stages: [{ blocks: [{ type: "figure", src: "inactive-stage.webp" }] }] },
    { type: "split", prose: [{ type: "figure", src: "body.webp" }], aside: { type: "figure", src: "aside.webp" } },
    { type: "references", items: [{ href: "large-document.pdf" }] },
  ] }] });
  assert.deepEqual(Array.from(sources), ["body.webp", "inactive-stage.webp", "aside.webp"]);
});

test("React puts interaction-only page image declarations in the head as resource hints", async () => {
  const source = compile("src/components/common/PageImagePreloads.tsx", ts.ModuleKind.CommonJS);
  const jsx = await import("react/jsx-runtime");
  const module = { exports: {} };
  vm.runInNewContext(source, { module, exports: module.exports, require: () => jsx });
  const markup = renderToStaticMarkup(jsx.jsx("html", {
    children: [jsx.jsx("head", {}, "head"), jsx.jsx("body", {
      children: jsx.jsx("main", {
        children: jsx.jsx(module.exports.PageImagePreloads, { sources: ["dialog.webp", undefined, "dialog.webp"] }),
      }),
    }, "body")],
  }));
  assert.equal((markup.match(/rel="preload"/g) ?? []).length, 1);
  assert.match(markup, /as="image"/);
  assert.match(markup, /href="dialog.webp"/);
  assert.match(markup, /<head>.*href="dialog.webp".*<\/head>/);
  assert.doesNotMatch(markup.match(/<body>.*<\/body>/)[0], /rel="preload"/);
});
