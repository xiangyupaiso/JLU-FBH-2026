import { bindHomeArtwork, decodeHomeArtwork, homeArtworkSource, onHomeArtworkActive } from "../utils/homeArtworkSource";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createChallengeParticleRenderer } from "./challengeParticleRenderer";

const clamp = gsap.utils.clamp(0, 1);
const smooth = (from: number, to: number, value: number) => {
  const p = clamp((value - from) / (to - from));
  return p * p * (3 - 2 * p);
};
const noise = (index: number) => {
  const value = Math.sin(index * 127.1 + 311.7) * 43758.5453;
  return value - Math.floor(value);
};

/** Sample the painted ring once per layout, then carry its own pigment to
 * the fan's complete circle. GSAP progress alone drives the particle field. */
export function createRnaRingParticles(
  stage: HTMLElement,
  source: SVGElement,
  target: HTMLImageElement,
  compact: boolean,
  onReady?: () => void,
) {
  const canvas = document.createElement("canvas");
  const fallback = document.createElement("canvas");
  [canvas, fallback].forEach((surface) => {
    surface.className = "story-rna-particles";
    surface.setAttribute("aria-hidden", "true");
    surface.style.visibility = "hidden";
    stage.append(surface);
  });
  const context = fallback.getContext("2d");
  const sample = document.createElement("canvas");
  const ink = sample.getContext("2d", { willReadFrequently: true });
  const image = new Image();
  image.fetchPriority = "low";
  const href = homeArtworkSource(source.querySelector("image"));
  image.dataset.homeSrc = href;
  const originalLoading = target.getAttribute("loading");
  let gpu: ReturnType<typeof createChallengeParticleRenderer> = null;
  let rendererInitialized = false;
  let disposed = false;
  const artworkPreparation = new AbortController();
  let activated = false;
  let artworkActive = false;
  let ready = false;
  let dirty = true;
  let frame = 0;
  let lastProgress = 0;
  let width = 1;
  let height = 1;
  let ratio = 1;
  let spacing = 1;
  let data = new Float32Array();
  let accent = [205, 136, 143];

  const prepare = () => {
    if (
      disposed ||
      !activated ||
      !image.naturalWidth ||
      !ink ||
      !target.complete ||
      !target.naturalWidth
    )
      return;
    width = stage.clientWidth;
    height = stage.clientHeight;
    const stageBox = stage.getBoundingClientRect();
    const box = source.getBoundingClientRect();
    const destination = target.getBoundingClientRect();
    // The native fallback may already be moving. Undo only its own transform;
    // both image plates are measured in the fixed stage's CSS coordinates.
    const scaleX = Math.abs(Number(gsap.getProperty(source, "scaleX"))) || 1;
    const scaleY = Math.abs(Number(gsap.getProperty(source, "scaleY"))) || 1;
    const sourceWidth = box.width / scaleX;
    const sourceHeight = box.height / scaleY;
    const centerX =
      box.left + box.width / 2 - Number(gsap.getProperty(source, "x"));
    const centerY =
      box.top + box.height / 2 - Number(gsap.getProperty(source, "y"));
    if (
      !width ||
      !height ||
      !sourceWidth ||
      !sourceHeight ||
      !destination.width ||
      !destination.height
    )
      return;
    const left = centerX - sourceWidth / 2 - stageBox.left;
    const top = centerY - sourceHeight / 2 - stageBox.top;
    const targetX =
      destination.left - stageBox.left + destination.width * (306.009 / 611);
    const targetY =
      destination.top - stageBox.top + destination.height * (757.002 / 833);
    const targetWidth = destination.width * (605.599 / 611);
    const targetHeight = destination.height * (605.599 / 833);
    sample.width = Math.ceil(sourceWidth);
    sample.height = Math.ceil(sourceHeight);
    ink.drawImage(image, 0, 0, sample.width, sample.height);
    try {
      const pixels = ink.getImageData(0, 0, sample.width, sample.height).data;
      spacing = Math.max(
        compact ? 1.25 : 1.45,
        Math.sqrt((sourceWidth * sourceHeight) / (compact ? 9500 : 22000)),
      );
      const grains: number[] = [];
      const tint = [0, 0, 0];
      let alphaSum = 0;
      for (let y = spacing / 2; y < sample.height; y += spacing) {
        for (let x = spacing / 2; x < sample.width; x += spacing) {
          const offset = (Math.floor(y) * sample.width + Math.floor(x)) * 4;
          const alpha = pixels[offset + 3] / 255;
          if (alpha < 0.08) continue;
          const u = x / sample.width;
          const v = y / sample.height;
          const index = grains.length / 11;
          const color = [
            pixels[offset],
            pixels[offset + 1],
            pixels[offset + 2],
          ];
          const angle = Math.atan2(v - 0.5, u - 0.5) + Math.PI;
          grains.push(
            left + u * sourceWidth,
            top + v * sourceHeight,
            targetX + (u - 0.5) * targetWidth,
            targetY + (v - 0.5) * targetHeight,
            ...color.map((channel) => channel / 255),
            alpha,
            (angle / (Math.PI * 2)) * 0.12,
            (noise(index + 1) - 0.5) * (compact ? 90 : 200),
            noise(index + 9) * Math.PI * 2,
          );
          alphaSum += alpha;
          color.forEach((channel, i) => {
            tint[i] += channel * alpha;
          });
        }
      }
      if (!grains.length) return;
      accent = tint.map((channel) => channel / alphaSum);
      data = new Float32Array(grains);
      ratio = Math.min(window.devicePixelRatio || 1, 2);
      if (!rendererInitialized) {
        rendererInitialized = true;
        gpu = createChallengeParticleRenderer(canvas);
      }
      gpu?.upload(data, width, height, ratio, spacing * 1.6, accent);
      fallback.width = Math.ceil(width * ratio);
      fallback.height = Math.ceil(height * ratio);
      canvas.dataset.renderer = gpu ? "webgl" : "canvas";
      [canvas, fallback].forEach((surface) => {
        surface.dataset.particleCount = String(data.length / 11);
      });
      ready = true;
      dirty = false;
    } catch {
      ready = false;
    }
  };

  const draw = () => {
    const p = lastProgress;
    const visible = !disposed && ready && p > 0 && p < 1;
    canvas.style.visibility = visible ? "visible" : "hidden";
    fallback.style.visibility = "hidden";
    if (!visible || gpu?.render(p)) return;
    canvas.style.visibility = "hidden";
    fallback.style.visibility = "visible";
    canvas.dataset.renderer = "canvas";
    if (!context) return;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    context.clearRect(0, 0, width, height);
    const count = data.length / 11;
    const stride = Math.max(1, Math.ceil(count / (compact ? 1800 : 3500)));
    for (let i = 0; i < count; i += stride) {
      const offset = i * 11;
      const local = (p - data[offset + 8]) / (1 - data[offset + 8]);
      const travel = smooth(0.06, 0.86, local);
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
      const mix = smooth(0.42, 0.84, p);
      context.globalAlpha =
        smooth(0, 0.07, p - data[offset + 8]) *
        (1 - smooth(0.88, 1, p)) *
        (data[offset + 7] * (1 - travel) + 0.8 * travel);
      context.fillStyle = `rgb(${accent
        .map((channel, c) =>
          Math.round(data[offset + 4 + c] * 255 * (1 - mix) + channel * mix),
        )
        .join(",")})`;
      const size =
        spacing * 1.6 * Math.sqrt(stride) * (1.25 - 0.42 * arc - 0.48 * travel);
      context.beginPath();
      context.arc(x, y, Math.max(0.35, size * 0.5), 0, Math.PI * 2);
      context.fill();
    }
    context.globalAlpha = 1;
  };

  const schedule = () => {
    dirty = true;
    if (disposed || !activated) return;
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      frame = 0;
      const wasReady = ready;
      prepare();
      draw();
      if (ready !== wasReady) onReady?.();
    });
  };
  const activate = () => {
    if (disposed || activated || !artworkActive) return;
    activated = true;
    target.loading = "eager";
    void Promise.all([decodeHomeArtwork(image, artworkPreparation.signal), decodeHomeArtwork(target, artworkPreparation.signal)])
      .then(() => {
        if (!disposed) schedule();
      })
      .catch(() => {});
  };
  const stopActivation = onHomeArtworkActive(source, () => {
    artworkActive = true;
    activate();
  });
  const onError = () => {
    const wasReady = ready;
    ready = false;
    draw();
    if (wasReady) onReady?.();
  };
  const observer = new ResizeObserver(schedule);
  observer.observe(stage);
  const proximity = new IntersectionObserver(
    (entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      activate();
      proximity.disconnect();
      schedule();
    },
    { rootMargin: "100% 0px" },
  );
  proximity.observe(stage);
  image.addEventListener("load", schedule);
  image.addEventListener("error", onError);
  target.addEventListener("load", schedule);
  target.addEventListener("error", onError);
  canvas.addEventListener("webglcontextlost", draw);
  ScrollTrigger.addEventListener("refresh", schedule);
  const stopImageArtwork = bindHomeArtwork(source, image);

  return {
    render(progress: number) {
      if (disposed) return false;
      lastProgress = clamp(progress);
      if (lastProgress > 0 && lastProgress < 1) activate();
      if (dirty && activated) prepare();
      draw();
      return ready;
    },
    dispose() {
      disposed = true;
      artworkPreparation.abort();
      stopActivation();
      stopImageArtwork();
      observer.disconnect();
      proximity.disconnect();
      cancelAnimationFrame(frame);
      ScrollTrigger.removeEventListener("refresh", schedule);
      image.removeEventListener("load", schedule);
      image.removeEventListener("error", onError);
      target.removeEventListener("load", schedule);
      target.removeEventListener("error", onError);
      canvas.removeEventListener("webglcontextlost", draw);
      gpu?.dispose();
      canvas.remove();
      fallback.remove();
      if (originalLoading === null) target.removeAttribute("loading");
      else target.setAttribute("loading", originalLoading);
      data = new Float32Array();
    },
  };
}
