import { WikiRoutePage } from "../components/wiki/WikiRoutePage";
import { HumanPracticesOriginTree } from "../components/wiki/features/HumanPracticesOriginTree";
import { HumanPracticesStageTree } from "../components/wiki/features/HumanPracticesStageTree";
import { HpInteractiveWaterfall } from "../components/wiki/features/engagement/HpInteractiveWaterfall";
import { getEngagementHeroImage } from "../components/wiki/engagementHeroAssets";
import humanPracticesHeroFallback from "../assets/wiki/engagement-heroes/engagement-human-practices-hero-v2.webp";
import { humanPracticesPage } from "../data/engagement/humanPracticesPage";

const treeFeatureBySection: Record<string, string> = {
  "hp-plasmid-design": "hp-plasmid-tree",
  "hp-in-vivo": "hp-in-vivo-tree",
  "hp-in-vitro": "hp-in-vitro-tree",
};

const interactiveHumanPracticesPage: typeof humanPracticesPage = {
  ...humanPracticesPage,
  sections: humanPracticesPage.sections.map((section) => {
    if (section.id === "hp-human") {
      return { ...section, blocks: section.blocks?.filter((block) => block.type !== "feature" || block.key !== "hp-timeline-original") };
    }
    const key = treeFeatureBySection[section.id];
  return key ? { ...section, blocks: [{ type: "feature" as const, key }] } : section;
  }),
};

export function HumanPractices() {
  return (
    <WikiRoutePage
      content={interactiveHumanPracticesPage}
      heroImage={getEngagementHeroImage(humanPracticesPage.route)}
      heroFallbackImage={humanPracticesHeroFallback}
      theme="engagement"
      pageClassName="wiki-page--engagement wiki-page--human-practices"
      hideHeroCopy
      leadSection={<HpInteractiveWaterfall />}
      features={{
        "hp-origin-tree": <HumanPracticesOriginTree />,
        "hp-plasmid-tree": <HumanPracticesStageTree variant="plasmid" />,
        "hp-in-vivo-tree": <HumanPracticesStageTree variant="in-vivo" />,
        "hp-in-vitro-tree": <HumanPracticesStageTree variant="in-vitro" />,
      }}
    />
  );
}
