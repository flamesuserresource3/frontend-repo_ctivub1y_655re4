import { useAuth } from './auth'

export function StudentDashboard() {
  const { logout } = useAuth()
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Student Dashboard</h1>
      <p className="text-slate-600">Welcome student!</p>
      <button className="mt-4 bg-slate-900 text-white rounded px-3 py-2" onClick={logout}>Logout</button>
    </div>
  )
}

export function TPODashboard() {
  const { logout } = useAuth()
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">TPO Dashboard</h1>
      <p className="text-slate-600">Welcome TPO!</p>
      <button className="mt-4 bg-slate-900 text-white rounded px-3 py-2" onClick={logout}>Logout</button>
    </div>
  )
}

export function HODDashboard() {
  const { logout } = useAuth()
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">HOD Dashboard</h1>
      <p className="text-slate-600">Welcome HOD!</p>
      <button className="mt-4 bg-slate-900 text-white rounded px-3 py-2" onClick={logout}>Logout</button>
    </div>
  )
}
