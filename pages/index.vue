<template>
  <div :class="$style.main">
    <img :class="$style.top" src="~/assets/img/top.svg">
    <News :limited="true" :class="$style.card" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Index',
  head() {
    return {
      title: 'トップページ',
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
  width: 100%;
}

.top {
  width: 90%;
  max-width: 25rem;
}

.card {
  width: 90%;
  max-width: 25rem;
  min-height: 14.75rem;
}
</style>
