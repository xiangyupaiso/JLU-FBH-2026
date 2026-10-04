import gsap from "gsap";

interface IntroOrbitOptions {
  layer: HTMLElement;
  timeline: gsap.core.Timeline;
  writeStart: number;
  chargeAt: number;
  releaseAt: number;
  emit: (x: number, y: number) => void;
}

/** One closed light trace, a short compression, then a single expanding wave. */
export function animateIntroOrbit({
  layer,
  timeline,
  writeStart,
  chargeAt,
  releaseAt,
  emit,
}: IntroOrbitOptions) {
  const select = gsap.utils.selector(layer);
  const path = layer.querySelector<SVGPathElement>(".home-intro-orbit-path");
  const tip = layer.querySelector<SVGGElement>(".home-intro-orbit-tip");
  if (!path || !tip) return;
  const length = path.getTotalLength();
  const trace = { progress: 0 };

  timeline.set(layer, { attr: { "data-intro-phase": "ignition" } }, 0);
  timeline.set(layer, { attr: { "data-intro-phase": "writing" } }, writeStart);
  timeline.set(layer, { attr: { "data-intro-phase": "charge" } }, chargeAt);
  timeline.set(layer, { attr: { "data-intro-phase": "release" } }, releaseAt);
  timeline.fromTo(
    select(".home-intro-orbit-body"),
    { scale: 0.82, rotation: -14 },
    { scale: 1, rotation: 0, duration: chargeAt, ease: "power2.out" },
    0.04,
  );
  timeline.to(
    trace,
    {
      progress: 1,
      duration: chargeAt - 0.04,
      ease: "power1.inOut",
      onUpdate: () => {
        // Keep pathLength fractions intact, as with the patient contour.
        path.style.strokeDashoffset = String(1 - trace.progress);
        const point = path.getPointAtLength(length * trace.progress);
        tip.setAttribute("transform", `translate(${point.x} ${point.y})`);
        const matrix = path.getScreenCTM();
        if (matrix)
          emit(
            point.x * matrix.a + point.y * matrix.c + matrix.e,
            point.x * matrix.b + point.y * matrix.d + matrix.f,
          );
      },
    },
    0.04,
  );
  timeline.to(
    select(".home-intro-orbit-tip"),
    { opacity: 1, duration: 0.12 },
    0.04,
  );
  timeline.to(
    select(".home-intro-orbit-thread"),
    { opacity: 0.42, duration: 0.5 },
    writeStart + 0.35,
  );
  timeline.to(
    select(".home-intro-orbit-nodes"),
    { opacity: 0.7, duration: 0.4 },
    chargeAt - 0.4,
  );
  timeline.to(
    select(".home-intro-orbit-body"),
    {
      scale: 0.58,
      rotation: 18,
      duration: releaseAt - chargeAt,
      ease: "power3.in",
    },
    chargeAt,
  );
  timeline.to(
    select(".home-intro-orbit-body"),
    { scale: 0.25, opacity: 0, duration: 0.2, ease: "power3.in" },
    releaseAt,
  );
  timeline.fromTo(
    select(".home-intro-orbit-wave"),
    { scale: 0.58, opacity: 0.9 },
    { scale: 3.4, opacity: 0, duration: 0.72, ease: "expo.out" },
    releaseAt + 0.04,
  );
  timeline.to(
    select(".home-intro-bloom"),
    { opacity: 0.18, duration: 0.7, ease: "sine.out" },
    writeStart,
  );
  timeline.to(
    select(".home-intro-bloom"),
    {
      opacity: 0.68,
      scale: 0.75,
      duration: releaseAt - chargeAt,
      ease: "power2.in",
    },
    chargeAt,
  );
  timeline.to(
    select(".home-intro-bloom"),
    { opacity: 0, scale: 1.6, duration: 0.55, ease: "expo.out" },
    releaseAt + 0.08,
  );
  timeline.fromTo(
    select(".home-intro-flare"),
    { scaleX: 0.12, opacity: 0 },
    { scaleX: 1.15, opacity: 0.85, duration: 0.12, ease: "power3.out" },
    releaseAt,
  );
  timeline.to(
    select(".home-intro-flare"),
    { opacity: 0, scaleX: 1.65, duration: 0.42, ease: "power2.out" },
    releaseAt + 0.12,
  );
}
