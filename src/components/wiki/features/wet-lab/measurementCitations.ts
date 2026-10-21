import { measurementPage, measurementReferences } from "../../../../data/wet-lab/measurementPage";
import { buildAuthorYearCitationIndex, reportCitationIssues } from "../../../../data/citations/citationIndex";
import { createCitationRenderer } from "../../citations/CitationRegister";

export const WET_LAB_CITATION_FLASH = {
  ramp: "rgba(20, 53, 76, 0.14)",
  ring: "0 0 0 3px rgba(20, 53, 76, 0.32)",
};

export const citationIndex = buildAuthorYearCitationIndex(
  measurementPage.sections,
  measurementReferences,
);
reportCitationIssues("measurement", citationIndex);

export const renderMeasurementCitedText = createCitationRenderer(
  citationIndex,
  WET_LAB_CITATION_FLASH,
);
