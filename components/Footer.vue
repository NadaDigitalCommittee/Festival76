<template>
  <footer :class="$style.parent">
    <div :class="$style.main">
      <p :class="$style.follow">Follow us!!</p>
      <a href="https://youtu.be/78hfq6DQrGo">
        <img :class="$style.btn" src="~/assets/img/youtube.svg" />
      </a>
      <a href="https://instagram.com/nada_schoolfestival">
        <img :class="$style.btn" src="~/assets/img/instagram.png" />
      </a>
      <a href="https://lin.ee/bIbfdFl">
        <img :class="$style.btn" src="~/assets/img/line.svg" />
      </a>
      <a href="https://twitter.com/Nada_festival">
        <img :class="$style.btn" src="~/assets/img/twitter.svg" />
      </a>
    </div>
    <p :class="$style.credit">Web Team 2022</p>
  </footer>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'Footer',
});
</script>

<style module lang="scss">
.parent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
  width: 100%;
  padding: 5rem 8% 2.5rem;
  padding-top: 5rem;
  background-color: $background;
}

.main {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 0.5rem 0.25rem;
  border-bottom: 1px solid $white;
}

.follow {
  margin-right: auto;
  font-family: futura-pt, sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  color: $white;
}

.btn {
  width: 1.7rem;
}

.credit {
  margin-top: 0.5rem;
  margin-right: 0.75rem;
  font-family: futura-pt, sans-serif;
  font-size: 0.55rem;
  font-weight: bold;
  color: $white;
}
</style>
