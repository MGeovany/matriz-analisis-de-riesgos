/* eslint-disable react/prop-types */
import React from 'react'
import './PlanStyle.css'
import { Table, Tooltip } from '@mantine/core'
import {
  IconEye,
  IconTrash,
  IconTools,
  IconTicket,
  IconFileText
} from '@tabler/icons'
import Delete from './Delete'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import FormPS from './FormPS'

export function TablePlanS({ elements = [], onEdit, onDelete }) {
  const rows = elements.map((element, index) => (
    <tr key={index}>
      <td>{element.Identificador}</td>
      <td>{dayjs(element.FechaInicio).format('DD/MM/YYYY')}</td>
      <td>{dayjs(element.FechaFin).format('DD/MM/YYYY')}</td>
      <td>{element.AutorizadoPor}</td>
      <td>
        <FormPS
          trigger={
              <IconEye cursor='pointer' color='#228be6' />
          }
          handler={onEdit}
          plan={element}
        />
      </td>
      <td>
          <Delete
            trigger={<IconTrash cursor='pointer' color='#228be6' />}
            handler={onDelete}
            plan={element.Id}
          />
      </td>
      <td>
        <Tooltip label='Plan de acción'>
          <Link to={`./${element.Id}/planaccion`}>
            <IconTools cursor='pointer' color='#228be6' />
          </Link>
        </Tooltip>
      </td>
      <td>
        <Tooltip label='Incidentes'>
          <Link to={`./${element.Id}/incidentes`}>
            <IconTicket cursor='pointer' color='#228be6' />
          </Link>
        </Tooltip>
      </td>
      <td>
        <Tooltip label='Resumen'>
          <Link to={`/resumen-plan-seguridad/${element.Id}`}>
            <IconFileText cursor='pointer' color='#228be6' />
          </Link>
        </Tooltip>
      </td>
    </tr>
  ))
  return (
    <div
      style={{
        padding: '2rem',
        overflowY: 'scroll',
        maxHeight: '550px',
        borderBottom: '1px solid #e7f5ff'
      }}
    >
      <Table highlightOnHover>
        <thead>
          <tr>
            <th>Identificador</th>
            <th>Fecha Inicio</th>
            <th>Fecha Fin</th>
            <th>Autorizado</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  )
}
