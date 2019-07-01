import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from '@/components/Dashboard'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/dashboard', name: 'dashboard', component: Dashboard},
        { path: '/signin', name: 'signin', component: SignIn},
        { path: '/signup', name: 'signup', component: SignUp}
    ]
})

export default router