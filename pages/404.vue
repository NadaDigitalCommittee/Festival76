<!-- 404の時に表示する -->
<template>
  <div :class="$style.container">
    <p :class="$style.code">404</p>
    <p :class="$style.message">Page Not Found</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'NotFound',
});
</script>

<style lang="scss" module>
.container {
  text-align: center;
  font-weight: 600;
  color: $color-text-dimmed;
  padding: 2.5rem;
  line-height: 1;
}

.code {
  font-size: 8rem;
}

.message {
  font-size: 3rem;
}
</style>
