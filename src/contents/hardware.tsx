import { WikiRoutePage } from "../components/wiki/WikiRoutePage";
import { getDryLabHeroImage } from "../components/wiki/dryLabHeroAssets";
import { hardwarePage } from "../data/drylab/hardwarePage";
import "../styles/route-palette-drylab.css";

export function Hardware() {
  return (
    <WikiRoutePage
      content={hardwarePage}
      heroImage={getDryLabHeroImage(hardwarePage.route)}
      theme="dry-lab"
      pageClassName="wiki-page--dry-lab"
    />
  );
}
