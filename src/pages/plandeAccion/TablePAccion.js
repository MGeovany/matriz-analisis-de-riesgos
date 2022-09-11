/* eslint-disable react/prop-types */
import React from 'react'
import './PlanAccion.css'
import { Table } from '@mantine/core'
import { IconEye, IconTrash } from '@tabler/icons'
import Delete from './Delete'
import FormPA from './FormPA'
import dayjs from 'dayjs'

export function TablePAccion({ elements = [], onEdit, onDelete }) {
  const rows = elements.map((element, index) => (
    <tr key={index}>
      <td>{element.Id}</td>
      <td>{element.Responsable}</td>
      <td>{dayjs(element.FechaInicio).format('DD/MM/YYYY')}</td>
      <td>{dayjs(element.FechaFin).format('DD/MM/YYYY')}</td>
      <td>{element.Auditor}</td>
      <td>
      <FormPA
          trigger={<IconEye cursor='pointer' color='#228be6' />}
          handler={onEdit}
          accion={element}
          PlanSeguridad={element.PlanSeguridad}
        />
      </td>
      <td>
      <Delete
          trigger={<IconTrash cursor='pointer' color='#228be6' />}
          handler={onDelete}
          accion={element.Id}
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
                <th>Responsable</th>
                <th>Fecha Inicio</th>
                <th>Fecha Fin</th>
                <th>Auditor</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </div>
  )
}
