module.exports = {
  /**
   * TypeScript allows specifying a type keyword on imports to
   * indicate that the export exists only in the type system, not at
   * runtime. This allows transpilers to drop imports without knowing
   * the types of the dependencies.
   * @see {https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export}
   * @see {https://www.typescriptlang.org/tsconfig#isolatedModules}
   */
  "@typescript-eslint/consistent-type-imports": "error",

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
  "@typescript-eslint/ban-ts-comment": "off",

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
  "@typescript-eslint/explicit-function-return-type": "error",

  /**
   * We enabled all TypeScript rules, but there are rules that encourage
   * or not the use of Non-null assertion operator, we chose to disable
   * the only rule that discourages
   */
  "@typescript-eslint/no-non-null-assertion": "off",
  "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
};
