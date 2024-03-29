module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin', 'simple-import-sort'],
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ['node_modules/*', '.parcel-cache/*', '.eslintrc'],
  rules: {
    '@typescript-eslint/no-explicit-any': 0,
    'import/prefer-default-export': 0,
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'import/order': 0,
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^@/types'],
          ['^@?\\/api'],
          ['^@?\\/utils'],
          ['^@?\\/ui\\/[^ce]', '^@?\\/ui\\/e', '^@?\\/ui\\/c'],
          ['^\\u0000'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ['^.+\\.s?css$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off',
        'no-console': 'off',
        'no-restricted-syntax': [
          'warn',
          {
            selector:
              'CallExpression[callee.object.name="console"][callee.property.name=/^(log|warn|info|trace)$/]',
            message: 'Unexpected property on console object was called',
          },
        ],
      },
    },
  ],
  globals: {
    caches: false,
    fetch: false,
  },
};
