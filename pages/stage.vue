<template>
  <div :class="$style.main">
    <Background2 :class="$style.background" />
    <Title :class="$style.title">ステージ</Title>
    <Accordion
      v-for="(stage, index) in stages" :key="index" :title="stage.name" :class="$style.item"
    >
      <div :class="$style.content">
        <YouTube v-if="stage.videoId" :video-id="stage.videoId" :class="$style.video" />
        <p :class="$style.desc">{{ stage.description }}</p>
        <More v-if="stage.detail" :class="$style.more" :link="stage.detail" />
      </div>
    </Accordion>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'StagePage',
  head() {
    return {
      title: 'ステージ',
    };
  },
  data() {
    return {
      stages: [],
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
  flex-direction: column;
  gap: 1.25rem;
}

.video {
  width: 50%;
}

.desc {
  font-size: 0.75rem;
  font-weight: bold;
}

.more {
  align-self: flex-end;
}
</style>
