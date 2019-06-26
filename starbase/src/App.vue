<template>
  <div id="app">
      <h3>{{title}}</h3>
      <div class="row col-md-12">
        <Character
           v-for="(id, index) in initial_ids"
           :id="id"
           :key="index"
          />
      </div>
  </div>
</template>

<script>
import Character from '@/components/Character'

export default {
    name: "app",
    components: {
        Character
    },
    data() {
        return {
            title: 'Generate Your Team',
            initial_ids: [1,4,7]
        }
    }
};
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
.character-card {
    border: 2px solid #4FC08D;
    border-radius: 4px;
    cursor: pointer;
}
</style>
