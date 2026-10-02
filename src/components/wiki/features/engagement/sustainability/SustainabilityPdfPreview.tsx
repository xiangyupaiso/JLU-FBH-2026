export interface SustainabilityPdfManual {
  title: string;
  meta: string;
  pdfUrl: string;
  fileName: string;
}

/** Inline PDF report: native browser viewer plus a visible title and open/download links. */
export function SustainabilityPdfPreview({ manual }: { manual: SustainabilityPdfManual }) {
  return (
    <figure className="sust-pdf-native">
      <iframe className="sust-pdf-native__frame" src={manual.pdfUrl} title={`${manual.title} PDF`} />
      <figcaption className="sust-pdf-native__caption">
        <h4 className="sust-pdf-native__title">{manual.title}</h4>
        <p className="sust-pdf-native__meta">{manual.meta}</p>
        <div className="sust-pdf-native__actions">
          <a className="sust-pdf-native__link" href={manual.pdfUrl} target="_blank" rel="noopener noreferrer">
            Open in new tab
          </a>
          <a className="sust-pdf-native__link" href={manual.pdfUrl} download={manual.fileName}>
            Download
          </a>
        </div>
      </figcaption>
    </figure>
  );
}
