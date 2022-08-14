import React from 'react'
import { Table } from '@mantine/core'
import './RiesgosStyles.css'
import './TablaRiesgo.css'
import { IconEye, IconTrash } from '@tabler/icons'

const ojo =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/OOjs_UI_icon_eye-progressive.svg/1024px-OOjs_UI_icon_eye-progressive.svg.png'
const borrar =
  'https://www.shareicon.net/data/512x512/2017/06/21/887258_delete_512x512.png'

const elements = [
  {
    name: 'Incendio',
    impact: 'Alto',
    prob: 'Alto',
    risk: 'Alto',
    view: <img className='ojo' src={ojo} />,
    delete: <img className='borrar' src={borrar} />
  },
  {
    name: 'Incendio',
    impact: 'Alto',
    prob: 'Alto',
    risk: 'Alto',
    view: <img className='ojo' src={ojo} />,
    delete: <img className='borrar' src={borrar} />
  },
  {
    name: 'Incendio',
    impact: 'Alto',
    prob: 'Alto',
    risk: 'Alto',
    view: <img className='ojo' src={ojo} />,
    delete: <img className='borrar' src={borrar} />
  },
  {
    name: 'Incendio',
    impact: 'Alto',
    prob: 'Alto',
    risk: 'Alto',
    view: <img className='ojo' src={ojo} />,
    delete: <img className='borrar' src={borrar} />
  },
  {
    name: 'Incendio',
    impact: 'Alto',
    prob: 'Alto',
    risk: 'Alto',
    view: <img className='ojo' src={ojo} />,
    delete: <img className='borrar' src={borrar} />
  },
  {
    name: 'Incendio',
    impact: 'Alto',
    prob: 'Alto',
    risk: 'Alto',
    view: <img className='ojo' src={ojo} />,
    delete: <img className='borrar' src={borrar} />
  },
  {
    name: 'Incendio',
    impact: 'Alto',
    prob: 'Alto',
    risk: 'Alto',
    view: <img className='ojo' src={ojo} />,
    delete: <img className='borrar' src={borrar} />
  },
  {
    name: 'Incendio',
    impact: 'Alto',
    prob: 'Alto',
    risk: 'Alto',
    view: <img className='ojo' src={ojo} />,
    delete: <img className='borrar' src={borrar} />
  },
  {
    name: 'Incendio',
    impact: 'Alto',
    prob: 'Alto',
    risk: 'Alto',
    view: <img className='ojo' src={ojo} />,
    delete: <img className='borrar' src={borrar} />
  },
  {
    name: 'Incendio',
    impact: 'Alto',
    prob: 'Alto',
    risk: 'Alto',
    view: <img className='ojo' src={ojo} />,
    delete: <img className='borrar' src={borrar} />
  },
  {
    name: 'Incendio',
    impact: 'Alto',
    prob: 'Alto',
    risk: 'Alto',
    view: <img className='ojo' src={ojo} />,
    delete: <img className='borrar' src={borrar} />
  },
  {
    name: 'Incendio',
    impact: 'Alto',
    prob: 'Alto',
    risk: 'Alto',
    view: <img className='ojo' src={ojo} />,
    delete: <img className='borrar' src={borrar} />
  },
  {
    name: 'Incendio',
    impact: 'Alto',
    prob: 'Alto',
    risk: 'Alto',
    view: <img className='ojo' src={ojo} />,
    delete: <img className='borrar' src={borrar} />
  },
  {
    name: 'Incendio',
    impact: 'Alto',
    prob: 'Alto',
    risk: 'Alto',
    view: <img className='ojo' src={ojo} />,
    delete: <img className='borrar' src={borrar} />
  }
]

export function TablaRiesgos() {
  const rows = elements.map((element, index) => (
    <tr key={element.name}>
      <td>{element.name}</td>
      <td>{element.impact}</td>
      <td>{element.prob}</td>
      <td>{element.risk}</td>
      <td>
        <IconEye cursor='pointer' color='#228be6' />
      </td>
      <td>
        <IconTrash cursor='pointer' color='#f05761' />
      </td>
    </tr>
  ))

  return (
    <div className='contenedorTabla'>
      <Table highlightOnHover>
        <thead>
          <tr>
            <th>Nombre de Riesgo</th>
            <th>Impacto</th>
            <th>Posibilidad</th>
            <th>Riesgo</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  )
}
