<template>
  <div :class="$style.box">
    <p :class="$style.digit">{{ month }}</p>
    <span :class="$style.dot" />
    <p :class="$style.digit">{{ day }}</p>
    <p :class="$style.day">{{ dayOfWeek }}</p>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'Top',
  props: {
    month: {
      type: Number,
      required: true,
    },
    day: {
      type: Number,
      required: true,
    },
    dayOfWeek: {
      type: String,
      required: true,
    },
  },
});
</script>

<style module lang="scss">
.box {
  display: flex;
  align-items: baseline;
  color: $white;
}

.digit {
  font-family: futura-pt, sans-serif;
  font-weight: bold;
  font-size: 4.5rem;
}

.day {
  margin-left: 0.5rem;
  font-family: futura-pt, sans-serif;
  font-weight: bold;
  font-size: 1.5rem;
}

.dot {
  width: 0.4rem;
  height: 0.4rem;
  margin-left: 0.3rem;
  margin-right: 0.45rem;
  background-color: $white;
  border-radius: 0.2rem;
}
</style>
