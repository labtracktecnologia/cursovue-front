import axios from 'axios'
import { getToken } from './auth'

export function getClient(auxHeaders = {}) {
  let headers = getToken() ? { 'Authorization': `Bearer ${getToken()}` } : {}
  headers = { ...headers, ...auxHeaders }

  return axios.create({
    baseURL: 'https://cursovue-api.herokuapp.com/',
    headers
  })
}
