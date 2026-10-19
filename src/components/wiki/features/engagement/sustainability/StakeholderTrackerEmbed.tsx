import { stakeholderTrackerEmbeds } from "../../../../../data/engagement/sustainability/sustainabilityTrackerAssets";

export function StakeholderTrackerEmbed({
  variant,
}: {
  variant: keyof typeof stakeholderTrackerEmbeds;
}) {
  const tool = stakeholderTrackerEmbeds[variant];
  return (
    <div className="sust-tracker-embed">
      <header className="sust-tracker-embed__header">
        <h4 className="sust-minor-heading">{tool.title}</h4>
        <div className="sust-tracker-embed__actions">
          <a href={tool.url} target="_blank" rel="noreferrer">
            Open tool
          </a>
          <a href={tool.url} download={tool.fileName}>
            {variant === "blank" ? "Download template" : "Download records"}
          </a>
        </div>
      </header>
      <iframe
        className="sust-tracker-embed__frame"
        src={tool.url}
        title={tool.title}
        loading="lazy"
      />
    </div>
  );
}
