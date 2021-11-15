import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import boton from '../components/boton.vue'
import teclado from '../components/teclado.vue'
import pantalla from '../components/pantalla.vue'
import calculadora from '../components/calculadora.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'calculadora',
    component: calculadora
  },
  {    
    path: 'teclado',
    name: 'teclado',
    component: teclado
  },
  {
    path: '/pantalla',
    name: 'pantalla',
    component: pantalla
  },
  {
    path: '/boton',
    name: 'boton',
    component: boton
  },
 
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
