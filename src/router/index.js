import Vue from 'vue'
import VueRouter from 'vue-router'
import BoardView from '../views/BoardView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'board',
    component: BoardView
  }
]

const router = new VueRouter({
  routes
})

export default router
