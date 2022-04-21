<template>
  <div>
    <div :class="$style.main">
      <img :class="$style.pat1" src="@/assets/img/shade1.svg">
      <img :class="$style.pat2" src="@/assets/img/shade6.svg">
      <img :class="$style.pat3" src="@/assets/img/shade5.svg">
      <img :class="$style.pat4" src="@/assets/img/shade3.svg">
      <img :class="$style.pat5" src="@/assets/img/shade3.svg">
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'Background',
});
</script>

<style module lang="scss">
.main {
  position: relative;
  width: 100%;
  height: 100%;
}

.pat1 {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 82.8px;
}

.pat2 {
  position: absolute;
  top: 7.5%;
  right: 30%;
  width: 56.53px;
}

.pat3 {
  position: absolute;
  top: 30%;
  right: 0.15%;
  width: 91.11px;
}

.pat4 {
  position: absolute;
  top: 62.5%;
  right: 37.5%;
  width: 76.74px;
}

.pat5 {
  position: absolute;
  top: 67.5%;
  left: 2.5%;
  width: 76.74px;
}
</style>
