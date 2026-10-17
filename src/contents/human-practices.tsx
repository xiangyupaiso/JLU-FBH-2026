import { WikiRoutePage } from "../components/wiki/WikiRoutePage";
import { HumanPracticesOriginTree } from "../components/wiki/features/HumanPracticesOriginTree";
import { HumanPracticesStageTree } from "../components/wiki/features/HumanPracticesStageTree";
import { HpInteractiveWaterfall } from "../components/wiki/features/engagement/HpInteractiveWaterfall";
import { getEngagementHeroImage } from "../components/wiki/engagementHeroAssets";
const humanPracticesHeroFallback =
  "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/engagement-human-practices-hero-v2-ce6ea8234186.webp";
import { humanPracticesPage } from "../data/engagement/humanPracticesPage";

export function HumanPractices() {
  return (
    <WikiRoutePage
      content={humanPracticesPage}
      heroImage={getEngagementHeroImage(humanPracticesPage.route)}
      heroFallbackImage={humanPracticesHeroFallback}
      theme="engagement"
      pageClassName="wiki-page--engagement wiki-page--human-practices"
      hideHeroCopy
      leadSection={<HpInteractiveWaterfall />}
      features={{
        "hp-origin-tree": <HumanPracticesOriginTree />,
        "hp-plasmid-tree": <HumanPracticesStageTree variant="plasmid" />,
        "hp-in-vitro-tree": <HumanPracticesStageTree variant="in-vitro" />,
        "hp-in-vivo-tree": <HumanPracticesStageTree variant="in-vivo" />,
        "hp-return-tree": <HumanPracticesStageTree variant="return" />,
      }}
    />
  );
}
