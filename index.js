const merge = require('merge');
const airbnb = require('eslint-config-airbnb/base');

const timkurvers = {
  rules: {}
};

module.exports = merge.recursive(airbnb, timkurvers);
