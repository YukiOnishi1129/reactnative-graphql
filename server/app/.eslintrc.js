module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": ["error"],
    "no-inferrable-types": 0,
    "@typescript-eslint/ban-types": [
      // https://www.javaer101.com/en/article/53004069.html
      "error",
      {
        types: {
          String: false,
          Boolean: false,
          Number: false,
          Symbol: false,
          "{}": false,
          Object: false,
          object: false,
          Function: false,
        },
        extendDefaults: true,
      },
    ],
  },
};
