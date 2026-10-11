import gsap from "gsap";

// The patient's question leads into a concise marker-by-marker explanation.
export function animateTnbcReading(
  copy: HTMLElement,
  cleanups: (() => void)[],
) {
  const title = copy.querySelector<HTMLElement>("h2")!;
  const paragraphs = [...copy.querySelectorAll<HTMLElement>(".story-body > p")];
  const receptors = copy.querySelector<HTMLElement>(".story-receptors")!;
  const receptorLabels = [...receptors.querySelectorAll<HTMLElement>("span")];
  const diagram = copy.querySelector<HTMLElement>(".tnbc-diagram")!;
  const layer = (name: string) =>
    diagram.querySelector<HTMLImageElement>(`[data-tnbc-layer="${name}"]`)!;
  const cellLayers = ["outline", "cytoplasm", "nucleus", "markers"].map(layer);
  const negativeLayers = [
    layer("negative-upper"),
    layer("negative-middle"),
    layer("negative-lower"),
  ];

  // Preserve searchable phrases that cross emphasis or receptor sign nodes.
  [title, ...receptorLabels].forEach((element) => {
    const original = element.getAttribute("data-home-reading-text");
    element.dataset.homeReadingText = "";
    cleanups.push(() => {
      if (original === null) delete element.dataset.homeReadingText;
      else element.setAttribute("data-home-reading-text", original);
    });
  });
  const reading = gsap.timeline({
    scrollTrigger: {
      id: "home-why-tnbc-reading",
      trigger: copy,
      start: "top 85%",
      end: "bottom 65%",
      scrub: 0.22,
      invalidateOnRefresh: true,
    },
  });

  // The short cell build and the three marks stay tied to their nearby copy.
  const cell = gsap.timeline({
    scrollTrigger: {
      trigger: diagram,
      start: "top 90%",
      end: "top 48%",
      scrub: 0.22,
      invalidateOnRefresh: true,
    },
  });
  cell.fromTo(
    diagram,
    { opacity: 0, y: 10, scale: 0.98 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.34,
      ease: "sine.out",
    },
    0,
  );
  cellLayers.forEach((image, index) => {
    cell.fromTo(
      image,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.3,
        ease: "sine.out",
      },
      0.08 + index * 0.14,
    );
  });

  const marks = gsap.timeline({
    scrollTrigger: {
      trigger: receptors,
      start: "top 90%",
      end: "top 52%",
      scrub: 0.22,
      invalidateOnRefresh: true,
    },
  });
  receptorLabels.forEach((label, index) => {
    const at = index * 0.24;
    marks.fromTo(
      label,
      { opacity: 0, y: 6 },
      {
        opacity: 1,
        y: 0,
        duration: 0.32,
        ease: "sine.out",
      },
      at,
    );
    marks.fromTo(
      negativeLayers[index],
      { opacity: 0, y: -5 },
      {
        opacity: 1,
        y: 0,
        duration: 0.26,
        ease: "sine.out",
      },
      at + 0.08,
    );
  });
  paragraphs.forEach((paragraph) => {
    gsap.fromTo(
      paragraph,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: "sine.out",
        scrollTrigger: {
          trigger: paragraph,
          start: "top 115%",
          end: "top 96%",
          scrub: 0.18,
          invalidateOnRefresh: true,
        },
      },
    );
  });
  reading.to({}, { duration: 1 });
  return reading;
}
