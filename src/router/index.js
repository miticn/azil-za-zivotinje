import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddYourAd from '../views/AddYourAd.vue'
import AdAdded from '../views/AdAdded.vue'
import AllAnimals from '../views/AllAnimals.vue'
import MyAccount from '../views/MyAccount.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/animals',
    name: 'animals',
    component: AllAnimals
  },
  {
    path: '/lostpets',
    name: 'lostpets',
    component: ''
  },
  {
    path: '/addyourad',
    name: 'AddYourAd',
    component: AddYourAd
  },
  {
    path: '/myaccount',
    name: 'MyAccount',
    component: MyAccount
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
  },
  {
    path: '/adadded',
    name: 'AdAdded',
    component: AdAdded
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
