import * as types from '../actions/types'
import { put } from 'redux-saga/effects'
import { API } from '../services'

export function* getDeviceStatus() {
  try {
    const result = yield API.getDeviceStatus()
    yield put({ type: types.GET_DEVICE_STATUS_SUCCESS, payload: result })
  } catch (error) {
    yield put({ type: types.GET_DEVICE_STATUS_FAILURE, payload: error })
  }
}

export function* turnLightsOn() {
  try {
    const result = yield API.turnLightsOn()
    yield put({ type: types.TURN_LIGHTS_ON_SUCCESS, payload: result })
  } catch (error) {
    yield put({ type: types.TURN_LIGHTS_ON_FAILURE, payload: error })
  }
}

export function* turnLightsOff() {
  try {
    const result = yield API.turnLightsOff()
    yield put({ type: types.TURN_LIGHTS_OFF_SUCCESS, payload: result })
  } catch (error) {
    yield put({ type: types.TURN_LIGHTS_OFF_FAILURE, payload: error })
  }
}
