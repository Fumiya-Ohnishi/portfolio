<template>
  <div id="about" class="about">
    <div class="l-inner">
      <h2 class="about__ttl">about</h2>

      <div class="about-cont">
        <div class="about-cont-leftArea">
          <p class="about-cont-leftArea__ttl">"Hello world"</p>
          <p class="about-cont-leftArea__txt">
            はじめまして。愛媛県を拠点にWebエンジニアとして活動させていただいております大西と申します。<br>
            ５年ほど自動車会社で営業をし退職後フリーにてWeb制作をさせていただいております。<br>
            また、大学まではサッカーをしており今でも趣味程度ですが行っております。
          </p>
          <p class="about-cont-leftArea__txt">
            "Hello world"上記にあるタイトルは、プログラミングを勉強すると初めて表示される言葉です。<br>
            初めて画面に表示された瞬間の喜びと感動を今でもしっかりと覚えております。<br>
            これから、さまざまな経験をしていきますが、初心を忘れずに謙虚な姿勢で学んでいきたいと思っております。<br>
            また、皆様にも感動や、喜びを与えられるサイトを作れるようになり、ワクワクやドキドキを届けたいと思っております。<br>
            宜しくお願いいたします！！
          </p>
        </div>
        <div class="about-cont-rightArea">
          <img src="../assets/img-about.jpeg" alt="大西史弥 写真">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about'
}
</script>

<style lang="scss">
  .about{
    padding-bottom: 64px;
    text-align: center;
    z-index: -99;
    &__ttl{
      display: inline-block;
      font-size: 3.6rem;
      color: #fff;
      margin-bottom: 64px;
      padding: 64px 0 16px;
      border-bottom: solid 2px #fff;
    }
    &-cont{
      display: flex;
      align-items: center;
      gap: 40px;
      @media screen and (max-width:960px) {
        display: block;
      }
      &-leftArea{
        width: calc(50% - 40px);
        color: #fff;
        @media screen and (max-width:960px) {
          width: 100%;
        }
        &__ttl{
          font-size: 4.2rem;
          margin-bottom: 42px;
        }
        &__txt{
          text-align: left;
          font-size: 1.6rem;
          margin-bottom: 32px;
        }
      }
      &-rightArea{
        width: calc(50% - 40px);
        @media screen and (max-width:960px) {
          width: 100%;
        }
        & img{
          width: 100%;
          filter: grayscale(100%);
        }
      }
    }
  }
</style>
