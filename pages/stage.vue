<template>
  <div :class="$style.main">
    <Title :class="$style.title">ステージ</Title>
    <div :class="$style.list">
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
  width: 90%;
  max-width: 25rem;
  margin-left: auto;
  margin-right: auto;

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
  font-weight: bold;
  height: 2em;
  margin-bottom: 1rem;
}

.more {
  align-self: flex-end;
  margin-top: auto;
}
</style>
