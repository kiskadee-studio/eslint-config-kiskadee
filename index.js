const reactRules = require('./rules/react');
const commonRules = require('./rules/common');

module.exports = {
  //----------------------------------------------------------------------------
  // Node
  //----------------------------------------------------------------------------

  env: {
    node: true,
    jest: true,
  },

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
    /**
     * Adopting JavaScript modules (ESM) is not applicable for general
     * configuration files.
     */
    'unicorn/prefer-module': 'off',

    //--------------------------------------------------------------------------

    ...commonRules,
  },

  //----------------------------------------------------------------------------
  // TypeScript
  //----------------------------------------------------------------------------

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
        //----------------------------------------------------------------------
        // JavaScript and React
        //----------------------------------------------------------------------

        /**
         * @see {@link https://www.npmjs.com/package/eslint-config-airbnb}
         */
        'airbnb',
        'airbnb/hooks',

        /**
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn#recommended-config}
         */
        'plugin:unicorn/recommended',

        //----------------------------------------------------------------------
        // Testing
        //----------------------------------------------------------------------

        /**
         * @see {@link https://www.npmjs.com/package/eslint-plugin-jest-dom}
         */
        'plugin:jest-dom/recommended',

        //----------------------------------------------------------------------
        // TypeScript
        //----------------------------------------------------------------------
        /**
         * @see {@link https://typescript-eslint.io/getting-started}
         */
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',

        // Prettier
        'plugin:prettier/recommended',
      ],

      plugins: ['unused-imports'],

      rules: {
        //----------------------------------------------------------------------
        // CONFLICTS
        //----------------------------------------------------------------------

        /**
         * This rule is disabled due to the "unicorn/prefer-regexp-test" rule
         * that deals with the same issue. Since this is not an exclusive rule
         * in the context of TypeScript, but of EcmaScript, we gave preference
         * to Unicorn
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-regexp-test.md}
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md}
         */
        '@typescript-eslint/prefer-regexp-exec': 'off',

        /**
         * TypeScript handles this natively
         */
        'no-use-before-define': 'off',

        // /**
        //  * Some typings don't handle this rule well.
        //  */
        // 'unicorn/no-useless-undefined': 'off',

        /**
         * This rule was originally created to guarantee the use of components
         * in JSX files, but because we adopt TypeScript as a standard this rule
         * needs to be adjusted for TSX
         * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md}
         * @see {@link https://www.typescriptlang.org/docs/handbook/jsx.html}
         */
        'react/jsx-filename-extension': [
          'error',
          {
            extensions: ['.tsx'],
          },
        ],
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            extensions: ['.ts', '.tsx'],
          },
        ],

        /**
         * Disabled due to the type inference in Typescript
         */
        'consistent-return': 'off',

        /**
         * The idea here is to maintain the kebab case as standard as
         * recommended by Unicorn, except for React components, which require
         * pascal case.
         * @see {@link https://github.com/airbnb/javascript/tree/master/react#naming }
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md}
         * @see {@link https://stackoverflow.com/questions/2103596/regex-that-matches-camel-and-pascal-case}
         */
        'unicorn/filename-case': [
          'error',
          {
            cases: {
              kebabCase: true,
            },
            ignore: [
              // React components, test, styles, etc
              '^(?:[A-Z][a-z]+)+(\\.[a-z]+)?\\.ts(x)?$',

              // React Hooks
              '^(use)(?:[A-Z][a-z]+)+\\.ts?$',

              // Typescript config
              'setupTests.ts',

              // Create React App
              'reportWebVitals.ts',
            ],
          },
        ],

        /**
         * We enabled all TypeScript rules, but there are rules that encourage
         * or not the use of Non-null assertion operator, we chose to disable
         * the only rule that discourages
         */
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',

        //----------------------------------------------------------------------
        // Jest
        //----------------------------------------------------------------------

        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: ['**/*.test.tsx', '**/setupTests.ts'],
          },
        ],

        //----------------------------------------------------------------------
        // TypeScript
        //----------------------------------------------------------------------

        /**
         * TypeScript allows specifying a type keyword on imports to
         * indicate that the export exists only in the type system, not at
         * runtime. This allows transpilers to drop imports without knowing
         * the types of the dependencies.
         * @see {https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export}
         * @see {https://www.typescriptlang.org/tsconfig#isolatedModules}
         */
        '@typescript-eslint/consistent-type-imports': 'error',

        /**
         * It's generally considered best practice to avoid using ts-ignore,
         * but sometimes it's necessary. When the "strict" setting is
         * enabled in a TypeScript project, we expect that extra care has
         * been taken with typing, which makes the use of ts-ignore less
         * common. Conversely, if "strict" is set to false, it suggests that
         * the project may not have strong typing, which would also limit
         * the use of this rule. Therefore, we've decided to disable this
         * rule for the sake of flexibility in such scenarios.
         */
        '@typescript-eslint/ban-ts-comment': 'off',

        /**
         * Functions with explicit return types improve code readability and
         * maintainability. Without an explicit return type, it can be
         * difficult to determine what type of value a function returns.
         * This can lead to confusion and errors down the line. Explicit
         * return types also help catch type errors during development and
         * prevent unexpected behavior at runtime. Overall, enforcing
         * explicit function return types is a good practice for writing
         * clean and reliable code.
         */
        '@typescript-eslint/explicit-function-return-type': 'error',

        //----------------------------------------------------------------------
        // RECOMMENDATIONS
        //----------------------------------------------------------------------

        ...commonRules,

        //----------------------------------------------------------------------
        // UNUSED IMPORTS
        //----------------------------------------------------------------------

        /**
         * Unused imports will be removed.
         */
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
    //--------------------------------------------------------------------------
    // React
    //--------------------------------------------------------------------------
    {
      files: ['**/*.tsx'],
      rules: reactRules,
    },
  ],

  // settings: {
  //   'import/resolver': {
  //     /**
  //      * @see {https://github.com/import-js/eslint-plugin-import#importextensions}
  //      */
  //     node: {
  //       extensions: ['.js', '.jsx', '.ts', '.tsx'],
  //     },
  //     // typescript: {},
  //   },
  // },
};
