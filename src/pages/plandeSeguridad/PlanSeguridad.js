import React from 'react'
import { TablePlanS } from './TablePlanS'
import { Header } from '../../components/Header'
import { Button } from '@mantine/core'
import { Plan, PoliticasAsociadasPlan } from '../../API'
import FormPS from './FormPS'

export const PlanSeguridad = () => {
  const [PlanLista, setListaPlan] = React.useState([])
  React.useEffect(() => {
    Plan()
      .get()
      .then((res) => {
        setListaPlan(res)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])
  function onAdd(item, politicas) {
    Plan()
      .save(item)
      .then((res) => {
        PoliticasAsociadasPlan()
          .save(res.Id, politicas)
          .then((res) => {
            setListaPlan([...PlanLista, item])
          })
      })
      .catch((err) => {
        console.error(err)
      })
  }
  function onEdit(item, politicas) {
    Plan()
      .edit(item)
      .then((res) => {
        PoliticasAsociadasPlan()
          .save(item.Id, politicas)
          .then((res2) => {
            setListaPlan([...PlanLista.filter((i) => i.Id !== item.Id), item])
          })
      })
      .catch((err) => {
        console.error(err)
      })
  }
  function onDelete(Id) {
    Plan()
      .delete(Id)
      .then((res) => {
        setListaPlan([...PlanLista.filter((i) => i.Id !== Id)])
      })
      .catch((err) => {
        console.error(err)
      })
  }
  return (
    <>
      <div className='side-container'>
        <Header title='Plan de Seguridad' />
        <div className='containerTable'>
          <TablePlanS
            onEdit={onEdit}
            onDelete={onDelete}
            elements={PlanLista}
          />
          <div style={{ padding: '2rem' }}>
            <ul className='nav_links'>
              <li>
                <FormPS
                  trigger={<Button>Crear Plan de Seguridad</Button>}
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
