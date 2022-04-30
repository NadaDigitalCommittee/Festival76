<template>
  <div :class="$style.body">
    <a
      v-if="article"
      target="_blank" rel="noopener noreferrer"
      :href="`pdf/${article}.pdf`"
    >
      <img :src="require(`@/assets/img/cover/${article}.svg`)">
    </a>
    <p v-if="!article" :class="$style.alt">No<br>Article</p>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'Article',
  props: {
    article: {
      type: String,
    },
  },
});
</script>

<style module lang="scss">
.body {
  border: 1px solid $orange;

  img {
    width: 100%;
  }
}

.alt {
  color: $orange;
  font-size: 1.5rem;
  font-family: futura-pt, sans-serif;
  text-align: center;
  padding-top: 1.75rem;
  padding-bottom: 1.75rem;
  overflow: hidden;
}

.soon {
  color: $orange;
  font-size: min(1.25rem, 5vw);
  font-family: futura-pt, sans-serif;
  text-align: center;
  padding-top: 2.25rem;
  padding-bottom: 2.25rem;
  overflow: hidden;
}

</style>
