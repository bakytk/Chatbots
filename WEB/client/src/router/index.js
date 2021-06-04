import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Data from '../views/Data.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Data',
    name: 'Data',
    component: Data
  },
  {
     path: '/Md',
     beforeEnter() {location.href = 'https://mlmodels.netlify.app/'}
   },
  {
     path: '/Pizzeria',
     beforeEnter() {location.href = 'https://vuepizzeria.netlify.app'}
   },
   {
     path: '/Telegram',
     beforeEnter() {location.href = 'https://t.me/BarberAppointmentBot'}
   },
   {
     path: '/Facebook',
     beforeEnter() {location.href = 'https://m.me/109569947618288'}
   },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
