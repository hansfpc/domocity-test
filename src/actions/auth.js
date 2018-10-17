import * as types from './types'

export const getAuthenticated = payload => ({ type: types.SIGN_IN_INIT, payload })
