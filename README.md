# eslint-config

[![Version](https://img.shields.io/npm/v/eslint-config-timkurvers.svg)](https://www.npmjs.org/package/eslint-config-timkurvers)
[![Known Vulnerabilities](https://snyk.io/test/github/timkurvers/eslint-config/badge.svg)](https://snyk.io/test/github/timkurvers/eslint-config)

My ESLint configuration, based on [Airbnb's](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).

Licensed under the [**MIT** license](LICENSE.md).

## Usage

Available via [npm](https://www.npmjs.com):

```shell
npm install --save-dev eslint @timkurvers/eslint-config eslint-config-airbnb
```

### ES6

Additional dependencies to install:

```shell
npm install --save-dev babel-eslint eslint-plugin-import
```

Tweak `.eslintrc`:

```json
{
  "extends": "@timkurvers"
}
```

### React

Additional dependencies to install:

```shell
npm install --save-dev babel-eslint eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y
```

Tweak `.eslintrc`:

```json
{
  "extends": "@timkurvers/eslint-config/react"
}
```
