<template>
  <div :class="$style.box">
    <p :class="$style.title">News</p>
    <div :class="$style.list">
      <p v-for="(item, index) in (limited? news.slice(0, 3) : news)" :key=index>{{ item }}</p>
    </div>
    <More v-if="limited && news.length > 3" link="/news" />
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'News',
  props: {
    limited: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      news: [],
    };
  },
  async fetch() {
    const content = await this.$content('news').only(['news']).fetch();

    if (!content || Array.isArray(content)) {
      return;
    }
    this.news = content.news;
  },
});
</script>

<style module lang="scss">
.box {
  display: flex;
  flex-direction: column;
  background-color: $white;
  padding: 0.5rem 1.5rem;
}

.title {
  font-family: futura-pt, sans-serif;
  color: $orange;
  font-size: 2.25rem;
  font-weight: bold;
  margin-bottom: 1rem;

  &::after {
    content: "";
    display: block;
    margin-left: -0.5rem;
    margin-top: -0.23em;
    width: 10rem;
    height: 0.5px;
    background-color: $gradient-orange;
  }
}

.list {
  display: flex;
  flex-direction: column;
  margin: 1rem;
  width: calc(100% - 2rem);

  p {
    font-size: 0.75rem;
    font-weight: bold;
    text-align: center;
    width: 100%;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;

    &::after {
      content: "";
      display: block;
      height: 1px;
      background-image: linear-gradient(90deg, $background, $background 5px, transparent 5px);
      background-size: 10px 1px;
      background-position: left bottom;
      background-repeat: repeat-x;
      transform: translateY(0.75rem);
    }

    &:last-child::after {
      content: none;
    }
  }
}
</style>
