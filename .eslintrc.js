module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: "vue-eslint-parser",

  extends: ["plugin:vue/vue3-recommended", "plugin:vue/base", "prettier"],
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 6,
  },

  plugins: ["vue"],
  rules: {},
};
