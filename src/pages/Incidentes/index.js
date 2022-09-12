import React from 'react'
import { List } from './Table'
import { Header } from '../../components/Header'
import { Button } from '@mantine/core'
import { Incidente } from '../../API'
import Form from './Form'
import { useParams } from 'react-router-dom'

const Incidentes = () => {
  const [IncidenteLista, setIncidenteLista] = React.useState([])
  const { PlanSeguridad } = useParams()
  React.useEffect(() => {
    Incidente().get(PlanSeguridad).then((res) => {
      setIncidenteLista(res)
    }).catch((err) => {
      console.error(err)
    })
  }, [])
  function onAdd(incidente) {
    Incidente().save(incidente).then((res) => {
      setIncidenteLista([...IncidenteLista, incidente])
    }).catch((err) => {
      console.error(err)
    })
  }
  function onEdit(incidente) {
    Incidente().edit(incidente).then((res) => {
      setIncidenteLista([...IncidenteLista.filter((i) => i.Id !== incidente.Id), incidente])
    }).catch((err) => {
      console.error(err)
    })
  }
  function onDelete(PlanSeguridad, Id) {
    Incidente().delete(PlanSeguridad, Id).then((res) => {
      setIncidenteLista([...IncidenteLista.filter((i) => i.Id !== Id)])
    }).catch((err) => {
      console.error(err)
    })
  }
  return (
    <>
      <div className='side-container'>
        <Header title='Incidentes' />
        <div className='containerTable'>
          <List
            onEdit={onEdit}
            onDelete={onDelete}
            elements={IncidenteLista}
          />

          <div style={{ padding: '2rem' }}>
            <ul className='nav_links'>
              <li>
              <Form trigger={<Button>Incidentes</Button>} handler={onAdd} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
export default Incidentes
