import React from 'react'
import { Modal, TextInput, Group, Button, Grid, Select, Checkbox, Stack, Textarea, Badge, Text } from '@mantine/core'
import { useForm } from '@mantine/form'
import { Opciones } from '../../API'

/* eslint-disable react/prop-types */
export default function Form({
  trigger: Trigger,
  handler,
  action = 'add',
  riesgo
}) {
  const [open, setOpen] = React.useState(false)
  const [ListaImpacto, setListaImpacto] = React.useState([])
  const [ListaPosibilidad, setListaPosibilidad] = React.useState([])
  const [ListaNivelRiesgo, setListaNivelRiesgo] = React.useState([])

  const form = useForm({
    initialValues: {
      Id: riesgo ? riesgo.Id : '',
      Nombre: riesgo ? riesgo.Nombre : '',
      AfectaCosto: riesgo ? riesgo.AfectaCosto : false,
      ValorCosto: riesgo ? riesgo.ValorCosto : null,
      AfectaTiempo: riesgo ? riesgo.AfectaTiempo : false,
      AfectaAlcance: riesgo ? riesgo.AfectaAlcance : false,
      AfectaCalidad: riesgo ? riesgo.AfectaCalidad : false,
      IdPosibilidad: riesgo ? riesgo.IdPosibilidad : 0,
      IdImpacto: riesgo ? riesgo.IdImpacto : 0,
      Descripcion: riesgo ? riesgo.Descripcion : ''
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Correo Invalido')
    }
  })
  React.useState(() => {
    Opciones().Impacto().then(data => setListaImpacto(data)).catch(error => console.error(error))
    Opciones().Posibilidad().then(data => setListaPosibilidad(data)).catch(error => console.error(error))
    Opciones().NivelRiesgo().then(data => setListaNivelRiesgo(data)).catch(error => console.error(error))
  }, [])
  function submitForm() {
    handler({
      ...form.values,
      PuntajeImpacto: ListaImpacto.find(item => item.value === form.values.IdImpacto).puntaje,
      NivelImpacto: ListaImpacto.find(item => item.value === form.values.IdImpacto).label,
      PuntajePosibilidad: ListaPosibilidad.find(item => item.value === form.values.IdPosibilidad).puntaje,
      NivelPosibilidad: ListaPosibilidad.find(item => item.value === form.values.IdPosibilidad).label,
      NivelRiesgo: ListaPosibilidad.find(item => item.value === form.values.IdPosibilidad).puntaje * ListaImpacto.find(item => item.value === form.values.IdImpacto).puntaje,
      NivelRiesgoDescripcion: getNivelRiesgo(form.values.NivelRiesgo)
    })
    setOpen(false)
  }
  return (
    <>
      <div onClick={() => setOpen(true)}>{Trigger}</div>
      <Modal size="xl"
      centered
        opened={open}
        onClose={() => setOpen(false)}
        title='Nuevo Riesgo'
        gutter="xl">
          <form>
          <Grid grow gutter="xl">
            <Grid.Col md={4} xs={12}>
              <Stack >
              <TextInput
                label='Nombre'
                placeholder='Nombre'
                {...form.getInputProps('Nombre')}
              />

                <Select
                  label="Nivel de impacto"
                  id='IdImpacto'
                  placeholder="Escoja una opción"
                  itemComponent={ItemList}
                  {...form.getInputProps('IdImpacto')}
                  data={ListaImpacto}
                />

                <Select
                  label="Nivel de Posibilidad"
                  id='IdPosibilidad'
                  placeholder="Escoja una opción"
                  itemComponent={ItemList}
                  {...form.getInputProps('IdPosibilidad')}
                  data={ListaPosibilidad}
                />
                <span>
                  <Text size="lg">Nivel de Riesgo</Text>
                    <NivelRiesgoItem
                      puntaje={ getPuntaje(form.values.IdImpacto, form.values.IdPosibilidad) }
                      texto={ getNivelRiesgo(getPuntaje(form.values.IdImpacto, form.values.IdPosibilidad)) }
                      sx={{ height: '3rem', fontSize: '1.3rem' }}
                    />
                </span>
              </Stack>
            </Grid.Col>

            <Grid.Col lg={6} xs={12}>
            <Stack>
              <Text>Intereses Afectados</Text>
              <Group >
                <Checkbox label="Afecta Costo" radius="md" {...form.getInputProps('AfectaCosto', { type: 'checkbox' }) }/>
                {(form.getInputProps('AfectaCosto').value)
                  ? (<TextInput placeholder='$.' size='xs' {...form.getInputProps('ValorCosto') }/>)
                  : null}
              </Group>
              <Group >
                <Checkbox label="Afecta Tiempo" radius="md" {...form.getInputProps('AfectaTiempo', { type: 'checkbox' }) }/>
                {form.getInputProps('AfectaTiempo').value
                  ? (<TextInput size='xs' placeholder='Horas' {...form.getInputProps('ValorTiempo') }/>)
                  : null}
              </Group>

              <Group >
                 <Checkbox label="Afecta Calidad" radius="md" { ...form.getInputProps('AfectaCalidad', { type: 'checkbox' }) }/>
              </Group>
                <Textarea label="Descripción" placeholder="Descripción" minRows={6} maxRows={6} { ...form.getInputProps('Descripcion') }/>
                </Stack>
            </Grid.Col>
            <Group>
              <Button variant='contained' onClick={submitForm}> Mandar </Button>
              <Button variant='outline' onClick={() => setOpen(false) } >
                Random email
              </Button>
            </Group>
          </Grid>
          </form>
      </Modal>
    </>
  )
  function getPuntaje(IdImpacto, IdPosibilidad) {
    const impacto = ListaImpacto.find((item) => item.value === IdImpacto) || { puntaje: 0 }
    const posibilidad = ListaPosibilidad.find((item) => item.value === IdPosibilidad) || { puntaje: 0 }
    const nivelRiesgo = impacto.puntaje * posibilidad.puntaje
    return nivelRiesgo
  }
  function getNivelRiesgo(puntaje) {
    const nivelRiesgo = ListaNivelRiesgo.find((item) => {
      return puntaje >= item.ValorMinimo && puntaje <= item.ValorMaximo
    }) || { Descripcion: 'jeeee! altísimo' }
    return nivelRiesgo.Descripcion
  }
}
function ItemList({ label, puntaje, ...others }) {
  return (
    <Group { ... others }>
      <div>{ label }</div>
      <div>{ puntaje }</div>
    </Group>
  )
}

function NivelRiesgoItem({ puntaje, texto, ...others }) {
  let color = 'black'
  if (puntaje >= 1 && puntaje <= 4) {
    color = 'teal'
  } else if (puntaje >= 5 && puntaje <= 9) {
    color = 'orange'
  } else if (puntaje >= 10) {
    color = 'red'
  }
  if (puntaje !== 0) {
    return (
      <Badge color={color} fullWidth variant="filled" { ...others }>{`${puntaje} - ${texto}`}</Badge>
    )
  } else {
    return null
  }
}
