import React from 'react'
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
      backgroundColor: theme.colors.darkblue,
      height: '100vh'
    },

    header: {
      paddingBottom: theme.spacing.lg * 1.7,
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
      marginTop: theme.spacing.xs,
      padding: `${theme.spacing.lg}px ${theme.spacing.sm}px`,
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
  const { classes } = useStyles()

  const links = data.map((item) => (
    <div key={item.label}>
      <Link to={item.route} className={classes.link}>
        <item.icon size={20} />
        <Text sx={{ paddingLeft: '15px' }} key={item.label}>
          {item.label}
        </Text>
      </Link>
    </div>
  ))

  return (
    <Navbar width={{ sm: 300 }} p='md' className={classes.navbar}>
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
