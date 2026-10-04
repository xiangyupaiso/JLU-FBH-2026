/* eslint-disable react-refresh/only-export-components */
import type { ReactNode } from "react";
import {
  designAssets,
  getDesignDocument,
} from "../../../../data/wet-lab/designAssets";
import {
  designPage,
  designReferences,
} from "../../../../data/wet-lab/designPage";
import {
  buildNumericCitationIndex,
  reportCitationIssues,
} from "../../../../data/citations/citationIndex";
import {
  CitationReferenceList,
  createCitationRenderer,
  type CitationFlashTint,
} from "../../citations/CitationRegister";
import { DesignConstructViewer } from "./DesignConstructViewer";
import "../../../../styles/features/design-panels.css";

/**
 * Design page feature slots.
 *
 * Three page-owned interactions, each mounted from a `{ type: "feature" }`
 * block in `designPage.ts`:
 *
 * - `construct-architecture-viewer` — Figure 6 (section 5).
 * - `design-eda-report` — Figure 9, the NC3Rs Experimental Design Report,
 *   embedded through the browser's own PDF viewer (section 7.4).
 * - `design-references` — the bibliography, on the shared citation register.
 */

/** Deep sea blue, the Wet Lab heading ink, for the landing flash. */
const WET_LAB_CITATION_FLASH: CitationFlashTint = {
  ramp: "rgba(20, 53, 76, 0.14)",
  ring: "0 0 0 3px rgba(20, 53, 76, 0.32)",
};

const designCitationIndex = buildNumericCitationIndex(
  designPage.sections,
  designReferences,
);
reportCitationIssues("design", designCitationIndex);

/** Inline renderer handed to `WikiRoutePage` on the Design page. */
export const renderDesignCitedText = createCitationRenderer(
  designCitationIndex,
  WET_LAB_CITATION_FLASH,
);

/**
 * Figure 9: the pre-registered animal-study design report, as a PDF.
 *
 * Deliberately not a `.wiki-figure`: that class carries the reader's `FIG. nn`
 * badge, and a document is not an illustration. The caption keeps the figure
 * register's typography so it still reads as the same editorial furniture.
 */
function DesignEdaReport() {
  const report = designAssets.edaReport;

  return (
    <figure className="design-pdf-figure">
      <iframe
        className="design-pdf-figure__frame"
        src={getDesignDocument("edaReport")}
        title="NC3Rs Experimental Design Report for the CirCure in vivo tumour study"
        /* The browser's PDF viewer is a separate, expensive surface. Defer it
           until the reader approaches it so scrolling the page does not carry an
           off-screen plugin through every projected frame. */
        loading="lazy"
      />
      <figcaption>{report.caption}</figcaption>
    </figure>
  );
}

function DesignReferenceList() {
  return (
    <CitationReferenceList
      references={designReferences}
      index={designCitationIndex}
      tint={WET_LAB_CITATION_FLASH}
    />
  );
}

export function designFeatures(): Record<string, ReactNode> {
  return {
    "construct-architecture-viewer": <DesignConstructViewer />,
    "design-eda-report": <DesignEdaReport />,
    "design-references": <DesignReferenceList />,
  };
}
