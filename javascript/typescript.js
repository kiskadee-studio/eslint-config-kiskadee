/**
 * Packages: typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
 * @see
 * {@link https://typescript-eslint.io/linting/typed-linting}
 */
module.exports = {
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],

      extends: [
        'kiskadee/javascript/typescript/vanilla',
        'kiskadee/javascript/typescript/strict',
        'kiskadee/javascript/typescript/extra',
      ],
    },
  ],
};
