import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Link, animateScroll } from "react-scroll"

export default function Nav(props) {
  const theme = useTheme()
  const colorMode = React.useContext(props.ColorModeContext)
  const scrollToTop = () => {
    animateScroll.scrollToTop()
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Button color="inherit">
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500}>
              home
            </Link>
          </Button>
          <Button color="inherit">
            <Link activeClass="active" to="about-me" spy={true} smooth={true} offset={-70} duration={500}>
              about-me
            </Link>
          </Button>
          <Button color="inherit">
            <Link activeClass="active" to="section-2" spy={true} smooth={true} offset={-70} duration={500}>
              section
            </Link>
          </Button>
          <Button color="inherit">
            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>
              contact
            </Link>
          </Button>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
