import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Volunteers from './pages/Volunteers'
import Funding from './pages/Funding'

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-8" style={{ color: '#1A1A3A' }}>
          African Energy Research
        </h1>
        <p className="text-xl mb-12 max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
          Building the foundation of African energy research through collaborative efforts
        </p>
        <div className="flex gap-4 justify-center">
          <Link 
            to="/volunteers"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-semibold py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
            style={{ background: 'linear-gradient(90deg, #00C6FF 0%, #0072FF 100%)' }}
          >
            Volunteer
          </Link>
          <Link 
            to="/funding"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-semibold py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
            style={{ background: 'linear-gradient(135deg, #6A11CB 0%, #2575FC 100%)' }}
          >
            Research Funding
          </Link>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/volunteers" element={<Volunteers />} />
        <Route path="/funding" element={<Funding />} />
      </Routes>
    </Router>
  )
}

export default App
