<template>
  <div :class="$style.main">
    <img :class="$style.top" src="~/assets/img/top.svg">
    <div :class="$style.card">
      <News :limited="true" :class="$style.news" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Index',
  layout: 'top',
  head() {
    return {
      title: 'トップページ',
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
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 2rem;
    gap: 0;
  }
}

.top {
  width: 90%;
  max-width: 25rem;

  @media screen and (min-width: 800px) {
    width: 45%;
    margin-right: 5%;
  }
}

.card {
  width: 90%;
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
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
