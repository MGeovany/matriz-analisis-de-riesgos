/* eslint-disable react/prop-types */
import React from 'react'
import { TablaRiesgos } from './TablaRiesgo'
import { Button } from '@mantine/core'
import './RiesgosStyles.css'
import { Header } from '../../components/Header'

export const Riesgos = ({ indicators, setIndicators }) => {
  return (
    <>
      <div className='side-container'>
        <Header title='Riesgos' />
        <div className='containerTabla'>
          <TablaRiesgos />
          <nav>
            <ul className='nav_links'>
              <li>
                <Button>Crear Riesgo</Button>
              </li>
              <li>
                <Button variant='light'>Descargar PDF</Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}
