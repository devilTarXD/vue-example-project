import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store'
import firebaseApp from '@/firebaseApp'

firebaseApp.auth().onAuthStateChanged(user => {
  if(user) {
    store.dispatch('signIn', user)
    router.push({name: 'dashboard'})
  } else {
    router.push({name: 'signin'})
  }
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
