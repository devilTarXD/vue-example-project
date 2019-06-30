import Vue from 'vue'
import App from './App.vue'
import store from '@/store'

Vue.config.productionTip = false

// store.commit('INIT_JOKES', [{test: 'test_jokes', test_2: 'test_jokes_2'}])

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
