import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VideoBg from 'vue-videobg'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import  './scss/main.scss'

Vue.use(BootstrapVue)
// Install BootstrapVue

Vue.component('video-bg', VideoBg)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
