import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import(/* webpackChunkName: "about" */ '../components/main/Main.vue')
  },
  {
    path: '/recipes',
    name: 'Recipes',
    component: () => import(/* webpackChunkName: "about" */ '../views/recipe/list/RecipesList')
  },
  {
    path: '/recipes/:id',
    name: 'Recipe Details',
    component: () => import(/* webpackChunkName: "about" */ '../views/recipe/details/RecipeDetails')
  },
  {
    path: '/newrecipe/',
    name: 'New Recipe',
    component: () => import(/* webpackChunkName: "about" */ '../views/recipe/details/RecipeForm')
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
