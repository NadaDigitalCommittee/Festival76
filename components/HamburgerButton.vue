<template>
  <div :class="$style.main">
    <span />
    <span />
    <span />
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'HamburgerButton',
});
</script>

<style module lang="scss">
.main {
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 0.5rem;

  span {
    display: block;
    background-color: $white;
    width: 2.5rem;
    height: 1px;
  }
}
</style>
