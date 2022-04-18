<template>
  <div>
    <div :class="$style.parent">
      <Header :class="$style.header" @toggle="toggle()" />
      <div :class="[$style.main, {slidein: expanded === 1, slideout: expanded === 0}]">
      <Header2 :class="$style.header2" />
      <Nuxt :class="$style.body" />
      <Footer :class="$style.footer" />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'DefaultLayout',
  data() {
    return {
      expanded: 2,
    };
  },
  methods: {
    toggle() {
      if (this.expanded === 2 || this.expanded === 1) {
        this.expanded = 0;
      } else if (this.expanded === 0) {
        this.expanded = 1;
      }
    },
  },
});
</script>

<style>
.slidein {
  animation-name: slideIn;
  animation-duration: 500ms;
  animation-fill-mode: forwards;
}

.slideout {
  animation-name: slideOut;
  animation-duration: 500ms;
  animation-fill-mode: forwards;
}

@keyframes slideIn {
  0% {
    margin-top: -4rem;
  }

  100% {
    margin-top: 0;
  }
}

@keyframes slideOut {
  0% {
    margin-top: 0;
  }

  100% {
    margin-top: -4rem;
  }
}
</style>

<style module lang="scss">
.parent {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
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
