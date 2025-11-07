import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null)
  const [role, setRole] = useState(null)

  useEffect(() => {
    const saved = localStorage.getItem('auth')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        setToken(parsed.token || null)
        setRole(parsed.role || null)
      } catch {}
    }
  }, [])

  useEffect(() => {
    if (token && role) {
      localStorage.setItem('auth', JSON.stringify({ token, role }))
    } else {
      localStorage.removeItem('auth')
    }
  }, [token, role])

  const login = (newToken, newRole) => {
    setToken(newToken)
    setRole(newRole)
  }

  const logout = () => {
    setToken(null)
    setRole(null)
  }

  const value = useMemo(() => ({ token, role, login, logout, isAuthenticated: Boolean(token) }), [token, role])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
