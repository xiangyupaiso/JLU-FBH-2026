import { useEffect, useId, useRef, useState } from "react";
import "../styles/footer-photo-glass.css";

const MAX_MAP_PIXELS = 320_000;
const REFRACTION_RANGE = 12;
const CHANNEL_SCALES = [0.96, 1, 1.04].map(
  (channel) => 2 * REFRACTION_RANGE * 0.75 * channel,
);

type GlassMaps = {
  width: number;
  height: number;
  displacement: string;
  edge: string;
};

/** Refract a narrow rounded edge while leaving the photograph's centre intact. */
function createGlassMaps(
  width: number,
  height: number,
  radius: number,
): GlassMaps | null {
  const canvas = document.createElement("canvas");
  const density = Math.min(
    window.devicePixelRatio || 1,
    1.4,
    Math.sqrt(MAX_MAP_PIXELS / (width * height)),
  );
  canvas.width = Math.max(1, Math.round(width * density));
  canvas.height = Math.max(1, Math.round(height * density));
  const context = canvas.getContext("2d");
  if (!context) return null;

  const displacement = context.createImageData(canvas.width, canvas.height);
  const edge = context.createImageData(canvas.width, canvas.height);
  const bevel = Math.min(radius - 1, Math.max(12, Math.min(18, width * 0.025)));

  for (let py = 0; py < canvas.height; py++) {
    for (let px = 0; px < canvas.width; px++) {
      const dx = ((px + 0.5) / canvas.width) * width - width / 2;
      const dy = ((py + 0.5) / canvas.height) * height - height / 2;
      const qx = Math.abs(dx) - (width / 2 - radius);
      const qy = Math.abs(dy) - (height / 2 - radius);
      const outsideX = Math.max(qx, 0);
      const outsideY = Math.max(qy, 0);
      const outsideLength = Math.hypot(outsideX, outsideY);
      const inside = radius - (outsideLength + Math.min(Math.max(qx, qy), 0));
      const normalX =
        Math.sign(dx) *
        (outsideLength ? outsideX / outsideLength : qx > qy ? 1 : 0);
      const normalY =
        Math.sign(dy) *
        (outsideLength ? outsideY / outsideLength : qy >= qx ? 1 : 0);
      const rim = Math.max(0, Math.min(1, 1 - inside / bevel));
      const bend = inside >= 0 ? REFRACTION_RANGE * rim * rim : 0;
      const index = (py * canvas.width + px) * 4;

      displacement.data[index] = Math.round(
        128 - (127 * normalX * bend) / REFRACTION_RANGE,
      );
      displacement.data[index + 1] = Math.round(
        128 - (127 * normalY * bend) / REFRACTION_RANGE,
      );
      displacement.data[index + 2] = 128;
      displacement.data[index + 3] = 255;

      edge.data[index] = 255;
      edge.data[index + 1] = 255;
      edge.data[index + 2] = 255;
      edge.data[index + 3] = inside >= 0 ? Math.round(255 * rim * rim) : 0;
    }
  }

  context.putImageData(displacement, 0, 0);
  const displacementUrl = canvas.toDataURL("image/png");
  context.putImageData(edge, 0, 0);
  return {
    width,
    height,
    displacement: displacementUrl,
    edge: canvas.toDataURL("image/png"),
  };
}

/** A static optical layer over the full image, created only in the hidden finale. */
export function FooterPhotoGlass({ src }: { src: string }) {
  const id = "footer-photo-glass-" + useId().replace(/:/g, "");
  const svgRef = useRef<SVGSVGElement>(null);
  const [maps, setMaps] = useState<GlassMaps | null>(null);

  useEffect(() => {
    const frame = svgRef.current?.parentElement;
    if (!frame) return;
    const reducedOptics = window.matchMedia(
      "(prefers-reduced-transparency: reduce), (prefers-contrast: more), (forced-colors: active)",
    );
    let request = 0;
    let previousSize = "";

    const update = () => {
      request = 0;
      if (reducedOptics.matches) {
        previousSize = "";
        setMaps(null);
        return;
      }
      const width = Math.round(frame.clientWidth);
      const height = Math.round(frame.clientHeight);
      const radius =
        Number.parseFloat(getComputedStyle(frame).borderTopLeftRadius) || 20;
      const size = width + ":" + height + ":" + radius;
      if (width < 1 || height < 1 || size === previousSize) return;
      previousSize = size;
      setMaps(createGlassMaps(width, height, radius));
    };
    const schedule = () => {
      if (!request) request = window.requestAnimationFrame(update);
    };
    const observer = new ResizeObserver(schedule);
    observer.observe(frame);
    reducedOptics.addEventListener("change", schedule);
    update();
    return () => {
      observer.disconnect();
      reducedOptics.removeEventListener("change", schedule);
      window.cancelAnimationFrame(request);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="footer-photo-glass"
      viewBox={maps ? "0 0 " + maps.width + " " + maps.height : undefined}
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      {maps && (
        <>
          <defs>
            <filter
              id={id}
              filterUnits="userSpaceOnUse"
              x="0"
              y="0"
              width={maps.width}
              height={maps.height}
              colorInterpolationFilters="sRGB"
            >
              <feImage
                href={maps.displacement}
                width={maps.width}
                height={maps.height}
                preserveAspectRatio="none"
                result="bevel"
              />
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
                href={maps.edge}
                width={maps.width}
                height={maps.height}
                preserveAspectRatio="none"
                result="edge"
              />
              <feComposite in="refracted" in2="edge" operator="in" />
            </filter>
          </defs>
          <image
            href={src}
            width={maps.width}
            height={maps.height}
            preserveAspectRatio="none"
            filter={"url(#" + id + ")"}
          />
        </>
      )}
    </svg>
  );
}
