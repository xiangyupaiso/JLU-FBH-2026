/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TEAM_ID: string;
  readonly VITE_TEAM_NAME: string;
  readonly VITE_TEAM_YEAR: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "*.pdb?raw" {
  const content: string;
  export default content;
}

// Mol* is loaded at runtime from public/vendor/molstar/molstar.js (window.molstar).
// The npm package of the same version supplies the types only; nothing is bundled.
interface Window {
  molstar?: {
    Viewer: typeof import("molstar/lib/apps/viewer/app").Viewer;
    lib: typeof import("molstar/lib/apps/viewer/lib").lib;
  };
}
