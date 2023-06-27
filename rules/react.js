const level1 = {
  //----------------------------------------------------------------------------
  // Resolves conflicts among various ESLint configurations.
  //----------------------------------------------------------------------------

  /**
   * With JavaScript, using the spread operator can create uncertainty
   * regarding the contents of props, making it difficult to maintain
   * readability. However, with TypeScript's strong typing system, this
   * concern is reduced as the type of the variable is known, making it
   * easier to ensure code clarity and maintainability.
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md}
   * @see {@link https://www.typescriptlang.org/docs/handbook/interfaces.html}
   */
  'react/jsx-props-no-spreading': 'off',

  /**
   * Initially, this rule was designed to ensure the use of components in
   * JSX files. However, as TypeScript has been adopted as a standard, it is
   * necessary to modify the rule for compatibility with TSX files.
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md}
   * @see {@link https://www.typescriptlang.org/docs/handbook/jsx.html}
   */
  'react/jsx-filename-extension': [
    'error',
    {
      extensions: ['.tsx'],
    },
  ],
};

const level2 = {
  //----------------------------------------------------------------------------
  // Resolves conflicts among various ESLint configurations.
  //----------------------------------------------------------------------------
  /**
   * The goal is to preserve kebab-case as the standard naming
   * convention, following Unicorn's recommendation, while making an
   * exception for React components that require PascalCase.
   * @see {@link https://github.com/airbnb/javascript/tree/master/react#naming }
   * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md}
   * @see {@link https://stackoverflow.com/questions/2103596/regex-that-matches-camel-and-pascal-case}
   */
  'unicorn/filename-case': [
    'error',
    {
      cases: {
        kebabCase: true,
      },
      ignore: [
        // React components, test, styles, etc
        '^(?:[A-Z][a-z]+)+(\\.[a-z]+)?\\.ts(x)?$',

        // React Hooks
        '^(use)(?:[A-Z][a-z]+)+\\.ts?$',
      ],
    },
  ],
};

const level3 = {
  /**
   * Establishes a consistent approach to declaring React components using
   * arrow functions, as class components are no longer recommended.
   */
  'react/function-component-definition': [
    'error',
    {
      namedComponents: 'arrow-function',
      unnamedComponents: 'function-expression',
    },
  ],

  /**
   * This rule has been disabled because, starting from version 17,
   * importing React is no longer mandatory.
   * @see {@link https://reactjs.org/blog/2020/10/20/react-v17.html#new-jsx-transform}
   */
  'react/react-in-jsx-scope': 'off',

  /**
   * This configuration allows for a simpler way of changing a static string
   * to a dynamic parameter by using braces instead of quotes. Instead of
   * manually changing the quotes to braces when modifying a value, simply
   * wrapping it in braces allows for easier and more efficient updates.
   */
  'react/jsx-curly-brace-presence': [
    'error',
    { props: 'always', children: 'never' },
  ],

  /**
   * When a boolean property is set to true, it is more practical to keep
   * the property name without the value. However, omitting the value can
   * cause readability and maintenance issues for the component.
   */
  'react/jsx-boolean-value': ['error', 'always'],

  /**
   * Specifying all dependencies is not always required, and at times, this
   * rule may cause more problems than it solves.
   */
  'react-hooks/exhaustive-deps': 'off',

  /**
   * The use of React.PropTypes is not recommended when working with TypeScript.
   */
  'react/require-default-props': 'off',
};

module.exports = { level1, level2, level3 };
