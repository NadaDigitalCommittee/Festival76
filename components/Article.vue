<template>
  <div>
    <p :class="$style.caption">部誌</p>
    <div :class="$style.body">
      <a v-if="article" target="_blank" rel="noopener noreferrer" :href="`pdf/${article.data}`">
        <img v-if="article.cover" :src="require(`@/assets/img/cover/${article.cover}`)">
        <p v-if="!article.cover" :class="$style.alt">No<br>Image</p>
      </a>
      <p v-if="!article" :class="$style.alt">No<br>Article</p>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'Article',
  props: {
    article: {
      type: Object as Vue.PropType<{
        data: string;
        cover?: string;
      }>,
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

  img {
    width: 100%;
  }

  p {
    color: $orange;
    font-size: 1.5rem;
    font-family: futura-pt, sans-serif;
    text-align: center;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
}

</style>
