# Description

This ESLint configuration is the ultimate choice for developers who use ESLint, Airbnb Style Guide, React, React Hooks, Prettier, TypeScript, and Unicorn in their projects. It's designed to ensure adherence to best practices, proper code formatting, and high levels of code security and quality. With this configuration, you'll get the most optimal combination of features for improving code quality in React applications with TypeScript support, all while benefiting from the added security provided by the Unicorn rule set.

## Installation

```bash
    npm install -D eslint-config-kiskadee eslint typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-import-resolver-typescript eslint-config-airbnb eslint-config-airbnb-base eslint-config-prettier eslint-plugin-import eslint-plugin-jest-dom eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-unicorn eslint-plugin-unused-imports eslint-plugin-no-relative-import-paths prettier
```

## Level 1 - Essential Rules

- TypeScript Plugin (recommended rules)
- Airbnb Style Guide (recommended rules)
  - JavaScript
  - React Plugin
  - React Hooks Plugin
  - Imports Plugin
  - jsx-a11y Plugin
- Jest Plugin (recommended rules)
- Prettier

## Level 2 - Great Rules

- All from Essential
- Unicorn Plugin (recommended rules)
- Unused Imports Plugin
- No Relative Import Paths Plugin

## Level 3 - Kiskadee Rules

- All from Great
- Some rules modified 🤩

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
