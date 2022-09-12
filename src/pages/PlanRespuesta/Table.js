/* eslint-disable react/prop-types */
import React from 'react'
import './PlanAccion.css'
import { Table } from '@mantine/core'
import { IconEye, IconTrash } from '@tabler/icons'
import Delete from './Delete'
import Form from './Form'
import dayjs from 'dayjs'

export function List({ elements = [], onEdit, onDelete }) {
  const rows = elements.map((element, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{dayjs(element.fecha).format('DD/MM/YYYY')}</td>
      <td>{element.responsable}</td>
      <td>{element.descripcion}</td>
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
            <th>Fecha</th>
            <th>Responsable</th>
            <th>Descripcion</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  )
}
