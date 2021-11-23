import { createRouter, createWebHistory } from '@ionic/vue-router';
import Index from '../views/Index.vue'
import Evaluation from "../views/Evaluation.vue";

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: Index
  },
  {
    path: '/evaluation/:time/:img',
    component: Evaluation
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
