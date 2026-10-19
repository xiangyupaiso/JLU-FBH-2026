import { QueuedSvgImage } from "./common/QueuedImage";
import { useEffect, useId, useRef, useState } from "react";
import "../styles/footer-photo-glass.css";

const MAX_MAP_PIXELS = 320_000;
// The former navigation lens's convex bevel, scaled to a photograph's edge.
// Keep the flat centre at 1:1 so faces and the complete composition stay clear.
const LENS = { ior: 2.4, thickness: 16, range: 24, strength: 0.75 };
const CHANNEL_SCALES = [0.988, 1, 1.012].map(
  (channel) => 2 * LENS.range * LENS.strength * channel,
);

type GlassMaps = {
  width: number;
  height: number;
  displacement: string;
  edge: string;
  reflection: string;
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
  const reflection = context.createImageData(canvas.width, canvas.height);
  const bevel = Math.min(radius - 1, Math.max(18, Math.min(30, width * 0.03)));
  const reflectionWidth = Math.min(3, Math.max(1.8, bevel * 0.1));

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
      const t = Math.max(0, Math.min(1, inside / bevel));
      const rim = inside >= 0 ? 1 - t * t * (3 - 2 * t) : 0;
      let bend = 0;
      if (inside > 0 && inside < bevel) {
        const curve = 1 - Math.max(0.0001, t);
        const heightAtEdge = Math.sqrt(1 - curve * curve);
        const incident = Math.atan(curve / heightAtEdge);
        const refracted = Math.asin(Math.sin(incident) / LENS.ior);
        // Snell's law through the curved bevel and the flat depth below it.
        bend = Math.min(
          LENS.range,
          0.5 *
            (LENS.thickness + heightAtEdge * bevel) *
            Math.tan(incident - refracted),
        );
      }
      const index = (py * canvas.width + px) * 4;

      displacement.data[index] = Math.round(
        128 - (127 * normalX * bend) / LENS.range,
      );
      displacement.data[index + 1] = Math.round(
        128 - (127 * normalY * bend) / LENS.range,
      );
      displacement.data[index + 2] = 128;
      displacement.data[index + 3] = 255;

      edge.data[index] = 255;
      edge.data[index + 1] = 255;
      edge.data[index + 2] = 255;
      edge.data[index + 3] = Math.round(255 * rim);

      // Opposing highlights follow the normal through the rounded corners.
      const facing = Math.abs(normalX * 0.5 - normalY * Math.sqrt(0.75));
      const grazing =
        inside > 0 && inside < reflectionWidth
          ? Math.sin((Math.PI * inside) / reflectionWidth)
          : 0;
      reflection.data[index] = 255;
      reflection.data[index + 1] = 255;
      reflection.data[index + 2] = 255;
      reflection.data[index + 3] = Math.round(255 * grazing * facing ** 2);
    }
  }

  context.putImageData(displacement, 0, 0);
  const displacementUrl = canvas.toDataURL("image/png");
  context.putImageData(edge, 0, 0);
  const edgeUrl = canvas.toDataURL("image/png");
  context.putImageData(reflection, 0, 0);
  return {
    width,
    height,
    displacement: displacementUrl,
    edge: edgeUrl,
    reflection: canvas.toDataURL("image/png"),
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
      const radius = Math.min(
        width / 2,
        height / 2,
        Number.parseFloat(getComputedStyle(frame).borderTopLeftRadius) || 28,
      );
      const size =
        width + ":" + height + ":" + radius + ":" + window.devicePixelRatio;
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
                result="rawBevel"
              />
              {/* Correct 128/255 to 0.5 so neutral pixels stay motionless. */}
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
                href={maps.edge}
                width={maps.width}
                height={maps.height}
                preserveAspectRatio="none"
                result="edge"
              />
              <feComposite in="refracted" in2="edge" operator="in" />
            </filter>
          </defs>
          <QueuedSvgImage
            href={src}
            width={maps.width}
            height={maps.height}
            preserveAspectRatio="none"
            filter={"url(#" + id + ")"}
          />
          <QueuedSvgImage
            className="footer-photo-glass__reflection"
            href={maps.reflection}
            width={maps.width}
            height={maps.height}
            preserveAspectRatio="none"
          />
        </>
      )}
    </svg>
  );
}
