import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import "../../styles/sub-nav.css";

export interface SubNavItem {
  title: string;
  description?: string;
  path: string;
}

export interface SubNavProps {
  items: SubNavItem[];
  activePath: string;
  /** CSS color for the active/hover accent (dot fill, title, underline). */
  themeColor: string;
  ariaLabel?: string;
}

export function SubNav({
  items,
  activePath,
  themeColor,
  ariaLabel,
}: SubNavProps) {
  return (
    <nav
      className="sub-nav"
      aria-label={ariaLabel}
      style={
        {
          "--sub-nav-accent": themeColor,
          "--sub-nav-count": items.length,
        } as CSSProperties
      }
    >
      <div className="sub-nav__track">
        {items.map(({ title, description, path }) => {
          const isActive = path === activePath;

          return (
            <Link
              key={path}
              to={path}
              className={isActive ? "is-active" : ""}
              aria-current={isActive ? "page" : undefined}
            >
              <span className="sub-nav__head">
                <strong>{title}</strong>
                <i aria-hidden="true" />
              </span>
              {description ? <small>{description}</small> : null}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
