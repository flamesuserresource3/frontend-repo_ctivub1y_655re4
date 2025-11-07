import { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL || ''

export function LoginForm({ onSuccess, setServerError }) {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()

  const onSubmit = async (data) => {
    try {
      setServerError('')
      const res = await axios.post(`${API_BASE_URL}/api/login`, data)
      onSuccess?.(res.data)
    } catch (err) {
      const msg = err?.response?.data?.detail || 'Login failed'
      setServerError(msg)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-1">
        <label className="block text-sm font-medium text-slate-700" htmlFor="email">Email</label>
        <input id="email" type="email" className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.email ? 'border-red-500' : 'border-slate-300'}`} placeholder="you@example.com" aria-invalid={!!errors.email} {...register('email', { required: 'Email is required' })} />
        {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-medium text-slate-700" htmlFor="password">Password</label>
        <input id="password" type="password" className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.password ? 'border-red-500' : 'border-slate-300'}`} placeholder="••••••••" aria-invalid={!!errors.password} {...register('password', { required: 'Password is required' })} />
        {errors.password && <p className="text-sm text-red-600">{errors.password.message}</p>}
      </div>

      <button disabled={isSubmitting} className="w-full rounded-lg bg-indigo-600 text-white py-2 font-medium hover:bg-indigo-700 disabled:opacity-50">{isSubmitting ? 'Signing in…' : 'Sign in'}</button>
    </form>
  )
}

export function RegisterForm({ onSuccess, setServerError }) {
  const { register, handleSubmit, formState: { errors, isSubmitting }, watch } = useForm()
  const [role, setRole] = useState('student')

  const onSubmit = async (data) => {
    try {
      setServerError('')
      const res = await axios.post(`${API_BASE_URL}/api/register`, data)
      onSuccess?.(res.data)
    } catch (err) {
      const msg = err?.response?.data?.detail || 'Registration failed'
      setServerError(msg)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-1">
        <label className="block text-sm font-medium text-slate-700" htmlFor="name">Name</label>
        <input id="name" type="text" className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.name ? 'border-red-500' : 'border-slate-300'}`} placeholder="Jane Doe" {...register('name', { required: 'Name is required' })} />
        {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-medium text-slate-700" htmlFor="email">Email</label>
        <input id="email" type="email" className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.email ? 'border-red-500' : 'border-slate-300'}`} placeholder="you@example.com" {...register('email', { required: 'Email is required' })} />
        {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-medium text-slate-700" htmlFor="password">Password</label>
        <input id="password" type="password" className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.password ? 'border-red-500' : 'border-slate-300'}`} placeholder="••••••••" {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Min 6 characters' } })} />
        {errors.password && <p className="text-sm text-red-600">{errors.password.message}</p>}
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-medium text-slate-700" htmlFor="role">Role</label>
        <select id="role" className="w-full rounded-lg border px-3 py-2" {...register('role', { required: true })} onChange={(e) => setRole(e.target.value)}>
          <option value="student">Student</option>
          <option value="tpo">TPO</option>
          <option value="hod">HOD</option>
        </select>
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-medium text-slate-700" htmlFor="department">Department (optional)</label>
        <input id="department" type="text" className="w-full rounded-lg border px-3 py-2" placeholder="Computer Science" {...register('department')} />
      </div>

      <button disabled={isSubmitting} className="w-full rounded-lg bg-indigo-600 text-white py-2 font-medium hover:bg-indigo-700 disabled:opacity-50">{isSubmitting ? 'Creating account…' : 'Create account'}</button>
    </form>
  )
}
