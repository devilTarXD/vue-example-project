import * as types from '@/store/mutation-types'

const mutations = {
    [types.SIGN_IN] (state, user_payload) {
        state.user = user_payload
    },
    [types.SIGN_OUT] (state) {
        state.user = {}
    },
    [types.SET_EVENTS] (state, events_playload) {
        state.events = events_playload
    }
} 

export default mutations