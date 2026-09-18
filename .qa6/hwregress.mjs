// Regression sweep: confirm the shared component selectors touched on the
// Hardware migration are not rendered by any other reader-route page, and that
// every other route still mounts its expected root.
// usage: QA_CDP=9226 node hwregress.mjs
const BASE = "http://localhost:5173/jlu-fbh";
const ROUTES = [
  "/hardware",
  "/model",
  "/software",
  "/games",
  "/description",
  "/engineering",
  "/results",
  "/contribution",
  "/experiments",
  "/human-practices",
  "/education",
  "/inclusivity",
  "/sustainability",
  "/measurement",
  "/protocol",
  "/team",
];

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

const rows = [];
for (const route of ROUTES) {
  await send("Page.navigate", { url: BASE + route });
  await new Promise((r) => setTimeout(r, 3200));
  const res = await send("Runtime.evaluate", {
    expression: `JSON.stringify({
      route: ${JSON.stringify(route)},
      title: document.querySelector('.wiki-hero h1')?.textContent?.trim() || document.title,
      miniVisual: document.querySelectorAll('.wiki-mini-visual').length,
      table: document.querySelectorAll('.wiki-table').length,
      tableWrap: document.querySelectorAll('.wiki-table-wrap').length,
      placeholder: document.querySelectorAll('.wiki-image-placeholder').length,
      inlineLink: document.querySelectorAll('.wiki-chapter-link--inline').length,
      sections: document.querySelectorAll('.wiki-section').length,
      split: document.querySelectorAll('.wiki-blocks--split').length,
      feature: document.querySelectorAll('.wiki-feature').length,
      scrollW: document.querySelector('.route-frame__scroll')?.scrollWidth || 0,
      clientW: document.querySelector('.route-frame__scroll')?.clientWidth || 0,
      hOverflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
    })`,
    awaitPromise: true,
    returnByValue: true,
  });
  rows.push(JSON.parse(res.result.value));
}

console.log(
  "route".padEnd(20) +
    "sect".padStart(5) +
    "feat".padStart(5) +
    "mini".padStart(5) +
    "tbl".padStart(5) +
    "wrap".padStart(5) +
    "phold".padStart(6) +
    "lnk".padStart(5) +
    "split".padStart(6) +
    "  overflowX  title",
);
for (const r of rows) {
  const ov = r.hOverflow > 0 ? "YES(" + r.hOverflow + ")" : "no";
  console.log(
    r.route.padEnd(20) +
      String(r.sections).padStart(5) +
      String(r.feature).padStart(5) +
      String(r.miniVisual).padStart(5) +
      String(r.table).padStart(5) +
      String(r.tableWrap).padStart(5) +
      String(r.placeholder).padStart(6) +
      String(r.inlineLink).padStart(5) +
      String(r.split).padStart(6) +
      "  " +
      ov.padEnd(10) +
      " " +
      r.title,
  );
}
ws.close();
