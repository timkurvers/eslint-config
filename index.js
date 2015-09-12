const merge = require('merge');
const airbnb = require('eslint-config-airbnb/base');

const timkurvers = {
  rules: {
    // Disallow dangling commas
    'comma-dangle': [2, 'never'],

    // Allow anonymous functions
    'func-names': [0]
  }
};

module.exports = merge.recursive(airbnb, timkurvers);
