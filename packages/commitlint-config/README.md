# `@fe-lints/commitlint-config`


Support matching commitlint configuration (https://commitlint.js.org/#/concepts-shareable-config), used for ` git commit message ` calibration.

## Installation


```bash
npm install @fe-lints/commitlint-config --save-dev
```

## Configuration .commitlintrc

update `.commitlintrc` file `extends` :

```json
{
  "extends": ["@fe-lints/commitlint-config"]
}
```

###  `commit message` 

```
<type>[optional scope]: <subject>

[optional body]

[optional footer(s)]
```

## setting git hook

 [husky](https://www.npmjs.com/package/husky) set in ` git commit ` triggered when ` commitlint `.

install husky：

```bash
npm install husky --save-dev
```

add `commit-msg`:

```bash
npx husky add .husky/commit-msg 'npx commitlint --edit $1'
```

See [commitlint document](https://commitlint.js.org/#/guides-local-setup?id=install-husky)。
