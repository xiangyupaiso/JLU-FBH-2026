import { hpPresentation, renderHumanPracticesCitedText } from "../components/wiki/features/HpMedia";
import "../styles/features/hp-collaboration.css";
import { WikiRoutePage } from "../components/wiki/WikiRoutePage";
import { HumanPracticesOriginTree } from "../components/wiki/features/HumanPracticesOriginTree";
import { HumanPracticesStageTree } from "../components/wiki/features/HumanPracticesStageTree";
import { HpInteractiveWaterfall } from "../components/wiki/features/engagement/HpInteractiveWaterfall";
import { getEngagementHeroImage } from "../components/wiki/engagementHeroAssets";
const humanPracticesHeroFallback =
  "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/engagement-human-practices-hero-v2-ce6ea8234186.webp";
import { humanPracticesPage } from "../data/engagement/humanPracticesPage";
import { allHumanPracticesImages } from "../data/engagement/humanPracticesAssets";
import { humanPracticesSections } from "../data/engagement/humanPracticesCopy";

const humanPracticesFigureImages = humanPracticesSections.flatMap((section) =>
  section.blocks?.flatMap((block) => block.type === "figure" ? [block.src] : []) ?? [],
);
const preloadImages = [...new Set([...allHumanPracticesImages, ...humanPracticesFigureImages])];

export function HumanPractices() {
  return (
    <WikiRoutePage
      content={{ ...humanPracticesPage, sections: hpPresentation.sections }}
      heroImage={getEngagementHeroImage(humanPracticesPage.route)}
      heroFallbackImage={humanPracticesHeroFallback}
      preloadImages={preloadImages}
      theme="engagement"
      pageClassName="wiki-page--engagement wiki-page--human-practices"
      hideHeroCopy
      inlineRenderer={renderHumanPracticesCitedText}
      leadSection={<HpInteractiveWaterfall />}
      features={{
        ...hpPresentation.features,
        "hp-origin-tree": <HumanPracticesOriginTree />,
        "hp-plasmid-tree": <HumanPracticesStageTree variant="plasmid" />,
        "hp-in-vitro-tree": <HumanPracticesStageTree variant="in-vitro" />,
        "hp-in-vivo-tree": <HumanPracticesStageTree variant="in-vivo" />,
        "hp-return-tree": <HumanPracticesStageTree variant="return" />,
      }}
    />
  );
}
