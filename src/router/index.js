import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/projects',
    name: 'Projects list',
    component: () => import(/* webpackChunkName: "projects" */ '../views/projects/ProjectsList.vue')
  },
  {
    path: '/projects/:id',
    name: 'Projects edit',
    component: () => import(/* webpackChunkName: "projects" */ '../views/projects/ProjectsEdit.vue')
  },
  {
    path: '/countries',
    name: 'Countries',
    component: () => import(/* webpackChunkName: "countries" */ '../views/Countries.vue')
  },
  {
    path: '/capextypes',
    name: 'Capextypes',
    component: () => import(/* webpackChunkName: "capextypes" */ '../views/Capextypes.vue')
  },
  {
    path: '/newproject',
    name: 'New Project',
    component: () => import(/* webpackChunkName: "newproject" */ '../views/Newproject.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
