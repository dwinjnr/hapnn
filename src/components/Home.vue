<template>
  <div>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--3-col mdl-cell mdl-cell--1-col-tablet mdl-cell--hide-phone"></div>
      <div class="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone">
        <div class="card" v-for="(article, index) in articles" :key="index">
          <h3>{{article.title}}</h3>
          <small>{{article.publishedAt}}</small>
          <img :src="article.urlToImage ? article.urlToImage : 'static/img/no-image.jpg'">
          <p>{{article.description ? article.description : 'Desciption not avalaible'}}</p>
          <div class="more">
            <a :href="article.url" class="card-link">
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      articles: []
    }
  },
  props: ['category'],
  watch: {
    category (newCategory, oldCategory) {
      this.fetchNews()
    }
  },
  methods: {
    fetchNews () {
      this.$newsapi.v2.topHeadlines({
        category: this.category,
        country: 'ng'
      }).then(response => {
        this.articles = response.articles
        console.log(response)
      }).catch(error => console.log(error))
    }
  },
  created () {
    this.fetchNews()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  padding: 10px;
  text-align: left;
  margin-bottom: 20px;
}
.card img {
  width: 100%;
  margin: 13px auto;
}
.card p {
  font-size: 15px;
}
.more {
  text-align: right;
}
</style>
