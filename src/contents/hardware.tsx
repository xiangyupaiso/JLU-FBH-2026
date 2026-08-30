import { WikiPage } from "../components/wiki/WikiPage";
import { hardwareMarkdownPage } from "../data/hardwareMarkdown";
import "../styles/hardware-page.css";
import "../styles/dry-lab-calm.css";
import "../styles/dry-lab-reading.css";

export function Hardware() {
  return (
    <WikiPage
      content={hardwareMarkdownPage}
      heroVisual={null}
      pageClassName="wiki-page--hardware-hero wiki-page--dry-reading"
    />
  );
}
