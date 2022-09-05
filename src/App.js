import React, { useState, useEffect } from 'react'
import './App.css'
import { Riesgo } from './API'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Dashboard } from './pages/dashboard/Dashboard'
import { Sidebar } from './components/Sidebar'
import { Riesgos } from './pages/riesgos/Riesgos'

function App() {
  const [riesgos, setRiesgos] = useState([''])
  useEffect(() => {
    Riesgo()
      .get()
      .then((res) => {
        setRiesgos(res)
      })
      .catch((error) => console.error(error))
  }, [])

  const [indicators, setIndicators] = useState({
    riesgos: 0,
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
                riesgos={riesgos}
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
