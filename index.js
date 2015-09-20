const merge = require('merge');
const airbnb = require('eslint-config-airbnb/base');

const timkurvers = {
  rules: {
    // Disallow dangling commas
    'comma-dangle': [2, 'never'],

    // Allow anonymous functions
    'func-names': [0],

    // Enforce curly spacing in object literals and destructuring
    'object-curly-spacing': [2, 'always']
  }
};

module.exports = merge.recursive(airbnb, timkurvers);
