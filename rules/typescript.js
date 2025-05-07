import tseslint from 'typescript-eslint';
import eslint from '@eslint/js';

export const tsEslintConfig = tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    rules: {
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
    },
  },
);

export default {
  'camelcase': 'error',
  'capitalized-comments': 'error',
  'complexity': ['error', 50],
  'default-param-last': 'error',
  'func-style': ['error', 'expression'],
  'multiline-comment-style': 'error',
  'no-console': [
    'error',
    {
      allow: ['error'],
    },
  ],
  'no-debugger': 'error',
  'no-duplicate-imports': 'error',
  'no-else-return': 'error',
  'no-empty-function': 'error',
  'no-nested-ternary': 'error',
  'no-shadow': 'error',
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
  'promise/prefer-await-to-callbacks': 'error',
  'promise/prefer-await-to-then': 'error',
};
