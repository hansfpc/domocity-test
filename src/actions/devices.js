import * as types from './types'

export const getDeviceStatus = () => ({ type: types.GET_DEVICE_STATUS_INIT })
export const turnLightsOn = () => ({ type: types.TURN_LIGHTS_ON_INIT })
export const turnLightsOff = () => ({ type: types.TURN_LIGHTS_OFF_INIT })
