import Vue from 'vue'
import Vuex from 'vuex'
import VideoBg from 'vue-videobg'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)

Vue.component('video-bg', VideoBg)

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
