<template>
  <header>
    <div :class="$style.main">
      <h1><slot/></h1>
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
  background-color: $white;
  padding: 0.75rem 0 0.75rem 2.5rem;

  h1 {
    position: relative;
    color: $orange;
    font-weight: bold;
    font-size: 1.4rem;

    &::before {
      content: "";
      position: absolute;
      display: block;
      top: 0;
      left: -1.25rem;
      height: 100%;
      width: 4px;
      background-color: $orange;
    }
  }
}

.logo {
  height: 100%;

  img {
    height: 100%;
  }
}
</style>
