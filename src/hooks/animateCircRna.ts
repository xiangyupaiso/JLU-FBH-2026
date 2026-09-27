import gsap from "gsap";

// Keep the original composition still; let the painted ring lead the reading.
export function animateCircRna(
  section: HTMLElement,
  timeline: gsap.core.Timeline,
) {
  const find = (selector: string) => section.querySelector(selector);
  const stroke = find(".story-paint-stroke");
  const complete = find(".story-paint-complete");
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
      { opacity: 0.15 },
      { opacity: 1, duration: 0.34, ease: "sine.inOut" },
      0.26 + index * 0.15,
    );
  });
  timeline.fromTo(
    find(".circrna-caption"),
    { opacity: 0 },
    { opacity: 0.75, duration: 0.24, ease: "sine.inOut" },
    0.58,
  );
}
