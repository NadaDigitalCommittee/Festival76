<template>
  <header>
    <div :class="$style.main">
      <div />
      <nuxt-link to="/">
        <img src="@/assets/img/logo.svg" :class="$style.logo" />
      </nuxt-link>
      <HamburgerButton :class="$style.hamburger" @click.native="$emit('toggle')" />
    </div>
  </header>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'Header',
});
</script>

<style module lang="scss">
.main {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem 0 4rem;
  background-color: $background;
}

.hamburger {
  height: 80%;
}
</style>
