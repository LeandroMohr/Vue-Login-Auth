export default [
  {
    name: 'users',
    path: '/users',
    component: () => import(/* webpackChunkName: "users" */ './Users'),
    meta: {
      showNavbar: true,
      title: 'Users',
      icon: 'account_box',
      label: 'Todos os usuários'
    }
  }
]
