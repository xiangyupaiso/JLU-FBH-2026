import { DocumentViewer } from "../../../documents/DocumentViewer";

export interface SustainabilityPdfManual {
  title: string;
  meta: string;
  pdfUrl: string;
  fileName: string;
}

/** Inline PDF report using the unified Wiki DocumentViewer. */
export function SustainabilityPdfPreview({ manual }: { manual: SustainabilityPdfManual }) {
  return (
    <DocumentViewer
      document={{
        caption: manual.title,
        url: manual.pdfUrl,
        description: manual.meta,
        openUrl: manual.pdfUrl,
        downloadUrl: manual.pdfUrl,
      }}
      defaultOpen={true}
    />
  );
}
