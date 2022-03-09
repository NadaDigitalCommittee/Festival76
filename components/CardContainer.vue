<!-- カード状のレイアウト(メインページと説明ページで使用) -->
<template>
  <div :class="$style.container">
    <!-- ここが中身 -->
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'CardContainer',
});
</script>

<style lang="scss" module>
.container {
  /* Mixinをインポートする */
  @include Float(0.5rem);

  max-width: 56rem;
  padding: 1.5rem;
  background-color: #ffffff;
  overflow: hidden;
}
</style>
