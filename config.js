const { level0: jsOnly } = require('./rules/javascript');
const plugins = require('./plugins');

module.exports = (configs) => {
  const jsRules = configs?.js?.rules;
  const tsRules = configs?.ts?.rules;
  const reactRules = configs?.react?.rules;

  return {
    //--------------------------------------------------------------------------
    // Node (.js) ESLint Configurations
    //--------------------------------------------------------------------------

    env: {
      node: true,
      jest: true,
    },

    root: true,

    extends: [
      plugins.javaScript,
      plugins.unicorn,
      plugins.jest,
      plugins.prettier,
    ],

    rules: { ...jsRules, ...jsOnly },

    //--------------------------------------------------------------------------
    // TypeScript (.ts, .tsx) ESLint Configurations
    //--------------------------------------------------------------------------

    ...(configs?.ts
      ? {
          overrides: [
            {
              files: ['**/*.ts', '**/*.tsx'],

              env: {
                browser: true,
                es2022: true,
                jest: true,
                node: true,
              },

              parser: '@typescript-eslint/parser',

              parserOptions: {
                ecmaFeatures: {
                  jsx: true,
                },
                ecmaVersion: 'latest',
                sourceType: 'module',
                project: ['./tsconfig.json'],
              },

              extends: [
                ...(configs.react ? plugins.react : plugins.javaScript),
                ...plugins.unicorn,
                ...plugins.jest,
                ...plugins.typescript,
                ...plugins.importTypescript,
                ...plugins.prettier,
              ],

              ...(configs?.ts?.level > 1
                ? { plugins: ['unused-imports', 'no-relative-import-paths'] }
                : undefined),

              rules: {
                ...jsRules,
                ...tsRules,
              },
            },

            //------------------------------------------------------------------
            // React (.tsx) ESLint Configurations
            //------------------------------------------------------------------

            ...(configs?.react
              ? {
                  files: ['**/*.tsx'],
                  rules: reactRules,
                }
              : undefined),
          ],
        }
      : undefined),

    settings: {
      ...(configs.ts
        ? {
            /**
             * @see {@link https://github.com/import-js/eslint-plugin-import#typescript}
             */
            'import/resolver': {
              typescript: true,
              node: true,
            },
          }
        : undefined),
    },
  };
};
