import React from 'react'
import { Global } from '@mantine/core'
/* import regular from './fonts/AlbertSans-Regular.ttf'
import bold from './fonts/AlbertSans-Bold.ttf' */
import regular from './fonts/sen/Sen-Regular.ttf'
import bold from './fonts/sen/Sen-Bold.ttf'

export function CustomFonts() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Sen',
            src: `url('${regular}') format("woff2")`,
            fontWeight: 700,
            fontStyle: 'normal'
          }
        },
        {
          '@font-face': {
            fontFamily: 'Sen',
            src: `url('${bold}') format("woff2")`,
            fontWeight: 900,
            fontStyle: 'normal'
          }
        }
      ]}
    />
  )
}
