// .eslintrc.js
module.exports = {
  // Base configuration for the entire project
  root: true,
  env: {
    node: true,
  },

  overrides: [
    {
      files: ['frontend/**/*.js', 'frontend/**/*.jsx'],
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
      ],
      env: {
        browser: true,
        es2021: true,
      },
      parserOptions: {
        // This fixes the 'import/export' parsing error
        sourceType: 'module'
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
    {
      files: ['backend/**/*.js'],
      extends: [
        'eslint:recommended',
      ],
      env: {
        node: true,
        es2021: true,
      },
    },
    {
      // This new block is for your Jest test files in the backend
      files: ['backend/__tests__/**/*.js'],
      extends: [
        'eslint:recommended',
      ],
      env: {
        node: true,
        es2021: true,
        // This tells ESLint that 'describe', 'it', 'expect' etc. are global
        'jest': true
      }
    }
  ],
};