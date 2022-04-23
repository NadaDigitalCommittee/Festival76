<template>
  <div :class="$style.main">
    <h1><slot/></h1>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'Title',
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
</style>
