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
            {{article.content}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewsApi from 'newsapi'
export default {
  name: 'home',
  data () {
    return {
      newsapi: new NewsApi('153ca5720f0446428f2fbfe54c7d0a08'),
      usUrl: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=153ca5720f0446428f2fbfe54c7d0a08',
      articles: []
    }
  },
  created () {
    this.newsapi.v2.topHeadlines({
      q: 'bitcoin',
      category: 'business',
      language: 'en',
      country: 'us'
    }).then(response => {
      this.articles = response.articles
      console.log(response)
    }).catch(error => console.log(error))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
