const {
  essentialJavaScriptRules,
  essentialJavaScriptOnlyRules,
} = require('./rules/javascript');
const { essentialTypeScriptRules } = require('./rules/typescript');
const { extraReactRules } = require('./rules/react');

module.exports = (
  extraJavaScriptRules,
  extraTypeScriptRules,
  essentialReactRules
) => {
  return {
    //--------------------------------------------------------------------------
    // Node (.js) ESLint Configurations
    //--------------------------------------------------------------------------

    env: {
      node: true,
      jest: true,
    },

    root: true,

    extends: [
      /**
       * @see {@link https://www.npmjs.com/package/eslint-config-airbnb-base}
       */
      'airbnb-base',

      /**
       * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn}
       */
      'plugin:unicorn/recommended',

      /**
       * @see {@link https://github.com/prettier/eslint-plugin-prettier}
       */
      'plugin:prettier/recommended',
    ],

    rules: {
      ...essentialJavaScriptRules,
      ...essentialJavaScriptOnlyRules,
      ...extraJavaScriptRules,
    },

    //--------------------------------------------------------------------------
    // TypeScript (.ts, .tsx) ESLint Configurations
    //--------------------------------------------------------------------------

    overrides: [
      {
        files: ['**/*.ts', '**/*.tsx'],

        env: {
          browser: true,
          es2022: true,
          jest: true,
          node: true,
        },

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
          //--------------------------------------------------------------------
          // JavaScript and React
          //--------------------------------------------------------------------

          /**
           * @see {@link https://www.npmjs.com/package/eslint-config-airbnb}
           */
          'airbnb',
          'airbnb/hooks',

          /**
           * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn#recommended-config}
           */
          'plugin:unicorn/recommended',

          //--------------------------------------------------------------------
          // Jest
          //--------------------------------------------------------------------

          /**
           * @see {@link https://www.npmjs.com/package/eslint-plugin-jest-dom}
           */
          'plugin:jest-dom/recommended',

          //--------------------------------------------------------------------
          // TypeScript
          //--------------------------------------------------------------------

          /**
           * @see {@link https://typescript-eslint.io/getting-started}
           */
          'plugin:@typescript-eslint/recommended',

          /**
           * @see {@link https://github.com/import-js/eslint-plugin-import#typescript}
           */
          'plugin:import/typescript',

          //--------------------------------------------------------------------
          // Prettier
          //--------------------------------------------------------------------

          'plugin:prettier/recommended',
        ],

        plugins: ['unused-imports'],

        rules: {
          ...essentialJavaScriptRules,
          ...extraJavaScriptRules,

          ...essentialTypeScriptRules,
          ...extraTypeScriptRules,
        },
      },

      //------------------------------------------------------------------------
      // React (.tsx) ESLint Configurations
      //------------------------------------------------------------------------

      {
        files: ['**/*.tsx'],
        rules: {
          ...essentialReactRules,
          ...extraReactRules,
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
