module.exports = {
  extends: 'eslint-config-airbnb',
  plugins: ['jsx-a11y', 'import', 'react'],
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  globals: {
    __DEV__: true,
  },
  settings: {
    'import/resolver': {
      'babel-module': {
        root: ['./src'],
        alias: {
          components: 'components',
          config: 'config',
          utils: 'utils',
        },
      },
    },
  },
  rules: {
    'global-require': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/anchor-has-content': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'object-curly-newline': 'off',
    'arrow-body-style': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', 'always-multiline'],
    indent: 'off',
    'newline-after-var': ['error', 'always'],
    'newline-before-return': 'error',
    'newline-per-chained-call': 'off',
    'no-confusing-arrow': 'off',
    'react/prop-types': ['error', { ignore: ['children'] }],
    'no-mixed-operators': [
      'error',
      {
        groups: [
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
        allowSamePrecedence: true,
      },
    ],
    'no-underscore-dangle': 'off',
    'max-len': 'off',
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'space-before-function-paren': ['error', 'never'],
    'wrap-iife': [
      'error',
      'inside',
      {
        functionPrototypeMethods: false,
      },
    ],
    'react/no-danger': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-curly-spacing': [
      'error',
      'never',
      {
        allowMultiline: true,
      },
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/jsx-indent': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-no-bind': 'error',
    'react/no-multi-comp': 'off',
    'react/prefer-stateless-function': 'off',
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-methods',
          'lifecycle',
          '/^on.+$/',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'everything-else',
          '/^render.+$/',
          'render',
        ],
        groups: {
          lifecycle: [
            'displayName',
            'props',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'state',
            'constructor',
            'getDefaultProps',
            'getInitialState',
            'getChildContext',
            'componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'componentDidUpdate',
            'componentWillUnmount',
          ],
        },
      },
    ],
  },
};
