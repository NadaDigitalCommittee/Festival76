<template>
  <div :class="$style.parent">
    <div :class="$style.box">
      <div :class="$style.start">
        <TopDate :month="5" :day="2" day-of-week="mon" />
        <div :class="$style.start_bar" />
      </div>
      <div :class="$style.end">
        <TopDate :month="5" :day="3" day-of-week="tue" />
        <div :class="$style.end_bar" />
      </div>
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
}

.box {
  position: relative;
  max-width: 30rem;
  width: 90%;
  height: 25.5rem;
  background: linear-gradient(
    321deg, $gradient-red 0%, $gradient-orange 65%, $gradient-yellow 100%
  );
}

.start {
  position: absolute;
  top: 9%;
  left: 8.5%;
}

.start_bar {
  width: calc(100% + min(90vw, 30rem) * 0.08);
  height: 1px;
  margin-left: calc(min(90vw, 30rem) * -0.085);
  margin-top: -0.5rem;
  background-color: $white;
}

.end {
  position: absolute;
  bottom: 21%;
  right: 8.5%;
}

.end_bar {
  width: calc(100% + min(90vw, 30rem) * 0.07);
  height: 1px;
  margin-left: calc(min(90vw, 30rem) * 0.015);
  margin-top: -0.3rem;
  background-color: $white;
}

.arrow {
  position: absolute;
  top: 27%;
  left: 45%;
  width: 3px;
  height: 36%;
  border-bottom: 2px solid $white;
  border-left: 1px solid $white;
  transform: rotate(-45deg) skewY(-60deg);
}

.title {
  position: absolute;
  bottom: 6%;
  left: 0;
  width: 100%;
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
  color: $white;
}

.tab {
  position: absolute;
  bottom: 4%;
  left: calc(50% - 1rem);
  width: 2rem;
  height: 2px;
  background-color: $white;
}
</style>
