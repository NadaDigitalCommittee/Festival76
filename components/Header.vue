<template>
  <header :class="$style.parent">
    <div :class="$style.main">
      <div />
      <nuxt-link to="/">
        <img src="@/assets/img/logo.svg" :class="$style.logo" @click="scroll()" />
      </nuxt-link>
      <HamburgerButton :class="$style.hamburger" @click.native="toggle()" />
    </div>
    <transition>
      <div :class="$style.sub" v-show="visible">
        <div :class="$style.linkbtn">サークル</div>
        <div :class="$style.linkbtn">ステージ</div>
        <div :class="$style.linkbtn">ブログ</div>
      </div>
    </transition>
  </header>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'Header',
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    toggle() {
      if (this.visible) {
        this.visible = false;
      } else {
        this.visible = true;
      }
    },
    scroll() {
      if (this.$route.path === '/') {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      }
    },
  },
});
</script>

<style>
.v-enter {
  transform: translateY(-3rem);
}

.v-enter-to {
  transform: translateY(0rem);
}

.v-leave {
  transform: translateY(0rem);
}

.v-leave-to {
  transform: translateY(-3rem);
}

.v-enter-active, .v-leave-active {
  transition: all 500ms;
}
</style>

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
  background-color: $background;
  z-index: 91;
}

.hamburger {
  height: 80%;
}

.sub {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 32.5%;
  /* transform: translateY(-3rem); */
  z-index: 90;
}

.linkbtn {
  max-width: 15rem;
  width: 31.5%;
  flex-grow: 0;
  height: 100%;
  background-color: $gray;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  color: $white;
  font-weight: 700;
}
</style>
