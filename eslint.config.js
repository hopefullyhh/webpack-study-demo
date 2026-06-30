// eslint.config.js
const js = require("@eslint/js");
const globals = require("globals");
const vue = require("eslint-plugin-vue");
const ts = require("@typescript-eslint/eslint-plugin");
const tsParser = require("@typescript-eslint/parser");
const prettierPlugin = require("eslint-plugin-prettier");
const prettierConfig = require("eslint-config-prettier");

module.exports = [
  {
    files: ["eslint.config.cjs"],
    languageOptions: {
      globals: {
        ...globals.node, // 包含 module, require 等
      },
    },
  },
  // 1. 全局忽略（相当于旧版的 ignorePatterns）
  {
    ignores: ["dist/**", "node_modules/**"],
  },

  // 2. ESLint 推荐规则（替代 eslint:recommended）
  js.configs.recommended,

  // 3. Vue 基础规则（替代 plugin:vue/essential）
  ...vue.configs["flat/essential"],

  // 4. 针对 .vue 文件配置 TypeScript 解析器
  {
    files: ["**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: tsParser, // 让 vue-eslint-parser 识别 TypeScript
        ecmaVersion: 2020,
        sourceType: "module",
      },
    },
  },

  // 5. 针对 .ts 文件配置 TypeScript 规则
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": ts,
    },
    rules: {
      ...ts.configs.recommended.rules, // 替代 @vue/typescript/recommended
    },
  },

  // 6. Prettier 集成（替代 plugin:prettier/recommended）
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...prettierConfig.rules, // 关闭与 Prettier 冲突的规则
      "prettier/prettier": "error", // 将 Prettier 问题作为 ESLint 错误
    },
  },

  // 7. 自定义规则（包含环境变量和原有规则）
  {
    files: ["src/**/*.{js,ts,vue}"],
    languageOptions: {
      globals: {
        ...globals.node, // 对应 env.node = true
        ...globals.browser, // 如果前端代码需要（可选）
      },
    },
    rules: {
      "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    },
  },
];
