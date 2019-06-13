/**
 * Define all of your application routes here
 */

export default [
  {
    path: '/',
    name: 'LayoutsApplication',
    view: 'layouts/Application',
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        view: 'Home'
      }, {
        path: '/about',
        name: 'About',
        view: 'About'
      }, {
        path: '/demo',
        name: 'Demo',
        view: 'Demo'
      }
    ]
  }, {
    path: '/auth',
    name: 'LayoutsAuthenticate',
    view: 'layouts/Authenticate',
    redirect: '/auth/login',
    children: [
      {
        path: '/auth/login',
        name: 'AuthLogin',
        view: 'auth/Login'
      }
    ]
  }
]
