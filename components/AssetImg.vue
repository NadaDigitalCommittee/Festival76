<template>
  <img :src="require(`@/assets/img/blog/${src}`)" :alt="alt">
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
