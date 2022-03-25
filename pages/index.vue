<template>
  <div :class="$style.main">
    <Top :class="$style.top" />
    <Card title="Topics" :class="$style.card" />
    <Card title="News" :class="$style.card" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Index',
});
</script>

<style module lang="scss">
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;
  margin-bottom: 6rem;
  width: 100%;
}

.top {
  width: 100%;
  max-width: 45rem;
  height: 30rem;
}

.card {
  width: 90%;
  max-width: 25rem;
  min-height: 12rem;
}
</style>
