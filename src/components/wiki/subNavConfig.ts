import Pages from "../../pages";
import type { SubNavItem } from "./SubNav";

/** Derive the sub-page list for a top-level module from the canonical page
 *  tree in pages.ts, so the nav never drifts from the real routes. */
function pickItems(folderName: string): SubNavItem[] {
  for (const entry of Pages) {
    if (entry.type !== "folder" || entry.name !== folderName) continue;
    return (entry.folder ?? []).map((page) => ({
      title: page.title ?? page.name ?? "",
      path: page.path ?? "",
      description: page.nav?.em,
    }));
  }
  return [];
}

export interface SubNavModuleConfig {
  ariaLabel: string;
  themeColor: string;
  items: SubNavItem[];
}

// ponytail: `items` is a lazy getter because pages.ts ↔ contents form a
// circular import; `Pages` is in the TDZ at module-eval time, so resolving
// it eagerly here throws ReferenceError and blanks the whole app.
export const SUB_NAV_CONFIG: Record<string, SubNavModuleConfig> = {
  project: {
    ariaLabel: "Project records",
    themeColor: "var(--coral)",
    get items() {
      return pickItems("Project");
    },
  },
  "wet-lab": {
    ariaLabel: "Wet Lab records",
    themeColor: "var(--wet-accent)",
    get items() {
      return pickItems("Wet Lab");
    },
  },
  "dry-lab": {
    ariaLabel: "Dry Lab records",
    themeColor: "var(--blue)",
    get items() {
      return pickItems("Dry Lab");
    },
  },
  engagement: {
    ariaLabel: "Engagement records",
    themeColor: "var(--wet-accent)",
    get items() {
      return pickItems("Engagement");
    },
  },
};
