import React from 'react'
import API from '../../API/index'
import {
  Container,
  Title,
  Text,
  Grid,
  TextInput,
  Table,
  Checkbox,
  Badge
} from '@mantine/core'
import moment from 'moment'
import { useParams } from 'react-router-dom'

const formatDate = (date) => moment(date).locale('es').format('DD/MMM/YYYY')

export default function Resumen() {
  const [resumen, setResumen] = React.useState([])
  const [PlanAccion, setPlanAccion] = React.useState([])
  const [Incidentes, setIncidentes] = React.useState([])
  const [RiesgosAsociados, setRiesgosAsociados] = React.useState([])
  const [PoliticasAsociadas, setPoliticasAsociadas] = React.useState([])
  const [PlanRespuesta, setPlanRespuesta] = React.useState([])
  const { PlanSeguridadId } = useParams()
  React.useEffect(() => {
    API()
      .Resumen()
      .getResume(PlanSeguridadId)
      .then((res) => {
        setResumen(res)
        setPlanAccion(res?.PlanAccion || [])
        setIncidentes(res?.Incidentes || [])
        setRiesgosAsociados(res?.RiesgosAsociados || [])
        setPoliticasAsociadas(res?.PoliticasAsociadas || [])
        setPlanRespuesta(res?.PlanRespuesta || [])
      })
  }, [])

  return (
    <Container>
      <Badge fullWidth style={{ padding: '1.2rem' }} color="dark" radius="sm">
        <Title color='blue.5' order={3}>{`Plan de seguridad ${
          resumen?.PlanSeguridad?.Identificador || ''
        }`}</Title>
      </Badge>

      <Grid>
        <Grid.Col span={4}>
          <TextInput
            placeholder='Fecha Inicio'
            label='Fecha Inicio'
            variant='filled'
            value={formatDate(resumen?.PlanSeguridad?.FechaInicio) || ''}
            radius='md'
            size='md'
            readOnly
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <TextInput
            placeholder='Fecha Fin'
            label='Fecha fin'
            variant='filled'
            value={formatDate(resumen?.PlanSeguridad?.FechaFin) || ''}
            radius='md'
            size='md'
            readOnly
          />
        </Grid.Col>
        <Grid.Col span={4}></Grid.Col>

        <Grid.Col span={4}>
          <TextInput
            label='Creado por:'
            variant='filled'
            value={resumen?.PlanSeguridad?.CreadoPor || ''}
            radius='md'
            size='md'
            readOnly
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <TextInput
            label='Autorizado por:'
            variant='filled'
            value={resumen?.PlanSeguridad?.AutorizadoPor || ''}
            radius='md'
            size='md'
            readOnly
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <TextInput
            label='Recursos:'
            variant='filled'
            value={resumen?.PlanSeguridad?.Recursos || ''}
            radius='md'
            size='md'
            readOnly
          />
        </Grid.Col>
      </Grid>

      <hr></hr>
      <Badge fullWidth style={{ padding: '1.2rem' }} color="dark" radius="sm">
        <Title color='blue.5' order={2}>
          Descripción
        </Title>
      </Badge>
      <Text>
        <div
          style={{
            textAlign: 'justify',
            textJustify: 'inter-word'
          }}
          dangerouslySetInnerHTML={{
            __html: resumen?.PlanSeguridad?.Descripcion || ''
          }}
        ></div>
      </Text>

      <hr></hr>
      <Badge fullWidth style={{ padding: '1.2rem' }} color="dark" radius="sm">
        <Title color='blue.5' order={2}>
          Plan de Acción
        </Title>
      </Badge>
      <Table>
        <thead>
          <tr>
            <th>Fecha Inicio</th>
            <th>Fecha Fin</th>
            <th>Responsable</th>
            <th>Auditor</th>
            <th>Descripcion</th>
          </tr>
        </thead>
        <tbody>
          {PlanAccion.map((item, idx) => (
            <tr key={idx}>
              <td>{formatDate(item.FechaInicio)}</td>
              <td>{formatDate(item.FechaFin)}</td>
              <td>{item.Responsable}</td>
              <td>{item.Auditor}</td>
              <td>{item.Descripcion}</td>
            </tr>
          )) || <tr></tr>}
        </tbody>
      </Table>

      <hr></hr>
      <Badge fullWidth style={{ padding: '1.2rem' }} color="dark" radius="sm">
        <Title order={2}>Políticas de seguridad asociadas</Title>
      </Badge>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Versión</th>
            <th>Creado</th>
            <th>Actualizado</th>
            <th>Autorizado</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {PoliticasAsociadas.map((item, idx) => (
            <tr key={idx}>
              <td>{item.Identificador}</td>
              <td>{item.Version}</td>
              <td>{formatDate(item.FechaCreado)}</td>
              <td>{formatDate(item.FechaActualizado)}</td>
              <td>{item.AutorizadoPor}</td>
              <td>{item.Nombre}</td>
            </tr>
          )) || <tr></tr>}
        </tbody>
      </Table>

      <hr></hr>
      <Badge fullWidth style={{ padding: '1.2rem' }} color="dark" radius="sm">
        <Title order={2}>Riesgos asociados</Title>
      </Badge>
      <Table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>¿Afecta Costo?</th>
            <th>¿Afecta Tiempo?</th>
            <th>¿Afecta Calidad?</th>
            <th>Costo</th>
            <th>Posiblidad</th>
            <th>Impacto</th>
            <th>Puntaje</th>
          </tr>
        </thead>
        <tbody>
          {RiesgosAsociados.map((item, idx) => (
            <tr key={idx}>
              <td>{item.Nombre}</td>
              <td>
                <Checkbox value={item.AfectaCosto} />
              </td>
              <td>
                <Checkbox value={item.AfectaTiempo} />
              </td>
              <td>
                <Checkbox value={item.AfectaCalidad} />
              </td>
              <td>{item.ValorCosto}</td>
              <td>{item.NivelPosibilidad}</td>
              <td>{item.NivelImpacto}</td>
              <td>{item.NivelRiesgo}</td>
            </tr>
          )) || <tr></tr>}
        </tbody>
      </Table>

      <hr></hr>
      <Badge fullWidth style={{ padding: '1.2rem' }} color="dark" radius="sm">
        <Title color='blue.5' order={2}>
          Incidentes
        </Title>
      </Badge>
      {Incidentes.map((item, idx) => (
        <>
          <Grid key={idx}>
            <Grid.Col span={12}>
              <Title order={4}> {`${idx + 1}. ${item.Nombre} `}</Title>
            </Grid.Col>
            <Grid.Col span={4}>
              <Text weight={700}>Inicio</Text>
              <Text>{formatDate(item.FechaInicio) || ''}</Text>
            </Grid.Col>
            <Grid.Col span={4}>
              <Text weight={700}>Fin</Text>
              <Text>{formatDate(item.FechaFin) || ''}</Text>
            </Grid.Col>
            <Grid.Col span={4}>
              <Text weight={700}>Proceso afectado</Text>
              <Text>{item.ProcesoAfectado || ''}</Text>
            </Grid.Col>

            <Grid.Col span={12}>
              <Text weight={700}>Descripción</Text>
              <Text>{item.Descripcion || ''}</Text>
            </Grid.Col>
          </Grid>
          <Title order={6}>Plan de respuesta</Title>
          <Table>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Responsable</th>
                <th>Descripcion</th>
              </tr>
            </thead>
            <tbody>
              {PlanRespuesta.map((PRespuesta, idx2) => {
                if (parseInt(PRespuesta.incidente) === parseInt(item.Id)) {
                  return (
                    <tr key={idx2}>
                      <td>{formatDate(PRespuesta.fecha)}</td>
                      <td>{PRespuesta.responsable}</td>
                      <td>{PRespuesta.descripcion}</td>
                    </tr>
                  )
                } else {
                  return null
                }
              })}
            </tbody>
          </Table>
        </>
      )) || <tr></tr>}
    </Container>
  )
}
