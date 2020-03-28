import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VideoBg from 'vue-videobg'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import  './scss/main.scss'
import Vuelidate from 'vuelidate';
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)
Vue.use(BootstrapVue);
Vue.use(Vuelidate);

// Install BootstrapVue

Vue.component('video-bg', VideoBg)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
