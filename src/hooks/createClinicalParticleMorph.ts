import { createChallengeParticleRenderer } from "./challengeParticleRenderer";

type Pigment = { x: number; y: number; rgba: number[] };
const smooth = (start: number, end: number, value: number) => {
  const p = Math.max(0, Math.min(1, (value - start) / (end - start)));
  return p * p * (3 - 2 * p);
};
const noise = (index: number) => {
  const value = Math.sin(index * 127.1 + 311.7) * 43758.5453;
  return value - Math.floor(value);
};

/** Sample the two original paintings once per layout. Their pigment follows
 * deterministic paths, driven only by the clinical timeline's progress. */
export function createClinicalParticleMorph(
  stage: HTMLElement,
  source: HTMLImageElement,
  target: HTMLImageElement,
  compact: boolean,
) {
  const canvas = document.createElement("canvas");
  const fallback = document.createElement("canvas");
  [canvas, fallback].forEach((element) => {
    element.className = "story-clinical-grains";
    element.setAttribute("aria-hidden", "true");
    element.style.cssText =
      "position:absolute;inset:0;width:100%;height:100%;z-index:3;pointer-events:none;visibility:hidden";
  });
  stage.append(canvas, fallback);
  const context = fallback.getContext("2d");
  const originalOpacity = [source.style.opacity, target.style.opacity];
  let gpu: ReturnType<typeof createChallengeParticleRenderer> = null;
  let initialized = false;
  let gpuAvailable = true;
  let disposed = false;
  let ready = false;
  let preparationAttempted = false;
  let prepareFrame = 0;
  let activated = false;
  let ownsSource = false;
  let transitionActive = false;
  let useParticles = false;
  let progress = 0;
  let resizeFrame = 0;
  let width = 1;
  let height = 1;
  let ratio = 1;
  let sourceSpacing = 1;
  let targetSpacing = 1;
  let data = new Float32Array();
  let colors = new Float32Array();

  const sample = (image: HTMLImageElement, stageBox: DOMRect) => {
    const box = image.getBoundingClientRect();
    const ink = document.createElement("canvas");
    ink.width = Math.max(1, Math.ceil(box.width));
    ink.height = Math.max(1, Math.ceil(box.height));
    const painter = ink.getContext("2d", { willReadFrequently: true });
    if (!painter) return null;
    painter.drawImage(image, 0, 0, ink.width, ink.height);
    const pixels = painter.getImageData(0, 0, ink.width, ink.height).data;
    let painted = 0;
    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] > 40) painted++;
    }
    // Transparent margins do not reduce the doctor's detail or consume grains.
    const spacing = Math.max(
      compact ? 1.15 : 1.35,
      Math.sqrt(painted / (compact ? 5500 : 16000)),
    );
    const points: Pigment[] = [];
    for (let y = spacing / 2; y < ink.height; y += spacing) {
      for (let x = spacing / 2; x < ink.width; x += spacing) {
        const offset = (Math.floor(y) * ink.width + Math.floor(x)) * 4;
        if (pixels[offset + 3] <= 40) continue;
        points.push({
          x: box.left - stageBox.left + (x * box.width) / ink.width,
          y: box.top - stageBox.top + (y * box.height) / ink.height,
          rgba: Array.from(
            pixels.slice(offset, offset + 4),
            (value) => value / 255,
          ),
        });
      }
    }
    return { points, spacing };
  };

  const prepare = () => {
    if (
      disposed ||
      ready ||
      preparationAttempted ||
      !ownsSource ||
      [source, target].some((image) => !image.complete || !image.naturalWidth)
    )
      return;
    preparationAttempted = true;
    try {
      const box = stage.getBoundingClientRect();
      const origins = sample(source, box);
      const targets = sample(target, box);
      if (!origins?.points.length || !targets?.points.length) return;
      width = stage.clientWidth;
      height = stage.clientHeight;
      ratio = Math.min(window.devicePixelRatio || 1, compact ? 1.5 : 2);
      sourceSpacing = origins.spacing;
      targetSpacing = targets.spacing;
      const count = Math.max(origins.points.length, targets.points.length);
      data = new Float32Array(count * 11);
      colors = new Float32Array(count * 4);
      // Reading order keeps the heads, coats and feet in neighbouring streams.
      // The same correspondence is used when scrolling back to the nurse.
      for (let i = 0; i < count; i++) {
        const from =
          origins.points[Math.floor((i / count) * origins.points.length)];
        const to =
          targets.points[Math.floor((i / count) * targets.points.length)];
        data.set(
          [
            from.x,
            from.y,
            to.x,
            to.y,
            ...from.rgba,
            noise(i + 3) * 0.1,
            (noise(i + 1) - 0.5) * (compact ? 56 : 124),
            noise(i + 9) * Math.PI * 2,
          ],
          i * 11,
        );
        colors.set(to.rgba, i * 4);
      }
      if (!initialized) {
        initialized = true;
        gpu = createChallengeParticleRenderer(canvas, true);
      }
      gpu?.upload(
        data,
        width,
        height,
        ratio,
        sourceSpacing,
        [84, 117, 165],
        colors,
        targetSpacing,
      );
      fallback.width = Math.ceil(width * ratio);
      fallback.height = Math.ceil(height * ratio);
      canvas.dataset.renderer = gpu && gpuAvailable ? "webgl" : "canvas";
      canvas.dataset.particleCount = String(count);
      ready = Boolean((gpuAvailable && gpu) || context);
    } catch {
      // Decode/sampling failures retain a continuous original-image dissolve.
      ready = false;
    }
  };

  const schedulePrepare = () => {
    if (
      disposed || ready || preparationAttempted || prepareFrame || !ownsSource ||
      transitionActive ||
      [source, target].some((image) => !image.complete || !image.naturalWidth)
    )
      return;
    // The preceding illustration has settled before its reading hold starts.
    // Sample on the next frame so the first moving pigment frame only draws.
    prepareFrame = requestAnimationFrame(() => {
      prepareFrame = 0;
      if (disposed || !ownsSource || transitionActive) return;
      prepare();
      draw(progress, ownsSource);
    });
  };

  const draw = (value: number, sourceIsSettled = true) => {
    if (disposed) return;
    ownsSource = sourceIsSettled;
    progress = Math.max(0, Math.min(1, value));
    const active = progress > 0 && progress < 1;
    // Fast input can enter before preparation finishes. Keep that whole pass
    // on its original-image dissolve so readiness cannot switch opacity midway.
    if (!active || !transitionActive) useParticles = ready;
    transitionActive = active;
    schedulePrepare();
    const particlesReady = ready && useParticles;
    if (progress > 0) activated = true;
    if (activated) {
      // The nurse's entrance remains owned by the preceding child timeline.
      if (ownsSource) {
        source.style.opacity = String(
          1 - smooth(particlesReady ? 0.02 : 0.36, particlesReady ? 0.2 : 0.62, progress),
        );
      }
      target.style.opacity = String(
        smooth(particlesReady ? 0.86 : 0.38, particlesReady ? 0.98 : 0.7, progress),
      );
    }
    canvas.dataset.progress = progress.toFixed(3);
    canvas.style.visibility = active && particlesReady ? "visible" : "hidden";
    fallback.style.visibility = "hidden";
    if (!active || !particlesReady || (gpuAvailable && gpu?.render(progress))) return;
    canvas.style.visibility = "hidden";
    fallback.style.visibility = "visible";
    canvas.dataset.renderer = "canvas";
    if (!context) return;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    context.clearRect(0, 0, width, height);
    const count = data.length / 11;
    const stride = Math.max(1, Math.ceil(count / (compact ? 2800 : 6500)));
    const opacity = smooth(0, 0.09, progress) * (1 - smooth(0.88, 1, progress));
    for (let i = 0; i < count; i += stride) {
      const offset = i * 11;
      const color = i * 4;
      const local = (progress - data[offset + 8]) / (1 - data[offset + 8]);
      const travel = smooth(0.09, 0.86, local);
      const arc = Math.sin(Math.PI * travel);
      const flutter = Math.sin(data[offset + 10] + travel * Math.PI * 2) * arc;
      const x =
        data[offset] +
        (data[offset + 2] - data[offset]) * travel +
        data[offset + 9] * arc * 0.32 +
        flutter * 3;
      const y =
        data[offset + 1] +
        (data[offset + 3] - data[offset + 1]) * travel -
        data[offset + 9] * arc +
        flutter * 2;
      const size = Math.max(
        0.7,
        (sourceSpacing + (targetSpacing - sourceSpacing) * travel) *
          Math.sqrt(stride) *
          (1.42 - 0.48 * arc),
      );
      context.globalAlpha =
        opacity *
        (data[offset + 7] + (colors[color + 3] - data[offset + 7]) * travel);
      context.fillStyle = `rgb(${[0, 1, 2]
        .map((channel) =>
          Math.round(
            (data[offset + 4 + channel] * (1 - travel) +
              colors[color + channel] * travel) *
              255,
          ),
        )
        .join(",")})`;
      context.beginPath();
      context.arc(x, y, size / 2, 0, Math.PI * 2);
      context.fill();
    }
    context.globalAlpha = 1;
  };

  const refresh = () => {
    if (disposed) return;
    ready = false;
    useParticles = false;
    preparationAttempted = false;
    cancelAnimationFrame(prepareFrame);
    prepareFrame = 0;
    cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(() => {
      resizeFrame = 0;
      draw(progress, ownsSource);
    });
  };
  const observer = new ResizeObserver(refresh);
  [stage, source, target].forEach((element) => observer.observe(element));
  const onContextLost = () => {
    gpuAvailable = false;
    ready = Boolean(context);
    draw(progress, ownsSource);
  };
  canvas.addEventListener("webglcontextlost", onContextLost);
  Promise.all([source.decode(), target.decode()]).then(refresh).catch(refresh);

  return {
    draw,
    refresh,
    cleanup: () => {
      disposed = true;
      cancelAnimationFrame(prepareFrame);
      cancelAnimationFrame(resizeFrame);
      observer.disconnect();
      canvas.removeEventListener("webglcontextlost", onContextLost);
      source.style.opacity = originalOpacity[0];
      target.style.opacity = originalOpacity[1];
      gpu?.dispose();
      canvas.remove();
      fallback.remove();
      data = colors = new Float32Array();
    },
  };
}
