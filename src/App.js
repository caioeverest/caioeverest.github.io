import * as React from 'react'
import Container from '@mui/material/Container'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Stack from '@mui/material/Stack'

import Nav from './elements/Nav'
import Section from './elements/Section'
import Landing from './sections/Landing'
import AboutMe from './sections/AboutMe'

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
          fontFamily: 'Mulish',
        },
        palette: {
          primary: {
            main: '#301b70',
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
        <Container>
          <Stack spacing={2}>
            <Section id="home"><Landing/></Section>
            <Section id="about-me"><AboutMe/></Section>
            <Section id="section-2">Section 2</Section>
            <Section id="contact">Section 3</Section>
          </Stack>
        </Container>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
