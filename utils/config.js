const { level0: jsOnly } = require('../rules/javascript');
const plugins = require('./plugins');
const env = require('./env');

module.exports = (level, rules) => {
  const level2Plugins = [plugins.unusedImports, plugins.noRelativeImportPaths];

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

      //--------------------------------------------------------------------------
      // TypeScript ESLint Configurations
      //--------------------------------------------------------------------------
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

        plugins: [
          ...(level > 1 ? level2Plugins : []),
          ...(rules.reactNative ? [plugins.reactNative] : []),
        ],

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
