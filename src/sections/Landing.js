import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import styled, {keyframes} from 'styled-components'

const AvatarBlock = styled.div `
  min-width: 400px;
  min-height: 400px;
  position: relative;
  border-radius: 100%;
`

const KeyframesAvatar = keyframes`
  0% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  50% {
      border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }
  100% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
`

const MyAvatar = styled.div `
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  animation: ${KeyframesAvatar} 5s cubic-bezier(.55,-0.22,.42,1.24) infinite 1s;
  background-blend-mode: multiply;
  background-image: url("static/images/me.jpg");
`
// -webkit-box-shadow: inset 0px 0px 0px 18px rgba(255,255,255,.3);
// -moz-box-shadow: inset 0px 0px 0px 18px rgba(255,255,255,.3);
// box-shadow: inset 0px 0px 0px 18px rgba(255,255,255,.3);

const TitleKeyframes = keyframes`
  0% {
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    filter: blur(0px);
    opacity: 1;
  }
`

const Title = styled.div `
  animation: ${TitleKeyframes} 3s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
`

const Landing = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" spacing={{ xs: 2, md: 2 }} columns={{ xs: 1, md: 12 }}>
      <Grid item md={5} xs={1}>
        <Box>
          <AvatarBlock>
              <MyAvatar
                alt="Caio Everest"
                data-img-url="static/images/me.jpg"
              />
          </AvatarBlock>
        </Box>
      </Grid>
      <Grid item md={1} xs={1}/>
      <Grid item md={6} xs={1}>
        <Box>
          <Title>
            <Typography variant="h1">Caio Everest</Typography>
          </Title>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Landing
