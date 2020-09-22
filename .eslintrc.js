module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    'prettier',
    '@typescript-eslint',
    'jest',
    'testing-library',
    'jest-dom',
  ],
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
    'plugin:react-hooks/recommended',
    'plugin:jest-dom/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
  rules: {
    'react/jsx-first-prop-new-line': [1, 'multiline'],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    quotes: 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.ts',
          '**/*.test.tsx',
          '**/setupTests.ts',
          '**/unitTestUtils.js',
        ],
      },
    ],
    'object-curly-newline': 0,
    'import/prefer-default-export': 0,
    'implicit-arrow-linebreak': 0,
    'spaced-comment': ['error', 'always', { markers: ['/'] }], // Allow /// <reference types="react-scripts" />
    'no-extra-semi': 0,
    '@typescript-eslint/no-extra-semi': ['warn'],
    semi: 0,
    '@typescript-eslint/semi': ['warn'],
    'operator-linebreak': 0,
    '@typescript-eslint/quotes': ['warn', 'single'],
    'max-len': ['warn', 185],
    'arrow-parens': 0,
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'no-console': ['warn', { allow: ['error'] }],
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-empty-function': 0,
    'no-use-before-define': 0,
    '@typescript-eslint/ban-ts-comment': 0, // allow @ts-ignore
    '@typescript-eslint/indent': ['error', 2],
  },
};
