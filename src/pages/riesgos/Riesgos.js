import React from 'react'
import { TablaRiesgos } from './TablaRiesgo'
import { Button } from '@mantine/core'
import './RiesgosStyles.css'

export const Riesgos = () => {
  return (
    <>
      <div className='content'>
        <div className='containerPrincipal'>
          <div className='riesgos'>Riesgos</div>
          <hr className='hrContainer'></hr>
          <div className='containerTabla'>
            <TablaRiesgos/>
            <nav>
              <ul className='nav_links'>
              <li><Button >Crear Riesgo</Button></li>
              <li><Button variant='light'>Descargar PDF</Button></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
