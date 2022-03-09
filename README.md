# Frontend Sample
Nuxt.jsの講義用サンプルプロジェクトです。

## 環境セットアップ
1. Node.jsをインストールします。(「Node.js インストール」でググりましょう。)
2. [Yarn](https://yarnpkg.com)をインストールします。
```shell
$ npm -g install yarn
```
3. プロジェクトをクローンします。
```shell
$ git clone https://github.com/NadaDigitalCommittee/FrontendSample.git
```
4. 依存するパッケージをインストールします。
```shell
$ cd ./FrontendSample
$ yarn install
```

## 開発
### 開発用サーバーを建てる
```shell
$ yarn dev
```
`http://localhost:3000`にアクセスすると開発中のページが表示されます。ファイルの変更が検知されて自動で更新されるようになっています。

### ESLintを動かす
```shell
$ yarn lint
```
書いたコードが正しいかどうかチェックします。`yarn lintfix`で自動修正もできます。

### HTMLを生成する
```shell
$ yarn generate
```
`dist/`ディレクトリ以下にHTMLが生成されます。

## ディレクトリ構成

### assets/
CSSや画像、フォントなど

### components/
雑多なVueコンポーネント

### layouts/
複数のページに共通で使われるヘッダなどのVueコンポーネント

### pages/
それぞれのページに対応するVueコンポーネント

### plugins/
使用するプラグイン

### static/
`robots.txt`や`favicon.ico`など生成されたページにそのまま配置するファイル

## 主な依存パッケージ
### `@nuxtjs/nuxt-content`
文章やデータなどのコンテンツを管理する

### `@nuxtjs/axios`
HTTP通信に使う

### `vue-simple-spinner`
ロード中のスピナー

### `sass`, `sass-loader`
[Sass](https://sass-lang.com)を使えるようにする

### `@nuxtjs/style-resources`
Sassの変数、Mixinを全てのファイルでロードするのに使う

### `destyle.css`
ブラウザのデフォルトCSSをリセットする

### `eslint`
リント、フォーマットに使う
