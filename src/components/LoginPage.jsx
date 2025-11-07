import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import CenteredCard from './CenteredCard'
import Toast from './Toast'
import { LoginForm } from './AuthForms'
import { useAuth } from './auth'

export default function LoginPage() {
  const [serverError, setServerError] = useState('')
  const [toastMsg, setToastMsg] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSuccess = (data) => {
    login(data.token, data.role)
    const dest = data.role === 'student' ? '/student' : data.role === 'tpo' ? '/tpo' : '/hod'
    setToastMsg('Logged in successfully')
    navigate(dest, { replace: true })
  }

  return (
    <>
      <CenteredCard>
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Welcome back</h1>
            <p className="text-slate-600">Sign in to your account</p>
          </div>

          {serverError && <div className="rounded-md bg-red-50 text-red-700 p-3 border border-red-200">{serverError}</div>}

          <LoginForm onSuccess={handleSuccess} setServerError={setServerError} />

          <p className="text-sm text-slate-600">
            Don't have an account? <Link to="/register" className="text-indigo-600 font-medium">Create one</Link>
          </p>
        </div>
      </CenteredCard>
      <Toast message={toastMsg} onClose={() => setToastMsg('')} />
    </>
  )
}
