<template>
  <div class="work-detail">
    <!-- {{ this.$route.params.id }} -->
    <div class="work-detail-innre">

      <h2 class="work-detail__ttl">実績詳細ページ</h2>

      <h3 class="work-detail__subTtl">{{items.id[this.$props.id - 1].title}}</h3>

      <a :href="items.id[this.$props.id - 1].url" class="work-detail__img"><img :src="items.id[this.$props.id - 1].img" alt=""></a>

      <p class="work-detail__skill">使用した技術：{{items.id[this.$props.id - 1].skill}}</p>

      <p class="work-detail__coment">コメント：{{items.id[this.$props.id - 1].coment}}</p>

    </div>
  </div>
</template>

<style lang="scss">
  .work-detail{
    width: 100vw;
    height: 100vh;
    background: #000;

    &-innre{
      width: 60%;
      height: 100%;
      margin: 0 auto;
    }

    &__ttl{
      text-align: center;
      padding: 96px 0 64px;
      color: #fff;
      font-size: 3.2rem;
    }

    &__subTtl{
      margin-bottom: 16px;
      text-align: center;
      font-size: 2.4rem;
      color: #fff;
    }

    &__img{
      display: flex;
      justify-content: center;
      margin-bottom: 32px;
      & img{
        width: 100%;
      }
    }

    &__skill{
      font-size: 1.6rem;
      color: #fff;
      margin-bottom: 32px;
    }

    &__coment{
      font-size: 2.4rem;
      color: #fff;
    }
  }
</style>

<script>

export default{
  props: ['id'],
  data () {
    return {
      items: {
        id: [
          {
            title: 'demo1',
            url: 'https://fashion-demo2.herokuapp.com/',
            img: require('../assets/img-work-01.jpg'),
            skill: 'HTML / CSS',
            coment: '背景にパララックスを使ったシンプルなデザインのページです。'
          },
          {
            title: 'demo2',
            url: 'https://fashion-demo1.herokuapp.com/',
            img: require('../assets/img-work-02.jpg'),
            skill: 'HTML / CSS',
            coment: 'サイドナビを固定にし、写真のレイアウトの中に大きい写真を入れたデザインのページになっております。'
          },
          {
            title: 'demo3',
            url: 'https://bicycle-demo1.herokuapp.com//',
            img: require('../assets/img-work-03.jpg'),
            skill: 'HTML / CSS',
            coment: 'レスポンシブの練習用で作成したページです。'
          },
          {
            title: 'チーム開発作品',
            url: 'javascript:void(0)',
            img: require('../assets/img-work-04.png'),
            skill: 'HTML / CSS / jQuery / PHP / mySql / github',
            coment: 'mySqlに写真を保存して、服のECサイトのようなページです。写真自体に「goodボタン」「badボタン」を用意しユーザーに評価してもらえるようにしています。こちらのサイトは現在運用されてないためリンクはございません。申し訳ございません。'
          },
          {
            title: 'チャモロ写真工房',
            url: 'https://www.chamoro.info/',
            img: require('../assets/img-work-05.jpg'),
            skill: 'HTML / CSS / jQuery',
            coment: 'ホームページのリニューアルをさせていただきました。デザインからサーバー反映まで一人で行いました。今回は写真家さんのホームページなので写真をメインに使用しております。TOPのファーストビューにはクライアントのお子様が書かれた直筆の文字を置かせていただいております。'
          },
          {
            title: 'Portfolio',
            url: 'https://fumiya-ohnishi-portfolio.herokuapp.com/',
            img: require('../assets/img-work-06.jpg'),
            skill: 'HTML / CSS',
            coment: '簡単なポートフォリオを作成いたしました。とてもシンプルなページになっております。'
          },
          {
            title: 'HP',
            url: 'https://fuminana.com/',
            img: require('../assets/img-work-07.jpeg'),
            skill: 'WordPress',
            coment: 'こちらは、WordPressを使用し作成したものになります。こちらでは、ブログ記事の作成もできます。'
          },
          {
            title: 'demo2',
            url: 'https://www.fumiyaohnishi.com/',
            img: require('../assets/img-work-08.jpeg'),
            skill: 'WordPress',
            coment: 'WordPressを使用し作成したものになります。こちらは、ブログメインのページになっております。フッター部分にTwitterを表示されるようにしております。'
          }
        ]
      }
    }
  }
}

</script>
