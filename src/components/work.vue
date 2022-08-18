<template>
  <div id="work" class="work">
    <div class="l-inner">
      <h2 class="work__ttl">works</h2>
      <fadeInComponent>
        <ul class="work-list">
          <li class="work-item">
            <router-link :to="{ name:'work', params: {id: '1' }}">
              <img src="../assets/img-work-01.jpg" alt="demo1">
            </router-link>
            <p class="work-item__ttl">demo1</p>
            <p class="work-item__txt">HTML / CSS</p>
          </li>
          <li class="work-item">
            <router-link :to="{ name:'work', params: {id: '2' }}">
              <img src="../assets/img-work-02.jpg" alt="demo2">
            </router-link>
            <p class="work-item__ttl">demo2</p>
            <p class="work-item__txt">HTML / CSS</p>
          </li>
          <li class="work-item">
            <router-link :to="{ name:'work', params: {id: '3' }}">
              <img src="../assets/img-work-03.jpg" alt="demo3">
            </router-link>
            <p class="work-item__ttl">demo3</p>
            <p class="work-item__txt">HTML / CSS</p>
          </li>
          <li class="work-item">
            <router-link :to="{ name:'work', params: {id: '9' }}">
              <img src="../assets/img-work-09.jpg" alt="demo9">
            </router-link>
            <p class="work-item__ttl">demo4-オセロ</p>
            <p class="work-item__txt">HTML / CSS / vue2 / JavaScript</p>
          </li>
          <li class="work-item">
            <router-link :to="{ name:'work', params: {id: '4' }}">
              <img src="../assets/img-work-04.png" alt="チーム開発作品">
            </router-link>
            <p class="work-item__ttl">チーム開発作品</p>
            <p class="work-item__txt">HTML / CSS / jQuery / PHP / mySql / github</p>
          </li>
          <li class="work-item">
            <router-link :to="{ name:'work', params: {id: '5' }}">
              <img src="../assets/img-work-05.jpg" alt="チャモロ写真工房">
            </router-link>
            <p class="work-item__ttl">チャモロ写真工房</p>
            <p class="work-item__txt">HTML / CSS / jQuery</p>
          </li>
          <li class="work-item">
            <router-link :to="{ name:'work', params: {id: '6' }}">
              <img src="../assets/img-work-06.jpg" alt="Portfolio">
            </router-link>
            <p class="work-item__ttl">Portfolio</p>
            <p class="work-item__txt">HTML / CSS</p>
          </li>
          <li class="work-item">
            <router-link :to="{ name:'work', params: {id: '7' }}">
              <img src="../assets/img-work-07.jpeg" alt="HP">
            </router-link>
            <p class="work-item__ttl">HP</p>
            <p class="work-item__txt">WordPress</p>
          </li>
          <li class="work-item">
            <router-link :to="{ name:'work', params: {id: '8' }}">
              <img src="../assets/img-work-08.jpeg" alt="BLOG">
            </router-link>
            <p class="work-item__ttl">BLOG</p>
            <p class="work-item__txt">WordPress</p>
          </li>
        </ul>
      </fadeInComponent>
    </div>
  </div>
</template>

<script>
import fadeInComponent from '@/components/c-fadeIn.vue'

export default{
  name: 'work',
  components: {
    fadeInComponent
  }
}

</script>

<style lang="scss">
  .work{
    position: relative;
    padding-bottom: 64px;
    text-align: center;
    &__ttl{
      display: inline-block;
      font-size: 3.6rem;
      color: #fff;
      margin-bottom: 64px;
      padding: 64px 0 16px;
      border-bottom: solid 2px #fff;
    }
    &-list{
      display: flex;
      flex-wrap: wrap;
      gap: 40px;
      @media screen and (max-width:960px) {
        display: block;
      }
    }
    &-item{
      width: calc(33% - 40px);
      @media screen and (max-width:960px) {
        width: 100%;
        margin-bottom: 16px;
      }
      & img{
        width: 100%;
      }
      &__ttl{
        color: #fff;
        font-size: 2.4rem;
      }
      &__txt{
        color: #fff;
        font-size: 1.6rem;
      }
    }
  }

</style>
