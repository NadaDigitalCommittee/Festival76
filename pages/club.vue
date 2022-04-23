<template>
  <div :class="$style.main">
    <Background2 :class="$style.background" />
    <Title :class="$style.title">クラブ・サークル</Title>
    <Accordion v-for="(club, index) in clubs" :key="index" :title="club.name" :class="$style.item">
      <div v-if="club.article || club.videoId" :class="$style.content">
        <DisplayPdf v-if="club.article" :path="club.article" :class="$style.article" />
        <YouTube v-if="club.videoId" :video-id="club.videoId" :class="$style.video" />
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
      clubs: [{ name: 'Loading...' }],
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

.background {
  position: absolute;
  max-width: calc(25rem / 0.9);
  z-index: -1;
  top: 15rem;
  left: calc((100vw - min(100vw, 25rem / 0.9)) / 2);
  width: 100%;
  height: calc(min(100vw, 25rem / 0.9) * 0.75);
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
  flex-grow: 1;
}

.video {
  width: 50%;
}
</style>
