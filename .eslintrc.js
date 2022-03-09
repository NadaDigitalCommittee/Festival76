// ESLint(コードを実行前に解析するツール)の設定
module.exports = {
  // どの環境で動かすか
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  // 適用するルール
  extends: [
    // Vueの基本的なルールを適用する。
    'plugin:vue/essential',
    // Airbnb JavaScript Style Guideを適用する(セミコロン必須、var使用禁止など。)
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    // ES Moduleを使う。
    sourceType: 'module',
  },
  plugins: [
    // Vueサポート
    'vue',
    '@typescript-eslint',
  ],
  // ルールをここに追加する。
  rules: {
    'vue/multi-word-component-names': 'off',
  },
};
