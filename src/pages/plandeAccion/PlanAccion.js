import React from 'react'
import { TablePAccion } from './TablePAccion'
import { Header } from '../../components/Header'
import { Button } from '@mantine/core'
import { Accion } from '../../API'
import FormPA from './FormPA'
import { useParams } from 'react-router-dom'

export const PlanAccion = () => {
  const [AccionLista, setListaAccion] = React.useState([])
  const { PlanSeguridad } = useParams()
  React.useEffect(() => {
    Accion().get(PlanSeguridad).then((res) => {
      setListaAccion(res)
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  function onAdd(accion) {
    Accion().save(accion).then((res) => {
      setListaAccion([...AccionLista, accion])
    }).catch((err) => {
      console.log(err)
    })
  }
  function onEdit(accion) {
    Accion().edit(accion).then((res) => {
      setListaAccion([...AccionLista.filter((i) => i.Id !== accion.Id), accion])
    }).catch((err) => {
      console.log(err)
    })
  }
  function onDelete(PlanSeguridad, Id) {
    Accion().delete(PlanSeguridad, Id).then((res) => {
      setListaAccion([...AccionLista.filter((i) => i.Id !== Id)])
    }).catch((err) => {
      console.log(err)
    })
  }
  return (
    <>
      <div className='side-container'>
        <Header title='Plan de Accion' />
        <div className='containerTable'>
          <TablePAccion
            onEdit={onEdit}
            onDelete={onDelete}
            elements={AccionLista}
          />

          <div style={{ padding: '2rem' }}>
            <ul className='nav_links'>
              <li>
              <FormPA trigger={<Button>Crear Plan de Accion</Button>} handler={onAdd} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
