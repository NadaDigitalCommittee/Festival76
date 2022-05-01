<template>
  <div :class="$style.main">
    <h1 :class="$style.title">アクセス</h1>
    <div :class="$style.text">
      <h2 :class="$style.catch">住所</h2>
      <p :class="$style.address">
        <span>〒658-0082</span>
        <span>兵庫県神戸市東灘区魚崎北町8丁目5番1号</span>
      </p>
      <h2 :class="$style.catch">地図</h2>
      <GoogleMap :class="$style.map" />
        <h2 :class="$style.catch">駅からのアクセス</h2>
        <div :class="$style.container">
          <div :class="$style.way">
            <h3 :class="$style.caption">JR住吉駅からの道順(PDF)</h3>
            <Article :class="$style.article" article="e4329f7019514d23" />
          </div>
          <ul :class="$style.station">
            <li>JR住吉駅から徒歩10分</li>
            <li>阪神魚崎駅から徒歩10分</li>
            <li>阪急岡本駅から徒歩25分</li>
          </ul>
        </div>
    </div>
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
        title: 'アクセス',
        description: '灘校へのアクセスです。',
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

.catch {
  font-weight: bold;
  font-size: 1.4em;
  margin-bottom: 0.5em;
  position: relative;
  border-bottom: 2px solid $orange;
  line-height: 2;
}

.text {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem 1rem;
  background-color: $white;
}

.map {
  display: block;
  height: 22.5rem;
  margin: 1rem auto;
  width: 90%;
}

.address {
  font-size: 0.875rem;
  margin-bottom: 1rem;

  span {
    word-break: keep-all;
  }
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 800px) {
    flex-direction: row-reverse;
    /* align-items: center; */
  }
}

.station {
  font-size: 0.875rem;
  margin-left: 0.75rem;
  li {
    position: relative;
    margin-left: 1.25em;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
  }

  li::before {
    position: absolute;
    content: "";
    top: calc(50% - 0.2em);
    left: -0.8em;
    width: 0.4em;
    height: 0.4em;
    border-radius: 100%;
    background-color: $orange;
  }

  @media screen and (min-width: 800px) {
    margin-top: 1rem;
    font-size: 0.9rem;
  }
}

.way {
  width: 10rem;
  align-self: center;
  margin: 0 0.75rem 1rem 0.75rem;
}

.caption {
  font-size: 0.625rem;
  font-weight: bold;
  margin: 0.25rem;
  text-align: center;
  color: $orange;
}
</style>
