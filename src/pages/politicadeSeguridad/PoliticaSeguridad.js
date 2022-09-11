import React from 'react'
import { TablePSecurity } from './TablePSecurity'
import { Header } from '../../components/Header'
import { Button } from '@mantine/core'
import { Politicas } from '../../API'
import FormP from './FormP'

export const PoliticaSeguridad = () => {
  const [PoliticaLista, setListaPolitica] = React.useState([])
  React.useEffect(() => {
    Politicas().get().then((res) => {
      setListaPolitica(res)
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  function onAdd(politica) {
    Politicas().save(politica).then((res) => {
      setListaPolitica([...PoliticaLista, politica])
    }).catch((err) => {
      console.log(err)
    })
  }
  function onEdit(politica) {
    Politicas().edit(politica).then((res) => {
      setListaPolitica([...PoliticaLista.filter((i) => i.Id !== politica.Id), politica])
    }).catch((err) => {
      console.log(err)
    })
  }
  function onDelete(Id) {
    Politicas().delete(Id).then((res) => {
      setListaPolitica([...PoliticaLista.filter((i) => i.Id !== Id)])
    }).catch((err) => {
      console.log(err)
    })
  }
  return (
    <>
      <div className='side-container'>
        <Header title='Politica de Seguridad' />
        <div className='containerTable'>
          <TablePSecurity
            onEdit={onEdit}
            onDelete={onDelete}
            elements={PoliticaLista}
          />

          <div style={{ padding: '2rem' }}>
            <ul className='nav_links'>
              <li>
              <FormP trigger={<Button>Crear Politica</Button>} handler={onAdd} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
