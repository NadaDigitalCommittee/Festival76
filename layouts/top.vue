<template>
  <div :class="$style.parent">
    <Background :class="$style.background" />
    <Background2 :class="$style.background2" />
    <Header :class="$style.header" />
    <HamburgerButton :class="$style.hamburger" @click.native="toggle()" :expanded="expanded"/>
    <SideBar
      @moved="toggle()"
      :class="[$style.sidebar, {expand: expanded === 1, fold: expanded === 0}]"
    />
    <div :class="$style.main">
      <Header2 :class="$style.header2" />
      <Nuxt :class="$style.body" />
      <Footer :class="$style.footer" />
    </div>
  </div>
</template>

<style>
@media screen and (max-width: 799px) {
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
  name: 'TopLayout',
  data() {
    return {
      expanded: -1,
    };
  },
  methods: {
    toggle() {
      if (this.expanded === 1) {
        this.expanded = 0;
      } else {
        this.expanded = 1;
      }
    },
  },
});
</script>

<style module lang="scss">
.parent {
  position: relative;
  overflow: hidden;
}

.background {
  position: absolute;
  z-index: -1;
  top: 40rem;
  left: 0;
  width: 100%;
  height: 175vw;

  @media screen and (min-width: 800px) {
    width: 80%;
    top: calc(12rem + 65vw);
    left: 10%;
    height: 140vw;
  }
}

.background2 {
  display: none;
  @media screen and (min-width: 800px) {
    display: inherit;
    position: absolute;
    z-index: -1;
    width: 80%;
    top: 12rem;
    left: 10%;
    height: 60vw;
  }
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  z-index: 90;
}

.sidebar {
  position: fixed;
  top: 0;
  left: 100%;
  width: 50%;
  height: 100%;
  z-index: 95;

  @media screen and (min-width: 800px) {
    left: unset;
    right: 0;
    width: unset;
    height: unset;
  }
}

.hamburger {
  position: fixed;
  top: 0.75rem;
  right: 1rem;
  width: 4rem;
  height: 4rem;
  z-index: 99;
}

.main {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 5rem);
  margin-top: 5rem;
  z-index: 50;
}

.header2 {
  height: 4rem;

  @media screen and (min-width: 800px) {
    display: none;
  }
}

.body {
  margin-top: 1.25rem;

  @media screen and (min-width: 800px) {
    margin-top: 2rem;
  }
}

.footer {
  flex-grow: 0;
  width: 100%;
  height: 11rem;
  margin-top: auto;
}
</style>
