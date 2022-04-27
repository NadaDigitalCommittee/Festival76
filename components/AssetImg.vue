<template>
  <img :src="require(`@/assets/img/blog/${src}?resize&size=600`)" :alt="alt">
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'AssetImg',
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: '',
    },
  },
});
</script>
