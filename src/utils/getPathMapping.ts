import pages from "../pages.ts";
import type { PageLayout } from "../pages.ts";

export const getPathMapping = () => {
  return pages.reduce<{
    [key: string]: {
      name: string | undefined;
      title: string | undefined;
      component: React.FC;
      lead: string | undefined;
      layout: PageLayout;
    };
  }>((map, item) => {
    if (item.type === "page" && item.path && item.component) {
      if (map[item.path] && import.meta.env.DEV) {
        console.warn(
          `[CirCure] Duplicate page path "${item.path}" — later entry wins.`,
        );
      }
      map[item.path] = {
        name: item.name,
        title: item.title,
        component: item.component,
        lead: item.lead,
        layout: item.layout ?? "standard",
      };
    } else if (item.type === "folder") {
      item.folder.forEach((page) => {
        if (page.path && page.component) {
          if (map[page.path] && import.meta.env.DEV) {
            console.warn(
              `[CirCure] Duplicate page path "${page.path}" — later entry wins.`,
            );
          }
          map[page.path] = {
            name: page.name,
            title: page.title,
            component: page.component,
            lead: page.lead,
            layout: page.layout ?? item.layout ?? "standard",
          };
        }
      });
    }
    return map;
  }, {});
};
