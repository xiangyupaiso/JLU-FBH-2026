import { useEffect, useState } from "react";
import { useStudyEnvironment } from "./useStudyEnvironment";

// Keep the extracted controller operable without running the full scroll story.
const chapters = [
  ["top", "Behind the diagnosis"],
  ["what-we-saw", "A patient's question"],
  ["what-stayed-with-us", "What stayed with us"],
  ["why-tnbc", "Why TNBC?"],
  ["clinical-challenge", "The treatment challenge"],
  ["a-new-direction", "A new direction"],
  ["molecule-gallery", "DNA, mRNA and circRNA"],
  ["why-circrna", "Why circular RNA?"],
  ["our-platform", "Project advantages"],
  ["plug-and-play", "Changing the antigen"],
  ["beyond-tnbc", "Looking further"],
  ["what-we-hope", "The question behind CirCure"],
  ["home-finale", "That is CirCure"],
].map(([id, title]) => ({ id, title }));

export function useStudyPlayback() {
  const [mode, setMode] = useState<"paused" | "playing">("paused");
  const [position, setPosition] = useState(3);
  const [rate, setRate] = useState(1.5);
  const { active, reducedMotion } = useStudyEnvironment();
  const ended = position >= chapters.length;
  const chapterIndex = Math.min(chapters.length - 1, Math.floor(position));

  useEffect(() => {
    if (!active || reducedMotion || ended) setMode("paused");
  }, [active, reducedMotion, ended]);

  useEffect(() => {
    const pause = () => setMode("paused");
    const pauseForKey = (event: KeyboardEvent) => {
      if (
        [
          "ArrowUp",
          "ArrowDown",
          "PageUp",
          "PageDown",
          "Home",
          "End",
          " ",
        ].includes(event.key) &&
        !(
          event.target instanceof Element &&
          event.target.closest("button, input, select, textarea, a")
        )
      )
        pause();
    };
    window.addEventListener("wheel", pause, { passive: true });
    window.addEventListener("touchstart", pause, { passive: true });
    window.addEventListener("keydown", pauseForKey);
    return () => {
      window.removeEventListener("wheel", pause);
      window.removeEventListener("touchstart", pause);
      window.removeEventListener("keydown", pauseForKey);
    };
  }, []);

  useEffect(() => {
    if (mode !== "playing" || !active || reducedMotion || ended) return;
    let previous = performance.now();
    const timer = window.setInterval(() => {
      const now = performance.now();
      const elapsed = Math.min(now - previous, 250);
      previous = now;
      setPosition((value) =>
        Math.min(chapters.length, value + (elapsed * rate) / 6000),
      );
    }, 100);
    return () => window.clearInterval(timer);
  }, [mode, active, reducedMotion, ended, rate]);

  return {
    mode,
    rate,
    chapterIndex,
    chapters,
    progress: position / chapters.length,
    ended,
    reducedMotion,
    artworkStatus: "ready",
    artworkChapter: "",
    toggle: () => {
      if (ended) setPosition(0);
      setMode((value) => (value === "playing" ? "paused" : "playing"));
    },
    seekChapter: (value: number) => {
      setPosition(Math.max(0, Math.min(chapters.length - 1, value)));
      setMode("paused");
    },
    setRate,
    retryArtwork: () => {},
  };
}
