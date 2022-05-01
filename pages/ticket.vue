<template>
  <div :class="$style.main">
    <Title :class="$style.title">整理券</Title>
    <div :class="$style.form">
      <h1 :class="$style.title2">抽選確認システム</h1>
      <p>整理券に番号がある場合、下のフォームに整理券番号を入力し当選確認が出来ます。</p>
      <p>整理券に番号がない場合は、先着順のイベントですので開催時刻通りにイベント会場にお越しください。</p>
      <input :class="$style.idk" type="number" v-model.number= "num" placeholder="整理券番号を入力">
      <button v-on:click="check" :class="$style.button">確認</button>
      <p :class="$style.result">{{ result }}</p>
      <p>整理券についての情報は下のPDFを御覧ください。</p>
      <div :class="$style.pdf">
        <a href="pdf/整理券配布スケジュール.pdf">整理券配布スケジュール</a>
        <a href="pdf/整理券諸注意.pdf">整理券諸注意</a>
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

.form{
  background-color: $white;
  text-align: center;
  margin-bottom: min(50px,5vh);
}

.idk{
  width: 70%;
  min-width: 20rem;
  font-size: 1.5rem;
  padding: 0.25rem;
  /* outline: ridge 2px $gray; */
  border-bottom: 1px solid $orange;
  margin: 0.75rem;
}
.button{
  font-size: 1.25rem;
  font-weight: bold;
  padding: 0.5rem;
  color: $white;
  background-color: $orange;
  margin: 0.75rem;
  border-radius: 0.5rem;
  -webkit-box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
}

.result {
  font-size: 1.25rem;
  color: $orange;
  margin: 1rem;
}

.title2 {
  width: 100%;
  font-size: 1.4rem;
  font-weight: bold;
  background-color: $white;
  color: $orange;
  padding: 0.75rem;
}
.pdf{
  padding: 1rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
  @media screen and (max-width : 400px) {
    flex-direction: column;
  }
  @media screen and (min-width : 401px) {
    flex-direction: row;
  }
  a{
    color: $orange;
    text-decoration: underline;
  }
}
</style>
