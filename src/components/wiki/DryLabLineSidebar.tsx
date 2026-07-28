import type { MouseEvent } from "react";
import { Link } from "react-router-dom";

export interface DryLabLineSidebarItem {
  id: string;
  index: string;
  label: string;
}

export interface DryLabLineSidebarLink {
  label: string;
  path: string;
}

interface DryLabLineSidebarProps {
  activeId: string;
  items: DryLabLineSidebarItem[];
  links?: DryLabLineSidebarLink[];
  label?: string;
}

export function DryLabLineSidebar({
  activeId,
  items,
  links = [],
  label = "On this page",
}: DryLabLineSidebarProps) {
  const jumpToSection = (
    event: MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    event.preventDefault();
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.history.replaceState(null, "", `#${id}`);
    document.getElementById(id)?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <aside className="wiki-outline" aria-label={label}>
      <p>{label}</p>
      <nav aria-label={label}>
        <span className="wiki-outline__ribbon" aria-hidden="true">
          <i className="wiki-outline__ribbon-progress" />
          <i className="wiki-outline__ribbon-rest" />
          <svg
            className="ribbon-mark wiki-outline__ribbon-knot"
            viewBox="0 0 32 46"
          >
            <use href="#circure-ribbon-knot" />
          </svg>
        </span>
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={activeId === item.id ? "is-active" : ""}
            aria-current={activeId === item.id ? "location" : undefined}
            onClick={(event) => jumpToSection(event, item.id)}
          >
            <span>{item.index}</span>
            <strong>{item.label}</strong>
          </a>
        ))}
      </nav>

      {links.length ? (
        <div className="wiki-outline__related">
          <span>Related records</span>
          {links.map((link) => (
            <Link key={link.path} to={link.path}>
              {link.label} <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      ) : null}
    </aside>
  );
}
