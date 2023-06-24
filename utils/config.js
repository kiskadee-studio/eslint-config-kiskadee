const { level0: jsOnly } = require('../rules/javascript');
const plugins = require('./plugins');
const env = require('./env');

module.exports = (level, rules) => {
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
           * @see {@link https://typescript-eslint.io/architecture/parser#ecmafeatures}
           */
          ecmaFeatures: {
            jsx: true,
          },
          ecmaVersion: 'latest',
        },

        extends: [
          // JavaScript / React
          rules.react ? plugins.reactAirbnb : plugins.javaScriptAirbnb,
          level >= 2 ? plugins.unicorn : undefined,

          // TypeScript
          plugins.typescript,
          plugins.importTypescript,
          level >= 2 ? plugins.typescriptPaths : undefined,

          // Testing
          plugins.vitest,
          rules.react ? plugins.testingLibraryReact : undefined,

          // Formatting
          plugins.prettier,
        ].filter(Boolean),

        plugins: [
          level >= 2 ? plugins.unusedImports : undefined,
          rules.reactNative ? plugins.reactNative : undefined,
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
