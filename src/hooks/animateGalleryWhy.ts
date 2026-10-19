import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const whyRingTexture = "https://static.igem.wiki/teams/6056/wiki/files/pages/home/scene-1-layer-4.webp";
import {
  HOME_EASE,
  HOME_SCRUB,
  isHomeMotionRefreshing,
  settleHomeScrubEndpoint,
} from "./homeMotion";
import { animateThinkingGallery } from "./animateThinkingGallery";

type Bounds = { left: number; top: number; width: number; height: number };
const GALLERY_RING_OPACITY = 0.64;
const GALLERY_RING_TONE = "saturate(0.72) brightness(1.06)";

// The incoming ring later moves to the platform, so measure its untransformed
// position even while that earlier timeline is settling during reverse scroll.
function baseBounds(ring: SVGElement): Bounds {
  const rect = ring.getBoundingClientRect();
  const scaleX = Number(gsap.getProperty(ring, "scaleX")) || 1;
  const scaleY = Number(gsap.getProperty(ring, "scaleY")) || 1;
  const width = rect.width / scaleX;
  const height = rect.height / scaleY;
  return {
    left:
      rect.left -
      Number(gsap.getProperty(ring, "x")) +
      (rect.width - width) / 2,
    top:
      rect.top -
      Number(gsap.getProperty(ring, "y")) +
      (rect.height - height) / 2,
    width,
    height,
  };
}

export function animateGalleryWhy(root: HTMLElement, compact: boolean) {
  const gallery = root.querySelector<HTMLElement>("#molecule-gallery")!;
  const cards = Array.from(
    gallery.querySelectorAll<HTMLElement>(".home-molecule-gallery__card"),
  );
  const chosen = gallery.querySelector<HTMLElement>(
    ".home-molecule-gallery__card--chosen",
  )!;
  const alternatives = cards.filter((card) => card !== chosen);
  const decision = gallery.querySelector<HTMLElement>(
    ".home-molecule-gallery__decision",
  )!;
  const source = chosen.querySelector<SVGSVGElement>("[data-gallery-ring]")!;
  const stage = gallery.querySelector<HTMLElement>(
    ".home-molecule-gallery__stage",
  )!;
  const target = root.querySelector<SVGSVGElement>(
    '#why-circrna [data-layer="4"]',
  )!;
  const whyTrack = root.querySelector<HTMLElement>(
    ".story-rna-sequence-track",
  )!;
  const stacked =
    compact && !window.matchMedia("(min-aspect-ratio: 4/5)").matches;
  const artwork = gallery.querySelector<HTMLElement>(
    ".home-molecule-gallery__artwork",
  )!;
  const selectedScale = 1.045;
  const decisionY = () => {
    // Follow the selected card's final layout, including its centered scale.
    // Layout offsets stay stable while the scrubbed transforms run or reverse.
    const cardBottom =
      artwork.offsetTop +
      chosen.offsetTop +
      chosen.offsetHeight * ((stacked ? 0.5 : 1) + (selectedScale - 1) / 2);
    const gap = gsap.utils.clamp(24, 36, window.innerHeight * 0.035);
    return cardBottom + gap - decision.offsetTop;
  };
  const detailLayers = cards.flatMap((card) =>
    Array.from(
      card.querySelectorAll<SVGElement>(
        '[data-gallery-layer="symbols"], [data-gallery-layer="labels"]',
      ),
    ),
  );

  // A staggered fromTo only initializes the first target immediately. Set all
  // layers before creating the timeline so the entering edge has one state.
  gsap.set(cards, { autoAlpha: 0, y: compact ? 10 : 16 });
  gsap.set(detailLayers, { opacity: 0 });
  gsap.set(source, { opacity: 0, filter: GALLERY_RING_TONE });
  gsap.set(decision, { opacity: 0 });
  const title = gallery.querySelector<HTMLElement>(
    ".home-molecule-gallery__title",
  )!;
  gsap.set(title, { autoAlpha: 0 });

  const intro = gsap.timeline({
    scrollTrigger: {
      id: "home-molecule-gallery-intro",
      trigger: gallery,
      start: "top bottom",
      end: "bottom bottom",
      scrub: compact ? 0.42 : HOME_SCRUB,
      invalidateOnRefresh: true,
      onUpdate: settleHomeScrubEndpoint,
    },
  });
  intro.fromTo(
    stage,
    { backgroundColor: "#f0f3fd" },
    { backgroundColor: "#fff4e2", duration: 0.48, ease: HOME_EASE },
    0,
  );
  intro.addLabel("choices-enter", 0.14);
  cards.forEach((card, index) => {
    // Finish each complete card before the next starts, including during the
    // incoming fixed-stage carry. Keep all four ready at choices-visible.
    const at = intro.labels["choices-enter"] + index * 0.16;
    intro.to(card, { autoAlpha: 1, y: 0, duration: 0.14, ease: HOME_EASE }, at);
    const symbols = card.querySelector(
      '[data-gallery-layer="symbols"], [data-gallery-ring]',
    );
    if (symbols) {
      intro.to(
        symbols,
        {
          opacity: card === chosen ? GALLERY_RING_OPACITY : 1,
          duration: 0.12,
          ease: HOME_EASE,
        },
        at + 0.02,
      );
    }
    intro.to(
      card.querySelectorAll('[data-gallery-layer="labels"]'),
      { opacity: 1, duration: 0.12, ease: HOME_EASE },
      at + 0.02,
    );
  });
  intro.to(title, { autoAlpha: 1, duration: 0.12, ease: HOME_EASE }, 0.02);
  intro.addLabel("choices-visible", 0.76);
  intro.to(
    alternatives,
    {
      autoAlpha: 0,
      y: -8,
      stagger: 0.025,
      duration: 0.36,
      ease: HOME_EASE,
    },
    0.96,
  );
  intro.to(title, { autoAlpha: 0, duration: 0.36, ease: HOME_EASE }, 0.96);
  intro.to(
    chosen,
    {
      xPercent: stacked ? 50 : -50,
      yPercent: stacked ? -50 : 0,
      scale: selectedScale,
      duration: 0.48,
      ease: HOME_EASE,
    },
    0.96,
  );
  intro.fromTo(
    decision,
    { opacity: 0, y: () => decisionY() + 12 },
    { opacity: 1, y: decisionY, duration: 0.3, ease: HOME_EASE },
    1.4,
  );
  intro.addLabel("circ-selected", 1.74);
  intro.to({}, { duration: 0.12 }, 1.76);
  const cleanupThinking = animateThinkingGallery(root, intro, compact);

  const surface = document.createElement("div");
  surface.className = "home-gallery-surface-transfer";
  surface.setAttribute("aria-hidden", "true");
  const tint = document.createElement("div");
  tint.className = "home-gallery-surface-tint";
  surface.append(tint);
  document.body.append(surface);

  const ghost = source.cloneNode(true) as SVGSVGElement;
  ghost.removeAttribute("style");
  ghost.removeAttribute("data-gallery-ring");
  ghost.classList.add("home-gallery-ring-transfer");
  ghost.setAttribute("aria-hidden", "true");
  const outgoingPaint = ghost.querySelector<SVGImageElement>("image")!;
  outgoingPaint.style.filter = GALLERY_RING_TONE;
  const incomingPaint = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "image",
  );
  const crop = source.viewBox.baseVal;
  incomingPaint.setAttribute("href", whyRingTexture);
  incomingPaint.setAttribute("x", String(crop.x));
  incomingPaint.setAttribute("y", String(crop.y));
  incomingPaint.setAttribute("width", String(crop.width));
  incomingPaint.setAttribute("height", String(crop.height));
  incomingPaint.setAttribute("preserveAspectRatio", "none");
  incomingPaint.style.opacity = "0";
  ghost.append(incomingPaint);
  document.body.append(ghost);

  const cardCopy = chosen.cloneNode(true) as HTMLElement;
  cardCopy.removeAttribute("style");
  cardCopy.querySelector("[data-gallery-ring]")?.remove();
  // This clone is made before the detail reveal runs. Keep its label painted
  // during handoff instead of carrying the timeline's initial opacity: 0.
  cardCopy
    .querySelectorAll<SVGElement>('[data-gallery-layer="labels"]')
    .forEach((label) => {
      label.style.opacity = "1";
    });
  cardCopy.classList.add("home-gallery-card-transfer");
  cardCopy.setAttribute("aria-hidden", "true");
  document.body.append(cardCopy);

  const decisionCopy = decision.cloneNode(true) as HTMLElement;
  decisionCopy.removeAttribute("style");
  decisionCopy.classList.add("home-gallery-decision-transfer");
  decisionCopy.setAttribute("aria-hidden", "true");
  document.body.append(decisionCopy);

  const ease = gsap.parseEase(HOME_EASE);
  const whyStart = () => whyTrack.getBoundingClientRect().top + window.scrollY;
  type Geometry = {
    fromX: number;
    fromY: number;
    fromWidth: number;
    fromHeight: number;
    toX: number;
    toY: number;
    toWidth: number;
    toHeight: number;
  };
  let geometry: Geometry | undefined;
  let measuredAt: { end: number; width: number; height: number } | undefined;
  let crossedIntoBridge = false;
  let drawnScroll = Number.NaN;
  let drawnProgress = -1;
  let refreshPending = false;
  let bridgeStart = Number.NaN;
  const measure = (galleryEnd: number): Geometry => {
    const scroll = window.scrollY;
    const sourceShift = Math.max(0, scroll - (galleryEnd - window.innerHeight));
    const card = chosen.getBoundingClientRect();
    const copy = decision.getBoundingClientRect();
    const from = source.getBoundingClientRect();
    const to = baseBounds(target);
    const geometry = {
      fromX: from.left,
      fromY: from.top + sourceShift,
      fromWidth: from.width,
      fromHeight: from.height,
      toX: to.left,
      toY: to.top - Math.max(0, galleryEnd - scroll),
      toWidth: to.width,
      toHeight: to.height,
    };
    gsap.set(cardCopy, {
      autoRound: false,
      x: card.left,
      y: card.top + sourceShift,
      width: card.width,
      height: card.height,
    });
    gsap.set(ghost, {
      autoRound: false,
      width: from.width,
      height: from.height,
    });
    gsap.set(decisionCopy, {
      x: copy.left,
      y: copy.top + sourceShift,
      width: copy.width,
    });
    return geometry;
  };
  const prepare = () => {
    if (!crossedIntoBridge) {
      crossedIntoBridge = true;
      // Complete the gallery's resting frame before measuring its outgoing ring.
      intro.scrollTrigger?.getTween()?.progress(1);
      intro.progress(1);
    }
  };
  const smooth = (from: number, to: number, value: number) =>
    ease(gsap.utils.clamp(0, 1, (value - from) / (to - from)));
  const draw = () => {
    if (isHomeMotionRefreshing()) return;
    const scroll = window.scrollY;
    // ScrollTrigger and native scrolling can request the same frame. Paint it
    // once, without reading layout again after the first pass's style writes.
    if (scroll === drawnScroll) return;
    drawnScroll = scroll;
    // The preceding pinned scenes can change their spacing after load. Read
    // the visible section boundary, not a cached ScrollTrigger progress.
    const galleryBottom = gallery.getBoundingClientRect().bottom;
    const galleryEnd = galleryBottom + scroll;
    const needsMeasure =
      !geometry ||
      !measuredAt ||
      Math.abs(measuredAt.end - galleryEnd) > 1 ||
      measuredAt.width !== window.innerWidth ||
      measuredAt.height !== window.innerHeight;
    // The next track directly follows the gallery. Reuse this boundary read
    // instead of measuring both chapters again after painting the frame.
    if (
      galleryBottom > -window.innerHeight &&
      galleryBottom < window.innerHeight * 2 &&
      Math.abs(bridgeStart - (galleryEnd - window.innerHeight)) > 2
    )
      refreshPending = true;
    const p = gsap.utils.clamp(
      0,
      1,
      (scroll + window.innerHeight - galleryEnd) / window.innerHeight,
    );
    // Prepare fixed layers during the finished selection's reading beat, so
    // their first dimensions are not written at the start of the flight.
    const warm =
      p === 0 &&
      intro.time() >= intro.labels["circ-selected"] &&
      galleryBottom < window.innerHeight * 1.4;
    if (needsMeasure && (warm || (p > 0 && p < 1))) {
      if (p > 0) prepare();
      geometry = measure(galleryEnd);
      measuredAt = {
        end: galleryEnd,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    }
    if (p === drawnProgress && (p === 0 || p === 1 || !needsMeasure)) return;
    drawnProgress = p;
    ghost.dataset.progress = String(p);
    const arrived = p >= 1 - 0.0001;
    const travelling = p > 0 && !arrived;
    // Blend on one isolated surface. An inherited variable on the whole Home
    // tree would invalidate thousands of descendant styles on every frame.
    surface.style.visibility = travelling ? "visible" : "hidden";
    if (travelling) {
      tint.style.opacity = String(smooth(0, 1, p));
    }
    if (p > 0) prepare();
    else if (crossedIntoBridge) {
      // The opaque carry surface masks native artwork without hiding it or
      // overriding its timeline. Return directly to its actual scroll frame,
      // including an earlier choice reached through the scene picker.
      intro.scrollTrigger?.getTween()?.progress(1);
      crossedIntoBridge = false;
    }

    cardCopy.style.visibility = travelling ? "visible" : "hidden";
    decisionCopy.style.visibility = travelling ? "visible" : "hidden";
    ghost.style.visibility = travelling ? "visible" : "hidden";
    // Native SVG layers stay prepared behind the surface. Only the carried
    // copies are visible above it, so ownership never rewinds either chapter.
    if (travelling) {
      gsap.set(decisionCopy, {
        opacity: 1 - smooth(0, 0.25, p),
      });
      gsap.set(cardCopy, { opacity: 1 - smooth(0.08, 0.5, p) });
    }
    if (!travelling || !geometry) return;
    const pigment = smooth(0.04, 0.96, p);
    // Deepen the colour throughout the carry; blend the two close paintings
    // near arrival so their slightly different edges never read as two rings.
    const texture = smooth(0.62, 0.9, p);
    gsap.set(outgoingPaint, { opacity: 1 - texture });
    gsap.set(incomingPaint, { opacity: texture });
    const { fromX, fromY, fromWidth, fromHeight, toX, toY, toWidth, toHeight } =
      geometry;
    const travel = ease(p);
    gsap.set(ghost, {
      x: gsap.utils.interpolate(fromX, toX, travel),
      y: gsap.utils.interpolate(fromY, toY, travel),
      scaleX: gsap.utils.interpolate(1, toWidth / fromWidth, travel),
      scaleY: gsap.utils.interpolate(1, toHeight / fromHeight, travel),
      opacity: GALLERY_RING_OPACITY + (1 - GALLERY_RING_OPACITY) * pigment,
    });
  };
  const bridge = ScrollTrigger.create({
    id: "home-gallery-why-ring",
    trigger: gallery,
    // Carry the ring only while the old scene leaves and the Why scene enters.
    start: () => whyStart() - window.innerHeight,
    end: whyStart,
    invalidateOnRefresh: true,
    onUpdate: draw,
    onRefresh: (self) => {
      geometry = undefined;
      drawnScroll = Number.NaN;
      bridgeStart = self.start;
    },
  });
  let frame = 0;
  const refreshAnchor = () => {
    if (!refreshPending || isHomeMotionRefreshing()) return;
    refreshPending = false;
    if (Math.abs(bridge.start - (whyStart() - window.innerHeight)) > 2) {
      bridge.refresh();
      draw();
    }
  };
  const onRefresh = () => {
    refreshPending = false;
    geometry = undefined;
    drawnScroll = Number.NaN;
    draw();
  };
  const onScroll = () => {
    if (frame) return;
    frame = window.requestAnimationFrame(() => {
      frame = 0;
      if (isHomeMotionRefreshing()) return;
      draw();
    });
  };
  intro.eventCallback("onUpdate", () => {
    // Scrub may finish after native scrolling stops. Warm the fixed layers
    // then as well, rather than waiting for the first departing scroll frame.
    if (
      !geometry &&
      !crossedIntoBridge &&
      drawnProgress === 0 &&
      intro.time() >= intro.labels["circ-selected"]
    ) {
      drawnScroll = Number.NaN;
      onScroll();
    }
  });
  window.addEventListener("scroll", onScroll, { passive: true });
  ScrollTrigger.addEventListener("scrollEnd", refreshAnchor);
  ScrollTrigger.addEventListener("refresh", onRefresh);
  draw();

  return () => {
    cleanupThinking();
    window.removeEventListener("scroll", onScroll);
    ScrollTrigger.removeEventListener("scrollEnd", refreshAnchor);
    ScrollTrigger.removeEventListener("refresh", onRefresh);
    window.cancelAnimationFrame(frame);
    intro.kill();
    bridge.kill();
    gsap.set([...cards, decision], { clearProps: "opacity,transform" });
    gsap.set(detailLayers, { clearProps: "opacity" });
    gsap.set(stage, { clearProps: "backgroundColor" });
    gsap.set(source, { clearProps: "opacity,filter" });
    cardCopy.remove();
    decisionCopy.remove();
    ghost.remove();
    surface.remove();
  };
}
