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

interface Window {
  molstar?: {
    Viewer: {
      create: (
        element: string | HTMLElement,
        options?: Record<string, unknown>
      ) => Promise<any>;
    };
    [key: string]: any;
  };
}
