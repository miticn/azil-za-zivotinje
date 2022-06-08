import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddYourAd from '../views/AddYourAd.vue'
import AdAdded from '../views/AdAdded.vue'
import AllAnimals from '../views/AllAnimals.vue'
import OneAnimal from '../views/OneAnimal.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/animals',
    name: 'Animals',
    component: AllAnimals
  },
  {
    path: '/animals/:id',
    name: 'Animal',
    component: OneAnimal
  },
  {
    path: '/lostpets',
    name: 'Lost Pets',
    component: ''
  },
  {
    path: '/addyourad',
    name: 'Add Your Ad',
    component: AddYourAd
  },
  {
    path: '/myaccount',
    name: 'My account',
    component: ''
  },
  {
    path: '/about',
    name: 'About',
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
