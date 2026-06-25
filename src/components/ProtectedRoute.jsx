import { Navigate } from 'react-router-dom'
import { readStoredToken } from '../lib/auth'

export default function ProtectedRoute({ children }) {
  const token = readStoredToken()

  if (!token) {
    return <Navigate to="/login" replace />
  }

  return children
}
