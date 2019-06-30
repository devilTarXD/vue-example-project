import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from '@/store/mutations'
import * as actions from '@/store/actions'

Vue.use(Vuex)


const state = {
    jokes: []
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})