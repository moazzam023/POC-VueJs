<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <WelcomePage msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import WelcomePage from './components/WelcomePage.vue'

export default {
  name: 'App',
  components: {
    WelcomePage
  }
}
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
}
</style>
