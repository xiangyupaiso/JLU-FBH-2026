import gsap from "gsap";

// Keep the original composition still; let the painted ring lead the reading.
// DUPLICATE: this stroke draw + complete fade mirrors paint() in
// useHomeStoryAnimation.ts (also the rays in its "our-platform" case). Keep the
// timing in step if you change one. The literal "sine.inOut" here equals
// HOME_EASE in homeMotion.ts.
export function animateCircRna(
  section: HTMLElement,
  timeline: gsap.core.Timeline,
) {
  const find = (selector: string) => section.querySelector(selector);
  const stroke = find(".story-paint-stroke");
  const complete = find(".story-paint-complete");
  timeline.fromTo(find('[data-layer="2"]'),
    { opacity: 0.35, y: 12 },
    { opacity: 1, y: 0, duration: 0.26, ease: "sine.inOut" }, 0);
  gsap.set(stroke, {
    attr: { "stroke-dasharray": "1 1", "stroke-dashoffset": 1 },
  });
  gsap.set(complete, { opacity: 0 });
  timeline.to(
    stroke,
    { attr: { "stroke-dashoffset": 0 }, duration: 0.52, ease: "sine.inOut" },
    0,
  );
  timeline.to(
    complete,
    { opacity: 1, duration: 0.14, ease: "sine.inOut" },
    0.4,
  );
  timeline.fromTo(
    find('[data-layer="3"]'),
    { opacity: 0.25 },
    { opacity: 1, duration: 0.35, ease: "sine.inOut" },
    0.15,
  );
  section.querySelectorAll("[data-circrna-sketch]").forEach((sketch, index) => {
    timeline.fromTo(
      sketch,
      { opacity: 0.15, y: 8 },
      { opacity: 1, y: 0, duration: 0.34, ease: "sine.inOut" },
      0.26 + index * 0.15,
    );
  });
  timeline.fromTo(
    find(".circrna-caption"),
    { opacity: 0, y: 10, filter: "blur(2px)" },
    { opacity: 0.75, y: 0, filter: "blur(0px)", duration: 0.24, ease: "sine.inOut" },
    0.58,
  );
}
