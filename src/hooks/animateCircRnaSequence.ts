import gsap from "gsap";
import type { SplitText } from "gsap/SplitText";
import { animateCircRna } from "./animateCircRna";
import { HOME_EASE, HOME_SCRUB } from "./homeMotion";
import { createRnaRingMorph } from "./createRnaRingMorph";
import { animatePlatformAntigen } from "./animatePlatformAntigen";

const smooth = (from: number, to: number, value: number) => {
  const p = gsap.utils.clamp(0, 1, (value - from) / (to - from));
  return p * p * (3 - 2 * p);
};

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
  const transfer = { progress: 0 };
  const morph = createRnaRingMorph(
    stage,
    ring,
    targetRing,
    compact,
    drawTransfer,
  );
  cleanups.push(morph.dispose);
  function drawTransfer() {
    const p = transfer.progress;
    const ready = morph.render(p);
    gsap.set(ring, {
      opacity: ready && p > 0 ? 0 : 1 - smooth(0.82, 1, p),
    });
    gsap.set(targetRing, {
      opacity: ready ? (p >= 1 ? 1 : 0) : smooth(0.82, 1, p),
    });
  }

  // fan-3 is 611 x 833 with 450 transparent rows above the circle. Its red
  // outer edge fits a circle centred at (306.009, 757.002), diameter 605.599.
  // Match the visible paint, including the part below the original canvas.
  const destination = () => {
    const source = ring.getBoundingClientRect();
    const target = targetRing.getBoundingClientRect();
    const width =
      source.width / (Number(gsap.getProperty(ring, "scaleX")) || 1);
    const height =
      source.height / (Number(gsap.getProperty(ring, "scaleY")) || 1);
    const centerX =
      source.left + source.width / 2 - Number(gsap.getProperty(ring, "x"));
    const centerY =
      source.top + source.height / 2 - Number(gsap.getProperty(ring, "y"));
    return {
      x: target.left + target.width * (306.009 / 611) - centerX,
      y: target.top + target.height * (757.002 / 833) - centerY,
      scaleX: (target.width * (605.599 / 611)) / width,
      scaleY: (target.height * (605.599 / 833)) / height,
    };
  };
  const timeline = gsap.timeline({
    defaults: { ease: HOME_EASE },
    scrollTrigger: {
      id: "home-circrna-platform",
      trigger: track,
      start: "top top",
      end: "bottom bottom",
      scrub: compact ? 0.5 : HOME_SCRUB,
      invalidateOnRefresh: true,
      onUpdate: ({ progress, isActive }) => {
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
  timeline.fromTo(
    ring,
    { x: 0, y: 0, scaleX: 1, scaleY: 1 },
    {
      x: () => destination().x,
      y: () => destination().y,
      scaleX: () => destination().scaleX,
      scaleY: () => destination().scaleY,
      duration: 1.25,
      ease: "power2.inOut",
    },
    1.35,
  );

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
  // Establish the complete original painting before guiding attention through
  // its four regions. Whole notes stay horizontal and keep their fixed layout.
  timeline.to(sectors, { opacity: 0.38, duration: 0.3 }, 2.4);
  timeline.to(notes, { opacity: 0.4, duration: 0.3 }, 2.4);
  sectors.forEach((sector, index) => {
    const at = 3 + index * 0.55;
    if (index > 0) {
      timeline.to(sectors[index - 1], { opacity: 0.38, duration: 0.2 }, at);
      timeline.to(notes[index - 1], { opacity: 0.4, duration: 0.2 }, at);
    }
    timeline.to(sector, { opacity: 1, duration: 0.2 }, at);
    timeline.to(notes[index], { opacity: 1, duration: 0.2 }, at);
  });
  // Restore the complete research figure and leave a stable reading frame.
  timeline.to([...sectors, ...notes], { opacity: 1, duration: 0.3 }, 5.2);
  timeline.to({}, { duration: 0.65 }, 5.5);
  cleanups.push(
    animatePlatformAntigen(sequence, targetRing, timeline, compact),
  );
  return timeline;
}
