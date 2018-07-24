module.exports = {
    parser: 'babel-eslint',
    extends: ['react-app', 'airbnb'],
    plugins: ['react', 'jsx-a11y', 'import'],
    rules: {
      'camelcase': 0,
      'arrow-parens': 0,
      'comma-dangle': 0,
      'function-paren-newline': 0,
      'import/extensions': 0,
      'import/prefer-default-export': 0,
      'jsx-a11y/anchor-has-content': 0,
      'jsx-a11y/anchor-is-valid': [1, { aspects: ['invalidHref'] }],
      'jsx-a11y/click-events-have-key-events': 0,
      'jsx-a11y/href-no-hash': 0,
      'jsx-a11y/label-has-for': 0,
      'jsx-a11y/no-noninteractive-element-interactions': 0,
      'jsx-a11y/no-static-element-interactions': 0,
      'max-len': [1, { code: 120 }],
      'no-script-url': 0,
      'no-underscore-dangle': 0,
      'react/jsx-filename-extension': 0,
      'react/jsx-max-props-per-line': [1, { maximum: 3, when: 'always' }],
      'react/no-array-index-key': 0,
      'react/prop-types': 0,
      'jsx-a11y/media-has-caption': 0,
      'react/no-did-mount-set-state': 0
    },
    globals: {
      document: 1,
    },
  };
  