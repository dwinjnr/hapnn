<template>
  <div>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--3-col mdl-cell mdl-cell--1-col-tablet mdl-cell--hide-phone"></div>
      <div class="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone">
        <div class="card">
          <h3>Lorem ipsum kjsh ahhd js jbja  djs s opeside down just gthp</h3>
          <img src="static/img/dr-evil.jpg">
          <p>Descriprion ipsum kjsh ahhd js jbja  djs s opeside down just gthpipsum 
            kjsh ahhd js jbja  djs s opeside down just gthpipsum kjsh ahhd js jbja  djs s opeside down just gthp</p>
          <div class="more">
            <a href="#" class="card-link">
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
