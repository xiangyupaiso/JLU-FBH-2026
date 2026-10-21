import type { ReactNode } from "react";
import galleries from "../../../../data/engagement/educationGalleries.json";
import mediaGroups from "../../../../data/engagement/educationMediaGroups.json";
import { InteractivePage, MediaGrid, PhotoGallery, WinterOutreachGallery } from "./EducationMedia";

const interactivePages = {
  "education-interactive-map": {
    title: "Community & Educational Function Map",
    load: () => import("../../../../data/engagement/interactive/community-educational-function-map.html?raw").then((module) => module.default),
    height: 730,
  },
  "education-interactive-design-board": {
    title: "Education Design Board",
    load: () => import("../../../../data/engagement/interactive/education-design-board.html?raw").then((module) => module.default),
    height: 850,
  },
  "education-interactive-evidence-room": {
    title: "Breast Guardian Evidence Room",
    load: () => import("../../../../data/engagement/interactive/breast-guardian-evidence-room.html?raw").then((module) => module.default),
    height: 900,
  },
} as const;

export function educationFeatures() {
  const features: Record<string, ReactNode> = {};
  for (const [key, item] of Object.entries(interactivePages)) {
    features[key] = <InteractivePage item={item} key={key} />;
  }
  for (const gallery of galleries) {
    features[gallery.key] = <PhotoGallery gallery={gallery} key={gallery.key} />;
  }
  features["education-gallery-winter-outreach"] = <WinterOutreachGallery />;
  for (const group of mediaGroups) {
    features[group.key] = <MediaGrid group={group} key={group.key} />;
  }
  features["education-equation-1"] = (
    <div className="education-equation" role="math" aria-label="x sub i equals one if education format i is selected, otherwise zero">
      <span><var>x</var><sub>i</sub> = </span><span className="education-equation__brace">&#123;</span>
      <span className="education-equation__cases"><span>1, <small>if education format <var>i</var> is selected</small></span><span>0, <small>otherwise</small></span></span>
    </div>
  );
  features["education-equation-2"] = (
    <div className="education-equation education-equation--stacked" role="math" aria-label="Coverage and weighted education portfolio objective">
      <div><var>y</var><sub>k</sub> ≤ <span className="education-equation__sum"><sup>n</sup>∑<sub>i=1</sub></span> <var>a</var><sub>ik</sub><var>x</var><sub>i</sub>,</div>
      <div>max <var>Z</var> = <span className="education-equation__sum"><sup>K</sup>∑<sub>k=1</sub></span> <var>w</var><sub>k</sub><var>y</var><sub>k</sub></div>
    </div>
  );
  features["education-equation-3"] = (
    <div className="education-equation" role="math" aria-label="Sum of resources required by selected educational formats is no greater than available resources">
      <span className="education-equation__sum"><sup>n</sup>∑<sub>i=1</sub></span> <var>c</var><sub>ir</sub><var>x</var><sub>i</sub> ≤ <var>C</var><sub>r</sub>
    </div>
  );
  return features;
}

export function renderEducationInline(text: string, fallback: (value: string) => ReactNode): ReactNode {
  text = text.replace(/\*\*(?=\[[^\]]+\]\()/g, "").replace(/(?<=\))\*\*/g, "");
  if (!text.includes("$")) return fallback(text);
  return text.split(/(\$[^$]+\$)/g).map((part, index) => {
    if (!part.startsWith("$") || !part.endsWith("$")) return <span key={index}>{fallback(part)}</span>;
    const formula = part.slice(1, -1);
    const match = formula.match(/^([A-Za-z])_(?:\{([^}]+)\}|([A-Za-z]))$/);
    return match ? <span className="education-inline-math" key={index}><var>{match[1]}</var><sub>{match[2] ?? match[3]}</sub></span>
      : <span className="education-inline-math" key={index}><var>{formula}</var></span>;
  });
}
