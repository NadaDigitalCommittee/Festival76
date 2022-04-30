<template>
  <div class="main">
    <Title class="title">筋肉王</Title>
    <div class="content">
      <section>
        <h1 class="midashi">企画説明</h1>
        <p>
          灘校屈指の脳筋たちが集結！鍛え抜いた”美ボディ”を魅せつけます！パワーーーー！！
        </p>
        <a href="#" class="votebutton" v-scroll-to="'#voteform'"
          >投票はこちら</a
        >
      </section>

      <section>
        <h1 class="midashi">企画概要</h1>
        <p class="outline">日時：<span>9:40-10:10(DAY1)</span></p>
        <p class="outline">場所：中庭ステージ</p>
      </section>

      <section>
        <h1 class="midashi">出場者一覧</h1>

        <div class="playerswrapper">
          <article
            v-for="(player, index) in players"
            :key="index"
            class="player"
          >
            <img
              :src="
                require(`@/assets/img/stage/muscle/${player.img}?resize&size=600`)
              "
              alt="筋肉王出場者"
            />
            <h2>{{ "No." + Number(index + 1) + " " + player.name }}</h2>
            <p class="desc" v-text="player.desc"></p>
          </article>
        </div>
      </section>

      <section>
        <h1 id="voteform" class="midashi">投票フォーム</h1>
        <div class="form-wrapper">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfZCi_H3ucDwkRRxX_icXgdNCV_g5hkGJW0slPSfG5npk3PfQ/viewform?embedded=true"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            >読み込んでいます…</iframe
          >
        </div>
      </section>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
// eslint-disable-next-line import/no-unresolved, import/extensions
import Meta from '@/plugins/meta.js';

export default Vue.extend({
  name: 'MusclePage',
  mixins: [Meta],
  data() {
    return {
      players: [],
      meta: {
        title: '筋肉王',
        description: '灘校屈指の脳筋たちが集結！鍛え抜いた”美ボディ”を魅せつけます！パワーーーー！！',
      },
    };
  },
  async fetch() {
    const content = await this.$content('stage/muscle').fetch();

    if (!content || Array.isArray(content)) {
      return;
    }
    this.players = content.players;
  },
});
</script>
<style lang="scss" scoped>
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
  background-color: #fff;
  padding: 5%;

  section {
    margin-bottom: 1.5em;

    h1.midashi {
      font-weight: 600;
      font-size: 1.4em;
      margin-bottom: 0.5em;
      position: relative;
      border-bottom: 2px solid $orange;
      line-height: 2;
    }

    p {
      font-weight: 600;
      text-align: justify;
      line-height: 1.5;
      font-size: 0.9em;
      margin-bottom: 1em;
    }
    p.outline {
      font-size: 1.2em;
      display: flex;
    }
  }

  // 投票ボタン
  .votebutton {
    display: block;
    margin-left: auto;
    margin-top: 1em;
    padding: 0.7em;
    border-radius: 1em;
    background-color: $orange;
    color: #fff;
    font-weight: bold;
    width: fit-content;
    -webkit-box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  }

  // 出場者
  .player {
    padding: 2em 0;
    line-height: 1.5;
    h2 {
      font-weight: 900;
      font-size: 1.5em;
      margin-bottom: 0.3em;
    }
    img {
      width: 80%;
      margin-bottom: 1em;
    }
    p.desc {
      font-weight: 500;
      text-align: justify;
      white-space: pre-wrap;
    }
  }
  // 投票フォーム
  .form-wrapper {
    width: 101%;
    overflow-x: hidden;
    iframe {
      width: 100%;
      height: 100em;
    }
  }
}
</style>
