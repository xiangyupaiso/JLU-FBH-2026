import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { HOME_EASE, HOME_REST_RATIO, HOME_SCRUB } from "./homeMotion";
import { createReadingInk, type InkCue } from "./readingInk";
import { readingAccents, type ReadingBeat } from "./readingAccents";

type Splits = ReturnType<typeof SplitText.create>[];
type Voice = "reflect" | "explain" | "weigh" | "assemble" | "exchange" | "expand" | "resolve";

const voices: Record<string, Voice> = {
  "what-we-saw": "reflect",
  "why-tnbc": "explain",
  "clinical-challenge": "weigh",
  "our-platform": "assemble",
  "plug-and-play": "exchange",
  "beyond-tnbc": "expand",
  "what-we-hope": "resolve",
};

// Follow the argument sentence by sentence: context → evidence → consequence;
// framework → replacement → possibility. Source links always resolve last.
const sentenceVoices: Record<string, Voice[]> = {
  "why-tnbc": ["reflect", "weigh", "weigh", "weigh", "explain", "weigh", "expand", "reflect"],
  "clinical-challenge": ["resolve", "weigh", "explain", "explain", "explain", "reflect", "reflect"],
  "our-platform": ["explain", "expand", "assemble", "exchange", "expand"],
  "plug-and-play": ["exchange", "assemble", "reflect"],
  "beyond-tnbc": ["assemble", "expand", "explain", "resolve"],
  "what-we-hope": ["reflect", "resolve", "assemble"],
};

// Split words, never measured lines: browser reflow remains free at any zoom.
function words(element: HTMLElement, splits: Splits) {
  // Retained in reduced motion so search uses the same sentence boundaries.
  element.dataset.homeReadingText = "";
  const split = SplitText.create(element, {
    type: "words", wordsClass: "story-reading-word", aria: "auto",
  });
  splits.push(split);
  return split.words as HTMLElement[];
}

function sentences(tokens: HTMLElement[]) {
  const groups: HTMLElement[][] = [];
  let sentence: HTMLElement[] = [];
  tokens.forEach((token, index) => {
    sentence.push(token);
    if (/[.!?][”’"')]*$/.test(token.textContent || "") || index === tokens.length - 1) {
      groups.push(sentence);
      sentence = [];
    }
  });
  return groups;
}

function reveal(
  timeline: gsap.core.Timeline,
  tokens: HTMLElement[],
  voice: Voice,
  compact: boolean,
  at: number,
  duration: number,
  sentenceIndex = 0,
) {
  const travel = compact ? 0.55 : 1;
  // A closed aperture hides the entire future sentence, including its silhouette.
  // Each word opens within its own typographic box; layout never moves with it.
  const from: gsap.TweenVars = { yPercent: 24 * travel,
    clipPath: "inset(100% -12% -20% -12%)" };
  let order: "start" | "center" | "end" = "start";
  switch (voice) {
    case "reflect": break;
    case "explain":
      from.yPercent = 0;
      from.clipPath = "inset(-20% 100% -20% 0%)";
      break;
    case "weigh":
      from.yPercent = -18 * travel;
      from.clipPath = "inset(-20% -12% 100% -12%)";
      break;
    case "assemble":
      from.yPercent = 0;
      from.clipPath = "inset(-20% 50% -20% 50%)";
      order = "center";
      break;
    case "exchange":
      from.xPercent = (sentenceIndex % 2 ? 12 : -12) * travel;
      from.yPercent = 0;
      from.clipPath = sentenceIndex % 2 ? "inset(-20% 100% -20% 0%)" : "inset(-20% 0% -20% 100%)";
      order = sentenceIndex % 2 ? "end" : "start";
      break;
    case "expand":
      from.yPercent = 0;
      from.clipPath = "inset(-20% 50% -20% 50%)";
      from.x = (i: number) => (i - (tokens.length - 1) / 2) * -1.3 * travel;
      order = "center";
      break;
    case "resolve": order = "center"; break;
  }
  timeline.fromTo(tokens, { opacity: 0 }, { opacity: 1, duration: 0.015,
    stagger: { amount: duration * 0.28, from: order, ease: "sine.inOut" },
  }, at);
  timeline.fromTo(tokens, from, {
    x: 0, xPercent: 0, yPercent: 0,
    clipPath: "inset(-20% -12% -20% -12%)",
    duration: duration * 0.72,
    stagger: { amount: duration * 0.28, from: order, ease: "sine.inOut" },
    ease: "power3.out",
  }, at);
}

export function animateArtworkWords(
  element: HTMLElement,
  timeline: gsap.core.Timeline,
  voice: Voice,
  compact: boolean,
  splits: Splits,
  at: number,
  duration: number,
) {
  const tokens = words(element, splits);
  // Staggered children in a nested timeline may not render until their turn.
  // Hide every word now so later reveals cannot flash on section entry.
  gsap.set(tokens, { opacity: 0 });
  reveal(timeline, tokens, voice, compact, at, duration);
}

export function animateHomePrologue(prologue: HTMLElement, compact: boolean, splits: Splits) {
  const timeline = gsap.timeline({ scrollTrigger: {
    trigger: prologue, start: "top 72%", end: "bottom 48%",
    scrub: HOME_SCRUB, invalidateOnRefresh: true,
  } });
  const clauses = prologue.querySelectorAll<HTMLElement>(".story-prologue-line");
  clauses.forEach((clause, i) => {
    animateArtworkWords(clause, timeline, i ? "resolve" : "reflect", compact, splits, i * 0.6, 0.85);
  });
  timeline.fromTo(prologue.querySelector("button"), { opacity: 0, x: -8 },
    { opacity: 1, x: 0, duration: 0.45, ease: HOME_EASE }, 1.2);
  timeline.to({}, { duration: timeline.duration() * HOME_REST_RATIO });
  return timeline;
}

export function animateHomeReading(
  copy: HTMLElement,
  section: HTMLElement,
  compact: boolean,
  splits: Splits,
  cleanups: (() => void)[],
) {
  const voice = voices[section.id] || "reflect";
  const ward = section.id === "what-we-saw";
  copy.dataset.readingVoice = voice;
  cleanups.push(() => delete copy.dataset.readingVoice);
  if (ward) {
    copy.classList.add("has-ward-reading");
    cleanups.push(() => copy.classList.remove("has-ward-reading"));
  }
  const title = copy.querySelector<HTMLElement>("h2")!;
  const titleWords = words(title, splits);
  const targets = [...copy.querySelectorAll<HTMLElement>(
    ".story-body > p, .story-body > a, .story-receptors > span, .story-challenges > li, .story-ward-dialogue > *",
  )];
  const entries = targets.map((element) => ({
    element,
    // Keep source links and the finale's travelling phrase structurally intact.
    groups: element.matches("a, .story-carry")
      ? [[element]] : sentences(words(element, splits)),
  }));
  const beats: ReadingBeat[] = [];
  const sentenceCount = entries.reduce((n, e) => n + e.groups.length, 0);
  const headerHeight = Number.parseFloat(getComputedStyle(section).getPropertyValue("--header-height")) || 0;
  const fits = copy.offsetHeight <= window.innerHeight - headerHeight + 2;
  const reading = gsap.timeline({
    defaults: { ease: HOME_EASE },
    scrollTrigger: {
      id: `home-${section.id}-reading`, trigger: copy,
      start: fits ? `top top+=${headerHeight}` : "top 80%",
      end: () => fits
        ? `+=${Math.round(window.innerHeight * (ward ? 4.8 : 1.6 + sentenceCount * 0.25) * (1 + HOME_REST_RATIO))}`
        : "bottom 65%",
      pin: fits, scrub: HOME_SCRUB, invalidateOnRefresh: true,
    },
  });
  if (!fits) {
    copy.classList.remove("has-ward-reading");
    copy.classList.add("has-flow-reading");
    cleanups.push(() => copy.classList.remove("has-flow-reading"));
    // Each sentence follows its own position, including paragraphs taller than a screen.
    let sentenceIndex = 0;
    [{ element: title, groups: sentences(titleWords) }, ...entries].forEach(({ element, groups }) => {
      groups.forEach((tokens) => {
        const index = sentenceIndex++;
        const flow = gsap.timeline({ scrollTrigger: {
          trigger: tokens[0], endTrigger: tokens[tokens.length - 1],
          start: "top 92%", end: "bottom 68%", scrub: HOME_SCRUB,
          invalidateOnRefresh: true,
        } });
        reveal(flow, tokens, element === title ? voice
          : sentenceVoices[section.id]?.[index - sentences(titleWords).length] || voice,
          compact, 0, 1, index);
      });
    });
    reading.to({}, { duration: 1 });
    return reading;
  }

  const titleGroups = sentences(titleWords);
  titleGroups.forEach((tokens, i) => reveal(reading, tokens, voice, compact, i * 0.62, 0.9, i));
  beats.push({ element: title.querySelector<HTMLElement>("em") || title, at: 0.38,
    duration: 0.62 * titleGroups.length, kind: "title" });
  const titleEnd = 0.62 * (titleGroups.length - 1) + 0.9;
  if (ward) {
    const entry = (selector: string) => entries.find(({ element }) => element.matches(selector))!;
    const context = entry(".story-ward-context");
    context.groups.forEach((tokens, i) => reveal(reading, tokens, "reflect", compact, 1.05 + i * 0.82, 0.75));
    const wish = entry(".story-ward-wish");
    const question = entry(".story-ward-question");
    const source: InkCue = { tokens: wish.groups.flat(), state: { progress: 0 } };
    const target: InkCue = { tokens: question.groups.flat(), state: { progress: 0 } };
    const transfer = { source, target, state: { progress: 0 } };
    const ink = createReadingInk(copy, [source, target], [transfer], compact);
    cleanups.push(ink.dispose);
    reading.to(source.state, { progress: 1, duration: 1.25, ease: "none" }, 2.85);
    // Let the wish become readable before its very own pigment forms the question.
    reading.addLabel("wish-readable", 4.1);
    reading.to(transfer.state, { progress: 1, duration: 1.4, ease: "none" }, 5.2);
    reading.addLabel("question-readable", 6.6);
    reading.eventCallback("onUpdate", ink.render);
    ink.render();
    const thread = copy.querySelector(".story-ward-thread");
    reading.fromTo(thread, { scaleX: 0, opacity: 0 }, { scaleX: 1, opacity: 0.65, duration: 0.8 }, 3.15);
    reading.to(thread, { scaleX: 0.36, opacity: 0.35, duration: 1.4 }, 5.2);
    entry(".story-ward-aftermath").groups.forEach((tokens, i) => {
      reveal(reading, tokens, ["reflect", "weigh", "resolve"][i] as Voice, compact, 7.1 + i * 0.82, 0.72);
    });
  } else {
    let cursor = titleEnd + 0.3;
    let sentenceIndex = 0;
    entries.forEach(({ element, groups }) => {
      groups.forEach((tokens) => {
        const duration = Math.min(1.05, 0.65 + tokens.length * 0.018);
        const receptor = element.matches(".story-receptors > span");
        const challenge = element.matches(".story-challenges > li");
        const sentenceVoice = sentenceVoices[section.id]?.[sentenceIndex] || voice;
        reveal(reading, tokens, sentenceVoice, compact, cursor, duration, sentenceIndex++);
        if (receptor || challenge) beats.push({ element, at: cursor, duration,
          kind: receptor ? "receptor" : "challenge" });
        cursor += duration + 0.26 + Math.min(0.2, tokens.length * 0.008);
      });
    });
  }
  cleanups.push(readingAccents(copy, section.id, reading, beats));
  reading.addLabel("reading-complete");
  reading.to({}, { duration: reading.duration() * HOME_REST_RATIO });
  copy.dataset.readingHold = String(1 / (1 + HOME_REST_RATIO));
  cleanups.push(() => delete copy.dataset.readingHold);
  return reading;
}
