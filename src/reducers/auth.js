import * as types from '../actions/types'
const INITIAL_STATE = { user: null, loading: false, isLoggedIn: false }

const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SIGN_IN_INIT:
      return { ...state, loading: true }
    case types.SIGN_IN_SUCCESS:
      return { ...state, loading: false, user: action.payload, isLoggedIn: true }
    case types.SIGN_IN_FAILURE:
      return { ...state, loading: false, error: action.payload, isLoggedIn: false }
    default:
      return state
  }
}

export default auth
