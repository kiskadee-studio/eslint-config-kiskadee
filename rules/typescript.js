const level1 = {
  //----------------------------------------------------------------------------
  // Resolves conflicts among various ESLint configurations.
  //----------------------------------------------------------------------------

  /**
   * It's not required to enforce the "no-use-before-define" rule in
   * ESLint when working with TypeScript because the TypeScript compiler
   * natively handles this issue.
   */
  'no-use-before-define': 'off',

  /**
   * Disabled due to the type inference in Typescript
   * @see {@link https://www.typescriptlang.org/docs/handbook/type-inference.html}
   */
  'consistent-return': 'off',

  /**
   * The purpose of this rule is to safeguard the integrity of imported
   * files through extension validation. By applying this configuration, we
   * ensure compatibility with TypeScript files.
   */
  'import/extensions': [
    'error',
    {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    },
  ],
};

const level2 = {
  //----------------------------------------------------------------------------
  // Resolves conflicts among various ESLint configurations.
  //----------------------------------------------------------------------------

  /**
   * This rule is deactivated because the "unicorn/prefer-regexp-test" rule
   * already handles the same matter. Since the context is not exclusive to
   * TypeScript but also applies to EcmaScript, the Unicorn rule is given
   * preference.
   * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-regexp-test.md}
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md}
   */
  '@typescript-eslint/prefer-regexp-exec': 'off',

  /**
   * The "unused-imports/no-unused-vars" plugin needs to disable this
   * rule in order to successfully remove unused imports.
   */
  '@typescript-eslint/no-unused-vars': 'off',

  /**
   * Relocating a file to a different folder may necessitate updating all
   * import statements within that file. However, this issue can be avoided
   * by using absolute import paths. This ESLint rule assists in ensuring
   * that absolute import paths are consistently implemented.
   */
  'typescript-paths/absolute-import': 'warn',
  'typescript-paths/absolute-export': 'warn',
  'typescript-paths/absolute-parent-import': 'warn',
  'typescript-paths/absolute-parent-export': 'warn',
};

const level3 = {
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
   * In certain cases, seasoned developers may find it necessary to use the
   * Non-null assertion operator when working with external libraries or
   * APIs that offer limited TypeScript compatibility, minimizing the
   * requirement for extensive null-checking or type-guarding. This feature
   * can also be advantageous in test scenarios for asserting non-null
   * values, leading to more streamlined test code. By permitting the use of
   * this operator when suitable, developers are empowered to make
   * well-informed choices while upholding best practices.
   */
  '@typescript-eslint/no-non-null-assertion': 'off',
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
};

module.exports = { level1, level2, level3 };
