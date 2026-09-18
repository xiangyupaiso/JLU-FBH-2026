// Structural comparison of every table / figure / pull-out card between the OLD
// reference page and the NEW page: same count, same headers, same cells, same
// row and column spans.
// usage: QA_CDP=9226 node hwstruct.mjs
const OLD = "http://127.0.0.1:8098/jlu-fbh/hardware";
const NEW = "http://localhost:5173/jlu-fbh/hardware";

const EXPR = `(() => {
  const shape = (t) => ({
    head: Array.from(t.querySelectorAll('thead th')).map(h => h.textContent.trim()),
    rows: Array.from(t.querySelectorAll('tbody tr')).map(tr =>
      Array.from(tr.children).map(td => ({
        tag: td.tagName,
        scope: td.getAttribute('scope'),
        text: td.textContent.replace(/\\s+/g, ' ').trim(),
      }))),
  });
  return JSON.stringify({
    tables: Array.from(document.querySelectorAll('.wiki-table')).map(t => ({
      sec: t.closest('.wiki-section')?.id,
      cap: t.querySelector('caption')?.textContent ?? null,
      ...shape(t),
    })),
    minis: Array.from(document.querySelectorAll('.wiki-mini-visual')).map(e => ({
      sec: e.closest('.wiki-section')?.id,
      label: e.querySelector(':scope > span')?.textContent,
      title: e.querySelector(':scope > strong')?.textContent,
      items: Array.from(e.querySelectorAll('ol li')).map(li => ({
        n: li.querySelector('b')?.textContent,
        t: li.querySelector('span')?.textContent,
      })),
    })),
    figures: Array.from(document.querySelectorAll('.wiki-figure')).map(f => ({
      sec: f.closest('.wiki-section')?.id,
      file: f.querySelector('.wiki-image-placeholder strong')?.textContent ?? null,
      note: f.querySelector('.wiki-image-placeholder p')?.textContent ?? null,
      caption: f.querySelector('figcaption')?.textContent ?? null,
    })),
  });
})()`;

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
        msg.error ? reject(new Error(msg.error.message)) : resolve(msg.result),
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
    expression: EXPR,
    awaitPromise: true,
    returnByValue: true,
  });
  ws.close();
  return JSON.parse(res.result.value);
}

const oldP = await grab(OLD);
const newP = await grab(NEW);

let diffs = 0;
function cmp(label, a, b) {
  const sa = JSON.stringify(a);
  const sb = JSON.stringify(b);
  if (sa === sb) {
    console.log("MATCH  " + label);
  } else {
    diffs += 1;
    console.log("DIFF   " + label);
    console.log("   old: " + sa.slice(0, 400));
    console.log("   new: " + sb.slice(0, 400));
  }
}

console.log("tables old=" + oldP.tables.length + " new=" + newP.tables.length);
for (let i = 0; i < Math.max(oldP.tables.length, newP.tables.length); i += 1) {
  const a = oldP.tables[i];
  const b = newP.tables[i];
  cmp(
    "table[" + i + "] sec=" + (a?.sec ?? b?.sec) + " rows=" + (a?.rows.length ?? "-") + "/" + (b?.rows.length ?? "-"),
    a,
    b,
  );
}

console.log("");
console.log("mini-visuals old=" + oldP.minis.length + " new=" + newP.minis.length);
for (let i = 0; i < Math.max(oldP.minis.length, newP.minis.length); i += 1) {
  cmp("mini[" + i + "] " + (oldP.minis[i]?.label ?? newP.minis[i]?.label), oldP.minis[i], newP.minis[i]);
}

console.log("");
console.log("figures old=" + oldP.figures.length + " new=" + newP.figures.length);
for (let i = 0; i < Math.max(oldP.figures.length, newP.figures.length); i += 1) {
  cmp("figure[" + i + "] " + (oldP.figures[i]?.file ?? newP.figures[i]?.file), oldP.figures[i], newP.figures[i]);
}

console.log("");
console.log(diffs === 0 ? "ALL STRUCTURES IDENTICAL" : diffs + " structural difference(s)");
