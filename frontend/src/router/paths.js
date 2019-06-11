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
      }
    ]
  }
]
