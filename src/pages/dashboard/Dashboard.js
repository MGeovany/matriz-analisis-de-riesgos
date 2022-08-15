import React from 'react'
import { Container } from '@mantine/core'
import { Header } from '../../components/Header'
import './Dashboard.css'

export const Dashboard = () => {
  return (
    <div className='side-container'>
      <Header title='Bienvenido, M Geovany' />
      <Container>
        <p className='content'>Dashboard contenido</p>
      </Container>
    </div>
  )
}
