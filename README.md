# Description

This ESLint configuration is the ultimate choice for developers who use ESLint, Airbnb Style Guide, React, React Hooks, Prettier, TypeScript, and Unicorn in their projects. It's designed to ensure adherence to best practices, proper code formatting, and high levels of code security and quality. With this configuration, you'll get the most optimal combination of features for improving code quality in React applications with TypeScript support, all while benefiting from the added security provided by the Unicorn rule set.

## Installation

```bash
    npm install -D eslint eslint-config-kiskadee
```

## [Level 1] Node / JavaScript - Essential Rules

- Airbnb: JavaScript Style Guide
  - JavaScript Plugin (eslint-config-airbnb)
  - Import Plugin (eslint-plugin-import)
- TypeScript Support
  - TypeScript Plugin (typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin)
  - Fixed conflicts with ESLint rules (eslint-config-kiskadee)
- Prettier Support
  - Prettier Plugin (prettier eslint-plugin-prettier)
  - Fixed conflicts with ESLint rules (eslint-config-prettier)
- Jest Plugin (jest eslint-plugin-jest)

```bash
    npm install -D eslint-config-airbnb eslint-plugin-import typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier eslint-plugin-prettier eslint-config-prettier jest eslint-plugin-jest
```

```javascript
    // .eslintrc.js
    module.exports = {
      extends: ['kiskadee/node-level-1'],
      rules: {
        // your rules
      },
    };
```

## Level 2 - Great Rules

- All from Essential
- Unicorn Plugin (eslint-plugin-unicorn)
  - More than 100 powerful ESLint rules
- Unused Imports Plugin (eslint-plugin-unused-imports)
  - Finds and removes unused ES6 module imports
- No Relative Import Paths Plugin (eslint-plugin-no-relative-import-paths)
  - Enforces the use of absolute import paths

```bash
    npm install -D eslint-plugin-unicorn eslint-plugin-unused-imports eslint-plugin-no-relative-import-paths
```

```javascript
    // .eslintrc.js
    module.exports = {
      extends: ['kiskadee/node-level-2'],
      rules: {
        // your rules
      },
    };
```

## Level 3 - Kiskadee Rules

- All from Great
- Some fantastic rules modified

```javascript
    // .eslintrc.js
    module.exports = {
      extends: ['kiskadee/node-level-3'],
      rules: {
        // your rules
      },
    };
```

Suggest a rule to be changed or added or plugin to be added

## .editorconfig

Though Prettier excels at standardizing many code formatting aspects, the .editorconfig file helps maintain consistency across diverse IDEs and text editors. Some examples of the capabilities offered by EditorConfig include:

1. Setting indentation style (spaces or tabs) and size.
2. Controlling end-of-line (EOL) characters (LF, CR, or CRLF).
3. Managing character encoding (e.g., UTF-8, UTF-16).
4. Ensuring a newline is inserted at the end of a file.
5. Specifying whether to remove trailing whitespace.
6. These settings contribute to a consistent codebase, regardless of the IDE or text editor being used by different team members.

Create a .editorconfig file in the project root with the following content:

```bash
  root = true

  [*]
  charset = utf-8
  indent_style = space
  indent_size = 2
  end_of_line = lf
  insert_final_newline = true
  trim_trailing_whitespace = true
```
