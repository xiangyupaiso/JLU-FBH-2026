import gsap from "gsap";

// Keep the clinical explanation quiet while the map retains its own choreography.
export function animateTnbcReading(
  copy: HTMLElement,
  section: HTMLElement,
  compact: boolean,
  cleanups: (() => void)[],
) {
  const title = copy.querySelector<HTMLElement>("h2")!;
  const paragraphs = [...copy.querySelectorAll<HTMLElement>(".story-body > p")];
  const receptors = copy.querySelector<HTMLElement>(".story-receptors")!;
  const source = copy.querySelector<HTMLElement>(".story-source")!;
  // Preserve searchable phrases that cross emphasis or receptor sign nodes.
  [title, ...receptors.querySelectorAll<HTMLElement>("span")].forEach((element) => {
    const original = element.getAttribute("data-home-reading-text");
    element.dataset.homeReadingText = "";
    cleanups.push(() => {
      if (original === null) delete element.dataset.homeReadingText;
      else element.setAttribute("data-home-reading-text", original);
    });
  });
  const headerHeight = Number.parseFloat(getComputedStyle(section).getPropertyValue("--header-height")) || 0;
  const fits = !compact && copy.offsetHeight <= window.innerHeight - headerHeight + 2;
  const reading = gsap.timeline({
    scrollTrigger: {
      id: "home-why-tnbc-reading", trigger: copy,
      start: fits ? `top top+=${headerHeight}` : "top 85%",
      end: () => fits ? `+=${Math.round(window.innerHeight * 1.4)}` : "bottom 65%",
      pin: fits, scrub: 0.22, invalidateOnRefresh: true,
    },
  });

  if (!fits) {
    // Each paragraph enters within its own viewport, including at browser zoom.
    paragraphs.forEach((paragraph) => {
      gsap.fromTo(paragraph, { opacity: 0, y: 6 }, {
        opacity: 1, y: 0, duration: 1, ease: "sine.out",
        scrollTrigger: {
          trigger: paragraph, start: "top 92%", end: "top 78%",
          scrub: 0.18, invalidateOnRefresh: true,
        },
      });
    });
    reading.to({}, { duration: 1 });
    return reading;
  }

  const beats = [title, paragraphs[0], receptors, ...paragraphs.slice(1)];
  beats.forEach((element, index) => {
    // Return to the patient's question after the clinical explanation settles.
    const at = index * 0.22 + (element.hasAttribute("data-tnbc-callback") ? 0.24 : 0);
    reading.fromTo(element, { opacity: 0, y: 8 }, {
      opacity: 1, y: 0, duration: 0.42, ease: "sine.out",
    }, at);
  });
  // Sources remain visible and keyboard reachable throughout the reading.
  gsap.set(source, { opacity: 1 });
  reading.addLabel("reading-complete");
  reading.to({}, { duration: reading.duration() * 0.8 });
  copy.dataset.readingHold = String(1 / 1.8);
  cleanups.push(() => delete copy.dataset.readingHold);
  return reading;
}
