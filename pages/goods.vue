<template>
  <div :class="$style.main">
    <h1 :class="$style.title">【重要】今年度灘校グッズに関するお知らせとお詫び</h1>
    <Markdown :class="$style.text" :entry="content" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// eslint-disable-next-line import/no-unresolved, import/extensions
import Meta from '@/plugins/meta.js';

export default Vue.extend({
  name: 'GoodsPage',
  mixins: [Meta],
  data() {
    return {
      content: {},
      meta: {
        title: '【重要】今年度灘校グッズに関するお知らせとお詫び',
        description: '本年度の灘校文化祭のグッズについて、お知らせとお詫びがございます。一部グッズについて、生徒への先行販売で売り切れとなり、当日に灘校にお越しいただいてもお買い求めいただけなくなってしまいました。申し訳ございません。 来年以降の再発防止のため善処いたします。',
      },
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
  font-size: 1.4rem;
  font-weight: bold;
  background-color: $white;
  color: $orange;
  padding: 0.75rem;
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
