# eslint-config-timkurvers

[![Version](https://img.shields.io/npm/v/eslint-config-timkurvers.svg?style=flat)](https://www.npmjs.org/package/eslint-config-timkurvers)
[![Known Vulnerabilities](https://snyk.io/test/github/timkurvers/eslint-config/badge.svg)](https://snyk.io/test/github/timkurvers/eslint-config)

My ESLint configuration, based on [Airbnb's](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).

Licensed under the [**MIT** license](LICENSE.md).

## Usage

Available via [npm](https://www.npmjs.com):

```shell
npm install --save-dev eslint eslint-config-timkurvers eslint-config-airbnb@^14.1.0
```

### ES6

Additional dependencies to install:

```shell
npm install --save-dev babel-eslint@^7.1.1 eslint-plugin-import@^2.2.0
```

Tweak `.eslintrc`:

```json
{
  "extends": "timkurvers"
}
```

### React

Additional dependencies to install:

```shell
npm install --save-dev babel-eslint@^7.1.1 eslint-plugin-import@^2.2.0 eslint-plugin-react@^6.9.0 eslint-plugin-jsx-a11y@^4.0.0
```

Tweak `.eslintrc`:

```json
{
  "extends": "timkurvers/react"
}
```
