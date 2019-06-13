/**
 * Vue Router
 * @library
 */

// Lib imports
import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import _ from 'lodash'
// Routes
import paths from './paths'

let ctr = 0

function genRoutes (pathObj, idx, parentPath) {
  const routes = {
    name: pathObj.name,
    path: pathObj.path,
    meta: pathObj.meta ? pathObj.meta : { public: false },
    component: (resolve) => import(`@/views/${pathObj.view}.vue`).then(resolve)
  }
  routes.meta.index = ctr++
  // ctr++
  if (pathObj.redirect) routes.redirect = pathObj.redirect
  if (pathObj.children) routes.children = pathObj.children.map((path, indx) => genRoutes(path, indx, routes.meta.index))
  return routes
}

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: paths.map((path, idx) => genRoutes(path, idx)).concat([{ path: '*', redirect: '/' }]),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return { x: 0, y: 0 }
  },
  linkActiveClass: 'app-router-link-active'
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = true
  if (to.meta.public) {
    next()
  } else {
    if (isAuthenticated) {
      next()
    } else {
      next('/')
    }
  }
})

Vue.use(Meta)

export default router
