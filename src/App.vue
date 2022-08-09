<template>

  <div id="app">
    <!-- ヘッダー -->
    <div id="header" class="header">
      <h1 class="header__ttl">Fumiya Ohnishi</h1>
      <ul class="header-menu">
        <li v-for="(item, i) in menus" :key="i" class="header-menu__item">
          <a :href="item.path" class="header-menu__link" v-smooth-scroll="{ duration: 2000, offset: -84 }">{{item.label}}</a>
        </li>
      </ul>
    </div>
    <router-view />
  </div>

</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      menus: [
        {
          label: 'TOP',
          path: '/#top'
        },
        {
          label: 'WORK',
          path: '/#work'
        },
        {
          label: 'SKILL',
          path: '/#skill'
        },
        {
          label: 'ABOUT',
          path: '/#about'
        },
        {
          label: 'CONTACT',
          path: '/#contact'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  html{
    font-size: 62.5%;
  }
  .l-inner{
    padding: 0 10%;
  }

  .header{
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: #000;
    padding: 24px;
    z-index: 1;
    @media screen and (max-width:960px) {
      display: block;
      padding: 24px 8px;
    }
    &__ttl{
      font-size: 2.4rem;
      color: #fff;
      @media screen and (max-width:960px) {
        margin-bottom: 8px;
      }
    }
    &-menu{
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 40px;
      @media screen and (max-width:960px) {
        gap: 10px;
      }
      &__link{
        font-size: 2.4rem;
        color: #fff;
        @media screen and (max-width:960px) {
          font-size: 1.6rem;
        }
      }
    }
  }
</style>
