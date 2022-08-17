import React, { useState } from 'react'
import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Dashboard } from './pages/dashboard/Dashboard'
import { Sidebar } from './components/Sidebar'
import { Riesgos } from './pages/riesgos/Riesgos'

function App() {
  const [indicators, setIndicators] = useState({
    riesgos: 12,
    procesos: 34,
    planes: 50,
    eventos: 650
  })

  return (
    <div className='App'>
      <Router>
        <Sidebar />
        <Routes>
          <Route
            path='/'
            element={
              <Dashboard
                riesgos={indicators.riesgos}
                procesos={indicators.procesos}
                planes={indicators.planes}
                eventos={indicators.eventos}
              />
            }
          />
          <Route
            path='/riesgos'
            element={
              <Riesgos indicators={indicators} setIndicators={setIndicators} />
            }
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
