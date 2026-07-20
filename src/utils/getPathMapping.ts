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
    if ("path" in item && item.path && item.component) {
      map[item.path] = {
        name: item.name,
        title: item.title,
        component: item.component,
        lead: item.lead,
        layout: item.layout ?? "standard",
      };
    } else if ("folder" in item && item.folder) {
      item.folder.forEach((page) => {
        if (page.path && page.component) {
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
