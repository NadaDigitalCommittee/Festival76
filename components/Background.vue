<template>
  <div>
    <div :class="$style.main">
      <img :class="$style.pat1" src="@/assets/img/shade1.svg">
      <img :class="$style.pat2" src="@/assets/img/shade1.svg">
      <img :class="$style.pat3" src="@/assets/img/shade2.svg">
      <img :class="$style.pat4" src="@/assets/img/shade4.svg">
      <img :class="$style.pat5" src="@/assets/img/shade3.svg">
      <img :class="$style.pat6" src="@/assets/img/shade5.svg">
      <img :class="$style.pat7" src="@/assets/img/shade1.svg">
      <img :class="$style.pat8" src="@/assets/img/shade3.svg">
      <img :class="$style.pat9" src="@/assets/img/shade6.svg">
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
  left: 47.5%;
  width: 82.8px;
}

.pat2 {
  position: absolute;
  top: 20%;
  left: 2.5%;
  width: 82.8px;
}

.pat3 {
  position: absolute;
  top: 22.5%;
  left: 67.5%;
  width: 91.03px;
}

.pat4 {
  position: absolute;
  top: 40%;
  left: 42.5%;
  width: 86.95px;
}

.pat5 {
  position: absolute;
  top: 50%;
  left: 2.5%;
  width: 76.74px;
}

.pat6 {
  position: absolute;
  top: 66.5%;
  left: 75%;
  width: 91.11px;
}

.pat7 {
  position: absolute;
  top: 67.5%;
  left: 32.5%;
  width: 82.8px;
}

.pat8 {
  position: absolute;
  top: 86.5%;
  left: 70%;
  width: 76.74px;
}

.pat9 {
  position: absolute;
  top: 87.5%;
  left: 17.5%;
  width: 56.53px;
}
</style>
