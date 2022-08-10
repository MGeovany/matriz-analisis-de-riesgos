import React from 'react'
import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { Sidebar } from './components/Sidebar'
import { Riesgos } from './pages/riesgos/Riesgos'

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/riesgos' element={<Riesgos />} />
      </Routes>
    </Router>
  )
}

export default App
