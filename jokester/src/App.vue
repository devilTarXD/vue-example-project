<template>
    <div id="app">
        <h3>Good Jokester</h3>
		<button class="btn btn-primary" @click="initJokes"> Ramdom Ten Jokes </button>&nbsp;
		<button class="btn btn-primary" @click="addJoke"> Add a Joke </button>
		<br>
		<span v-for="(type, index) in types" :key="index">
			<input 
			type="checkbox"
			:value="type"
			v-model="checkedTypes"
			checked
			/>
			<label>{{type}}</label>&nbsp;
		</span>
		<br>
		<div class="col-md-12 row">
			<Joke
				v-for="(joke, index) in $store.state.jokes"
				v-show="checkedTypes.includes(joke.type)"
				:key="index"
				:joke="joke"
				:index="index"
			/>

		</div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import Joke from '@/components/Joke'

export default {
	name: "app",
	data(){
		return {
			types: ['general', 'knock-knock' , 'programming'],
			checkedTypes: ['general', 'knock-knock', 'programming']
		}
	},
    methods: mapActions(["initJokes", "addJoke"]),
    components: {
		Joke
	}
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3350;
    margin-top: 60px;
}

.joke-card {
	border: 2px solid #2c3350;
	border-image-repeat: 2px;
	padding: 5px;
	margin: 5px;

}
</style>
