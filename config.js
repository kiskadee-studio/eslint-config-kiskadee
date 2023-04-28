module.exports = (javascriptRules, typescriptRules, reactRules) => {
  return {
    //--------------------------------------------------------------------------
    // Configuration Files (Node)
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
      "airbnb-base",

      /**
       * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn}
       */
      "plugin:unicorn/recommended",

      /**
       * @see {@link https://github.com/prettier/eslint-plugin-prettier}
       */
      "plugin:prettier/recommended",
    ],

    rules: {
      //------------------------------------------------------------------------
      // Fixes conflicts between different ESLint configurations
      //------------------------------------------------------------------------

      /**
       * The "unused-imports/no-unused-vars" plugin needs to disable this
       * rule in order to successfully remove unused imports.
       */
      "no-unused-vars": "off",

      /**
       * Adopting JavaScript modules (ESM) is not applicable for general
       * configuration files.
       */
      "unicorn/prefer-module": "off",

      //------------------------------------------------------------------------
      // JavaScript recommendations
      //------------------------------------------------------------------------

      ...javascriptRules,
    },

    //----------------------------------------------------------------------------
    // TypeScript
    //----------------------------------------------------------------------------

    overrides: [
      {
        files: ["**/*.ts", "**/*.tsx"],

        env: {
          browser: true,
          es2022: true,
          jest: true,
          node: true,
        },

        parser: "@typescript-eslint/parser",

        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          ecmaVersion: "latest",
          sourceType: "module",
          project: ["./tsconfig.json"],
        },

        extends: [
          //----------------------------------------------------------------------
          // JavaScript and React
          //----------------------------------------------------------------------

          /**
           * @see {@link https://www.npmjs.com/package/eslint-config-airbnb}
           */
          "airbnb",
          "airbnb/hooks",

          /**
           * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn#recommended-config}
           */
          "plugin:unicorn/recommended",

          //----------------------------------------------------------------------
          // Testing
          //----------------------------------------------------------------------

          /**
           * @see {@link https://www.npmjs.com/package/eslint-plugin-jest-dom}
           */
          "plugin:jest-dom/recommended",

          //----------------------------------------------------------------------
          // TypeScript
          //----------------------------------------------------------------------
          /**
           * @see {@link https://typescript-eslint.io/getting-started}
           */
          "plugin:@typescript-eslint/recommended",
          "plugin:import/typescript",

          // Prettier
          "plugin:prettier/recommended",
        ],

        plugins: ["unused-imports"],

        rules: {
          //--------------------------------------------------------------------
          // Fixes conflicts between different ESLint configurations
          //--------------------------------------------------------------------

          /**
           * This rule is disabled due to the "unicorn/prefer-regexp-test" rule
           * that deals with the same issue. Since this is not an exclusive rule
           * in the context of TypeScript, but of EcmaScript, we gave preference
           * to Unicorn
           * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-regexp-test.md}
           * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md}
           */
          "@typescript-eslint/prefer-regexp-exec": "off",

          /**
           * It's not required to enforce the "no-use-before-define" rule in
           * ESLint when working with TypeScript because the TypeScript compiler
           * natively handles this issue.
           */
          "no-use-before-define": "off",

          /**
           * This rule was originally created to guarantee the use of components
           * in JSX files, but because we adopt TypeScript as a standard this rule
           * needs to be adjusted for TSX
           * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md}
           * @see {@link https://www.typescriptlang.org/docs/handbook/jsx.html}
           */
          "react/jsx-filename-extension": [
            "error",
            {
              extensions: [".tsx"],
            },
          ],
          "import/extensions": [
            "error",
            "ignorePackages",
            {
              extensions: [".ts", ".tsx"],
            },
          ],

          /**
           * Disabled due to the type inference in Typescript
           */
          "consistent-return": "off",

          /**
           * The goal is to preserve kebab-case as the standard naming
           * convention, following Unicorn's recommendation, while making an
           * exception for React components that require PascalCase.
           * @see {@link https://github.com/airbnb/javascript/tree/master/react#naming }
           * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md}
           * @see {@link https://stackoverflow.com/questions/2103596/regex-that-matches-camel-and-pascal-case}
           */
          "unicorn/filename-case": [
            "error",
            {
              cases: {
                kebabCase: true,
              },
              ignore: [
                // React components, test, styles, etc
                "^(?:[A-Z][a-z]+)+(\\.[a-z]+)?\\.ts(x)?$",

                // React Hooks
                "^(use)(?:[A-Z][a-z]+)+\\.ts?$",

                // Typescript config
                "setupTests.ts",
              ],
            },
          ],

          /**
           * The "unused-imports/no-unused-vars" plugin needs to disable this
           * rule in order to successfully remove unused imports.
           */
          "@typescript-eslint/no-unused-vars": "off",

          //----------------------------------------------------------------------
          // Jest
          //----------------------------------------------------------------------

          "import/no-extraneous-dependencies": [
            "error",
            {
              devDependencies: ["**/*.test.tsx", "**/setupTests.ts"],
            },
          ],

          //--------------------------------------------------------------------
          // JavaScript recommendations
          //--------------------------------------------------------------------

          ...javascriptRules,

          //--------------------------------------------------------------------
          // TypeScript recommendations
          //--------------------------------------------------------------------

          ...typescriptRules,
        },
      },
      //------------------------------------------------------------------------
      // React recommendations
      //------------------------------------------------------------------------
      {
        files: ["**/*.tsx"],
        rules: reactRules,
      },
    ],
  };
};
