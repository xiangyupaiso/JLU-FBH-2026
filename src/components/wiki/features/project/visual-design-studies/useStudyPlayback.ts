import { useState } from "react";

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
  const [chapterIndex, setChapter] = useState(3);
  const [rate, setRate] = useState(1.5);
  return {
    mode,
    rate,
    chapterIndex,
    chapters,
    progress: chapterIndex / 12,
    ended: false,
    reducedMotion: false,
    artworkStatus: "ready",
    artworkChapter: "",
    toggle: () =>
      setMode((value) => (value === "playing" ? "paused" : "playing")),
    seekChapter: (value: number) => setChapter(value),
    setRate,
    retryArtwork: () => {},
  };
}
