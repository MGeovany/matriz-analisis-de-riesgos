/* eslint-disable react/prop-types */
import React from 'react'
import { Table } from '@mantine/core'
import { IconEye, IconTrash } from '@tabler/icons'
import Delete from './Delete'
import FormP from './FormP'
import dayjs from 'dayjs'

export function TablePSecurity({ elements = [], onEdit, onDelete }) {
  const rows = elements.map((element, index) => (
    <tr key={index}>
      <td>{element.Identificador}</td>
      <td>{element.Nombre}</td>
      <td>{dayjs(element.FechaActualizado).format('DD/MM/YYYY')}</td>
      <td>{dayjs(element.FechaCreado).format('DD/MM/YYYY')}</td>
      <td>
      <FormP
          trigger={<IconEye cursor='pointer' color='#228be6' />}
          handler={onEdit}
          politica={element}
        />
      </td>
      <td>
      <Delete
          trigger={<IconTrash cursor='pointer' color='#228be6' />}
          handler={onDelete}
          politica={element.Id}
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
                <th>Nombre</th>
                <th>Fecha Actualizado</th>
                <th>Fecha Creado</th>
                <th>Ver</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </div>
  )
}
