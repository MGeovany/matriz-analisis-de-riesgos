/* eslint-disable react/prop-types */
import React from 'react'
import './PlanAccion.css'
import { Table, Tooltip } from '@mantine/core'
import { IconEye, IconTrash, IconAd2 } from '@tabler/icons'
import Delete from './Delete'
import Form from './Form'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'

export function List({ elements = [], onEdit, onDelete }) {
  const rows = elements.map((element, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{dayjs(element.FechaInicio).format('DD/MM/YYYY')}</td>
      <td>{dayjs(element.FechaFin).format('DD/MM/YYYY')}</td>
      <td>{element.ProcesoAfectado}</td>
      <td>{element.Nombre}</td>
      <td>
        <Form
          trigger={<IconEye cursor='pointer' color='#228be6' />}
          handler={onEdit}
          incidente={element}
          PlanSeguridad={element.PlanSeguridad}
        />
      </td>
      <td>
        <Delete
          trigger={<IconTrash cursor='pointer' color='#228be6' />}
          handler={onDelete}
          incidente={element.Id}
          PlanSeguridad={element.PlanSeguridad}
        />
      </td>
      <td>
        <Tooltip label='Plan de respuesta'>
          <Link to={`./${element.Id}/planrespuesta`}>
            <IconAd2 cursor='pointer' color='#228be6' />
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
            <th>ID</th>

            <th>Fecha Inicio</th>
            <th>Fecha Fin</th>
            <th>ProcesoAfectado</th>
            <th>Nombre</th>
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
