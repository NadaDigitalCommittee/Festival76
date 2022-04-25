<template>
  <div :class="$style.main">
    <Title :class="$style.title">ブログ</Title>
    <BlogEntry
      :class="$style.item"
      v-for="entry in entries"
      :key="entry.title"
      :entry="entry"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BlogPage',
  head() {
    return {
      title: 'ブログ',
    };
  },
  data() {
    return {
      entries: [],
    };
  },
  async fetch() {
    this.entries = await this.$content('blog', { deep: true }).fetch();
  },
});
</script>

<style module lang="scss">
.main {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
  width: 90%;
  margin: 2rem auto;

  @media screen and (min-width: 800px) {
    width: 70%;
  }
}

.title {
  width: 100%;
  margin-bottom: 1rem;
}

.item {
  width: 95%;
  @media screen and (min-width: 800px) {
    width: 100%;
  }
}
</style>
