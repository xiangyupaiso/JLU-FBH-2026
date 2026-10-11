import { trackPagePreparation } from "../utils/pageLoader";

export type InkBounds = {
  left: number;
  top: number;
  width: number;
  height: number;
};

type InkPoint = {
  x: number;
  y: number;
  r: number;
  g: number;
  b: number;
  alpha: number;
  weight: number;
};

type SourceInk = {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  image: ImageData;
  alpha: Uint8ClampedArray;
  departure: Float32Array;
  crop: InkBounds;
  points: InkPoint[];
};

type Particle = {
  source: number;
  target: number;
  from: InkPoint;
  to: InkPoint;
  departure: number;
  driftX: number;
  driftY: number;
  softness: number;
  bend: number;
  radius: number;
};

export const THINKING_PUNCTUATION_CROPS = [
  { left: 0.29, top: 0.145, width: 0.41, height: 0.455 },
  { left: 0.37, top: 0.13, width: 0.27, height: 0.5 },
];

// Breakpoint rebuilds can sample these immediately without an empty ink pass.
// Only decoded images are shared; each renderer owns its mutable source masks.
const decodedImages = new Map<string, HTMLImageElement>();

const clamp = (value: number) => Math.max(0, Math.min(1, value));
const mix = (from: number, to: number, amount: number) =>
  from + (to - from) * amount;
const smooth = (start: number, end: number, value: number) => {
  const t = clamp((value - start) / (end - start));
  return t * t * (3 - 2 * t);
};

// Compress only the far tails, without stacking grains on a viewport edge.
const softOffset = (
  offset: number,
  negativeRoom: number,
  positiveRoom: number,
) => {
  const room = Math.max(1, offset < 0 ? negativeRoom : positiveRoom);
  return room * Math.tanh(offset / room);
};

// One fixed seed keeps refreshes and reverse scrolling on the same ink paths.
function randomGenerator() {
  let seed = 0x6a09e667;
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let value = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    value = (value + Math.imul(value ^ (value >>> 7), 61 | value)) ^ value;
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function departureAt(x: number, y: number, source: number) {
  const grain = Math.sin(x * 179.3 + y * 281.9 + source * 47.1) * 43758.5453;
  const noise = grain - Math.floor(grain);
  const sweep = source === 0 ? 1 - y : y;
  return 0.34 + (sweep * 0.68 + noise * 0.32) * 0.1;
}

function takePoint(points: InkPoint[], value: number) {
  const weight = value * points[points.length - 1].weight;
  let left = 0;
  let right = points.length - 1;
  while (left < right) {
    const middle = (left + right) >>> 1;
    if (points[middle].weight < weight) left = middle + 1;
    else right = middle;
  }
  return points[left];
}

function sampleSource(
  image: HTMLImageElement,
  index: number,
): SourceInk | null {
  const crop = THINKING_PUNCTUATION_CROPS[index];
  const canvas = document.createElement("canvas");
  canvas.width = Math.ceil(image.naturalWidth * crop.width);
  canvas.height = Math.ceil(image.naturalHeight * crop.height);
  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) return null;
  context.drawImage(
    image,
    image.naturalWidth * crop.left,
    image.naturalHeight * crop.top,
    image.naturalWidth * crop.width,
    image.naturalHeight * crop.height,
    0,
    0,
    canvas.width,
    canvas.height,
  );
  const pixels = context.getImageData(0, 0, canvas.width, canvas.height);
  const alpha = new Uint8ClampedArray(canvas.width * canvas.height);
  const departure = new Float32Array(alpha.length);
  const points: InkPoint[] = [];
  let weight = 0;
  for (let y = 0; y < canvas.height; y += 1) {
    for (let x = 0; x < canvas.width; x += 1) {
      const pixel = y * canvas.width + x;
      const offset = pixel * 4;
      const r = pixels.data[offset];
      const g = pixels.data[offset + 1];
      const b = pixels.data[offset + 2];
      // Hue and luminance remove the white cloud without a rectangular crop.
      const ink =
        index === 0
          ? smooth(12, 27, b - r) *
            smooth(3, 13, b - g) *
            (1 - smooth(176, 207, r))
          : smooth(19, 38, r - b) * smooth(12, 30, r - g);
      const opacity = Math.round(pixels.data[offset + 3] * ink);
      pixels.data[offset + 3] = opacity;
      alpha[pixel] = opacity;
      const nx = crop.left + ((x + 0.5) / canvas.width) * crop.width;
      const ny = crop.top + ((y + 0.5) / canvas.height) * crop.height;
      departure[pixel] = departureAt(nx, ny, index);
      if (opacity < 20) continue;
      weight += opacity;
      points.push({ x: nx, y: ny, r, g, b, alpha: opacity / 255, weight });
    }
  }
  if (points.length < 24) return null;
  context.putImageData(pixels, 0, 0);
  return { canvas, context, image: pixels, alpha, departure, crop, points };
}

function sampleTarget(
  image: HTMLImageElement,
  index: number,
  compact: boolean,
) {
  const canvas = document.createElement("canvas");
  canvas.width = compact ? 128 : 160;
  canvas.height = canvas.width * 2.25;
  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) return [];
  const regionWidth = image.naturalWidth / 4;
  context.drawImage(
    image,
    regionWidth * index,
    0,
    regionWidth,
    image.naturalHeight,
    0,
    0,
    canvas.width,
    canvas.height,
  );
  const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
  const points: InkPoint[] = [];
  let weight = 0;
  for (let y = 0; y < canvas.height; y += 2) {
    for (let x = 0; x < canvas.width; x += 2) {
      const offset = (y * canvas.width + x) * 4;
      const opacity = pixels[offset + 3];
      if (opacity < 24) continue;
      weight += opacity;
      points.push({
        x: (x + 0.5) / canvas.width,
        y: (y + 0.5) / canvas.height,
        r: pixels[offset],
        g: pixels[offset + 1],
        b: pixels[offset + 2],
        alpha: opacity / 255,
        weight,
      });
    }
  }
  return points;
}

export function createThinkingGalleryInk(
  sources: HTMLImageElement[],
  cards: HTMLElement[],
  compact: boolean,
  onReady: () => void,
) {
  const canvas = document.createElement("canvas");
  canvas.className = "home-thinking-gallery-ink";
  canvas.setAttribute("aria-hidden", "true");
  canvas.dataset.ready = "false";
  canvas.dataset.particleCount = "0";
  canvas.style.display = "none";
  document.body.append(canvas);
  const context = canvas.getContext("2d");
  let disposed = false;
  let ready = false;
  let sourceInk: SourceInk[] = [];
  let particles: Particle[] = [];
  let viewportWidth = 0;
  let viewportHeight = 0;
  let pixelRatio = 0;
  const loaded = new Map<string, Promise<HTMLImageElement | null>>();

  const load = (href: string) => {
    if (!href) return Promise.resolve(null);
    const decoded = decodedImages.get(href);
    if (decoded) return Promise.resolve(decoded);
    const existing = loaded.get(href);
    if (existing) return existing;
    const promise = new Promise<HTMLImageElement | null>((resolve) => {
      const image = new Image();
      image.crossOrigin = "anonymous";
      image.decoding = "async";
      image.onload = () => {
        void image.decode().then(
          () => {
            decodedImages.set(href, image);
            resolve(image);
          },
          () => resolve(null),
        );
      };
      image.onerror = () => resolve(null);
      image.src = href;
    });
    loaded.set(href, promise);
    return promise;
  };

  const prepare = async () => {
    try {
      if (!context || sources.length < 2 || cards.length < 4) return;
      const sourceImages = sources
        .slice(0, 2)
        .map((source) => source.currentSrc || source.src);
      const targetImages = cards.slice(0, 4).map((card, index) => {
        const symbol = card.querySelector<SVGImageElement>(
          index === 2 ? "[data-gallery-ring] image" : "[data-gallery-symbols]",
        );
        return symbol?.getAttribute("href") || "";
      });
      const hrefs = [...sourceImages, ...targetImages];
      const cached = hrefs.map((href) => decodedImages.get(href) || null);
      // The cached branch deliberately reaches ready before this factory returns.
      const images = cached.every((image) => image !== null)
        ? cached
        : await Promise.all(hrefs.map(load));
      if (disposed || images.some((image) => !image)) return;
      const sampledSources = images
        .slice(0, 2)
        .map((image, index) => sampleSource(image!, index));
      const sampledTargets = images
        .slice(2)
        .map((image, index) => sampleTarget(image!, index, compact));
      if (
        sampledSources.some((source) => !source) ||
        sampledTargets.some((target) => target.length < 24)
      )
        return;
      sourceInk = sampledSources as SourceInk[];
      const random = randomGenerator();
      particles = Array.from({ length: compact ? 1000 : 2000 }, (_, index) => {
        const source = index % 2;
        const target = Math.floor(index / 2) % 4;
        const from = takePoint(sourceInk[source].points, random());
        const to = takePoint(sampledTargets[target], random());
        const angle = random() * Math.PI * 2;
        const radial = Math.sqrt(-2 * Math.log(Math.max(0.0001, random())));
        return {
          source,
          target,
          from,
          to,
          departure: departureAt(from.x, from.y, source),
          // Gaussian density gives the ink a full body and a sparse, soft tail.
          driftX: Math.cos(angle) * radial * 0.62,
          driftY: Math.sin(angle) * radial * 0.25,
          softness: 1 - smooth(1.1, 2.8, radial) * 0.65,
          bend: (random() - 0.5) * 1.2,
          radius: 0.65 + random() * 0.95,
        };
      });
      ready = true;
    } catch {
      // Failed CORS or unavailable image sampling uses the story's CSS reveal.
      ready = false;
    } finally {
      canvas.dataset.ready = String(ready);
      canvas.dataset.particleCount = String(particles.length);
      queueMicrotask(() => {
        if (!disposed) onReady();
      });
    }
  };
  const stopTrackingPreparation = trackPagePreparation(prepare());

  const render = (
    progress: number,
    sourceBounds: InkBounds[],
    targetBounds: InkBounds[],
    active: boolean,
  ) => {
    if (disposed || !context) return false;
    const valid =
      ready &&
      sourceBounds.length >= 2 &&
      targetBounds.length >= 4 &&
      [...sourceBounds.slice(0, 2), ...targetBounds.slice(0, 4)].every(
        (bounds) => bounds.width > 0 && bounds.height > 0,
      );
    if (!active || !valid) {
      canvas.style.display = "none";
      context.clearRect(0, 0, canvas.width, canvas.height);
      return valid;
    }
    const width = window.innerWidth;
    const height = window.innerHeight;
    const ratio = Math.min(window.devicePixelRatio || 1, compact ? 1.5 : 2);
    if (
      width !== viewportWidth ||
      height !== viewportHeight ||
      ratio !== pixelRatio
    ) {
      viewportWidth = width;
      viewportHeight = height;
      pixelRatio = ratio;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    }
    canvas.style.display = "block";
    context.clearRect(0, 0, width, height);
    const p = clamp(progress);
    const enter = smooth(0, 0.08, p);
    if (enter <= 0 || p >= 1) return true;

    // The filtered raster erodes with the same departure field as its grains.
    if (p < 0.54) {
      sourceInk.forEach((ink, index) => {
        for (let pixel = 0; pixel < ink.alpha.length; pixel += 1) {
          ink.image.data[pixel * 4 + 3] =
            ink.alpha[pixel] *
            (1 - smooth(ink.departure[pixel], ink.departure[pixel] + 0.08, p));
        }
        ink.context.putImageData(ink.image, 0, 0);
        const bounds = sourceBounds[index];
        context.globalAlpha = enter;
        context.drawImage(
          ink.canvas,
          bounds.left + ink.crop.left * bounds.width,
          bounds.top + ink.crop.top * bounds.height,
          ink.crop.width * bounds.width,
          ink.crop.height * bounds.height,
        );
      });
    }

    particles.forEach((particle) => {
      const release = smooth(particle.departure, particle.departure + 0.08, p);
      if (release <= 0) return;
      const from = sourceBounds[particle.source];
      const to = targetBounds[particle.target];
      const gather = smooth(
        0.62 + particle.target * 0.008,
        0.9 + particle.target * 0.008,
        p,
      );
      const unfurl = smooth(particle.departure + 0.025, 0.7, p);
      const drift = unfurl * (1 - gather);
      const sourceX = from.left + particle.from.x * from.width;
      const sourceY = from.top + particle.from.y * from.height;
      const targetX = to.left + particle.to.x * to.width;
      const targetY = to.top + particle.to.y * to.height;
      const spread = Math.min(width, height) * (compact ? 0.2 : 0.29);
      const inward =
        smooth(0.38, 0.62, p) * (compact ? 1 : 0.28) * (1 - gather);
      const floatingX = mix(sourceX, width * 0.5, inward);
      const direction = particle.source === 0 ? 1 : -1;
      const turn = direction * (0.12 + unfurl * 0.62);
      const flowX =
        particle.driftX * Math.cos(turn) - particle.driftY * Math.sin(turn);
      const flowY =
        particle.driftX * Math.sin(turn) +
        particle.driftY * Math.cos(turn) -
        0.18 -
        Math.sin(flowX * 2.2 + unfurl * 1.4) * 0.22;
      // The two plumes curl towards each other; every offset vanishes at landing.
      const offsetX = softOffset(
        flowX * spread * drift,
        floatingX - 12,
        width - 12 - floatingX,
      );
      const offsetY = softOffset(
        flowY * spread * drift,
        sourceY - (compact ? 90 : 98),
        height - 12 - sourceY,
      );
      const arc = Math.sin(gather * Math.PI) * particle.bend * spread * 0.55;
      const x =
        mix(sourceX, targetX, gather) + (floatingX - sourceX) + offsetX + arc;
      const y = mix(sourceY, targetY, gather) + offsetY - Math.abs(arc) * 0.38;
      const color = smooth(0.4, 0.88, p);
      const r = Math.round(mix(particle.from.r, particle.to.r, color));
      const g = Math.round(mix(particle.from.g, particle.to.g, color));
      const b = Math.round(mix(particle.from.b, particle.to.b, color));
      const handoff =
        1 -
        smooth(
          0.86 + particle.target * 0.018,
          0.95 + particle.target * 0.012,
          p,
        );
      const alpha =
        enter *
        release *
        handoff *
        mix(particle.from.alpha, particle.to.alpha, gather) *
        mix(1, particle.softness, drift);
      const scale = Math.max(0.7, Math.min(1.8, from.width / 208));
      const radius =
        particle.radius *
        mix(scale, compact ? 1 : 1.25, gather) *
        (1 + drift * 0.22);
      context.globalAlpha = alpha;
      context.fillStyle = `rgb(${r}, ${g}, ${b})`;
      context.beginPath();
      context.ellipse(
        x,
        y,
        radius,
        radius * (0.7 + particle.radius * 0.18),
        particle.bend,
        0,
        Math.PI * 2,
      );
      context.fill();
    });
    context.globalAlpha = 1;
    return true;
  };

  return {
    render,
    dispose: () => {
      disposed = true;
      stopTrackingPreparation();
      particles = [];
      sourceInk = [];
      canvas.remove();
    },
  };
}
