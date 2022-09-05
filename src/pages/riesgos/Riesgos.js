/* eslint-disable react/prop-types */
import React from 'react'
import { Button } from '@mantine/core'
import Form from './Form'
import { Riesgo } from '../../API'
import { TablaRiesgos } from './TablaRiesgo'
import { Header } from '../../components/Header'
import './RiesgosStyles.css'

export const Riesgos = ({ riesgos }) => {
  const [RiesgosList, setRiesgosList] = React.useState(riesgos)
  function onAdd(riesgo) {
    Riesgo()
      .save(riesgo)
      .then((res) => {
        setRiesgosList([...RiesgosList, riesgo])
      })
      .catch((error) => {
        console.error(error.response)
      })
  }

  function onEdit(riesgo) {
    Riesgo()
      .edit(riesgo)
      .then((res) => {
        setRiesgosList([
          ...RiesgosList.filter((r) => r.Id !== riesgo.Id),
          riesgo
        ])
      })
      .catch((error) => {
        console.error(error.response)
      })
  }

  function onDelete(riesgoId) {
    Riesgo()
      .delete(riesgoId)
      .then((res) => {
        setRiesgosList([...RiesgosList.filter((r) => r.Id !== riesgoId)])
      })
      .catch((error) => {
        console.error(error.response)
      })
  }

  return (
    <>
      <div className='side-container'>
        <Header title='Riesgos' />
        <div className='containerTable'>
          <TablaRiesgos
            onEdit={onEdit}
            onDelete={onDelete}
            elements={RiesgosList}
          />

          <div style={{ padding: '2rem' }}>
            <ul className='nav_links'>
              <li>
                <Form trigger={<Button>Nuevo</Button>} handler={onAdd} />
              </li>
              <li>
                <Button variant='light'>Descargar PDF</Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
