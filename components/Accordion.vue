<template>
  <div :class="$style.main">
    <div @click="toggle()" :class="$style.head">
      <div :class="$style.catch">
        <div
          v-show="$slots.default"
          :class="[$style.mark, {close: opened === 0, open: opened === 1}]"
        />
        <h2 :class="$style.title">{{ title }}</h2>
      </div>
    </div>
    <client-only>
      <slide-up-down :active="opened === 1" :duration="250">
        <div :class="[$style.box, $style.slider]">
          <slot />
        </div>
      </slide-up-down>
    </client-only>
    <div :class="[$style.box, $style.noslide]">
      <slot />
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'Accordion',
  props: {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
    },
    desc: {
      type: String,
    },
  },
  data() {
    return {
      opened: -1,
    };
  },
  methods: {
    toggle() {
      if (!this.$slots.default) {
        return;
      }
      if (this.opened === 1) {
        this.opened = 0;
      } else {
        this.opened = 1;
      }
    },
  },
});
</script>

<style>
.close, .open {
  animation-duration: 250ms;
  animation-fill-mode: forwards;
}

.close {
  animation-name: close;
}

.open {
  animation-name: open;
}

@keyframes close {
  0% {
    transform: rotate(45deg);
  }

  100% {
    transform: rotate(-45deg);
  }
}

@keyframes open {
  0% {
    transform: rotate(-45deg);
  }

  100% {
    transform: rotate(45deg);
  }
}
</style>

<style module lang="scss">
.main {
  background-color: $white;
}

.head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 3rem;

  @media screen and (min-width: 800px) {
    padding-left: 1rem;
  }
}

.mark {
  position: absolute;
  top: calc(50% - 0.5rem - 2px);
  left: -2rem;
  height: 1em;
  width: 1em;
  border-bottom: 2px solid $orange;
  border-right: 2px solid $orange;
  transform-origin: 75% 75%;
  transform: rotate(-45deg);

  @media screen and (min-width: 800px) {
    display: none;
  }
}

.catch {
  position: relative;
  font-size: 0.875rem;
}

.title {
  font-weight: bold;
  color: $orange;

}

.box {
  margin: 0.75rem 2rem 0.75rem 3rem;

  @media screen and (min-width: 800px) {
    margin-left: 2rem;
  }
}

.noslide {
  @media screen and (max-width: 799px) {
    display: none;
  }
}

.slider {
  @media screen and (min-width: 800px) {
    display: none;
  }
}
</style>
