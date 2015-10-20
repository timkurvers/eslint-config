# eslint-config-timkurvers

[![Version](https://img.shields.io/npm/v/eslint-config-timkurvers.svg?style=flat)](https://www.npmjs.org/package/eslint-config-timkurvers)

My ESLint configuration, based on [Airbnb's](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).

Licensed under the **MIT** license, see LICENSE for more information.

## Usage

Available via [npm](https://www.npmjs.com):

```shell
npm install --save-dev eslint-config-timkurvers eslint-config-airbnb
```

### ES6

Additional dependencies to install:

```shell
npm install --save-dev babel-eslint
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
npm install --save-dev babel-eslint eslint-plugin-react
```

Tweak `.eslintrc`:

```json
{
  "extends": "timkurvers/react"
}
```
