import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
  {
    // The SDG dimension chord is a verbatim port of an external D3 script that
    // consumes d3 as a self-hosted runtime global (public/vendor/d3.min.js).
    // Its callbacks are untyped by design, so the file keeps `// @ts-nocheck`
    // the way the pre-revamp project shipped it; this scoped override allows
    // that single directive and nothing else.
    files: ["src/components/wiki/sustainability/SdgDimensionChord.tsx"],
    rules: {
      "@typescript-eslint/ban-ts-comment": "off",
    },
  },
);
