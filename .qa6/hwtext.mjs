// Full-copy audit: extract every text node inside the reader article on both
// the OLD (reference) and NEW Hardware page, normalise, and diff.
// usage: QA_CDP=9226 node hwtext.mjs
const OLD = "http://127.0.0.1:8098/jlu-fbh/hardware";
const NEW = "http://localhost:5173/jlu-fbh/hardware";

async function grab(url) {
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
  await new Promise((r) => setTimeout(r, 4500));

  const res = await send("Runtime.evaluate", {
    expression: `(() => {
      const root = document.querySelector('.wiki-article');
      const norm = (s) => s.replace(/[\\u00a0\\s]+/g, ' ').trim();
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      const out = [];
      let n;
      while ((n = walker.nextNode())) {
        const t = norm(n.nodeValue || '');
        if (!t) continue;
        const el = n.parentElement;
        out.push({ t, tag: el.tagName, cls: (el.className || '').toString().slice(0, 40) });
      }
      return JSON.stringify(out);
    })()`,
    awaitPromise: true,
    returnByValue: true,
  });
  ws.close();
  return JSON.parse(res.result.value);
}

const oldText = await grab(OLD);
const newText = await grab(NEW);

// Text-content only, in document order (styling/ids differ by design).
const oldJoined = oldText.map((x) => x.t).join("\n");
const newJoined = newText.map((x) => x.t).join("\n");

const oldSet = new Map();
for (const x of oldText) oldSet.set(x.t, (oldSet.get(x.t) || 0) + 1);
const newSet = new Map();
for (const x of newText) newSet.set(x.t, (newSet.get(x.t) || 0) + 1);

const missing = [];
for (const [t, c] of oldSet) {
  const nc = newSet.get(t) || 0;
  if (nc < c) missing.push({ t: t.slice(0, 140), oldCount: c, newCount: nc });
}
const added = [];
for (const [t, c] of newSet) {
  const oc = oldSet.get(t) || 0;
  if (oc < c) added.push({ t: t.slice(0, 140), oldCount: oc, newCount: c });
}

console.log("old text nodes:", oldText.length, " new text nodes:", newText.length);
console.log("");
console.log("=== MISSING (present in old, fewer/absent in new) ===");
if (!missing.length) console.log("  (none)");
for (const m of missing) console.log(`  [${m.oldCount}->${m.newCount}] ${m.t}`);
console.log("");
console.log("=== ADDED (present in new, more than in old) ===");
if (!added.length) console.log("  (none)");
for (const a of added) console.log(`  [${a.oldCount}->${a.newCount}] ${a.t}`);
