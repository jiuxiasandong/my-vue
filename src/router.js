import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import Layout from '@/views/Layout'
import Guide from '@/views/Guide'
import Home from '@/views/Home'
import Search from '@/views/Search'
import Find from '@/views/Find'
import Mine from '@/views/Mine'
import Describe from '@/views/Describe'
import Register from '@/views/Register'
import Login from '@/views/Login'
import Setpage from '@/views/Setpage'
import Province from '@/views/Province'
import Buy from '@/views/Buy'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'guide', component: Guide },
    {
      path: '/app',
      name: 'App',
      component: Layout,
      redirect: '/app/home',
      children: [
        { path: 'home', name: 'home', component: Home },
        { path: 'find', name: 'find', component: Find },
        { path: 'mine', name: 'mine', component: Mine },
        { path: '*', redirect: '/app/home' }
      ]
    },
    { path: '/search', name: 'search', component: Search },
    { path: '/describe', name: 'describe', component: Describe },
    { path: '/register', name: 'register', component: Register },
    { path: '/login', name: 'login', component: Login },
    { path: '/setpage', name: 'setpage', component: Setpage },
    { path: '/province', name: 'province', component: Province },
    { path: '/buy', name: 'buy', component: Buy },
    { path: '*', redirect: '/app/home' }
  ]
})
