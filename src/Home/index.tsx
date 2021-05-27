import React from 'react'

import {
  Container
} from './style'
import Header from '../components/Header'
import LeftContainer from './components/LeftContainer'

function Home () : JSX.Element {
  return (
    <Container>
      <Header notMaximize />
      <LeftContainer/>
    </Container>
  )
}

export default Home
