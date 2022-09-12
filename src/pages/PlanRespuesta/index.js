import React from 'react'
import { List } from './Table'
import { Header } from '../../components/Header'
import { Button } from '@mantine/core'
import { PlanRespuesta } from '../../API'
import Form from './Form'
import { useParams } from 'react-router-dom'

const PlanRespuestas = () => {
  const [PlanRespuestaLista, setPlanRespuestaLista] = React.useState([])
  const { PlanSeguridad, Incidente } = useParams()
  React.useEffect(() => {
    PlanRespuesta()
      .get(PlanSeguridad, Incidente)
      .then((res) => {
        setPlanRespuestaLista(res)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])
  function onAdd(planRespuesta) {
    PlanRespuesta()
      .save(planRespuesta)
      .then((res) => {
        setPlanRespuestaLista([...PlanRespuestaLista, planRespuesta])
      })
      .catch((err) => {
        console.error(err)
      })
  }
  function onEdit(planRespuesta) {
    PlanRespuesta()
      .edit(planRespuesta)
      .then((res) => {
        setPlanRespuestaLista([
          ...PlanRespuestaLista.filter((i) => i.Id !== planRespuesta.Id),
          PlanRespuesta
        ])
      })
      .catch((err) => {
        console.error(err)
      })
  }
  function onDelete(PlanSeguridad, Incidente, Id) {
    PlanRespuesta()
      .delete(PlanSeguridad, Incidente, Id)
      .then((res) => {
        setPlanRespuestaLista([
          ...PlanRespuestaLista.filter((i) => i.Id !== Id)
        ])
      })
      .catch((err) => {
        console.error(err)
      })
  }
  return (
    <>
      <div className='side-container'>
        <Header title='Plan de Respuestas' />
        <div className='containerTable'>
          <List
            onEdit={onEdit}
            onDelete={onDelete}
            elements={PlanRespuestaLista}
          />

          <div style={{ padding: '2rem' }}>
            <ul className='nav_links'>
              <li>
                <Form
                  trigger={<Button>PlanRespuestas</Button>}
                  handler={onAdd}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
export default PlanRespuestas
