module.exports = {
  defaultSeverity: 'warning',
  extends: [
    "stylelint-config-standard"
  ],
  plugins: ['stylelint-scss'],
  rules: {
    /**
     * Possible errors
     * @link https://stylelint.io/user-guide/rules/#possible-errors
     */
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
     // 暂时允许空
    'block-no-empty': null,
    // 色值格式验证
    'color-no-invalid-hex': true,
    // 禁止出现空注释
    'comment-no-empty': true,
    /**
     * stylelint-scss rules
     * @link https://www.npmjs.com/package/stylelint-scss
     */
    'scss/double-slash-comment-whitespace-inside': 'always',
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
};
