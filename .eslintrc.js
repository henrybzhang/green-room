module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'airbnb',
  ],
  plugins: [
    'react',
  ],
  rules: {
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': ['error', {
      extensions: ['.js'],
    }],
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
  },
};
