/**
 * Packages: typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
 * @see
 * {@link https://typescript-eslint.io/linting/configs#projects-with-type-checking}
 */
module.exports = {
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],

      extends: [
        'kiskadee/typescript',
        'plugin:@typescript-eslint/strict-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
      ],

      rules: {
        /**
         * TypeScript allows specifying a type keyword on imports to
         * indicate that the export exists only in the type system, not at
         * runtime. This allows transpilers to drop imports without knowing
         * the types of the dependencies.
         * @see
         * {@link https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export}
         * {@link https://www.typescriptlang.org/tsconfig#isolatedModules}
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
      },
    },
  ],
};
