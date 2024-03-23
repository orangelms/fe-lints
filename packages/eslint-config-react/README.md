# `@fe-lints/eslint-config-react`

React specific linting rules for `eslint`

## Installation

```sh
npm install eslint @fe-lints/eslint-config-react --save-dev
```

## Configuration (legacy: `.eslintrc`) <a id="configuration"></a>

```json
{
  "extends": ["@fe-lints/eslint-config-react"]
}
```

## Configuration `package.json`

```json
{
  "scripts": {
  "lint": "eslint --ext .js,.jsx .", // or  "eslint --ext .js,.jsx src/"
  "lint:fix": "eslint --fix --ext .js,.jsx .",
  // other 
}
}
```

See [`eslint` documentation](https://eslint.org/docs/user-guide/configuring) for more information about extending configuration files.

## License

`@fe-lints/eslint-config-react` is licensed under the [MIT License](https://opensource.org/licenses/mit-license.php).