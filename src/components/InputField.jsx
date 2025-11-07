import { useState } from 'react'

export default function InputField({ label, type = 'text', name, register, error, required, placeholder }) {
  const [show, setShow] = useState(false)
  const actualType = type === 'password' && show ? 'text' : type
  return (
    <div className="space-y-1">
      <label htmlFor={name} className="block text-sm font-medium text-slate-700">{label}</label>
      <div className="relative">
        <input
          id={name}
          type={actualType}
          className={`w-full rounded-lg border px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${error ? 'border-red-500' : 'border-slate-300'}`}
          placeholder={placeholder}
          {...register(name)}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-indigo-600"
            aria-label={show ? 'Hide password' : 'Show password'}
          >
            {show ? 'Hide' : 'Show'}
          </button>
        )}
      </div>
      {error && (
        <p id={`${name}-error`} className="text-sm text-red-600">{error.message}</p>
      )}
    </div>
  )
}
