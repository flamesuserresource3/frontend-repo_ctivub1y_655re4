import { useState } from 'react'
import { Link } from 'react-router-dom'
import CenteredCard from './CenteredCard'
import Toast from './Toast'
import { RegisterForm } from './AuthForms'

export default function RegisterPage() {
  const [serverError, setServerError] = useState('')
  const [toastMsg, setToastMsg] = useState('')

  const handleSuccess = () => {
    setToastMsg('Registration successful. You can now sign in.')
  }

  return (
    <>
      <CenteredCard>
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Create your account</h1>
            <p className="text-slate-600">Sign up to get started</p>
          </div>

          {serverError && <div className="rounded-md bg-red-50 text-red-700 p-3 border border-red-200">{serverError}</div>}

          <RegisterForm onSuccess={handleSuccess} setServerError={setServerError} />

          <p className="text-sm text-slate-600">
            Already have an account? <Link to="/login" className="text-indigo-600 font-medium">Sign in</Link>
          </p>
        </div>
      </CenteredCard>
      <Toast message={toastMsg} onClose={() => setToastMsg('')} />
    </>
  )
}
