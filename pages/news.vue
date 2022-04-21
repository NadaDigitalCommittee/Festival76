<template>
  <div :class="$style.main">
    <Background2 :class="$style.background" />
    <News :limited="false" :class="$style.card" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'NewsPage',
  head() {
    return {
      title: 'ニュース',
    };
  },
});
</script>

<style module lang="scss">
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  margin-bottom: 6rem;
  width: 100%;
}

.background {
  position: absolute;
  max-width: calc(25rem / 0.9);
  z-index: -1;
  top: 15rem;
  left: calc((100vw - min(100vw, 25rem / 0.9)) / 2);
  width: 100%;
  height: calc(min(100vw, 25rem / 0.9) * 0.75);
}

.card {
  width: 90%;
  max-width: 25rem;
  min-height: 32rem;
}
</style>
