import React, { useState, useEffect } from 'react'
import './App.css'
import { Riesgo } from './API'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Dashboard } from './pages/dashboard/Dashboard'
import { Sidebar } from './components/Sidebar'
import { Riesgos } from './pages/riesgos/Riesgos'
import { PoliticaSeguridad } from './pages/politicadeSeguridad/PoliticaSeguridad'
import { PlanAccion } from './pages/plandeAccion/PlanAccion'
import { PlanSeguridad } from './pages/plandeSeguridad/PlanSeguridad'
import Resumen from './pages/Resumen'
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
          <Route path='/politicas' element={<PoliticaSeguridad />} />
          <Route path='/planseguridad' element={<PlanSeguridad />} />
          <Route path='/planaccion' element={<PlanAccion />} />
          <Route path='/resumen-plan-seguridad/:PlanSeguridadId' element={<Resumen />} />
          <Route path='/planseguridad/:PlanSeguridad/planaccion' element={<PlanAccion />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
