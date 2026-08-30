import type { ProtocolManual } from "../../../data/protocolPages";
import "../../../styles/sustainability-page.css";

/** SST-QN 关键 PDF —— 用浏览器原生 PDF viewer 直接内嵌展示。
 *  下方是用户可见的标题说明（主标题 + 类型/编号/页数 + 描述 + 打开/下载入口），
 *  不依赖 iframe title / aria-label / 文件名 / 浏览器标签标题，用户不点开 PDF
 *  也能一眼知道这是什么文档。 */
export function SustainabilityPdfPreview({
  manual,
}: {
  manual: ProtocolManual;
}) {
  return (
    <figure className="sust-pdf-native">
      <iframe
        className="sust-pdf-native__frame"
        src={manual.pdfUrl}
        title={`${manual.title} PDF`}
      />
      <figcaption className="sust-pdf-native__caption">
        <h3 className="sust-pdf-native__title">{manual.title}</h3>
        <p className="sust-pdf-native__meta">
          {manual.id} · {manual.documentType} · {manual.pages} Pages
        </p>
        <p className="sust-pdf-native__desc">{manual.description}</p>
        <div className="sust-pdf-native__actions">
          <a
            className="sust-pdf-native__link"
            href={manual.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            在新标签页打开 · Open
          </a>
          <a
            className="sust-pdf-native__link"
            href={manual.pdfUrl}
            download={manual.assetName}
          >
            下载 · Download
          </a>
        </div>
      </figcaption>
    </figure>
  );
}
