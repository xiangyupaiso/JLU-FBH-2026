import { activateHomeArtwork, bindHomeArtwork, decodeHomeArtwork, homeArtworkSource, onHomeArtworkActive } from "../utils/homeArtworkSource";
export const THOUGHT_INK_PATH =
  "M65 85 L65 61 Q75 36 107 39 Q142 40 143 70 Q144 86 126 99 L124 118 L98 120 L94 101 L105 84 Q123 70 109 61 Q93 59 88 85 Z M96 122 Q113 116 125 127 L128 144 L111 150 L96 144 Z";
export const QUESTION_HEADING_PARTS = [
  { name: "why", start: 0, end: 308 },
  { name: "circrna", start: 308, end: 750 },
  { name: "question", start: 750, end: 824 },
] as const;

export type QuestionGeometry = {
  sx: number;
  sy: number;
  sw: number;
  sh: number;
  dx: number;
  dy: number;
  dw: number;
  dh: number;
};
type Grain = { x: number; y: number; alpha: number; rgb: number[] };
type Pair = {
  from: Grain;
  to: Grain;
  phase: number;
  group: number;
  density: number;
  colors: string[];
};
const clamp = (value: number) => Math.max(0, Math.min(1, value));
const smooth = (a: number, b: number, value: number) => {
  const t = clamp((value - a) / (b - a));
  return t * t * (3 - 2 * t);
};
const noise = (index: number) => {
  const n = Math.sin(index * 127.1 + 19.7) * 43758.5453;
  return n - Math.floor(n);
};
export const headingPartOpacity = (group: number, progress: number) =>
  smooth(0.84 + group * 0.025, 0.96 + group * 0.015, progress);

/** Fan the thought's pigment into the three parts of the original title.
 * Their sampled pixels follow reversible,
 * scroll-driven paths; no independent animation loop runs while reading. */
export function createQuestionInk(
  root: HTMLElement,
  source: HTMLImageElement,
  targetUrl: string,
  compact: boolean,
  onReady: () => void,
) {
  const canvas = document.createElement("canvas");
  canvas.className = "story-question-ink";
  canvas.setAttribute("aria-hidden", "true");
  canvas.width = canvas.height = 1;
  root.append(canvas);
  const context = canvas.getContext("2d");
  const target = new Image();
  target.fetchPriority = "low";
  target.crossOrigin = "anonymous";
  target.dataset.homeSrc = targetUrl;
  let disposed = false;
  const artworkPreparation = new AbortController();
  let requested = false;
  let artworkActive = false;
  let pairs: Pair[] = [];
  let width = 0;
  let height = 0;
  let ratio = 1;

  const sample = (image: HTMLImageElement, thought: boolean) => {
    const raster = document.createElement("canvas");
    raster.width = thought ? 82 : 824;
    raster.height = thought ? 112 : 136;
    const ink = raster.getContext("2d", { willReadFrequently: true });
    if (!ink) return [];
    if (thought) {
      ink.translate(-62, -38);
      ink.clip(new Path2D(THOUGHT_INK_PATH));
      ink.drawImage(image, 0, 0, 208, 253);
    } else {
      ink.drawImage(image, 0, 0, 824, 136);
    }
    const pixels = ink.getImageData(0, 0, raster.width, raster.height).data;
    const grains: Grain[] = [];
    const step = thought ? 1.5 : compact ? 3 : 2;
    for (let y = 0; y < raster.height; y += step) {
      for (let x = 0; x < raster.width; x += step) {
        const offset = (Math.floor(y) * raster.width + Math.floor(x)) * 4;
        const rgb = [pixels[offset], pixels[offset + 1], pixels[offset + 2]];
        const alpha = pixels[offset + 3] / 255;
        if (alpha < 0.08 || (thought && (rgb[0] > 220 || rgb[2] - rgb[0] < 12)))
          continue;
        grains.push({
          x: (x + step / 2) / raster.width,
          y: (y + step / 2) / raster.height,
          alpha: thought ? alpha * clamp((245 - rgb[0]) / 90) : alpha,
          rgb,
        });
      }
    }
    return grains;
  };
  const prepare = () => {
    if (requested || !context || !artworkActive) return;
    requested = true;
    void Promise.all([decodeHomeArtwork(source, artworkPreparation.signal), decodeHomeArtwork(target, artworkPreparation.signal)])
      .then(() => {
        if (disposed) return;
        const origins = sample(source, true);
        const targets = sample(target, false);
        if (!origins.length || !targets.length) return;
        const limit = compact ? 2200 : 6000;
        QUESTION_HEADING_PARTS.forEach((part, group) => {
          const grains = targets.filter(
            (g) => g.x * 824 >= part.start && g.x * 824 < part.end,
          );
          const count = Math.min(
            grains.length,
            Math.round((limit * grains.length) / targets.length),
          );
          for (let i = 0; i < count; i++) {
            const phase = noise(pairs.length);
            const from =
              origins[
                Math.min(origins.length - 1, Math.floor(phase * origins.length))
              ];
            const to = grains[Math.floor((i / count) * grains.length)];
            pairs.push({
              from,
              to,
              phase,
              group,
              density: 1,
              colors: Array.from(
                { length: 9 },
                (_, index) =>
                  `rgb(${from.rgb.map((v, channel) => Math.round(v + ((to.rgb[channel] - v) * index) / 8)).join(",")})`,
              ),
            });
          }
          canvas.dataset[`${part.name}Particles`] = String(count);
        });
        const useCounts = new Map<Grain, number>();
        pairs.forEach(({ from }) =>
          useCounts.set(from, (useCounts.get(from) ?? 0) + 1),
        );
        // Extra pigment unfolds as points separate, preserving the source's
        // watercolor density while a small question becomes a wide title.
        pairs.forEach((pair) => {
          pair.density = 1 / useCounts.get(pair.from)!;
        });
        canvas.dataset.particleCount = String(pairs.length);
        onReady();
      })
      .catch(() => {
        /* Keep the original artwork handoff if sampling is unavailable. */
      });
  };
  const targetSource = [...root.querySelectorAll("img[data-home-src], image[data-home-src]")]
    .find((image) => homeArtworkSource(image) === targetUrl);
  const stopTargetArtwork = targetSource
    ? bindHomeArtwork(targetSource, target)
    : onHomeArtworkActive(source, () => activateHomeArtwork(target));
  const stopActivation = onHomeArtworkActive(source, () => {
    artworkActive = true;
    prepare();
  });
  // Warm the sampled grains one viewport before the thought enters view.
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (disposed || !entry.isIntersecting) return;
      prepare();
      observer.disconnect();
    },
    { rootMargin: "100% 0px" },
  );
  observer.observe(source);
  const render = (
    progress: number,
    geometry: QuestionGeometry,
    active: boolean,
  ) => {
    if (disposed) return false;
    canvas.style.visibility = active && pairs.length ? "visible" : "hidden";
    if (!active || !context) return pairs.length > 0;
    prepare();
    if (!pairs.length) return false;
    const nextRatio = Math.min(devicePixelRatio || 1, 1.5);
    if (
      width !== canvas.clientWidth ||
      height !== canvas.clientHeight ||
      ratio !== nextRatio
    ) {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      ratio = nextRatio;
      canvas.width = Math.ceil(width * ratio);
      canvas.height = Math.ceil(height * ratio);
    }
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    context.clearRect(0, 0, width, height);
    const { sx, sy, sw, sh, dx, dy, dw, dh } = geometry;
    const tint = Math.round(smooth(0.35, 0.83, progress) * 8);
    const header =
      Number.parseFloat(
        getComputedStyle(root).getPropertyValue("--header-height"),
      ) || (compact ? 78 : 90);
    const lift = Math.max(
      0,
      Math.min(
        compact ? 30 : 80,
        Math.min(sy - sh / 2, dy - dh / 2) - header - 8,
      ),
    );
    for (const { from, to, phase, group, density, colors } of pairs) {
      const delay = phase * 0.16 + (1 - from.x) * 0.05;
      const t = smooth(
        0.13 + delay + group * 0.02,
        0.8 + group * 0.04 + delay * 0.25,
        progress,
      );
      const arc = Math.sin(Math.PI * t);
      const flutter = Math.sin(phase * Math.PI * 2 + t * Math.PI * 2) * arc;
      // The stream opens sideways into lettering instead of carrying a
      // rigid enlarged question across the full headline rectangle.
      const expansion = smooth(0.24, 0.84, progress);
      const contour = 1 - arc * arc * 0.7;
      const offsetX =
        (from.x - 0.5) * sw * (1 - t) + (to.x - 0.5) * dw * t * expansion;
      const offsetY = (from.y - 0.5) * sh * (1 - t) + (to.y - 0.5) * dh * t;
      const x =
        sx + (dx - sx) * t + offsetX * contour + flutter * (compact ? 12 : 38);
      const y =
        sy +
        (dy - sy) * t +
        offsetY * contour -
        arc * lift * (0.6 + phase * 0.4) +
        Math.cos(phase * 6.28 + t * 4) * arc * (compact ? 4 : 11);
      const alpha =
        smooth(0.12, 0.3, progress) *
        (1 - headingPartOpacity(group, progress)) *
        (density + (1 - density) * smooth(0.24, 0.6, progress)) *
        (from.alpha + (to.alpha - from.alpha) * t);
      context.fillStyle = colors[tint];
      context.globalAlpha = alpha * (0.78 + phase * 0.22);
      const size =
        Math.max(
          compact ? 0.65 : 0.8,
          ((sw / 82) * 1.5 * (1 - t) + (dw / 824) * (compact ? 3 : 2) * t) *
            0.92,
        ) *
        (1 + arc * 0.4);
      context.fillRect(x - size / 2, y - size / 2, size, size);
      if (phase < 0.04 && arc > 0.15) {
        context.globalAlpha = alpha * arc * 0.16;
        context.strokeStyle = context.fillStyle;
        context.lineWidth = 0.5;
        context.beginPath();
        context.moveTo(x, y);
        context.quadraticCurveTo(
          x - 4 * arc,
          y + flutter,
          x - 9 * arc,
          y + 3 * arc,
        );
        context.stroke();
      }
    }
    context.globalAlpha = 1;
    return true;
  };
  return {
    render,
    dispose: () => {
      disposed = true;
      artworkPreparation.abort();
      stopActivation();
      stopTargetArtwork();
      observer.disconnect();
      pairs = [];
      canvas.remove();
    },
  };
}
