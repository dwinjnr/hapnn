<template>
  <div>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--3-col mdl-cell mdl-cell--1-col-tablet mdl-cell--hide-phone"></div>
      <div class="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone">
        <div class="mdl-textfield mdl-js-textfield">
          <input class="mdl-textfield__input" type="text" id="name" v-model="update.name">
          <label class="mdl-textfield__label" for="name">Name</label>
        </div>
        <div class="mdl-textfield mdl-js-textfield">
          <textarea class="mdl-textfield__input" type="text" id="post" v-model="update.post"></textarea>
          <label class="mdl-textfield__label" for="body">Body</label>
        </div>
        <br>
        <p class="p-title">Select an Image</p>
        <vue-select-image :dataImages="images" @onselectimage="setImage"></vue-select-image>
        <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored add-btn" @click="updatePost">
          <i class="material-icons">add</i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'update',
  data () {
    return {
      images: [
        {
          id: 1,
          src: '/static/img/photo1.jpeg',
          alt: 'image 1'
        },
        {
          id: 2,
          src: '/static/img/photo2.jpg',
          alt: 'image 1'
        }
      ],
      update: {
        name: '',
        post: '',
        photo: '',
        time: ''
      }
    }
  },
  methods: {
    setImage (img) {
      this.update.photo = `../..${img.src}`
    },
    updatePost () {
      let date = new Date()
      this.update.time = `${date.getHours()}:${date.getMinutes()}`
      let updateToStore = this.update
      console.log(updateToStore)
    }
  }
}
</script>

<style>
.vue-select-image__item {
  float: none !important;
}
.vue-select-image__item {
  width: 50% !important;
  margin: auto !important;
}
.p-title {
  color: #ff4081;
}
.add-btn {
  margin-top: 20px;
}
</style>
