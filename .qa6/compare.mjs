// Phase 1 acceptance: compares computed styles of the ported panels against the
// pre-revamp build (read-only dist on :8098) for the same selectors.
// usage: node compare.mjs <oldUrl> <newUrl> <selectors.json | json-string>
import { readFile } from "node:fs/promises";

const [, , oldUrl, newUrl, selectorsArg] = process.argv;
const selectors = selectorsArg.endsWith(".json")
  ? JSON.parse(await readFile(selectorsArg, "utf8"))
  : JSON.parse(selectorsArg);

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
  "fontStyle",
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
  "opacity",
  "listStyleType",
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

const collect = async (url) => {
  const nav = await send("Page.navigate", { url });
  if (process.env.QA_DEBUG) console.log("  navigate:", JSON.stringify(nav));
  // wait for the app to mount and the first selector to exist
  const deadline = Date.now() + 20000;
  for (;;) {
    await new Promise((r) => setTimeout(r, 500));
    const probe = await send("Runtime.evaluate", {
      expression: `document.querySelectorAll(${JSON.stringify(selectors[0])}).length`,
      returnByValue: true,
    });
    if (process.env.QA_DEBUG) console.log("  probe:", JSON.stringify(probe));
    if ((probe.result?.value ?? 0) > 0) break;
    if (Date.now() > deadline) {
      console.log(`  (timed out waiting for ${selectors[0]} on ${url})`);
      break;
    }
  }
  await new Promise((r) => setTimeout(r, 600));
  const expr = `(() => {
    const props = ${JSON.stringify(PROPS)};
    const out = {};
    for (const sel of ${JSON.stringify(selectors)}) {
      const els = [...document.querySelectorAll(sel)];
      out[sel] = els.map((el) => {
        const cs = getComputedStyle(el);
        const o = {};
        for (const p of props) o[p] = cs[p];
        o.__text = (el.textContent || "").replace(/\\s+/g, " ").trim().slice(0, 120);
        return o;
      });
    }
    return JSON.stringify(out);
  })()`;
  const res = await send("Runtime.evaluate", {
    expression: expr,
    returnByValue: true,
  });
  return JSON.parse(res.result.value);
};

const oldData = await collect(oldUrl);
const newData = await collect(newUrl);

let diffs = 0;
let compared = 0;
for (const sel of selectors) {
  const a = oldData[sel] ?? [];
  const b = newData[sel] ?? [];
  if (a.length !== b.length) {
    console.log(`✗ ${sel}: element count old=${a.length} new=${b.length}`);
    diffs++;
    continue;
  }
  a.forEach((oldEl, i) => {
    const newEl = b[i];
    const changed = PROPS.filter((p) => oldEl[p] !== newEl[p]);
    compared++;
    if (changed.length) {
      diffs++;
      console.log(`✗ ${sel} [${i}]`);
      changed.forEach((p) =>
        console.log(`     ${p}: old="${oldEl[p]}"  new="${newEl[p]}"`),
      );
    }
    if (oldEl.__text !== newEl.__text) {
      console.log(`  ~ ${sel} [${i}] text differs:\n     old="${oldEl.__text}"\n     new="${newEl.__text}"`);
    }
  });
}
console.log(`\ncompared ${compared} elements across ${selectors.length} selectors; ${diffs} with style diffs`);
ws.close();
