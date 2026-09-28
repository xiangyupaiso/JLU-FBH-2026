import { useEffect, useId, useRef } from "react";
import type { LensPixels } from "../utils/navGlassCanvas";
import "../styles/nav-glass.css";

// Follow the depth + convex-bevel model demonstrated by archisvaze/liquid-glass:
// https://github.com/archisvaze/liquid-glass/blob/main/index.html
// Keep the curved rim narrow so most of the pane remains a calm magnifying lens.
// IOR 3 is the demo's deliberately exaggerated optical look, not ordinary glass.
const LENS = {
  bevelRatio: 0.18,
  thicknessRatio: 0.5,
  magnification: 1.04,
  ior: 3,
  range: 80,
};
// Soften the visible displacement without shrinking the rounded bevel.
const REFRACTION_STRENGTH = 0.8;
const CHANNEL_SCALES = [0.985, 1, 1.015].map(
  (n) => 2 * LENS.range * REFRACTION_STRENGTH * n,
);

function createLensMap(width: number, height: number, radius: number) {
  const canvas = document.createElement("canvas");
  // Supersample corners, but bound the texture even on ultrawide displays.
  const density = Math.min(
    devicePixelRatio || 1,
    2,
    2560 / width,
    Math.sqrt(700_000 / (width * height)),
  );
  canvas.width = Math.max(1, Math.round(width * density));
  canvas.height = Math.max(1, Math.round(height * density));
  const context = canvas.getContext("2d");
  if (!context) return null;
  const pixels = context.createImageData(canvas.width, canvas.height);
  const specular = context.createImageData(canvas.width, canvas.height);
  // Opening the menu increases the pane area, not its physical thickness.
  const opticalHeight = Math.min(height, 66);
  const bevel = Math.min(opticalHeight * LENS.bevelRatio, radius - 1);
  const thickness = opticalHeight * LENS.thicknessRatio;
  for (let py = 0; py < canvas.height; py++) {
    for (let px = 0; px < canvas.width; px++) {
      const dx = ((px + 0.5) / canvas.width - 0.5) * width;
      const dy = ((py + 0.5) / canvas.height - 0.5) * height;
      const qx = Math.abs(dx) - (width / 2 - radius);
      const qy = Math.abs(dy) - (height / 2 - radius);
      const ox = Math.max(qx, 0);
      const oy = Math.max(qy, 0);
      const length = Math.hypot(ox, oy);
      const distance = radius - (length + Math.min(Math.max(qx, qy), 0));
      const nx = Math.sign(dx) * (length ? ox / length : qx > qy ? 1 : 0);
      const ny = Math.sign(dy) * (length ? oy / length : qy >= qx ? 1 : 0);
      let offset = 0;
      if (distance > 0 && distance < bevel) {
        const t = Math.max(0.0001, distance / bevel);
        const s = 1 - t;
        // Circular curvature stays within the rim; the centre scales uniformly.
        const h = Math.sqrt(1 - s * s);
        const slope = s / h;
        const incident = Math.atan(slope);
        const refracted = Math.asin(Math.sin(incident) / LENS.ior);
        // Include the flat glass depth below the curved surface. The reference
        // encodes a +/- half-range displacement, hence the 0.5 scale here.
        offset = Math.min(
          LENS.range,
          0.5 * (thickness + h * bevel) * Math.tan(incident - refracted),
        );
      }
      // Smoothly join the rim to a broad 1.04x centre. Dividing by the strength
      // keeps centre magnification independent of the edge-intensity control.
      const t = Math.max(0, Math.min(1, distance / bevel));
      const centre = t * t * (3 - 2 * t);
      const zoom =
        ((1 - 1 / LENS.magnification) * centre) / REFRACTION_STRENGTH;
      const shiftX = Math.max(
        -LENS.range,
        Math.min(LENS.range, nx * offset + dx * zoom),
      );
      const shiftY = Math.max(
        -LENS.range,
        Math.min(LENS.range, ny * offset + dy * zoom),
      );
      const i = (py * canvas.width + px) * 4;
      pixels.data[i] = Math.round(128 - (127 * shiftX) / LENS.range);
      pixels.data[i + 1] = Math.round(128 - (127 * shiftY) / LENS.range);
      pixels.data[i + 2] = 128;
      pixels.data[i + 3] = 255;
      // Opposing grazing reflections follow the rounded-rectangle normals.
      // Diagonal lighting reveals both long rims as well as the rounded ends.
      const rim = Math.sqrt(Math.max(0, 1 - (1 - distance) ** 2));
      const facing = Math.abs(
        nx * Math.cos(Math.PI / 3) - ny * Math.sin(Math.PI / 3),
      );
      const reflection = rim * facing;
      specular.data[i] = specular.data[i + 1] = specular.data[i + 2] = 255;
      specular.data[i + 3] = Math.round(255 * reflection ** 2);
    }
  }
  context.putImageData(pixels, 0, 0);
  const displacement = canvas.toDataURL();
  context.putImageData(specular, 0, 0);
  return {
    displacement,
    specular: canvas.toDataURL(),
    pixels,
    reflection: specular,
  };
}

/** A single background lens; navigation text stays outside the filter. */
export function NavGlass() {
  const surfaceRef = useRef<HTMLSpanElement>(null);
  const mapRef = useRef<SVGFEImageElement>(null);
  const specularRef = useRef<SVGFEImageElement>(null);
  const filterId = `nav-lens-${useId().replace(/:/g, "")}`;

  useEffect(() => {
    const surface = surfaceRef.current;
    const header = surface?.closest("header");
    if (!surface || !header) return;
    header.dataset.liquidGlass = "true";
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = matchMedia("(hover: hover) and (pointer: fine)");
    const transparency = matchMedia(
      "(prefers-reduced-transparency: reduce), (prefers-contrast: more), (forced-colors: active)",
    );
    // Safari/Firefox cannot SVG-filter a backdrop. Use bounded canvas sampling
    // there, retaining the native compositor path where it is supported.
    const chromium = /Chrome|Chromium|Edg\//.test(navigator.userAgent);
    const canvasMode =
      !chromium ||
      (import.meta.env.DEV &&
        new URLSearchParams(location.search).has("nav-canvas"));
    let lensPixels: LensPixels | null = null;
    let disposeCanvas: (() => void) | undefined;
    let disposed = false;
    let frame = 0;
    let mapTimer = 0;
    const maps = new Map<string, ReturnType<typeof createLensMap>>();
    let x = 0;
    let y = 0;
    let lightX = 0.2;
    let lightY = 0;
    let targetX = lightX;
    let targetY = lightY;
    let tracking = false;
    let previousSize = "";

    const updateMap = () => {
      mapTimer = 0;
      if (header.dataset.navAnimating === "true") {
        scheduleMap();
        return;
      }
      if (transparency.matches) {
        surface.style.removeProperty("--nav-lens-filter");
        delete surface.dataset.refracting;
        previousSize = "";
        lensPixels = null;
        return;
      }
      const bounds = surface.getBoundingClientRect();
      const width = Math.round(bounds.width);
      const height = Math.round(bounds.height);
      const radius = Math.min(
        height / 2,
        parseFloat(getComputedStyle(surface).borderTopLeftRadius),
      );
      const size = `${width}:${height}:${radius}:${devicePixelRatio}`;
      if (size === previousSize || width < 1 || height < 1) return;
      const map = maps.get(size) ?? createLensMap(width, height, radius);
      if (map && !maps.has(size)) {
        if (maps.size >= 4) maps.delete(maps.keys().next().value!);
        maps.set(size, map);
      }
      if (!map) return;
      previousSize = size;
      lensPixels = {
        displacement: map.pixels,
        reflection: map.reflection,
        scale: CHANNEL_SCALES[1],
      };
      // Explicit local dimensions: percentage filter regions can resolve against
      // the backdrop capture rather than the visible bar in Chromium.
      const filter = mapRef.current?.parentElement;
      filter?.setAttribute("width", String(bounds.width));
      filter?.setAttribute("height", String(bounds.height));
      mapRef.current?.setAttribute("width", String(bounds.width));
      mapRef.current?.setAttribute("height", String(bounds.height));
      mapRef.current?.setAttribute("href", map.displacement);
      specularRef.current?.setAttribute("width", String(bounds.width));
      specularRef.current?.setAttribute("height", String(bounds.height));
      specularRef.current?.setAttribute("href", map.specular);
      surface.dataset.refracting = "true";
      surface.dispatchEvent(new Event("nav-glass-update"));
      if (!canvasMode)
        surface.style.setProperty("--nav-lens-filter", `url(#${filterId})`);
    };
    const scheduleMap = () => {
      window.clearTimeout(mapTimer);
      mapTimer = window.setTimeout(updateMap, 120);
    };
    const paint = () => {
      frame = 0;
      const rect = surface.getBoundingClientRect();
      if (tracking) {
        targetX = Math.max(0, Math.min(1, (x - rect.left) / rect.width));
        targetY = Math.max(0, Math.min(1, (y - rect.top) / rect.height));
      }
      lightX += (targetX - lightX) * 0.2;
      lightY += (targetY - lightY) * 0.2;
      surface.style.setProperty("--glass-x", `${lightX * 100}%`);
      surface.style.setProperty("--glass-y", `${lightY * 100}%`);
      // A small view-response approximation, without moving navigation targets
      // or rebuilding the map. Background motion itself is sampled natively.
      const response = tracking ? 1 + (lightY - 0.5) * 0.06 : 1;
      const channels =
        mapRef.current?.parentElement?.querySelectorAll("feDisplacementMap");
      channels?.forEach((channel, index) => {
        channel.setAttribute("scale", String(CHANNEL_SCALES[index] * response));
      });
      if (Math.abs(targetX - lightX) + Math.abs(targetY - lightY) > 0.002)
        frame = requestAnimationFrame(paint);
    };
    const onMove = (event: PointerEvent) => {
      if (
        !pointer.matches ||
        motion.matches ||
        transparency.matches ||
        event.pointerType === "touch"
      )
        return;
      x = event.clientX;
      y = event.clientY;
      tracking = true;
      surface.dataset.tracking = "true";
      if (!frame) frame = requestAnimationFrame(paint);
    };
    const onLeave = () => {
      tracking = false;
      targetX = 0.2;
      targetY = 0;
      delete surface.dataset.tracking;
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      if (motion.matches || transparency.matches) {
        lightX = targetX;
        lightY = targetY;
      }
      paint();
    };
    const onPreferenceChange = () => {
      onLeave();
      scheduleMap();
    };
    const observer = new ResizeObserver(scheduleMap);
    observer.observe(surface);
    transparency.addEventListener("change", onPreferenceChange);
    motion.addEventListener("change", onLeave);
    window.addEventListener("resize", scheduleMap, { passive: true });
    header.addEventListener("pointermove", onMove, { passive: true });
    header.addEventListener("pointerleave", onLeave);
    updateMap();
    if (canvasMode) {
      surface.dataset.renderer = "canvas";
      void import("../utils/navGlassCanvas").then(({ mountNavGlassCanvas }) => {
        if (!disposed)
          disposeCanvas = mountNavGlassCanvas(
            surface,
            () => lensPixels,
            () => !transparency.matches,
          );
      });
    }
    return () => {
      disposed = true;
      disposeCanvas?.();
      delete surface.dataset.renderer;
      observer.disconnect();
      transparency.removeEventListener("change", onPreferenceChange);
      motion.removeEventListener("change", onLeave);
      window.removeEventListener("resize", scheduleMap);
      header.removeEventListener("pointermove", onMove);
      header.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(frame);
      window.clearTimeout(mapTimer);
      maps.clear();
      delete header.dataset.liquidGlass;
    };
  }, [filterId]);

  return (
    <>
      <svg className="nav-glass-defs" aria-hidden="true" focusable="false">
        <defs>
          <filter
            id={filterId}
            filterUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="100%"
            height="100%"
            colorInterpolationFilters="sRGB"
          >
            <feImage
              ref={mapRef}
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              result="rawBevel"
            />
            {/* 128/255 is not 0.5: correct the neutral texel to avoid shifting
                or separating RGB channels across the flat interior. */}
            <feComponentTransfer in="rawBevel" result="bevel">
              <feFuncR type="linear" slope="1" intercept={-0.5 / 255} />
              <feFuncG type="linear" slope="1" intercept={-0.5 / 255} />
            </feComponentTransfer>
            <feDisplacementMap
              in="SourceGraphic"
              in2="bevel"
              scale={CHANNEL_SCALES[0]}
              xChannelSelector="R"
              yChannelSelector="G"
              result="redLens"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="bevel"
              scale={CHANNEL_SCALES[1]}
              xChannelSelector="R"
              yChannelSelector="G"
              result="greenLens"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="bevel"
              scale={CHANNEL_SCALES[2]}
              xChannelSelector="R"
              yChannelSelector="G"
              result="blueLens"
            />
            <feColorMatrix
              in="redLens"
              type="matrix"
              values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
              result="red"
            />
            <feColorMatrix
              in="greenLens"
              type="matrix"
              values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0"
              result="green"
            />
            <feColorMatrix
              in="blueLens"
              type="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0"
              result="blue"
            />
            <feBlend in="red" in2="green" mode="screen" result="redGreen" />
            <feBlend
              in="redGreen"
              in2="blue"
              mode="screen"
              result="refracted"
            />
            <feImage
              ref={specularRef}
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              result="reflectionMask"
            />
            <feColorMatrix
              in="refracted"
              type="saturate"
              values="4"
              result="edgeColour"
            />
            <feComposite
              in="edgeColour"
              in2="reflectionMask"
              operator="in"
              result="colouredReflection"
            />
            <feBlend
              in="colouredReflection"
              in2="refracted"
              mode="normal"
              result="litGlass"
            />
            <feComponentTransfer in="reflectionMask" result="faintReflection">
              <feFuncA type="linear" slope="0.5" />
            </feComponentTransfer>
            <feBlend in="faintReflection" in2="litGlass" mode="normal" />
          </filter>
        </defs>
      </svg>
      <span ref={surfaceRef} className="nav-glass" aria-hidden="true" />
    </>
  );
}
