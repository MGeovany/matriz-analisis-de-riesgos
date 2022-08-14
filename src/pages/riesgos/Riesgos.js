import React from 'react'
import { Container, Button } from '@mantine/core'
import './RiesgosStyles.css'
import Form from './form'
import { Riesgo } from '../../API'

const riesgoPruebaEdit = {
  Id: 'MAR-003',
  Nombre: 'RIESGO A EDITAR',
  AfectaCosto: true,
  ValorCosto: 1578.40,
  AfectaTiempo: true,
  AfectaAlcance: false,
  AfectaCalidad: false,
  IdPosibilidad: 1,
  IdImpacto: 2
}

export const Riesgos = () => {
  function onAdd(riesgo) {
    Riesgo().save(riesgo).then(res => {
      console.log('Listo!, ingresar el Array de listado')
    }).catch(error => { console.error(error.response) })
  }

  function onEdit(riesgo) {
    Riesgo().edit(riesgo).then(res => {
      console.log('Listo!, ingresar el Array de listado')
    }).catch(error => { console.error(error.response) })
  }

  return (
    <>
      <div>
        <Container>
          <p>Riesgos</p>
          <p className='content'>Riesgos contenido</p>
          <Form trigger={<Button>Nuevo</Button>} handler={onAdd}/>
          <Form trigger={<Button color='green'>Editar</Button>} handler={onEdit} riesgo={riesgoPruebaEdit}/>
        </Container>
      </div>
    </>
  )
}
