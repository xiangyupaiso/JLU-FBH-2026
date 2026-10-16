/* eslint-disable react-refresh/only-export-components */
import { useState, type ReactNode } from "react";
import {
  alternativePlatformJudgingCriteria,
  alternativePlatformPage,
  alternativePlatformReferences,
} from "../../../../data/wet-lab/alternativePlatformPage";
import { renderInlineFormatting } from "../../proseInline";
import {
  buildAuthorYearCitationIndex,
  reportCitationIssues,
} from "../../../../data/citations/citationIndex";
import {
  CitationReferenceList,
  createCitationRenderer,
} from "../../citations/CitationRegister";
import "../../../../styles/features/alternative-platform-panels.css";

const WET_LAB_CITATION_FLASH = {
  ramp: "rgba(20, 53, 76, 0.14)",
  ring: "0 0 0 3px rgba(20, 53, 76, 0.32)",
};

const citationIndex = buildAuthorYearCitationIndex(
  alternativePlatformPage.sections,
  alternativePlatformReferences,
);
reportCitationIssues("alternative-platform", citationIndex);

export const renderAlternativePlatformCitedText = createCitationRenderer(
  citationIndex,
  WET_LAB_CITATION_FLASH,
);

function AlternativePlatformReferenceList() {
  return (
    <CitationReferenceList
      references={alternativePlatformReferences}
      index={citationIndex}
      tint={WET_LAB_CITATION_FLASH}
    />
  );
}

/**
 * Judging-criteria Q&A record, same card format as the Measurement page's
 * highlights record: one question per card, a single card open at a time.
 */
function AlternativePlatformJudgingCriteria() {
  const [openId, setOpenId] = useState<string | null>(null);
  return (
    <div className="highlights-record" data-wiki-reveal>
      {alternativePlatformJudgingCriteria.map((item) => {
        const open = openId === item.id;
        return (
          <article
            key={item.id}
            className={`highlights-record__item${open ? " is-open" : ""}`}
          >
            <button
              type="button"
              id={`${item.id}-toggle`}
              className="highlights-record__toggle"
              aria-expanded={open}
              aria-controls={`${item.id}-answer`}
              onClick={() => setOpenId(open ? null : item.id)}
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
              {item.paragraphs.map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex}>
                  {renderAlternativePlatformCitedText(
                    paragraph,
                    renderInlineFormatting,
                  )}
                </p>
              ))}
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function alternativePlatformFeatures(): Record<string, ReactNode> {
  return {
    "alternative-platform-judging-criteria": (
      <AlternativePlatformJudgingCriteria />
    ),
    "alternative-platform-references": <AlternativePlatformReferenceList />,
  };
}
