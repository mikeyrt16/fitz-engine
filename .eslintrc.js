const path = require('path')

module.exports = {
  extends: ['airbnb-base', 'airbnb-typescript'],
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: [
    '.eslintrc.js',
    'node_modules',
  ],
  rules: {
    'no-bitwise': 'off',
    '@typescript-eslint/type-annotation-spacing': 'error',
    'class-methods-use-this': 'off',
    'default-case': 'off',
    'react/jsx-filename-extension': 'off',
    'consistent-return': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/no-extraneous-dependencies': 'off',
    'max-len': ['error', { code: 120 }],
    'import/prefer-default-export': 'off',
    semi: ['error', 'never'],
    '@typescript-eslint/semi': [2, 'never'],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: true,
        },
        singleline: {
          delimiter: 'comma',
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'typeLike',
        format: ['PascalCase'],
        custom: {
          regex: 'I[A-Z]',
          match: false,
        },
      },
    ],
  },
  overrides: [
    {
      files: ['*.js', '*.ts'],
    },
  ],
  env: {
    browser: true,
  },
}
