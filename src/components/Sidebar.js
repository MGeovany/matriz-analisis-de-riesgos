import React, { useState } from 'react'
import { createStyles, Navbar, Group, Text } from '@mantine/core'
import {
  IconLayoutDashboard,
  IconAlertTriangle,
  IconBooks,
  IconTimeline,
  IconLogout,
  IconCalendarEvent
} from '@tabler/icons'
import { Link } from 'react-router-dom'
import './SidebarStyles.css'

const useStyles = createStyles((theme, _params, getRef) => {
  return {
    navbar: {
      backgroundColor: theme.colors.dark[5],
      height: '100vh'
    },

    header: {
      paddingBottom: theme.spacing.md,
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      marginBottom: theme.spacing.md * 2.5,
      marginTop: theme.spacing.md,
      borderBottom: `1px solid ${theme.colors.gray[7]}`
    },

    section: {
      color: theme.white
    },

    footer: {
      color: theme.white,

      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${theme.colors.gray[7]}`
    },

    link: {
      ...theme.fn.focusStyles(),
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontSize: theme.fontSizes.sm,
      marginTop: theme.spacing.lg,
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      '&:hover': {
        backgroundColor: theme.colors.dark[7]
      }
    }
  }
})

const data = [
  { label: 'Dashboard', icon: IconLayoutDashboard, route: '/' },
  { label: 'Riesgos', icon: IconAlertTriangle, route: '/riesgos' },
  {
    label: 'Planes de contingencia',
    icon: IconTimeline,
    route: '/planes'
  },
  { label: 'Procesos', icon: IconBooks, route: '/procesos' },
  { label: 'Eventos', icon: IconCalendarEvent, route: '/eventos' }
]

export const Sidebar = () => {
  const { classes, cx } = useStyles()
  const [active, setActive] = useState('Dashboard')

  const links = data.map((item) => (
    <Link
      key={item.label}
      className={cx(classes.link, {
        [classes.linkActive]: active === item.label
      })}
      to={item.route}
      onClick={(event) => {
        event.preventDefault()
        setActive(item.label)
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <Text sx={{ paddingLeft: '15px' }}>{item.label}</Text>
    </Link>
  ))

  return (
    <Navbar height={700} width={{ sm: 300 }} p='md' className={classes.navbar}>
      <Navbar.Section grow className={classes.section}>
        <Group className={classes.header} position='apart'>
          <Text sx={{ fontWeight: 700 }}>Matriz de Analisis de Riesgos 👷‍♂️</Text>
        </Group>
        {links}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <a
          href='#'
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <Text sx={{ paddingLeft: '15px' }}>Cerrar Sesion</Text>
        </a>
      </Navbar.Section>
    </Navbar>
  )
}
