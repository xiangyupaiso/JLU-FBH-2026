import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { SplitText } from "gsap/SplitText";
import { animateCircRna } from "./animateCircRna";
import {
  HOME_EASE,
  HOME_SCRUB,
  settleHomeScrubEndpoint,
  stillHold,
} from "./homeMotion";
import { createRnaRingMorph } from "./createRnaRingMorph";
import { animatePlatformAntigen } from "./animatePlatformAntigen";

// Retain the original scroll budget when shortening the finished-frame hold.
const FIGURE_END = 5.5;
const FIGURE_REST = 0.65;

export function animateCircRnaSequence(
  sequence: HTMLElement,
  compact: boolean,
  _splits: ReturnType<typeof SplitText.create>[],
  cleanups: (() => void)[],
) {
  const rna = sequence.querySelector<HTMLElement>("#why-circrna")!;
  const platform = sequence.querySelector<HTMLElement>("#our-platform")!;
  const stage = sequence.querySelector<HTMLElement>(
    ".story-rna-sequence-stage",
  )!;
  const track = sequence.querySelector<HTMLElement>(
    ".story-rna-sequence-track",
  )!;
  const ring = rna.querySelector<SVGElement>('[data-layer="4"]')!;
  const targetRing =
    platform.querySelector<HTMLImageElement>('[data-layer="3"]')!;
  gsap.set(ring, { x: 0, y: 0, scaleX: 1, scaleY: 1 });
  const transfer = { progress: 0 };
  let transitionActive = false;
  let usePaintedRing = false;
  let refreshing = false;
  const beginRefresh = () => { refreshing = true; };
  const endRefresh = () => { refreshing = false; };
  ScrollTrigger.addEventListener("refreshInit", beginRefresh);
  ScrollTrigger.addEventListener("refresh", endRefresh);
  const morph = createRnaRingMorph(
    stage,
    ring,
    targetRing,
    compact,
    drawTransfer,
  );
  cleanups.push(morph.dispose);
  cleanups.push(() => {
    ScrollTrigger.removeEventListener("refreshInit", beginRefresh);
    ScrollTrigger.removeEventListener("refresh", endRefresh);
  });
  function drawTransfer() {
    const p = transfer.progress;
    const active = p > 0 && p < 1;
    // Keep one route for the whole pass when a texture finishes decoding late.
    if (!refreshing) {
      if (!active || !transitionActive) usePaintedRing = morph.render(0);
      transitionActive = active;
    }
    const ready = morph.render(p, usePaintedRing);
    // Both renderers carry one visible ring to the same endpoint. A late
    // texture must not turn the end of the flight into an opacity dissolve.
    gsap.set(ring, {
      opacity: (ready && p > 0) || p >= 1 ? 0 : 1,
    });
    gsap.set(targetRing, {
      opacity: p >= 1 ? 1 : 0,
    });
  }
  // Use one short finished-frame hold before the antigen carry. Scale its
  // track with the duration so the figure still reveals at the same speed.
  const range = track.offsetHeight - window.innerHeight;
  let figureRest = FIGURE_REST;
  // Home can still be hidden under its loader. Keep the CSS track until the
  // preparation rebuild can measure it instead of freezing its height at zero.
  if (range > 0 && Number.isFinite(range)) {
    const hold = stillHold(range, FIGURE_REST / FIGURE_END);
    figureRest = FIGURE_END * hold.rest;
    gsap.set(track, { height: window.innerHeight + range * hold.scale });
  }
  const timeline = gsap.timeline({
    defaults: { ease: HOME_EASE },
    scrollTrigger: {
      id: "home-circrna-platform",
      trigger: track,
      start: "top top",
      end: "bottom bottom",
      scrub: HOME_SCRUB,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        settleHomeScrubEndpoint(self);
        const { progress, isActive } = self;
        rna.classList.toggle("is-current", isActive && progress < 0.42);
        platform.classList.toggle("is-current", isActive && progress >= 0.42);
      },
    },
  });
  animateCircRna(rna, timeline);
  const paper = rna.querySelector(".story-backdrop");
  const outgoing = rna.querySelectorAll(
    '[data-layer="2"], [data-layer="3"], .circrna-benefit-art, .circrna-caption',
  );
  gsap.set(platform.querySelector(".story-backdrop"), { opacity: 0 });
  gsap.set(platform.querySelectorAll(".story-layer, [data-platform-note]"), {
    opacity: 0,
  });
  timeline.to(outgoing, { opacity: 0, duration: 0.65 }, 1.3);
  timeline.to(paper, { opacity: 0, duration: 1.1 }, 1.3);
  timeline.to(stage, { backgroundColor: "#fff4e2", duration: 1.1 }, 1.3);
  // Carry one solid ring: pigment, stroke width and the incoming original
  // artwork change together along a curved route. Native images keep the
  // transition usable while the two texture plates are decoding.
  timeline.fromTo(
    transfer,
    { progress: 0 },
    {
      progress: 1,
      duration: 1.65,
      ease: "none",
      onUpdate: drawTransfer,
    },
    1.25,
  );
  timeline.to(
    platform.querySelector(".story-backdrop"),
    { opacity: 1, duration: 0.8 },
    2.15,
  );
  [8, 2].forEach((number, index) => {
    timeline.fromTo(
      platform.querySelector(`[data-layer="${number}"]`),
      { opacity: 0, y: index ? 0 : 8 },
      { opacity: 1, y: 0, duration: 0.65 },
      1.9 + index * 0.26,
    );
  });
  const sectors = [6, 4, 5, 7].map((number) =>
    platform.querySelector<HTMLElement>(`[data-layer="${number}"]`)!,
  );
  const notes = ["mechanism", "design", "structure", "beyond"].map((key) =>
    platform.querySelector<HTMLElement>(`[data-platform-note="${key}"]`)!,
  );
  gsap.set([...sectors, ...notes], { autoAlpha: 0 });
  // Each advantage appears in its original position and stays, so the
  // complete research figure builds up one region at a time.
  sectors.forEach((sector, index) => {
    const at = 3 + index * 0.55;
    timeline.to([sector, notes[index]], { autoAlpha: 1, duration: 0.2 }, at);
  });
  timeline.addLabel("advantages-readable", FIGURE_END);
  timeline.to({}, { duration: figureRest }, FIGURE_END);
  cleanups.push(
    animatePlatformAntigen(sequence, targetRing, timeline, compact),
  );
  return timeline;
}
