import type { ReactNode } from "react";
import { WikiRoutePage } from "../components/wiki/WikiRoutePage";
import { HpPanelScope } from "../components/wiki/features/HpPanelScope";
import {
  HumanPracticesDossier,
  HumanPracticesEvidenceMap,
  HumanPracticesImpactWall,
  HumanPracticesLoopBoard,
  HumanPracticesMethodStandard,
  HumanPracticesQuickView,
  HumanPracticesTimeline,
} from "../components/wiki/features/HumanPracticesPanels";
import { getEngagementHeroImage } from "../components/wiki/engagementHeroAssets";
import { humanPracticesPage } from "../data/engagementPages";
import "../styles/route-palette-engagement.css";

/**
 * The prose record is the finalized `humanPracticesPage` copy, rendered through
 * the shared reader-route template like every other module. The pre-revamp
 * page's visual vocabulary is ported verbatim as that record's section features
 * (see `HumanPracticesPanels.tsx`), grouped by topic:
 *
 *   01 Count decisions, not meetings  → judge quick view + integration ledger
 *   02 Evidence timeline              → stakeholder impact wall + timeline dial
 *   03 Method, ethics, and limits     → decision proof + method standard + dossier
 */
const panel = (node: ReactNode) => <HpPanelScope>{node}</HpPanelScope>;

export function HumanPractices() {
  return (
    <WikiRoutePage
      content={humanPracticesPage}
      heroImage={getEngagementHeroImage(humanPracticesPage.route)}
      theme="engagement"
      pageClassName="wiki-page--engagement"
      features={{
        "hp-changes": panel(
          <>
            <HumanPracticesQuickView />
            <HumanPracticesLoopBoard />
          </>,
        ),
        "hp-timeline": panel(
          <>
            <HumanPracticesImpactWall />
            <HumanPracticesTimeline />
          </>,
        ),
        "hp-method": panel(
          <>
            <HumanPracticesEvidenceMap />
            <HumanPracticesMethodStandard />
            <HumanPracticesDossier />
          </>,
        ),
      }}
    />
  );
}
