<template>
  <div :class="$style.main">
    <div @click="toggle()" :class="$style.head">
      <div :class="$style.catch">
        <div
          :class="[$style.mark, {close: opened === 0, open: opened === 1}]"
        />
        <h2 :class="$style.title">{{ entry.title }}</h2>
      </div>
      <div :class="$style.info">
        <p :class="$style.date">{{ entry.date }}</p>
        <p :class="$style.author">{{ entry.author }}</p>
      </div>
    </div>
    <client-only>
      <slide-up-down :active="opened === 1" :duration="250">
        <div :class="$style.box">
          <Markdown :entry="entry" />
        </div>
      </slide-up-down>
    </client-only>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'BlogEntry',
  props: {
    entry: {
      type: Object,
      required: true,
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

.author {
  margin-left: auto;
}

.box {
  margin: 0.75rem 2rem 0.75rem 3rem;
}
</style>
