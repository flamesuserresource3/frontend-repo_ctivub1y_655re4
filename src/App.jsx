import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './components/auth'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import { PublicOnly, PrivateRoute } from './components/RouteGuards'
import { StudentDashboard, TPODashboard, HODDashboard } from './components/DashboardPlaceholders'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<PublicOnly />}> 
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route element={<PrivateRoute allow="student" />}>
        <Route path="/student" element={<StudentDashboard />} />
      </Route>

      <Route element={<PrivateRoute allow="tpo" />}>
        <Route path="/tpo" element={<TPODashboard />} />
      </Route>

      <Route element={<PrivateRoute allow="hod" />}>
        <Route path="/hod" element={<HODDashboard />} />
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  )
}
