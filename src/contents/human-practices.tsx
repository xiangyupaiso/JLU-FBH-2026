import { WikiRoutePage } from "../components/wiki/WikiRoutePage";
import { HumanPracticesOriginTree } from "../components/wiki/features/HumanPracticesOriginTree";
import { HumanPracticesStageTree } from "../components/wiki/features/HumanPracticesStageTree";
import { HpInteractiveWaterfall } from "../components/wiki/features/engagement/HpInteractiveWaterfall";
import { getEngagementHeroImage } from "../components/wiki/engagementHeroAssets";
const humanPracticesHeroFallback =
  "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/engagement-human-practices-hero-v2-ce6ea8234186.webp";
import { humanPracticesPage } from "../data/engagement/humanPracticesPage";

const treeFeatureBySection: Record<string, string> = {
  "hp-plasmid-design": "hp-plasmid-tree",
  "hp-in-vivo": "hp-in-vitro-tree",
  "hp-in-vitro": "hp-in-vivo-tree",
  "hp-return": "hp-return-tree",
};

const interactiveHumanPracticesPage: typeof humanPracticesPage = {
  ...humanPracticesPage,
  sections: humanPracticesPage.sections.map((section) => {
    if (section.id === "hp-human") {
      return { ...section, blocks: section.blocks?.filter((block) => block.type !== "feature" || block.key !== "hp-timeline-original") };
    }
    const key = treeFeatureBySection[section.id];
    if (!key) return section;
    if (section.id === "hp-in-vivo") {
      return { ...section, id: "hp-in-vitro", navLabel: "In Vitro", title: "In Vitro", blocks: [{ type: "feature" as const, key }] };
    }
    if (section.id === "hp-in-vitro") {
      return { ...section, id: "hp-in-vivo", navLabel: "In Vivo", title: "In Vivo", blocks: [{ type: "feature" as const, key }] };
    }
    return { ...section, blocks: [{ type: "feature" as const, key }] };
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
        "hp-in-vitro-tree": <HumanPracticesStageTree variant="in-vitro" />,
        "hp-in-vivo-tree": <HumanPracticesStageTree variant="in-vivo" />,
        "hp-return-tree": <HumanPracticesStageTree variant="return" />,
      }}
    />
  );
}
