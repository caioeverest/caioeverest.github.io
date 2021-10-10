import styled from 'styled-components'
import Container from '@mui/material/Container'

const Base = styled.div`
  width: 100%;
  height: 100vh;
  clear: both;
  float: left;
  align-items: center;
  display: flex;
`

export default function Section(props) {
  return (
    <Base id={props.id}>
      <Container flex={1} overflow="auto">
        {props.children}
      </Container>
    </Base>
  )
}

