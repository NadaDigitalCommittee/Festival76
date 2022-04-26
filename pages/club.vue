<template>
  <div :class="$style.main">
    <Title :class="$style.title">クラブ・サークル</Title>
    <div :class="$style.list">
      <Accordion v-for="club in clubs" :key="club.name" :title="club.name" :class="$style.item">
        <div :class="$style.content">
          <Article :article="club.article" :class="$style.article" />
          <YouTube :video-id="club.videoId" :class="$style.video" />
        </div>
      </Accordion>
    </div>
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
  width: 90%;
  max-width: 25rem;
  margin: 1rem auto 3rem;

  @media screen and (min-width: 800px) {
    width: 80%;
    max-width: unset;
  }
}

.title {
  width: 100%;
  margin-bottom: 2rem;
}

.list {
  display: flex;
  width: 95%;
  flex-direction: column;
  align-items: flex-end;
  margin-left: auto;
  gap: 1rem;

  @media screen and (min-width: 800px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 2.5rem 1.5rem;
  }
}

.item {
  width: 100%;

  @media screen and (min-width: 800px) {
    width: 20rem;
    height: 13rem;
  }
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 15%;
  margin-bottom: 1.5rem;
}

.article {
  width: 35%;
}

.video {
  width: 50%;
}
</style>
