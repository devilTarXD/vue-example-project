import * as types from '@/store/mutation-types'

const mutations = {
    [types.SIGN_IN] (state, user_payload) {
        state.user = user_payload
    },
    [types.SIGN_OUT] (state) {
        state.user = {}
    }
} 

export default mutations