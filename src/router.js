import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import PageNotFound from './views/404.vue'

Vue.use(Router)

const router = new Router({
  
  mode: 'history',
  base: process.env.BASE_URL,
  
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // },
    {
      path:'/about',
      name:'about',
      component: ()=> import('./views/Contact.vue')
    },
    {
      path:'/services',
      name:'services',
      component: ()=> import('./views/Services.vue')
    },
    {
      path:'*',
      name:'page-not-found',
      component: PageNotFound,
    }
  ]
})

export default router;