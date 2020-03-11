# eslint-config

[![Version](https://badgen.net/npm/v/@timkurvers/eslint-config)](https://www.npmjs.org/package/@timkurvers/eslint-config)
[![MIT License](https://badgen.net/github/license/timkurvers/eslint-config)](LICENSE.md)

My ESLint configuration, based on [Airbnb's](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).

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
