/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Modal, Group, Button, Grid, Text } from '@mantine/core'

export default function Eliminar({ trigger: Trigger, handler, riesgo }) {
  const [open, setOpen] = useState(false)

  function submitForm() {
    handler(riesgo)
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
        title={`Eliminar riesgo ${riesgo}`}
        gutter='xl'
      >
        <Grid>
          <Grid.Col span={12}>
            <Text size='xl'>
              ¿Está seguro que desea eliminar el siguiente item?
            </Text>
          </Grid.Col>
          <Grid.Col span={12}>
            <Group position='right'>
              <Button variant='contained' color='red' onClick={submitForm}>
                Confirmar
              </Button>
              <Button variant='outline' onClick={() => setOpen(false)}>
                Cancelar
              </Button>
            </Group>
          </Grid.Col>
        </Grid>
        <Modal
          size='xl'
          centered
          opened={open}
          onClose={() => setOpen(false)}
          title={`Eliminar riesgo ${riesgo}`}
          gutter='xl'
        >
          <Grid>
            <Grid.Col span={12}>
              <Text size='xl'>
                ¿Está seguro que desea eliminar el siguiente item?
              </Text>
            </Grid.Col>
            <Grid.Col span={12}>
              <Group position='right'>
                <Button variant='contained' color='red' onClick={submitForm}>
                  Confirmar
                </Button>
                <Button variant='outline' onClick={() => setOpen(false)}>
                  Cancelar
                </Button>
              </Group>
            </Grid.Col>
          </Grid>
        </Modal>
      </Modal>
    </>
  )
}
