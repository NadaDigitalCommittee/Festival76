<template>
  <div :class="$style.parent">
    <div :class="$style.box">
      <TopDate :month="5" :day="2" day-of-week="mon" :class="$style.start" />
      <TopDate :month="5" :day="3" day-of-week="tue" :class="$style.end" />
      <div :class="$style.arrow" />
      <p :class="$style.title">第76回灘校文化祭</p>
      <span :class="$style.tab" />
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'Top',
});
</script>

<style module lang="scss">
.parent {
  display: flex;
  padding-top: 0.25rem;
  justify-content: center;
  align-items: center;
  background: url("~/assets/img/shade_pattern.png") top/2rem;
}

.box {
  position: relative;
  max-width: 25rem;
  width: 90%;
  height: 25rem;
  background-color: $skyblue;
}

.start {
  position: absolute;
  top: 9%;
  left: 8.5%;
}

.end {
  position: absolute;
  bottom: 21%;
  right: 8.5%;
}

.arrow {
  position: absolute;
  top: calc(42% - 2px);
  left: 30%;
  width: 35%;
  height: 4px;
  border-bottom: 1px solid $navy;
  border-right: 1px solid $navy;
  transform: rotate(45deg) skew(60deg);
}

.title {
  position: absolute;
  bottom: 5%;
  left: 0;
  width: 100%;
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
}

.tab {
  position: absolute;
  bottom: 4%;
  left: calc(50% - 1rem);
  width: 2rem;
  height: 2px;
  background-color: $navy;
}
</style>
