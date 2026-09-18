import { WikiPage } from "../components/wiki/WikiPage";
import {
  NotebookRecordSchema,
  NotebookTrace,
  NotebookTraceability,
} from "../components/wiki/features/WetLabFeatures";
import { notebookPage } from "../data/wetLabPages";

export function Notebook() {
  return (
    <WikiPage
      content={notebookPage}
      heroVisual={null}
      features={{
        "notebook-schema": <NotebookRecordSchema />,
        "notebook-timeline": <NotebookTrace />,
        "notebook-index": <NotebookTraceability />,
      }}
    />
  );
}
