<template>
  <div :class="$style.main">
    <Title :class="$style.title">クラブ・サークル</Title>
    <div :class="$style.list">
      <div :class="$style.item" v-for="club in clubs" :key="club.name">
        <Accordion
          :title="club.name"
          :video="club.videos && typeof club.videos[0] === 'string'"
          :article="club.articles && typeof club.articles[0] === 'string'"
          :class="$style.accordion"
        >
          <div :class="$style.content">
            <div :class="$style.article_container">
              <p :class="$style.caption">部誌</p>
              <Article :article="club.articles ? club.articles[0] : null" :class="$style.article" />
            </div>
            <div :class="$style.video_container">
              <p :class="$style.caption">動画</p>
              <YouTube :video-id="club.videos ? club.videos[0] : null" :class="$style.video" />
              <More :class="$style.more" @click.native="club.popup = true" />
            </div>
          </div>
        </Accordion>
        <transition name="popup">
          <div v-if="club.popup" :class="$style.popup">
            <div :class="$style.popup_background" @click="club.popup = false" />
            <div :class="$style.popup_container">
              <div :class="$style.popup_catch">
                <h2 :class="$style.popup_title">{{ club.name }}</h2>
                <div :class="$style.popup_close" @click="club.popup = false">
                  <span :class="$style.popup_close1" />
                  <span :class="$style.popup_close2" />
                </div>
              </div>
              <div :class="$style.popup_main">
                <div :class="$style.popup_place">
                  <h4>場所</h4>
                  <p>{{ club.place }}</p>
                </div>
                <p :class="$style.popup_description">{{ club.description }}</p>
                <div v-if="club.articles" :class="$style.popup_articles">
                  <h3 :class="$style.popup_caption">部誌</h3>
                  <Article
                    v-for="(article, index) in club.articles"
                    :key="index"
                    :article="article"
                    :class="$style.popup_article"
                  />
                </div>
                <div v-if="club.videos" :class="$style.popup_videos">
                  <h3 :class="$style.popup_caption">動画</h3>
                  <YouTube
                    v-for="(video, index) in club.videos"
                    :key="index"
                    :video-id="video"
                    :class="$style.popup_video"
                  />
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<style>
.popup-enter, .popup-leave-to {
  opacity: 0;
}

.popup-enter-to, .popup-leave {
  opacity: 1;
}

.popup-enter-active, .popup-leave-active {
  transition: opacity 0.25s;
}
</style>

<script lang="ts">
import Vue from 'vue';
// eslint-disable-next-line import/no-unresolved, import/extensions
import Meta from '@/plugins/meta.js';

type Club = {
  name: string;
  place: string;
  description: string;
  articles?: {
    cover?: string,
    data: string;
  }[];
  videos?: (string | boolean)[];
  popup?: boolean;
};

export default Vue.extend({
  name: 'ClubPage',
  mixins: [Meta],
  data: (): { clubs: Club[]; meta: object } => ({
    clubs: [],
    meta: {
      title: 'クラブ・サークル一覧',
      description: '第76回灘校文化祭「Turn it Over🔥」に出展するクラブ・サークルの一覧です。部誌や動画も公開しています。',
    },
  }),
  async fetch() {
    const content = await this.$content('clubs').only(['clubs']).fetch<Club>();

    if (!content || Array.isArray(content) || !Array.isArray(content.clubs)) {
      return;
    }

    content.clubs.forEach((club: Club, _index: number) => {
      this.clubs.push(Object.assign(club, { popup: false }));
    });
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
  padding-bottom: 1rem;
}

.caption {
  color: $orange;
  font-weight: bold;
  font-size: 0.5rem;
  margin-bottom: 0.25rem;
}

.article_container {
  width: 35%;
}

.article {
  width: 100%;
}

.video_container {
  display: flex;
  flex-direction: column;
  width: 50%;
}

.video {
  width: 100%;
}

.more {
  margin-top: 1rem;
  padding: 0.25rem;
  margin-left: auto;
}

.popup {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
}

.popup_background {
  position: fixed;
  background-color: #00000066;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.popup_container {
  width: 80%;
  max-width: 35rem;
  background-color: $white;
  z-index: 110;
}

.popup_catch {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.popup_title {
  position: relative;
  font-weight: bold;
  font-size: 1.25rem;
  color: $orange;
  padding: 0.75rem;
}

.popup_close {
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.75rem;
}

.popup_close1, .popup_close2 {
  position: absolute;
  top: calc(50% - 2px);
  left: 10%;
  width: 80%;
  height: 2px;
  background-color: $orange;
}

.popup_close1 {
  transform: rotate(45deg);
}

.popup_close2 {
  transform: rotate(-45deg);
}

.popup_main {
  overflow-y: auto;
  min-height: 15rem;
  max-height: 50vh;
  padding: 0.75rem;
}

.popup_place {
  display: flex;
  align-items: center;
  margin: 0 0.25rem;
  gap: 1rem;
  font-size: 0.875rem;

  h4 {
    flex-shrink: 0;
    font-weight: bold;
    color: $orange;
  }
}

.popup_description {
  font-size: 0.875rem;
  padding: 1rem 0.25rem;
}

.popup_caption {
  font-weight: bold;
  font-size: 0.875rem;
  color: $orange;
  padding-top: 0.75rem;
  padding-left: 0.25rem;
}

.popup_article, .popup_video {
  width: 80%;
  margin: 0.75rem auto;
}
</style>
