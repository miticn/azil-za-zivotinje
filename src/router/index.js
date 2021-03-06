import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddYourAd from '../views/AddYourAd.vue'
import AdAdded from '../views/AdAdded.vue'
import AllAnimals from '../views/AllAnimals.vue'
import OneAnimal from '../views/OneAnimal.vue'
import LostPets from '../views/LostPets.vue'
import AnimalGroups from '../views/AnimalGroups.vue'
import MyAccount from '../views/MyAccount.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { title: 'Home', crumbs:['Home'],
    title_sr: 'Početna', crumbs_sr:['Početna'] },
  },
  {
    path: '/animals',
    name: 'Animals',
    component: AnimalGroups,
    meta: { title: 'Animal Groups', crumbs:['Animal Groups'],
    title_sr: 'Grupe Životinja', crumbs_sr:['Grupe Životinja'] },
  },
  {
    path: '/animals/:type',
    name: 'All animal types',
    component: AllAnimals,
    
  },
  {
    path: '/animals/:type/:id',
    name: 'One Animal',
    component: OneAnimal
  },
  {
    path: '/lostpets',
    name: 'Lost Pets',
    component: LostPets,
    meta: { title: 'Lost Pets', crumbs:['Lost Pets'],
    title_sr: 'Izgubljene životinje', crumbs_sr:['Izgubljene životinje']  }
  },
  {
    path: '/addyourad',
    name: 'Add Your Ad',
    component: AddYourAd,
    meta: { title: 'Add your ad', crumbs:['Add your ad'],
    title_sr: 'Dodaj oglas', crumbs_sr:['Dodaj oglas']  }
  },
  {
    path: '/myaccount',
    name: 'My account',
    component: MyAccount,
    meta: { title: 'My account', crumbs:['My account'], 
    title_sr: 'Moj nalog', crumbs_sr:['Moj nalog']}
  },
  {
    path: '/about',
    name: 'About',
    meta: { title: 'About', crumbs:['About'],
    title_sr: 'O nama', crumbs_sr:['O nama']  },
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
