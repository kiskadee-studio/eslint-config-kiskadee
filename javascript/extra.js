module.exports = {
  rules: {
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
      {
        devDependencies: [
          '**/*.config.*',
          '**/*.(spec|test).{js,ts,tsx}',
          '**/__tests__/*.{js,ts,tsx}',
        ],
      },
    ],

    /**
     * It promotes a more concise and readable style for arrow function
     * expressions. It avoids the need for unnecessary code blocks and return
     * statements, making the syntax leaner and more straightforward. It improves
     * code readability by clearly highlighting the intention of the function and
     * making it easier to understand its behavior.
     */
    'arrow-body-style': ['error', 'as-needed'],

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
  },
};
