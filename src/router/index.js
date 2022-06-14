import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const createRouter = () =>
  new Router({
    mode: 'history', // require service support
    base: '/',
    scrollBehavior: () => ({ y: 0 }),
    routes
    // routes: [...constantRoutes, ...asyncRoutes]
  })

const router = createRouter()
// 重置路由
export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
