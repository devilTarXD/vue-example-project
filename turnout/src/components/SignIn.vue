<template>
    <div class="from-inline">
        <h3>Sign In</h3>
        <div class="form-gorup">
            <input 
            type="email"
            placeholder="email"
            class="form-control"
            v-model="email"
            />
            <input 
            type="password" 
            placeholder="password"
            class="form-control"
            v-model="password"
            />
            <br>
            <button class="btn btn-primary" @click="signIn"> Sign In</button>
        </div>
        <br>
        <router-link :to="{name: 'signup'}"> Sign Up</router-link>
        <br>
        <p>{{error.message}}</p>
    </div>
</template>

<script>
import firebaseApp from '@/firebaseApp'

export default {
    name: 'SignIn',
    data() {
        return {
            email: '',
            password: '',
            error: {
                message: ''
            }
        }
    },
    methods: {
        signIn() {
            firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password)
            .catch( error => {
                this.error = error
            })
        }
    }
}
</script>
