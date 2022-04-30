<template>
  <div :class="$style.main">
    <Title :class="$style.title">ブログ</Title>
    <div :class="$style.list">
      <BlogEntry
        :class="$style.item"
        v-for="entry in entries"
        :key="entry.title"
        :entry="entry"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// eslint-disable-next-line import/no-unresolved, import/extensions
import Meta from '@/plugins/meta.js';

export default Vue.extend({
  name: 'BlogPage',
  mixins: [Meta],
  data() {
    return {
      entries: [],
      meta: {
        title: 'ブログ',
        description: '第76回灘校文化祭「Turn it Over🔥」公式ブログ。文化委員会の委員長と役員たちが勝手気ままに書きたいことを書きます。',
      },
    };
  },
  async fetch() {
    this.entries = (await this.$content('blog', { deep: true }).fetch()).reverse();
  },
});
</script>

<style module lang="scss">
.main {
  width: 90%;
  max-width: 30rem;
  margin: 1rem auto 3rem;

  @media screen and (min-width: 800px) {
    max-width: unset;
    width: 70%;
  }
}

.title {
  width: 100%;
  margin-bottom: 2rem;
}

.list {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
}

.item {
  width: 95%;
  @media screen and (min-width: 800px) {
    width: 100%;
  }
}
</style>
