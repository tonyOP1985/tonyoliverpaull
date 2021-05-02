module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'arrow-body-style': 'off',
    'arrow-parens': 'off',
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    camelcase: 'off',
    'consistent-return': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'max-len': ['error', {
      code: 150,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
      ignoreComments: true
    }],
    'max-lines-per-function': ['error', {
      max: 100,
      skipBlankLines: true,
      skipComments: true
    }],
    'max-params': ['error', { max: 4 }],
    'no-await-in-loop': 'off',
    'no-continue': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': ['error'],
    'no-restricted-syntax': 'off',
    'no-underscore-dangle': 'off',
    'no-debugger': 'warn',
    'no-unused-vars': 'warn',
    'object-curly-newline': ['error', {
      consistent: true
    }],
    'operator-linebreak': ['error', 'after'],
    'prefer-const': ['error', { destructuring: 'all' }],
    'prefer-destructuring': 'off',
    'vue/array-bracket-spacing': ['warn', 'never'],
    'vue/attribute-hyphenation': 'off',
    'vue/block-spacing': ['warn', 'always'],
    'vue/eqeqeq': ['warn', 'always'],
    'vue/key-spacing': ['warn', {
      afterColon: true,
      beforeColon: false
    }],
    'vue/max-attributes-per-line': ['warn', {
      singleline: 3
    }],
    'vue/multiline-html-element-content-newline': 'off',
    'vue/object-curly-spacing': ['warn', 'always'],
    'vue/order-in-components': ['warn', {
      order: [
        'el',
        'name',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'fetch',
        'asyncData',
        'data',
        'LIFECYCLE_HOOKS',
        'watch',
        'computed',
        'methods',
        'head',
        ['template', 'render'],
        'renderError'
      ]
    }],
    'vue/singleline-html-element-content-newline': 'off'
  }
}
