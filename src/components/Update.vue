<template>
  <div>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--3-col mdl-cell mdl-cell--1-col-tablet mdl-cell--hide-phone"></div>
      <div class="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone">
        <div class="mdl-textfield mdl-js-textfield">
          <input placeholder="Name" v-model="update.name" type="text">
        </div>
        <div></div>
        <div class="mdl-textfield mdl-js-textfield">
          <textarea placeholder="Body" v-model="update.post" type="text"></textarea>
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
        created_at: ''
      }
    }
  },
  methods: {
    setImage (img) {
      this.update.photo = `../..${img.src}`
    },
    updatePost () {
      let date = new Date()
      this.update.created_at = `${date.getHours()}:${date.getMinutes()}`
      this.$root.$firebaseRefs.updates.push(this.update).then(this.$router.push('/'))
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
input, textarea {
  border: none;
  border-bottom: 1px solid rgba(0,0,0,.12);
  display: block;
  font-size: 16px;
  font-family: "Helvetica","Arial",sans-serif;
  margin: 0;
  padding: 4px 0;
  width: 100%;
  background: 0 0;
  text-align: left;
  color: inherit;
}
input:focus, textarea:focus {
  outline: none;
}
</style>
