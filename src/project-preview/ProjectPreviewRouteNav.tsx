import { Link } from "react-router-dom";

const PROJECT_RECORDS = [
  ["/description", "Description"],
  ["/engineering", "Engineering"],
  ["/results", "Results"],
  ["/contribution", "Contribution"],
] as const;

export function ProjectPreviewRouteNav({
  activePath,
}: {
  activePath: string;
}) {
  return (
    <nav
      className="wet-lab-route project-preview-route"
      aria-label="Project records"
    >
      <div className="wet-lab-route__track">
        {PROJECT_RECORDS.map(([path, label]) => {
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
