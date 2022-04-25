<template>
  <div class="main">
    <Title class="title">Ms.灘</Title>
    <div class="content">
      <section>
        <h1 class="midashi">企画説明</h1>
        <p>
          灘校一の美少女を決めるMs.灘コンテスト。魅力的な子たちがステージに集結します！あなたの推しを応援しよう！
        </p>
        <a href="#" class="votebutton" v-scroll-to="'#voteform'"
          >投票はこちら</a
        >
      </section>

      <section>
        <h1 class="midashi">企画概要</h1>
        <p class="outline">
          日時：<span>30時~42時（６日目）<br />50時~32時（9日目）</span>
        </p>
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
              :src="require(`@/assets/img/stage/ms/${player.img}`)"
              alt="Ms.灘出場者"
            />
            <h2>{{ "No." + Number(index + 1) + " " + player.name }}</h2>
            <p class="character">{{ player.character }}</p>
            <p class="desc">{{ player.desc }}</p>
          </article>
        </div>
      </section>
      <section>
        <h1 id="voteform" class="midashi">投票フォーム</h1>
      </section>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'MsPage',
  head() {
    return {
      title: 'Ms.灘',
    };
  },
  data() {
    return {
      players: [],
    };
  },
  async fetch() {
    const content = await this.$content('ms').fetch();

    if (!content || Array.isArray(content)) {
      return;
    }
    this.players = content.players;
  },
});
</script>
<style lang="scss" scoped>
.main {
  max-width: calc(25rem / 0.9);
  margin-left: calc((100% - min(90%, 25rem / 0.9)) / 2);
  margin-right: calc((100% - min(90%, 25rem / 0.9)) / 2);
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
      // border-bottom: 2px solid black;
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
    p.character {
      margin-bottom: 0.2em;
    }
    p.character::before {
      content: "キャラ：";
    }
    p.desc {
      font-weight: 500;
      text-align: justify;
    }
  }
}
</style>
