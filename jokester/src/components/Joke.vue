<template>
    <div class="col-md-6">
        {{index}}
        <div class="joke-card">
            <div class="card-blok">
                <button class="close" @click="removeJoke(index)"><span>&times;</span></button>
                <p>
                    <u>{{joke.setup}}</u>
                </p>
                <p>
                    <em>{{joke.punchline}}</em>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: "Joke",
    props: ["joke", "index"],
    methods: mapActions(['removeJoke'])
};
</script>

