<template>
  <div>
    <p :class="$style.caption">動画</p>
    <a target="_blank" rel="noopener noreferrer" :href="`https://youtube.com/watch?v=${videoId}`">
      <img :class="$style.body" :src="`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`">
    </a>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'YouTube',
  props: {
    videoId: {
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
  width: 100%;
}
</style>
