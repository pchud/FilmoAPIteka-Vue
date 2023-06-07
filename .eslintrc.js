module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "plugin:vue/vue3-essential",
  parserOptions: {
    "vue/comment-directive": [
      "error",
      {
        reportUnusedDisableDirectives: false,
      },
    ],
  },
  plugins: ["vue"],
  rules: {},
};
