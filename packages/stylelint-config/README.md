# @fe-lints/stylelint-config

> The standard shareable config for Stylelint.

It extends [`stylelint-config-standard`](https://github.com/stylelint/stylelint-config-standard) and turns on additional rules to enforce modern conventions found in the [CSS specifications](https://www.w3.org/Style/CSS/current-work).

To see the rules that this config uses, please read the [config itself](./index.js).

## Example

```css
@import url("foo.css");
@import url("bar.css");

@custom-media --foo (min-width: 30em);

/**
 * Multi-line comment
 */

:root {
  --brand-red: hsl(5deg 10% 40%);
}

/* Single-line comment */

.class-foo:not(a, div) {
  margin: 0;
  top: calc(100% - 2rem);
}

/* Flush single line comment */
@media (width >= 60em) {
  #id-bar {
    /* Flush to parent comment */
    --offset: 0px;

    color: #fff;
    font-family: Helvetica, "Arial Black", sans-serif;
    left: calc(var(--offset) + 50%);
  }

  /* Flush nested single line comment */
  a::after {
    display: block;
    content: "→";
    background-image: url("x.svg");
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
```

_Note: the config is tested against this example, as such the example contains plenty of CSS syntax and features._

## Installation

```bash
npm install stylelint @fe-lints/stylelint-config --save-dev
```

## Usage

Set your Stylelint config to:

```json
{
  "extends": "@fe-lints/stylelint-config"
}
```

### Extending the config

Add a `"rules"` key to your config, then add your overrides and additions there.

You can turn off rules by setting its value to `null`. For example:

```json
{
  "extends": "@fe-lints/stylelint-config",
  "rules": {
    "selector-class-pattern": null
  }
}
```

Or lower the severity of a rule to a warning using the `severity` secondary option. For example:

```json
{
  "extends": "@fe-lints/stylelint-config",
  "rules": {
    "property-no-vendor-prefix": [
      true,
      {
        "severity": "warning"
      }
    ]
  }
}
```

Or to add a rule, For example, the `unit-allowed-list` one:

```json
{
  "extends": "@fe-lints/stylelint-config",
  "rules": {
    "unit-allowed-list": ["em", "rem", "s"]
  }
}
```

### Configuration `package.json`

```json
{
  "scripts": {
  "lint:css": "stylelint \"**/*.scss\"", // or "lint:css": "stylelint \"**/*.{less,css,scss}\""
  "lint:css:fix": "stylelint --fix \"**/*.scss\"",
  // other 
}
}
```

We recommend adding more of [Stylelint's rules](https://stylelint.io/user-guide/rules/) to your config as these rules need to be configured to suit your specific needs.