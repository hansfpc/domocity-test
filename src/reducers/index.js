import { combineReducers } from 'redux'
import auth from './auth'
import devices from './devices'

const reducers = combineReducers({
  auth,
  devices,
})

export default reducers
