import { Link } from "react-router-dom";

const wetLabRecords = [
  ["/experiments", "Experiments"],
  ["/notebook", "Notebook"],
  ["/measurement", "Measurement"],
  ["/alternative-platform", "Alternative Platform"],
  ["/safety-and-security", "Safety & Security"],
] as const;

export function WetLabRouteNav({ activePath }: { activePath: string }) {
  return (
    <nav className="wet-lab-route" aria-label="Wet Lab records">
      <div className="wet-lab-route__track">
        {wetLabRecords.map(([path, label]) => {
          const isActive = path === activePath;
          return (
            <Link
              className={isActive ? "is-active" : ""}
              to={path}
              aria-current={isActive ? "page" : undefined}
              key={path}
            >
              <strong>{label}</strong>
              <i aria-hidden="true" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
