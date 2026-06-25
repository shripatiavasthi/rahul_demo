const TOKEN_KEY = 'sandbox_interview_token'
const USER_KEY = 'sandbox_interview_user'

export function getStoredToken() {
  return localStorage.getItem(TOKEN_KEY)
}

export function storeAuthSession({ token, user, rememberMe = false }) {
  const storage = rememberMe ? localStorage : sessionStorage
  const secondaryStorage = rememberMe ? sessionStorage : localStorage

  secondaryStorage.removeItem(TOKEN_KEY)
  secondaryStorage.removeItem(USER_KEY)

  storage.setItem(TOKEN_KEY, token)
  storage.setItem(USER_KEY, JSON.stringify(user))
}

export function readStoredUser() {
  const raw =
    localStorage.getItem(USER_KEY) || sessionStorage.getItem(USER_KEY)

  return raw ? JSON.parse(raw) : null
}

export function readStoredToken() {
  return localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem(TOKEN_KEY)
}

export function clearAuthSession() {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(USER_KEY)
  sessionStorage.removeItem(TOKEN_KEY)
  sessionStorage.removeItem(USER_KEY)
}
