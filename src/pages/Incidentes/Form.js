/* eslint-disable multiline-ternary */
import React from 'react'
import {
  Modal,
  TextInput,
  Group,
  Button,
  Grid,
  Stack,
  Textarea
} from '@mantine/core'
import { DatePicker } from '@mantine/dates'
import { useForm } from '@mantine/form'
import dayjs from 'dayjs'
import { useParams } from 'react-router-dom'
/* eslint-disable react/prop-types */
export default function FormPS({
  trigger: Trigger,
  handler,
  action = 'add',
  incidente
}) {
  const [open, setOpen] = React.useState(false)
  const { PlanSeguridad } = useParams()
  const form = useForm({
    initialValues: {
      Id: incidente ? incidente.Id : '',
      PlanSeguridad: incidente ? incidente.PlanSeguridad : '',
      FechaInicio: incidente ? new Date(incidente.FechaInicio) : Date,
      FechaFin: incidente ? new Date(incidente.FechaFin) : Date,
      ProcesoAfectado: incidente ? incidente.ProcesoAfectado : '',
      Nombre: incidente ? incidente.Nombre : '',
      Descripcion: incidente ? incidente.Descripcion : ''
    }
  })
  function submitForm() {
    handler({
      PlanSeguridad,
      Id: form.values.Id,
      FechaInicio: dayjs(form.values.FechaInicio).format('YYYY-MM-DD'),
      FechaFin: dayjs(form.values.FechaFin).format('YYYY-MM-DD'),
      ProcesoAfectado: form.values.ProcesoAfectado,
      Nombre: form.values.Nombre,
      Descripcion: form.values.Descripcion
    })
    setOpen(false)
  }
  return (
    <>
      <div onClick={() => setOpen(true)}>{Trigger}</div>
      <Modal
        size='xl'
        centered
        opened={open}
        onClose={() => setOpen(false)}
        title='Nuevo incidente'
        gutter='xl'
      >
        <form>
          <Grid grow gutter='xl'>
            <Grid.Col md={4} xs={12}>
              <Stack>
                <DatePicker
                  placeholder='Selecciona una Fecha'
                  allowLevelChange={false}
                  label='Fecha Inicio'
                  {...form.getInputProps('FechaInicio')}
                />

                <TextInput
                  label='Proceso afectado'
                  {...form.getInputProps('ProcesoAfectado')}
                />
              </Stack>
            </Grid.Col>

            <Grid.Col lg={6} xs={12}>
              <Stack>
                <DatePicker
                  placeholder='Selecciona una Fecha'
                  allowLevelChange={false}
                  label='Fecha Fin'
                  {...form.getInputProps('FechaFin')}
                />
                <TextInput label='Nombre' {...form.getInputProps('Nombre')} />
              </Stack>
            </Grid.Col>
            <Grid.Col md={12} my={8}>
              <Textarea
                multiple
                rows={5}
                label='Descripción'
                {...form.getInputProps('Descripcion')}
              />
            </Grid.Col>
            <Group>
              <Button variant='contained' onClick={submitForm}>
                Guardar
              </Button>
              <Button variant='outline' onClick={() => setOpen(false)}>
                Cancelar
              </Button>
            </Group>
          </Grid>
        </form>
      </Modal>
    </>
  )
}
