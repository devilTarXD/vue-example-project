const RANDOM_JOEKS_TEN =  'https://official-joke-api.appspot.com/random_ten'
const RANDOM_JOEK =  'https://official-joke-api.appspot.com/random_joke'

import * as types from '@/store/mutation-types'

export const initJokes = ({commit}) => {
    fetch(`${RANDOM_JOEKS_TEN}`, {method: 'GET'})
    .then(response => response.json())
    .then(json => commit(types.INIT_JOKES, json))
}

export const addJoke = ({commit}) => {
    fetch(`${RANDOM_JOEK}`, {method: 'GET'})
    .then(response => response.json())
    .then(json => commit(types.ADD_JOKE, json))
}

export const removeJoke = ({commit}, index) => {
    commit(types.REMOVE_JOKE, index)
}