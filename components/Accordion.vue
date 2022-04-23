<template>
  <div :class="$style.main">
    <div @click="toggle()" :class="$style.head">
      <div :class="$style.catch">
        <div :class="[$style.mark, {close: opened === 0, open: opened === 1}]" />
        <h2 :class="$style.title">{{ title }}</h2>
      </div>
      <div v-show="date && desc" :class="$style.info">
        <p v-show="date" :class="$style.date">{{ date }}</p>
        <p v-show="desc" :class="$style.desc">{{ desc }}</p>
      </div>
    </div>
    <div v-show="opened === 1" :class="$style.box">
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
  animation-duration: 0.5s;
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
}

.catch {
  position: relative;
  font-size: 0.875rem;
}

.title {
  font-weight: bold;
  color: $orange;
}

.info {
  flex-shrink: 2;
  display: flex;
  gap: 0 1.5rem;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 0.625rem;
  font-weight: 500;
  word-break: keep-all;
}

.date {
  color: $gray;
  margin-left: auto;
}

.desc {
  margin-left: auto;
}

.box {
  padding: 0.75rem 1rem 1.5rem 3rem;
}
</style>
