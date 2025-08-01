// .eslintrc.js
module.exports = {
  // Base configuration for the entire project
  root: true,
  env: {
    node: true,
  },
  // You can define a common parser and plugins here
  // For example, if both services are TypeScript
  // parser: '@typescript-eslint/parser',
  // plugins: ['@typescript-eslint'],

  // 'overrides' is the key for a monorepo setup
  overrides: [
    {
      files: ['frontend/**/*.js', 'frontend/**/*.jsx'],
      extends: [
        // Your frontend-specific configuration (e.g., React)
        'eslint:recommended',
        'plugin:react/recommended',
      ],
      env: {
        browser: true,
        es2021: true,
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
        // Your backend-specific configuration (e.g., Node.js)
        'eslint:recommended',
      ],
      env: {
        node: true,
        es2021: true,
      },
    },
  ],
};