module.exports = {
  extends: 'airbnb/base',
  rules: {
    // Disallow dangling commas
    'comma-dangle': [2, 'never'],

    // Allow anonymous functions
    'func-names': [0],

    // Enforce curly spacing in object literals and destructuring
    'object-curly-spacing': [2, 'always']
  }
};
