import { WikiRoutePage } from "../components/wiki/WikiRoutePage";
import {
  EngineeringOutline,
  engineeringFeatures,
} from "../components/wiki/features/project/EngineeringPanels";
import { getProjectHeroImage } from "../components/wiki/projectHeroAssets";
import { engineeringPage } from "../data/project/engineeringPage";
import "../styles/route-palette-project.css";

/**
 * Project 02 — Engineering.
 *
 * The reader template is used unchanged; two generic slots carry the page's
 * own structure. `leadSection` mounts the large TIME dial figure under the
 * hero, and `outlineSlot` replaces the line sidebar with the compact dial plus
 * the team gear strip. Below 980px the template falls back to the standard
 * drawer, so the outline stays reachable on a phone.
 */
export function Engineering() {
  return (
    <WikiRoutePage
      content={engineeringPage}
      heroImage={getProjectHeroImage(engineeringPage.route)}
      hideHeroCopy
      theme="project"
      pageClassName="wiki-page--project wiki-page--engineering"
      outlineSlot={(context) => <EngineeringOutline {...context} />}
      features={engineeringFeatures()}
    />
  );
}