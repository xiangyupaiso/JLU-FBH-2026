import { WikiRoutePage } from "../components/wiki/WikiRoutePage";
import { getWetLabHeroImage } from "../components/wiki/wetLabHeroAssets";
import {
  NotebookRecordSchema,
  NotebookTrace,
  NotebookTraceability,
} from "../components/wiki/features/WetLabFeatures";
import { notebookPage } from "../data/wetLabPages";
import "../styles/route-palette-wetlab.css";

export function Notebook() {
  return (
    <WikiRoutePage
      content={notebookPage}
      heroImage={getWetLabHeroImage(notebookPage.route)}
      theme="wet-lab"
      pageClassName="wiki-page--wet-lab"
      features={{
        "notebook-schema": <NotebookRecordSchema />,
        "notebook-timeline": <NotebookTrace />,
        "notebook-index": <NotebookTraceability />,
      }}
    />
  );
}
