module.exports = {
  'env': {
    'jest/globals': true,
  },
  'extends': [
    'google',
  ],
  'parser': '@typescript-eslint/parser',
  'plugins': [
    '@typescript-eslint',
    'jest',
  ],
  'rules': {
    'require-jsdoc': 'off',
    'new-cap': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'max-len': ['error', { 'code': 120 }],
    'object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/member-delimiter-style': 'error',
  },
};
