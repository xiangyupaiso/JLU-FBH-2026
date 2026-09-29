# Virtual Laboratory

Migrated from `Wiki-learning/虚拟实验室初版/app` into Dry Lab → Games.
The catalog and all nine experiments are maintained in `src`; their images and
interactive course players live in `../public/virtual-lab`. The original source
project is preserved. Unused template components, screenshots, and experiment 9's
raw authoring files are excluded.

The wiki opens `virtual-lab/index.html` in its existing full-screen game dialog.
This separate document preserves viewport-based experiment layouts and isolates
Tailwind's reset from the wiki's Bootstrap styles. React and GSAP use the wiki's
existing dependencies. The root Vite configuration builds both HTML entries;
`npm run dev` and `npm run build` include the lab without a separate server.

Runtime image and player paths are relative to the lab document so the project
works under the iGEM team subdirectory. Keep that convention when adding assets.
Use the catalog's Back and Restart controls inside each experiment. Close game
returns to the wiki and restores focus to the launch button.
