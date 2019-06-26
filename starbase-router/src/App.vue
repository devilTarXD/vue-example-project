<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h3> Starbase Router </h3>
    <div>
      <router-link class="link" :to="{name: 'starData', params: {type:'people'}}">Meet the Characters</router-link> |
      <router-link class="link" :to="{name: 'starData', params: {type:'planets'}}">Explore the Planets</router-link> 
    </div>
    <router-view/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld
  }
}
</script>

<style>
body {
  background: #263238;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
}

.link, .link:hover, .link:visited, .link:active {
  color: #4FC08D;
}

.item-card {
  border: 2px solid #4FC08D;
  border-radius: 4px;
  padding: 5px;
  padding-bottom: 10px;
  cursor: pointer;
}
</style>
