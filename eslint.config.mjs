// @ts-check
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  eslintConfigPrettier,

  {
    languageOptions: {
      parserOptions: {
        project: "tsconfig.json",
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        sourceType: "module",
      },
    },
  },
  {
    ignores: [".config/*", "eslint.config.mjs"],
    files: ["**/*.js", "**/*.mjs"],
    ...tseslint.configs.disableTypeChecked,
  },
  {
    rules: {
      // turns a rule on with no configuration (i.e. uses the default configuration)
      "@typescript-eslint/array-type": "error",
      // turns on a rule with configuration
      "@typescript-eslint/no-explicit-any": ["error", { ignoreRestArgs: true }],
    },
  },
  {
    plugins: eslintPluginPrettierRecommended.plugins,
    languageOptions: {
      parser: eslintPluginPrettierRecommended.languageOptions?.parser,
      parserOptions: {
        project: true,
      },
    },
    rules: eslintPluginPrettierRecommended.rules,
  },
);
