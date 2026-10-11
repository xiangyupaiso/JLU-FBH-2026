import type { ReactNode } from "react";
import { DocumentViewer } from "../../documents/DocumentViewer";
import {
  softwareGuides,
} from "../../../../data/drylab/softwareAssets";
import {
  softwarePage,
  softwareReferences,
} from "../../../../data/drylab/softwarePage";
import {
  buildNumericCitationIndex,
  reportCitationIssues,
} from "../../../../data/citations/citationIndex";
import {
  CitationReferenceList,
  createCitationRenderer,
  type CitationFlashTint,
} from "../../citations/CitationRegister";
import "../../../../styles/features/software-panels.css";

/* eslint-disable react-refresh/only-export-components */

const guideUrl = (fileName: string) =>
  `${import.meta.env.BASE_URL}assets/docs/${fileName}`;

const DRY_LAB_CITATION_FLASH: CitationFlashTint = {
  ramp: "rgba(21, 62, 52, 0.14)",
  ring: "0 0 0 3px rgba(21, 62, 52, 0.32)",
};

const softwareCitationIndex = buildNumericCitationIndex(
  softwarePage.sections,
  softwareReferences,
);
reportCitationIssues("software", softwareCitationIndex);

export const renderSoftwareCitedText = createCitationRenderer(
  softwareCitationIndex,
  DRY_LAB_CITATION_FLASH,
);

function SoftwareGuide({
  guide,
}: {
  guide: (typeof softwareGuides)[keyof typeof softwareGuides];
}) {
  const url = guideUrl(guide.fileName);

  return (
    <div className="software-guide-feature">
      <DocumentViewer
        document={{
          caption: guide.caption,
          url: `${url}#view=FitH`,
          description: guide.description,
          openUrl: url,
          downloadUrl: url,
          fallbackText: guide.fallback,
        }}
      />
    </div>
  );
}

function SoftwareReferenceList() {
  return (
    <CitationReferenceList
      references={softwareReferences}
      index={softwareCitationIndex}
      tint={DRY_LAB_CITATION_FLASH}
    />
  );
}

export function softwareFeatures(): Record<string, ReactNode> {
  return {
    "software-circuforge-guide": (
      <SoftwareGuide guide={softwareGuides.circuforge} />
    ),
    "software-torusfold-guide": (
      <SoftwareGuide guide={softwareGuides.torusfold} />
    ),
    "software-references": <SoftwareReferenceList />,
  };
}
