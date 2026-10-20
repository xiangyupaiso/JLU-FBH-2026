import { useEffect } from "react";
import { WikiRoutePage } from "../components/wiki/WikiRoutePage";
import type { WikiContentBlock } from "../components/wiki/wikiPageTypes";
import { visualDesignFeatures } from "../components/wiki/features/project/VisualDesignPanels";
import { VisualDesignNarrativeFeature } from "../components/wiki/features/project/VisualDesignNarrativePanels";
import { installVisualDesignFigures } from "../components/wiki/features/project/visualDesignFigureTools";
import { createCitationRenderer } from "../components/wiki/citations/CitationRegister";
import { visualDesignCitationIndex } from "../data/citations/visualDesignCitations";
import { getProjectHeroImage } from "../components/wiki/projectHeroAssets";
import { visualDesignPage } from "../data/project/visualDesignPage";
import { visualDesignNarrativeSections } from "../data/project/visualDesignNarrative";
import "../styles/description-page.css";
import "../styles/features/visual-design-panels.css";

const renderVisualDesignText = createCitationRenderer(
  visualDesignCitationIndex,
);
function collectNarrativeFeatures(blocks: WikiContentBlock[]): string[] {
  return blocks.flatMap((block) => {
    if (block.type === "feature") return [block.key];
    if (block.type === "split")
      return collectNarrativeFeatures([...block.prose, block.aside]);
    return [];
  });
}

const narrativeFeatures = Object.fromEntries(
  visualDesignNarrativeSections
    .flatMap((section) => collectNarrativeFeatures(section.blocks ?? []))
    .map((name) => [
      name,
      <VisualDesignNarrativeFeature key={name} name={name} />,
    ]),
);

export function VisualDesign() {
  useEffect(installVisualDesignFigures, []);

  return (
    <WikiRoutePage
      content={visualDesignPage}
      heroImage={getProjectHeroImage(visualDesignPage.route)}
      theme="project"
      pageClassName="wiki-page--project wiki-page--description wiki-page--visual-design"
      hideHeroCopy
      outlineDepth={2}
      features={{ ...visualDesignFeatures(), ...narrativeFeatures }}
      inlineRenderer={renderVisualDesignText}
    />
  );
}
