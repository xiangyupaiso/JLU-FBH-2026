import { WikiRoutePage } from "../components/wiki/WikiRoutePage";
import { getWetLabHeroImage } from "../components/wiki/wetLabHeroAssets";
import { measurementFeatures } from "../components/wiki/features/wet-lab/MeasurementPanels";
import { measurementPage } from "../data/wet-lab/measurementPage";

export function Measurement() {
  return (
    <WikiRoutePage
      content={measurementPage}
      heroImage={getWetLabHeroImage(measurementPage.route)}
      theme="wet-lab"
      pageClassName="wiki-page--wet-lab"
      hideHeroCopy
      collapsibleSubheadingSections={measurementPage.sections.map(
        (section) => section.id,
      )}
      features={measurementFeatures()}
    />
  );
}
