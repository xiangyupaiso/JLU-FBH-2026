import { useEffect, useRef } from "react";

type ParticleVariant =
  | "experiments"
  | "notebook"
  | "measurement"
  | "platform"
  | "safety";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  originX: number;
  originY: number;
  motifX: number;
  motifY: number;
  targetX: number;
  targetY: number;
  seed: number;
  color: string;
}

const VARIANT_BY_ROUTE: Record<string, ParticleVariant> = {
  "/experiments": "experiments",
  "/notebook": "notebook",
  "/measurement": "measurement",
  "/alternative-platform": "platform",
  "/safety-and-security": "safety",
};

const ROUTE_SEEDS: Record<ParticleVariant, number> = {
  experiments: 1301,
  notebook: 2402,
  measurement: 3503,
  platform: 4604,
  safety: 5705,
};

function makeRandom(seed: number) {
  let value = seed >>> 0;
  return () => {
    value = (value * 1664525 + 1013904223) >>> 0;
    return value / 4294967296;
  };
}

function routeTarget(
  variant: ParticleVariant,
  progress: number,
  random: () => number,
) {
  const jitter = () => (random() - 0.5) * 0.008;

  if (variant === "experiments") {
    const gate = Math.min(4, Math.floor(progress * 5));
    const gateProgress = (progress * 5) % 1;
    const angle = gateProgress * Math.PI * 2;
    return {
      x: 0.16 + gate * 0.17 + Math.cos(angle) * 0.065 + jitter(),
      y: 0.5 + Math.sin(angle) * 0.12 + (gate % 2 ? 0.04 : -0.04) + jitter(),
    };
  }

  if (variant === "notebook") {
    const onSpine = progress < 0.42;
    const local = onSpine ? progress / 0.42 : (progress - 0.42) / 0.58;
    if (onSpine) return { x: 0.32 + jitter(), y: 0.12 + local * 0.76 };
    const entry = Math.min(3, Math.floor(local * 4));
    const lineProgress = (local * 4) % 1;
    return {
      x: 0.32 + lineProgress * 0.5 + jitter(),
      y:
        0.2 + entry * 0.2 + Math.sin(lineProgress * Math.PI) * 0.018 + jitter(),
    };
  }

  if (variant === "measurement") {
    if (progress < 0.22) {
      const axis = progress / 0.22;
      return axis < 0.5
        ? { x: 0.14, y: 0.12 + axis * 1.52 }
        : { x: 0.14 + (axis - 0.5) * 1.52, y: 0.88 };
    }
    const line = (progress - 0.22) / 0.78;
    return {
      x: 0.16 + line * 0.7 + jitter(),
      y: 0.72 - Math.sin(line * Math.PI * 1.35) * 0.38 + line * 0.05 + jitter(),
    };
  }

  if (variant === "platform") {
    const angle = progress * Math.PI * 2;
    const inner = progress > 0.72;
    return {
      x:
        0.5 +
        Math.cos(angle * (inner ? 3 : 1)) * (inner ? 0.13 : 0.37) +
        jitter(),
      y:
        0.5 +
        Math.sin(angle * (inner ? 3 : 1)) * (inner ? 0.13 : 0.24) +
        jitter(),
    };
  }

  const boundaryProgress =
    progress < 0.78 ? progress / 0.78 : (progress - 0.78) / 0.22;
  if (progress < 0.78) {
    const angle = boundaryProgress * Math.PI * 2;
    return {
      x: 0.5 + Math.cos(angle) * 0.34 + jitter(),
      y: 0.5 + Math.sin(angle) * 0.34 + jitter(),
    };
  }
  return {
    x: 0.24 + boundaryProgress * 0.52 + jitter(),
    y: 0.5 + Math.sin(boundaryProgress * Math.PI * 2) * 0.025 + jitter(),
  };
}

function circureTarget(progress: number, random: () => number) {
  const jitter = () => (random() - 0.5) * 0.006;

  if (progress < 0.58) {
    const local = progress / 0.58;
    const strand = local < 0.5 ? 0 : 1;
    const angle = (local % 0.5) * Math.PI * 4;
    const radius = 0.31 + (strand ? 0.024 : -0.024);
    return {
      x: 0.5 + Math.cos(angle) * radius + jitter(),
      y: 0.5 + Math.sin(angle) * radius * 0.58 + jitter(),
    };
  }

  if (progress < 0.82) {
    const local = (progress - 0.58) / 0.24;
    const angle = local * Math.PI * 2;
    return {
      x: 0.5 + Math.sin(angle) * 0.17 + jitter(),
      y: 0.5 + Math.sin(angle * 2) * 0.14 + jitter(),
    };
  }

  const local = (progress - 0.82) / 0.18;
  const node = Math.min(4, Math.floor(local * 5));
  const nodeProgress = (local * 5) % 1;
  const nodeAngle = nodeProgress * Math.PI * 2;
  const orbitAngle = -Math.PI * 0.72 + (node * (Math.PI * 1.44)) / 4;
  return {
    x:
      0.5 +
      Math.cos(orbitAngle) * 0.31 +
      Math.cos(nodeAngle) * 0.027 +
      jitter(),
    y:
      0.5 +
      Math.sin(orbitAngle) * 0.18 +
      Math.sin(nodeAngle) * 0.045 +
      jitter(),
  };
}

function buildParticles(
  width: number,
  height: number,
  variant: ParticleVariant,
) {
  const random = makeRandom(ROUTE_SEEDS[variant]);
  const count = Math.max(
    760,
    Math.min(1800, Math.round((width * height) / 230)),
  );
  const centerX = width * 0.5;
  const centerY = height * 0.5;
  const shapeWidth = Math.min(width * 0.58, 720);
  const shapeHeight = Math.min(height * 0.72, 190);
  const regionLeft = width * 0.012;
  const regionTop = height * 0.06;
  const regionWidth = width * 0.976;
  const regionHeight = height * 0.88;
  const columns = Math.max(
    28,
    Math.round(Math.sqrt(count * (regionWidth / regionHeight))),
  );
  const rows = Math.ceil(count / columns);

  return Array.from({ length: count }, (_, index): Particle => {
    const column = index % columns;
    const row = Math.floor(index / columns);
    const originX =
      regionLeft + ((column + 0.18 + random() * 0.64) / columns) * regionWidth;
    const originY =
      regionTop + ((row + 0.18 + random() * 0.64) / rows) * regionHeight;
    const motif = circureTarget(index / count, random);
    const target = routeTarget(variant, index / count, random);
    const motifX = centerX + (motif.x - 0.5) * shapeWidth;
    const motifY = centerY + (motif.y - 0.5) * shapeHeight;
    const targetX = centerX + (target.x - 0.5) * shapeWidth;
    const targetY = centerY + (target.y - 0.5) * shapeHeight;
    const colorRoll = random();

    return {
      x: originX,
      y: originY,
      vx: 0,
      vy: 0,
      originX,
      originY,
      motifX,
      motifY,
      targetX,
      targetY,
      seed: random() * Math.PI * 2,
      color:
        colorRoll < 0.72 ? "#173d3c" : colorRoll < 0.93 ? "#df705b" : "#315f62",
    };
  });
}

export function WetLabParticleField({ route }: { route: string }) {
  const variant = VARIANT_BY_ROUTE[route] ?? "experiments";
  const fieldRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const field = fieldRef.current;
    const canvas = canvasRef.current;
    if (!field || !canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let particles: Particle[] = [];
    let frame = 0;
    let visible = true;
    let width = 1;
    let height = 1;
    let formation = reducedMotion.matches ? 0.84 : 0;
    let pageMix = reducedMotion.matches ? 0.58 : 0;
    let pointerInside = false;
    let pointerX = width * 0.5;
    let pointerY = height * 0.5;
    let ringX = pointerX;
    let ringY = pointerY;
    let previousTime = performance.now();
    const cycleStartedAt = performance.now();

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, field.clientWidth);
      height = Math.max(1, field.clientHeight);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      particles = buildParticles(width, height, variant);
      pointerX = width * 0.5;
      pointerY = height * 0.5;
      ringX = pointerX;
      ringY = pointerY;
    };

    const render = (time: number) => {
      if (!visible) return;
      const delta = Math.min(2, Math.max(0.5, (time - previousTime) / 16.667));
      previousTime = time;
      const cycle = ((time - cycleStartedAt) % 12400) / 12400;
      let formationTarget = 0;
      let pageMixTarget = 0;
      if (reducedMotion.matches) {
        formationTarget = 0.84;
        pageMixTarget = 0.58;
      } else if (cycle >= 0.1 && cycle < 0.34) {
        const progress = (cycle - 0.1) / 0.24;
        formationTarget = progress * progress * (3 - 2 * progress);
      } else if (cycle >= 0.34 && cycle < 0.45) {
        formationTarget = 1;
      } else if (cycle >= 0.45 && cycle < 0.68) {
        const progress = (cycle - 0.45) / 0.23;
        formationTarget = 1;
        pageMixTarget = progress * progress * (3 - 2 * progress);
      } else if (cycle >= 0.68 && cycle < 0.82) {
        formationTarget = 1;
        pageMixTarget = 1;
      } else if (cycle >= 0.82) {
        const progress = (cycle - 0.82) / 0.18;
        const release = progress * progress * (3 - 2 * progress);
        formationTarget = 1 - release;
        pageMixTarget = 1;
      }
      const morphEase = reducedMotion.matches ? 1 : 0.072;
      formation += (formationTarget - formation) * morphEase * delta;
      pageMix += (pageMixTarget - pageMix) * morphEase * delta;
      ringX += (pointerX - ringX) * 0.02 * delta;
      ringY += (pointerY - ringY) * 0.02 * delta;

      context.clearRect(0, 0, width, height);
      const targetMix = formation * formation;
      const storyMix = pageMix * pageMix * (3 - 2 * pageMix);
      const ringRadius =
        Math.min(82, height * 0.35) +
        Math.sin(time * 0.0013) * 7 +
        Math.cos(time * 0.0037) * 3;

      particles.forEach((particle, index) => {
        const driftX = Math.sin(time * 0.00038 + particle.seed) * 2;
        const driftY = Math.cos(time * 0.00031 + particle.seed * 1.27) * 1.6;
        const storyX =
          particle.motifX * (1 - storyMix) + particle.targetX * storyMix;
        const storyY =
          particle.motifY * (1 - storyMix) + particle.targetY * storyMix;
        let desiredX =
          particle.originX * (1 - targetMix) + storyX * targetMix + driftX;
        let desiredY =
          particle.originY * (1 - targetMix) + storyY * targetMix + driftY;
        const dx = desiredX - ringX;
        const dy = desiredY - ringY;
        const distance = Math.max(1, Math.hypot(dx, dy));
        const thinRing = Math.exp(-Math.abs(distance - ringRadius) / 4.2);
        const softRing = Math.exp(-Math.abs(distance - ringRadius) / 30);
        const ringForce = pointerInside ? thinRing * 28 + softRing * 3.6 : 0;
        desiredX += (dx / distance) * ringForce;
        desiredY += (dy / distance) * ringForce;

        if (reducedMotion.matches) {
          particle.x = desiredX;
          particle.y = desiredY;
        } else {
          particle.vx =
            (particle.vx + (desiredX - particle.x) * 0.018 * delta) * 0.9;
          particle.vy =
            (particle.vy + (desiredY - particle.y) * 0.018 * delta) * 0.9;
          particle.x += particle.vx * delta;
          particle.y += particle.vy * delta;
        }

        const angle =
          Math.atan2(particle.y - ringY, particle.x - ringX) +
          Math.PI * 0.5 +
          Math.sin(time * 0.0007 + particle.seed) * 0.16;
        const ringActivity = pointerInside ? 1 : 0;
        const length =
          0.8 +
          (index % 4) * 0.16 +
          thinRing * 4.1 * ringActivity +
          targetMix * 0.7;
        const halfLength = length * 0.5;
        const directionX = Math.cos(angle) * halfLength;
        const directionY = Math.sin(angle) * halfLength;
        context.globalAlpha = Math.min(
          0.92,
          0.16 +
            targetMix * 0.57 +
            thinRing * 0.72 * ringActivity +
            softRing * 0.14 * ringActivity,
        );
        context.strokeStyle = particle.color;
        context.lineCap = "round";
        context.lineWidth =
          0.55 +
          (index % 3) * 0.08 +
          thinRing * 0.88 * ringActivity +
          targetMix * 0.15;
        context.beginPath();
        context.moveTo(particle.x - directionX, particle.y - directionY);
        context.lineTo(particle.x + directionX, particle.y + directionY);
        context.stroke();
      });
      context.globalAlpha = 1;

      if (!reducedMotion.matches) frame = window.requestAnimationFrame(render);
    };

    const start = () => {
      window.cancelAnimationFrame(frame);
      previousTime = performance.now();
      frame = window.requestAnimationFrame(render);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      const bounds = field.getBoundingClientRect();
      pointerX = event.clientX - bounds.left;
      pointerY = event.clientY - bounds.top;
      pointerInside = true;
    };

    const handlePointerLeave = () => {
      pointerInside = false;
    };

    const resizeObserver = new ResizeObserver(resize);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else window.cancelAnimationFrame(frame);
    });

    resize();
    resizeObserver.observe(field);
    intersectionObserver.observe(field);
    field.addEventListener("pointermove", handlePointerMove, { passive: true });
    field.addEventListener("pointerleave", handlePointerLeave);
    if (reducedMotion.matches) render(performance.now());
    else start();

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      field.removeEventListener("pointermove", handlePointerMove);
      field.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [variant]);

  return (
    <div
      ref={fieldRef}
      className="wet-particle-field"
      data-particle-variant={variant}
    >
      <canvas ref={canvasRef} aria-hidden="true" />
    </div>
  );
}
