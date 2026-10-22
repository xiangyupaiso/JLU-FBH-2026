// Verify the loader timeout fix by simulating a stalled CDN.
// Start a local dev server with Vite, intercept CDN image requests in the
// browser and delay them indefinitely, then confirm the loader enters the page.

import { spawn } from "node:child_process";
import { once } from "node:events";

const chrome = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const port = 9335;
const profile = `${process.env.LOCALAPPDATA}\\Temp\\cdp-loader-test-${Date.now()}`;

console.log("1. Starting Vite dev server...");
const vite = spawn("yarn.cmd", ["dev"], { stdio: "pipe", shell: true });
let devUrl = "";
vite.stdout.on("data", (chunk) => {
  const s = chunk.toString();
  process.stdout.write(s);
  const m = s.match(/Local:\s+(https?:\/\/localhost:\d+)/);
  if (m) devUrl = m[1];
});
vite.stderr.on("data", (chunk) => process.stderr.write(chunk));

// Wait for "Local: http://localhost:5173"
await new Promise((resolve) => {
  const check = setInterval(() => {
    if (devUrl) { clearInterval(check); resolve(); }
  }, 500);
});

console.log(`\n2. Opening headless Chrome (CDP on :${port})...`);
const proc = spawn(chrome, [
  "--headless=new", `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`,
  "--window-size=1440,900", "--no-first-run", "--disable-quic", "about:blank",
], { stdio: "ignore" });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let target;
for (let i = 0; i < 40 && !target; i++) {
  await sleep(250);
  try {
    const list = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
    target = list.find((t) => t.type === "page");
  } catch {}
}
if (!target) throw new Error("CDP target not found");

const ws = new WebSocket(target.webSocketDebuggerUrl);
await once(ws, "open");
let id = 0;
const waiting = new Map();
const send = (method, params = {}) => new Promise((resolve) => {
  const n = ++id; waiting.set(n, resolve);
  ws.send(JSON.stringify({ id: n, method, params }));
});
ws.addEventListener("message", ({ data }) => {
  const m = JSON.parse(data);
  if (m.id) waiting.get(m.id)?.(m.result ?? m.error);
});

await send("Network.enable");
await send("Page.enable");

console.log("3. Intercepting CDN image requests (delay 999s)...");
await send("Fetch.enable", {
  patterns: [{ urlPattern: "https://static.igem.wiki/*", requestStage: "Request" }],
});
ws.addEventListener("message", ({ data }) => {
  const m = JSON.parse(data);
  if (m.method === "Fetch.requestPaused") {
    // Hold the request open indefinitely (simulates HTTP/3 stall).
    // Do NOT call Fetch.continueRequest or Fetch.failRequest.
    console.log(`   [STALLED] ${m.params.request.url.split("/").pop().slice(0, 80)}`);
  }
});

console.log(`4. Navigating to ${devUrl}/safety-and-security...`);
const t0 = Date.now();
await send("Page.navigate", { url: `${devUrl}/safety-and-security` });

const evalJs = async (expr) => (await send("Runtime.evaluate", { expression: expr, returnByValue: true })).result?.value;

console.log("5. Polling loader state...");
let hiddenAt = null;
for (let t = 0; t < 60000; t += 2000) {
  await sleep(2000);
  const s = await evalJs(`(()=>{const l=document.getElementById('page-loader');return l?{hidden:l.hidden,msg:l.dataset.message,phase:l.dataset.phase}:null})()`);
  const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
  if (s) console.log(`   t=${elapsed}s phase=${s.phase} msg="${s.msg}" hidden=${s.hidden}`);
  if (s?.hidden) { hiddenAt = Date.now() - t0; break; }
}

ws.close();
proc.kill();
vite.kill();

console.log("\n=== RESULT ===");
if (hiddenAt) {
  console.log(`✓ Loader left at ${(hiddenAt / 1000).toFixed(1)}s despite stalled images.`);
  console.log("  The timeout fix is working.");
  process.exit(0);
} else {
  console.log("✗ Loader never left within 60s.");
  console.log("  The page is still stuck. Check pageLoader.ts timeouts.");
  process.exit(1);
}
