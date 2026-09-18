// Capture an element out of the reader-route timeline by converting the
// element's in-frame offset into a document scroll position, exactly the way
// `scrollReaderToTarget` does, then screenshot the viewport.
// usage: QA_CDP=9226 node hwshot.mjs <url> <out.png> <selector> [occurrenceIndex] [padTop]
const [, , url, out, selector, occRaw = "0", padRaw = "120"] = process.argv;
const occ = Number(occRaw);
const pad = Number(padRaw);

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
const W = Number(process.env.QA_W || 1440);
const H = Number(process.env.QA_H || 900);
await send("Emulation.setDeviceMetricsOverride", {
  width: W,
  height: H,
  deviceScaleFactor: 1,
  mobile: false,
});
await send("Page.navigate", { url });
await new Promise((r) => setTimeout(r, 4000));

const expr = `(() => {
  const el = document.querySelectorAll(${JSON.stringify(selector)})[${occ}];
  if (!el) return "MISSING";
  const inner = el.closest('.route-frame__scroll') || el.closest('.wiki-article');
  const track = inner && inner.closest('.wiki-reader-track');
  const r = el.getBoundingClientRect();
  if (!track) {
    const y = r.top + window.scrollY - ${pad};
    window.scrollTo(0, Math.max(0, y));
    return JSON.stringify({ mode: 'plain', y: Math.max(0, y) });
  }
  const trackStart = track.getBoundingClientRect().top + window.scrollY;
  const ib = inner.getBoundingClientRect();
  const innerTop = inner.scrollTop + r.top - ib.top;
  const y = Math.max(0, trackStart + innerTop - ${pad});
  window.scrollTo(0, y);
  return JSON.stringify({ mode: 'track', y, trackStart, innerTop });
})()`;
const res = await send("Runtime.evaluate", {
  expression: expr,
  awaitPromise: true,
  returnByValue: true,
});
console.log("scroll:", res.result?.value);
await new Promise((r) => setTimeout(r, 1600));

const cap = await send("Page.captureScreenshot", { format: "png" });
const { writeFile } = await import("node:fs/promises");
await writeFile(out, Buffer.from(cap.data, "base64"));
console.log("wrote", out);
ws.close();
