import cypress from "./rules/cypress";
import _import from "./rules/import";
import prettier from "./rules/prettier";
import sortImport from "./rules/sort-import";
import typescript from "./rules/typescript";
import vue from "./rules/vue";

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ["@typescript-eslint", "vue", "simple-import-sort"],
  extends: [
    "@vue/typescript/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:css/recommended",
    "plugin:prettier/recommended",
    "plugin:promise/recommended",
    "plugin:vue/vue3-essential",
    "plugin:vue/vue3-recommended",
    "plugin:vue/vue3-strongly-recommended",
  ],
  globals: {
    defineEmits: "readonly",
    defineExpose: "readonly",
    defineProps: "readonly",
    withDefaults: "readonly",
  },
  ignorePatterns: ["dist"],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
  },
  rules: {
    ...vue,
    ...typescript,
    ...sortImport,
    ...prettier,
    ..._import,
  },
  overrides: [
    {
      extends: ["plugin:cypress/recommended"],
      files: ["**/*.cy.spec.ts"],
      rules: cypress,
    },
    {
      files: [
        "**/main.ts",
        "**/components/{v1,v2}/index.ts",
        "**/registerComponent.util.ts",
      ],
      rules: {
        "vue/multi-word-component-names": "off",
        "vue/no-reserved-component-names": "off",
      },
    },
    {
      files: ["vue.config.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-require-imports": "off",
      },
    },
  ],
};
