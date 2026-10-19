import ringUrl from "../../../../../assets/home/story/scene-1-layer-4.webp";

const clamp = (value: number) => Math.max(0, Math.min(1, value));
const smooth = (value: number) => value * value * (3 - 2 * value);

/** A representation study, not a reconstruction of the archived animation. */
export function installRingStudy(root: HTMLElement) {
  const canvas = root.querySelector("canvas")!;
  const ink = canvas.getContext("2d");
  if (!ink) return () => {};
  const progressBar = root.querySelector<HTMLElement>("[data-ring-progress]")!;
  const state = root.querySelector<HTMLElement>("[data-ring-state]")!;
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
  const image = new Image();
  let disposed = false;
  let frame = 0;
  let manual: number | null = null;
  let progress = 0;
  let ready = false;
  let particles: {
    x: number;
    y: number;
    color: string;
    dx: number;
    dy: number;
  }[] = [];

  function draw() {
    frame = 0;
    if (disposed) return;
    const box = root.getBoundingClientRect();
    const reader = root
      .closest(".route-frame__scroll")
      ?.getBoundingClientRect();
    const top = Math.max(100, reader?.top ?? 0);
    const bottom = Math.min(innerHeight, reader?.bottom ?? innerHeight);
    if (box.bottom < top || box.top > bottom) return;
    // Read visual coordinates so the article's own scroll projection also works.
    progress =
      manual ??
      clamp((bottom - 80 - box.top) / Math.max(1, bottom - top - 160));
    const p = reducedMotion.matches ? 0.55 : smooth(progress);
    const dpr = Math.min(devicePixelRatio || 1, 2);
    const width = Math.max(1, canvas.clientWidth);
    const height = width * 0.5;
    if (canvas.width !== Math.round(width * dpr)) {
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
    }
    ink!.setTransform(canvas.width / 800, 0, 0, canvas.height / 400, 0, 0);
    ink!.clearRect(0, 0, 800, 400);
    ink!.strokeStyle = "#c8ccba";
    ink!.lineWidth = 1;
    ink!.setLineDash([3, 7]);
    for (const y of [96, 296]) {
      ink!.beginPath();
      ink!.moveTo(90, y);
      ink!.lineTo(704, y);
      ink!.stroke();
      ink!.beginPath();
      ink!.arc(704, y, 83, 0, Math.PI * 2);
      ink!.stroke();
    }
    ink!.setLineDash([]);
    ink!.strokeStyle = "#deded1";
    ink!.beginPath();
    ink!.moveTo(24, 200);
    ink!.lineTo(776, 200);
    ink!.stroke();
    if (ready) {
      const x = 100 + 604 * p;
      const spread = Math.sin(p * Math.PI);
      const blend = smooth(clamp(spread * 3));
      ink!.globalAlpha = 1 - blend;
      ink!.drawImage(image, x - 80, 16, 160, 160);
      ink!.globalAlpha = blend;
      for (const particle of particles) {
        ink!.fillStyle = particle.color;
        ink!.beginPath();
        ink!.arc(
          x + particle.x * 1.25 + particle.dx * spread,
          96 + particle.y * 1.25 + particle.dy * spread,
          1.25,
          0,
          Math.PI * 2,
        );
        ink!.fill();
      }
      ink!.globalAlpha = 1;
      ink!.drawImage(image, x - 80, 216, 160, 160);
    }
    progressBar.style.transform = `scaleX(${progress})`;
    const phase = reducedMotion.matches
      ? "Static comparison · reduced motion"
      : progress < 0.12
        ? "One ring · two approaches"
        : progress > 0.88
          ? "Arrival · the same object"
          : "In transit · follow the outline";
    if (state.textContent !== phase) state.textContent = phase;
    root.dataset.progress = progress.toFixed(3);
  }
  function schedule() {
    if (!frame && !disposed) frame = requestAnimationFrame(draw);
  }
  function onScroll() {
    schedule();
  }
  function resumeScroll() {
    manual = null;
    schedule();
  }
  function onKey(event: KeyboardEvent) {
    if (
      ["ArrowDown", "ArrowUp", "PageDown", "PageUp", " ", "Tab"].includes(
        event.key,
      )
    )
      resumeScroll();
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    event.stopPropagation();
    manual =
      event.key === "Home"
        ? 0
        : event.key === "End"
          ? 1
          : clamp(
              (manual ?? progress) +
                (event.key === "ArrowRight" ? 0.08 : -0.08),
            );
    schedule();
  }
  image.onload = () => {
    if (disposed) return;
    const sample = document.createElement("canvas");
    sample.width = sample.height = 128;
    const context = sample.getContext("2d", { willReadFrequently: true });
    if (!context) return;
    context.drawImage(image, 0, 0, 128, 128);
    const pixels = context.getImageData(0, 0, 128, 128).data;
    particles = [];
    for (let y = 0; y < 128; y += 3) {
      for (let x = 0; x < 128; x += 3) {
        const i = (y * 128 + x) * 4;
        if (pixels[i + 3] < 80) continue;
        // Stable offsets keep reverse scroll and resize on the same trajectory.
        const seed = x * 17.13 + y * 91.7;
        particles.push({
          x: x - 64,
          y: y - 64,
          color: `rgba(${pixels[i]},${pixels[i + 1]},${pixels[i + 2]},${pixels[i + 3] / 255})`,
          dx: Math.sin(seed) * 95,
          dy: Math.cos(seed * 1.7) * 19,
        });
      }
    }
    ready = true;
    schedule();
  };
  image.onerror = () => {
    state.textContent = "Artwork unavailable · see the preserved frames below";
  };
  image.src = ringUrl;
  window.addEventListener("scroll", onScroll, { capture: true, passive: true });
  window.addEventListener("wheel", resumeScroll, { passive: true });
  window.addEventListener("touchstart", resumeScroll, { passive: true });
  window.addEventListener("pointerdown", resumeScroll, { passive: true });
  window.addEventListener("resize", schedule);
  reducedMotion.addEventListener("change", schedule);
  root.addEventListener("keydown", onKey);
  const observer = new ResizeObserver(schedule);
  observer.observe(canvas);
  schedule();
  return () => {
    disposed = true;
    cancelAnimationFrame(frame);
    observer.disconnect();
    image.onload = image.onerror = null;
    window.removeEventListener("scroll", onScroll, true);
    window.removeEventListener("wheel", resumeScroll);
    window.removeEventListener("touchstart", resumeScroll);
    window.removeEventListener("pointerdown", resumeScroll);
    window.removeEventListener("resize", schedule);
    reducedMotion.removeEventListener("change", schedule);
    root.removeEventListener("keydown", onKey);
  };
}
