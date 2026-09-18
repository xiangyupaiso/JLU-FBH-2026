// Phase 1 generator: copy the three old Dry Lab stylesheets into the current
// project with a namespace rename so they can only ever match inside the panel
// scope container.
//
// Rename map (class-count and order preserved, so specificity is unchanged):
//   .wiki-page                  -> .dry-panel
//   .wiki-page--model-hero      -> .dry-panel--model
//   .wiki-page--software-hero   -> .dry-panel--software
//   .wiki-page--dry-lab         -> .dry-panel--dry
//   .wiki-page--dry-reading     -> .dry-panel--reading
//   .wiki-page--hardware-hero   -> .dry-panel--hardware
//   .wiki-feature               -> .dry-panel__feature
import { readFile, writeFile } from "node:fs/promises";

const OLD = "C:/Users/香芋派/.trae-cn/Official-wiki/src/styles/";
const OUT = new URL("../src/styles/", import.meta.url);

const JOBS = [
  { from: "dry-lab-calm.css", to: "dry-panel-shared.css", what: "shared Dry Lab panel skin" },
  { from: "model-page.css", to: "dry-panel-model.css", what: "Model panel skin" },
  { from: "software-page.css", to: "dry-panel-software.css", what: "Software panel skin" },
  {
    from: "wiki-disclosures.css",
    to: "dry-panel-disclosures.css",
    what: "shared disclosure/accordion language used by the panels' <details> folds",
  },
];

const HEADER = (what, from) => `/* ============================================================================
   ${what} — faithful port of the pre-revamp stylesheet \`${from}\`.
   ----------------------------------------------------------------------------
   Ported verbatim (declarations untouched) with ONE mechanical change: every
   page-scope class was renamed into the panel namespace below, so these rules
   can only match inside the ported panels' scope container and can never leak
   into the new reader shell or any other page. Class count and order inside
   each selector are preserved, so specificity is unchanged.

     .wiki-page                -> .dry-panel
     .wiki-page--model-hero    -> .dry-panel--model
     .wiki-page--software-hero -> .dry-panel--software
     .wiki-page--dry-lab       -> .dry-panel--dry
     .wiki-page--dry-reading   -> .dry-panel--reading
     .wiki-page--hardware-hero -> .dry-panel--hardware
     .wiki-feature             -> .dry-panel__feature

   The scope container rendered by \`DryPanelScope\` carries
   \`dry-panel dry-panel--<module> dry-panel--dry\` and wraps a
   \`dry-panel__feature\` element that plays the role of the old \`.wiki-feature\`
   wrapper (the panel root is its direct child, exactly like the old DOM).

   Do not hand-edit the rules below: regenerate from the old project instead, so
   the port stays byte-comparable with the pre-revamp implementation.
   ========================================================================== */

`;

const rename = (css) =>
  css
    .replace(/\.wiki-page--model-hero/g, ".dry-panel--model")
    .replace(/\.wiki-page--software-hero/g, ".dry-panel--software")
    .replace(/\.wiki-page--dry-lab/g, ".dry-panel--dry")
    .replace(/\.wiki-page--dry-reading/g, ".dry-panel--reading")
    .replace(/\.wiki-page--hardware-hero/g, ".dry-panel--hardware")
    .replace(/\.wiki-page--unified-disclosures/g, ".dry-panel--unified-disclosures")
    .replace(/\.wiki-page--project-preview/g, ".dry-panel--project-preview")
    .replace(/\.wiki-page--wet-lab/g, ".dry-panel--wet-lab")
    .replace(/\.wiki-page--engagement/g, ".dry-panel--engagement")
    .replace(/\.wiki-feature(?![-_a-z])/g, ".dry-panel__feature")
    .replace(/\.wiki-page(?![-_a-z])/g, ".dry-panel");

for (const job of JOBS) {
  const css = await readFile(OLD + job.from, "utf8");
  const renamed = rename(css);
  const leaks = [
    ...renamed.matchAll(/\.wiki-page(?![-_a-z])/g),
    ...renamed.matchAll(/\.wiki-feature(?![-_a-z])/g),
    ...renamed.matchAll(/\.wiki-page--[a-z-]+/g),
  ];
  await writeFile(new URL(job.to, OUT), HEADER(job.what, job.from) + renamed);
  console.log(
    `${job.to}: ${css.length} -> ${renamed.length} bytes, residual old scope selectors: ${leaks.length}`,
  );
}
