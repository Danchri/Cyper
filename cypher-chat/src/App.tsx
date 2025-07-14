import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import DemoLogin from './components/DemoLogin'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/demo" element={<DemoLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
