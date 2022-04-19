<template>
  <header>
    <div :class="$style.main">
      <nuxt-link to="/">
        <img src="@/assets/img/logo.svg" :class="$style.logo" @click="scroll()" />
      </nuxt-link>
    </div>
  </header>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'Header',
  methods: {
    scroll() {
      if (this.$route.path === '/') {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      }
    },
  },
});
</script>

<style module lang="scss">
.main {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: $background;
}
</style>
