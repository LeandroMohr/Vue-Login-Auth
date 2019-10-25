export default [
  {
    path: '/*',
    name: 'notFound',
    component: () => import(/* webpackChunkName: "home" */ './NotFound')
  }
]
