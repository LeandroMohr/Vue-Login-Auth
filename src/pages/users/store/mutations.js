import * as types from './mutation-types'

export default {
  [types.SET_USERSLIST] (state, payload) {
    state.usersList = payload
  }
}
