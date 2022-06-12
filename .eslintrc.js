module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  plugins: [
    'react',
  ],
  rules: {
    'react/destructuring-assignment': 'off',
    'react/prop-types': ['error', {
      skipUndeclared: true,
    }],
    'react/jsx-props-no-spreading': ['error', {
      custom: 'ignore',
    }],
    'react/react-in-jsx-scope': 'off',
    'max-len': 'off',
    'jsx-a11y/anchor-is-valid': ['error', {
      components: ['Link'],
      aspects: ['invalidHref', 'preferButton'],
    }],
  },
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
};
