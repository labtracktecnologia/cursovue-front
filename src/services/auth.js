import { getClient } from './http'

export async function login (email, password) {
  const client = getClient()
  const { data } = await client.post('/login', {
    email,
    password
  })
  if (data.status === 'success') {
    localStorage.setItem('token', data.data.token)
  }
}

export function getToken() {
  return localStorage.getItem('token')
}

export async function saveProfile (profile) {
  const { data } = await getClient().put('/@me', profile)
  return data.data
}

export async function removeImage () {
  await getClient().delete('/@me/image')
}

export async function registerUser (user) {
  const { data } = await getClient().post('/register', user)
  return data
}

export async function updatePassword (passwords) {
  const { data } = await getClient().put('/@me/password', passwords)
  return data.data
}

export async function getProfile() {
  const { data } = await getClient().get('/@me')
  return data.data
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
