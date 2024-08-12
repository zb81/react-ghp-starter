import antfu from '@antfu/eslint-config'

export default await antfu({
  react: true,
  rules: {
    'react-dom/no-missing-button-type': 'off',
    'react/no-array-index-key': 'off',
    'react/prefer-destructuring-assignment': 'off',
    'react-hooks/exhaustive-deps': 'off',
  },
})
