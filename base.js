module.exports = {
  rules: {
    // Enforce using all arguments
    // Allow ignoring arguments with underscore prefix
    'no-unused-vars': ['error', { args: 'all', argsIgnorePattern: '^_' }],
  },
};
