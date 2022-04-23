<template>
  <div :class="$style.main">
    <Background2 :class="$style.background" />
    <Title :class="$style.title">ブログ</Title>
    <Accordion
      :class="$style.item"
      v-for="(entry, index) in entries"
      :key="index"
      :title="entry.title"
      :date="entry.date"
      :desc="entry.author"
    >
      <nuxt-content :class="$style.content" :document="entry" />
    </Accordion>
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
  max-width: calc(25rem / 0.9);
  margin-left: calc((100% - min(90%, 25rem / 0.9)) / 2);
  margin-right: calc((100% - min(90%, 25rem / 0.9)) / 2);
}

.background {
  position: absolute;
  max-width: calc(25rem / 0.9);
  z-index: -1;
  top: 15rem;
  left: calc((100vw - min(100vw, 25rem / 0.9)) / 2);
  width: 100%;
  height: calc(min(100vw, 25rem / 0.9) * 0.75);
}

.title {
  width: 100%;
  margin-bottom: 1rem;
}

.item {
  width: 95%;
}

.content {
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  margin-left: -0.5rem;
  font-size: 0.75rem;
}
</style>
