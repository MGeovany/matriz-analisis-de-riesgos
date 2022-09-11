/* eslint-disable multiline-ternary */
import React from 'react'
import {
  Modal,
  TextInput,
  Group,
  Button,
  Grid,
  Stack
} from '@mantine/core'
import { DatePicker } from '@mantine/dates'
import { RichTextEditor } from '@mantine/rte'
import { useForm } from '@mantine/form'
import dayjs from 'dayjs'
/* eslint-disable react/prop-types */
export default function FormP({
  trigger: Trigger,
  handler,
  action = 'add',
  politica
}) {
  const [open, setOpen] = React.useState(false)
  const form = useForm({
    initialValues: {
      Id: politica ? politica.Id : '',
      Nombre: politica ? politica.Nombre : '',
      Identificador: politica ? politica.Identificador : '',
      FechaCreado: politica ? politica.FechaCreado : Date,
      FechaActualizado: politica ? politica.FechaActualizado : Date,
      CreadorPor: politica ? politica.CreadorPor : '',
      Recursos: politica ? politica.Recursos : '',
      Version: politica ? politica.Version : '',
      AutorizadoPor: politica ? politica.AutorizadoPor : '',
      Descripcion: politica ? politica.Descripcion : ''
    }
  })
  function submitForm() {
    handler({
      Id: form.values.Id,
      Nombre: form.values.Nombre,
      Identificador: form.values.Identificador,
      FechaCreado: dayjs(form.values.FechaCreado).format('YYYY-MM-DD'),
      FechaActualizado: dayjs(form.values.FechaActualizado).format('YYYY-MM-DD'),
      CreadorPor: form.values.CreadorPor,
      AutorizadoPor: form.values.AutorizadoPor,
      Version: form.values.Version,
      Recursos: form.values.Recursos,
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
        title='Nueva Politica de Seguridad'
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
                placeholder="Selecciona una Fecha"
                allowLevelChange={false}
                label="Fecha Creado"
                {...form.getInputProps('FechaCreado')}
                />

                <DatePicker
                placeholder="Selecciona una Fecha"
                allowLevelChange={false}
                label="Fecha Actualizado"
                {...form.getInputProps('FechaActualizado')}
                />
                <TextInput
                label='Creado Por'
                {...form.getInputProps('CreadorPor')}
                />
            </Stack>
            </Grid.Col>

            <Grid.Col lg={6} xs={12}>
            <Stack>
                <TextInput
                label='Nombre'
                {...form.getInputProps('Nombre')}
                />
                <TextInput
                label='Autorizado'
                {...form.getInputProps('AutorizadoPor')}
                />
                <TextInput
                label='Version'
                {...form.getInputProps('Version')}
                />
            </Stack>
            </Grid.Col>
            <Grid.Col md={12}>
            <RichTextEditor
                controls={[
                  ['bold', 'italic', 'underline', 'link', 'image'],
                  ['unorderedList', 'h1', 'h2', 'h3'],
                  ['alignLeft', 'alignCenter', 'alignRight']]}
                placeholder='Descripción'
                sticky={true}
                stickyOffset={40}
                {...form.getInputProps('Descripcion')}/>
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
//   function ItemList({ label, puntaje, ...others }) {
//     return (
//       <Group {...others}>
//         <div>{label}</div>
//         <div>{puntaje}</div>
//       </Group>
//     )
//   }
