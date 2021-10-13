import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'

const Item = Box

const AboutMe = () => {
  return (
    <Container>
      <Grid container justifyContent="center" alignItems="center" spacing={{ xs: 1, md: 2 }} columns={{ xs: 1, md: 12 }}>
        <Grid item md={12} xs={1}>
          <Stack spacing={2}>
            <Item>
              <Typography variant="h2">Hello there 🖖</Typography>

              <img alt="Hello there" align="right" src="https://media3.giphy.com/media/Nx0rz3jtxtEre/200.gif"></img>
              <Typography variant="body1" gutterBottom>
                I'm Caio Everest, a computer scientist and a software engineer. I've worked on backend, frontend and mobile as a developer
                but specialized on backend, focusing on the area of distributed transactions. I am also a enthusiast of IoT and of integrating
                our everyday more with technology :).

                Currently, I'm working at <a href="https://cloudwalk.io">CloudWalk</a> as a Software Engineer.
              </Typography>
            </Item>

            <Item>
              <Typography variant="h2">GopheRio</Typography>

              <img align="left" src="https://i.imgur.com/zmxMolD.png" alt="Gopher" width="123em"></img>

              <Typography variant="body1" gutterBottom>
                In 2019 I, <a href="https://github.com/marcopollivier">@marcopollivier</a> and <a href="https://github.com/solivaf">@solivaf</a>,
                wanting to get more close to the Software Development Community, redesigned the Golang users group in Rio de Janeiro city.
                The <a href="https://www.meetup.com/GopheRio">GopheRio Meetup</a> was a great achievement for us and the golang community in Rio.
              </Typography>
            </Item>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  )
}

export default AboutMe
