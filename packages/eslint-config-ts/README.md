# `@fe-lints/eslint-config-ts`

typescript specific linting rules for `eslint`

## Installation

```sh
npm install eslint typescript @fe-lints/eslint-config-ts --save-dev
```

## Configuration (legacy: `.eslintrc`) <a id="configuration"></a>

```json
{
  "extends": ["@fe-lints/eslint-config-ts"]
}
```

## Configuration `package.json`

```json
{
  "scripts": {
  "lint": "eslint --ext .js,.jsx,.ts,.tsx .", // or  "eslint --ext .js,.jsx,.ts,.tsx src/"
  "lint:fix": "eslint --fix --ext .js,.jsx,.ts,.tsx .",
  // other 
}
}
```

See [`eslint` documentation](https://eslint.org/docs/user-guide/configuring) for more information about extending configuration files.

## License

`@fe-lints/eslint-config-ts` is licensed under the [MIT License](https://opensource.org/licenses/mit-license.php).