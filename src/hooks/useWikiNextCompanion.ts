import { useLayoutEffect, useRef } from "react";

const clamp = (value: number, low = 0, high = 1) =>
  Math.max(low, Math.min(high, value));

// Contact points sampled from the upper face of next-record-ribbon-watercolor.png.
const CONTACT = [
  [0.055, 0.185],
  [0.1, 0.209],
  [0.15, 0.316],
  [0.2, 0.504],
  [0.25, 0.602],
  [0.3, 0.662],
  [0.4, 0.735],
  [0.5, 0.761],
  [0.6, 0.745],
  [0.7, 0.689],
] as const;

/** Smooth the measured contact line without drawing a second ribbon. */
function contactHeight(x: number) {
  const index = CONTACT.findIndex((point) => point[0] >= x);
  if (index <= 0) return CONTACT[index === 0 ? 0 : CONTACT.length - 1][1];
  const a = CONTACT[index - 1];
  const b = CONTACT[index];
  const before = CONTACT[Math.max(0, index - 2)];
  const after = CONTACT[Math.min(CONTACT.length - 1, index + 1)];
  const width = b[0] - a[0];
  const t = clamp((x - a[0]) / width);
  const slopeA = (b[1] - before[1]) / (b[0] - before[0]);
  const slopeB = (after[1] - a[1]) / (after[0] - a[0]);
  return (
    (2 * t ** 3 - 3 * t ** 2 + 1) * a[1] +
    (t ** 3 - 2 * t ** 2 + t) * width * slopeA +
    (-2 * t ** 3 + 3 * t ** 2) * b[1] +
    (t ** 3 - t ** 2) * width * slopeB
  );
}

export function useWikiNextCompanion(path: string, studyProgress?: number) {
  const sectionRef = useRef<HTMLElement>(null);
  const companionRef = useRef<HTMLSpanElement>(null);
  const ribbonRef = useRef<HTMLImageElement>(null);
  const actionRef = useRef<HTMLAnchorElement>(null);
  const studyProgressRef = useRef(studyProgress);
  const repaintRef = useRef<(() => void) | null>(null);

  useLayoutEffect(() => {
    studyProgressRef.current = studyProgress;
    repaintRef.current?.();
  }, [studyProgress]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const companion = companionRef.current;
    const ribbon = ribbonRef.current;
    const action = actionRef.current;
    const inner = companion?.parentElement;
    const copy = section?.querySelector<HTMLElement>(".wiki-next__copy");
    if (!section || !companion || !ribbon || !action || !inner || !copy) return;

    const desktop = matchMedia("(min-width: 761px)");
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let nearby = true;
    let dirty = true;
    let readPosition = true;
    let mounted = true;
    let initialized = false;
    let progress = 0;
    let targetProgress = 0;
    let lastTime = 0;
    let lastTop: number | undefined;
    let lastPose = "";
    let lastProgress = "";
    let geometry: ReturnType<typeof measure> | undefined;

    function measure() {
      const root = section!.getBoundingClientRect();
      const band = ribbon!.getBoundingClientRect();
      const column = inner!.getBoundingClientRect();
      const target = action!.getBoundingClientRect();
      const size = companion!.offsetWidth;
      const foot = companion!.offsetHeight * 0.91;
      const bandLeft = band.left - root.left;
      const bandTop = band.top - root.top;
      const yAt = (x: number) =>
        bandTop + contactHeight((x - bandLeft) / band.width) * band.height;
      const endX =
        target.left - root.left - clamp(size * 0.35, 24, 44) - size / 2;
      const clearance =
        copy!.getBoundingClientRect().bottom - root.top + foot + 16;
      // Start on the descending face, below the copy even while tilted.
      let low = bandLeft + Math.max(band.width * 0.09, size / 2 + 8);
      let high = Math.max(low, endX);
      for (let i = 0; i < 18; i += 1) {
        const middle = (low + high) / 2;
        if (yAt(middle) < clearance) low = middle;
        else high = middle;
      }
      return {
        startX: high,
        endX,
        baseX: column.left - root.left + companion!.offsetLeft,
        baseY: column.top - root.top + companion!.offsetTop,
        size,
        foot,
        yAt,
        headTop: yAt(high) - foot + size * 0.105,
      };
    }

    function paint(time: number) {
      frame = 0;
      if (!desktop.matches) {
        companion!.style.removeProperty("transform");
        companion!.style.removeProperty("will-change");
        delete companion!.dataset.slideProgress;
        delete companion!.dataset.slideTarget;
        initialized = false;
        lastPose = "";
        lastProgress = "";
        return;
      }
      let snap = !initialized || reduced.matches || !nearby;
      if (dirty || !geometry) {
        geometry = measure();
        dirty = false;
        readPosition = true;
        snap = true;
      }
      if (readPosition) {
        const root = section!.getBoundingClientRect();
        const viewport = window.innerHeight;
        // Begin as the head enters view; finish with the section centered.
        const startTop =
          viewport - clamp(viewport * 0.008, 4, 8) - geometry.headTop;
        const finishTop = Math.min(
          viewport / 2 - root.height / 2,
          startTop - viewport * 0.18,
        );
        targetProgress = reduced.matches
          ? 1
          : clamp((startTop - root.top) / (startTop - finishTop));
        snap ||=
          lastTop !== undefined &&
          Math.abs(root.top - lastTop) > viewport * 0.75;
        lastTop = root.top;
        readPosition = false;
        companion!.dataset.slideTarget = targetProgress.toFixed(4);
      }
      // Isolated studies can scrub the same artwork geometry explicitly.
      if (studyProgressRef.current !== undefined) {
        targetProgress = clamp(studyProgressRef.current);
        companion!.dataset.slideTarget = targetProgress.toFixed(4);
        snap = true;
      }
      const elapsed = time - lastTime;
      const step =
        elapsed > 120 || elapsed <= 0 ? 1000 / 60 : Math.min(elapsed, 48);
      lastTime = time;
      if (snap || Math.abs(targetProgress - progress) > 0.65) {
        progress = targetProgress;
      } else {
        progress += (targetProgress - progress) * (1 - Math.exp(-step / 48));
      }
      if (Math.abs(targetProgress - progress) < 0.0002)
        progress = targetProgress;
      initialized = true;
      // Nonzero entry speed avoids a visible pause; the final slope is zero.
      const travel = progress + progress ** 2 - progress ** 3;
      const { startX, endX, baseX, baseY, size, foot, yAt } = geometry;
      const x = startX + (endX - startX) * travel;
      const y = yAt(x);
      const slope = (yAt(x + 1) - yAt(x - 1)) / 2;
      const tilt =
        clamp((Math.atan(slope) * 180) / Math.PI, 0, 14) *
        Math.sin(Math.PI * travel);
      const pose = `translate3d(${(x - size / 2 - baseX).toFixed(3)}px, ${(y - foot - baseY).toFixed(3)}px, 0) rotate(${tilt.toFixed(3)}deg)`;
      if (pose !== lastPose) {
        companion!.style.transform = pose;
        lastPose = pose;
      }
      const level = progress.toFixed(4);
      if (level !== lastProgress) {
        companion!.dataset.slideProgress = level;
        lastProgress = level;
      }
      const promotion = nearby && !reduced.matches ? "transform" : "auto";
      if (companion!.style.willChange !== promotion)
        companion!.style.willChange = promotion;
      if (nearby && !reduced.matches && progress !== targetProgress)
        frame = requestAnimationFrame(paint);
    }

    const schedule = (force = false) => {
      if ((nearby || force) && !frame) frame = requestAnimationFrame(paint);
    };
    const onScroll = () => {
      readPosition = true;
      schedule();
    };
    repaintRef.current = () => schedule(true);
    const remeasure = () => {
      dirty = true;
      schedule();
    };
    const onViewportChange = () => {
      dirty = true;
      schedule(true);
    };
    const visibility = new IntersectionObserver(
      ([entry]) => {
        nearby = entry.isIntersecting;
        readPosition = true;
        schedule(true);
      },
      { rootMargin: "100% 0px" },
    );
    const resize = new ResizeObserver(remeasure);
    [section, inner, ribbon, companion, action, document.body].forEach(
      (element) => resize.observe(element),
    );
    visibility.observe(section);
    window.addEventListener("scroll", onScroll, {
      passive: true,
      capture: true,
    });
    window.addEventListener("resize", onViewportChange);
    desktop.addEventListener("change", onViewportChange);
    reduced.addEventListener("change", onViewportChange);
    ribbon.addEventListener("load", remeasure);
    void document.fonts.ready.then(() => {
      if (mounted) remeasure();
    });
    paint(performance.now());
    return () => {
      repaintRef.current = null;
      mounted = false;
      cancelAnimationFrame(frame);
      visibility.disconnect();
      resize.disconnect();
      window.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", onViewportChange);
      desktop.removeEventListener("change", onViewportChange);
      reduced.removeEventListener("change", onViewportChange);
      ribbon.removeEventListener("load", remeasure);
      companion.style.removeProperty("transform");
      companion.style.removeProperty("will-change");
      delete companion.dataset.slideProgress;
      delete companion.dataset.slideTarget;
    };
  }, [path]);

  return { sectionRef, companionRef, ribbonRef, actionRef };
}
