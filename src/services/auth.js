import { getClient } from './http'

export async function login (email, password) {
  const client = getClient()
  const { data: response } = await client.post('/login', {
    email,
    password
  })
  if (response.status === 'success') {
    localStorage.setItem('token', response.data.token)
    return true
  }
  throw new Error({ response })
}

export function getToken() {
  return localStorage.getItem('token')
}

export function logout (callback) {
  localStorage.removeItem('token')
  if (callback) {
    callback ()
  }
}

export function isLogged () {
  return !!localStorage.getItem('token')
}
