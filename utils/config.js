const { level0: jsOnly } = require('../rules/javascript');
const plugins = require('./plugins');
const env = require('./env');

module.exports = (level, rules) => {
  return {
    //--------------------------------------------------------------------------
    // Node (.js) ESLint Configurations
    //--------------------------------------------------------------------------

    env,

    root: true,

    extends: [
      plugins.javaScriptAirbnb,
      plugins.unicorn,
      plugins.vitest,
      plugins.prettier,
    ],

    rules: { ...rules.js, ...jsOnly },

    //--------------------------------------------------------------------------
    // TypeScript (.ts, .tsx) ESLint Configurations
    //--------------------------------------------------------------------------

    overrides: [
      {
        files: ['**/*.ts', '**/*.tsx'],

        env,

        parser: '@typescript-eslint/parser',

        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          ecmaVersion: 'latest',
          sourceType: 'module',
          project: ['./tsconfig.json'],
        },

        extends: [
          rules.react ? plugins.reactAirbnb : plugins.javaScriptAirbnb,
          plugins.unicorn,
          plugins.typescript,
          plugins.importTypescript,
          plugins.vitest,
          rules.react ? plugins.testingLibraryReact : undefined,
          plugins.prettier,
        ].filter(Boolean),

        plugins:
          level > 1
            ? [plugins.unusedImports, plugins.noRelativeImportPaths]
            : undefined,

        rules: {
          ...rules.js,
          ...rules.ts,
        },
      },

      //------------------------------------------------------------------------
      // React (.tsx) ESLint Configurations
      //------------------------------------------------------------------------

      {
        files: ['**/*.tsx'],
        plugins: rules.reactNative ? [plugins.reactNative] : undefined,
        rules: { ...rules.react, ...rules.reactNative } ?? undefined,
      },
    ],

    settings: {
      /**
       * @see {@link https://github.com/import-js/eslint-plugin-import#typescript}
       */
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
  };
};
