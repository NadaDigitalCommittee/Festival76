<template>
  <div :class="$style.main">
    <Title :class="$style.title">【重要】今年度灘校グッズに関するお知らせとお詫び</Title>
    <Markdown :class="$style.text" :entry="content" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'GoodsPage',
  head() {
    return {
      title: '今年度灘校グッズに関するお知らせとお詫び',
    };
  },
  data() {
    return {
      content: {},
    };
  },
  async fetch() {
    this.content = await this.$content('goods').fetch();
  },
});
</script>

<style module lang="scss">
.main {
  width: 90%;
  max-width: 25rem;
  margin: 1rem auto 3rem;

  @media screen and (min-width: 800px) {
    width: 80%;
    max-width: unset;
  }
}

.title {
  width: 100%;
  margin-bottom: 1rem;
}

.text {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem 1rem;
  background-color: $white;
}

</style>
