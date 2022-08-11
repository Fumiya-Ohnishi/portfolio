<template>
  <div id="top" class="top-firstView">
    <div class="top-firstView-ttl">
      <p class="top-firstView-ttl__sub">Welcome to</p>
      <p class="top-firstView-ttl__main">Fumiya ohnishi</p>
      <ul class="top-firstView-ttl__ico">
        <li class="top-firstView-ttl__icoItem"><a href="https://twitter.com/fumiya_ohnishi"><img src="../assets/ico-twi.svg" alt="twitter icon"></a></li>
        <li class="top-firstView-ttl__icoItem"><a href="https://www.instagram.com/fumiya_web_engineer/"><img src="../assets/ico-Insta.svg" alt="Instagram icon"></a></li>
        <li class="top-firstView-ttl__icoItem"><a href="https://www.facebook.com/people/%E5%A4%A7%E8%A5%BF-%E5%8F%B2%E5%BC%A5/100004202412583/"><img src="../assets/ico-face.svg" alt="Facebook icon"></a></li>
        <li class="top-firstView-ttl__icoItem"><a href="https://github.com/oonisifumiya"><img src="../assets/ico-git.svg" alt="GitHub icon"></a></li>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  name: 'top'
}
</script>

<style lang="scss">
  .top-firstView{
    position: relative;
    width: 100vw;
    height: 100vh;
    background: url(../assets/top-view.jpeg);
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    @media screen and (max-width:960px) {
      background-attachment: unset;
    }
    &::before{
      content: '';
      /* ↓暗いオーバーレイを半透明で配置 */
      background-color: rgba(0, 0, 0, 0.8);
      /* ↓全体を覆うように配置 */
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: block;
    }
    &__img{
      width: 100%;
      height: 100%;
    }
    &-ttl{
      position: absolute;
      top: 50%;
      left: 5%;
      transform: translateY(-50%);
      color: #fff;
      &__sub{
        font-size: 2.4rem;
      }
      &__main{
        margin: 0;
        font-size: 5rem;
      }
      &__ico{
        display: flex;
        align-items: center;
        list-style: none;
        filter: invert(1);
        &Item{
          margin: 8px 8px 0 0;
          width: 24px;
          height: 24px;
          & img{
            width: 100%;
            height: 100%;
          }
          &::marker{
            display: none;
          }
        }
      }
    }
  }
</style>
