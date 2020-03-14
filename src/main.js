import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VideoBg from 'vue-videobg'

Vue.component('video-bg', VideoBg)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
