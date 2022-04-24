<template>
  <header>
    <div :class="$style.main">
      <nuxt-link :class="$style.logo" to="/">
        <img src="@/assets/img/logo.svg" @click="scroll()" />
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
  justify-content: space-around;
  background-color: $background;
  padding-top: 0.75rem;
  padding-bottom: 0.25rem;

  @media screen and (min-width: 800px) {
    padding-left: 2rem;
    justify-content: flex-start;
  }
}

.logo {
  height: 100%;
  padding: 0.5rem;

  img {
    height: 100%;
  }
}
</style>
