// .eslintrc.js 示例
// module.exports = {
//   parser: "vue-eslint-parser", // 使用 Vue 专用解析器
//   parserOptions: {
//     parser: "babel-eslint", // 或 '@babel/eslint-parser'
//     ecmaVersion: 2020,
//     sourceType: "module",
//   },
//   plugins: ["vue"],
//   extends: ["plugin:vue/essential", "eslint:recommended"],
//   rules: {
//     // 你的规则
//     // 关闭vue多单词组件名规则
//     "vue/multi-word-component-names": "off",
//     // 你项目其他规则...
//   },
// };

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: 'vue-eslint-parser', // 专门用来解析 .vue 文件
  parserOptions: {
    parser: '@babel/eslint-parser', // 用来解析 JS 代码的 ES6+ 语法
    ecmaVersion: 2020,
    sourceType: 'module',
    requireConfigFile: false, // 允许不使用 babel.config.js 也能工作
  },
  plugins: [
    'vue',
  ],
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
  ],
  rules: {
    // 这里根据你的需求禁用或开启规则
    'vue/multi-word-component-names': 'off', // 关闭多单词组件名限制
  },
};

