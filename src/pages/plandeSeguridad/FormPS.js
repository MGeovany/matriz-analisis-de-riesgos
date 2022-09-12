/* eslint-disable multiline-ternary */
import React from 'react'
import {
  Modal,
  TextInput,
  Group,
  Button,
  Grid,
  Stack,
  MultiSelect
} from '@mantine/core'
import { DatePicker } from '@mantine/dates'
import { RichTextEditor } from '@mantine/rte'
import { useForm } from '@mantine/form'
import { Opciones, PoliticasAsociadasPlan } from '../../API'
import dayjs from 'dayjs'

/* eslint-disable react/prop-types */
export default function FormPS({
  trigger: Trigger,
  handler,
  action = 'add',
  plan
}) {
  const [open, setOpen] = React.useState(false)
  const [PoliticaAsociadasList, setPoliticaAsociadasList] = React.useState([])
  React.useEffect(() => {
    Opciones()
      .PoliticaSeguridad()
      .then((data) => setPoliticaAsociadasList(data))
      .catch((err) => console.error(err))
    getPoliticasAsociadasById()
  }, [])
  function getPoliticasAsociadasById() {
    if (plan) {
      PoliticasAsociadasPlan()
        .get(plan.Id)
        .then((data) => form.setFieldValue('politicas', data))
    }
  }

  const form = useForm({
    initialValues: {
      Id: plan ? plan.Id : '',
      Identificador: plan ? plan.Identificador : '',
      FechaInicio: plan ? new Date(plan.FechaInicio) : Date,
      FechaFin: plan ? new Date(plan.FechaFin) : Date,
      Recursos: plan ? plan.Recursos : '',
      CreadoPor: plan ? plan.CreadoPor : '',
      AutorizadoPor: plan ? plan.AutorizadoPor : '',
      Descripcion: plan ? plan.Descripcion : '',
      politicas: []
    }
  })

  function submitForm() {
    handler(
      {
        Id: form.values.Id,
        Identificador: form.values.Identificador,
        FechaInicio: dayjs(form.values.FechaInicio).format('YYYY-MM-DD'),
        FechaFin: dayjs(form.values.FechaFin).format('YYYY-MM-DD'),
        Recursos: form.values.Recursos,
        CreadoPor: form.values.CreadoPor,
        AutorizadoPor: form.values.AutorizadoPor,
        Descripcion: form.values.Descripcion
      },
      form.values.politicas
    )
    form.reset()
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
        title='Nuevo Plan de Seguridad'
        gutter='xl'
      >
        <form>
          <Grid grow gutter='xl'>
            <Grid.Col md={4} xs={12}>
              <Stack>
                <TextInput
                  label='Identificador'
                  placeholder='Identificador'
                  {...form.getInputProps('Identificador')}
                />

                <DatePicker
                  placeholder='Selecciona una Fecha'
                  allowLevelChange={false}
                  label='Fecha Inicio'
                  {...form.getInputProps('FechaInicio')}
                />

                <DatePicker
                  placeholder='Selecciona una Fecha'
                  allowLevelChange={false}
                  label='Fecha Fin'
                  {...form.getInputProps('FechaFin')}
                />
                <TextInput
                  label='Recursos'
                  {...form.getInputProps('Recursos')}
                />
              </Stack>
            </Grid.Col>

            <Grid.Col lg={6} xs={12}>
              <Stack>
                <TextInput
                  label='Creado'
                  {...form.getInputProps('CreadoPor')}
                />
                <TextInput
                  label='Autorizado'
                  {...form.getInputProps('AutorizadoPor')}
                />
                <MultiSelect
                  data={PoliticaAsociadasList}
                  label='Politicas asociadas'
                  value={form.values.politicas}
                  onChange={(value) => {
                    form.setFieldValue('politicas', value)
                  }}
                ></MultiSelect>
              </Stack>
            </Grid.Col>
            <Grid.Col md={12}>
              <RichTextEditor
                controls={[
                  ['bold', 'italic', 'underline', 'link'],
                  ['unorderedList', 'h1', 'h2', 'h3'],
                  ['alignLeft', 'alignCenter', 'alignRight']
                ]}
                placeholder='Descripción'
                sticky={true}
                stickyOffset={40}
                {...form.getInputProps('Descripcion')}
              />
            </Grid.Col>
            <Group>
              <Button variant='contained' onClick={submitForm}>
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
