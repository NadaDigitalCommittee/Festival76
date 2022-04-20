<template>
  <div :class="$style.main">
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

.card {
  width: 90%;
  max-width: 25rem;
  min-height: 32rem;
}
</style>
