import styled from 'styled-components'

import { ReactComponent as Logo } from '../assets/logo.svg'

const Container = styled.div`
  display: flex;
  padding: 0 15rem;
  height: 100px;
  width: 100%;

  @media screen and (max-width: 700px) {
    padding: 0;
  }
`

const GaLogo = styled(Logo)`
  width: 200px;

  @media screen and (max-width: 700px) {
    margin: 0 auto;
  }
`

export const Header = () => (
  <Container>
    <GaLogo />
  </Container>
)
