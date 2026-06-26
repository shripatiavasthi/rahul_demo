const DEFAULT_LOCAL_API_BASE_URL = 'http://localhost:4000/api'
const DEFAULT_DEPLOYED_API_BASE_URL = 'https://rahul-demo-backend.vercel.app/api'

const configuredApiBaseUrl = import.meta.env.VITE_API_BASE_URL?.trim()

const API_BASE_URL = (
  configuredApiBaseUrl ||
  (import.meta.env.DEV ? DEFAULT_LOCAL_API_BASE_URL : DEFAULT_DEPLOYED_API_BASE_URL)
).replace(/\/$/, '')

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  })

  const data = await response.json().catch(() => ({}))

  if (!response.ok) {
    throw new Error(data.message || 'Request failed.')
  }

  if (data && typeof data === 'object' && data.data && typeof data.data === 'object') {
    return {
      message: data.message,
      ...data.data,
    }
  }

  return data
}

export function registerUser(payload) {
  return request('/auth/register', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export function loginUser(payload) {
  return request('/auth/login', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export function fetchCurrentUser(token) {
  return request('/auth/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((data) => data.user ? data : { user: data })
}
