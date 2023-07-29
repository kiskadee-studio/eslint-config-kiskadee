/**
 * Packages: eslint-config-airbnb eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-react-refresh
 * @see
 * {@link https://www.npmjs.com/package/eslint-config-airbnb}
 * {@link https://github.com/ArnaudBarre/eslint-plugin-react-refresh#eslint-plugin-react-refresh-}
 */
module.exports = {
  extends: ['kiskadee/airbnb'],

  rules: {
    /**
     * Starting from version 17, importing React is no longer mandatory.
     * @see
     * {@link https://reactjs.org/blog/2020/10/20/react-v17.html#new-jsx-transform}
     */
    'react/react-in-jsx-scope': 'off',

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
     * It is not always necessary to specify all dependencies, and sometimes
     * this rule can cause more problems than it helps.
     */
    'react-hooks/exhaustive-deps': 'off',
  },
};
