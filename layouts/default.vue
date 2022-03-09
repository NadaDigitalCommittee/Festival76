<!-- 全てのページで使われるレイアウト -->
<template>
  <!-- CSS Modules内のクラスを付与するときは :class="$style.***" とする -->
  <div :class="$style.container">
    <div :class="$style.main">
      <!-- ここが中身 -->
      <nuxt />
    </div>
    <!-- フッター -->
    <footer :class="$style.footer">
      <p>© 2022 灘校デジタル委員会</p>
      <nuxt-link to="/">Top</nuxt-link>
      <nuxt-link to="/about">About</nuxt-link>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'DefaultLayout',
});
</script>

<!-- SCSS + CSS Modulesでスタイルを記述する -->
<style lang="scss" module>
.container {
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: $color-background;
  min-height: 100vh;
}

.main {
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
}

.footer {
  display: flex;
  justify-content: center;
  gap: 1rem;
  font-size: 0.9rem;
  white-space: nowrap;
  color: $color-text-dimmed;
  padding-top: 1rem;
  padding-bottom: 1rem;

  a {
    color: inherit;
  }
}
</style>
<!-- CSS Modulesを無効化したSCSS -->
<style lang="scss">
/* 自分自身を指すnuxt-linkにはnuxt-link-exact-active属性が付くので,
 * これを無効化する
 */
.nuxt-link-exact-active {
  pointer-events: none;
  opacity: 0.7;
}
</style>
