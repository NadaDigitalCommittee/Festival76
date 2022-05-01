/* eslint-disable global-require */
let basedir = '/';
if (process.env.DEPLOY_ENV === 'GH_PAGES') {
  basedir = '/Festival76/';
} else if (process.env.DEPLOY_ENV === 'CF_PAGES') {
  basedir = '/2022/';
}

export default {
  // 静的サイトとして生成する
  target: 'static',

  // サーバーサイドで描画する
  ssr: true,

  // HTMLのヘッダ
  head: {
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:site_name', name: 'og:site_name', content: '第76回灘校文化祭「Turn it Over🔥」公式ウェブサイト' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:image', property: 'og:image', content: 'https://fest.nada-sc.jp/2022/top.svg' },
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', property: 'twitter:site', content: '@Nada_festival' },
      { hid: 'twitter:player', property: 'twitter:player', content: '@Nada_festival' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: `${basedir}favicon.png` },
      // Adobe Fonts (解約時に無効化されるので必要に応じて引き継ぐ)
      { rel: 'stylesheet', href: 'https://use.typekit.net/xlj6jqy.css' },
    ],
    script: [
      {
        defer: true,
        src: 'https://static.cloudflareinsights.com/beacon.min.js',
        'data-cf-beacon': '{"token": "bfb321b351c6453f8e478e2e235de3d0"}',
      },
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
    { src: '~/plugins/vue-scrollto.ts' },
  ],

  // コンポーネントを自動インポートする
  components: true,

  router: {
    // Github Pages のURLでうまく動くように
    base: basedir,
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
    // 画像最適化
    '@aceforth/nuxt-optimized-images',
  ],

  optimizedImages: {
    optimizeImages: true,
    responsive: {
      // eslint-disable-next-line import/no-extraneous-dependencies
      adapter: require('responsive-loader/sharp'),
      size: 600,
    },
  },

  // 実行時に使うモジュール
  modules: [
    // Nuxt Content
    '@nuxt/content',
    // グローバルなSass変数とMixin
    '@nuxtjs/style-resources',
    // サイトマップ生成
    '@nuxtjs/sitemap',

    '@nuxtjs/axios',
  ],

  sitemap: {
    hostname: 'https://fest.nada-sc.jp/',
    gzip: true,
  },

  // Nuxt Contentの設定
  content: {
    components: true,
  },

  // style-resourcesの設定
  styleResources: {
    scss: ['@/assets/scss/_variable.scss', '@/assets/scss/_mixin.scss'],
  },

  // ビルド設定
  // build: {},
  //api
  axios: {
    proxy: true,
  },
  proxy: {
    '/api': {
      target: 'https://script.google.com/macros/s/AKfycbxf70eYzLUbT8hA3qLlWQq85q9-RvDUnV3WO0J8z4vvGWCSMEdXEuN8OPq4YaYkMgIfag/exec',
      pathRewrite: { '^/api': '' },
    },
  },
};
