<template>
  <div :class="$style.main">
    <Top :class="$style.top" />
    <div :class="$style.cards">
      <Card title="News" :class="$style.card" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Index',
});
</script>

<style module lang="scss">
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 800px) {
    padding-top: 2rem;
  }
  gap: 3.5rem;
  margin-bottom: 6rem;
  width: 100%;
}

.top {
  width: 100%;
  max-width: 45rem;
  height: 30rem;
}

.cards {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;
  @media screen and (min-width: 800px) {
    width: 80%;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 2rem;
  }

  @media screen and (min-width: 1500px) {
    width: 60%;
  }
}

.card {
  width: 90%;
  max-width: 25rem;
  @media screen and (min-width: 800px) {
    width: 20rem;
  }
  min-height: 12rem;
}
</style>
