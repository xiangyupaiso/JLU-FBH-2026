// Verification-only Vite config (scratch, not part of the site).
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { stringToSlug } from "../src/utils/stringToSlug";

export default () => {
  const env = loadEnv("dev", process.cwd());
  return defineConfig({
    base: `/${stringToSlug(env.VITE_TEAM_NAME)}/`,
    plugins: [react()],
    server: { watch: null },
  });
};
