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
        'kiskadee/javascript/typescript/vanilla',
        'plugin:@typescript-eslint/strict-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
      ],
    },
  ],
};
