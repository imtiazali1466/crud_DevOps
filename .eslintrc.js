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
        sourceType: 'module'
      },
      settings: {
        // Manually specify the React version to prevent warnings
        // and false deprecation errors (your project uses React 17)
        react: {
          version: '17',
        },
      },
    },
    {
      // New block to configure linting for frontend test files
      files: ['frontend/src/**/*.test.js', 'frontend/src/**/*.test.jsx'],
      env: {
        browser: true,
        es2021: true,
        // This tells ESLint that 'describe', 'test', 'expect' etc. are global
        'jest': true
      },
      settings: {
        react: {
          version: '17',
        },
      },
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
      ],
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
      files: ['backend/__tests__/**/*.js'],
      extends: [
        'eslint:recommended',
      ],
      env: {
        node: true,
        es2021: true,
        'jest': true
      }
    }
  ],
};