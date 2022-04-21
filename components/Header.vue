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
  align-items: center;
  justify-content: space-around;
  background-color: $background;
  padding-top: 1.25rem;
  padding-bottom: 0.75rem;
}

.logo {
  height: 100%;

  img {
    height: 100%;
  }
}
</style>
