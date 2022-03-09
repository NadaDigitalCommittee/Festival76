<!-- マークダウンで書いたコンテンツを表示する -->
<template>
  <div>
    <!--
      タイトルを表示する。{{}}の中に式を入れるとその値が表示される
    -->
    <h2 :class="$style.title">{{ page.title }}</h2>
    <!-- Nuxt ContentでMarkdownの中身を表示する。 -->
    <nuxt-content :document="page" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ContentPage',
  // <ContentPage content="top" />のように値を渡す
  props: {
    // content/***.md の *** の部分
    content: String,
  },
  // データを初期化する
  data: (): {
    page: {
      title?: string;
      [key: string]: any;
    };
  } => ({
    page: {
      title: 'Loading...',
    },
  }),

  // 初期化後にサーバーサイドで実行するコード
  async fetch() {
    // コンテンツの取得
    this.page = await this.$content(this.content).fetch();
  },
});
</script>

<style lang="scss" module>
/* タイトル */
.title {
  @include Title;
}
</style>
