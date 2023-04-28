const essentialTypeScriptRules = {
  //----------------------------------------------------------------------------
  // Fixes conflicts between different ESLint configurations
  //----------------------------------------------------------------------------

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
   * It's not required to enforce the "no-use-before-define" rule in
   * ESLint when working with TypeScript because the TypeScript compiler
   * natively handles this issue.
   */
  'no-use-before-define': 'off',

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
   * The goal is to preserve kebab-case as the standard naming
   * convention, following Unicorn's recommendation, while making an
   * exception for React components that require PascalCase.
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
      ],
    },
  ],

  /**
   * The "unused-imports/no-unused-vars" plugin needs to disable this
   * rule in order to successfully remove unused imports.
   */
  '@typescript-eslint/no-unused-vars': 'off',

  //--------------------------------------------------------------------
  // Jest
  //--------------------------------------------------------------------

  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: ['**/*.test.tsx', '**/setupTests.ts'],
    },
  ],
};

const extraTypeScriptRules = {
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

  /**
   * We enabled all TypeScript rules, but there are rules that encourage
   * or not the use of Non-null assertion operator, we chose to disable
   * the only rule that discourages
   */
  '@typescript-eslint/no-non-null-assertion': 'off',
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
};

module.exports = { essentialTypeScriptRules, extraTypeScriptRules };
