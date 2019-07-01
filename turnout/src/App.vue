<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>



export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding-left: 10%;
  padding-right: 10%;
}

.signout-btn {
  position: absolute;
  text-align: center;
  top: 60px;
  right: 40px;
}
</style>
