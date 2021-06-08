<template>
  <div id="app">
    <div style="margin-bottom: 70px;" class="container">
    <div class="row">
      <div class = "col-md-12">
      <h1> <strong> Wähle deinen Cocktail </strong></h1>
      </div>
      </div>
      </div>
    <HelloWorld msg=""/>
  </div>
</template>

<script>
import HelloWorld from './components/Users.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
     methods: {
    myMethod () {
      this.$http.post(
        '/api/items', 
        { name: "my item" }
      );
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
