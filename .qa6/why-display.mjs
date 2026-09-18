// Prints which stylesheet/rule wins `display` for a selector, using CDP's CSS
// domain (matched styles). usage: node why-display.mjs <url> <selector> [prop]
const [, , url, selector, prop = "display"] = process.argv;

const list = await (await fetch("http://127.0.0.1:9225/json/list")).json();
const page = list.find((t) => t.type === "page");
const ws = new WebSocket(page.webSocketDebuggerUrl);
let id = 0;
const pending = new Map();
const sheets = new Map();
ws.addEventListener("message", (ev) => {
  const msg = JSON.parse(ev.data);
  if (msg.id && pending.has(msg.id)) {
    pending.get(msg.id)(msg);
    pending.delete(msg.id);
  } else if (msg.method === "CSS.styleSheetAdded") {
    sheets.set(msg.params.header.styleSheetId, msg.params.header.sourceURL);
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
await send("DOM.enable");
await send("CSS.enable");
await send("Emulation.setDeviceMetricsOverride", {
  width: 1440,
  height: 900,
  deviceScaleFactor: 1,
  mobile: false,
});
await send("Page.navigate", { url });
for (let i = 0; i < 40; i++) {
  await new Promise((r) => setTimeout(r, 500));
  const probe = await send("Runtime.evaluate", {
    expression: `document.querySelectorAll(${JSON.stringify(selector)}).length`,
    returnByValue: true,
  });
  if (probe.result?.value > 0) break;
}
await new Promise((r) => setTimeout(r, 800));

const { root } = await send("DOM.getDocument", { depth: -1 });
const { nodeId } = await send("DOM.querySelector", {
  nodeId: root.nodeId,
  selector,
});
if (!nodeId) {
  console.log("selector not found:", selector);
  process.exit(0);
}
const matched = await send("CSS.getMatchedStylesForNode", { nodeId });
const hits = [];
for (const entry of matched.matchedCSSRules ?? []) {
  const rule = entry.rule;
  const decl = rule.style.cssProperties?.find((p) => p.name === prop);
  if (!decl || decl.disabled) continue;
  const url = sheets.get(rule.styleSheetId) ?? "(inline)";
  hits.push({
    url: url.split("/").pop(),
    selector: rule.selectorList.text.replace(/\s+/g, " "),
    value: decl.value,
    important: decl.important,
  });
}
console.log(`\n${url}\n${selector}  [${prop}]`);
hits.forEach((h) => console.log(`  ${h.important ? "!important " : ""}${h.value}   ${h.selector}   <${h.url}>`));
ws.close();
