export default {
  'vue/attributes-order': [
    'error',
    {
      order: [
        ['GLOBAL', 'UNIQUE', 'SLOT'],
        'DEFINITION',
        'CONDITIONALS',
        'LIST_RENDERING',
        'RENDER_MODIFIERS',
        'CONTENT',
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'ATTR_DYNAMIC',
        'EVENTS',
        ['ATTR_SHORTHAND_BOOL', 'ATTR_STATIC'],
      ],
      alphabetical: true,
    },
  ],
  'vue/block-lang': ['error', { script: { lang: 'ts' } }],
  'vue/component-api-style': ['error', ['script-setup', 'composition']],
  'vue/component-name-in-template-casing': ['error', 'PascalCase'],
  'vue/block-order': [
    'error',
    {
      order: ['script[setup]', 'script', 'template', 'style'],
    },
  ],
  'vue/custom-event-name-casing': 'error',
  'vue/define-emits-declaration': ['error', 'type-based'],
  'vue/define-macros-order': [
    'error',
    {
      order: ['defineProps', 'defineEmits', 'defineModel'],
      defineExposeLast: true,
    },
  ],
  'vue/define-props-declaration': ['error', 'type-based'],
  'vue/html-comment-content-newline': 'error',
  'vue/html-self-closing': [
    'error',
    {
      html: {
        void: 'always',
        normal: 'always',
        component: 'always',
      },
      svg: 'always',
      math: 'always',
    },
  ],
  'vue/max-attributes-per-line': 'off',
  'vue/multi-word-component-names': 'off',
  'vue/new-line-between-multi-line-property': 'error',
  'vue/next-tick-style': ['error', 'callback'],
  'vue/no-dupe-keys': 'error',
  'vue/no-export-in-script-setup': 'error',
  'vue/no-lone-template': 'error',
  'vue/no-reserved-component-names': 'off',
  'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
  'vue/no-static-inline-styles': ['error', { allowBinding: false }],
  'vue/no-unused-emit-declarations': 'error',
  'vue/no-unused-refs': 'error',
  'vue/no-useless-v-bind': [
    'error',
    { ignoreIncludesComment: false, ignoreStringEscape: false },
  ],
  'vue/padding-line-between-blocks': ['error', 'always'],
  'vue/prefer-import-from-vue': 'error',
  'vue/prefer-true-attribute-shorthand': ['error', 'always'],
  'vue/prop-name-casing': ['error', 'camelCase'],
  'vue/require-explicit-emits': [
    'error',
    {
      allowProps: false,
    },
  ],
  'vue/require-typed-ref': 'error',
  'vue/singleline-html-element-content-newline': 'off',
  'vue/v-on-event-hyphenation': [
    'error',
    'always',
    {
      autofix: true,
    },
  ],
};
