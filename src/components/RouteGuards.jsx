import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from './auth'

export function PublicOnly() {
  const { isAuthenticated, role } = useAuth()
  if (isAuthenticated) {
    const dest = role === 'student' ? '/student' : role === 'tpo' ? '/tpo' : '/hod'
    return <Navigate to={dest} replace />
  }
  return <Outlet />
}

export function PrivateRoute({ allow }) {
  const { isAuthenticated, role } = useAuth()
  if (!isAuthenticated) return <Navigate to="/login" replace />
  if (allow && allow !== role) return <Navigate to="/login" replace />
  return <Outlet />
}
