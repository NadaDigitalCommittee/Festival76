<template>
  <div>
    <News :limited="false" :class="$style.card" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// eslint-disable-next-line import/no-unresolved, import/extensions
import Meta from '@/plugins/meta.js';

export default Vue.extend({
  name: 'NewsPage',
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: 'ニュース',
        description: '第76回灘校文化祭「Turn it Over🔥」公式ウェブサイトのニュース一覧。',
      },
    };
  },
});
</script>

<style module lang="scss">
.card {
  width: 90%;
  max-width: 40rem;
  margin: 0 auto 2rem;

  @media screen and (min-width: 800px)  {
    width: 70%;
  }
}
</style>
