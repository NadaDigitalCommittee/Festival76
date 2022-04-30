<template>
  <div :class="$style.main">
    <Title :class="$style.title">大講堂ステージ</Title>
    <div :class="$style.content">
      <p :class="$style.desc">
        これぞ文化祭の花形！ライブ！ロックでかっこいい演奏からしっとりバラードまで、さまざまな演奏に触れられます。大講堂に足を運んでみませんか？
      </p>
      <h1 :class="$style.midashi">出演バンド一覧</h1>
      <div :class="$style.playerswrapper">
        <article
          v-for="(band, index) in bands"
          :key="index"
          :class="$style.band"
        >
          <h2>{{ band.name }}</h2>
          <p :class="$style.date">
            <b>DAY1</b> {{ band.date[0] }} <b>DAY2</b> {{ band.date[1] }}
          </p>
          <p :class="$style.desc">{{ band.description }}</p>
        </article>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BandPage',
  head() {
    return {
      title: '大講堂ステージ',
    };
  },
  data() {
    return {
      bands: [],
    };
  },
  async fetch() {
    const content = await this.$content('stage/band').fetch();

    if (!content || Array.isArray(content)) {
      return;
    }
    this.bands = content.bands;
  },
});
</script>

<style lang="scss" module>
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

.content {
  background-color: $white;
  padding: 5%;
}

.midashi {
  font-weight: bold;
  font-size: 1.4em;
  margin-bottom: 0.5em;
  position: relative;
  border-bottom: 2px solid $orange;
  line-height: 2;
}

.band {
  line-height: 1.4;
  margin-bottom: 2rem;
  h2 {
    font-weight: bold;
    font-size: 1.4em;
    margin-bottom: 0.3em;
  }
}

.desc {
  font-size: 0.875rem;
  margin-bottom: 1em;
  text-align: justify;
}

.date {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}
</style>
