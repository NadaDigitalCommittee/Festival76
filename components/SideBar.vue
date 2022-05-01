<template>
  <div>
    <div @click="$emit('moved')" :class="$style.main">
      <div :class="$style.bar" />
      <nuxt-link to="/" :class="$style.btn">トップページ</nuxt-link>
      <div :class="$style.bar" />
      <nuxt-link to="/club" :class="$style.btn">サークル</nuxt-link>
      <div :class="$style.bar" />
      <nuxt-link to="/stage" :class="$style.btn">ステージ</nuxt-link>
      <div :class="$style.bar" />
      <nuxt-link to="/blog" :class="$style.btn">ブログ</nuxt-link>
      <div :class="$style.bar" />
      <nuxt-link to="/ticket" :class="$style.btn">整理券</nuxt-link>
      <div :class="$style.bar" />
      <a
        target="_blank" rel="noopener noreferrer"
        href="https://drive.google.com/drive/folders/1UCJpEjHDzvZ7bE6ga_zwGJA71-FYbDqt?usp=sharing"
        :class="$style.btn"
      >
        パンフレット
      </a>
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

  @media screen and (min-width: 800px) {
    background: transparent;
    flex-direction: row;
    padding: 0.75rem 1rem 0.25rem 0;
    height: 5rem;
  }
}

.bar {
  width: 90%;
  height: 1px;
  background-color: $white;

  @media screen and (min-width: 800px) {
    display: none;
  }
}

.btn {
  width: 90%;
  color: $white;
  font-weight: bold;
  padding: 1rem 1.5rem 1rem 1.5rem;

  @media screen and (min-width: 800px) {
    width: unset;
    padding: 1rem;
  }
}
</style>
