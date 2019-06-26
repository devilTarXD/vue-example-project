import Vue from 'vue'
import VueRouter from 'vue-router'

import StarData from '@/components/StarData'
import HelloWorld from '@/components/HelloWorld'


Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/starData/:type',
            name: 'starData',
            component: StarData
        },
        {
            path: '*',
            name: 'helloworld',
            component: HelloWorld
        }
    ]
})

export default router

