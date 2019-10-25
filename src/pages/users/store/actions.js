import services from '@/http'
import * as types from './mutation-types'

export const ActionFindUserslist = ({ commit }) => (
  services.users.findUserslist().then(res => {
    commit(types.SET_USERSLIST, res.data.data)
  })
)
