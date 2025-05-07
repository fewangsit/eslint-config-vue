import pluginCss from 'eslint-plugin-css';
import pluginCypress from 'eslint-plugin-cypress';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginPromise from 'eslint-plugin-promise';
import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import eslintPluginVue from 'eslint-plugin-vue';

import rulesCypress from './rules/cypress.js';
import rulesPrettier from './rules/prettier.js';
import rulesSort from './rules/sort-import.js';
import rulesTs, { tsEslintConfig } from './rules/typescript.js';
import rulesVue from './rules/vue.js';

export default [
  ...tsEslintConfig,
  {
    files: ['**/*.{ts,js,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        defineProps: 'readonly',
        withDefaults: 'readonly',
      },
    },
    plugins: {
      'vue': eslintPluginVue,
      'prettier': pluginPrettier,
      'promise': pluginPromise,
      'simple-import-sort': pluginSimpleImportSort,
      'css': pluginCss,
    },
    rules: {
      ...rulesVue,
      ...rulesTs,
      ...rulesSort,
      ...rulesPrettier,
    },
  },
  {
    files: ['**/*.cy.spec.ts'],
    plugins: {
      cypress: pluginCypress,
    },
    rules: {
      ...rulesCypress,
    },
  },
];
