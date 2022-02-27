import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UsersView from '../views/UsersView.vue'
import UserDetailsView from '../views/UserDetailsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/users',
    name: 'users',
    component: UsersView
  },
  {
    path: '/users/:id',
    name: 'userDetails',
    component: UserDetailsView
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
