<template>
  <div id="skill" class="skill">
    <div class="l-inner">
      <h2 class="skill__ttl">skill</h2>
      <sideInLeftComponent>
        <p class="skill-area__ttl">開発言語</p>
        <div class="skill-area">
          <div class="skill-area-content">
            <span>HTML</span>
            <el-progress :percentage="70"></el-progress>
          </div>
          <div class="skill-area-content">
            <span>EJS</span>
            <el-progress :percentage="70"></el-progress>
          </div>
          <div class="skill-area-content">
            <span>Vue.js</span>
            <el-progress :percentage="50"></el-progress>
          </div>
          <div class="skill-area-content">
            <span>CSS</span>
            <el-progress :percentage="70"></el-progress>
          </div>
          <div class="skill-area-content">
            <span>Scss</span>
            <el-progress :percentage="70"></el-progress>
          </div>
          <div class="skill-area-content">
            <span>javaScript</span>
            <el-progress :percentage="60"></el-progress>
          </div>
          <div class="skill-area-content">
            <span>jQuery</span>
            <el-progress :percentage="60"></el-progress>
          </div>
          <div class="skill-area-content">
            <span>PHP</span>
            <el-progress :percentage="50"></el-progress>
          </div>
          <div class="skill-area-content">
            <span>Laravel</span>
            <el-progress :percentage="40"></el-progress>
          </div>
        </div>
      </sideInLeftComponent>
      <sideInRightComponent>
        <p class="skill-area__ttl">開発環境</p>
        <div class="skill-area">
          <div class="skill-area-content">
            <span>npm-script</span>
            <el-progress :percentage="50"></el-progress>
          </div>
          <div class="skill-area-content">
            <span>gulp</span>
            <el-progress :percentage="40"></el-progress>
          </div>
          <div class="skill-area-content">
            <span>docker</span>
            <el-progress :percentage="30"></el-progress>
          </div>
        </div>
      </sideInRightComponent>
      <sideInLeftComponent>
        <p class="skill-area__ttl">ツール</p>
        <div class="skill-area">
          <div class="skill-area-content">
            <span>GitHub</span>
            <el-progress :percentage="50"></el-progress>
          </div>
          <div class="skill-area-content">
            <span>XD</span>
            <el-progress :percentage="70"></el-progress>
          </div>
          <div class="skill-area-content">
            <span>Illustrator</span>
            <el-progress :percentage="30"></el-progress>
          </div>
          <div class="skill-area-content">
            <span>Photoshop</span>
            <el-progress :percentage="30"></el-progress>
          </div>
        </div>
      </sideInLeftComponent>
    </div>

  </div>
</template>

<style lang="scss">
  .skill{
    padding-bottom: 64px;
    text-align: center;
    background: #000;
    &__ttl{
      display: inline-block;
      font-size: 3.6rem;
      color: #fff;
      padding: 64px 0 16px;
      border-bottom: solid 2px #fff;
    }
    &-area{
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      width: 100%;
      @media screen and (max-width:960px) {
        display: block;
      }
      &__ttl{
        margin: 64px 0 16px;
        font-size: 2.4rem;
        color: #fff;
        text-align: left;
      }
      &-content{
        background: #fff;
        width: calc(33% - 20px);
        padding: 20px;
        font-size: 1.6rem;
        border-radius: 10px;
        @media screen and (max-width:960px) {
          width: 100%;
          margin-bottom: 16px;
        }
      }
    }
  }
</style>

<script>
import 'element-ui'
import sideInLeftComponent from '@/components/c-sideInLeft.vue'
import sideInRightComponent from '@/components/c-sideInRight.vue'

export default {
  name: 'skill',
  components: {
    sideInLeftComponent,
    sideInRightComponent
  }
}
</script>
