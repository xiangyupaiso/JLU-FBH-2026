// Compare computed styles of the same selector set on the OLD and NEW Hardware
// page, side by side. Pure read-only DOM inspection over CDP.
// usage: QA_CDP=9226 node hwstyle.mjs
const OLD = "http://127.0.0.1:8098/jlu-fbh/hardware";
const NEW = "http://localhost:5173/jlu-fbh/hardware";

const SELECTORS = [
  ".wiki-table-wrap",
  ".wiki-table",
  ".wiki-table thead th",
  ".wiki-table tbody th",
  ".wiki-table td",
  ".wiki-image-placeholder",
  ".wiki-image-placeholder > span",
  ".wiki-image-placeholder > strong",
  ".wiki-image-placeholder > p",
  ".wiki-mini-visual",
  ".wiki-mini-visual > span",
  ".wiki-mini-visual > strong",
  ".wiki-mini-visual ol",
  ".wiki-mini-visual li",
  ".wiki-mini-visual li b",
  ".wiki-chapter-link--inline",
  ".wiki-blocks--split",
  ".wiki-blocks--split__aside",
  ".wiki-figure",
  ".wiki-figure figcaption",
  ".wiki-subheading",
  ".wiki-prose p",
  ".wiki-callout",
  ".wiki-boundary",
  ".wiki-section__heading",
  ".wiki-record",
];

const PROPS = [
  "display",
  "gridTemplateColumns",
  "gap",
  "padding",
  "margin",
  "borderRadius",
  "borderTop",
  "borderBottom",
  "borderLeft",
  "background",
  "color",
  "fontFamily",
  "fontSize",
  "fontWeight",
  "letterSpacing",
  "textTransform",
  "lineHeight",
  "position",
  "boxShadow",
  "listStyle",
  "textAlign",
  "verticalAlign",
  "width",
];

async function inspect(url, selectorList) {
  const list = await (
    await fetch(`http://127.0.0.1:${process.env.QA_CDP || 9226}/json/list`)
  ).json();
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
        msg.error
          ? reject(new Error(`${method}: ${msg.error.message}`))
          : resolve(msg.result),
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
  await send("Page.navigate", { url });
  await new Promise((r) => setTimeout(r, 4000));

  const expr = `(() => {
    const sels = ${JSON.stringify(selectorList)};
    const props = ${JSON.stringify(PROPS)};
    const out = {};
    for (const s of sels) {
      const el = document.querySelector(s);
      if (!el) { out[s] = null; continue; }
      const cs = getComputedStyle(el);
      const o = {};
      for (const p of props) o[p] = cs[p];
      const r = el.getBoundingClientRect();
      o._box = Math.round(r.width) + "x" + Math.round(r.height);
      out[s] = o;
    }
    out.__counts = {
      sections: document.querySelectorAll('.wiki-section').length,
      miniVisual: document.querySelectorAll('.wiki-mini-visual').length,
      table: document.querySelectorAll('.wiki-table').length,
      placeholder: document.querySelectorAll('.wiki-image-placeholder').length,
      inlineLink: document.querySelectorAll('.wiki-chapter-link--inline').length,
      split: document.querySelectorAll('.wiki-blocks--split').length,
      figure: document.querySelectorAll('.wiki-figure').length,
      callout: document.querySelectorAll('.wiki-callout').length,
      boundary: document.querySelectorAll('.wiki-boundary').length,
    };
    return out;
  })()`;

  const res = await send("Runtime.evaluate", {
    expression: expr,
    awaitPromise: true,
    returnByValue: true,
  });
  ws.close();
  return res.result?.value;
}

const oldOut = await inspect(OLD, SELECTORS);
const newOut = await inspect(NEW, SELECTORS);

console.log("counts old:", JSON.stringify(oldOut.__counts));
console.log("counts new:", JSON.stringify(newOut.__counts));
console.log("");
for (const s of SELECTORS) {
  const a = oldOut[s];
  const b = newOut[s];
  if (!a && !b) continue;
  console.log("=== " + s);
  if (!a || !b) {
    console.log("  OLD:", a ? "present" : "MISSING", " NEW:", b ? "present" : "MISSING");
    continue;
  }
  for (const p of PROPS) {
    if (a[p] !== b[p]) {
      console.log(`  ${p}\n    old: ${a[p]}\n    new: ${b[p]}`);
    }
  }
  if (a._box !== b._box) console.log(`  _box old=${a._box} new=${b._box}`);
}
