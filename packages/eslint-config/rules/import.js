export default {
  'import/newline-after-import': ['error', { count: 1 }],
  'import/order': [
    'error',
    {
      'groups': [
        ['builtin', 'external'],
        ['internal'],
        ['parent', 'sibling', 'index'],
      ],
      'named': true,
      'newlines-between': 'always',
      'alphabetize': { order: 'asc', caseInsensitive: true },
    },
  ],
};
