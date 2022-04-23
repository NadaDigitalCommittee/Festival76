<template>
  <div :class="$style.main">
    <Background2 :class="$style.background" />
    <Title :class="$style.title">クラブ・サークル</Title>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ClubPage',
  head() {
    return {
      title: 'クラブ・サークル',
    };
  },
});
</script>

<style module lang="scss">
.main {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
  max-width: calc(25rem / 0.9);
  margin-left: calc((100% - min(90%, 25rem / 0.9)) / 2);
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

.title {
  width: 100%;
  margin-bottom: 1rem;
}
</style>
