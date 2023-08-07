const typescriptParser = require('@typescript-eslint/parser');
const { tsFiles } = require('../../utils/common');

/**
 * Packages: typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
 * @see
 * {@link https://typescript-eslint.io/linting/typed-linting}
 */
const tsVanilla = {
  files: tsFiles,

  languageOptions: {
    /**
     * @see
     * {@link https://typescript-eslint.io/getting-started#step-2-configuration}
     */
    parser: typescriptParser,
    parserOptions: {
      // TODO: test move jsx to javascript/react/typescript.js
      /**
       * @see
       * {@link https://typescript-eslint.io/linting/typed-linting}
       */
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 'latest',
      /**
       * @see
       * {@link https://typescript-eslint.io/linting/typed-linting}
       * {@link https://typescript-eslint.io/linting/typed-linting#specifying-tsconfigs}
       */
      project: true,
    },
  },

  rules: {
    /**
     * Rules disabled due to features already natively supported by TypeScript
     */
    'no-use-before-define': 'off',
    'consistent-return': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
  },
};

module.exports = { tsVanilla };
