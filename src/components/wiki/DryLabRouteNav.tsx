import { Link } from "react-router-dom";

const DRY_LAB_RECORDS = [
  ["/model", "Model"],
  ["/software", "Software"],
  ["/hardware", "Hardware"],
  ["/games", "Games"],
] as const;

export function DryLabRouteNav({ activePath }: { activePath: string }) {
  return (
    <nav className="dry-lab-route" aria-label="Dry Lab records">
      <div className="dry-lab-route__track">
        {DRY_LAB_RECORDS.map(([path, label]) => {
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
