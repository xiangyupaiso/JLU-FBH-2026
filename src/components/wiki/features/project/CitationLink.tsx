/* eslint-disable react-refresh/only-export-components */
import { Fragment, type MouseEvent, type ReactNode } from "react";
import { scrollReaderToTarget } from "../../../../utils";
import type { InlineRenderer } from "../../WikiRoutePage";
import { citationIndex, type CiteOccurrence } from "./citations";
import { preview } from "./CitationPreview";

const MODIFIER_KEYS = (event: MouseEvent) =>
  event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0;

/* route-main (#b7d781) mixes; WAAPI survives React re-renders that would
   wipe a toggled className (scroll-spy re-renders sections on every jump). */
const FLASH_RAMP = "rgba(183, 215, 129, 0.22)";
const FLASH_RING = "0 0 0 3px rgba(183, 215, 129, 0.45)";
const FLASH_DURATION = 2200;

export function flashCitationTarget(el: HTMLElement): void {
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (reduceMotion) {
    const animation = el.animate(
      [
        {
          backgroundColor: "rgba(183, 215, 129, 0.18)",
          boxShadow: "0 0 0 2px rgba(183, 215, 129, 0.45)",
        },
      ],
      { duration: FLASH_DURATION, fill: "forwards" },
    );
    window.setTimeout(() => animation.cancel(), FLASH_DURATION);
    return;
  }

  el.animate(
    [
      { backgroundColor: FLASH_RAMP, boxShadow: FLASH_RING },
      { backgroundColor: FLASH_RAMP, boxShadow: FLASH_RING, offset: 0.35 },
      { backgroundColor: "rgba(183, 215, 129, 0)", boxShadow: "0 0 0 0 rgba(183, 215, 129, 0)" },
    ],
    {
      duration: 1800,
      delay: 250,
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      fill: "none",
    },
  );
}

/**
 * Jump inside the pinned reader frame: reveal the target's reveal wrapper,
 * scroll through the shared reader helper, mirror the anchor into the URL
 * (replace, so the back stack stays clean), move focus, and flash.
 */
export function jumpToAnchor(id: string): void {
  const el = document.getElementById(id);
  if (!el) return;

  el.closest("[data-wiki-reveal]")?.classList.add("is-visible");

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  scrollReaderToTarget(
    el,
    el.closest<HTMLElement>(".route-frame__scroll"),
    reduceMotion ? "instant" : "smooth",
  );

  window.history.replaceState(window.history.state, "", `#${id}`);
  el.focus({ preventScroll: true });
  flashCitationTarget(el);
}

/** Inline renderer handed to WikiRoutePage on the Description page only. */
export const renderCitedText: InlineRenderer = (text, fallback) => {
  const entry = citationIndex.byParagraph.get(text);
  if (!entry) return fallback(text);

  let occurrenceIndex = 0;
  return entry.segments.map((segment, index) =>
    segment.kind === "text" ? (
      <Fragment key={index}>{fallback(segment.text)}</Fragment>
    ) : (
      <CitationLink
        key={index}
        occ={entry.occs[occurrenceIndex++]}
      >
        {segment.text}
      </CitationLink>
    ),
  );
};

function CitationLink({
  occ,
  children,
}: {
  occ: CiteOccurrence;
  children: ReactNode;
}) {
  return (
    <a
      id={occ.occId}
      href={`#ref-${occ.refId}`}
      className="description-cite"
      role="doc-biblioref"
      aria-describedby={`ref-${occ.refId}-body`}
      onClick={(event) => {
        if (MODIFIER_KEYS(event)) return; // let the browser open the anchor natively
        event.preventDefault();
        jumpToAnchor(`ref-${occ.refId}`);
      }}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") {
          preview.show(occ.refId, event.currentTarget);
        }
      }}
      onPointerLeave={preview.scheduleHide}
      onFocus={(event) => {
        if (event.currentTarget.matches(":focus-visible")) {
          preview.show(occ.refId, event.currentTarget);
        }
      }}
      onBlur={preview.hide}
    >
      {children}
    </a>
  );
}

/** Wikipedia-style back-links appended to each bibliography entry. */
export function Backlinks({ occs }: { occs: readonly CiteOccurrence[] }) {
  if (occs.length === 0) return null;

  return (
    <span className="description-reference-item__backlinks">
      {occs.map((occ, index) => (
        <a
          key={occ.occId}
          href={`#${occ.occId}`}
          role="doc-backlink"
          aria-label={
            occs.length === 1
              ? "Back to in-text citation"
              : `Back to in-text citation ${index + 1} of ${occs.length}`
          }
          onClick={(event) => {
            if (MODIFIER_KEYS(event)) return;
            event.preventDefault();
            jumpToAnchor(occ.occId);
          }}
        >
          {index === 0 ? "↩" : String.fromCharCode(96 + index)}
        </a>
      ))}
    </span>
  );
}
