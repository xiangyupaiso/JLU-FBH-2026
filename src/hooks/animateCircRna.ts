import gsap from "gsap";

// The gallery carries a complete ring here; the remaining artwork follows it.
export function animateCircRna(
  section: HTMLElement,
  timeline: gsap.core.Timeline,
) {
  const find = (selector: string) => section.querySelector(selector);
  const stroke = find(".story-paint-stroke");
  const complete = find(".story-paint-complete");
  gsap.set(stroke, {
    attr: { "stroke-dasharray": "1 1", "stroke-dashoffset": 0 },
  });
  gsap.set(complete, { opacity: 1 });
  timeline.fromTo(
    find(".story-backdrop"),
    { opacity: 0 },
    { opacity: 1, duration: 0.38, ease: "sine.inOut" },
    0,
  );
  timeline.fromTo(
    find('[data-layer="2"]'),
    { opacity: 0, y: 10 },
    { opacity: 1, y: 0, duration: 0.32, ease: "sine.inOut" },
    0.02,
  );
  timeline.fromTo(
    find('[data-layer="3"]'),
    { opacity: 0 },
    { opacity: 1, duration: 0.35, ease: "sine.inOut" },
    0.38,
  );
  section.querySelectorAll("[data-circrna-sketch]").forEach((sketch, index) => {
    timeline.fromTo(
      sketch,
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.34, ease: "sine.inOut" },
      0.5 + index * 0.15,
    );
  });
  timeline.fromTo(
    find(".circrna-caption"),
    { opacity: 0, y: 10, filter: "blur(2px)" },
    {
      opacity: 0.75,
      y: 0,
      filter: "blur(0px)",
      duration: 0.24,
      ease: "sine.inOut",
    },
    0.82,
  );
}
