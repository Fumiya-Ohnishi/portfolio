<template>
  <div id="contact" class="contact">
    <h2 class="contact__ttl">contact</h2>

    <div class="contact-area">
      <p class="contact-area__mainTxt">
        最後までご覧いただきありがとうございました。<br>
        何か気になることや、お手伝いできることがございましたら<br>
        ご連絡を宜しくお願いいたします。
      </p>
      <div class="contact-area__mail">
        <p class="contact-area__txt">メールでのお問い合わせ</p>
        <a href="mailto:soccer.14.2.25@gmail.com">メールでのお問い合わせはこちらから</a>
      </div>
      <p class="contact-area__txt">SNSでのお問い合わせ</p>
      <ul class="contact-area__ico">
        <li class="contact-area__icoItem"><a href="https://twitter.com/fumiya_ohnishi"><img src="../assets/ico-twi.svg" alt="twitter icon"></a></li>
        <li class="contact-area__icoItem"><a href="https://www.instagram.com/fumiya_web_engineer/"><img src="../assets/ico-Insta.svg" alt="Instagram icon"></a></li>
        <li class="contact-area__icoItem"><a href="https://www.facebook.com/people/%E5%A4%A7%E8%A5%BF-%E5%8F%B2%E5%BC%A5/100004202412583/"><img src="../assets/ico-face.svg" alt="Facebook icon"></a></li>
      </ul>
    </div>

  </div>
</template>

<script>
export default{
  name: 'contact'
}
</script>

<style lang="scss">
  .contact{
    position: relative;
    width: 100vw;
    height: 100vh;
    background: url(../assets/top-view.jpeg);
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    &::before{
      content: '';
      background-color: rgba(0, 0, 0, 0.8);
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
    }

    &__ttl{
      position: absolute;
      top: 5%;
      left: 50%;
      transform: translateX(-50%);
      display: inline-block;
      padding: 64px 0 16px;
      color: #fff;
      font-size: 3.6rem;
      border-bottom: solid 2px #fff;
    }
    &-area{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 50%;
      height: 50%;
      border-radius: 20px;
      background: #fff;
      opacity: .8;
      @media screen and (max-width:960px) {
        width: 90%;
        padding: 8px;
      }
      &__mail{
        text-align: center;
          margin-bottom: 64px;
          @media screen and (max-width:960px) {
            margin-bottom: 16px;
          }
        & a{
          text-decoration: none;
          font-size: 1.6rem;
          padding: 16px;
          color: #000;
          overflow: hidden;
          position: relative;
          z-index: 1;
          @media screen and (max-width:960px) {
            font-size: 1.6rem;
            text-align: left;
            margin-bottom: 32px;
            color: blue;
          }
          &::after {
            background: #000;
            position: absolute;
            top: 0;
            left: 0;
            content: '';
            width: 100%;
            height: 100%;
            transform: scale(0, 1);
            transform-origin: left top;
            transition: .2s cubic-bezier(0.45, 0, 0.55, 1);
            z-index: -1;
          }
          &:hover{
            color: #fff;
          }
          &:hover::after {
            transform: scale(1, 1);
          }
        }
      }
      &__mainTxt{
        text-align: center;
        font-size: 2.4rem;
        line-height: 2;
        margin-bottom: 64px;
        @media screen and (max-width:960px) {
          font-size: 1.8rem;
          text-align: left;
          margin-bottom: 16px;
          line-height: 1.5;
        }
      }
      &__txt{
        text-align: center;
        font-size: 2.4rem;
        margin-bottom: 32px;
        @media screen and (max-width:960px) {
          font-size: 1.6rem;
          text-align: left;
          margin-bottom: 16px;
        }
      }
      &__ico{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 32px;
      }
      &__icoItem{
        width: 32px;
        height: 32px;
      }
    }
  }
</style>
