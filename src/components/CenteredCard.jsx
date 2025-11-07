export default function CenteredCard({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 to-indigo-50 p-6">
      <div className="w-full max-w-md bg-white/80 backdrop-blur rounded-2xl shadow-xl border border-slate-200 p-8">
        {children}
      </div>
    </div>
  )
}
