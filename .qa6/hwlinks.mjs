// Click every inline cross-reference on the Hardware reader and assert that its
// target section lands just under the fixed header. Smooth scrolling is
// disabled so the measurement is taken on the settled position.
// usage: QA_CDP=9226 node hwlinks.mjs <url>
const url = process.argv[2];

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

const evalExpr = async (expression) => {
  const res = await send("Runtime.evaluate", {
    expression,
    awaitPromise: true,
    returnByValue: true,
  });
  if (res.exceptionDetails) {
    throw new Error(res.exceptionDetails.exception?.description);
  }
  return res.result?.value;
};

await send("Page.enable");
await send("Emulation.setDeviceMetricsOverride", {
  width: 1440,
  height: 900,
  deviceScaleFactor: 1,
  mobile: false,
});
await send("Emulation.setEmulatedMedia", {
  features: [{ name: "prefers-reduced-motion", value: "reduce" }],
});
await send("Page.navigate", { url });
await new Promise((r) => setTimeout(r, 4500));

const report = await evalExpr(`(async () => {
  const links = Array.from(document.querySelectorAll('.wiki-chapter-link--inline'));
  const header = document.querySelector('.site-header');
  const headerH = header ? header.getBoundingClientRect().height : 0;
  const ids = Array.from(document.querySelectorAll('.wiki-section')).map(s => s.id);
  const out = [];
  for (const a of links) {
    const target = a.getAttribute('href').slice(1);
    const el = document.getElementById(target);
    if (!el) { out.push({ label: a.textContent, target, ok: false, why: 'MISSING TARGET ID' }); continue; }
    a.click();
    await new Promise(r => setTimeout(r, 700));
    const heading = el.querySelector('.wiki-section__heading') || el;
    const hr = heading.getBoundingClientRect();
    out.push({
      label: a.textContent,
      target,
      ok: hr.top >= headerH - 2 && hr.top <= headerH + 90,
      headingTop: Math.round(hr.top),
      headerH: Math.round(headerH),
    });
  }
  return JSON.stringify({ ids, out }, null, 1);
})()`);

const { ids, out } = JSON.parse(report);
console.log("section ids in document:", ids.join(", "));
console.log("");
for (const r of out) {
  console.log(
    (r.ok ? "PASS " : "FAIL ") +
      r.label.padEnd(26) +
      "-> #" +
      r.target.padEnd(22) +
      (r.why ? r.why : "headingTop=" + r.headingTop + " (header " + r.headerH + ")"),
  );
}
const bad = out.filter((r) => !r.ok);
console.log("");
console.log("TOTAL", out.length, "PASS", out.length - bad.length, "FAIL", bad.length);
ws.close();
