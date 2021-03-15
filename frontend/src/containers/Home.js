import styled from 'styled-components'

import { Header } from './Header'
import { Search } from './Search'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Home = () => (
  <Container>
    <Header />
    <Search />
  </Container>
)
