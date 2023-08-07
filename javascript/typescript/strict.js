// const stylisticConfig = require('@typescript-eslint/eslint-plugin/dist/configs/stylistic-type-checked');
// const strictConfig = require('@typescript-eslint/eslint-plugin/dist/configs/strict-type-checked');
const typescriptPlugin = require('@typescript-eslint/eslint-plugin');
// const strictConfig = require('@typescript-eslint/eslint-plugin/dist/configs/strict-type-checked');
const { tsFiles } = require('../../utils/common');

/**
 * Packages: typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
 * @see
 * {@link https://typescript-eslint.io/linting/configs#projects-with-type-checking}
 */
const tsStrict = {
  files: tsFiles,
  ...typescriptPlugin.configs['strict-type-checked'],
  ...typescriptPlugin.configs['stylistic-type-checked'],
};

module.exports = { tsStrict };
