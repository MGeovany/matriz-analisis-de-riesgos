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

  return (
    <div className='App'>
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Dashboard riesgos={riesgos} />} />
          <Route path='/riesgos' element={<Riesgos riesgos={riesgos} />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
