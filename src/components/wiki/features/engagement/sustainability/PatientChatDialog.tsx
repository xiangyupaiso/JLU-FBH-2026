import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { ChatQuote } from "../../../../../data/engagement/sustainability/sdgChapterContract";
import { RichText } from "./RichText";

/** Gap between two messages "arriving", in seconds. */
const STEP = 0.6;

/**
 * Direct quotes from patients and caregivers, shown as a chat run inside a
 * stakeholder article. Bubbles alternate sides; named speakers get their
 * letter as avatar ("Patient A" → A), anonymous family voices a quote mark.
 * Messages pop in one after another, like a conversation being sent, once
 * the run scrolls into view.
 */
export function PatientChatDialog({ quotes }: { quotes: ReadonlyArray<ChatQuote> }) {
  const ref = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || !("IntersectionObserver" in window)) {
      setPlaying(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setPlaying(true);
        observer.disconnect();
      },
      { threshold: 0.2 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`chat-container${playing ? " is-playing" : ""}`}>
      {quotes.map((quote, index) => (
        <figure
          key={index}
          className={`chat-group chat-group--${index % 2 === 0 ? "left" : "right"}`}
          style={{ "--chat-delay": `${index * STEP}s` } as CSSProperties}
        >
          <span className="chat-avatar" aria-hidden="true">
            {quote.speaker ? quote.speaker.slice(-1) : "“"}
          </span>
          <div className="chat-group__col">
            {quote.speaker ? (
              <span className="chat-speaker">{quote.speaker}</span>
            ) : null}
            <blockquote className="chat-bubble">
              <RichText text={quote.text} />
            </blockquote>
          </div>
        </figure>
      ))}
    </div>
  );
}
