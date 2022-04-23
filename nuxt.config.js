export default {
  // 静的サイトとして生成する
  target: 'static',

  // サーバーサイドで描画する
  ssr: true,

  // HTMLのヘッダ
  head: {
    titleTemplate: '%s | 第76回灘校文化祭「Turn it Over🔥」',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.png' },
      // Adobe Fonts (解約時に無効化されるので必要に応じて引き継ぐ)
      { rel: 'stylesheet', href: 'https://use.typekit.net/xlj6jqy.css' },
    ],
  },

  // 全てのページに適用するCSS
  css: [
    // ブラウザのデフォルトスタイルを無効化する
    'destyle.css/destyle.min.css',
    '@/assets/scss/global.scss',
  ],

  // プラグイン一覧
  plugins: [
    { src: '@/plugins/slide-up-down', ssr: false },
    { src: '@/plugins/pdf', ssr: false },
  ],

  // コンポーネントを自動インポートする
  components: true,

  router: {
    // Github Pages のURLでうまく動くように
    // eslint-disable-next-line no-nested-ternary
    base: process.env.DEPLOY_ENV === 'GH_PAGES' ? '/Festival76/' : process.env.DEPLOY_ENV === 'CF_PAGES' ? '/2022/' : '/',
    // 存在しないページすべてを404ページにリダイレクトする
    // extendRoutes(routes, resolve) {
    //   routes.push({
    //     name: 'custom',
    //     path: '*',
    //     component: resolve(__dirname, 'pages/404.vue'),
    //   });
    // },
  },

  // ビルドに使うモジュール
  buildModules: [
    // TypeScript
    '@nuxt/typescript-build',
  ],

  // 実行時に使うモジュール
  modules: [
    // Nuxt Content
    '@nuxt/content',
    // グローバルなSass変数とMixin
    '@nuxtjs/style-resources',
  ],

  // Nuxt Contentの設定
  content: {},

  // style-resourcesの設定
  styleResources: {
    scss: [
      '@/assets/scss/_variable.scss',
      '@/assets/scss/_mixin.scss',
    ],
  },

  // ビルド設定
  // build: {},
};
