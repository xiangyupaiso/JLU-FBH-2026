import { useState, type ReactNode } from "react";
import type { WikiJudgingCriterion } from "../../wikiPageTypes";
import { linkify } from "../../proseInline";
import "../../../../styles/features/judging-criteria.css";

/** The Wet Lab question-and-answer record, shared across Wiki pages. */
export function JudgingCriteria({
  items,
  renderParagraph = linkify,
}: {
  items: readonly WikiJudgingCriterion[];
  renderParagraph?: (paragraph: string) => ReactNode;
}) {
  const [openIds, setOpenIds] = useState<Set<string>>(() => new Set());

  const toggle = (id: string) => {
    setOpenIds((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="highlights-record judging-criteria" data-wiki-reveal>
      {items.map((item) => {
        const open = openIds.has(item.id);
        return (
          <article
            key={item.id}
            id={item.id}
            className={`highlights-record__item${open ? " is-open" : ""}`}
          >
            {item.anchorIds?.map((id) => (
              <span className="wiki-anchor" id={id} key={id} />
            ))}
            <button
              type="button"
              id={`${item.id}-toggle`}
              className="highlights-record__toggle"
              aria-expanded={open}
              aria-controls={`${item.id}-answer`}
              onClick={() => toggle(item.id)}
            >
              <span className="highlights-record__question">
                {item.question}
              </span>
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <path d="m4 6 4 4 4-4" />
              </svg>
            </button>
            <div
              id={`${item.id}-answer`}
              role="region"
              aria-labelledby={`${item.id}-toggle`}
              className="highlights-record__answer"
              hidden={!open}
            >
              {item.paragraphs.map((paragraph, index) => (
                <p key={index}>{renderParagraph(paragraph)}</p>
              ))}
            </div>
          </article>
        );
      })}
    </div>
  );
}
