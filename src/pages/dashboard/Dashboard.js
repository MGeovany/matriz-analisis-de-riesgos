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
export const Dashboard = ({ riesgos, procesos, planes, eventos }) => {
  return (
    <div className='side-container'>
      <Header title='Bienvenido, Jhon Doe' />
      <Indicators
        riesgos={riesgos}
        procesos={procesos}
        planes={planes}
        eventos={eventos}
      />
      <div className='dashboard-container'></div>
    </div>
  )
}

const Indicators = ({ riesgos, procesos, planes, eventos }) => {
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
          {procesos} <br /> <span className='hero-text-small'>Procesos</span>
        </span>
      </div>
      <div className='hero-box'>
        <span>
          <IconTimeline size={30} />
        </span>
        <span className='hero-text'>
          {planes} <br /> <span className='hero-text-small'>Planes</span>
        </span>
      </div>
      <div className='hero-box'>
        <span>
          <IconCalendarEvent size={30} />
        </span>
        <span className='hero-text'>
          {eventos} <br /> <span className='hero-text-small'>Eventos</span>
        </span>
      </div>
    </div>
  )
}
