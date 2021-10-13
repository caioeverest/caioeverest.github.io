import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import FormGroup from '@mui/material/FormGroup'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'

import {
  GitHub,
  LinkedIn,
  Mail,
  Twitter
} from '@mui/icons-material'

const Contact = () => {
  return (
    <Container>
      <Box><Typography variant="h2">Contact</Typography></Box>
      <Grid container  spacing={{ xs: 1, md: 1 }} columns={{ xs: 1, md: 12 }}>
        <Grid item md={4} xs={1}>
          <Paper>
            <Container>
              You can found me in a lot of places likes these!
              <Box>
                <Link href="https://github.com/caioeverest" color="inherit" underline="none"><GitHub fontSize="large"/></Link>
                <Link href="https://www.linkedin.com/in/caioeverest" color="inherit" underline="none"><LinkedIn fontSize="large"/></Link>
                <Link href="mailto:caioeverest.b@gmail.com" color="inherit" underline="none"><Mail fontSize="large"/></Link>
                <Link href="https://twitter.com/caioeverest" color="inherit" underline="none"><Twitter fontSize="large"/></Link>
              </Box>
            </Container>
          </Paper>
        </Grid>
        <Grid item md={8} xs={1}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
              <FormControl fullWidth sx={{ m: 1 }} required variant="outlined">
                <InputLabel htmlFor="outlined-required">Name</InputLabel>
                <OutlinedInput
                  id="outlined-required"
                  label="Name"
                  placeholder="Your name"
                />
              </FormControl>
              <FormControl fullWidth sx={{ m: 1 }} required variant="outlined">
                <InputLabel htmlFor="outlined-required">e-mail</InputLabel>
                <OutlinedInput
                  id="outlined-required"
                  label="Email"
                  placeholder="Your e-mail"
                />
              </FormControl>
              <FormControl fullWidth sx={{ m: 1 }} required>
                <InputLabel htmlFor="outlined-required">Subject</InputLabel>
                <OutlinedInput
                  id="outlined-required"
                  label="Subject"
                  placeholder="What we will talk about?"
                />
              </FormControl>
              <FormControl fullWidth sx={{ m: 1 }} required>
                <InputLabel htmlFor="outlined-required">Message</InputLabel>
                <OutlinedInput
                  id="outlined-required"
                  label="Message"
                  multiline
                  rows={4}
                  placeholder="Something..."
                />
              </FormControl>
              <Button sx={{ m: 1 }} variant="contained">Submit</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Contact
