<template>
  <div>
    <div :class="$style.main">
      <div :class="$style.bar" />
      <nuxt-link to="/" :class="$style.btn">トップページ</nuxt-link>
      <div :class="$style.bar" />
      <nuxt-link to="/club" :class="$style.btn">サークル</nuxt-link>
      <div :class="$style.bar" />
      <nuxt-link to="/stage" :class="$style.btn">ステージ</nuxt-link>
      <div :class="$style.bar" />
      <nuxt-link to="/blog" :class="$style.btn">ブログ</nuxt-link>
      <div :class="$style.bar" />
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'SideBar',
});
</script>

<style module lang="scss">
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 95;
  width: 100%;
  padding-top: 6rem;
  height: 100%;
  background-color: $background;
}

.bar {
  width: 90%;
  height: 1px;
  background-color: $white;
}

.dummy, .btn {
  width: 90%;
}

.btn {
  color: $white;
  font-weight: bold;
  padding: 1rem 0 1rem 1.5rem;
}
</style>
