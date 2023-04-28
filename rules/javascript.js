module.exports = {
  /**
   * Restricting the number of lines in a file promotes improved code
   * organization. A file with an excessive number of lines could suggest
   * that it carries too many responsibilities, and restructuring its logic
   * across multiple modules would be advantageous.
   */
  "max-lines": ["error", 500],

  /**
   * Numerous abbreviations are already widely recognized among developers.
   * The responsibility for maintaining consistent naming extends beyond the
   * use of simple abbreviations.
   */
  "unicorn/prevent-abbreviations": "off",

  /**
   * Prettier uses double quotes by default; however, the Airbnb style guide
   * recommends single quotes. For this reason, we have chosen to stick with
   * single quotes.
   * @see {@link https://github.com/airbnb/javascript#strings--quotes}
   * @see {@link https://prettier.io/docs/en/options.html#quotes}
   * @see {@link https://github.com/prettier/eslint-plugin-prettier#options}
   */
  "prettier/prettier": ["error", { singleQuote: true }],

  /**
   * Remove unused imports
   */
  "unused-imports/no-unused-imports": "error",
  "unused-imports/no-unused-vars": [
    "warn",
    {
      vars: "all",
      varsIgnorePattern: "^_",
      args: "after-used",
      argsIgnorePattern: "^_",
    },
  ],

  /**
   * When substituting null with undefined, there may be situations where
   * undefined is not a suitable replacement for certain typings that explicitly
   * expect null. This substitution can lead to potential issues and
   * inconsistencies in the enforcement of typings. Therefore, to ensure proper
   * handling of null values and maintain consistency with typings, it is
   * justified to disable this rule. This approach allows developers to handle
   * null and undefined cases explicitly, according to their specific
   * requirements, and avoids any unintended consequences.
   */
  "unicorn/no-useless-undefined": "off",

  /**
   * Rules that impose limitations on syntax usage go beyond the purview of
   * ESLint. We hold the view that certain decisions should be made by
   * developers themselves, rather than constraining their choices. If any
   * of these rules are significant for your project, please enable them in
   * your project's settings.
   */
  "no-restricted-syntax": "off",
  "no-param-reassign": "off",
  "no-restricted-exports": "off",
  "no-plusplus": "off",
  "unicorn/no-array-reduce": "off",
  "import/prefer-default-export": "off",
};
