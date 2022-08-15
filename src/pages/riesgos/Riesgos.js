import React from 'react'
import { TablaRiesgos } from './TablaRiesgo'
import { Button, Container } from '@mantine/core'
import './RiesgosStyles.css'
import { Header } from '../../components/Header'

export const Riesgos = () => {
  return (
    <>
      <div className='side-container'>
        <Header title='Riesgos' />
        <Container>
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
        </Container>
      </div>
    </>
  )
}
