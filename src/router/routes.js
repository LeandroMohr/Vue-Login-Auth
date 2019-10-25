import { routes as home } from '../pages/home'
import { routes as auth } from '../modules/auth'
import { routes as series } from '../pages/series'
import { routes as users } from '../pages/users'
import { routes as notFound } from '../pages/notFound'

export default [
  ...auth,
  ...home,
  ...series,
  ...users,
  ...notFound
]
