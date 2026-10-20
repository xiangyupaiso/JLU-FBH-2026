import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Native sticky positioning keeps the question on the room's scroll plane,
// then holds it at the finale. JavaScript only measures and hands off visibility.
export function animateFinalQuestionCarry(
  root: HTMLElement,
  finale: HTMLElement,
) {
  const track = root.querySelector<HTMLElement>(
    "#what-we-hope .story-scene-track",
  );
  const question = finale.querySelector<HTMLElement>(
    ".story-final-statement__kicker",
  );
  const reading = ScrollTrigger.getById("home-finale-reading");
  const room = track?.closest<HTMLElement>("#what-we-hope");
  const stage = track?.querySelector<HTMLElement>(".story-chapter-inner");
  if (!track || !room || !stage || !question || !reading) return;

  const carrier = document.createElement("div");
  carrier.className = "story-final-question-track";
  carrier.setAttribute("aria-hidden", "true");
  carrier.inert = true;
  const carry = question.cloneNode(true) as HTMLElement;
  carry.classList.add("story-final-question-carry");
  carry.setAttribute("aria-hidden", "true");
  carry.inert = true;
  // The native spans remain the sole owners of the later fold/glow sequence.
  carry
    .querySelectorAll("[data-finale]")
    .forEach((node) => node.removeAttribute("data-finale"));
  // Reveal on the stationary room first; both copies meet at sticky release.
  const entry = carry.cloneNode(true) as HTMLElement;
  entry.classList.replace("story-final-question-carry", "story-final-question-entry");
  stage.append(entry);
  carrier.append(carry);
  room.append(carrier);
  const state = { progress: 0 };
  const render = () => {
    const p = state.progress;
    const trigger = ScrollTrigger.getById("home-final-question-carry");
    const travelled = trigger ? (trigger.end - trigger.start) * p : 0;
    const departed = travelled >= window.innerHeight * 0.12;
    const active = departed && p < 1;
    entry.style.visibility = departed || p === 1 ? "hidden" : "visible";
    carry.style.visibility = active ? "visible" : "hidden";
    question.style.visibility = p < 1 ? "hidden" : "";
  };
  const measure = () => {
    // Font and viewport changes are measured on refresh, never during scroll.
    const header =
      Number.parseFloat(
        getComputedStyle(finale).getPropertyValue("--header-height"),
      ) || 0;
    const pinnedTop =
      finale.offsetHeight > window.innerHeight - header + 1
        ? window.innerHeight - finale.offsetHeight
        : header;
    const landing =
      question.getBoundingClientRect().top -
      finale.getBoundingClientRect().top +
      pinnedTop;
    const release = track.offsetTop + track.offsetHeight - window.innerHeight;
    const questionCenter = window.innerHeight * 0.935;
    const from = questionCenter - carry.offsetHeight / 2;
    entry.style.top = `${questionCenter}px`;
    carrier.style.top = `${release + from}px`;
    // Span the incoming viewport so sticky cannot release before the handoff.
    carrier.style.height = `${finale.offsetHeight + carry.offsetHeight}px`;
    carry.style.top = `${landing}px`;
    render();
  };
  const timeline = gsap.timeline({
    onUpdate: render,
    scrollTrigger: {
      id: "home-final-question-carry",
      trigger: track,
      start: () => `bottom bottom+=${window.innerHeight * 0.12}`,
      end: () => reading.start,
      scrub: true,
      invalidateOnRefresh: true,
      onRefresh: measure,
    },
  });
  timeline.to(state, { progress: 1, duration: 1, ease: "none" });
  measure();
  return {
    timeline,
    cleanup: () => {
      entry.remove();
      carrier.remove();
      question.style.removeProperty("visibility");
    },
  };
}
