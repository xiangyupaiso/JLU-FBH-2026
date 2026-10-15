/* eslint-disable react-refresh/only-export-components */
import type { ReactNode } from "react";
import {
  alternativePlatformPage,
  alternativePlatformReferences,
} from "../../../../data/wet-lab/alternativePlatformPage";
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

export function alternativePlatformFeatures(): Record<string, ReactNode> {
  return {
    "alternative-platform-references": <AlternativePlatformReferenceList />,
  };
}
