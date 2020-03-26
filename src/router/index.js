import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home/Home.vue'
import Signin from '../components/auth/Signin.vue'
import Signup from '../components/auth/Signup.vue'

Vue.use(VueRouter)


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/signin', name: 'Signin', component: Signin },
  { path: '/signup', name: 'Signup', component: Signup }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
