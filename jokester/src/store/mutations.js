import *  as types from '@/store/mutation-types'

export const mutations = {
    [types.INIT_JOKES] (state, playload) {
        state.jokes.push(...playload)
    },

    [types.ADD_JOKE] (state, playload) {
        state.jokes.push(playload)
    },

    [types.REMOVE_JOKE] (state, index) {
        state.jokes.splice(index, 1)
    }
}