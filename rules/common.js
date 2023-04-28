module.exports = {
  /**
   * Limiting the number of lines in a file contributes to better code
   * organization. An excessively large file may indicate that it has too
   * many responsibilities, and it would be beneficial to restructure its
   * logic across multiple modules.
   */
  'max-lines': ['error', 500],

  /**
   * Numerous abbreviations are already widely recognized among developers.
   * The responsibility for maintaining consistent naming extends beyond the
   * use of simple abbreviations.
   */
  'unicorn/prevent-abbreviations': 'off',

  /**
   * Prettier uses double quotes by default; however, the Airbnb style guide
   * recommends single quotes. For this reason, we have chosen to stick with
   * single quotes.
   * @see {@link https://github.com/airbnb/javascript#strings--quotes}
   * @see {@link https://prettier.io/docs/en/options.html#quotes}
   * @see {@link https://github.com/prettier/eslint-plugin-prettier#options}
   */
  'prettier/prettier': ['error', { singleQuote: true }],

  /**
   * Unused imports will be removed.
   */
  'unused-imports/no-unused-imports': 'error',
  'unused-imports/no-unused-vars': [
    'warn',
    {
      vars: 'all',
      varsIgnorePattern: '^_',
      args: 'after-used',
      argsIgnorePattern: '^_',
    },
  ],

  /**
   * Rules that impose limitations on syntax usage go beyond the purview of
   * ESLint. We hold the view that certain decisions should be made by
   * developers themselves, rather than constraining their choices. If any
   * of these rules are significant for your project, please enable them in
   * your project's settings.
   */
  'no-restricted-syntax': 'off',
  'no-param-reassign': 'off',
  'no-restricted-exports': 'off',
  'no-plusplus': 'off',
  'unicorn/no-array-reduce': 'off',
  'import/prefer-default-export': 'off',
};
