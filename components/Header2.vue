<template>
  <div>
    <div :class="$style.sub">
      <nuxt-link to="/club" :class="$style.linkbtn">サークル</nuxt-link>
      <nuxt-link to="/stage" :class="$style.linkbtn">ステージ</nuxt-link>
      <nuxt-link to="/blog" :class="$style.linkbtn">ブログ</nuxt-link>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'Header2',
});
</script>

<style module lang="scss">
.sub {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: calc(100% - 1.5rem);
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
}

.linkbtn {
  max-width: 15rem;
  width: 31.5%;
  flex-grow: 0;
  height: 100%;
  background-color: $gray;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  color: $white;
  font-weight: 700;
}
</style>
