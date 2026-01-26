import { fixupPluginRules } from '@eslint/compat';
import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import css from 'eslint-plugin-css';
import cypress from 'eslint-plugin-cypress';
import importPlugin from 'eslint-plugin-import';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import promise from 'eslint-plugin-promise';
import vue from 'eslint-plugin-vue';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import cypressRules from './rules/cypress.js';
import importRules from './rules/import.js';
import vueRules from './rules/vue.js';

const patchedImportPlugin = fixupPluginRules(importPlugin);

export default defineConfig(
  // Base configs
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...vue.configs['flat/recommended'],
  css.configs['flat/recommended'],
  promise.configs['flat/recommended'],
  prettierRecommended,

  // Global Ignore
  {
    ignores: ['**/dist/**'],
  },

  // Config for import plugin (legacy)
  {
    plugins: { import: patchedImportPlugin },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
        node: true,
      },
    },
    rules: {
      ...importPlugin.configs.recommended.rules,
      ...importPlugin.configs.typescript.rules,
      ...importRules,
    },
  },

  // Config for Cypress
  {
    files: ['**/*.cy.spec.ts'],
    plugins: { cypress },
    rules: {
      ...cypress.configs.recommended.rules,
      ...cypressRules,
    },
    languageOptions: {
      ...cypress.configs.globals.languageOptions,
      ...cypress.configs.recommended.languageOptions,
    },
  },

  // General setup
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        defineProps: 'readonly',
        withDefaults: 'readonly',
      },
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },

  // Rules overrides
  {
    rules: {
      // Vue rules override
      ...vueRules,

      // Typescript Rules
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          format: ['PascalCase'],
          selector: 'interface',
        },
        {
          format: ['PascalCase'],
          selector: 'typeAlias',
        },
        {
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
          selector: 'variable',
        },
        {
          format: ['PascalCase'],
          selector: 'typeLike',
        },
        {
          format: ['camelCase'],
          selector: 'function',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-shadow': 'error',

      // Standard Rules
      'camelcase': 'error',
      'capitalized-comments': 'error',
      'complexity': ['error', 50],
      'default-param-last': 'error',
      'multiline-comment-style': 'error',
      'no-console': [
        'error',
        {
          allow: ['error'],
        },
      ],
      /*
       * Note: process.env might not be available in flat config build time unless we use a define or just keep it as runtime check if it's evaluated at runtime.
       * But tseslint.config is evaluated at runtime (when eslint runs).
       */
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      'no-duplicate-imports': 'error',
      'no-else-return': 'error',
      'no-empty-function': 'error',
      'no-nested-ternary': 'error',
      'no-shadow': 'off', // Turned off in favor of @typescript-eslint/no-shadow
      'no-unneeded-ternary': 'error',
      'no-useless-return': 'error',
      'no-var': 'error',
      'operator-assignment': 'error',
      'prefer-const': 'error',
      'prefer-destructuring': [
        'error',
        { array: false, object: true },
        { enforceForRenamedProperties: false },
      ],
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
          quoteProps: 'consistent',
          semi: true,
          singleQuote: true,
          tabWidth: 2,
          useTabs: false,
        },
      ],
      'promise/prefer-await-to-callbacks': 'error',
      'promise/prefer-await-to-then': 'error',
      'quotes': ['error', 'single', { avoidEscape: true }],
    },
  },

  // Specific overrides
  {
    files: [
      '**/main.ts',
      '**/components/{v1,v2}/index.ts',
      '**/registerComponent.util.ts',
    ],
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/no-reserved-component-names': 'off',
    },
  },
  {
    files: ['vue.config.js'],
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
);
