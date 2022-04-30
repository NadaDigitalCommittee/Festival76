<template>
  <div :class="$style.main">
    <Title :class="$style.title">ステージ</Title>
    <div :class="$style.list">
      <Accordion
        v-for="(stage, index) in stages"
        :key="index"
        :title="stage.name"
        :place="stage.place"
        :date="stage.date"
        :class="$style.item"
      >
        <div :class="$style.content">
          <YouTube v-if="stage.videoId" :video-id="stage.videoId" :class="$style.video" />
          <p :class="$style.desc">{{ stage.description }}</p>
          <More v-if="stage.detail" :class="$style.more" :link="stage.detail" />
          <div v-if="!stage.detail" :class="$style.space" />
        </div>
      </Accordion>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// eslint-disable-next-line import/no-unresolved, import/extensions
import Meta from '@/plugins/meta.js';

export default Vue.extend({
  name: 'StagePage',
  mixins: [Meta],
  data() {
    return {
      stages: [],
      meta: {
        title: 'ステージ一覧',
        description: '第76回灘校文化祭「Turn it Over🔥」ステージ企画の一覧。',
      },
    };
  },
  async fetch() {
    const content = await this.$content('stages').only(['stages']).fetch();

    if (!content || Array.isArray(content)) {
      return;
    }

    this.stages = content.stages;
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
    gap: 2.5rem 1.5rem;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
  }
}

.item {
  width: 100%;

  @media screen and (min-width: 800px) {
    width: 20rem;
  }
}

.content {
  display: flex;
  flex-direction: column;
}

.video {
  width: 50%;
  margin-bottom: 1.25rem;
}

.desc {
  font-size: 0.75rem;
  /* font-weight: bold; */
  min-height: 7.5em;
  line-height: 1.4;
  margin-bottom: 1rem;
  white-space: pre-wrap;
}

.more {
  align-self: flex-end;
  margin-top: auto;
}

.space {
  height: 1.4rem;
}
</style>
