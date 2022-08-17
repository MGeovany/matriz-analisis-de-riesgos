import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { MantineProvider } from '@mantine/core'
import { CustomFonts } from './utils/CustomFonts'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <MantineProvider
    theme={{
      fontFamily: 'Sen, sans-serif',
      colors: {
        darkblue: '#12131c'
      }
    }}
  >
    <App />
  </MantineProvider>
)
