/* eslint-disable react/prop-types */
import React, { useState } from 'react'

import { Button } from '@mantine/core'
import Form from './Form'
import { Riesgo } from '../../API'
import { TablaRiesgos } from './TablaRiesgo'
import { Header } from '../../components/Header'
import './RiesgosStyles.css'

export const Riesgos = () => {
  const [RiesgosList, setRiesgosList] = useState([])
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
    console.log(riesgo)
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

  React.useEffect(() => {
    Riesgo()
      .get()
      .then((res) => {
        setRiesgosList(res)
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <>
      <div className='side-container'>
        <Header title='Riesgos' />
        <Form trigger={<Button>Nuevo</Button>} handler={onAdd} />
        <div className='containerTabla'>
          <TablaRiesgos
            onEdit={onEdit}
            onDelete={onDelete}
            elements={RiesgosList}
          />
        </div>
        <nav>
          <ul className='nav_links'>
            <li>
              <Form trigger={<Button>Nuevo</Button>} handler={onAdd} />
            </li>
            <li>
              <Button variant='light'>Descargar PDF</Button>
            </li>
          </ul>
        </nav>
        =======
        <div className='containerTabla'>
          <div className='containerTabla2'>
            <TablaRiesgos
              onEdit={onEdit}
              onDelete={onDelete}
              elements={RiesgosList}
            />
          </div>
          <div>
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
