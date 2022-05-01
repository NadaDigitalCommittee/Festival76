<template>
  <div :class="$style.main">
    <img :class="$style.top" src="top.svg">
    <div :class="$style.card">
      <News :limited="true" :class="$style.news" />
      <div :class="$style.access">
        <h2 :class="$style.access_header">Access</h2>
        <GoogleMap :class="$style.map" />
        <p :class="$style.address">
          <span>〒658-0082</span>
          <span>兵庫県神戸市東灘区魚崎北町8丁目5番1号</span>
        </p>
        <More :class="$style.more" link="/access" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// eslint-disable-next-line import/no-unresolved, import/extensions
import Meta from '@/plugins/meta.js';

export default Vue.extend({
  name: 'Index',
  layout: 'top',
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: 'トップページ',
      },
    };
  },
});
</script>

<style module lang="scss">
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  width: 100%;
  margin-bottom: 5rem;

  @media screen and (min-width: 800px) {
    flex-direction: row-reverse;
    /* flex-direction: row; */
    /* align-items: flex-start; */
    justify-content: flex-start;
    margin-bottom: 2rem;
    gap: 0;
  }
}

.top {
  width: 90%;
  max-width: 25rem;

  @media screen and (min-width: 800px) {
    width: 50%;
    max-width: 32rem;
    margin-right: 5%;
  }
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  gap: 2rem;
  min-width: 12rem;
  max-width: 25rem;
  min-height: 14.75rem;

  @media screen and (min-width: 800px) {
    min-width: 25rem;
    max-width: unset;
    flex-glow: 1;
  }
}

.news {
  max-width: 40rem;
  width: 100%;
  height: 100%;
  min-height: 10rem;

  @media screen and (min-width: 800px) {
    width: 70%;
  }
}

.access {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 40rem;
  padding: 0.75rem;
  width: 100%;
  height: 100%;
  min-height: 10rem;
  background-color: $white;

  @media screen and (min-width: 800px) {
    width: 70%;
  }
}

.access_header {
  font-family: futura-pt, sans-serif;
  color: $orange;
  font-size: 2.25rem;
  font-weight: bold;
  margin-left: 0.75rem;

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

.map {
  display: block;
  width: 90%;
  height: 12rem;
  align-self: center;
  margin: 0.5rem;
}

.address {
  font-size: 0.75rem;
  text-align: center;

  span {
    word-break: keep-all;
  }
}

.more {
  align-self: flex-end;
  margin-right: 0.75rem;
}
</style>
