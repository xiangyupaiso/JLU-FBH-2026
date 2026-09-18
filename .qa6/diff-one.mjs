// Prints the first differing region of one selector's rendered text between the
// old build and the new page.
// usage: node diff-one.mjs <oldUrl> <newUrl> <selector>
const [, , oldUrl, newUrl, selector] = process.argv;

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

const grab = async (url) => {
  await send("Page.navigate", { url });
  for (let i = 0; i < 40; i++) {
    await new Promise((r) => setTimeout(r, 500));
    const res = await send("Runtime.evaluate", {
      expression: `(() => { const el = document.querySelector(${JSON.stringify(selector)}); return el ? el.innerText.replace(/\\s+/g, " ").trim() : null; })()`,
      returnByValue: true,
    });
    if (res.result?.value) return res.result.value;
  }
  throw new Error("timeout: " + url);
};

const a = await grab(oldUrl);
const b = await grab(newUrl);
if (a === b) {
  console.log("identical");
} else {
  let i = 0;
  while (i < a.length && i < b.length && a[i] === b[i]) i++;
  console.log(`first diff at ${i} (len old=${a.length} new=${b.length})`);
  console.log("old:", JSON.stringify(a.slice(Math.max(0, i - 80), i + 140)));
  console.log("new:", JSON.stringify(b.slice(Math.max(0, i - 80), i + 140)));
}
ws.close();
