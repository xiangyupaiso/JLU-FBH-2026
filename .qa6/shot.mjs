// Minimal CDP screenshot helper (no deps).
// usage: node shot.mjs <url> <out.png> <mode> [args]
//   viewport | clip <y> <h> | scroll2 <docY> <innerSel|-|> <innerTop> | js <expr>
// port via QA_CDP (default 9225), size via QA_W / QA_H.
const [, , url, out, mode = "viewport", ...rest] = process.argv;

const list = await (await fetch(`http://127.0.0.1:${process.env.QA_CDP || 9225}/json/list`)).json();
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
await new Promise((r) => setTimeout(r, 3000));

if (mode === "scroll2") {
  const [docY, sel, top] = rest;
  await send("Runtime.evaluate", {
    expression: `window.scrollTo(0, ${Number(docY)}); ${
      sel && sel !== "-"
        ? `const el=document.querySelector(${JSON.stringify(sel)}); if(el) el.scrollTop = ${Number(top)};`
        : ""
    }`,
  });
  await new Promise((r) => setTimeout(r, 1400));
}
if (mode === "js") {
  const res = await send("Runtime.evaluate", {
    expression: rest[0],
    awaitPromise: true,
    returnByValue: true,
  });
  console.log("eval:", JSON.stringify(res.result?.value ?? null));
  await new Promise((r) => setTimeout(r, 900));
}

const params = { format: "png" };
if (mode === "clip") {
  params.captureBeyondViewport = true;
  params.clip = { x: 0, y: Number(rest[0]), width: W, height: Number(rest[1]), scale: 1 };
}
const { data } = await send("Page.captureScreenshot", params);
const { writeFile } = await import("node:fs/promises");
await writeFile(out, Buffer.from(data, "base64"));
console.log("wrote", out);
ws.close();
