<template>
  <div>
    <p :class="$style.caption">部誌</p>
    <a target="_blank" rel="noopener noreferrer" :href="path">
      <pdf :class="$style.body" :src="path" :page="1" />
    </a>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'DisplayPdf',
  props: {
    path: {
      type: String,
      required: true,
    },
  },
});
</script>

<style module lang="scss">
.caption {
  color: $orange;
  font-weight: bold;
  font-size: 0.5rem;
  margin-bottom: 0.25rem;
}

.body {
  border: 1px solid $orange;
}
</style>
