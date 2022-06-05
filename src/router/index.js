import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/animals',
    name: 'animals',
    component: ''
  },
  {
    path: '/lostpets',
    name: 'lostpets',
    component: ''
  },
  {
    path: '/add',
    name: 'add',
    component: ''
  },
  {
    path: '/myaccount',
    name: 'myaccount',
    component: ''
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
