export type InkCue = {
  tokens: HTMLElement[];
  state: { progress: number };
};
export type InkTransfer = { source: InkCue; target: InkCue; state: { progress: number } };
type Grain = { x: number; y: number; alpha: number; color: string; rgb: number[]; phase: number; token: number };
type Plate = { grains: Grain[]; x: number; y: number; width: number; height: number; spacing: number };
type Pair = { a: Grain; b: Grain; shared: boolean };

const clamp = (v: number) => Math.max(0, Math.min(1, v));
const smooth = (a: number, b: number, v: number) => {
  const t = clamp((v - a) / (b - a));
  return t * t * (3 - 2 * t);
};
const noise = (i: number) => {
  const n = Math.sin(i * 127.1 + 19.7) * 43758.5453;
  return n - Math.floor(n);
};

/** One demand-rendered ink surface per reading panel. Real browser glyphs supply
 * the pigment; the DOM takes over at the end, preserving selectable, sharp text.
 * Sampling is lazy, bounded, and independent of scroll position or elapsed time. */
export function createReadingInk(stage: HTMLElement, cues: InkCue[], transfers: InkTransfer[], compact: boolean) {
  const canvas = document.createElement("canvas");
  canvas.className = "story-reading-ink";
  canvas.setAttribute("aria-hidden", "true");
  canvas.width = canvas.height = 1;
  stage.append(canvas);
  const context = canvas.getContext("2d");
  const plates = new Map<InkCue, Plate>();
  const correspondences = new Map<InkTransfer, Pair[]>();
  const original = new Map<HTMLElement, string | null>();
  const opacity = new Map<InkCue, number>();
  let disposed = false;
  let width = 0;
  let height = 0;
  let ratio = 1;
  let lastProgress: number[] = [];
  for (const cue of cues) for (const token of cue.tokens) {
    original.set(token, token.getAttribute("style"));
    token.style.opacity = "0";
  }

  const setOpacity = (cue: InkCue, value: number) => {
    if (opacity.get(cue) === value) return;
    cue.tokens.forEach(token => { token.style.opacity = String(value); });
    opacity.set(cue, value);
  };

  const prepare = (cue: InkCue): Plate | undefined => {
    if (plates.has(cue)) return plates.get(cue);
    const stageBox = stage.getBoundingClientRect();
    const boxes = cue.tokens.map(token => token.getBoundingClientRect());
    const left = Math.min(...boxes.map(b => b.left)) - stageBox.left - 4;
    const top = Math.min(...boxes.map(b => b.top)) - stageBox.top - 4;
    const w = Math.ceil(Math.max(...boxes.map(b => b.right)) - stageBox.left - left + 4);
    const h = Math.ceil(Math.max(...boxes.map(b => b.bottom)) - stageBox.top - top + 4);
    if (w <= 0 || h <= 0) return;
    const scratch = document.createElement("canvas");
    const sampleRatio = 1.5;
    scratch.width = Math.ceil(w * sampleRatio);
    scratch.height = Math.ceil(h * sampleRatio);
    const ink = scratch.getContext("2d", { willReadFrequently: true });
    if (!ink) return;
    ink.scale(sampleRatio, sampleRatio);
    ink.textBaseline = "alphabetic";
    const range = document.createRange();
    for (const token of cue.tokens) {
      const walker = document.createTreeWalker(token, NodeFilter.SHOW_TEXT);
      let node: Node | null;
      while ((node = walker.nextNode())) {
        const text = node.textContent || "";
        if (!text.trim()) continue;
        const style = getComputedStyle(node.parentElement!);
        ink.font = `${style.fontStyle} ${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
        ink.fillStyle = style.color;
        ink.letterSpacing = style.letterSpacing === "normal" ? "0px" : style.letterSpacing;
        range.selectNodeContents(node);
        const box = range.getBoundingClientRect();
        const metrics = ink.measureText(text);
        const ascent = metrics.fontBoundingBoxAscent ?? metrics.actualBoundingBoxAscent;
        const descent = metrics.fontBoundingBoxDescent ?? metrics.actualBoundingBoxDescent;
        const baseline = box.top - stageBox.top - top + (box.height - ascent - descent) / 2 + ascent;
        ink.fillText(text, box.left - stageBox.left - left, baseline);
      }
    }
    const pixels = ink.getImageData(0, 0, scratch.width, scratch.height).data;
    const grains: Grain[] = [];
    const spacing = compact ? 1.15 : 1.05;
    const step = spacing * sampleRatio;
    for (let y = step / 2; y < scratch.height; y += step) {
      for (let x = step / 2; x < scratch.width; x += step) {
        const offset = (Math.floor(y) * scratch.width + Math.floor(x)) * 4;
        const alpha = pixels[offset + 3] / 255;
        if (alpha < 0.1) continue;
        const gx = left + x / sampleRatio, gy = top + y / sampleRatio;
        const token = boxes.findIndex(b => gx >= b.left - stageBox.left - 2 && gx <= b.right - stageBox.left + 2
          && gy >= b.top - stageBox.top - 2 && gy <= b.bottom - stageBox.top + 2);
        const rgb = [pixels[offset], pixels[offset + 1], pixels[offset + 2]];
        grains.push({ x: gx, y: gy, alpha, token, rgb,
          color: `rgb(${rgb.join(",")})`, phase: noise(grains.length) });
      }
    }
    // Keep the contour dense without scaling work with a very large monitor.
    const cap = compact ? 3200 : 6200;
    const stride = Math.max(1, Math.ceil(grains.length / cap));
    const plate = { grains: grains.filter((_, i) => i % stride === 0), x: left, y: top,
      width: w, height: h, spacing: spacing * Math.sqrt(stride) };
    plates.set(cue, plate);
    canvas.dataset.sampledGrains = String([...plates.values()].reduce((n, p) => n + p.grains.length, 0));
    return plate;
  };

  const dot = (grain: Grain, x: number, y: number, size: number, alpha: number, color = grain.color) => {
    context!.globalAlpha = alpha * grain.alpha;
    context!.fillStyle = color;
    context!.fillRect(x - size / 2, y - size / 2, size, size);
  };

  const paint = (cue: InkCue, p: number) => {
    const plate = prepare(cue);
    if (!plate || !context) return;
    const native = smooth(0.86, 1, p);
    setOpacity(cue, native);
    const travel = compact ? 0.62 : 1;
    for (const grain of plate.grains) {
      const u = (grain.x - plate.x) / plate.width;
      const delay = u * 0.22;
      const local = clamp((p - delay) / (0.84 - delay));
      if (local <= 0) continue;
      const t = smooth(0, 1, local);
      const remain = 1 - t;
      const wave = Math.sin(Math.PI * t);
      const theta = grain.phase * Math.PI * 2;
      const x = grain.x - remain * (32 + 28 * grain.phase) * travel;
      const y = grain.y + Math.sin(theta + t * 5) * remain * 9 * travel;
      const alpha = smooth(0, 0.16, local) * (1 - native);
      dot(grain, x, y, plate.spacing * (0.68 + 0.35 * t), alpha);
      // Sparse hairline wakes reveal the direction of ink, without a haze over later words.
      if (grain.phase < 0.018 && local > 0.1 && local < 0.8) {
        context.globalAlpha = alpha * 0.2;
        context.strokeStyle = grain.color;
        context.lineWidth = 0.45;
        context.beginPath(); context.moveTo(x, y);
        context.quadraticCurveTo(x - 5 * remain, y - 9 * wave, x - 13 * remain, y - 3 * wave);
        context.stroke();
      }
    }
  };

  const transfer = (transition: InkTransfer) => {
    const { source, target, state } = transition;
    const p = state.progress;
    if (p <= 0) { setOpacity(target, 0); return; }
    const native = smooth(0.87, 1, p);
    setOpacity(source, 1 - smooth(0, 0.07, p));
    setOpacity(target, native);
    // Seeking past the transition only needs the native text, not pixel sampling.
    if (!context || p >= 1) return;
    const from = prepare(source), to = prepare(target);
    if (!from || !to) return;
    if (!from.grains.length || !to.grains.length) return;
    let pairs = correspondences.get(transition);
    if (!pairs) {
      pairs = [];
      const matchedSource = new Set<number>(), matchedTarget = new Set<number>();
      const key = (token: HTMLElement) => token.textContent?.toLowerCase().replace(/[^a-z0-9]/g, "");
      const pair = (a: Grain[], b: Grain[], shared: boolean) => {
        const count = Math.max(a.length, b.length);
        if (!a.length || !b.length) return;
        for (let i = 0; i < count; i++) pairs!.push({
          a: a[Math.floor(i / count * a.length)], b: b[Math.floor(i / count * b.length)], shared,
        });
      };
      // Preserve shared words as coherent glyphs. Only the changed language disperses.
      target.tokens.forEach((token, targetIndex) => {
        const sourceIndex = source.tokens.findIndex((s, i) => !matchedSource.has(i) && key(s) === key(token));
        if (sourceIndex < 0) return;
        matchedSource.add(sourceIndex); matchedTarget.add(targetIndex);
        const origin = source.tokens[sourceIndex].getBoundingClientRect();
        const destination = token.getBoundingClientRect();
        // Move the original contour rigidly: independently sampled point arrays
        // have different densities and pairing them by index would scramble a word.
        for (const a of from.grains.filter(g => g.token === sourceIndex)) pairs!.push({
          a, b: { ...a, x: a.x + destination.left - origin.left,
            y: a.y + destination.top - origin.top }, shared: true,
        });
      });
      pair(from.grains.filter(g => !matchedSource.has(g.token)), to.grains.filter(g => !matchedTarget.has(g.token)), false);
      correspondences.set(transition, pairs);
      canvas.dataset.sharedWords = String(matchedTarget.size);
    }
    const tint = smooth(0.1, 0.9, p);
    const color = `rgb(${from.grains[0].rgb.map((v, i) => Math.round(v + (to.grains[0].rgb[i] - v) * tint)).join(",")})`;
    for (const { a, b, shared } of pairs) {
      const t = shared ? smooth(0.07, 0.86, p) : smooth(0.05 + a.phase * 0.08, 0.86, p);
      const arc = Math.sin(Math.PI * t);
      const x = a.x + (b.x - a.x) * t + (shared ? 0 : Math.sin(a.phase * 6.28 + t * 3) * arc * (compact ? 16 : 32));
      const y = a.y + (b.y - a.y) * t - arc * (shared ? 3 : 12 + a.phase * (compact ? 18 : 32));
      dot(t > 0.5 ? b : a, x, y, from.spacing + (to.spacing - from.spacing) * t,
        smooth(0, 0.07, p) * (1 - native), color);
    }
  };

  const render = () => {
    if (disposed) return;
    // The parent timeline also animates later sentences and a reading hold.
    // Repaint only when this surface's own ink state actually changes.
    const progress = [...cues.map(c => c.state.progress), ...transfers.map(t => t.state.progress)];
    if (progress.length === lastProgress.length && progress.every((p, i) => p === lastProgress[i])) return;
    lastProgress = progress;
    const inTransit = transfers.some(t => t.state.progress > 0 && t.state.progress < 1);
    const moving = cues.some(c => c.state.progress > 0 && c.state.progress < 1) || inTransit;
    canvas.style.visibility = moving ? "visible" : "hidden";
    if (context && moving) {
      if (width !== stage.clientWidth || height !== stage.clientHeight) {
        width = stage.clientWidth; height = stage.clientHeight;
        ratio = Math.min(devicePixelRatio || 1, 1.5);
        canvas.width = Math.ceil(width * ratio); canvas.height = Math.ceil(height * ratio);
      }
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      context.clearRect(0, 0, width, height);
    }
    for (const cue of cues) {
      const p = cue.state.progress;
      if (!context || p <= 0 || p >= 1) setOpacity(cue, p >= 1 ? 1 : 0);
      else paint(cue, p);
    }
    transfers.forEach(transfer);
    canvas.dataset.active = String(moving);
  };
  return { render, dispose: () => {
    disposed = true;
    canvas.remove();
    plates.clear();
    correspondences.clear();
    original.forEach((style, element) => {
      if (style === null) element.removeAttribute("style"); else element.setAttribute("style", style);
    });
  } };
}
