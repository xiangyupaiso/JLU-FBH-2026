// Phase 1 acceptance (exhaustive): walks every element inside each ported panel
// on the old build and the new page and compares computed styles + text
// element-by-element (matched by DOM order).
// usage: node subtree-compare.mjs <oldUrl> <newUrl> <panelSelectors.json>
import { readFile } from "node:fs/promises";

const [, , oldUrl, newUrl, selFile] = process.argv;
const roots = JSON.parse(await readFile(selFile, "utf8"));

const PROPS = [
  "display",
  "paddingTop",
  "paddingRight",
  "paddingBottom",
  "paddingLeft",
  "marginTop",
  "marginRight",
  "marginBottom",
  "marginLeft",
  "borderTopWidth",
  "borderTopStyle",
  "borderTopColor",
  "borderRightWidth",
  "borderBottomWidth",
  "borderLeftWidth",
  "borderRadius",
  "backgroundColor",
  "backgroundImage",
  "boxShadow",
  "color",
  "fontFamily",
  "fontSize",
  "fontWeight",
  "lineHeight",
  "letterSpacing",
  "textTransform",
  "textAlign",
  "gap",
  "rowGap",
  "columnGap",
  "alignItems",
  "justifyContent",
  "flexDirection",
  "flexWrap",
  "gridTemplateColumns",
  "gridTemplateRows",
  "opacity",
  "visibility",
  "listStyleType",
  "textDecorationLine",
  "whiteSpace",
  "position",
  "overflow",
  "transform",
  "cursor",
  "minHeight",
  "maxWidth",
];

const list = await (await fetch("http://127.0.0.1:9225/json/list")).json();
const page = list.find((t) => t.type === "page");
const ws = new WebSocket(page.webSocketDebuggerUrl);
let id = 0;
const pending = new Map();
ws.addEventListener("message", (ev) => {
  const msg = JSON.parse(ev.data);
  if (msg.id && pending.has(msg.id)) {
    pending.get(msg.id)(msg);
    pending.delete(msg.id);
  }
});
await new Promise((r) => ws.addEventListener("open", r, { once: true }));
const send = (method, params = {}) =>
  new Promise((resolve, reject) => {
    const mid = ++id;
    pending.set(mid, (msg) =>
      msg.error ? reject(new Error(method + ": " + msg.error.message)) : resolve(msg.result),
    );
    ws.send(JSON.stringify({ id: mid, method, params }));
  });

await send("Page.enable");
await send("Emulation.setDeviceMetricsOverride", {
  width: 1440,
  height: 900,
  deviceScaleFactor: 1,
  mobile: false,
});

const evalJs = async (expression) => {
  const res = await send("Runtime.evaluate", {
    expression,
    awaitPromise: true,
    returnByValue: true,
  });
  if (res.exceptionDetails) {
    throw new Error(res.exceptionDetails.exception?.description ?? "eval failed");
  }
  return res.result.value;
};

const collect = async (url) => {
  await send("Page.navigate", { url });
  for (let i = 0; i < 40; i++) {
    await new Promise((r) => setTimeout(r, 500));
    const n = await evalJs(`document.querySelectorAll(${JSON.stringify(roots[0])}).length`);
    if (n > 0) break;
  }
  await new Promise((r) => setTimeout(r, 900));
  return JSON.parse(
    await evalJs(`JSON.stringify(${JSON.stringify(roots)}.map((sel) => {
      const root = document.querySelector(sel);
      if (!root) return null;
      const nodes = [root, ...root.querySelectorAll("*")];
      return nodes.map((el) => {
        const cs = getComputedStyle(el);
        const o = { __tag: el.tagName.toLowerCase(), __cls: el.className };
        for (const p of ${JSON.stringify(PROPS)}) o[p] = cs[p];
        o.__text = (el.innerText || "").replace(/\\s+/g, " ").trim().slice(0, 80);
        return o;
      });
    }))`),
  );
};

const oldData = await collect(oldUrl);
const newData = await collect(newUrl);

let elementDiffs = 0;
let textDiffs = 0;
let total = 0;
roots.forEach((sel, ri) => {
  const a = oldData[ri];
  const b = newData[ri];
  if (!a || !b) {
    console.log(`✗ ${sel}: missing on ${!a ? "old" : "new"}`);
    return;
  }
  if (a.length !== b.length) {
    console.log(`✗ ${sel}: element count old=${a.length} new=${b.length}`);
  }
  const n = Math.min(a.length, b.length);
  const reported = new Set();
  for (let i = 0; i < n; i++) {
    total++;
    const changed = PROPS.filter((p) => a[i][p] !== b[i][p]);
    if (changed.length) {
      elementDiffs++;
      const key = `${a[i].__cls}|${changed.join(",")}`;
      if (!reported.has(key) && reported.size < 6) {
        reported.add(key);
        console.log(
          `✗ ${sel} [${i}] <${a[i].__tag} class="${a[i].__cls}">\n` +
            changed
              .map((p) => `     ${p}: old="${a[i][p]}"  new="${b[i][p]}"`)
              .join("\n"),
        );
      }
    }
    if (a[i].__text !== b[i].__text) {
      textDiffs++;
      const key = `text:${a[i].__cls}`;
      if (!reported.has(key) && reported.size < 6) {
        reported.add(key);
        console.log(
          `~ ${sel} [${i}] <${a[i].__tag} class="${a[i].__cls}"> text\n     old="${a[i].__text}"\n     new="${b[i].__text}"`,
        );
      }
    }
  }
});
console.log(
  `\nelements compared: ${total}; style-differing: ${elementDiffs}; text-differing: ${textDiffs}`,
);
ws.close();
