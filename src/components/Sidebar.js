import React, { useState } from 'react'
import { createStyles, Navbar, Group } from '@mantine/core'
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
  const icon = getRef('icon')
  return {
    navbar: {
      backgroundColor: theme.fn.variant({
        variant: 'filled',
        color: theme.primaryColor
      }).background
    },

    version: {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
          .background,
        0.1
      ),
      color: theme.white,
      fontWeight: 700
    },

    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 2.5,
      marginLeft: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark'
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
          .background,
        0.1
      )}`
    },

    link: {
      ...theme.fn.focusStyles(),
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontSize: theme.fontSizes.sm,
      color: theme.white,
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      '&:hover': {
        backgroundColor: theme.fn.lighten(
          theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
            .background,
          0.1
        )
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
      <span>{item.label}</span>
    </Link>
  ))

  return (
    <Navbar height={700} width={{ sm: 300 }} p='md'>
      <Navbar.Section grow>
        <Group className={classes.header} position='apart'>
          <span sx={{ fontWeight: 700 }}>Matriz de Analisis de Riesgos 👷‍♂️</span>
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
          <span>Cerrar Sesion</span>
        </a>
      </Navbar.Section>
    </Navbar>
  )
}
