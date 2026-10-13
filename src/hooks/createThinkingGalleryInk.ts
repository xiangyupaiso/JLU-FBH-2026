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

// The upper-right magnifier in thinking-4.webp, clear of the medical tools below.
export const THINKING_MAGNIFIER_CROP = {
  left: 485 / 692,
  top: 0,
  width: 207 / 692,
  height: 216 / 778,
};

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

function departureAt(x: number, y: number) {
  const grain = Math.sin(x * 179.3 + y * 281.9) * 43758.5453;
  const noise = grain - Math.floor(grain);
  const sweep = 1 - y;
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

function sampleSource(image: HTMLImageElement): SourceInk | null {
  const crop = THINKING_MAGNIFIER_CROP;
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
      // Keep both the pink frame and the pale blue glass of the original art.
      const opacity = pixels.data[offset + 3];
      pixels.data[offset + 3] = opacity;
      alpha[pixel] = opacity;
      const nx = crop.left + ((x + 0.5) / canvas.width) * crop.width;
      const ny = crop.top + ((y + 0.5) / canvas.height) * crop.height;
      departure[pixel] = departureAt(
        (nx - crop.left) / crop.width,
        (ny - crop.top) / crop.height,
      );
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
  compact: boolean,
) {
  const canvas = document.createElement("canvas");
  canvas.width = compact ? 128 : 160;
  canvas.height = Math.round(canvas.width * (1186 / 574));
  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) return [];
  // Each candidate now has its own complete painting rather than a sheet crop.
  context.drawImage(
    image,
    0,
    0,
    image.naturalWidth,
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
  source: HTMLImageElement,
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
      if (!context || cards.length < 4) return;
      const sourceImage = source.currentSrc || source.src;
      const targetImages = cards.slice(0, 4).map((card) => {
        const symbol = card.querySelector<SVGImageElement>(
          "[data-gallery-ink]",
        );
        return symbol?.getAttribute("href") || "";
      });
      const hrefs = [sourceImage, ...targetImages];
      const cached = hrefs.map((href) => decodedImages.get(href) || null);
      // The cached branch deliberately reaches ready before this factory returns.
      const images = cached.every((image) => image !== null)
        ? cached
        : await Promise.all(hrefs.map(load));
      if (disposed || images.some((image) => !image)) return;
      const sampledSource = sampleSource(images[0]!);
      const sampledTargets = images
        .slice(1)
        .map((image) => sampleTarget(image!, compact));
      if (!sampledSource || sampledTargets.some((target) => target.length < 24))
        return;
      sourceInk = [sampledSource];
      const random = randomGenerator();
      particles = Array.from({ length: compact ? 1000 : 2000 }, (_, index) => {
        const source = 0;
        const target = index % 4;
        const from = takePoint(sourceInk[source].points, random());
        const to = takePoint(sampledTargets[target], random());
        const angle = random() * Math.PI * 2;
        const radial = Math.sqrt(-2 * Math.log(Math.max(0.0001, random())));
        return {
          source,
          target,
          from,
          to,
          departure: departureAt(
            (from.x - THINKING_MAGNIFIER_CROP.left) /
              THINKING_MAGNIFIER_CROP.width,
            (from.y - THINKING_MAGNIFIER_CROP.top) /
              THINKING_MAGNIFIER_CROP.height,
          ),
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
      sourceBounds.length >= 1 &&
      targetBounds.length >= 4 &&
      [...sourceBounds.slice(0, 1), ...targetBounds.slice(0, 4)].every(
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
    // Desktop hands over the existing mark at full opacity, while phones
    // introduce the hidden artwork gradually as the reading panels fade.
    const enter = compact ? smooth(0, 0.18, p) : 1;
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
      const turn = 0.12 + unfurl * 0.62;
      const flowX =
        particle.driftX * Math.cos(turn) - particle.driftY * Math.sin(turn);
      const flowY =
        particle.driftX * Math.sin(turn) +
        particle.driftY * Math.cos(turn) -
        0.18 -
        Math.sin(flowX * 2.2 + unfurl * 1.4) * 0.22;
      // The magnifier opens into a plume; every offset vanishes at landing.
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
      const scale = Math.max(
        0.7,
        Math.min(1.8, (from.width * THINKING_MAGNIFIER_CROP.width) / 112),
      );
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
