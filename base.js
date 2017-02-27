module.exports = {
  parser: 'babel-eslint',
  rules: {
    // Enforce using all arguments
    // Allow ignoring arguments with underscore prefix
    'no-unused-vars': [2, { args: 'all', argsIgnorePattern: '^_' }],
  }
};
