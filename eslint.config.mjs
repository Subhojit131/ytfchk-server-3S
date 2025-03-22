import globals from "globals";
import pluginJs from "@eslint/js";
import pluginPrettier from "eslint-plugin-prettier";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.node, // Use Node.js globals
      },
      ecmaVersion: "latest",
      sourceType: "module", // Or "commonjs" if needed
    },
    files: ["**/*.js", "**/*.mjs"],
  },
  pluginJs.configs.recommended,
  {
    rules: {
      "no-unused-vars": "warn",
      semi: ["error", "always"],
      quotes: ["error", "double"],
      eqeqeq: "error",
      "prettier/prettier": "error",
    },
    plugins: { prettier: pluginPrettier },
  },
];
