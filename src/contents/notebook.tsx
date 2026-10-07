import { WikiRoutePage } from "../components/wiki/WikiRoutePage";
import { getProjectHeroImage } from "../components/wiki/projectHeroAssets";
import {
  NotebookRecordSchema,
  NotebookTrace,
  NotebookTraceability,
} from "../components/wiki/features/WetLabFeatures";
import { notebookPage } from "../data/project/notebookPage";

export function Notebook() {
  return (
    <WikiRoutePage
      content={notebookPage}
      heroImage={getProjectHeroImage(notebookPage.route)}
      theme="project"
      pageClassName="wiki-page--project"
      hideHeroCopy
      features={{
        "notebook-schema": <NotebookRecordSchema />,
        "notebook-timeline": <NotebookTrace />,
        "notebook-index": <NotebookTraceability />,
      }}
    />
  );
}
