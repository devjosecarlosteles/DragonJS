import React, { useState } from 'react'

import {
  Container
} from './style'
import Header from '../components/Header'
import LeftContainer from './components/LeftContainer'
import RightContainer from './components/RightContainer'

function Home () : JSX.Element {
  const [ rightContainerShowState, setRightContainerShowState ] = useState('no')
  function onChildChanged(bool: string) {
    setRightContainerShowState(bool);
  }
  return (
    <Container>
      <Header notMaximize />
      <main>
        <LeftContainer callbackParent={  (bool: string) => onChildChanged(bool) } />
        <RightContainer show={ rightContainerShowState } />
      </main>
    </Container>
  )
}

export default Home
