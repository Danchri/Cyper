import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import DemoLogin from './components/DemoLogin'
import Dashboard from './components/Dashboard'
import ContactSales from './components/ContactSales'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/demo" element={<DemoLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact-sales" element={<ContactSales />} />
      </Routes>
    </div>
  )
}

export default App
