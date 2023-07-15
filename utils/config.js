const { level0: jsOnly } = require('../rules/javascript');
const plugins = require('./plugins');
const env = require('./env');

module.exports = (level, rules) => {
  const isLevel2 = level >= 2;
  const hasReact = rules.react;
  const hasReactNative = rules.reactNative;

  return {
    root: true,

    overrides: [
      //------------------------------------------------------------------------
      // JavaScript / Node ESLint Configurations
      //------------------------------------------------------------------------
      {
        files: ['**/*.js', '**/*.cjs', '**/*.mjs'],

        env,

        extends: [
          plugins.javaScriptAirbnb,
          plugins.unicorn,
          plugins.vitest,
          plugins.prettier,
        ],

        rules: { ...rules.js, ...jsOnly },
      },

      //------------------------------------------------------------------------
      // TypeScript ESLint Configurations
      //------------------------------------------------------------------------
      {
        files: ['**/*.ts', '**/*.tsx'],

        env,

        /**
         * @see {@link https://typescript-eslint.io/getting-started#step-2-configuration}
         */
        parser: '@typescript-eslint/parser',
        parserOptions: {
          /**
           * @see {@link https://typescript-eslint.io/linting/typed-linting}
           */
          ecmaFeatures: {
            jsx: true,
          },
          ecmaVersion: 'latest',
          /**
           * @see {@link https://typescript-eslint.io/linting/typed-linting}
           * @see {@link https://typescript-eslint.io/linting/typed-linting#specifying-tsconfigs}
           */
          project: true,
        },

        extends: [
          // JavaScript / React
          hasReact ? plugins.reactAirbnb : plugins.javaScriptAirbnb,
          isLevel2 ? plugins.unicorn : undefined,

          // TypeScript
          plugins.typescriptStrict,
          plugins.typescriptStylistic,
          plugins.importTypescript,
          isLevel2 ? plugins.typescriptPaths : undefined,

          // Testing
          plugins.vitest,
          hasReact ? plugins.testingLibraryReact : undefined,

          // Formatting
          plugins.prettier,
        ].filter(Boolean),

        plugins: [
          isLevel2 ? plugins.unusedImports : undefined,
          hasReact && isLevel2 ? plugins.reactRefresh : undefined,
          hasReactNative ? plugins.reactNative : undefined,
        ].filter(Boolean),

        rules: {
          ...rules.js,
          ...rules.ts,
          ...rules.react,
          ...rules.reactNative,
        },
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
