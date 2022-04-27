<template>
  <div :class="$style.main">
    <Title :class="$style.title">整理券</Title>
    <p :class="$style.soon">Comming soon...</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TicketPage',
  head() {
    return {
      title: '整理券',
    };
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
  margin-bottom: 2rem;
}

.soon {
  width: 80%;
  max-width: 20rem;
  margin-left: auto;
  margin-right: auto;
  padding: 4rem 1rem;
  font-size: 2rem;
  /* font-weight: bold; */
  color: $orange;
  font-family: futura-pt, sans-serif;
  text-align: center;
  background-color: $white;
}

</style>
