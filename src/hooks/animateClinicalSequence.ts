import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HOME_EASE, HOME_SCRUB, stillHold, settleHomeScrubEndpoint } from "./homeMotion";
import { createClinicalParticleMorph } from "./createClinicalParticleMorph";
import { resetTnbcCopyOpacity, setTnbcCopyOpacity } from "./tnbcCopyOpacity";

/** Keep both clinical scenes in one viewport while the nurse hands the
 * narrative to the doctor. The parent GSAP context owns every tween. */
export function animateClinicalSequence(
  root: HTMLElement,
  challengeArt: gsap.core.Timeline,
  vaccineArt: gsap.core.Timeline,
  compact: boolean,
) {
  const sequence = root.querySelector<HTMLElement>(".story-clinical-sequence");
  const stage = sequence?.querySelector<HTMLElement>(".story-clinical-stage");
  const reading = root.querySelector<HTMLElement>("#why-tnbc .story-copy");
  const challenge = sequence?.querySelector<HTMLElement>("#clinical-challenge");
  const vaccine = sequence?.querySelector<HTMLElement>("#a-new-direction");
  const nurse = challenge?.querySelector<HTMLImageElement>('[data-layer="4"]');
  const doctor = vaccine?.querySelector<HTMLImageElement>('[data-layer="5"]');
  const board = vaccine?.querySelector<HTMLElement>('[data-layer="2"]');
  const challengeVisual = challenge?.querySelector<HTMLElement>(".story-visual");
  const sourceBackdrop =
    challenge?.querySelector<HTMLImageElement>(".story-backdrop");
  const targetBackdrop =
    vaccine?.querySelector<HTMLImageElement>(".story-backdrop");
  const timeline = gsap.timeline({ defaults: { ease: "none" } });
  if (
    !sequence ||
    !stage ||
    !challenge ||
    !vaccine ||
    !nurse ||
    !doctor ||
    !board ||
    !challengeVisual ||
    !sourceBackdrop ||
    !targetBackdrop
  ) {
    return { timeline, cleanup: () => {} };
  }

  // Keep the original clinic environment underneath both live chapters.
  // Only the background images are copied; characters stay in their DOM.
  const copyBackdrop = (source: HTMLImageElement) => {
    const copy = source.cloneNode(false) as HTMLImageElement;
    copy.className = "story-clinical-backdrop";
    copy.removeAttribute("id");
    copy.alt = "";
    copy.setAttribute("aria-hidden", "true");
    copy.loading = "eager";
    copy.style.cssText =
      "position:absolute;inset:0;width:100%;height:100%;object-fit:cover;user-select:none;pointer-events:none";
    return copy;
  };
  const beforeBackdrop = copyBackdrop(sourceBackdrop);
  const afterBackdrop = copyBackdrop(targetBackdrop);
  stage.prepend(beforeBackdrop, afterBackdrop);
  const boards = [
    board,
    ...vaccine.querySelectorAll(".story-vaccine-mobile-frame"),
  ];

  const challengeAt = 0.8;
  const challengeEnd = challengeAt + challengeArt.duration();
  const transitionAt = challengeEnd + 0.12;
  const transitionDuration = 1.15;
  const vaccineAt = transitionAt + transitionDuration;
  const vaccineEnd = vaccineAt + vaccineArt.duration();

  gsap.set([challenge, vaccine], { autoAlpha: 1 });
  gsap.set(sequence.querySelectorAll(".story-visual"), { opacity: 1 });
  gsap.set(challengeVisual, { opacity: 0 });
  gsap.set(beforeBackdrop, { opacity: 0, scale: 1.01 });
  gsap.set(afterBackdrop, { opacity: 0 });
  gsap.set(doctor, {
    opacity: 0,
    x: 0,
    y: 0,
    scale: 1,
    transformOrigin: "50% 41%",
  });
  gsap.set(boards, { opacity: 0, x: 0, y: 0, scale: 1 });

  const particles = createClinicalParticleMorph(stage, nurse, doctor, compact);
  const pigment = { progress: 0 };

  // The reading and the next scene crossfade over the same entry span.
  if (reading) {
    const exit = { opacity: 1 };
    gsap.fromTo(
      exit,
      { opacity: 1 },
      {
        opacity: 0,
        ease: "sine.inOut",
        onUpdate: () => setTnbcCopyOpacity(reading, "clinical", exit.opacity),
        scrollTrigger: {
          id: "home-tnbc-clinical-exit",
          trigger: sequence,
          start: () => {
            const trigger = ScrollTrigger.getById("home-why-tnbc-reading");
            const animation = trigger?.animation as gsap.core.Timeline | undefined;
            if (!trigger || trigger.pin || !animation) return "top bottom";
            // Tall reading panels finish their conclusion before the next
            // scene dims them, even though both remain in normal flow.
            const complete = animation.labels["reading-complete"] / animation.duration();
            return trigger.start + (trigger.end - trigger.start) * complete;
          },
          end: "top top",
          scrub: HOME_SCRUB,
          invalidateOnRefresh: true,
          onUpdate: settleHomeScrubEndpoint,
        },
      },
    );
  }
  timeline.fromTo(
    stage,
    { backgroundColor: "#f9e8e8" },
    { backgroundColor: "#e3e2ef", duration: 0.7, ease: HOME_EASE },
    0,
  );
  timeline.to(
    beforeBackdrop,
    { opacity: 1, duration: 0.48, ease: HOME_EASE },
    0.02,
  );
  timeline.to(
    challengeVisual,
    { opacity: 1, duration: 0.48, ease: HOME_EASE },
    0.12,
  );
  timeline.add(challengeArt, challengeAt);
  timeline.to(
    challenge.querySelectorAll(".story-challenge-heading, .story-morph"),
    { opacity: 0, duration: 0.24, stagger: 0.014, ease: HOME_EASE },
    transitionAt,
  );
  timeline.to(
    challenge.querySelectorAll(
      '[data-layer="2"], [data-layer="3"], [data-layer="5"], [data-layer="6"]',
    ),
    { opacity: 0, duration: 0.36, stagger: 0.025, ease: HOME_EASE },
    transitionAt + 0.04,
  );
  timeline.to(
    stage,
    { backgroundColor: "#f0f3fd", duration: 1.05, ease: HOME_EASE },
    transitionAt + 0.04,
  );
  timeline.to(
    beforeBackdrop,
    { opacity: 0, duration: 1.05, ease: HOME_EASE },
    transitionAt + 0.04,
  );
  timeline.to(
    afterBackdrop,
    { opacity: 1, duration: 1.05, ease: HOME_EASE },
    transitionAt + 0.04,
  );
  timeline.to(
    boards,
    { opacity: 1, duration: 0.72, ease: HOME_EASE },
    transitionAt + 0.2,
  );
  timeline.fromTo(
    pigment,
    { progress: 0 },
    {
      progress: 1,
      duration: 0.99,
      ease: "none",
    },
    transitionAt + 0.08,
  );
  timeline.to(challenge, { autoAlpha: 0, duration: 0.1 }, transitionAt + 1.02);
  timeline.add(vaccineArt, vaccineAt);
  let rest = 0.65;
  if (!compact) {
    // Keep the completed clinical illustration in view before the next chapter.
    const hold = stillHold(
      sequence.offsetHeight - stage.offsetHeight,
      rest / vaccineEnd,
    );
    rest = vaccineEnd * hold.rest;
    const scale =
      Number.parseFloat(
        getComputedStyle(sequence).getPropertyValue("--home-scroll-scale"),
      ) || 1;
    gsap.set(sequence, { "--home-scroll-scale": scale * hold.scale });
  }
  timeline.to({}, { duration: rest }, vaccineEnd);

  const update = () => {
    const time = timeline.time();
    particles.draw(pigment.progress, time >= challengeEnd);
    sequence.dataset.progress = timeline.progress().toFixed(3);
    sequence.dataset.phase =
      time < challengeEnd
        ? "treatment"
        : time < transitionAt
          ? "treatment-hold"
          : time < vaccineAt
            ? "handoff"
            : time < vaccineEnd
              ? "thinking"
              : "thinking-hold";
  };
  timeline.eventCallback("onUpdate", update);
  ScrollTrigger.create({
    id: "home-clinical-sequence",
    trigger: sequence,
    animation: timeline,
    start: "top bottom",
    end: () => `bottom top+=${stage.offsetHeight}`,
    scrub: HOME_SCRUB,
    invalidateOnRefresh: true,
    onUpdate: settleHomeScrubEndpoint,
    onRefresh: (trigger) => {
      particles.refresh();
      sequence.dataset.scrollStart = String(trigger.start);
      sequence.dataset.scrollEnd = String(trigger.end);
      update();
    },
    onToggle: ({ isActive }) =>
      sequence.classList.toggle("is-current", isActive),
  });
  update();

  return {
    timeline,
    cleanup: () => {
      timeline.eventCallback("onUpdate", null);
      particles.cleanup();
      sequence.classList.remove("is-current");
      delete sequence.dataset.progress;
      delete sequence.dataset.phase;
      delete sequence.dataset.scrollStart;
      delete sequence.dataset.scrollEnd;
      beforeBackdrop.remove();
      afterBackdrop.remove();
      if (reading) resetTnbcCopyOpacity(reading, "clinical");
    },
  };
}
