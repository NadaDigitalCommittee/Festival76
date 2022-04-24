<template>
  <div :class="$style.main">
    <Title :class="$style.title">クラブ・サークル</Title>
    <Accordion v-for="(club, index) in clubs" :key="index" :title="club.name" :class="$style.item">
      <div :class="$style.content">
        <Article :article="club.article" :class="$style.article" />
        <YouTube :video-id="club.videoId" :class="$style.video" />
      </div>
    </Accordion>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ClubPage',
  head() {
    return {
      title: 'クラブ・サークル',
    };
  },
  data() {
    return {
      clubs: [],
    };
  },
  async fetch() {
    const content = await this.$content('clubs').only(['clubs']).fetch();

    if (!content || Array.isArray(content)) {
      return;
    }

    this.clubs = content.clubs;
  },
});
</script>

<style module lang="scss">
.main {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
  max-width: calc(25rem / 0.9);
  margin-left: calc((100% - min(90%, 25rem / 0.9)) / 2);
  margin-right: calc((100% - min(90%, 25rem / 0.9)) / 2);
}

.title {
  width: 100%;
  margin-bottom: 1rem;
}

.item {
  width: 95%;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 15%;
  margin-bottom: 0.75rem;
}

.article {
  width: 35%;
}

.video {
  width: 50%;
}
</style>
