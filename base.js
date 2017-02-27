module.exports = {
  parser: 'babel-eslint',
  rules: {
    // Allow short identifiers
    'id-length': [0],

    // Enforce indentation of switch/case statements
    // See: https://github.com/airbnb/javascript/issues/470#issuecomment-145066890
    indent: [2, 2, { SwitchCase: 1 }],

    // Enforce using all arguments
    // Allow ignoring arguments with underscore prefix
    'no-unused-vars': [2, { args: 'all', argsIgnorePattern: '^_' }],

    // Enforce curly spacing in object literals and destructuring
    'object-curly-spacing': [2, 'always'],

    // Allow padded blocks
    'padded-blocks': [0]
  }
};
