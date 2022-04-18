<template>
  <div :class="$style.main">
    <Header :class="$style.header" />
    <div :class="$style.header_space"></div>
    <Nuxt :class="$style.body" />
    <Footer :class="$style.footer" />
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'DefaultLayout',
});
</script>

<style module lang="scss">
.main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 8rem;
  z-index: 90;
}

.header_space {
  flex-grow: 0;
  height: 5rem;
}

.body {
  margin-bottom: 3rem;
}

.footer {
  flex-grow: 0;
  width: 100%;
  height: 11rem;
  margin-top: auto;
}
</style>
