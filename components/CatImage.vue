<!-- 外部通信を伴うアプリケーションのサンプル。 -->
<template>
  <div>
    <h2 :class="$style.title">ねこ</h2>
    <p :class="$style.description">猫の画像をランダムに表示する。</p>
    <!-- ここにスピナーと画像を重ねる -->
    <div :class="$style.container">
      <div :class="$style.spinner">
        <!--
          transitionコンポーネント(Vue.js組み込み)でアニメーション(フェードイン/アウト)する
          https://jp.vuejs.org/v2/guide/transitions.html を参照
        -->
        <transition name="fade">
          <!-- コンポーネントをクライアントサイドで展開する -->
          <client-only>
            <!--
              plugins/spinner.jsで定義したスピナーをロード中のみ表示する
              オプションは https://github.com/dzwillia/vue-simple-spinner/ を参照
            -->
            <spinner size="massive" message="Loading..." line-fg-color="#22c55e" v-show="loading" />
          </client-only>
        </transition>
      </div>
      <div>
        <transition name="fade">
          <!--
            画像本体。変数"image"をソースとして使用
            ロード完了時にloadedを呼び出し、表示する
          -->
          <img :class="$style.img" width="400" :src="image" @load="loaded" v-show="!loading" />
        </transition>
      </div>
    </div>
    <!-- 更新ボタン。押された時にupdateImageを呼び出す -->
    <button :class="$style.btn" @click="updateImage">更新</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'CatImage',
  // データの初期化
  data() {
    return {
      // 画像のURL
      image: '',
      // ロード中かどうか
      loading: true,
    };
  },
  methods: {
    // 画像のロード完了
    loaded() {
      this.loading = false;
    },
    // 新しい画像を取ってくる
    async updateImage() {
      // https://aws.random.cat/meow は{ file: "URL" }の形式でランダムに猫画像を返してくれるAPI
      // Axiosを使ってURLをthis.imageに格納する
      this.image = (await this.$axios.$get('https://aws.random.cat/meow')).file;
      // ロード中に設定。
      this.loading = true;
    },
  },
  // ページが読み込まれたときにクライアント側で動かすコード
  async mounted() {
    await this.updateImage();
  },
});
</script>

<style lang="scss" module>
.title {
  @include Title;
}

.description {
  margin-bottom: 1rem;
  color: $color-text;
}

.container {
  position: relative;
  min-height: 12rem;
  margin-bottom: 1rem;
}

.spinner {
  $transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: $transform;
  -webkit-transform: $transform;
  -moz-transform: $transform;
  -ms-transform: $transform;
}

.img {
  margin-left: auto;
  margin-right: auto;
}

.btn {
  @include Button;
  display: block;
  margin-left: auto;
}
</style>

<!--
  アニメーション用のクラス
  CSS Modulesが使えないので別途Scoped CSSを用意する
-->
<style lang="scss" scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
</style>
