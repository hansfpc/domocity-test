import axios from 'axios'
import { message } from 'antd'
import { getToken } from '../utils'

const BASE_URL = 'https://api.enel.wehaus.com/api/v2'
const JWT_TOKEN = getToken()
const API = {}

API.getAuthenticated = user =>
  axios
    .post(`${BASE_URL}/users/sign_in`, { user })
    .then(res => {
      localStorage.setItem('JWT_TOKEN', res.headers.authorization)
      message.success('Yay! Logged in successfully')
      return {
        id: res.data.data.id,
        email: res.data.data.attributes.email,
        role: res.data.data.attributes.role,
        updatedAt: res.data.data.attributes['updated-at'],
      }
    })
    .catch(e => message.error(e.message))

API.getDeviceStatus = () =>
  axios
    .get(`${BASE_URL}/users/hubs/1087/devices/1473`, {
      headers: { Authorization: JWT_TOKEN },
    })
    .then(res => res.data.data.attributes.state.state)
    .catch(error => console.log(error))

API.turnLightsOn = () =>
  axios
    .put(
      `${BASE_URL}/users/hubs/1087/devices/1473/on`,
      {},
      {
        headers: { Authorization: JWT_TOKEN, 'Content-Type': 'application/json' },
      }
    )
    .then(res => res.data.data)
    .catch(error => console.log(error))

API.turnLightsOff = () =>
  axios
    .put(
      `${BASE_URL}/users/hubs/1087/devices/1473/off`,
      {},
      {
        headers: { Authorization: JWT_TOKEN, 'Content-Type': 'application/json' },
      }
    )
    .then(res => res.data.data)
    .catch(error => console.log(error))

export { API }
