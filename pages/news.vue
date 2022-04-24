<template>
  <div>
    <News :limited="false" :class="$style.card" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'NewsPage',
  head() {
    return {
      title: 'ニュース',
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
