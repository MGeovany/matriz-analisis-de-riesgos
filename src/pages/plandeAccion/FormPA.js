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
  accion
}) {
  const [open, setOpen] = React.useState(false)
  const { PlanSeguridad } = useParams()
  const form = useForm({
    initialValues: {
      Id: accion ? accion.Id : '',
      PlanSeguridad: accion ? accion.PlanSeguridad : '',
      FechaInicio: accion ? accion.FechaInicio : Date,
      FechaFin: accion ? accion.FechaFin : Date,
      Responsable: accion ? accion.Responsable : '',
      Auditor: accion ? accion.Auditor : '',
      Descripcion: accion ? accion.Descripcion : ''
    }
  })
  function submitForm() {
    handler({
      PlanSeguridad,
      Id: form.values.Id,
      FechaInicio: dayjs(form.values.FechaInicio).format('YYYY-MM-DD'),
      FechaFin: dayjs(form.values.FechaFin).format('YYYY-MM-DD'),
      Responsable: form.values.Responsable,
      Auditor: form.values.Auditor,
      Descripcion: form.values.Descripcion
    })
  }
  return (
    <>
    <div onClick={() => setOpen(true)}>{Trigger}</div>
    <Modal
        size='xl'
        centered
        opened={open}
        onClose={() => setOpen(false)}
        title='Nuevo Plan de Accion'
        gutter='xl'
    >
        <form>
        <Grid grow gutter='xl'>
            <Grid.Col md={4} xs={12}>
            <Stack>
                <DatePicker
                placeholder="Selecciona una Fecha"
                allowLevelChange={false}
                label="Fecha Inicio"
                {...form.getInputProps('FechaInicio')}
                />

                <TextInput
                label='Responsable'
                {...form.getInputProps('Responsable')}
                />
            </Stack>
            </Grid.Col>

            <Grid.Col lg={6} xs={12}>
            <Stack>
                <DatePicker
                placeholder="Selecciona una Fecha"
                allowLevelChange={false}
                label="Fecha Fin"
                {...form.getInputProps('FechaFin')}
                />
                <TextInput
                label='Auditor'
                {...form.getInputProps('Auditor')}
                />
            </Stack>
            </Grid.Col>
            <Grid.Col md={12} my={8}>
            <Textarea
                label='Descripcion'
                {...form.getInputProps('Descripcion')}/>
            </Grid.Col>
            <Group>
            <Button variant='contained' onClick={submitForm} >
                Crear Politica
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
