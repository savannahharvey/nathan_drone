import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage'
import ContactPage from './ContactPage'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App