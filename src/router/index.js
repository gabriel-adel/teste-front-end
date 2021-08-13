import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts',
    name: 'Post',
    component: () => import('../views/Posts.vue')
  },
  {
    path: '/posts/:type/:id/:name',
    name: 'PostSomething',
    component: () => import('../views/Posts.vue')
  },
  
  
  {
    path: '/post/:id/:nome',
    name: 'ExpecificPost',
    component: () => import('../views/ExpecificPost.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
