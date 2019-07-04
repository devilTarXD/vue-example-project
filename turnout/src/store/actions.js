import * as types from '@/store/mutation-types'

export const signIn = ({commit}, user_playload) => {
    commit(types.SIGN_IN, user_playload)
}

export const signOut = ({commit}) => {
    commit(types.SIGN_OUT)
}

export const setEvents = ({commit}, events_playload) => {
    commit(types.SET_EVENTS, events_playload)
}