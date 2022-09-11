/* eslint-disable react/prop-types */
import React from 'react'
import { Header } from '../../components/Header'
import './Dashboard.css'
import {
  IconAlertTriangle,
  IconBooks,
  IconTimeline,
  IconCalendarEvent
} from '@tabler/icons'
import { MatrixRisk } from '../../components/MatrixRisk'

export const Dashboard = ({ riesgos }) => {
  return (
    <div className='side-container'>
      <Header title='Bienvenido, Jhon Doe' />
      <Indicators riesgos={riesgos.length} />
      <div className='dashboard-container'>
        <MatrixRisk riesgos={riesgos} />
      </div>
    </div>
  )
}

const Indicators = ({ riesgos }) => {
  return (
    <div className='hero-container'>
      <div className='hero-box'>
        <span>
          <IconAlertTriangle size={30} />
        </span>
        <span className='hero-text'>
          {riesgos} <br /> <span className='hero-text-small'>Riesgos</span>
        </span>
      </div>
      <div className='hero-box'>
        <span>
          <IconBooks size={30} />
        </span>
        <span className='hero-text'>
          pro <br /> <span className='hero-text-small'>Procesos</span>
        </span>
      </div>
      <div className='hero-box'>
        <span>
          <IconTimeline size={30} />
        </span>
        <span className='hero-text'>
          plA <br /> <span className='hero-text-small'>Planes</span>
        </span>
      </div>
      <div className='hero-box'>
        <span>
          <IconCalendarEvent size={30} />
        </span>
        <span className='hero-text'>
          eventos <br /> <span className='hero-text-small'>Eventos</span>
        </span>
      </div>
    </div>
  )
}
