import { useEffect, useState } from 'react'

export default function Toast({ message, onClose, type = 'success', duration = 3000 }) {
  const [open, setOpen] = useState(Boolean(message))
  useEffect(() => {
    setOpen(Boolean(message))
    if (message) {
      const t = setTimeout(() => {
        setOpen(false)
        onClose?.()
      }, duration)
      return () => clearTimeout(t)
    }
  }, [message, duration, onClose])

  if (!open || !message) return null
  return (
    <div className="fixed inset-x-0 top-4 flex justify-center z-50">
      <div className={`px-4 py-2 rounded-lg shadow-lg text-white ${type === 'success' ? 'bg-emerald-600' : 'bg-red-600'}`}>
        {message}
      </div>
    </div>
  )
}
