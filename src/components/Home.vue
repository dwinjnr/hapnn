<template>
  <div>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--3-col mdl-cell mdl-cell--1-col-tablet mdl-cell--hide-phone"></div>
      <div class="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone">
        <div v-for="post in updates" class="image-card" :key="post.name">
          <div class="image-card__post">
            <img :src="post.photo" />
          </div>
          <div class="image-card__comment mdl-card__actions" style="text-align:left;">
            <span>{{ post.post }}<br><br>by {{post.name}}<br>{{post.time}}</span>
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
    }
  },
  computed: {
    updates () {
      return navigator.onLine ? this.sorted(this.$root.updates) : this.sorted(JSON.parse(localStorage.getItem('updates')))
    }
  },
  methods: {
    sorted (data) {
      return data.sort((a, b) => b.created_at - a.created_at)
    },
    saveUpdatesToCache () {
      this.$root.$firebaseRefs.updates.orderByChild('created_at').once('value', (snapchot) => {
        let cachedUpdates = []
        snapchot.forEach((updateSnapchot) => {
          let cachedUpdate = updateSnapchot.val()
          cachedUpdate['.key'] = updateSnapchot.key
          cachedUpdates.push(cachedUpdate)
        })
        localStorage.setItem('updates', JSON.stringify(cachedUpdates))
      })
    }
  },
  mounted () {
    this.saveUpdatesToCache()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.image-card {
  position: relative;
  margin-bottom: 8px;
}
.image-card__post > img {
  width:100%;
}
.image-card__comment {
  position: absolute;
  bottom: 0;
  padding: 16px;
  text-align: right;
  background: rgba(0, 0, 0, 0.5);
}
.image-card__comment > span {
  color: #fff;
  font-size: 14px;
  font-weight: bold;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
