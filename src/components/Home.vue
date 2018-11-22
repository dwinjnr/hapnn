<template>
  <div>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--3-col mdl-cell mdl-cell--1-col-tablet mdl-cell--hide-phone"></div>
      <div class="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone">
        <!-- <div class="card">
          <div class="card-header">
            Featured
          </div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div> -->
          <p v-for="(article, index) in articles" :key="index">
            {{article.title}}
          </p>
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
<style>

</style>
