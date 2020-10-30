
const usuarios = [
  { username: 'admin', password: 'admin', token: 'adjsfhahfahfdajjfa' },
  { username: 'user', password: 'user', token: 'dswrtersdfggtewrs' }
]

export function login (username, password) {
  const user = usuarios.find(item => item.username === username)
  if (user && user.password === password) {
    localStorage.setItem('token', user.token)
    return true
  }
  return false
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
