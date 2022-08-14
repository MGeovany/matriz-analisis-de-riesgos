import React from 'react'
import { Container, Button } from '@mantine/core'
import './RiesgosStyles.css'
import Form from './form'
import { Riesgo } from '../../API'

export const Riesgos = () => {
  function onAdd(riesgo) {
    console.log(riesgo)
    Riesgo().save(riesgo).then(res => {
      console.log('listo!')
    }).catch(error => { console.error(error.response) })
  }
  return (
    <>
      <div>
        <Container>
          <p>Riesgos</p>
          <p className='content'>Riesgos contenido</p>
          <Form trigger={<Button>Nuevo </Button>} handler={onAdd}/>
        </Container>
      </div>
    </>
  )
}
