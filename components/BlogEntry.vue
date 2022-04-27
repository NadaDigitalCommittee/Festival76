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
          <nuxt-content :document="entry" />
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

<style lang="scss">
.nuxt-content {
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  margin-left: -0.5rem;
  font-size: 0.75rem;

  p {
    margin-bottom: 0.5rem;
    line-height: 1.4;
  }

  h1,h2,h3,h4,h5,h6 {
    color: $orange;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  h1 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1.25rem;
  }

  h3 {
    font-size: 1rem;
  }

  h4 {
    font-size: 0.875rem;
  }

  h5 {
    font-size: 0.75rem;
  }

  h6 {
    font-size: 0.625rem;
  }

  ol {
    counter-reset: item;
  }

  ul,ol {
    margin-bottom: 0.5rem;
  }

  li {
    position: relative;
    margin-left: 1.25em;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
  }

  ul>li::before {
    position: absolute;
    content: "";
    top: calc(50% - 0.2em);
    left: -0.8em;
    width: 0.4em;
    height: 0.4em;
    border-radius: 100%;
    background-color: $orange;
  }

  ol>li::before {
    position: absolute;
    counter-increment: item;
    content: counter(item) ".";
    left: -1em;
    color: $orange;
  }

  blockquote {
    position: relative;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    margin-left: 0.8rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    color: $gray;
    font-style: oblique;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: -1em;
      width: 2px;
      height: 100%;
      background-color: #b4b4b4;
    }
  }

  code {
    background-color: #ededed;
    padding: 0 0.25rem 0.1rem 0.25rem;
    border-radius: 0.125rem;
  }

  hr {
    color: #b4b4b4;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  a {
    color: $orange;

    &:hover {
      text-decoration: underline;
    }
  }

  img {
    display: block;
    width: 80%;
    object-fit: contain;
    max-height: 20rem;
    margin: 1rem auto 1rem;
  }
}
</style>
