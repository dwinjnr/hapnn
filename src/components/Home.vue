<template>
  <div>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--3-col mdl-cell mdl-cell--1-col-tablet mdl-cell--hide-phone"></div>
      <div class="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone">
        <div class="loader" v-show="loading"><cube-spin></cube-spin></div>
        <div v-show="!loading" class="card" v-for="(article, index) in articles" :key="index">
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
import idb from 'idb'
import CubeSpin from 'vue-loading-spinner/src/components/DoubleBounce'
export default {
  name: 'home',
  data () {
    return {
      articles: [],
      loading: false
    }
  },
  components: { CubeSpin },
  props: ['category'],
  watch: {
    category (newCategory, oldCategory) {
      this.fetchNews()
    }
  },
  methods: {
    dbPromise () {
      // If the browser doesn't support service worker,
      // we don't care about having a database
      if (!navigator.serviceWorker) {
        return Promise.resolve()
      }
      return idb.open(`hapnn-${this.category}`, 1, upgradeDb => {
        upgradeDb.createObjectStore('hapnns', {
          keyPath: 'publishedAt'
        })
      })
    },
    fetchNews () {
      this.loading = true
      if (navigator.onLine) {
        this.$newsapi.v2.topHeadlines({
          category: this.category === 'all' ? '' : this.category,
          country: 'ng'
        }).then(response => {
          this.dbPromise().then(db => {
            let store = db.transaction('hapnns', 'readwrite').objectStore('hapnns')
            response.articles.forEach(hapnn => {
              store.put(hapnn)
            })
            // limit store to 20 items
            store.openCursor(null, 'prev').then(cursor => {
              return cursor.advance(20)
            }).then(function deleteRest (cursor) {
              if (!cursor) return
              cursor.delete()
              return cursor.continue().then(deleteRest)
            })
          })
          this.loading = false
          this.articles = response.articles
        }).catch(error => console.log(error))
      } else {
        this.dbPromise().then(db => {
          let storedArticles = db.transaction('hapnns').objectStore('hapnns').getAll()
          return storedArticles.then(articles => {
            setTimeout(() => {
              this.loading = false
              this.articles = articles.reverse()
            }, 2000)
          })
        })
      }
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
