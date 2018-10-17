import * as types from '../actions/types'
const INITIAL_STATE = { loading: false, status: false, error: null }

const devices = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    /*********************** GET DEVICE STATUS **********************/
    case types.GET_DEVICE_STATUS_INIT:
      return { ...state, loading: true }
    case types.GET_DEVICE_STATUS_SUCCESS:
      return { ...state, loading: false, status: action.payload === 'on' }
    case types.GET_DEVICE_STATUS_FAILURE:
      return { ...state, loading: false, error: action.payload }
    /*********************** TURN LIGHTS ON ************************/
    case types.TURN_LIGHTS_ON_INIT:
      return { ...state, loading: true }
    case types.TURN_LIGHTS_ON_SUCCESS:
      return { ...state, loading: false, status: true }
    case types.TURN_LIGHTS_ON_FAILURE:
      return { ...state, loading: false, error: action.payload }
    /*********************** TURN LIGHTS OFF ***********************/
    case types.TURN_LIGHTS_OFF_INIT:
      return { ...state, loading: true }
    case types.TURN_LIGHTS_OFF_SUCCESS:
      return { ...state, loading: false, status: false }
    case types.TURN_LIGHTS_OFF_FAILURE:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export default devices
