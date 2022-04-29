<template>
  <div>
    <p :class="$style.caption">部誌</p>
    <div :class="$style.body">
      <a
        v-if="article && typeof article.data === 'string'"
        target="_blank" rel="noopener noreferrer"
        :href="article.data"
      >
        <img
          v-if="article.cover"
          :src="require(`@/assets/img/cover/${article.cover}?resize&size=600`)"
        >
        <p v-if="!article.cover" :class="$style.alt">No<br>Image</p>
      </a>
      <p v-if="!article" :class="$style.alt">No<br>Article</p>
      <p v-if="article && article.data === true" :class="$style.soon">Comming<br>soon...</p>
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
        data: string | boolean;
        cover?: string;
      }>,
      /* required: true, */
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
