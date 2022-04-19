<template>
  <div>
    <div :class="$style.parent">
      <Header :class="$style.header" />
      <HamburgerButton :class="$style.hamburger" @on="on()" @off="off()"/>
      <SideBar :class="[$style.sidebar, {expand: expanded === 1, fold: expanded === 0}]" />
      <div :class="$style.main">
        <Header2 :class="$style.header2" />
        <Nuxt :class="$style.body" />
        <Footer :class="$style.footer" />
      </div>
    </div>
  </div>
</template>

<style>
.expand {
  animation-name: slideIn;
  animation-duration: 500ms;
  animation-fill-mode: forwards;
}

.fold {
  animation-name: slideOut;
  animation-duration: 500ms;
  animation-fill-mode: forwards;
}

@keyframes slideIn {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-100%);
  }
}

@keyframes slideOut {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(0);
  }
}
</style>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'DefaultLayout',
  data() {
    return {
      expanded: -1,
    };
  },
  methods: {
    on() {
      this.expanded = 1;
    },
    off() {
      this.expanded = 0;
    },
  },
});
</script>

<style module lang="scss">
.parent {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin-top: 5rem;
}

.sidebar {
  position: fixed;
  top: 0;
  left: 100%;
  width: 50%;
  height: 100%;
  z-index: 95;
}

.hamburger {
  position: fixed;
  top: 0.5rem;
  right: 0.5rem;
  width: 4rem;
  height: 4rem;
  z-index: 99;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  z-index: 90;
}

.main {
  z-index: 50;
}

.header2 {
  height: 4rem;
}

.footer {
  flex-grow: 0;
  width: 100%;
  height: 11rem;
  margin-top: auto;
}
</style>
