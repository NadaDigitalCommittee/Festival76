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
      <div v-if="(article || video) && !wide" :class="$style.icons">
        <img v-if="article && !wide" :class="$style.articleicon" src="@/assets/img/article.svg">
        <img v-if="video && !wide" :class="$style.videoicon" src="@/assets/img/video.svg">
      </div>
      <p v-if="place" :class="$style.place">{{ place }}</p>
    </div>
    <client-only>
      <transition name="date">
        <p :class="$style.date" v-if="date && opened === 1">
          <span v-if="date[0]">①{{ date[0] }}</span>
          <span v-if="date[0] && date[1]" :class="$style.space" />
          <span v-if="date[1]">②{{ date[1] }}</span>
        </p>
      </transition>
    </client-only>
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
    article: {
      type: Boolean,
    },
    video: {
      type: Boolean,
    },
    date: {
      type: Array,
    },
    place: {
      type: String,
    },
  },
  data() {
    return {
      opened: -1,
      wide: false,
    };
  },
  mounted() {
    this.resize();
    window.addEventListener('resize', this.resize);
  },
  methods: {
    toggle() {
      if (!this.$slots.default || this.wide) {
        return;
      }
      if (this.opened === 1) {
        this.opened = 0;
      } else {
        this.opened = 1;
      }
    },
    resize() {
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      if (vw >= 800) {
        this.wide = true;
        this.opened = 1;
      } else {
        this.wide = false;
      }
    },
  },
});
</script>

<style>
.date-enter, .date-leave-to {
  opacity: 0;
}

.date-enter-to, .date-leave {
  opacity: 1;
}

.date-enter-active, .date-leave-active {
  transition: opacity 250ms;
}

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
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 0 1rem 0 3rem;

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
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  color: $orange;
}

.icons {
  display: flex;
  align-items: center;
}

.articleicon {
  height: 1.4rem;
  margin-right: 0.75rem;
}

.videoicon {
  height: 1rem;
}

.place {
  font-size: 0.625rem;
  word-break: keep-all;
  margin-left: auto;
}

.datebox {
  width: 100%;
}

.date {
  /* color: $gray; */
  width: 100%;
  font-size: 0.625rem;
  text-align: left;
  padding-left: 3rem;
  padding-right: 1rem;
  margin-top: -0.5rem;

  @media screen and (min-width: 800px) {
    padding-left: 1rem;
  }
}

.space {
  display: inline-block;
  width: 0.8em;
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
