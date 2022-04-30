<template>
  <nuxt-content :document="entry" />
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'Markdown',
  props: {
    entry: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style lang="scss">
.nuxt-content {
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
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
