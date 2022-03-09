<template>
  <CardContainer>
    <!-- content/about.mdを表示する -->
    <ContentPage content="about" />
  </CardContainer>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'About',
});
</script>
