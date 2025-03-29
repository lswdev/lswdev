module.exports = {
  env: {
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    'prettier'
  ],
  rules: {
    'no-var': 'error',
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
};