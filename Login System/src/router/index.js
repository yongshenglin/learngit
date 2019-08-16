import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Regis from '@/components/Regis'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Regis',
      component: Regis
    },
    {
      path: '/index',
      name: 'Home',
      component: Home
    }
  ]
})
