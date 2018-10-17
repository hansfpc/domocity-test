import { takeLatest, all } from 'redux-saga/effects'
import { getAuthenticated } from './auth'
import { getDeviceStatus, turnLightsOn, turnLightsOff } from './devices'
import * as types from '../actions/types'

export default function*() {
  yield all([
    takeLatest(types.SIGN_IN_INIT, getAuthenticated),
    takeLatest(types.GET_DEVICE_STATUS_INIT, getDeviceStatus),
    takeLatest(types.TURN_LIGHTS_ON_INIT, turnLightsOn),
    takeLatest(types.TURN_LIGHTS_OFF_INIT, turnLightsOff),
  ])
}
