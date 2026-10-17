/* eslint-disable react-refresh/only-export-components */
import { useRef, useState, type ReactNode } from "react";
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
import { InteractiveHtmlEmbed } from "../../embeds/InteractiveHtmlEmbed";
import { getAlternativePlatformEmbed } from "../../../../data/wet-lab/alternativePlatformAssets";
import { scrollReaderToId } from "../../../../utils/scrollReaderToTarget";
import { useRoutePageScroll } from "../../WikiRoutePage";
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

function AlternativePlatformAchievementNavigation() {
  const rotorRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef(0);
  const { activeSubsection } = useRoutePageScroll();
  const achievements =
    alternativePlatformPage.sections
      .find((section) => section.id === "key-achievements")
      ?.blocks?.flatMap((block) =>
        block.type === "subheading"
          ? [{ id: block.id, title: block.title.replace(/^\d+\s*·\s*/, "") }]
          : [],
      ) ?? [];

  return (
    <nav className="platform-achievement-nav" aria-label="Key achievements">
      <div className="platform-achievement-nav__orbit">
        <div className="platform-achievement-nav__rotor" ref={rotorRef}>
          {achievements.map((achievement, index) => (
            <a
              key={achievement.id}
              href={`#${achievement.id}`}
              className="platform-achievement-nav__node"
              aria-current={
                activeSubsection === achievement.id ? "location" : undefined
              }
              onClick={(event) => {
                event.preventDefault();
                const target = (-index * 360) / achievements.length;
                const delta =
                  ((((target - rotationRef.current + 180) % 360) + 360) % 360) -
                  180;
                rotationRef.current += delta;
                rotorRef.current?.style.setProperty(
                  "--achievement-rotation",
                  `${rotationRef.current}deg`,
                );
                scrollReaderToId(achievement.id, event.currentTarget);
              }}
            >
              <span>{achievement.title}</span>
            </a>
          ))}
        </div>
        <a
          className="platform-achievement-nav__centre"
          href="#key-achievements"
          onClick={(event) => {
            event.preventDefault();
            scrollReaderToId("key-achievements", event.currentTarget);
          }}
        >
          CirCure
        </a>
      </div>
    </nav>
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
    "alternative-platform-achievement-navigation": (
      <AlternativePlatformAchievementNavigation />
    ),
    "alternative-platform-backbone": (
      <InteractiveHtmlEmbed
        src={getAlternativePlatformEmbed("backbone")}
        title="CirCure interactive plasmid map"
      />
    ),
    "alternative-platform-reuse-studio": (
      <InteractiveHtmlEmbed
        src={getAlternativePlatformEmbed("reuseStudio")}
        title="CirCure backbone reuse studio"
      />
    ),
    "alternative-platform-judging-criteria": (
      <AlternativePlatformJudgingCriteria />
    ),
    "alternative-platform-references": <AlternativePlatformReferenceList />,
  };
}
