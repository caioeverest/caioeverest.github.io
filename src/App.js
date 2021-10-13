import * as React from 'react'
import Container from '@mui/material/Container'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Stack from '@mui/material/Stack'

import Nav from './elements/Nav'
import Section from './elements/Section'
import Landing from './sections/Landing'
import AboutMe from './sections/AboutMe'
import Contact from './sections/Contact'

const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

export default function App() {
  const [mode, setMode] = React.useState('dark')

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    [],
  )

  const theme = React.useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: 'Rubik, sans-serif',
        },
        palette: {
          primary: {
            main: '#3c215c',
          },
          secondary: {
            main: '#971243',
          },
          mode,
        },
      }),
    [mode],
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Nav ColorModeContext={ColorModeContext}/>
        <Stack spacing={2}>
          <Section sx={{bgcolor: 'primary.dark'}} id="home"><Landing/></Section>
          <Section id="about-me"><AboutMe/></Section>
          <Section id="contact"><Contact/></Section>
        </Stack>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
