<template>
  <nuxt-link to="/news" :class="$style.more">
    <p>MORE</p>
    <span />
  </nuxt-link>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'More',
  props: {
    link: {
      type: String,
      required: true,
    },
  },
});
</script>

<style module lang="scss">
.more {
  display: flex;
  margin: auto 0 0.25rem 0;
  align-self: end;
  align-items: center;
  gap: 0.25rem;

  p {
    font-family: futura-pt, sans-serif;
    color: $gradient-orange;
  }

  span {
    width: 1rem;
    height: 3.5px;
    border-bottom: 0.5px solid $gradient-orange;
    border-right: 0.5px solid $gradient-orange;
    transform: skew(45deg) translateY(-1.75px);
  }
}
</style>
