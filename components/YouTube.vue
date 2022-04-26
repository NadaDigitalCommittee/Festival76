<template>
  <div>
    <p :class="$style.caption">動画</p>
    <div :class="$style.body">
      <a v-if="typeof videoId === 'string'" target="_blank" rel="noopener noreferrer" :href="`https://youtube.com/watch?v=${videoId}`">
        <img :src="`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`">
      </a>
      <p v-if="videoId && videoId === true" :class="$style.soon">Comming<br>soon...</p>
      <p v-if="!videoId" :class="$style.alt">No Video</p>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'YouTube',
  props: {
    videoId: {
      type: String || Boolean,
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
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.soon {
  color: $orange;
  font-size: min(1.25rem, 5vw);
  font-family: futura-pt, sans-serif;
  text-align: center;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}

</style>
