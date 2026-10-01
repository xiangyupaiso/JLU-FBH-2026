import "../../../../../styles/sustainability-panels.css";

const pdfUrl = (fileName: string) =>
  `https://static.igem.wiki/teams/6056/wiki/files/docs/${fileName}`;

interface TrackerFile {
  title: string;
  description: string;
  cnFile: string;
  enFile: string;
}

const TRACKER_FILES: TrackerFile[] = [
  {
    title: "Stakeholder Sustainability Tracker · Template & Protocol",
    description:
      "规范化记录利益相关者核心反馈、项目回应措施、落实状态及多维 SDG 映射关系的结构化模板与决策规程。",
    cnFile: "sustainability-stakeholder-feedback-decision-protocol-cn.pdf",
    enFile: "sustainability-stakeholder-feedback-decision-protocol-en.pdf",
  },
  {
    title: "Feedback-to-Action Record · Traceable Evidence",
    description:
      "详细收录 CirCure 研发全周期中 49 位利益相关者具体建议、项目改进落实与支撑证据的完整跟踪档案。",
    cnFile: "sustainability-feedback-to-action-record-cn.pdf",
    enFile: "sustainability-feedback-to-action-record-en.pdf",
  },
];

export function StakeholderTrackerPanel() {
  return (
    <div className="sust-tracker-panel" data-wiki-reveal>
      <div className="sust-tracker-panel__grid">
        {TRACKER_FILES.map((file) => (
          <article className="sust-tool-card" key={file.title}>
            <header className="sust-tool-card__header">
              <span className="sust-tool-card__kicker">Sustainability Tracker</span>
              <h3 className="sust-tool-card__title">{file.title}</h3>
            </header>
            <p className="sust-tool-card__desc">{file.description}</p>
            <footer className="sust-tool-card__actions">
              <a
                className="sust-tool-card__btn"
                href={pdfUrl(file.cnFile)}
                target="_blank"
                rel="noopener noreferrer"
              >
                📄 中文版 PDF
              </a>
              <a
                className="sust-tool-card__btn"
                href={pdfUrl(file.enFile)}
                target="_blank"
                rel="noopener noreferrer"
              >
                📄 English PDF
              </a>
            </footer>
          </article>
        ))}
      </div>
    </div>
  );
}
