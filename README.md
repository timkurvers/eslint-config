# eslint-config

[![Version](https://badgen.net/npm/v/@timkurvers/eslint-config)](https://www.npmjs.org/package/@timkurvers/eslint-config)
[![MIT License](https://badgen.net/github/license/timkurvers/eslint-config)](LICENSE.md)
![Checks](https://badgen.net/github/checks/timkurvers/eslint-config)

My ESLint configuration, based on [Airbnb's](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).

## Usage

Available via [npm](https://www.npmjs.com):

```shell
npm install --save-dev @timkurvers/eslint-config
```

Additional dependencies to install:

```shell
npm install --save-dev eslint babel-eslint eslint-plugin-import eslint-config-airbnb
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
