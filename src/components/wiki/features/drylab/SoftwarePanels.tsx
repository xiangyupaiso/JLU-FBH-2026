import type { ReactNode } from "react";
import { DocumentViewer } from "../../documents/DocumentViewer";
import { softwareGuides } from "../../../../data/drylab/softwareAssets";
import "../../../../styles/features/software-panels.css";

/* eslint-disable react-refresh/only-export-components */

const guideUrl = (fileName: string) =>
  `${import.meta.env.BASE_URL}assets/docs/${fileName}`;

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

export function softwareFeatures(): Record<string, ReactNode> {
  return {
    "software-circuforge-guide": (
      <SoftwareGuide guide={softwareGuides.circuforge} />
    ),
    "software-torusfold-guide": (
      <SoftwareGuide guide={softwareGuides.torusfold} />
    ),
  };
}
