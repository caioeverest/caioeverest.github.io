import React, { useState } from 'react'
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
import Stack from '@mui/material/Stack'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import emailService from '../services/email'

import {
  GitHub,
  LinkedIn,
  Mail,
  Twitter
} from '@mui/icons-material'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})


const Contact = () => {

  const [subject, setSubject] = useState({content: '', pristine: true, error: false})
  const [email, setEmail]     = useState({content: '', pristine: true, error: false})
  const [name, setName]       = useState({content: '', pristine: true, error: false})
  const [message, setMessage] = useState({content: '', pristine: true, error: false})
  const [snack, setSnack]     = useState(null)

  const onChange = (e, fn) => {
    let content = e.target.value
    let error = content == ''
    let pristine = false
    fn({content, error, pristine})
  }

  const sendEmail = async e => {
    e.preventDefault()
    if((name.error || name.pristine) || (subject.error || subject.pristine) || (email.error || email.pristine) || (message.error || message.pristine)) {
      setSnack({level: 'error', message: 'You must fill all fields before sending a message'})
      return
    }

    try {
      await emailService(subject.content, name.content, email.content, message.content)
      setSnack({level: 'success', message: 'Email sent with success!'})
    } catch(e) {
      setSnack({level: 'error', message: 'Fail to send the email'})
    }
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setSnack(null)
  }

  return (
    <Container>
      <Box><Typography variant="h2">Contact</Typography></Box>
      <Grid container  spacing={{ xs: 1, md: 1 }} columns={{ xs: 1, md: 12 }}>
        <Grid item md={4} xs={1}>
          <Paper>
            <Container sx={{ pt: 1.5, }}>
              You can found me in a lot of places likes these!
              <Box sx={{ display: 'flex', justifyContent: 'space-evenly', p: 1, m: 1 }}>
                <Container><Link target="_blank" href="https://github.com/caioeverest" color="inherit" underline="none"><GitHub fontSize="large"/></Link></Container>
                <Container><Link target="_blank" href="https://www.linkedin.com/in/caioeverest" color="inherit" underline="none"><LinkedIn fontSize="large"/></Link></Container>
                <Container><Link target="_blank" href="mailto:caioeverest.b@gmail.com" color="inherit" underline="none"><Mail fontSize="large"/></Link></Container>
                <Container><Link target="_blank" href="https://twitter.com/caioeverest" color="inherit" underline="none"><Twitter fontSize="large"/></Link></Container>
              </Box>
            </Container>
          </Paper>
        </Grid>
        <Grid item md={8} xs={1}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
              <form>
                <FormControl fullWidth sx={{ m: 1 }} required variant="outlined">
                  <InputLabel htmlFor="outlined-required">Name</InputLabel>
                  <OutlinedInput
                    id="outlined-required"
                    label="Name"
                    placeholder="Your name"
                    error={name.error}
                    onChange={e => onChange(e, setName)}
                  />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1 }} required variant="outlined">
                  <InputLabel htmlFor="outlined-required">E-mail</InputLabel>
                  <OutlinedInput
                    id="outlined-required"
                    label="Email"
                    type="email"
                    placeholder="Your e-mail"
                    error={email.error}
                    onChange={e => onChange(e, setEmail)}
                  />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1 }} required>
                  <InputLabel htmlFor="outlined-required">Subject</InputLabel>
                  <OutlinedInput
                    id="outlined-required"
                    label="Subject"
                    placeholder="What we will talk about?"
                    required={true}
                    error={subject.error}
                    onChange={e => onChange(e, setSubject)}
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
                    error={message.error}
                    onChange={e => onChange(e, setMessage)}
                  />
                </FormControl>
                <Button sx={{ m: 1 }} variant="contained" onClick={sendEmail}>Submit</Button>
              </form>
          </Box>
        </Grid>
      </Grid>
      { snack !== null &&
        <Snackbar open={snack != null} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={snack.level} sx={{ width: '100%' }}>
            {snack.message}
          </Alert>
        </Snackbar>
      }
    </Container>
  )
}

export default Contact
