<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">Hapnn</span>
      </div>
    </header>
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">Hapnn</span>
      <nav class="mdl-navigation">
        <router-link class="mdl-navigation__link" to="/all" @click.native="hideMenu">All</router-link>
        <router-link class="mdl-navigation__link" to="/business" @click.native="hideMenu">Business</router-link>
        <router-link class="mdl-navigation__link" to="/entertainment" @click.native="hideMenu">Entertainment</router-link>
        <router-link class="mdl-navigation__link" to="/health" @click.native="hideMenu">Health</router-link>
        <router-link class="mdl-navigation__link" to="/science" @click.native="hideMenu">Science</router-link>
        <router-link class="mdl-navigation__link" to="/sports" @click.native="hideMenu">Sports</router-link>
        <router-link class="mdl-navigation__link" to="/technology" @click.native="hideMenu">Technology</router-link>
      </nav>
    </div>
    <main class="mdl-layout__content">
      <div class="page-content">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    hideMenu: function (category) {
      document.getElementsByClassName('mdl-layout__drawer')[0].classList.remove('is-visible')
      document.getElementsByClassName('mdl-layout__obfuscator')[0].classList.remove('is-visible')
    }
  }
}
</script>

<style>
body {
  margin: 0;
}
header span {
  padding-top: 0 !important;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.mdl-layout__drawer-button {
  line-height: 51px !important;
}

.mdl-layout-title {
  margin-top: -4px !important;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 57px !important;
  min-height: 57px !important;
  padding: 0 16px 0 24px;
  background-color: #328839 !important;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
