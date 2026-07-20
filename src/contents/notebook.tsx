import { WikiPage } from "../components/wiki/WikiPage";
import {
  NotebookTrace,
  ProtocolStack,
  ReadoutMatrix,
  WetLabSignature,
} from "../components/wiki/features/WetLabFeatures";
import { notebookPage } from "../data/wetLabPages";

export function Notebook() {
  return (
    <WikiPage
      content={notebookPage}
      heroVisual={<WetLabSignature variant="notebook" />}
      features={{
        "notebook-schema": <ProtocolStack />,
        "notebook-timeline": <NotebookTrace />,
        "notebook-index": <ReadoutMatrix />,
      }}
    />
  );
}
