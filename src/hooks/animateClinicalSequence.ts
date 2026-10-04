import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HOME_EASE, HOME_SCRUB } from "./homeMotion";
import { createClinicalParticleMorph } from "./createClinicalParticleMorph";

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
  const challenge = sequence?.querySelector<HTMLElement>("#clinical-challenge");
  const vaccine = sequence?.querySelector<HTMLElement>("#a-new-direction");
  const nurse = challenge?.querySelector<HTMLImageElement>('[data-layer="4"]');
  const doctor = vaccine?.querySelector<HTMLImageElement>('[data-layer="5"]');
  const board = vaccine?.querySelector<HTMLElement>('[data-layer="2"]');
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

  const challengeAt = 0.06;
  const challengeEnd = challengeAt + challengeArt.duration();
  const transitionAt = challengeEnd + 0.5;
  const transitionDuration = 1.15;
  const vaccineAt = transitionAt + transitionDuration;
  const vaccineEnd = vaccineAt + vaccineArt.duration();

  gsap.set([challenge, vaccine], { autoAlpha: 1 });
  gsap.set(sequence.querySelectorAll(".story-visual"), { opacity: 1 });
  gsap.set(beforeBackdrop, { opacity: 1, scale: 1.01 });
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
  timeline.fromTo(
    stage,
    { backgroundColor: "#e3e1ed" },
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
  timeline.to({}, { duration: 0.65 }, vaccineEnd);

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
    start: "top top",
    end: () => `bottom top+=${stage.offsetHeight}`,
    scrub: compact ? 0.42 : HOME_SCRUB,
    invalidateOnRefresh: true,
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
    },
  };
}
