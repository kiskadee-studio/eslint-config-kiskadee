/**
 * Used just for JavaScript files, not TypeScript
 */
const level0 = {
  //----------------------------------------------------------------------------
  // Resolves conflicts among various ESLint configurations.
  //----------------------------------------------------------------------------

  /**
   * The "unused-imports/no-unused-vars" plugin needs to disable this
   * rule in order to successfully remove unused imports.
   */
  'no-unused-vars': 'off',

  /**
   * Adopting JavaScript modules (ESM) is not applicable for general
   * configuration files.
   */
  'unicorn/prefer-module': 'off',
};

const level1 = {
  //----------------------------------------------------------------------------
  // Resolves conflicts among various ESLint configurations.
  //----------------------------------------------------------------------------

  /**
   * Prettier uses double quotes by default; however, the Airbnb style guide
   * recommends single quotes. For this reason, we have chosen to stick with
   * single quotes.
   * @see {@link https://github.com/airbnb/javascript#strings--quotes}
   * @see {@link https://prettier.io/docs/en/options.html#quotes}
   * @see {@link https://github.com/prettier/eslint-plugin-prettier#options}
   */
  'prettier/prettier': ['error', { singleQuote: true }],
};

const level2 = {
  /**
   * Remove unused imports
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
   * Relocating a file to a different folder may necessitate updating all
   * import statements within that file. However, this issue can be avoided
   * by using absolute import paths. This ESLint rule assists in ensuring
   * that absolute import paths are consistently implemented.
   */
  'no-relative-import-paths/no-relative-import-paths': [
    'error',
    { allowSameFolder: true, rootDir: '/', prefix: '@' },
  ],

  //----------------------------------------------------------------------------
  // Resolves conflicts among various ESLint configurations.
  //----------------------------------------------------------------------------

  /**
   * A multitude of abbreviations are widely recognized among developers.
   * The task of maintaining consistent naming goes beyond merely avoiding
   * familiar abbreviations. Introducing a rule to carve out an exception
   * solely for React 'props' appears to be an imbalanced approach, as it
   * focuses on a single case instead of addressing more comprehensive
   * naming practices.
   */
  'unicorn/prevent-abbreviations': 'off',
};

const level3 = {
  /**
   * Restricting the number of lines in a file promotes improved code
   * organization. A file with an excessive number of lines could suggest
   * that it carries too many responsibilities, and restructuring its logic
   * across multiple modules would be advantageous.
   */
  'max-lines': ['error', 500],

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
  'unicorn/no-useless-undefined': 'off',

  /**
   * Nesting ternary expressions can make code more difficult to understand
   */
  'no-nested-ternary': 'error',

  /**
   * Allows importing devDependencies in configuration and test files
   */
  'import/no-extraneous-dependencies': [
    'error',
    { devDependencies: ['/**/*.config.*', '**/*.(spec|test).(t|j)s'] },
  ],

  /**
   * Rules that impose limitations on syntax usage go beyond the purview of
   * ESLint. We hold the view that certain decisions should be made by
   * developers themselves, rather than constraining their choices. If any
   * of these rules are significant for your project, please enable them in
   * your project's settings.
   */
  'no-restricted-syntax': 'off',
  'no-restricted-exports': 'off',
  'no-plusplus': 'off',
  'import/prefer-default-export': 'off',
};

module.exports = { level0, level1, level2, level3 };
