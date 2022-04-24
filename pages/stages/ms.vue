<template>
  <div class="main">
    <Title class="title">Ms.灘</Title>
    <div class="content">
      <p>
        灘校一の美少女を決めるMs.灘コンテスト。魅力的な子たちがステージに集結します！あなたの推しを応援しよう！
      </p>
      <a href="" class="vote">投票はこちら</a>
    </div>
  </div>
</template>
<script>
export default {};
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
  p {
    font-weight: bold;
    text-align: justify;
    line-height: 1.5;
    font-size: 0.9em;
  }

  .vote {
    display: block;
    margin-left: auto;
    margin-top: 1em;
    padding: 0.7em;
    border-radius: 1em;
    background-color: #eb5a00;
    color: #fff;
    font-weight: bold;
    width: fit-content;
    -webkit-box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  }
}
</style>