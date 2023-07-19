module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'next',
    'turbo',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'eol-last': [2, 'always'],
    semi: [2, 'always'],
    quotes: [2, 'single', { avoidEscape: true }],
    'jsx-quotes': [2, 'prefer-single'],
    'no-html-link-for-pages': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    'import/no-anonymous-default-export': 'off',
    'prettier/prettier': 'error',
    'no-multiple-empty-lines': ['error'],
    'react/display-name': 'off',
    'react-hooks/rules-of-hooks': 'warn',
    'react/no-unescaped-entities': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
  },
};
