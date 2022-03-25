<template>
  <div :class="$style.box">
    <p :class="$style.title">{{ title }}</p>
    <slot :class="$style.inner" />
    <div :class="$style.more">
      <p>MORE</p>
      <span />
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'Top',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>

<style module lang="scss">
.box {
  display: flex;
  flex-direction: column;
  background-color: $skyblue;
}

.title {
  font-family: futura-pt, sans-serif;
  font-size: 2.25rem;
  font-weight: bold;
  line-height: 0.4em;
  margin-left: 1.5rem;

  &::after {
    content: "";
    display: block;
    margin-left: -0.5rem;
    margin-top: 0.09em;
    width: 10rem;
    height: 0.5px;
    background-color: $navy;
  }
}

.inner {
  margin: 1rem;
}

.more {
  display: flex;
  margin: auto 1.5rem 1rem 0;
  align-self: end;
  align-items: center;
  gap: 0.25rem;

  p {
    font-family: futura-pt, sans-serif;
  }

  span {
    width: 1rem;
    height: 3.5px;
    border-bottom: 0.5px solid $navy;
    border-right: 0.5px solid $navy;
    transform: skew(45deg) translateY(-1.75px);
  }
}
</style>
