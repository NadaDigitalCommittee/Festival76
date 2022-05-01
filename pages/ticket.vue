<template>
  <div :class="$style.main">
    <Title :class="$style.title">整理券</Title>
    <div :class="$style.form">
      <h1 :class="$style.title2">抽選確認システム</h1>
      <p>整理券に番号がある場合、下のフォームに整理券番号を入力し当選確認が出来ます。</p>
      <p>整理券に番号がない場合は、先着順のイベントですので開催時刻通りにイベント会場にお越しください。</p>
      <input :class="$style.idk" type="number" v-model.number= "num" placeholder="整理券番号を入力">
      <button v-on:click="check" :class="$style.button">確認</button>
      <p>{{ result }}</p>
      <p>整理券についての情報は下のPDFを御覧ください。</p>
      <div :class="$style.pdf">
        <a href="/pdf/整理券配布スケジュール.pdf">整理券配布スケジュール</a>
        <a href="/pdf/整理券諸注意.pdf">整理券諸注意</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

// eslint-disable-next-line import/no-unresolved, import/extensions
import Meta from '@/plugins/meta.js';

const jsonpAdapter = require('axios-jsonp');

export default Vue.extend({
  name: 'TicketPage',
  mixins: [Meta],
  head() {
    return {
      title: '整理券配布',
      description: '第76回灘校文化祭「Turn it Over🔥」整理券配布・抽選ページ。',
    };
  },
  data() {
    return {
      num: '',
      result: '検索結果がここに表示されます',
    };
  },
  methods: {
    check() {
      this.result = '問い合わせ中…しばらくお待ちください。';
      if (Number.isSafeInteger(this.num)) {
        this.$axios({
          url: '/api',
          params: {
            number: this.num,
          },
          adapter: jsonpAdapter,
        })
          .then((response) => {
            if (response.data.index >= 0) {
              this.result = `整理券${this.num}番は当選しています。整理券に書かれた時刻通りにイベント会場にお越しください。`;
            } else {
              this.result = `整理券${this.num}番は当選していないか、まだ抽選が行われていません。`;
            }
          });
      } else {
        this.result = '整数のみを入力してください';
      }
    },
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

.soon {
  width: 80%;
  max-width: 20rem;
  margin-left: auto;
  margin-right: auto;
  padding: 4rem 1rem;
  font-size: 2rem;
  /* font-weight: bold; */
  color: $orange;
  font-family: futura-pt, sans-serif;
  text-align: center;
  background-color: $white;
}

.form{
  background-color: $white;
  text-align: center;
  margin-bottom: min(50px,5vh);
}
.button{
  outline-style:ridge;
  outline-width: 2px;
  outline-color: $gray;
}

.idk{
  width: min(400px,100%);
  font-size: x-large;
  outline: ridge 2px $gray;
  margin-bottom: 10px;
}
.button{
  font-size: x-large;
  margin-bottom: 10px;
}
.title2 {
  width: 100%;
  font-size: 1.4rem;
  font-weight: bold;
  background-color: $white;
  color: $orange;
  padding: 0.75rem;
  margin-bottom: 1rem;
}
.pdf{
  padding: 10px;
  display: flex;
  gap:10px;
  justify-content: center;
  @media screen and (max-width : 400px) {
    flex-direction: column;
  }
  @media screen and (min-width : 401px) {
    flex-direction: row;
  }
  a{
    text-decoration: underline;
  }
}
</style>
