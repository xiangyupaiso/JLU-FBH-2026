// Compares the full rendered text of every ported panel between the old build
// and the new page, and exercises the interactive panels on both.
// usage: node text-compare.mjs <oldUrl> <newUrl> <panelSelectors.json>
import { readFile } from "node:fs/promises";

const [, , oldUrl, newUrl, selFile] = process.argv;
const selectors = JSON.parse(await readFile(selFile, "utf8"));

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

const collectText = async (url) => {
  await send("Page.navigate", { url });
  const deadline = Date.now() + 20000;
  for (;;) {
    await new Promise((r) => setTimeout(r, 500));
    const n = await evalJs(
      `document.querySelectorAll(${JSON.stringify(selectors[0])}).length`,
    );
    if (n > 0) break;
    if (Date.now() > deadline) throw new Error("timed out: " + url);
  }
  await new Promise((r) => setTimeout(r, 800));
  return JSON.parse(
    await evalJs(`JSON.stringify(${JSON.stringify(selectors)}.map((sel) => {
      const el = document.querySelector(sel);
      return [sel, el ? el.innerText.replace(/\\s+/g, " ").trim() : null];
    }))`),
  );
};

// interactions: click the first route button of each explorer and capture the
// resulting selected-panel text
const collectInteraction = async (url) => {
  await send("Page.navigate", { url });
  const deadline = Date.now() + 20000;
  for (;;) {
    await new Promise((r) => setTimeout(r, 500));
    const n = await evalJs(`document.querySelectorAll(".dry-project-explorer").length`);
    if (n > 0) break;
    if (Date.now() > deadline) throw new Error("timed out: " + url);
  }
  await new Promise((r) => setTimeout(r, 800));
  return JSON.parse(
    await evalJs(`(async () => {
      const root = document.querySelector(".dry-project-explorer");
      const buttons = [...root.querySelectorAll(".dry-project-explorer__route button")];
      const out = [];
      for (const b of buttons) {
        b.click();
        await new Promise((r) => setTimeout(r, 260));
        out.push({
          label: b.innerText.replace(/\\s+/g, " ").trim(),
          active: b.className,
          panel: root.querySelector(".dry-project-explorer__panel").innerText.replace(/\\s+/g, " ").trim().slice(0, 160),
        });
      }
      return JSON.stringify(out);
    })()`),
  );
};

const oldText = await collectText(oldUrl);
const newText = await collectText(newUrl);
let diffs = 0;
oldText.forEach(([sel, oldVal], i) => {
  const newVal = newText[i][1];
  if (oldVal !== newVal) {
    diffs++;
    console.log(`✗ text differs: ${sel}`);
    console.log(`   old: ${String(oldVal).slice(0, 200)}`);
    console.log(`   new: ${String(newVal).slice(0, 200)}`);
  }
});
console.log(`panel text compared: ${oldText.length}, differing: ${diffs}`);

const oldI = await collectInteraction(oldUrl);
const newI = await collectInteraction(newUrl);
console.log(
  `explorer interaction steps: old=${oldI.length} new=${newI.length} identical=${JSON.stringify(oldI) === JSON.stringify(newI)}`,
);
if (JSON.stringify(oldI) !== JSON.stringify(newI)) {
  oldI.forEach((o, i) => {
    if (JSON.stringify(o) !== JSON.stringify(newI[i])) {
      console.log(`  step ${i}: old=${JSON.stringify(o)}`);
      console.log(`            new=${JSON.stringify(newI[i])}`);
    }
  });
}
ws.close();
