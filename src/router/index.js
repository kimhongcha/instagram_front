import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import FeedBoard from '../views/FeedBoard.vue'
import MypageBoard from '../views/MypageBoard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/feedboard',
    name: 'FeedBoard',
    component: FeedBoard
  },
  {
    path: '/mypageboard',
    name: 'MypageBoard',
    component: MypageBoard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
