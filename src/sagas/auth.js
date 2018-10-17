import { put } from 'redux-saga/effects'
import * as types from '../actions/types'
import { API } from '../services'

export function* getAuthenticated(action) {
  try {
    const result = yield API.getAuthenticated(action.payload)
    yield put({ type: types.SIGN_IN_SUCCESS, payload: result })
  } catch (error) {
    yield put({ type: types.SIGN_IN_FAILURE, payload: error.message })
  }
}
