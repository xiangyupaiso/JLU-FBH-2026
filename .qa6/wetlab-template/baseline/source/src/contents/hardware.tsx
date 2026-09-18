import { WikiRoutePage } from "../components/wiki/WikiRoutePage";
import { getDryLabHeroImage } from "../components/wiki/dryLabHeroAssets";
import { hardwareMarkdownPage } from "../data/hardwareMarkdown";
import "../styles/route-palette-drylab.css";

export function Hardware() {
  return (
    <WikiRoutePage
      content={hardwareMarkdownPage}
      heroImage={getDryLabHeroImage(hardwareMarkdownPage.route)}
      theme="dry-lab"
      pageClassName="wiki-page--dry-lab"
    />
  );
}
