import { Link } from "react-router-dom";

const engagementRecords = [
  ["/entrepreneurship", "Entrepreneurship"],
  ["/human-practices", "Human Practices"],
  ["/education", "Education"],
  ["/inclusivity", "Inclusivity"],
  ["/sustainability", "Sustainability"],
] as const;

export function EngagementRouteNav({ activePath }: { activePath: string }) {
  return (
    <nav
      className="wet-lab-route engagement-route"
      aria-label="Engagement records"
    >
      <div className="wet-lab-route__track">
        {engagementRecords.map(([path, label]) => {
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
