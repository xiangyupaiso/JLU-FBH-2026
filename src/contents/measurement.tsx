import { WikiRoutePage } from "../components/wiki/WikiRoutePage";
import { getWetLabHeroImage } from "../components/wiki/wetLabHeroAssets";
import { measurementFeatures } from "../components/wiki/features/wet-lab/measurementFeatures";
import { renderMeasurementCitedText } from "../components/wiki/features/wet-lab/measurementCitations";
import { measurementPage } from "../data/wet-lab/measurementPage";

export function Measurement() {
  return (
    <WikiRoutePage
      content={measurementPage}
      heroImage={getWetLabHeroImage(measurementPage.route)}
      theme="wet-lab"
      pageClassName="wiki-page--wet-lab"
      hideHeroCopy
      features={measurementFeatures()}
      inlineRenderer={renderMeasurementCitedText}
    />
  );
}
