<template>
  <header :class="$style.parent">
    <div :class="$style.main">
      <div />
      <img src="@/assets/img/logo.svg" :class="$style.logo" />
      <HamburgerButton :class="$style.hamburger" />
    </div>
    <div :class="$style.sub">
      <div :class="$style.linkbtn">サークル</div>
      <div :class="$style.linkbtn">ステージ</div>
      <div :class="$style.linkbtn">ブログ</div>
    </div>
  </header>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'Header',
});
</script>

<style module lang="scss">
.parent {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.main {
  height: 62.5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem 0 4rem;
  background-color: $red;
}

.hamburger {
  height: 80%;
}

.sub {
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 800px) {
    justify-content: space-evenly;
  }
  gap: 0.5rem;
  width: 100%;
  height: 32.5%;
}

.linkbtn {
  max-width: 15rem;
  flex-grow: 1;
  height: 100%;
  background-color: $red;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  color: $white;
  font-weight: 700;
}
</style>
