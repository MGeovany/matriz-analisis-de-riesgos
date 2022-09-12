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
  planRespuesta
}) {
  const [open, setOpen] = React.useState(false)
  const { PlanSeguridad, Incidente } = useParams()
  const form = useForm({
    initialValues: {
      Id: planRespuesta ? planRespuesta.Id : '',
      Fecha: planRespuesta ? new Date(planRespuesta.Fecha) : Date,
      Responsable: planRespuesta ? planRespuesta.Responsable : '',
      Descripcion: planRespuesta ? planRespuesta.Descripcion : ''
    }
  })
  function submitForm() {
    handler({
      PlanSeguridad,
      Incidente,
      Id: form.values.Id,
      Fecha: dayjs(form.values.Fecha).format('YYYY-MM-DD'),
      Responsable: form.values.Responsable,
      Descripcion: form.values.Descripcion
    })
    setOpen(false)
    form.reset()
  }
  return (
    <>
      <div onClick={() => setOpen(true)}>{Trigger}</div>
      <Modal
        size='xl'
        centered
        opened={open}
        onClose={() => setOpen(false)}
        title='Nuevo Plan respuesta'
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
                  {...form.getInputProps('Fecha')}
                />
              </Stack>
            </Grid.Col>

            <Grid.Col lg={12} xs={12}>
              <Stack>
                <Textarea
                  label='Descripcion'
                  {...form.getInputProps('Descripcion')}
                />
                <TextInput
                  label='Responsable'
                  {...form.getInputProps('Responsable')}
                />
              </Stack>
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
